package http

import (
	"net/http"
	"time"

	"github.com/go-chi/render"
	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
)

// VNPayRefund: for test purpose only, will be removed.
func (s Server) VNPayRefund(w http.ResponseWriter, r *http.Request) {
	reason := r.URL.Query().Get("reason")
	paymentId := r.URL.Query().Get("paymentId")

	if reason != "^&DFE#R*D" {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	now := time.Now()
	cmd := command.VNPayRefund{
		Reason:     reason,
		PaymentId:  paymentId,
		CreateTime: &now,
	}
	err := s.app.Commands.VNPayRefund.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}

	render.Status(r, 200)
}
