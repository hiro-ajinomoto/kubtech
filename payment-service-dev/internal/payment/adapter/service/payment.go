package service

import (
	"encoding/json"

	cRabbitMQ "gitlab.bcasia.io/thuynga/apps/common/adapter/rabbitmq"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	appService "gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type Payment struct {
	cfg *config.Schema
	mq  cRabbitMQ.MQ
}

func NewPayment(cfg *config.Schema, mq cRabbitMQ.MQ) *Payment {
	if cfg == nil {
		panic("nil cfg")
	}

	if mq == nil {
		panic("nil mq")
	}

	return &Payment{
		cfg: cfg,
		mq:  mq,
	}
}

func (p *Payment) RecheckPending(req appService.RecheckPending) error {
	logger.Infof("Pushed msg %s with req: %+v", p.cfg.PaymentPendingRoute, req)
	data, err := json.Marshal(&req)
	if err != nil {
		return err
	}
	return p.mq.PushRawMessage(p.cfg.PaymentExchange, p.cfg.PaymentPendingRoute, data)
}
