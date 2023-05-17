package http

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app"
)

type Server struct {
	app app.Application
}

func New(app app.Application) *Server {
	return &Server{app}
}

func (s Server) Register(r chi.Router) {
	// r.Use(tracingHttp.Middleware())
	r.Get("/test", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")

		s.app.Commands.ExpireTransaction.Handle(r.Context())

	})
}
