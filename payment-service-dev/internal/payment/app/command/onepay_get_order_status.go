package command

import (
	"context"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type OnePayGetOrderStatus struct {
	RefId      string
	AppLang    string
	RetryTimes uint32
}

type OnePayGetOrderStatusHandler struct {
	onePayTxRepo  domain.OnePayTxRepository
	onePayClient  service.OnePay
	orderClient   service.Order
	paymentClient service.Payment
}

func NewOnePayGetOrderStatusHandler(
	onePayTxRepo domain.OnePayTxRepository,
	onePayClient service.OnePay,
	orderClient service.Order,
	paymentClient service.Payment,
) OnePayGetOrderStatusHandler {
	if onePayTxRepo == nil {
		panic("nil onePayTxRepo")
	}

	if orderClient == nil {
		panic("nil orderClient")
	}

	if onePayClient == nil {
		panic("nil onePayClient")
	}

	return OnePayGetOrderStatusHandler{onePayTxRepo, onePayClient, orderClient, paymentClient}
}

/*
  - orderId won't be implemeted on payment anymore due to changing from direct payment to Wallet and poing.
    this api just support to validate OnePay refId on Tixlabs system and check with OnePay.

*
*/
func (h OnePayGetOrderStatusHandler) Handle(ctx context.Context, cmd OnePayGetOrderStatus) domain.OnePayResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "OnePayGetOrderStatusHandler.Handle")
	defer span.End()

	refId := cmd.RefId
	locale := cmd.AppLang

	if locale != "vi" && locale != "en" {
		locale = "vi"
	}

	tx, err := h.onePayTxRepo.GetOnePayTxByRefId(ctx, refId)
	logger.Infof("[OnePayGetOrderStatus] TX: %+v", tx)

	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("[OnePayGetOrderStatus] GetOnePayTxByOrderId Error: %+v", err)
		return domain.OnePayErrUnknown
	}
	if tx == nil {
		return domain.OnePayErrOrderNotFound
	}

	logger.Infof("[OnePayGetOrderStatus] TX IsPaid: %+v", tx.IsPaid())

	if tx.IsPaid() {
		responseCode := "0"
		if val, ok := domain.OnePayResponseCodeByLocale[locale][responseCode]; ok {
			return domain.OnePayResponse{
				RspCode: responseCode,
				Message: val,
			}
		}
		return domain.OnePayOK
	}

	res, err := h.onePayClient.GetInvoicesInfo(tx.RefId)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("[OnePayGetOrderStatus] GetInvoicesInfo Error: %+v", err)
		return domain.OnePayErrUnknown
	}

	responseCode := res["vpc_TxnResponseCode"]

	// Save transaction.
	now := time.Now()

	paymentIsPendingOrProcessing := responseCode == "100" || responseCode == "300"
	if paymentIsPendingOrProcessing {
		if cmd.RetryTimes == 0 {
			err = h.orderClient.UpdatePaymentStatus(service.UpdatePaymentStatusRequest{
				OrderId:   tx.OrderId,
				OrderCode: tx.OrderCode,
				Status:    domain.OrderStatus_ORDER_STATUS_IN_PROGRESS,
			})
			if err != nil {
				tracing.TraceErr(span, err)
				logger.Errorf("[OnePayGetOrderStatus] UpdatePaymentStatus Error: %+v", err)
				return domain.OnePayErrUnknown
			}
		}
		err = h.paymentClient.RecheckPending(service.RecheckPending{
			TransactionId:   tx.Id,
			OrderId:         tx.OrderId,
			PaymentProvider: string(domain.PaymentProvider_ONEPAY),
			RetryTimes:      cmd.RetryTimes,
		})
		if err != nil {
			tracing.TraceErr(span, err)
			logger.Errorf("[OnePayGetOrderStatus] UpdatePaymentStatus Error: %+v", err)
			return domain.OnePayErrUnknown
		}
		if val, ok := domain.OnePayResponseCodeByLocale[locale][responseCode]; ok {
			return domain.OnePayResponse{
				RspCode: responseCode,
				Message: val,
			}
		}
		return domain.OnePayErrUnknown
	}

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
		logger.Errorf("[OnePayGetOrderStatus] UpdateOnePayTx Error: %+v", err)
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

	err = h.orderClient.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("[OnePayGetOrderStatus] UpdatePayment Error: %+v", err)
		return domain.OnePayErrUnknown
	}

	if val, ok := domain.OnePayResponseCodeByLocale[locale][responseCode]; ok {
		return domain.OnePayResponse{
			RspCode: responseCode,
			Message: val,
		}
	}

	return domain.OnePayErrUnknown

}
