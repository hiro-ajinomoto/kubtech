package mq

import (
	"context"
	"encoding/json"

	"github.com/streadway/amqp"
	"gitlab.bcasia.io/thuynga/apps/common/adapter/rabbitmq"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/command"
)

type HandlerFunc func(data []byte)

type Consumer struct {
	app          app.Application
	mqConnection rabbitmq.MQ
	handlers     map[string]HandlerFunc
}

func New(app app.Application, mqConnection rabbitmq.MQ) *Consumer {
	c := &Consumer{
		app:          app,
		mqConnection: mqConnection,
		handlers:     make(map[string]HandlerFunc),
	}

	c.setupRoutes()

	return c
}

func (c *Consumer) Run() {
	msgChan, errChan := c.mqConnection.Consume()
	go func() {
		for {
			select {
			case msg := <-msgChan:
				c.process(&msg)
			case err := <-errChan:
				logger.Error(err)
			}
		}
	}()
}

func (c *Consumer) setupRoutes() {
	c.handlers["wallet.top_up"] = c.HandleTopUpPaymentStatus
}

func (c *Consumer) process(msg *amqp.Delivery) {
	defer msg.Ack(false)

	if h, ok := c.handlers[msg.RoutingKey]; ok {
		h(msg.Body)
		return
	}

	logger.Warnf("Consumed unknown message: %s, body: %s", msg.RoutingKey, string(msg.Body))
}

func (c *Consumer) HandleTopUpPaymentStatus(data []byte) {
	var msg PaymentProcessingMsg
	err := json.Unmarshal(data, &msg)
	if err != nil {
		logger.Error("[Consume] Refund: unmarshal message failed, ", err)
		return
	}
	logger.Infof("[Consume] HandleTopUpPaymentStatus %+v", msg)

	c.app.Commands.TopUpTransactionProcessing.Handle(context.Background(), &command.TopUpProcessing{
		TransactionId:    msg.OrderId,
		PaymentId:        msg.PaymentId,
		PaymentCurrency:  msg.PaymentCurrency,
		PaymentProvider:  msg.PaymentProvider,
		IsPaymentSuccess: msg.IsPaymentSuccess,
	})

}
