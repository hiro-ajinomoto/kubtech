package http

import (
	"fmt"
	"net/http"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
)

func (s Server) OnePayIPN(w http.ResponseWriter, r *http.Request) {

	cmd := make(map[string]string)
	for k, v := range r.URL.Query() {
		cmd[k] = v[0]
	}
	res := s.app.Commands.OnePayIPN.Handle(r.Context(), cmd)
	rspCode := res.RspCode
	if rspCode == "0" {
		rspCode = "1"
	}
	resText := fmt.Sprintf("responsecode=%s&desc=%s", rspCode, res.Message)
	logger.Infof("[OnePayIPN] ResText: %+v", resText)

	render.PlainText(w, r, resText)
}
