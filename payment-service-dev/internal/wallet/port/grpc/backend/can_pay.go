package backend

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/query"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

func (s BackendServer) CanPay(ctx context.Context, req *pb.CanPayReq) (*pb.CanPayRes, error) {

	qr := query.CanPay{
		UserId:        req.UserId,
		PartnershipId: req.PartnershipId,
		Amount:        req.Amount,
		CurrencyCode:  req.CurrencyCode, //??
	}

	if qr.CurrencyCode == "" {
		return nil, domain.ErrUnsupportedCurrency
	}

	if qr.Amount <= 0 { // check in api
		return nil, domain.ErrInvalidPayAmount
	}

	isOk, err := s.app.Queries.CanPay.Handle(ctx, qr)

	if err != nil {
		return nil, err
	}

	return &pb.CanPayRes{
		Success: isOk,
	}, nil

}
