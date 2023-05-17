package command

import (
	"context"
	"fmt"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type PayooRefund struct {
	Reason    string `json:"reason" validate:"required"`
	PaymentId string `json:"payment_id" validate:"required"`
}

type PayooRefundHandler struct {
	payooTxRepo domain.PayooRepository
	payooClient service.Payoo
}

func NewPayooRefundHandler(
	payooTxRepo domain.PayooRepository,
	payooClient service.Payoo,
) PayooRefundHandler {
	if payooTxRepo == nil {
		panic("nil payooTxRepo")
	}

	if payooClient == nil {
		panic("nil payooClient")
	}

	return PayooRefundHandler{payooTxRepo, payooClient}
}

func (h PayooRefundHandler) Handle(ctx context.Context, cmd PayooRefund) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "PayooRefundHandler.Handle")
	defer span.End()
	// Get Tx
	tx, err := h.payooTxRepo.GetPayooTxByOrderId(ctx, cmd.PaymentId)
	if err != nil {
		tracing.TraceErr(span, err)
		return err
	}

	if tx == nil {
		logger.Errorf("not found, PaymentId: %s", cmd.PaymentId)
		return domain.ErrPayooNotFound
	}

	if !tx.IsPaid() {
		logger.Errorf("unpaid or failed, PaymentId: %s", cmd.PaymentId)
		return domain.ErrPayooUnpaidTx
	}

	if tx.IsRefunded() {
		logger.Errorf("already refunded, PaymentId: %s", cmd.PaymentId)
		return domain.ErrPayooAlreadyRefunded
	}

	refundParams := map[string]string{
		"orderId":      tx.OrderId,
		"orderAmount":  fmt.Sprintf("%s", tx.OrderAmount),
		"description":  "Refund transaction id " + tx.Id,
		"txId":         tx.Id,
		"purchaseDate": tx.CreateAt.Format("20060102150405"),
	}

	// Update Tx
	now := time.Now()
	refundAction := &domain.PayooTxAction{
		Action: domain.PayooTxActionType_REFUND,
		Status: domain.PayooTxStatus_SUCCESS,
		At:     &now,
	}

	err = h.payooClient.Refund(ctx, refundParams)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		refundAction.Status = domain.PayooTxStatus_FAIL
		refundAction.Note += fmt.Sprintf(", failed: %s", err)
	}
	tx.AddActions(refundAction)
	if err := h.payooTxRepo.UpdatePayooTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		return err
	}

	if refundAction.Status == domain.PayooTxStatus_FAIL {
		return domain.ErrPayooFailedRefund
	}

	return nil

}
