package mobile

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/mobile"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	"gitlab.bcasia.io/thuynga/apps/common/errors"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/query"
)

func (s *MobileServer) GetPaymentMethods(ctx context.Context, req *pb.GetPaymentMethodsReq) (*pb.GetPaymentMethodsRes, error) {

	usrContext, ok := auth.GetContextUser(ctx)
	// PartnershipId cái này được truyền vào request hay sao?
	if !ok {
		return nil, errors.ErrInvalidToken
	}

	qr := query.GetPaymentMethods{
		PartnershipId: usrContext.PartnershipId,
	}

	paymentMethods, err := s.app.Queries.GetPaymentMethods.Handle(ctx, qr)

	if err != nil {
		return nil, err
	}

	return &pb.GetPaymentMethodsRes{
		PaymentMethods: ToPaymentMethodsProto(paymentMethods),
	}, nil
}
