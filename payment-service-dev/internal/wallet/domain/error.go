package domain

import (
	"gitlab.bcasia.io/thuynga/apps/common/errors"
)

var (
	ErrUnauthorized         = errors.New(errors.BadRequest, "UNAUTHORIZED_ERROR")
	ErrPermissionDenied     = errors.New(errors.PermissionDenied, "PERMISSION_DENIED")
	ErrSomethingWentWrong   = errors.New(errors.BadRequest, "SOMETHING_WENT_WRONG")
	ErrInvalidPaymentMethod = errors.New(errors.BadRequest, "INVALID_PAYMENT_METHOD")

	ErrTransactionNotFound    = errors.New(errors.BadRequest, "TRANSACTION_NOT_FOUND")
	ErrTransactionIsFailed    = errors.New(errors.BadRequest, "TRANSACTION_IS_FAILED")
	ErrTransactionIsProcessed = errors.New(errors.BadRequest, "TRANSACTION_IS_PROCESSED")

	ErrInsufficientFunds         = errors.New(errors.BadRequest, "INSUFFICIENT_FUNDS")
	ErrInvalidTopUpAmount        = errors.New(errors.BadRequest, "INVALID_TOP_UP_AMOUNT")
	ErrPaymentMethodNotAvailable = errors.New(errors.BadRequest, "PAYMENT_METHOD_NOT_AVAILABLE")
	ErrUnsupportedCurrency       = errors.New(errors.BadRequest, "UNSUPPORTED_CURRENCY")
	ErrInvalidPayAmount          = errors.New(errors.BadRequest, "INVALID_PAY_AMOUNT")
)
