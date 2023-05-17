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

type VNPayRefund struct {
	Reason     string     `json:"reason" validate:"required"`
	PaymentId  string     `json:"payment_id" validate:"required"`
	CreateTime *time.Time `json:"create_time" validate:"required"`
}

type VNPayRefundHandler struct {
	vnpayTxRepo domain.VNPayTxRepository
	vnpayClient service.VNPay
}

func NewVNPayRefundHandler(
	vnpayTxRepo domain.VNPayTxRepository,
	vnpayClient service.VNPay,
) VNPayRefundHandler {
	if vnpayTxRepo == nil {
		panic("nil vnpayTxRepo")
	}

	if vnpayClient == nil {
		panic("nil vnpayClient")
	}

	return VNPayRefundHandler{vnpayTxRepo, vnpayClient}
}

func (h VNPayRefundHandler) Handle(ctx context.Context, cmd VNPayRefund) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "VNPayRefundHandler.Handle")
	defer span.End()

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrIncorrectValue
	}

	tx, err := h.vnpayTxRepo.GetVNPayTxById(ctx, cmd.PaymentId)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrInternalServer
	}

	if tx == nil {
		logger.Errorf("not found, PaymentId: %s", cmd.PaymentId)
		return domain.ErrVNPayNotFound
	}

	if !tx.IsPaid() {
		logger.Errorf("unpaid or failed, PaymentId: %s", cmd.PaymentId)
		return domain.ErrVNPayFailedRefund
	}

	if tx.IsRefunded() {
		logger.Errorf("already refunded, PaymentId: %s", cmd.PaymentId)
		return domain.ErrVNPayAlreadyRefunded
	}

	createDate := fmt.Sprint(cmd.CreateTime.In(domain.VNPayTZ).Format(domain.VNPayDateTimeFormat))
	vnpParams := map[string]string{}
	vnpParams["vnp_TxnRef"] = tx.RefId
	vnpParams["vnp_OrderInfo"] = fmt.Sprintf("Hoan tien cho giao dich %s", tx.RefId)
	vnpParams["vnp_Amount"] = fmt.Sprintf("%d", uint64(tx.OrderAmount*100))
	vnpParams["vnp_TransDate"] = createDate
	vnpParams["vnp_CreateDate"] = createDate

	// Save transaction.
	now := time.Now()
	refundAction := &domain.VNPayTxAction{
		Action: domain.VNPayTxActionType_REFUND,
		Status: domain.VNPayTxStatus_SUCCESS,
		At:     &now,
		Note:   cmd.Reason,
	}
	res, err := h.vnpayClient.Refund(vnpParams)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		refundAction.Status = domain.VNPayTxStatus_FAIL
		refundAction.Note += fmt.Sprintf(", failed: %s", err)
	}

	if res["vnp_ResponseCode"] != "00" {
		refundAction.Status = domain.VNPayTxStatus_FAIL
		refundAction.Note += fmt.Sprintf(", failed: vnp_ResponseCode=%s", res["vnp_ResponseCode"])
	}

	tx.AddActions(refundAction)
	if err := h.vnpayTxRepo.UpdateVNPayTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrInternalServer
	}

	// Got error when refunding, return bad request.
	if refundAction.Status == domain.VNPayTxStatus_FAIL {
		return domain.ErrVNPayFailedRefund
	}

	return nil
}
