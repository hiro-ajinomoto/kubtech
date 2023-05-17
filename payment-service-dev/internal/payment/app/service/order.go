package service

//go:generate mockery --name=Order

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type UpdatePaymentRequest struct {
	PaymentId        string                   `json:"payment_id"`
	OrderId          string                   `json:"order_id"`
	OrderCode        string                   `json:"order_code"`
	OrderAmount      float64                  `json:"order_amount"`
	PaymentProvider  domain.PaymentProvider   `json:"payment_provider"`
	PaymentCurrency  domain.PaymentCurrency   `json:"payment_currency"`
	IsPaymentSuccess bool                     `json:"is_payment_success"`
	Reason           domain.PaymentFailReason `json:"reason"`
	ServiceName      string                   `json:"service_name"`
}
type UpdatePaymentStatusRequest struct {
	OrderId   string             `json:"order_id"`
	OrderCode string             `json:"order_code"`
	Status    domain.OrderStatus `json:"status"`
}

type Order interface {
	UpdatePayment(ctx context.Context, req UpdatePaymentRequest) error
	UpdatePaymentStatus(req UpdatePaymentStatusRequest) error
}
