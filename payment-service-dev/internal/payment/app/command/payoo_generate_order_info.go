package command

import (
	"context"
	"fmt"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type PayooGenerateOrderInfo struct {
	RemoteAddr    string     `json:"remote_addr"`
	PaymentMethod string     `json:"payment_method"`
	UserId        string     `json:"user_id" validate:"required"`
	OrderCode     string     `json:"order_code" validate:"required"`
	OrderId       string     `json:"order_id" validate:"required"`
	OrderDesc     string     `json:"order_desc" validate:"required"`
	OrderAmount   float64    `json:"order_amount" validate:"required"`
	CreateTime    *time.Time `json:"create_time" validate:"required"`
	BuyerName     string     `json:"buyer_name" validate:"required"`
	ServiceName   string     `json:"service_name"`
}

type PayooGenerateOrderInfoHandler struct {
	payooTxRepo domain.PayooRepository
	payooClient service.Payoo
}

func NewPayooGenerateOrderInfoHandler(
	payooTxRepo domain.PayooRepository,
	payooClient service.Payoo,
) PayooGenerateOrderInfoHandler {
	if payooTxRepo == nil {
		panic("nil payooTxRepo")
	}

	if payooClient == nil {
		panic("nil payooClient")
	}

	return PayooGenerateOrderInfoHandler{
		payooTxRepo: payooTxRepo,
		payooClient: payooClient,
	}
}

func (h PayooGenerateOrderInfoHandler) Handle(ctx context.Context, cmd PayooGenerateOrderInfo) (orderInfoXML string, checksum string, err error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PayooGenerateOrderInfoHandler.Handle")
	defer span.End()
	tx, err := h.payooTxRepo.GetPayooTxByOrderId(ctx, cmd.OrderId)

	if tx == nil && err == nil {
		tx, err = domain.NewOpenPayooTx(
			cmd.UserId,
			cmd.OrderId,
			cmd.OrderCode,
			cmd.OrderDesc,
			cmd.OrderAmount,
			domain.PaymentCurrency_VND,
		)
		if err != nil {
			tracing.TraceErr(span, err)
			return "", "", err
		}
		if cmd.ServiceName != "" {
			tx.ServiceName = cmd.ServiceName
		}
		// create transaction
		if _, err := h.payooTxRepo.AddPayooTx(ctx, *tx); err != nil {
			tracing.TraceErr(span, err)
			logger.Error(err)
			return "", "", domain.ErrInternalServer
		}
	}

	params := map[string]string{
		"orderId":         tx.OrderId,
		"orderCode":       cmd.OrderCode,
		"orderCashAmount": fmt.Sprintf("%.0f", tx.OrderAmount),
		"orderDesc":       tx.OrderDesc,
		"buyerName":       cmd.BuyerName,
	}

	return h.payooClient.GenerateOrderInfo(ctx, params)
}
