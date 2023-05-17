package http

import (
	"net/http"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

func (s Server) PayooGetOrderInfo(w http.ResponseWriter, r *http.Request) {
	orderId := r.URL.Query().Get("orderId")
	if orderId == "" {

		render.JSON(w, r, domain.PayooOrderInfoResponse_ERROR)
		return
	}

	orderInfo, err := s.app.Commands.PayooGetOrderInfo.Handle(r.Context(), orderId)
	if err != nil {
		logger.Debug("err ", err)
		render.JSON(w, r, domain.PayooOrderInfoResponse_ERROR)
		return
	}

	render.JSON(w, r, orderInfo)
}
