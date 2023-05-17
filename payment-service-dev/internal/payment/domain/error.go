package domain

import ce "gitlab.bcasia.io/thuynga/apps/common/errors"

var (
	ErrUnauthorized             = ce.New(ce.BadRequest, "UNAUTHORIZED_ERROR")
	ErrInternalServer           = ce.New(ce.Internal, "ErrInternalServer")
	ErrIncorrectValue           = ce.New(ce.BadRequest, "ErrIncorrectValue")
	ErrInvalidProvider          = ce.New(ce.BadRequest, "ErrInvalidProvider")
	ErrInvalidCurrency          = ce.New(ce.BadRequest, "ErrInvalidCurrency")
	ErrMissingOrderId           = ce.New(ce.BadRequest, "ErrMissingOrderId")
	ErrMissingUserId            = ce.New(ce.BadRequest, "ErrMissingUserId")
	ErrMissingRequestPayload    = ce.New(ce.BadRequest, "ErrMissingRequestPayload")
	ErrMissingResponsePayload   = ce.New(ce.BadRequest, "ErrMissingResponsePayload")
	ErrMissingCreateTransaction = ce.New(ce.BadRequest, "ErrMissingCreateTransaction")
	ErrAlreadyPaidOrder         = ce.New(ce.BadRequest, "ErrAlreadyPaidOrder")

	ErrTixlabsAlreadyConfirmed = ce.New(ce.BadRequest, "ErrTixlabsAlreadyConfirmed")

	ErrVNPayInvalidPaymentMethod = ce.New(ce.BadRequest, "ErrVNPayInvalidPaymentMethod")
	ErrVNPayNotFound             = ce.New(ce.BadRequest, "ErrVNPayNotFound")
	ErrVNPayFailedRefund         = ce.New(ce.BadRequest, "ErrVNPayFailedRefund")
	ErrVNPayAlreadyRefunded      = ce.New(ce.BadRequest, "ErrVNPayAlreadyRefunded")

	ErrPaypalNotFound             = ce.New(ce.BadRequest, "ErrPaypalNotFound")
	ErrPaypalMissingPaypalOrderId = ce.New(ce.BadRequest, "ErrPaypalMissingPaypalOrderId")
	ErrPaypalFailedCapture        = ce.New(ce.BadRequest, "ErrPaypalFailedCapture")
	ErrPaypalExpiredTransaction   = ce.New(ce.BadRequest, "ErrPaypalExpiredTransaction")
	ErrPaypalUnpaidTx             = ce.New(ce.BadRequest, "ErrPaypalUnpaidTx")
	ErrPaypalAlreadyRefunded      = ce.New(ce.BadRequest, "ErrPaypalAlreadyRefunded")
	ErrPaypalFailedRefund         = ce.New(ce.BadRequest, "ErrPaypalFailedRefund")

	ErrTwoCheckoutMissingOrderId = ce.New(ce.BadRequest, "ErrTwoCheckoutMissingOrderId")

	ErrPayooNotFound        = ce.New(ce.BadRequest, "ErrPayooNotFound")
	ErrPayooUnpaidTx        = ce.New(ce.BadRequest, "ErrPayooUnpaidTx")
	ErrPayooAlreadyRefunded = ce.New(ce.BadRequest, "ErrPayooAlreadyRefunded")
	ErrPayooFailedRefund    = ce.New(ce.BadRequest, "ErrPayooFailedRefund")

	ErrOnePayInvalidPaymentMethod = ce.New(ce.BadRequest, "ErrOnePayInvalidPaymentMethod")
	ErrOnePayNotFound             = ce.New(ce.BadRequest, "ErrOnePayNotFound")
	ErrOnePayFailedRefund         = ce.New(ce.BadRequest, "ErrOnePayFailedRefund")
	ErrOnePayAlreadyRefunded      = ce.New(ce.BadRequest, "ErrOnePayAlreadyRefunded")
)
