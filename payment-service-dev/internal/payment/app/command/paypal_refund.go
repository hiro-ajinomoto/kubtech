package command

import (
	"context"
	"fmt"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type PaypalRefund struct {
	Reason    string `json:"reason" validate:"required"`
	PaymentId string `json:"payment_id" validate:"required"`
}

type PaypalRefundHandler struct {
	paypalTxRepo domain.PaypalTxRepository
	paypalClient service.Paypal
}

func NewPaypalRefundHandler(
	paypalTxRepo domain.PaypalTxRepository,
	paypalClient service.Paypal,
) PaypalRefundHandler {
	if paypalTxRepo == nil {
		panic("nil paypalTxRepo")
	}

	if paypalClient == nil {
		panic("nil paypalClient")
	}

	return PaypalRefundHandler{paypalTxRepo, paypalClient}
}

func (h PaypalRefundHandler) Handle(ctx context.Context, cmd PaypalRefund) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "PaypalRefundHandler.Handle")
	defer span.End()

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrIncorrectValue
	}

	tx, err := h.paypalTxRepo.GetPaypalTxById(ctx, cmd.PaymentId)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrInternalServer
	}

	if tx == nil {
		logger.Errorf("not found, PaymentId: %s", cmd.PaymentId)
		return domain.ErrPaypalNotFound
	}

	if !tx.IsPaid() {
		logger.Errorf("unpaid or failed, PaymentId: %s", cmd.PaymentId)
		return domain.ErrPaypalUnpaidTx
	}

	if tx.IsRefunded() {
		logger.Errorf("already refunded, PaymentId: %s", cmd.PaymentId)
		return domain.ErrPaypalAlreadyRefunded
	}

	// Save transaction.
	now := time.Now()
	refundAction := &domain.PaypalTxAction{
		Action: domain.PaypalTxActionType_REFUND,
		Status: domain.PaypalTxStatus_SUCCESS,
		At:     &now,
		Note:   cmd.Reason,
	}
	err = h.paypalClient.Refund(ctx, tx.PaypalCapturedId)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		refundAction.Status = domain.PaypalTxStatus_FAIL
		refundAction.Note += fmt.Sprintf(", failed: %s", err)
	}

	tx.AddActions(refundAction)
	if err := h.paypalTxRepo.UpdatePaypalTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrInternalServer
	}

	// Got error when refunding, return bad request.
	if refundAction.Status == domain.PaypalTxStatus_FAIL {
		return domain.ErrPaypalFailedRefund
	}

	return nil
}
