package backend

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/query"
)

func (s BackendServer) GetWalletBalance(ctx context.Context, req *pb.GetWalletBalanceReq) (*pb.GetWalletBalanceRes, error) {

	cmd := query.GetWallet{
		UserId:                req.UserId,
		PartnershipId:         req.PartnershipId,
		ConvertToCurrencyCode: req.ConvertToCurrencyCode,
	}
	wallet, err := s.app.Queries.GetWalletInfo.Handle(ctx, cmd)
	if err != nil {
		return nil, err
	}

	return &pb.GetWalletBalanceRes{
		Balance: wallet.Balance,
	}, nil

}
