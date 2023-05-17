package app

import (
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/query"
)

type Application struct {
	Commands Commands
	Queries  Queries
}

type Commands struct {
	PaypalCreateOrder  command.PaypalCreateOrderHandler
	PaypalCaptureOrder command.PaypalCaptureOrderHandler
	PaypalRefund       command.PaypalRefundHandler

	VNPayGetURL     command.VNPayGetURLHandler
	VNPayProcessIPN command.VNPayProcessIPNHandler
	VNPayRefund     command.VNPayRefundHandler

	TixlabsIPN    command.TixlabsIPNHandler
	TixlabsGetURL command.TixlabsGetURLHandler

	TwoCheckoutGetURL command.TwoCheckoutGetURLHandler
	TwoCheckoutIPN    command.TwoCheckoutIPNHandler

	PayooGenerateOrderInfo command.PayooGenerateOrderInfoHandler
	PayooGetOrderInfo      command.PayooGetOrderInfoHandler
	PayooIPN               command.PayooIPNHandler
	PayooRefund            command.PayooRefundHandler

	OnePayGetURL         command.OnePayGetURLHandler
	OnePayIPN            command.OnePayIPNHandler
	OnePayRefund         command.OnePayRefundHandler
	OnePayGetOrderStatus command.OnePayGetOrderStatusHandler
}

type Queries struct {
	GetPaymentMethods      query.GetPaymentMethodHandler
	GetPaymentMethodById   query.GetPaymentMethodByIdHandler
	GetPaymentMethodByCode query.GetPaymentMethodByCodeHandler
	VNPayReturn            query.VNPayReturnHandler
	OnePayReturn           query.OnePayReturnHandler
}
