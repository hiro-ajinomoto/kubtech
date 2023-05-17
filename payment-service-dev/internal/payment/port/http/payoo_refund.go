package http

import (
	"net/http"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"

	httperr "gitlab.bcasia.io/thuynga/apps/common/http/error"
)

func (s Server) PayooRefund(w http.ResponseWriter, r *http.Request) {
	reason := r.URL.Query().Get("reason")
	paymentId := r.URL.Query().Get("paymentId")

	if reason != "^&DFE#R*D" {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	cmd := command.PayooRefund{
		Reason:    reason,
		PaymentId: paymentId,
	}
	err := s.app.Commands.PayooRefund.Handle(r.Context(), cmd)
	if err != nil {
		httperr.RespondWithCommonError(err, w, r)
		return
	}
}
