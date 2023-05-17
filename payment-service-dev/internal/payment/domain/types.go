package domain

import (
	"strings"
)

type PaymentFailReason int

const (
	PaymentFailReason_OK               PaymentFailReason = 0
	PaymentFailReason_Failed           PaymentFailReason = 1
	PaymentFailReason_InvalidAmount    PaymentFailReason = 2
	PaymentFailReason_AlreadyConfirmed PaymentFailReason = 3
	PaymentFailReason_Expired          PaymentFailReason = 4
)

type PaymentProvider string

const (
	PaymentProvider_INVALID      PaymentProvider = "INVALID"
	PaymentProvider_VNPAY        PaymentProvider = "VNPAY"
	PaymentProvider_PAYPAL       PaymentProvider = "PAYPAL"
	PaymentProvider_MOMO         PaymentProvider = "MOMO"
	PaymentProvider_BANK         PaymentProvider = "BANK"
	PaymentProvider_TWO_CHECKOUT PaymentProvider = "2CHECKOUT"
	PaymentProvider_PAYOO        PaymentProvider = "PAYOO"
	PaymentProvider_ONEPAY       PaymentProvider = "ONEPAY"
)

type PaymentCurrency string

const (
	PaymentCurrency_INVALID PaymentCurrency = "INVALID"
	PaymentCurrency_VND     PaymentCurrency = "VND"
	PaymentCurrency_USD     PaymentCurrency = "USD"
)

func ParseCurrency(v string) PaymentCurrency {
	switch strings.ToUpper(v) {
	case string(PaymentCurrency_USD):
		return PaymentCurrency_USD
	case string(PaymentCurrency_VND):
		return PaymentCurrency_VND
	default:
		return PaymentCurrency_INVALID
	}
}
