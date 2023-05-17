package http

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/logger"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

func (s Server) TixlabsIPN(w http.ResponseWriter, r *http.Request) {
	var cmd command.TixlabsIPN
	err := json.NewDecoder(r.Body).Decode(&cmd)
	if err != nil {
		render.JSON(w, r, domain.TixlabsErrInvalidParams)
		return
	}

	res := s.app.Commands.TixlabsIPN.Handle(r.Context(), &cmd)

	logger.Infof("PaymentConfirm: %+v", res)
	render.JSON(w, r, res)
}
