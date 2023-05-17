package service

//go:generate mockery --name=TwoCheckout

type TwoCheckout interface {
	PaymentURL(params map[string]string) (url string)
}
