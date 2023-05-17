package command

import (
	"context"
	"fmt"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type PaypalCreateOrder struct {
	UserId      string  `json:"user_id" validate:"required"`
	OrderId     string  `json:"order_id" validate:"required"`
	OrderCode   string  `json:"order_code" validate:"required"`
	OrderDesc   string  `json:"order_desc" validate:"required"`
	OrderAmount float64 `json:"order_amount" validate:"required"`
	ServiceName string  `json:"service_name"`
}

type PaypalCreateOrderHandler struct {
	paypalTxRepo domain.PaypalTxRepository
	paypalClient service.Paypal
}

func NewPaypalCreateOrderHandler(
	paypalTxRepo domain.PaypalTxRepository,
	paypalClient service.Paypal,
) PaypalCreateOrderHandler {
	if paypalTxRepo == nil {
		panic("nil paypalTxRepo")
	}

	if paypalClient == nil {
		panic("nil paypalClient")
	}

	return PaypalCreateOrderHandler{paypalTxRepo, paypalClient}
}

func (h PaypalCreateOrderHandler) Handle(ctx context.Context, cmd PaypalCreateOrder) (string, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PaypalCreateOrderHandler.Handle")
	defer span.End()
	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrIncorrectValue
	}

	orderAmount := fmt.Sprintf("%.2f", cmd.OrderAmount)
	paypalReq := service.PaypalCreateOrderRequest{
		OrderId:     cmd.OrderId,
		OrderAmount: orderAmount,
		OrderDesc:   cmd.OrderDesc,
	}
	paypalRes, err := h.paypalClient.CreateOrder(ctx, paypalReq)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrInternalServer
	}

	// Save transaction.
	tx, err := domain.NewCreatedPaypalTx(
		paypalRes.PaypalOrderId,
		cmd.UserId,
		cmd.OrderId,
		cmd.OrderCode,
		cmd.OrderDesc,
		cmd.OrderAmount,
		domain.PaymentCurrency_USD,
	)
	if cmd.ServiceName != "" {
		tx.ServiceName = cmd.ServiceName
	}
	if err != nil {
		tracing.TraceErr(span, err)
		return "", err
	}

	if _, err := h.paypalTxRepo.AddPaypalTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrInternalServer
	}

	return paypalRes.ApproveURL, nil
}
