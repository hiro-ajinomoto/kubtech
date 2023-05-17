package http

import (
	"fmt"
	"net/http"
)

type VNPayURLResponse struct {
	URL string `json:"url"`
}

func (s Server) VNPayURL(w http.ResponseWriter, r *http.Request) {
	// paymentMethod := r.URL.Query().Get("paymentMethod")
	// orderId := r.URL.Query().Get("orderId")
	// orderCode := r.URL.Query().Get("orderCode")
	// orderDesc := r.URL.Query().Get("orderDesc")
	// orderAmountParam := r.URL.Query().Get("orderAmount")
	// orderAmount, err := strconv.ParseFloat(orderAmountParam, 64)
	// serviceName := r.URL.Query().Get("serviceName")
	// if err != nil {
	// 	httperr.BadRequest(ErrWrongAmountFormat, err, w, r)
	// 	return
	// }

	// loggedUser, _ := auth.GetContextUser(r.Context())
	// now := time.Now()
	// cmd := command.VNPayGetURL{
	// 	RemoteAddr:    r.RemoteAddr,
	// 	PaymentMethod: paymentMethod,
	// 	UserId:        loggedUser.Id,
	// 	OrderId:       orderId,
	// 	OrderCode:     orderCode,
	// 	OrderDesc:     orderDesc,
	// 	OrderAmount:   orderAmount,
	// 	CreateTime:    &now,
	// 	ServiceName:   serviceName,
	// }
	// url, err := s.app.Commands.VNPayGetURL.Handle(r.Context(), cmd)
	// if err != nil {
	// 	httperr.RespondWithCommonError(err, w, r)
	// 	return
	// }
	fmt.Println("VPNPAY URL")
	// render.JSON(w, r, VNPayURLResponse{URL: url})
}
