package http

import (
	"net/http"
	"strconv"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
)

type PaypalCreateOrderResponse struct {
	URL string `json:"url"`
}

func (s Server) PaypalCreateOrder(w http.ResponseWriter, r *http.Request) {
	orderId := r.URL.Query().Get("orderId")
	orderCode := r.URL.Query().Get("orderCode")
	orderDesc := r.URL.Query().Get("orderDesc")
	orderAmountParam := r.URL.Query().Get("orderAmount")
	orderAmount, err := strconv.ParseFloat(orderAmountParam, 64)
	serviceName := r.URL.Query().Get("serviceName")
	if err != nil {
		httperr.BadRequest(ErrWrongAmountFormat, err, w, r)
		return
	}

	loggedUser, _ := auth.GetContextUser(r.Context())
	cmd := command.PaypalCreateOrder{
		UserId:      loggedUser.Id,
		OrderId:     orderId,
		OrderCode:   orderCode,
		OrderDesc:   orderDesc,
		OrderAmount: orderAmount,
		ServiceName: serviceName,
	}
	approveURL, err := s.app.Commands.PaypalCreateOrder.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	render.JSON(w, r, PaypalCreateOrderResponse{URL: approveURL})
}
