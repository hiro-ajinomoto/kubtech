package service

//go:generate mockery --name=VNPay

type VNPay interface {
	Refund(params map[string]string) (res map[string]string, err error)
	PaymentURL(params map[string]string) (url string)
}
