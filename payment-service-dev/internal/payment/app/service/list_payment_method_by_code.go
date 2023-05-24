package service

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

// cũng thực thi thằng  qq kia luôn =))
func (s serviceHandler) GetPaymentMethodByCode(ctx context.Context, code, partnershipId string) (*domain.PaymentMethodInfo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "GetPaymentMethodByCodeHandler.Handle")
	defer span.End()

	method, err := s.repo.GetPaymentMethodByCode(ctx, code, partnershipId)
	if err != nil {
		logger.Error("Failed to list payment methods: ", err)
		return nil, err
	}

	return method, nil
}
