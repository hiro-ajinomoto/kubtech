package http

import (
	"net/http"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
)

func (s Server) VNPayReturn(w http.ResponseWriter, r *http.Request) {
	cmd := make(map[string]string)
	for k, v := range r.URL.Query() {
		cmd[k] = v[0]
	}

	// Hack for onepay, because client using this endpoint for all webview methods
	//TODO: remove this hack when migrate all client
	if cmd["vpc_TxnResponseCode"] != "" {
		// is onepay
		res := s.app.Queries.OnePayReturn.Handle(r.Context(), cmd)
		logger.Infof("OnePayReturn: %+v", res)
		render.JSON(w, r, res)
		return
	}

	res := s.app.Queries.VNPayReturn.Handle(r.Context(), cmd)

	logger.Infof("VNPayReturn: %+v", res)
	render.JSON(w, r, res)
}
