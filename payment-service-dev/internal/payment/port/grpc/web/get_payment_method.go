package web

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/web_partnership"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	"gitlab.bcasia.io/thuynga/apps/common/errors"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/query"
)

func (s *WebServer) GetPaymentMethods(ctx context.Context, req *pb.GetPaymentMethodsReq) (*pb.GetPaymentMethodsRes, error) {

	usrContext, ok := auth.GetContextUser(ctx)
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
