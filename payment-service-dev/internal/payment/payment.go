package payment

import (
	cMongoDB "gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	cRabbitMQ "gitlab.bcasia.io/thuynga/apps/common/adapter/rabbitmq"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/port/grpc"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/adapter/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/query"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/port/http"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/port/mq"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"

	appService "gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
)

func New(cfg *config.Schema, db cMongoDB.DB, mqConnection cRabbitMQ.MQ) (*http.Server, *mq.Consumer, *grpc.Server) {
	repo := mongodb.NewRepository(db)
	orderSvc := service.NewOrder(cfg, mqConnection)
	paymentSvc := service.NewPayment(cfg, mqConnection)
	vnpayClient := service.NewVNPay(cfg)
	twoCheckoutClient := service.NewTwoCheckout(cfg)
	paypalClient := service.NewPaypal(cfg)
	payooClient := service.NewPayoo(cfg)
	oneClient := service.NewOnePay(cfg)

	appService.NewInternalService(db)

	app := app.Application{
		Commands: app.Commands{
			PaypalRefund:       command.NewPaypalRefundHandler(repo, paypalClient),
			PaypalCreateOrder:  command.NewPaypalCreateOrderHandler(repo, paypalClient),
			PaypalCaptureOrder: command.NewPaypalCaptureOrderHandler(cfg.PaypalExpireTime, repo, paypalClient, orderSvc),
			VNPayGetURL:        command.NewVNPayGetURLHandler(cfg.VNPPaymentExpireTime, repo, vnpayClient),
			VNPayProcessIPN:    command.NewVNPayProcessIPNHandler(cfg.VNPKey, repo, orderSvc),
			VNPayRefund:        command.NewVNPayRefundHandler(repo, vnpayClient),
			TixlabsGetURL:      command.NewTixlabsGetURLHandler(cfg, repo),
			TixlabsIPN:         command.NewTixlabsIPNHandler(cfg.TixlabsSecret, cfg.TixlabsExpireTime, repo, orderSvc),
			TwoCheckoutGetURL:  command.NewTwoCheckoutGetURLHandler(cfg, repo, twoCheckoutClient),
			TwoCheckoutIPN:     command.NewTwoCheckoutIPNHandler(cfg, repo, orderSvc),

			PayooGenerateOrderInfo: command.NewPayooGenerateOrderInfoHandler(repo, payooClient),
			PayooGetOrderInfo:      command.NewPayooGetOrderInfoHandler(repo, orderSvc, payooClient),
			PayooIPN:               command.NewPayooIPNHandler(cfg, repo, orderSvc, payooClient),
			PayooRefund:            command.NewPayooRefundHandler(repo, payooClient),

			OnePayGetURL:         command.NewOnePayGetURLHandler(cfg.OnePayPaymentExpireTime, repo, oneClient),
			OnePayIPN:            command.NewOnePayIPNHandler(repo, oneClient, orderSvc),
			OnePayRefund:         command.NewOnePayRefundHandler(repo, oneClient),
			OnePayGetOrderStatus: command.NewOnePayGetOrderStatusHandler(repo, oneClient, orderSvc, paymentSvc),
		},
		Queries: app.Queries{
			VNPayReturn:            query.NewVNPayReturnHandler(cfg.VNPKey),
			OnePayReturn:           query.NewOnePayReturnHandler(cfg.OnePayHashCode),
			GetPaymentMethods:      query.NewGetPaymentMethodHandler(repo),
			GetPaymentMethodById:   query.NewGetPaymentMethodByIdHandler(repo),
			GetPaymentMethodByCode: query.NewGetPaymentMethodByCodeHandler(repo),
		},
	}

	return http.New(app), mq.New(app, mqConnection), grpc.NewServer(app)
}

func GetInternalService() appService.IServiceInternal {
	return appService.GetInternalService()
}
