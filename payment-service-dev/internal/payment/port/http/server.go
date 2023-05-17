package http

import (
	"github.com/go-chi/chi/v5"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app"
)

type Server struct {
	app app.Application
}

func New(app app.Application) *Server {
	return &Server{app}
}

func (s Server) Register(r chi.Router) {
	// r.Use(tracingHttp.Middleware())

	r.Route("/payment/vnpay", func(r chi.Router) {
		r.Get("/payment-url", s.VNPayURL)
		r.Get("/return", s.VNPayReturn)
		r.Get("/ipn", s.VNPayIPN)
		r.Post("/refund", s.VNPayRefund)
	})

	r.Route("/payment/paypal", func(r chi.Router) {
		r.Get("/payment-url", s.PaypalCreateOrder)
		r.Post("/confirm", s.PaypalCaptureOrder)
		r.Post("/refund", s.PaypalRefund)
	})

	r.Route("/payment/tixlabs", func(r chi.Router) {
		r.Get("/bank-payment-url", s.TixlabsGetBankURL)
		r.Get("/momo-payment-url", s.TixlabsGetMomoURL)
		r.Post("/ipn", s.TixlabsIPN)
	})

	r.Route("/payment/2checkout", func(r chi.Router) {
		r.Get("/payment-url", s.TwoCheckoutURL)
		r.Post("/ipn", s.TwoCheckoutIPN)
	})

	r.Route("/payment/payoo", func(r chi.Router) {
		r.Get("/generate-order-info", s.PayooGenerateOrderInfo)
		r.Get("/get-order-info", s.PayooGetOrderInfo)
		r.Post("/ipn", s.PayooIPN)
		r.Post("/refund", s.PayooRefund)
	})

	r.Route("/payment/onepay", func(r chi.Router) {
		r.Get("/payment-url", s.OnePayURL)
		r.Get("/ipn", s.OnePayIPN)
		r.Get("/return", s.OnePayReturn)
		r.Get("/get-order-status", s.OnePayGetOrderStatus)
	})
}
