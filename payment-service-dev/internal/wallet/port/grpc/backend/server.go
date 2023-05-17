package backend

import (
	"gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app"
)

type BackendServer struct {
	backend.UnimplementedWalletServiceServer
	backend.UnimplementedTransactionServiceServer
	app app.Application
}

func NewServer(application app.Application) *BackendServer {
	return &BackendServer{app: application}
}
