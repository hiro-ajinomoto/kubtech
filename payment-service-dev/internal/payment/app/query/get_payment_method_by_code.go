package query

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
)

type GetPaymentMethodByCode struct {
	Code          string
	PartnershipId string
}

type GetPaymentMethodByCodeRepo interface {
	GetPaymentMethodByCode(ctx context.Context, code, partnershipId string) (*domain.PaymentMethodInfo, error)
}

type GetPaymentMethodByCodeHandler struct {
	repo GetPaymentMethodByCodeRepo
}

func NewGetPaymentMethodByCodeHandler(repo GetPaymentMethodByCodeRepo) GetPaymentMethodByCodeHandler {
	if repo == nil {
		panic("nil repo")
	}

	return GetPaymentMethodByCodeHandler{repo}
}

func (h GetPaymentMethodByCodeHandler) Handle(ctx context.Context, query GetPaymentMethodByCode) (*domain.PaymentMethodInfo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "GetPaymentMethodByCodeHandler.Handle")
	defer span.End()

	// method, err := h.repo.GetPaymentMethodByCode(ctx, query.Code, query.PartnershipId)

	method, err := service.GetInternalService().GetPaymentMethodByCode(ctx, query.Code, query.PartnershipId)
	if err != nil {
		logger.Error("Failed to list payment methods: ", err)
		return nil, err
	}

	return method, nil
}
