package grpc

import (
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/port/grpc/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/port/grpc/mobile"
)

type Server struct { // cái này không có server của backend
	*mobile.MobileServer
	*backend.BackendServer
}

func NewServer(application app.Application) *Server {
	return &Server{
		MobileServer:  mobile.NewServer(application),
		BackendServer: backend.NewServer(application),
	}
}
