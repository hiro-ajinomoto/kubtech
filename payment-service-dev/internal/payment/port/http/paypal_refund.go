package http

import (
	"net/http"

	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
)

// PaypalRefund: for test purpose only, will be removed.
func (s Server) PaypalRefund(w http.ResponseWriter, r *http.Request) {
	reason := r.URL.Query().Get("reason")
	paymentId := r.URL.Query().Get("paymentId")

	if reason != "^&DFE#R*D" {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	cmd := command.PaypalRefund{
		Reason:    reason,
		PaymentId: paymentId,
	}
	err := s.app.Commands.PaypalRefund.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}
}
