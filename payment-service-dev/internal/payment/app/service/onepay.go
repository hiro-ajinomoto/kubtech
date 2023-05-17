package service

//go:generate mockery --name=VNPay

type OnePay interface {
	PaymentURL(params map[string]string) (url string)
	ChecksumIsValid(params map[string]string) bool
	Refund(params map[string]string) (res map[string]string, err error)
	GetInvoicesInfo(merchTxnRef string) (res map[string]string, err error)
}
