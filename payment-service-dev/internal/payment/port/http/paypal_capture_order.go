package http

import (
	"net/http"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
)

type PaypalCaptureOrderResponse struct {
	OrderId string `json:"order_id"`
}

func (s Server) PaypalCaptureOrder(w http.ResponseWriter, r *http.Request) {
	loggedUser, _ := auth.GetContextUser(r.Context())
	paypalOrderId := r.URL.Query().Get("paypalOrderId")
	cmd := command.PaypalCaptureOrder{
		UserId:        loggedUser.Id,
		PaypalOrderId: paypalOrderId,
	}

	tx, err := s.app.Commands.PaypalCaptureOrder.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	render.JSON(w, r, PaypalCaptureOrderResponse{OrderId: tx.OrderId})
}
