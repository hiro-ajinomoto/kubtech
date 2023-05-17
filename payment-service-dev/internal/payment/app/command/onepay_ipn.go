package command

import (
	"context"
	"strconv"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type OnePayIPNHandler struct {
	onePayTxRepo domain.OnePayTxRepository
	onePayClient service.OnePay
	orderClient  service.Order
}

func NewOnePayIPNHandler(
	onePayTxRepo domain.OnePayTxRepository,
	onePayClient service.OnePay,
	orderClient service.Order,
) OnePayIPNHandler {
	if onePayTxRepo == nil {
		panic("nil onePayTxRepo")
	}

	if orderClient == nil {
		panic("nil orderClient")
	}

	if onePayClient == nil {
		panic("nil onePayClient")
	}

	return OnePayIPNHandler{onePayTxRepo, onePayClient, orderClient}
}

func (h *OnePayIPNHandler) Handle(ctx context.Context, params map[string]string) domain.OnePayResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "OnePayIPNHandler.Handle")
	defer span.End()

	checksumIsValid := h.onePayClient.ChecksumIsValid(params)
	if !checksumIsValid {
		return domain.OnePayErrChecksum
	}

	refId := params["vpc_MerchTxnRef"]
	paymentAmount := params["vpc_Amount"]
	responseCode := params["vpc_TxnResponseCode"]

	tx, err := h.onePayTxRepo.GetOnePayTxByRefId(ctx, refId)

	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("[OnePayIPN] GetOnePayTxByRefId Error: %+v", err)
		return domain.OnePayErrUnknown
	}
	logger.Infof("[OnePayIPN] TX refId %s: %+v", refId, tx)

	if tx == nil {
		return domain.OnePayErrOrderNotFound
	}

	logger.Infof("[OnePayIPN] TX IsPaid: %+v", tx.IsPaid())

	if tx.IsPaid() {
		return domain.OnePayOK
	}

	//if tx.IsConfirmed() {
	//	logger.Errorf("[OnePayIPN] Already confirmed, refId: %s", refId)
	//	return domain.OnePayErrOrderConfirmed
	//}

	orderAmount, err := strconv.ParseFloat(paymentAmount, 64)
	if err != nil {
		tracing.TraceErr(span, err)
		return domain.OnePayErrUnknown
	}

	// one pay rule
	orderAmount /= 100

	if orderAmount != tx.OrderAmount {
		logger.Errorf("[OnePayIPN] Invalid amount, expected: %f, actual: %f", tx.OrderAmount, orderAmount)
		return domain.OnePayErrInvalidAmount
	}

	// Save transaction.
	now := time.Now()
	isPaymentSuccess := responseCode == "0"
	failedReason := domain.PaymentFailReason_Failed
	payActionStatus := domain.OnePayTxStatus_FAIL
	if isPaymentSuccess {
		payActionStatus = domain.OnePayTxStatus_SUCCESS
		failedReason = domain.PaymentFailReason_OK
	}
	payAction := &domain.OnePayTxAction{
		Action: domain.OnePayTxActionType_PAY,
		Status: payActionStatus,
		At:     &now,
	}
	tx.AddActions(payAction)
	if err := h.onePayTxRepo.UpdateOnePayTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("[OnePayIPN] UpdateOnePayTx Error: %+v", err)
		return domain.OnePayErrUnknown
	}

	// Notify order service to update order's payment status.
	req := service.UpdatePaymentRequest{
		PaymentId:        tx.Id,
		OrderId:          tx.OrderId,
		OrderCode:        tx.OrderCode,
		OrderAmount:      tx.OrderAmount,
		PaymentProvider:  domain.PaymentProvider_ONEPAY,
		PaymentCurrency:  domain.PaymentCurrency_VND,
		IsPaymentSuccess: isPaymentSuccess,
		Reason:           failedReason,
		ServiceName:      tx.ServiceName,
	}

	logger.Debugf("[OnePayIPN] UpdatePaymentRequest Req: %+v", req)

	err = h.orderClient.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("[OnePayIPN] UpdatePayment Error: %+v", err)
		return domain.OnePayErrUnknown
	}

	return domain.OnePayOK
}
