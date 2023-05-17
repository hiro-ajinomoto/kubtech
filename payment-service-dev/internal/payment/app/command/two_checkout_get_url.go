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
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type TwoCheckoutGetURL struct {
	RemoteAddr    string     `json:"remote_addr"`
	PaymentMethod string     `json:"payment_method"`
	UserId        string     `json:"user_id" validate:"required"`
	OrderId       string     `json:"order_id" validate:"required"`
	OrderDesc     string     `json:"order_desc" validate:"required"`
	OrderAmount   float64    `json:"order_amount" validate:"required"`
	CreateTime    *time.Time `json:"create_time" validate:"required"`
	OrderCode     string     `json:"order_code" validate:"required"`
	ServiceName   string     `json:"service_name"`
}

type TwoCheckoutGetURLHandler struct {
	cfg               *config.Schema
	twoCheckoutTxRepo domain.TwoCheckoutTxRepository
	twoCheckoutClient service.TwoCheckout
}

func NewTwoCheckoutGetURLHandler(
	cfg *config.Schema,
	twoCheckoutTxRepo domain.TwoCheckoutTxRepository,
	twoCheckoutClient service.TwoCheckout,
) TwoCheckoutGetURLHandler {
	if twoCheckoutTxRepo == nil {
		panic("nil twoCheckoutTxRepo")
	}

	if twoCheckoutClient == nil {
		panic("nil twoCheckoutClient")
	}

	return TwoCheckoutGetURLHandler{
		cfg:               cfg,
		twoCheckoutTxRepo: twoCheckoutTxRepo,
		twoCheckoutClient: twoCheckoutClient,
	}
}

func (h TwoCheckoutGetURLHandler) Handle(ctx context.Context, cmd TwoCheckoutGetURL) (string, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "TwoCheckoutGetURLHandler.Handle")
	defer span.End()

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrIncorrectValue
	}

	checkoutParams := map[string]string{}
	checkoutParams["merchant"] = h.cfg.TwoCheckoutMerchantCode
	checkoutParams["prod"] = cmd.OrderCode
	checkoutParams["price"] = fmt.Sprintf("%.2f", cmd.OrderAmount)
	checkoutParams["expiration"] = fmt.Sprintf("%d", time.Now().Add(time.Duration(h.cfg.TwoCheckoutPaymentExpireTime)*time.Second).Unix())
	refId := fmt.Sprintf("%s__%d", cmd.OrderId, time.Now().Unix())
	checkoutParams["item-ext-ref"] = refId

	// Save transaction.
	tx, err := domain.NewOpenTwoCheckoutTx(
		refId,
		cmd.UserId,
		cmd.OrderId,
		cmd.OrderDesc,
		cmd.OrderCode,
		cmd.OrderAmount,
		domain.PaymentCurrency_USD,
	)
	if err != nil {
		tracing.TraceErr(span, err)
		return "", err
	}
	if cmd.ServiceName != "" {
		tx.ServiceName = cmd.ServiceName
	}
	if _, err := h.twoCheckoutTxRepo.AddTwoCheckoutTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrInternalServer
	}

	return h.twoCheckoutClient.PaymentURL(checkoutParams), nil
}
