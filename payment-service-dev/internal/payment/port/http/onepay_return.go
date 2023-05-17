package http

import (
	"net/http"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
)

func (s Server) OnePayReturn(w http.ResponseWriter, r *http.Request) {
	cmd := make(map[string]string)
	for k, v := range r.URL.Query() {
		cmd[k] = v[0]
	}

	res := s.app.Queries.OnePayReturn.Handle(r.Context(), cmd)
	logger.Infof("OnePayReturn: %+v", res)
	render.JSON(w, r, res)
}
