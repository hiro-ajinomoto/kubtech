package service

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

type PaymentService interface {
	InternalGetPaymentMethodByCode(ctx context.Context, code, partnershipId string) (*domain.PaymentMethod, error)
	GetPaymentData(ctx context.Context, paymentCreator domain.PaymentCreator, transaction *domain.Transaction) (*domain.PaymentData, error)
}
