package mobile

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/mobile"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"google.golang.org/grpc/metadata"
)

// BUSSINESS LOGIC

func (s MobileServer) TopUp(ctx context.Context, req *pb.TopUpReq) (*pb.TopUpRes, error) {
	// make trả về type giống với argument được truyền vào và sức chứa của nó
	// New trả về type MD với key của md đều được lower key
	// fromComingContext: trả về 1 MD
	// ctx.value mục đích của cái này?

	md, ok := metadata.FromIncomingContext(ctx) // cũng trả về 1 md với lower case
	if len(md["token"]) <= 0 {
		return nil, domain.ErrUnauthorized

	}

	userContext, ok := auth.GetContextUser(ctx) //??
	if !ok {
		return nil, domain.ErrUnauthorized
	}
	userToken := md["token"][0]              //?
	userLang := auth.GetLangFromContext(ctx) //???

	cmd := command.TopUp{
		UserID:            userContext.Id,
		PartnershipID:     userContext.PartnershipId,
		Amount:            req.Amount,
		CurrencyCode:      req.CurrencyCode,
		PaymentMethodCode: req.PaymentMethodCode,
		AppLang:           userLang,
		UserToken:         userToken,
	}
	if cmd.Amount <= 0 {
		return nil, domain.ErrInvalidTopUpAmount
	}

	// QUERY COMMAND LOGIC
	paymentData, transaction, err := s.app.Commands.TopUp.Handle(ctx, cmd)

	if err != nil {
		return nil, err
	}

	return ToTopUpProto(paymentData, transaction), nil
}
