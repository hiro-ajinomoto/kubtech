package service

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

func (s serviceHandler) GetPaymentMethodById(ctx context.Context, id, partnershipId string) (*domain.PaymentMethodInfo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "GetPaymentMethodByIdHandler.Handle")
	defer span.End()

	method, err := s.repo.GetPaymentMethodById(ctx, id, partnershipId)
	if err != nil {
		logger.Error("Failed to list payment methods: ", err)
		return nil, err
	}

	return method, nil
}
