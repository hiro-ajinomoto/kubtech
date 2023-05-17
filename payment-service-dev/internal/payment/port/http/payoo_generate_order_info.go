package http

import (
	"net/http"
	"strconv"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"

	"github.com/go-chi/render"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
)

type PayooOrderResponse struct {
	OrderXml      string `json:"order_xml"`
	OrderChecksum string `json:"order_checksum"`
}

func (s Server) PayooGenerateOrderInfo(w http.ResponseWriter, r *http.Request) {
	paymentMethod := r.URL.Query().Get("paymentMethod")
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
	now := time.Now()
	cmd := command.PayooGenerateOrderInfo{
		RemoteAddr:    r.RemoteAddr,
		PaymentMethod: paymentMethod,
		UserId:        loggedUser.Id,
		OrderId:       orderId,
		OrderCode:     orderCode,
		OrderDesc:     orderDesc,
		OrderAmount:   orderAmount,
		CreateTime:    &now,
		BuyerName:     loggedUser.Name,
		ServiceName:   serviceName,
	}

	if err := validator.Validate(cmd); err != nil {
		logger.Error(err)
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	orderXml, checksum, err := s.app.Commands.PayooGenerateOrderInfo.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	render.JSON(w, r, PayooOrderResponse{
		OrderXml:      orderXml,
		OrderChecksum: checksum,
	})
}
