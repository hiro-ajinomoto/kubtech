package service

import (
	"context"
	"time"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

//go:generate mockery --name=Payoo

type Payoo interface {
	GenerateOrderInfo(ctx context.Context, params map[string]string) (orderInfoXML string, checksum string, err error)
	GetOrderInfo(ctx context.Context, orderId string, purchaseDate *time.Time) (*domain.PayooOrderInfoResponse, error)
	Refund(ctx context.Context, params map[string]string) error
}
