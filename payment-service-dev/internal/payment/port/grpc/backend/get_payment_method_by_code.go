package backend

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/backend"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/query"
)

func (s *BackendServer) GetPaymentMethodByCode(ctx context.Context, req *pb.GetPaymentMethodByCodeReq) (*pb.GetPaymentMethodByCodeRes, error) {

	qr := query.GetPaymentMethodByCode{
		Code:          req.Code,
		PartnershipId: req.PartnershipId,
	}

	method, err := s.app.Queries.GetPaymentMethodByCode.Handle(ctx, qr)
	if err != nil {
		logger.Error(err) //what
		return nil, err
	}

	return &pb.GetPaymentMethodByCodeRes{
		PaymentMethod: ToPaymentMethodProto(method),
	}, nil
}
