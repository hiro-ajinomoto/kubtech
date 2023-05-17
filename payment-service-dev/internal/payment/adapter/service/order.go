package service

import (
	"context"
	"encoding/json"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"

	cRabbitMQ "gitlab.bcasia.io/thuynga/apps/common/adapter/rabbitmq"
	"gitlab.bcasia.io/thuynga/apps/common/logger"

	appService "gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

// Order implements appService.Order interface in the app/service folder.
type Order struct {
	cfg *config.Schema
	mq  cRabbitMQ.MQ
}

func NewOrder(cfg *config.Schema, mq cRabbitMQ.MQ) *Order {
	if cfg == nil {
		panic("nil cfg")
	}

	if mq == nil {
		panic("nil mq")
	}

	return &Order{
		cfg: cfg,
		mq:  mq,
	}
}

func (o *Order) UpdatePayment(ctx context.Context, req appService.UpdatePaymentRequest) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Order.UpdatePayment")
	defer span.End()

	logger.Infof("Pushed msg %s with req: %+v", o.cfg.OrderPaymentRoute, req)
	data, err := json.Marshal(&req)
	if err != nil {
		tracing.TraceErr(span, err)
		return err
	}
	if req.ServiceName == domain.ServiceNameWallet {
		return o.mq.PushRawMessage(o.cfg.WalletExchange, o.cfg.WalletDepositProcessingRoute, data)
	}

	return o.mq.PushRawMessage(o.cfg.OrderExchange, o.cfg.OrderPaymentRoute, data)
}

func (o *Order) UpdatePaymentStatus(req appService.UpdatePaymentStatusRequest) error {
	logger.Infof("Pushed msg %s with req: %+v", o.cfg.OrderPaymentStatusRoute, req)
	data, err := json.Marshal(&req)
	if err != nil {
		return err
	}

	return o.mq.PushRawMessage(o.cfg.OrderExchange, o.cfg.OrderPaymentStatusRoute, data)
}
