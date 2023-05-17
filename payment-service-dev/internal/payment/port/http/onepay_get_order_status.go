package http

import (
	"net/http"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

func (s Server) OnePayGetOrderStatus(w http.ResponseWriter, r *http.Request) {
	refId := r.URL.Query().Get("refId")
	appLang := r.URL.Query().Get("lang")
	if refId == "" {
		render.JSON(w, r, domain.OnePayErrOrderNotFound)
		return
	}

	cmd := command.OnePayGetOrderStatus{
		RefId: refId,
		AppLang: appLang,
	}

	res := s.app.Commands.OnePayGetOrderStatus.Handle(r.Context(), cmd)
	logger.Infof("[OnePayGetOrderStatus] Res: %+v", res)
	render.JSON(w, r, res)
}
