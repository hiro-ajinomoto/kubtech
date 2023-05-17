package query

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
)

type GetPaymentMethodById struct {
	MethodId      string
	PartnershipId string
}

type GetPaymentMethodByIdRepo interface {
	GetPaymentMethodById(ctx context.Context, id, partnershipId string) (*domain.PaymentMethodInfo, error)
}

type GetPaymentMethodByIdHandler struct {
	repo GetPaymentMethodByIdRepo
}

func NewGetPaymentMethodByIdHandler(repo GetPaymentMethodByIdRepo) GetPaymentMethodByIdHandler {
	if repo == nil {
		panic("nil repo")
	}

	return GetPaymentMethodByIdHandler{repo}
}

func (h GetPaymentMethodByIdHandler) Handle(ctx context.Context, query GetPaymentMethodById) (*domain.PaymentMethodInfo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "GetPaymentMethodByIdHandler.Handle")
	defer span.End()

	// method, err := h.repo.GetPaymentMethodById(ctx, query.MethodId, query.PartnershipId)
	method, err := service.GetInternalService().GetPaymentMethodById(ctx, query.MethodId, query.PartnershipId)
	if err != nil {
		logger.Error("Failed to list payment methods: ", err)
		return nil, err
	}

	return method, nil
}
