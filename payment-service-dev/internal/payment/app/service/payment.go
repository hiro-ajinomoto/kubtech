package service

//go:generate mockery --name=Payment

type RecheckPending struct {
	PaymentProvider string `json:"payment_provider"`
	TransactionId   string `json:"payment_id"`
	OrderId         string `json:"order_id"`
	RetryTimes      uint32 `json:"retry_times"`
}

type Payment interface {
	RecheckPending(req RecheckPending) error
}
