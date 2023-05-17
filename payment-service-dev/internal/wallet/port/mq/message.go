package mq

type PaymentPendingMsg struct {
	PaymentProvider string `json:"payment_provider"`
	PaymentId       string `json:"payment_id"`
	OrderId         string `json:"order_id"`
	RetryTimes      uint32 `json:"retry_times"`
}

type PaymentProcessingMsg struct {
	PaymentId        string  `json:"payment_id"`
	OrderId          string  `json:"order_id"`
	OrderCode        string  `json:"order_code"`
	OrderAmount      float64 `json:"order_amount"`
	PaymentProvider  string  `json:"payment_provider"`
	PaymentCurrency  string  `json:"payment_currency"`
	IsPaymentSuccess bool    `json:"is_payment_success"`
	Reason           int     `json:"reason"`
	ServiceName      string  `json:"service_name"`
}
