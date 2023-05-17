package main

import (
	"github.com/go-chi/chi/v5"
	cMongoDB "gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/common/tracing/mongodb"
	"google.golang.org/grpc"

	bePaymentPb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/backend"
	mobilePaymentPb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/mobile"
	webPaymentPb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/web_partnership"

	beWalletPb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/backend"
	mobileWalletPb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/mobile"

	cRabbitMQ "gitlab.bcasia.io/thuynga/apps/common/adapter/rabbitmq"
	httpServer "gitlab.bcasia.io/thuynga/apps/common/http/server"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/server"
	tracingHttp "gitlab.bcasia.io/thuynga/apps/common/tracing/http"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

func main() {
	// Load config
	cfg, err := config.New()

	if err != nil {
		panic(err)
	}

	// Setup logger.
	logger.Setup(cfg.Env) // default cfg.Env ="local"

	//Init tracer
	_, err = tracing.New(tracing.WithCommandAttributeDisabled(false))

	// Init DB.
	db, err := cMongoDB.NewWithMonitor(&cMongoDB.Config{
		WriteURL: cfg.DBWriteURL,
		ReadURL:  cfg.DBReadURL,
		Database: cfg.DBName,
	}, mongodb.NewMonitor())

	if err != nil {
		logger.Fatal("Failed to connect paymentDB: ", err)
	}

	// Init MQ.
	mq, err := cRabbitMQ.New(cfg.RabbitmqURL, cfg.RabbitDeclarationFile)
	if err != nil {
		logger.Fatal("Failed to connect rabbitMQ: ", err)
	}

	paymentServer, paymentConsumer, grpcSv := payment.New(cfg, db, mq) // grpcServer was create here

	// Init DB Wallet
	dbWallet, err := cMongoDB.NewWithMonitor(&cMongoDB.Config{
		WriteURL: cfg.DBWriteURL,
		ReadURL:  cfg.DBReadURL,
		Database: cfg.DBWalletName,
	}, mongodb.NewMonitor())
	if err != nil {
		logger.Fatal("Failed to connect walletDB: ", err)
	}
	mqWallet, err := cRabbitMQ.New(cfg.RabbitmqWalletURL, cfg.RabbitWalletDeclarationFile)
	if err != nil {
		logger.Fatal("Failed to connect rabbitMQ: ", err)
	}

	grpcWalletSv, httpSvWallet, walletConsumer := wallet.New(cfg, dbWallet, mqWallet)

	// Start consuming event messages.
	paymentConsumer.Run()
	walletConsumer.Run()

	go func() {
		// Start HTTP server.
		opts := []httpServer.Option{
			httpServer.ListenPort(cfg.HTTPPort),
			httpServer.AuthKey(cfg.AuthSigningKey),
			httpServer.PublicPaths(cfg.PublicPaths),
		}
		httpServer.RunHTTPServer(opts, func(router chi.Router) {
			router.Use(tracingHttp.Middleware())
			paymentServer.Register(router) // restful api
			httpSvWallet.Register(router)  // restful api
		})
	}()

	// Start GRPC server.
	opts := []server.Option{
		server.ListenPort(cfg.Port),
		server.AuthKey(cfg.AuthSigningKey),
		server.InternalToken(cfg.InternalSecretToken),
		server.PublicMethods(cfg.PublicMethods),
		server.InternalMethods(cfg.InternalMethods),
	}

	server.RunGRPCServer(opts, func(server *grpc.Server) {
		bePaymentPb.RegisterPaymentServiceServer(server, grpcSv.BackendServer)

		mobilePaymentPb.RegisterPaymentServiceServer(server, grpcSv.MobileServer)
		webPaymentPb.RegisterPaymentServiceServer(server, grpcSv.WebServer)

		beWalletPb.RegisterWalletServiceServer(server, grpcWalletSv.BackendServer)
		// (grpcServer, grpcServices)
		mobileWalletPb.RegisterWalletServiceServer(server, grpcWalletSv.MobileServer)
	})
}
