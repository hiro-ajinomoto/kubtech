package command

import (
	"context"
	"strconv"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/vnpay"
)

type VNPayProcessIPNHandler struct {
	vnpayKey    string
	vnpayTxRepo domain.VNPayTxRepository
	orderClient service.Order
}

func NewVNPayProcessIPNHandler(
	vnpayKey string,
	vnpayTxRepo domain.VNPayTxRepository,
	orderClient service.Order,
) VNPayProcessIPNHandler {
	if vnpayTxRepo == nil {
		panic("nil vnpayTxRepo")
	}

	if orderClient == nil {
		panic("nil orderClient")
	}

	return VNPayProcessIPNHandler{vnpayKey, vnpayTxRepo, orderClient}
}

func (h VNPayProcessIPNHandler) Handle(ctx context.Context, params map[string]string) domain.VNPayResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "VNPayProcessIPNHandler.Handle")
	defer span.End()

	// Checksum
	if ok := vnpay.VerifyChecksum(h.vnpayKey, params); !ok {
		return domain.VNPayErrChecksum
	}

	refId := params["vnp_TxnRef"]
	paymentAmount := params["vnp_Amount"]
	responseCode := params["vnp_ResponseCode"]
	if refId == "" || paymentAmount == "" || responseCode == "" {
		logger.Error("missing critical data.")
		return domain.VNPayErrUnknown
	}

	tx, err := h.vnpayTxRepo.GetVNPayTxByRefId(ctx, refId)
	if err != nil {
		tracing.TraceErr(span, err)
		return domain.VNPayErrUnknown
	}

	if tx == nil {
		logger.Errorf("not found, refId: %s", refId)
		return domain.VNPayErrOrderNotFound
	}

	orderAmount, err := strconv.ParseFloat(paymentAmount, 64)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.VNPayErrUnknown
	}
	// VNPay rule: they multiply order amount by 100. So here we should convert back to
	// our correct amount.
	orderAmount /= 100

	if orderAmount != tx.OrderAmount {
		logger.Errorf("invalid amount, expected: %f, actual: %f", tx.OrderAmount, orderAmount)
		return domain.VNPayErrInvalidAmount
	}

	if tx.IsConfirmed() {
		logger.Errorf("already confirmed, refId: %s", refId)
		return domain.VNPayErrOrderConfirmed
	}

	// Save transaction.
	now := time.Now()
	isPaymentSuccess := responseCode == "00"
	failedReason := domain.PaymentFailReason_Failed
	payActionStatus := domain.VNPayTxStatus_FAIL
	if isPaymentSuccess {
		payActionStatus = domain.VNPayTxStatus_SUCCESS
		failedReason = domain.PaymentFailReason_OK
	}
	payAction := &domain.VNPayTxAction{
		Action: domain.VNPayTxActionType_PAY,
		Status: payActionStatus,
		At:     &now,
	}
	tx.AddActions(payAction)
	if err := h.vnpayTxRepo.UpdateVNPayTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		return domain.VNPayErrUnknown
	}

	// Notify order service to update order's payment status.
	req := service.UpdatePaymentRequest{
		PaymentId:        tx.Id,
		OrderId:          tx.OrderId,
		OrderCode:        tx.OrderCode,
		OrderAmount:      tx.OrderAmount,
		PaymentProvider:  domain.PaymentProvider_VNPAY,
		PaymentCurrency:  domain.PaymentCurrency_VND,
		IsPaymentSuccess: isPaymentSuccess,
		Reason:           failedReason,
		ServiceName:      tx.ServiceName,
	}
	err = h.orderClient.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		return domain.VNPayErrUnknown
	}

	return domain.VNPayOK
}
