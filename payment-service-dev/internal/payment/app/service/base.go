package service

import (
	"context"
	"sync"

	commonMongoDB "gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	repo "gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

// tất cả đều là service của payment
type serviceHandler struct { // repo có 2 phương thức được định nghĩa ở repo, nên instance của nó có thể sử dụng được
	repo repo.Repository
}

// Internal Methods
// rpc CreatePaymentMethod(CreatePaymentMethodReq) returns (CreatePaymentMethodRes); -- Not implement yet
type IServiceInternal interface { // cha
	// cha --> thằng con luôn là 1 thằng struct được truyền vào để sử dụng
	GetPaymentMethodByCode(ctx context.Context, code, partnershipId string) (*domain.PaymentMethodInfo, error) //2
	GetPaymentMethodById(ctx context.Context, id, partnershipId string) (*domain.PaymentMethodInfo, error)
}

// mấu chốt quan trọng nhất là tạo mối quan hệ interface và struct implement interface (mối quan hệ cha con để có thể sử dụng)

var once sync.Once
var singletonInstance *serviceHandler // thằng này implement IServiceInternal

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
	return singletonInstance //1
}
func GetInternalService() IServiceInternal {
	return singletonInstance
}
