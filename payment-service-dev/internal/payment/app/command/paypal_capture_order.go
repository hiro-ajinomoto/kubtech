package command

import (
	"context"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type PaypalCaptureOrder struct {
	UserId        string `json:"user_id" validate:"required"`
	PaypalOrderId string `json:"paypal_order_id" validate:"required"`
}

type PaypalCaptureOrderHandler struct {
	paypalExpireTime time.Duration
	paypalTxRepo     domain.PaypalTxRepository
	paypalClient     service.Paypal
	orderSvc         service.Order
}

func NewPaypalCaptureOrderHandler(
	paypalExpireTimeSeconds uint64,
	paypalTxRepo domain.PaypalTxRepository,
	paypalClient service.Paypal,
	orderSvc service.Order,
) PaypalCaptureOrderHandler {
	if paypalTxRepo == nil {
		panic("nil paypalTxRepo")
	}

	if paypalClient == nil {
		panic("nil paypalClient")
	}

	if orderSvc == nil {
		panic("nil orderSvc")
	}

	paypalExpireTime := time.Duration(paypalExpireTimeSeconds) * time.Second
	return PaypalCaptureOrderHandler{paypalExpireTime, paypalTxRepo, paypalClient, orderSvc}
}

func (h PaypalCaptureOrderHandler) Handle(ctx context.Context, cmd PaypalCaptureOrder) (*domain.PaypalTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PaypalCaptureOrderHandler.Handle")
	defer span.End()

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return nil, domain.ErrIncorrectValue
	}

	tx, err := h.paypalTxRepo.GetPaypalTxByPaypalOrderId(ctx, cmd.PaypalOrderId)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	if tx == nil {
		return nil, domain.ErrPaypalNotFound
	}

	if tx.IsPaid() {
		return nil, domain.ErrAlreadyPaidOrder
	}

	// Check expiration.
	now := time.Now()
	expiredTime := tx.CreatedAt.Add(h.paypalExpireTime)
	if expiredTime.Before(now) {
		h.handleExpiredPayment(ctx, tx)
		return nil, domain.ErrPaypalExpiredTransaction
	}

	capturedAction := &domain.PaypalTxAction{
		Action: domain.PaypalTxActionType_CAPTURED,
		Status: domain.PaypalTxStatus_SUCCESS,
		At:     &now,
	}
	// Call to Paypal to confirm payment.
	paypalRes, err := h.paypalClient.CaptureOrder(ctx, cmd.PaypalOrderId)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		capturedAction.Status = domain.PaypalTxStatus_FAIL
		capturedAction.Note = err.Error()
	}

	if paypalRes.GotError() {
		logger.Error(paypalRes.GetErrorMessage())
		capturedAction.Status = domain.PaypalTxStatus_FAIL
		capturedAction.Note = paypalRes.GetErrorMessage()
	}

	tx.AddActions(capturedAction)
	tx.PaypalCapturedId = paypalRes.Id
	if err := h.paypalTxRepo.UpdatePaypalTx(ctx, *tx); err != nil {
		logger.Error(err)
		tracing.TraceErr(span, err)
		return nil, domain.ErrInternalServer
	}

	// Got error when capturing, return bad request.
	if capturedAction.Status == domain.PaypalTxStatus_FAIL {
		return nil, domain.ErrPaypalFailedCapture
	}

	// Notify order service to update order's payment status.
	req := service.UpdatePaymentRequest{
		PaymentId:        tx.Id,
		OrderId:          tx.OrderId,
		OrderCode:        tx.OrderCode,
		OrderAmount:      tx.OrderAmount,
		PaymentProvider:  domain.PaymentProvider_PAYPAL,
		PaymentCurrency:  domain.PaymentCurrency_USD,
		IsPaymentSuccess: true,
		ServiceName:      tx.ServiceName,
	}
	err = h.orderSvc.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return nil, domain.ErrInternalServer
	}

	return tx, nil
}

func (h PaypalCaptureOrderHandler) handleExpiredPayment(
	ctx context.Context,
	tx *domain.PaypalTx,
) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PaypalCaptureOrderHandler.handleExpiredPayment")
	defer span.End()

	logger.Infof("expired, paymentId: %s, orderId: %s", tx.Id, tx.OrderId)
	// Update failed transaction.
	now := time.Now()
	captureAction := &domain.PaypalTxAction{
		Action: domain.PaypalTxActionType_CAPTURED,
		Status: domain.PaypalTxStatus_FAIL,
		At:     &now,
		Note:   "expired",
	}
	tx.AddActions(captureAction)
	if err := h.paypalTxRepo.UpdatePaypalTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return
	}

	// Send event to order service.
	req := service.UpdatePaymentRequest{
		PaymentId:        tx.Id,
		OrderId:          tx.OrderId,
		OrderCode:        tx.OrderCode,
		OrderAmount:      tx.OrderAmount,
		PaymentProvider:  domain.PaymentProvider_PAYPAL,
		PaymentCurrency:  domain.PaymentCurrency_USD,
		IsPaymentSuccess: false,
		Reason:           domain.PaymentFailReason_Expired,
		ServiceName:      tx.ServiceName,
	}
	err := h.orderSvc.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
	}

}
