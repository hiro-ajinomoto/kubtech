package domain

const (
	CurrencyCodeVND string = "VND"
	CurrencyCodeUSD string = "USD"
)

const (
	PaymentAction_WEB_VIEW   = 0
	PaymentAction_BROWSER    = 1
	PaymentAction_IN_APP_SDK = 2
)

type SupportedPaymentMethod int32

const (
	PaymentMethod_INVALID                           SupportedPaymentMethod = 0
	PaymentMethod_PAYPAL                            SupportedPaymentMethod = 1
	PaymentMethod_VNPAY_EWALLET                     SupportedPaymentMethod = 2  // ví vnpay
	PaymentMethod_VNPAY_CREDITCARD                  SupportedPaymentMethod = 3  // vnpay với visa, master, JCB
	PaymentMethod_VNPAY_BANKTRANSFER                SupportedPaymentMethod = 4  // vnpay với các ngân hàng trong nước VN
	PaymentMethod_VNPAY_QRCODE                      SupportedPaymentMethod = 5  // vnpay quét mã QR
	PaymentMethod_MANUAL_BANKTRANSFER               SupportedPaymentMethod = 6  // thanh toán ck vào tk theo cú pháp
	PaymentMethod_MOMO                              SupportedPaymentMethod = 7  // ví momo
	PaymentMethod_TWO_CHECKOUT                      SupportedPaymentMethod = 8  // two checkout
	PaymentMethod_PAYOO_CREDITCARD                  SupportedPaymentMethod = 9  // payoo với thẻ quốc tế
	PaymentMethod_PAYOO_DOMESTIC_CARD               SupportedPaymentMethod = 10 // payoo với thẻ nội địa
	PaymentMethod_PAYOO_QRCODE                      SupportedPaymentMethod = 11 // payoo quét mã QR
	PaymentMethod_ONE_PAY_CREDITCARD                SupportedPaymentMethod = 12 // onepay với thẻ quốc tế
	PaymentMethod_ONE_PAY_CREDITCARD_DOMESTIC_ISSUE SupportedPaymentMethod = 13 // onepay với thẻ quốc tế phát hành trong nước
	PaymentMethod_ONE_PAY_DOMESTIC_CARD             SupportedPaymentMethod = 14 // onepay với thẻ nội địa
	PaymentMethod_ONE_PAY_QRCODE                    SupportedPaymentMethod = 15 // onepay quét mã QR
)

type PaymentMethod struct {
	Id            string
	Name          string
	Code          string // what
	Method        SupportedPaymentMethod
	Fee           float64 // what
	AdditionalFee float64 // what
	DisplayFee    string  // what
	Icon          string  // what
	IncludeFee    bool    // what
}

type PaymentData struct {
	WebviewUrl string              `json:"webview_url,omitempty"` //wa
	SDK        supportedPaymentSDK `json:"sdk,omitempty"`
}

type PaymentCreator struct {
	Token   string
	AppLang string
}

type Payoo struct {
	OrderXml      string `json:"order_xml"`      //wa
	OrderChecksum string `json:"order_checksum"` //wa
}

type supportedPaymentSDK struct {
	Payoo *Payoo `json:"payoo,omitempty"`
}
