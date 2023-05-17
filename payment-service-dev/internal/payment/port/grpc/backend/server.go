package backend

import (
	"gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app"
)

type BackendServer struct {
	backend.UnimplementedPaymentServiceServer
	app app.Application
}

func NewServer(application app.Application) *BackendServer {
	return &BackendServer{app: application}
}
