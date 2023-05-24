package wallet

import (
	commonMongoDB "gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	cRabbitMQ "gitlab.bcasia.io/thuynga/apps/common/adapter/rabbitmq"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/adapter/external"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/adapter/notification"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/query"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/port/grpc"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/port/http"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/port/mq"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

func New(cfg *config.Schema, db commonMongoDB.DB, mqConnection cRabbitMQ.MQ) (*grpc.Server, *http.Server, *mq.Consumer) {
	repo := mongodb.NewRepository(db) // where to start // create instance của Repository struct{}
	notificationSvc := notification.New(cfg, mqConnection)

	paymentSvc := external.NewPaymentService(cfg)
	// TẠO SERVICE TỪ EXTERNAL
	// cài đặt khi khởi chạy application
	application := app.Application{
		Commands: app.Commands{
			TopUp:                      command.NewTopUpHandler(cfg, repo, paymentSvc, notificationSvc), // TRUYỀN VÀO TOPUPHANDLER
			TopUpTransactionProcessing: command.NewTopUpProcessingHandler(cfg, repo, notificationSvc),
			CalculateTopUpAmount:       command.NewCalculateTopUpAmountHandler(cfg, repo, paymentSvc),
			Pay:                        command.NewPayHandler(cfg, repo),
			ExpireTransaction:          command.NewExpireTransactionHandler(cfg, repo, notificationSvc),
		},
		Queries: app.Queries{
			GetWalletInfo:          query.NewGetWalletInfoHandler(repo),
			GetTransactionsHistory: query.NewGetTransactionsHistoryHandler(repo),
			CanPay:                 query.NewCanPayHandler(cfg, repo),
		},
	}

	return grpc.NewServer(application), http.New(application), mq.New(application, mqConnection)
}
