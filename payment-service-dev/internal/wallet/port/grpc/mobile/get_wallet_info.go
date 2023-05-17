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
	// 	Email         string      `json:"email"`
	// 	Token         string      `json:"token"`
	// 	TokenId       string      `json:"id"`
	// 	TokenIss      string      `json:"iss"`
	// 	TokenExp      int64       `json:"exp"`
	// 	IsAdmin       bool        `json:"admin"`
	// 	PartnershipId string      `json:"partnership_id"`
	// 	PartnerShopId string      `json:"partner_shop_id"`
	// 	Role          domain.Role `json:"role"`
	// }

	if !ok {
		return nil, errors.ErrInvalidToken
	}

	qr := query.GetWallet{
		UserId: usrContext.Id,
	}

	wallet, err := s.app.Queries.GetWalletInfo.Handle(ctx, qr)

	if err != nil {
		return nil, err
	}

	return &pb.GetWalletInfoRes{
		Wallet: ToWalletProto(wallet),
	}, nil
}
