package http

import (
	"encoding/json"
	"io"
	"net/http"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"

	"github.com/go-chi/render"
)

func (s Server) PayooIPN(w http.ResponseWriter, r *http.Request) {
	logger.Debugf("[PayooIPN] Payoo ip address: %s", r.RemoteAddr)
	b, err := io.ReadAll(r.Body)
	if err != nil {
		render.JSON(w, r, domain.PayooIPNResponse_INVALID_DATA)
		return
	}
	logger.Infof("PayooIPN Req: %s", string(b))

	cmd := domain.PayooIPNData{
		PayooIpAddress: r.RemoteAddr,
	}

	err = json.Unmarshal(b, &cmd)
	if err != nil {
		render.JSON(w, r, domain.PayooIPNResponse_INVALID_DATA)
		return
	}

	render.JSON(w, r, s.app.Commands.PayooIPN.Handle(r.Context(), cmd))
}
