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

type TixlabsIPN struct {
	PaymentProvider domain.PaymentProvider `json:"payment_provider,omitempty"`
	SecretCode      string                 `json:"secret_code" validate:"required"`
	OrderCode       string                 `json:"order_code" validate:"required"`
	OrderAmount     float64                `json:"order_amount" validate:"required"`
}

type TixlabsIPNHandler struct {
	secretCode        string
	tixlabsExpireTime time.Duration
	tixlabsTxRepo     domain.TixlabsTxRepository
	orderSvc          service.Order
}

func NewTixlabsIPNHandler(
	secretCode string,
	tixlabsExpireTimeSeconds uint64,
	tixlabsTxRepo domain.TixlabsTxRepository,
	orderSvc service.Order,
) TixlabsIPNHandler {
	if tixlabsTxRepo == nil {
		panic("nil tixlabsTxRepo")
	}

	if orderSvc == nil {
		panic("nil orderSvc")
	}

	expireTime := time.Duration(tixlabsExpireTimeSeconds) * time.Second
	return TixlabsIPNHandler{
		secretCode:        secretCode,
		tixlabsExpireTime: expireTime,
		tixlabsTxRepo:     tixlabsTxRepo,
		orderSvc:          orderSvc,
	}
}

func (h TixlabsIPNHandler) Handle(ctx context.Context, cmd *TixlabsIPN) domain.TixlabsResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "TixlabsIPNHandler.Handle")
	defer span.End()

	logger.Infof("%+v", cmd)

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TixlabsErrInvalidParams
	}

	if cmd.SecretCode != h.secretCode {
		return domain.TixlabsErrUnauthorized
	}

	tx, err := h.tixlabsTxRepo.GetTixlabsTxByOrderCode(ctx, cmd.OrderCode)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("failed to get tixlabs tx: %s, err: %s", cmd.OrderCode, err)
		return domain.TixlabsErrUnknown
	}

	if tx == nil {
		logger.Errorf("not found, id: %s", cmd.OrderCode)
		return domain.TixlabsErrOrderNotFound
	}

	if tx.IsPaid() {
		return domain.TixlabsErrOrderPaid
	}

	if tx.IsConfirmed() {
		return domain.TixlabsErrOrderConfirmed
	}

	if cmd.OrderAmount < tx.OrderAmount {
		return h.handleInvalidAmountPayment(ctx, tx, cmd.OrderAmount)
	}

	// Check expiration.
	now := time.Now()
	expiredTime := tx.CreatedAt.Add(h.tixlabsExpireTime)
	if expiredTime.Before(now) {
		return h.handleExpiredPayment(ctx, tx)
	}

	// Save transaction.
	payAction := &domain.TixlabsTxAction{
		Action: domain.TixlabsTxActionType_PAY,
		Status: domain.TixlabsTxStatus_SUCCESS,
		At:     &now,
	}
	tx.AddActions(payAction)
	if err := h.tixlabsTxRepo.UpdateTixlabsTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TixlabsErrUnknown
	}

	// Notify order service to update order's payment status.
	req := service.UpdatePaymentRequest{
		PaymentId:        tx.Id,
		OrderId:          tx.OrderId,
		OrderCode:        tx.OrderCode,
		OrderAmount:      tx.OrderAmount,
		PaymentProvider:  tx.Provider,
		PaymentCurrency:  domain.PaymentCurrency_VND,
		IsPaymentSuccess: true,
		ServiceName:      tx.ServiceName,
	}
	err = h.orderSvc.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TixlabsErrUnknown
	}

	return domain.TixlabsOK
}

func (h TixlabsIPNHandler) handleInvalidAmountPayment(
	ctx context.Context,
	tx *domain.TixlabsTx,
	failedAmount float64,
) domain.TixlabsResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "TixlabsIPNHandler.handleInvalidAmountPayment")
	defer span.End()

	logger.Infof("invalid amount, expected: %f, actual: %f", tx.OrderAmount, failedAmount)
	// Update failed transaction.
	now := time.Now()
	payAction := &domain.TixlabsTxAction{
		Action: domain.TixlabsTxActionType_PAY,
		Status: domain.TixlabsTxStatus_FAIL,
		At:     &now,
		Note:   fmt.Sprintf("invalid amount: %.2f", failedAmount),
	}
	tx.AddActions(payAction)
	if err := h.tixlabsTxRepo.UpdateTixlabsTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TixlabsErrUnknown
	}

	// Send event to order service.
	req := service.UpdatePaymentRequest{
		PaymentId:        tx.Id,
		OrderId:          tx.OrderId,
		OrderCode:        tx.OrderCode,
		OrderAmount:      failedAmount,
		PaymentProvider:  tx.Provider,
		PaymentCurrency:  domain.PaymentCurrency_VND,
		IsPaymentSuccess: false,
		Reason:           domain.PaymentFailReason_InvalidAmount,
		ServiceName:      tx.ServiceName,
	}
	err := h.orderSvc.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TixlabsErrUnknown
	}

	return domain.TixlabsErrInvalidAmount
}

func (h TixlabsIPNHandler) handleExpiredPayment(ctx context.Context, tx *domain.TixlabsTx) domain.TixlabsResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "TixlabsIPNHandler.handleExpiredPayment")
	defer span.End()

	logger.Infof("expired, orderCode: %s, orderId: %s", tx.OrderCode, tx.OrderId)

	// Update failed transaction.
	now := time.Now()
	payAction := &domain.TixlabsTxAction{
		Action: domain.TixlabsTxActionType_PAY,
		Status: domain.TixlabsTxStatus_FAIL,
		At:     &now,
		Note:   "expired",
	}
	tx.AddActions(payAction)
	if err := h.tixlabsTxRepo.UpdateTixlabsTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TixlabsErrUnknown
	}

	// Send event to order service.
	req := service.UpdatePaymentRequest{
		PaymentId:        tx.Id,
		OrderId:          tx.OrderId,
		OrderCode:        tx.OrderCode,
		OrderAmount:      tx.OrderAmount,
		PaymentProvider:  tx.Provider,
		PaymentCurrency:  domain.PaymentCurrency_VND,
		IsPaymentSuccess: false,
		Reason:           domain.PaymentFailReason_Expired,
		ServiceName:      tx.ServiceName,
	}
	err := h.orderSvc.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TixlabsErrUnknown
	}

	return domain.TixlabsErrExpired
}
