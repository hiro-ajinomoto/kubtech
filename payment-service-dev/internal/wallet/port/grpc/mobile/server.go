package mobile

import (
	"gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/mobile"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app"
)

type MobileServer struct {
	mobile.UnimplementedWalletServiceServer
	mobile.UnimplementedTransactionServiceServer
	app app.Application
}

func NewServer(application app.Application) *MobileServer {
	return &MobileServer{app: application}
}
