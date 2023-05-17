package backend

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/backend"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/query"
)

func (s *BackendServer) GetPaymentMethodById(ctx context.Context, req *pb.GetPaymentMethodByIdReq) (*pb.GetPaymentMethodByIdRes, error) {

	qr := query.GetPaymentMethodById{
		MethodId:      req.Id,
		PartnershipId: req.PartnershipId,
	}

	method, err := s.app.Queries.GetPaymentMethodById.Handle(ctx, qr)
	if err != nil {
		logger.Error(err)
		return nil, err
	}

	return &pb.GetPaymentMethodByIdRes{
		PaymentMethod: ToPaymentMethodProto(method),
	}, nil
}
