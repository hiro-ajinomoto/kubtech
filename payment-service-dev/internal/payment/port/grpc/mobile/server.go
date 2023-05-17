package mobile

import (
	"gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/mobile"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app"
)

type MobileServer struct {
	mobile.UnimplementedPaymentServiceServer
	app app.Application
}

func NewServer(application app.Application) *MobileServer {
	return &MobileServer{app: application}
}
