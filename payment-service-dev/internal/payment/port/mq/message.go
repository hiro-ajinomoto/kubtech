package mq

// RefundMsg: represents the request for refund of an order.
type RefundMsg struct {
	Reason          string  `json:"reason"`
	OrderId         string  `json:"order_id"`
	OrderAmount     float64 `json:"order_amount"`
	PaymentId       string  `json:"payment_id"`
	PaymentProvider string  `json:"payment_provider"`
	PaymentCurrency string  `json:"payment_currency"`
}

type PaymentPendingMsg struct {
	PaymentProvider string `json:"payment_provider"`
	PaymentId       string `json:"payment_id"`
	RefId           string `json:"ref_id"`
	RetryTimes      uint32 `json:"retry_times"`
}
