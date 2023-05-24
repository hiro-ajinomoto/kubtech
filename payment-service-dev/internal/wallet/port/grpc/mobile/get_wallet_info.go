package mobile

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/mobile"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	"gitlab.bcasia.io/thuynga/apps/common/errors"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/query"
)

func (s MobileServer) GetWalletInfo(ctx context.Context, req *pb.GetWalletInfoReq) (*pb.GetWalletInfoRes, error) {

	usrContext, ok := auth.GetContextUser(ctx) // return user, boolean
	//  Id            string      `json:"sub"`
	// 	Name          string      `json:"name"`
	// 	Email         string      `json:"email"
	//etc...
	if !ok {
		return nil, errors.ErrInvalidToken
	}

	qr := query.GetWallet{ // instance of GetWallet struct, query is just type
		UserId: usrContext.Id, // which will be put in the the query logic
	}

	// get the wallet information
	wallet, err := s.app.Queries.GetWalletInfo.Handle(ctx, qr)

	if err != nil {
		return nil, err
	}

	return &pb.GetWalletInfoRes{
		Wallet: ToWalletProto(wallet),
	}, nil
}
