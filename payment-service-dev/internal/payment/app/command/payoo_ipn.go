package command

import (
	"context"
	"encoding/json"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/payoo"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type PayooIPNHandler struct {
	cfg         *config.Schema
	payooTxRepo domain.PayooRepository
	orderClient service.Order
	payooClient service.Payoo
}

func NewPayooIPNHandler(
	cfg *config.Schema,
	payooTxRepo domain.PayooRepository,
	orderSvc service.Order,
	payooClient service.Payoo,

) PayooIPNHandler {
	if cfg == nil {
		panic("nil cfg")
	}
	if payooTxRepo == nil {
		panic("nil payooTxRepo")
	}

	if payooClient == nil {
		panic("nil payooClient")
	}

	return PayooIPNHandler{
		cfg:         cfg,
		payooTxRepo: payooTxRepo,
		orderClient: orderSvc,
		payooClient: payooClient,
	}
}

func (h PayooIPNHandler) Handle(ctx context.Context, cmd domain.PayooIPNData) domain.PayooIPNResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "PayooIPNHandler.Handle")
	defer span.End()
	if !payoo.VerifyChecksum(h.cfg.PayooSecretKey, cmd.ResponseData, cmd.PayooIpAddress, cmd.Signature) {
		return domain.PayooIPNResponse_INVALID_CHECKSUM
	}

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.PayooIPNResponse_INVALID_DATA
	}
	ipnTransaction := domain.PayooOrderInfo{}

	err := json.Unmarshal([]byte(cmd.ResponseData), &ipnTransaction)

	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.PayooIPNResponse_INVALID_DATA
	}

	// Get Tx
	tx, err := h.payooTxRepo.GetPayooTxByOrderCode(ctx, ipnTransaction.OrderNo)

	if err != nil {
		tracing.TraceErr(span, err)
		return domain.PayooIPNResponse_UNKNOWN_ERROR
	}
	if tx == nil {
		return domain.PayooIPNResponse_ORDER_NOT_FOUND
	}

	if tx.IsPaid() {
		return domain.PayooIPNResponse_OK
	}

	// Payment successfully
	if ipnTransaction.PaymentStatus == 1 {
		if tx.OrderAmount != ipnTransaction.OrderCash {
			logger.Errorf("invalid amount, expected: %f, actual: %f", tx.OrderAmount, ipnTransaction.OrderCash)
			return domain.PayooIPNResponse_INVALID_AMOUNT
		}

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
			return domain.PayooIPNResponse_UNKNOWN_ERROR
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
			return domain.PayooIPNResponse_UNKNOWN_ERROR
		}
		return domain.PayooIPNResponse_OK
	}
	// Update Tx
	now := time.Now()
	payAction := &domain.PayooTxAction{
		Action: domain.PayooTxActionType_PAY,
		Status: domain.PayooTxStatus_FAIL,
		At:     &now,
	}
	tx.AddActions(payAction)
	if err := h.payooTxRepo.UpdatePayooTx(ctx, *tx); err != nil {
		return domain.PayooIPNResponse_UNKNOWN_ERROR
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
		return domain.PayooIPNResponse_UNKNOWN_ERROR
	}

	// Return "ok" to payoo backend break return this order payment status
	return domain.PayooIPNResponse_OK

}
