package domain

import (
	"strings"

	"gitlab.bcasia.io/thuynga/apps/common/helpers"
)

type PaymentMethod int32

const (
	PaymentMethod_PAYMENT_METHOD_INVALID                                 PaymentMethod = 0
	PaymentMethod_PAYMENT_METHOD_PAYPAL                                  PaymentMethod = 1
	PaymentMethod_PAYMENT_METHOD_VNPAY_EWALLET                           PaymentMethod = 2  // ví vnpay
	PaymentMethod_PAYMENT_METHOD_VNPAY_CREDITCARD                        PaymentMethod = 3  // vnpay với visa, master, JCB
	PaymentMethod_PAYMENT_METHOD_VNPAY_BANKTRANSFER                      PaymentMethod = 4  // vnpay với các ngân hàng trong nước VN
	PaymentMethod_PAYMENT_METHOD_VNPAY_QRCODE                            PaymentMethod = 5  // vnpay quét mã QR
	PaymentMethod_PAYMENT_METHOD_MANUAL_BANKTRANSFER                     PaymentMethod = 6  // thanh toán ck vào tk theo cú pháp
	PaymentMethod_PAYMENT_METHOD_MOMO                                    PaymentMethod = 7  // ví momo
	PaymentMethod_PAYMENT_METHOD_TWO_CHECKOUT                            PaymentMethod = 8  // two checkout
	PaymentMethod_ORDER_PAYMENT_METHOD_PAYOO_CREDITCARD                  PaymentMethod = 9  // payoo với thẻ quốc tế
	PaymentMethod_ORDER_PAYMENT_METHOD_PAYOO_DOMESTIC_CARD               PaymentMethod = 10 // payoo với thẻ nội địa
	PaymentMethod_ORDER_PAYMENT_METHOD_PAYOO_QRCODE                      PaymentMethod = 11 // payoo quét mã QR
	PaymentMethod_ORDER_PAYMENT_METHOD_ONE_PAY_CREDITCARD                PaymentMethod = 12 // onepay với thẻ quốc tế
	PaymentMethod_ORDER_PAYMENT_METHOD_ONE_PAY_CREDITCARD_DOMESTIC_ISSUE PaymentMethod = 13 // onepay với thẻ quốc tế phát hành trong nước
	PaymentMethod_ORDER_PAYMENT_METHOD_ONE_PAY_DOMESTIC_CARD             PaymentMethod = 14 // onepay với thẻ nội địa
	PaymentMethod_ORDER_PAYMENT_METHOD_ONE_PAY_QRCODE                    PaymentMethod = 15 // onepay quét mã QR
)

type PaymentMethodInfo struct {
	Id                 string
	PartnershipId      string
	Name               string
	Code               string
	Method             PaymentMethod
	Fee                float64
	AdditionalFee      float64
	DisplayFee         string
	Icon               string
	Version            string
	Tag                string
	IsEnable           bool
	IncludeFee         bool
	WhitelistCountries []string
	BlacklistCountries []string
}

func (p PaymentMethodInfo) CheckSupportMethod(c string) bool {
	blockAll := helpers.Contains[string](p.BlacklistCountries, strings.ToLower("*"))
	if blockAll {
		return false
	}
	blockC := helpers.Contains[string](p.BlacklistCountries, strings.ToLower(c))
	if blockC {
		return false
	}
	allowAll := helpers.Contains[string](p.WhitelistCountries, strings.ToLower("*"))
	if allowAll {
		return true
	}
	allowC := helpers.Contains[string](p.WhitelistCountries, strings.ToLower(c))
	if allowC {
		return true
	}
	return false
}
