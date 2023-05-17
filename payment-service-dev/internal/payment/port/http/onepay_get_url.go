package http

import (
	"net/http"
	"strconv"
	"time"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
)

func (s Server) OnePayURL(w http.ResponseWriter, r *http.Request) {
	paymentMethod := r.URL.Query().Get("paymentMethod")
	orderId := r.URL.Query().Get("orderId")
	orderDesc := r.URL.Query().Get("orderDesc")
	orderCode := r.URL.Query().Get("orderCode")
	orderAmountParam := r.URL.Query().Get("orderAmount")
	appLang := r.URL.Query().Get("appLang")
	serviceName := r.URL.Query().Get("serviceName")
	orderAmount, err := strconv.ParseFloat(orderAmountParam, 64)
	if err != nil {
		httperr.BadRequest(ErrWrongAmountFormat, err, w, r)
		return
	}

	loggedUser, _ := auth.GetContextUser(r.Context())
	now := time.Now()
	cmd := command.OnePayGetURL{
		RemoteAddr:    r.RemoteAddr,
		PaymentMethod: paymentMethod,
		UserId:        loggedUser.Id,
		OrderId:       orderId,
		OrderDesc:     orderDesc,
		OrderCode:     orderCode,
		OrderAmount:   orderAmount,
		CreateTime:    &now,
		AppLang:       appLang,
		ServiceName:   serviceName,
	}

	if err := validator.Validate(cmd); err != nil {
		logger.Error(err)
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	url, err := s.app.Commands.OnePayGetURL.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	render.JSON(w, r, command.OnePayURLResponse{URL: url})
}
