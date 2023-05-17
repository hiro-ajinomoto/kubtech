package mq

import (
	"context"
	"encoding/json"
	"math"
	"time"

	"github.com/streadway/amqp"
	"gitlab.bcasia.io/thuynga/apps/common/adapter/rabbitmq"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
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
	c.handlers["payment.refund"] = c.Refund
	c.handlers["payment.pending"] = c.HandlePending
}

func (c *Consumer) process(msg *amqp.Delivery) {
	defer msg.Ack(false)

	if h, ok := c.handlers[msg.RoutingKey]; ok {
		h(msg.Body)
		return
	}

	logger.Warnf("Consumed unknown message: %s, body: %s", msg.RoutingKey, string(msg.Body))
}

func (c *Consumer) Refund(data []byte) {
	var msg RefundMsg
	err := json.Unmarshal(data, &msg)
	if err != nil {
		logger.Error("[Consume] Refund: unmarshal message failed, ", err)
		return
	}

	logger.Infof("[Consume] Refund: %+v", msg)
	if msg.PaymentProvider == string(domain.PaymentProvider_VNPAY) {
		now := time.Now()
		err = c.app.Commands.VNPayRefund.Handle(
			context.Background(),
			command.VNPayRefund{
				Reason:     msg.Reason,
				PaymentId:  msg.PaymentId,
				CreateTime: &now,
			},
		)

		if err != nil {
			logger.Error("[Consume] Refund: failed, ", err)
		}

		return
	}

	if msg.PaymentProvider == string(domain.PaymentProvider_ONEPAY) {
		now := time.Now()
		err = c.app.Commands.OnePayRefund.Handle(
			context.Background(),
			command.OnePayRefund{
				Reason:     msg.Reason,
				PaymentId:  msg.PaymentId,
				CreateTime: &now,
			},
		)

		if err != nil {
			logger.Error("[Consume] Refund: failed, ", err)
		}

		return
	}

	if msg.PaymentProvider == string(domain.PaymentProvider_PAYPAL) {
		err = c.app.Commands.PaypalRefund.Handle(
			context.Background(),
			command.PaypalRefund{
				Reason:    msg.Reason,
				PaymentId: msg.PaymentId,
			},
		)

		if err != nil {
			logger.Error("[Consume] Refund: failed, ", err)
		}

		return
	}
	if msg.PaymentProvider == string(domain.PaymentProvider_PAYOO) {
		err = c.app.Commands.PayooRefund.Handle(
			context.Background(),
			command.PayooRefund{
				Reason:    msg.Reason,
				PaymentId: msg.PaymentId,
			},
		)

		if err != nil {
			logger.Error("[Consume] Refund: failed, ", err)
		}

		return
	}

	logger.Error("[Consume] Un-handled provider: ", msg.PaymentProvider)
}

func (c *Consumer) HandlePending(data []byte) {
	var msg PaymentPendingMsg
	err := json.Unmarshal(data, &msg)
	if err != nil {
		logger.Error("[Consume] Refund: unmarshal message failed, ", err)
		return
	}
	logger.Infof("[Consume] HandlePending %+v", msg)

	if msg.RetryTimes > 0 {
		delayTime := time.Duration(math.Min(60, float64(msg.RetryTimes)))
		if delayTime < 5 {
			delayTime = 5
		}
		logger.Infof("[Consume] HandlePending retryTimes: %d, delay %d seconds, refId %s", msg.RetryTimes, delayTime, msg.RefId)
		time.Sleep(delayTime * time.Second)
	}

	if msg.PaymentProvider == string(domain.PaymentProvider_ONEPAY) {
		cmd := command.OnePayGetOrderStatus{
			RefId:    msg.RefId,
			RetryTimes: msg.RetryTimes + 1,
		}

		res := c.app.Commands.OnePayGetOrderStatus.Handle(
			context.Background(),
			cmd,
		)

		if err != nil {
			logger.Error("[Consume] HandlePending: failed, ", err)
		}
		logger.Infof("[Consume] HandlePending res: %+v, ", res)
		return
	}
	logger.Error("[Consume] Un-handled provider: ", msg.PaymentProvider)

}
