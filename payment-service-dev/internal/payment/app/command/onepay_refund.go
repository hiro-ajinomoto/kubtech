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

type OnePayRefund struct {
	Reason     string     `json:"reason" validate:"required"`
	PaymentId  string     `json:"payment_id" validate:"required"`
	CreateTime *time.Time `json:"create_time" validate:"required"`
}

type OnePayRefundHandler struct {
	OnePayTxRepo domain.OnePayTxRepository
	OnePayClient service.OnePay
}

func NewOnePayRefundHandler(
	OnePayTxRepo domain.OnePayTxRepository,
	OnePayClient service.OnePay,
) OnePayRefundHandler {
	if OnePayTxRepo == nil {
		panic("nil OnePayTxRepo")
	}

	if OnePayClient == nil {
		panic("nil OnePayClient")
	}

	return OnePayRefundHandler{OnePayTxRepo, OnePayClient}
}

func (h OnePayRefundHandler) Handle(ctx context.Context, cmd OnePayRefund) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "OnePayRefundHandler.Handle")
	defer span.End()

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrIncorrectValue
	}

	tx, err := h.OnePayTxRepo.GetOnePayTxById(ctx, cmd.PaymentId)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrInternalServer
	}

	if tx == nil {
		logger.Errorf("not found, PaymentId: %s", cmd.PaymentId)
		return domain.ErrOnePayNotFound
	}

	if !tx.IsPaid() {
		logger.Errorf("unpaid or failed, PaymentId: %s", cmd.PaymentId)
		return domain.ErrOnePayFailedRefund
	}

	if tx.IsRefunded() {
		logger.Errorf("already refunded, PaymentId: %s", cmd.PaymentId)
		return domain.ErrOnePayAlreadyRefunded
	}

	createDate := cmd.CreateTime.In(time.FixedZone("GMT+7", 7*60*60))
	createDateStr := fmt.Sprint(createDate.Format("20060102150405"))
	refundRefId := fmt.Sprintf("%s__refund__%s", tx.OrderCode, createDateStr)

	onePayParams := map[string]string{}
	onePayParams["vpc_MerchTxnRef"] = refundRefId
	onePayParams["vpc_OrgMerchTxnRef"] = tx.RefId
	onePayParams["vpc_OrderInfo"] = fmt.Sprintf("Hoan tien cho giao dich %s", tx.RefId)
	onePayParams["vpc_Amount"] = fmt.Sprintf("%d", uint64(tx.OrderAmount*100))
	onePayParams["vpc_Operator"] = tx.UserId

	// Save transaction.
	now := time.Now()
	refundAction := &domain.OnePayTxAction{
		Action: domain.OnePayTxActionType_REFUND,
		Status: domain.OnePayTxStatus_SUCCESS,
		At:     &now,
		Note:   cmd.Reason,
	}
	res, err := h.OnePayClient.Refund(onePayParams)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		refundAction.Status = domain.OnePayTxStatus_FAIL
		refundAction.Note += fmt.Sprintf(", failed: %s", err)
	}

	if res["vpc_TxnResponseCode"] != "0" {
		refundAction.Status = domain.OnePayTxStatus_FAIL
		refundAction.Note += fmt.Sprintf(", failed: vpc_TxnResponseCode=%s", res["vpc_TxnResponseCode"])
	}
	tx.AddActions(refundAction)
	if err := h.OnePayTxRepo.UpdateOnePayTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.ErrInternalServer
	}

	// Got error when refunding, return bad request.
	if refundAction.Status == domain.OnePayTxStatus_FAIL {
		return domain.ErrOnePayFailedRefund
	}

	return nil
}
