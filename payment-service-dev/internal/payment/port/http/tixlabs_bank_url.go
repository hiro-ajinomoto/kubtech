package http

import (
	"net/http"
	"strconv"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type BankGetURLResponse struct {
	URL string `json:"url"`
}

func (s Server) TixlabsGetBankURL(w http.ResponseWriter, r *http.Request) {
	orderId := r.URL.Query().Get("orderId")
	orderCode := r.URL.Query().Get("orderCode")
	orderAmountParam := r.URL.Query().Get("orderAmount")
	orderAmount, err := strconv.ParseFloat(orderAmountParam, 64)
	serviceName := r.URL.Query().Get("serviceName")
	if err != nil {
		httperr.BadRequest(ErrWrongAmountFormat, err, w, r)
		return
	}

	loggedUser, _ := auth.GetContextUser(r.Context())
	cmd := command.TixlabsGetURL{
		PaymentProvider: domain.PaymentProvider_BANK,
		UserId:          loggedUser.Id,
		OrderId:         orderId,
		OrderCode:       orderCode,
		OrderAmount:     orderAmount,
		ServiceName:     serviceName,
	}
	url, err := s.app.Commands.TixlabsGetURL.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	render.JSON(w, r, BankGetURLResponse{URL: url})
}
