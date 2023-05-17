package http

import (
	"io/ioutil"
	"net/http"
	"net/url"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/helpers"
	"gitlab.bcasia.io/thuynga/apps/common/logger"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

func (s Server) TwoCheckoutIPN(w http.ResponseWriter, r *http.Request) {
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		logger.Error(err)
		render.JSON(w, r, domain.TwoCheckoutErrInvalidArgument)
		return
	}
	logger.Debugf("IPN Req: %s", string(b))

	params, err := url.ParseQuery(string(b))
	if err != nil {
		logger.Error(err)
		render.JSON(w, r, domain.TwoCheckoutErrInvalidArgument)
		return
	}

	var cmd command.TwoCheckoutIPN
	err = helpers.Copy(&cmd, &params)
	if err != nil {
		logger.Error(err)
		render.JSON(w, r, domain.TwoCheckoutErrInvalidArgument)
		return
	}
	logger.Debugf("%s", cmd)

	res := s.app.Commands.TwoCheckoutIPN.Handle(r.Context(), cmd, string(b))

	logger.Infof("TwoCheckoutIPN: %+v", res)
	render.JSON(w, r, res)
}
