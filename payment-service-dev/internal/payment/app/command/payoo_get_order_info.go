package command

import (
	"context"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type PayooGetOrderInfoHandler struct {
	payooTxRepo domain.PayooRepository
	orderClient service.Order
	payooClient service.Payoo
}

func NewPayooGetOrderInfoHandler(
	payooTxRepo domain.PayooRepository,
	orderClient service.Order,
	payooClient service.Payoo,
) PayooGetOrderInfoHandler {

	if payooTxRepo == nil {
		panic("nil payooTxRepo")
	}

	if payooClient == nil {
		panic("nil payooClient")
	}
	if orderClient == nil {
		panic("nil orderClient")
	}

	return PayooGetOrderInfoHandler{
		payooClient: payooClient,
		orderClient: orderClient,
		payooTxRepo: payooTxRepo,
	}

}

func (h PayooGetOrderInfoHandler) Handle(ctx context.Context, orderId string) (*domain.PayooOrderInfoResponse, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PayooGetOrderInfoHandler.Handle")
	defer span.End()

	//Get order info
	tx, err := h.payooTxRepo.GetPayooTxByOrderId(ctx, orderId)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	if tx == nil {
		return nil, domain.ErrPayooNotFound
	}

	if tx.IsPaid() {
		return &domain.PayooOrderInfoResponse_PAID, nil
	}

	orderInfo, err := h.payooClient.GetOrderInfo(ctx, tx.OrderCode, tx.CreateAt)

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	// ResponseCode:
	//0 : Success
	//3 : Partner ID does not exist
	//8 : Order number does not exist
	//9 : Order unpaid
	if orderInfo.ResponseData.ResponseCode == 0 && !tx.IsPaid() {
		// Update Tx
		now := time.Now()
		payAction := &domain.PayooTxAction{
			Action: domain.PayooTxActionType_PAY,
			Status: domain.PayooTxStatus_SUCCESS,
			At:     &now,
		}
		tx.AddActions(payAction)
		if err := h.payooTxRepo.UpdatePayooTx(ctx, *tx); err != nil {
			tracing.TraceErr(span, err)
			logger.Error(err)
			return nil, err
		}

		// Notify order service to update order's payment status.
		req := service.UpdatePaymentRequest{
			PaymentId:        tx.Id,
			OrderId:          tx.OrderId,
			OrderCode:        tx.OrderCode,
			OrderAmount:      tx.OrderAmount,
			PaymentProvider:  domain.PaymentProvider_PAYOO,
			PaymentCurrency:  domain.PaymentCurrency_VND,
			IsPaymentSuccess: true,
			ServiceName:      tx.ServiceName,
		}
		err = h.orderClient.UpdatePayment(ctx, req)
		if err != nil {
			tracing.TraceErr(span, err)
			return nil, err
		}
		return orderInfo, nil
	}
	if orderInfo.ResponseData.ResponseCode == 9 && !tx.IsFailed() {
		// Update Tx
		now := time.Now()
		payAction := &domain.PayooTxAction{
			Action: domain.PayooTxActionType_PAY,
			Status: domain.PayooTxStatus_FAIL,
			At:     &now,
		}
		tx.AddActions(payAction)
		if err := h.payooTxRepo.UpdatePayooTx(ctx, *tx); err != nil {
			return nil, err
		}

		req := service.UpdatePaymentRequest{
			PaymentId:        tx.Id,
			OrderId:          tx.OrderId,
			OrderCode:        tx.OrderCode,
			OrderAmount:      tx.OrderAmount,
			PaymentProvider:  domain.PaymentProvider_PAYOO,
			PaymentCurrency:  domain.PaymentCurrency_VND,
			IsPaymentSuccess: false,
			Reason:           domain.PaymentFailReason_Failed,
			ServiceName:      tx.ServiceName,
		}
		err = h.orderClient.UpdatePayment(ctx, req)
		if err != nil {
			tracing.TraceErr(span, err)
			return nil, err
		}
		return orderInfo, nil
	}
	return &domain.PayooOrderInfoResponse_PENDING, nil
}
