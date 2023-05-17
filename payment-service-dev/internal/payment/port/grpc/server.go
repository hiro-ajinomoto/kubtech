package grpc

import (
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/port/grpc/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/port/grpc/mobile"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/port/grpc/web"
)

type Server struct {
	*mobile.MobileServer
	*backend.BackendServer
	*web.WebServer
}

func NewServer(application app.Application) *Server {
	return &Server{
		MobileServer:  mobile.NewServer(application),
		BackendServer: backend.NewServer(application),
		WebServer:     web.NewServer(application),
	}
}
