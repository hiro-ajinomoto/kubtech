package http

import (
	"net/http"
	"strconv"
	"time"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
)

type TwoCheckoutURLResponse struct {
	URL string `json:"url"`
}

func (s Server) TwoCheckoutURL(w http.ResponseWriter, r *http.Request) {
	paymentMethod := r.URL.Query().Get("paymentMethod")
	orderId := r.URL.Query().Get("orderId")
	orderDesc := r.URL.Query().Get("orderDesc")
	orderCode := r.URL.Query().Get("orderCode")
	orderAmountParam := r.URL.Query().Get("orderAmount")
	orderAmount, err := strconv.ParseFloat(orderAmountParam, 64)
	serviceName := r.URL.Query().Get("serviceName")
	if err != nil {
		httperr.BadRequest(ErrWrongAmountFormat, err, w, r)
		return
	}

	loggedUser, _ := auth.GetContextUser(r.Context())
	now := time.Now()
	cmd := command.TwoCheckoutGetURL{
		RemoteAddr:    r.RemoteAddr,
		PaymentMethod: paymentMethod,
		UserId:        loggedUser.Id,
		OrderId:       orderId,
		OrderDesc:     orderDesc,
		OrderAmount:   orderAmount,
		CreateTime:    &now,
		OrderCode:     orderCode,
		ServiceName:   serviceName,
	}
	url, err := s.app.Commands.TwoCheckoutGetURL.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	render.JSON(w, r, TwoCheckoutURLResponse{URL: url})
}
