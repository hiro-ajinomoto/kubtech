package http

import (
	"net/http"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
)

func (s Server) VNPayIPN(w http.ResponseWriter, r *http.Request) {
	cmd := make(map[string]string)
	for k, v := range r.URL.Query() {
		cmd[k] = v[0]
	}

	res := s.app.Commands.VNPayProcessIPN.Handle(r.Context(), cmd)

	logger.Infof("VNPayIPN: %+v", res)
	render.JSON(w, r, res)
}
