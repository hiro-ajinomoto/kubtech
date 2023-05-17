package service

import (
	"context"
	"sync"

	commonMongoDB "gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	repo "gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type serviceHandler struct {
	repo repo.Repository
}

// Internal Methods
// rpc CreatePaymentMethod(CreatePaymentMethodReq) returns (CreatePaymentMethodRes); -- Not implement yet
type IServiceInternal interface {
	GetPaymentMethodByCode(ctx context.Context, code, partnershipId string) (*domain.PaymentMethodInfo, error)
	GetPaymentMethodById(ctx context.Context, id, partnershipId string) (*domain.PaymentMethodInfo, error)
}

var once sync.Once
var singletonInstance *serviceHandler

func NewInternalService(db commonMongoDB.DB) IServiceInternal {
	if singletonInstance != nil {
		return singletonInstance
	}
	once.Do(func() {
		repo := *repo.NewRepository(db)
		singletonInstance = &serviceHandler{
			repo: repo,
		}
	})
	return singletonInstance
}
func GetInternalService() IServiceInternal {
	return singletonInstance
}
