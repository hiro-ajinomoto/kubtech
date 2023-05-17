package query

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/middleware/cloudflare"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type GetPaymentMethods struct {
	PartnershipId string
	DeviceVersion string
}

type GetPaymentMethodRepo interface {
	ListPaymentMethods(ctx context.Context, partnershipId string) ([]*domain.PaymentMethodInfo, error)
}

type GetPaymentMethodHandler struct {
	repo GetPaymentMethodRepo
}

func NewGetPaymentMethodHandler(repo GetPaymentMethodRepo) GetPaymentMethodHandler {
	if repo == nil {
		panic("nil repo")
	}

	return GetPaymentMethodHandler{repo}
}

func (h GetPaymentMethodHandler) Handle(ctx context.Context, query GetPaymentMethods) ([]*domain.PaymentMethodInfo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "GetPaymentMethodHandler.Handle")
	defer span.End()
	cloudflareInfo := cloudflare.GetContextCloudflareInfo(ctx)
	methods, err := h.repo.ListPaymentMethods(ctx, query.PartnershipId)
	if err != nil {
		logger.Error("Failed to list payment methods: ", err)
		return nil, err
	}
	var res []*domain.PaymentMethodInfo
	for _, v := range methods {
		allow := v.CheckSupportMethod(cloudflareInfo.CountryCode)
		if !allow {
			continue
		}
		res = append(res, v)
	}
	//@TODO review why do we need to check device version
	// for _, method := range methods {
	// 	if method.Version == "" || query.DeviceVersion >= method.Version {
	// 		res = append(res, method)
	// 	}
	// }

	return res, nil
}
