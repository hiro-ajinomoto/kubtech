package web

import (
	web "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/web_partnership"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app"
)

type WebServer struct {
	web.UnimplementedPaymentServiceServer
	app app.Application
}

func NewServer(application app.Application) *WebServer {
	return &WebServer{app: application}
}
