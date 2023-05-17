package mobile

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/mobile"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

func (s MobileServer) CalculateTopUpAmount(ctx context.Context, req *pb.CalculateTopUpAmountReq) (*pb.CalculateTopUpAmountRes, error) {

	userContext, ok := auth.GetContextUser(ctx)
	if !ok {
		return nil, domain.ErrUnauthorized
	}

	cmd := command.CalculateTopUpAmount{
		Amount:            req.Amount,
		CurrencyCode:      req.CurrencyCode,
		PartnershipID:     userContext.PartnershipId,
		PaymentMethodCode: req.PaymentMethodCode,
	}

	tmpTransaction, err := s.app.Commands.CalculateTopUpAmount.Handle(ctx, &cmd)
	if err != nil {
		return nil, err
	}

	return &pb.CalculateTopUpAmountRes{
		Amount:        tmpTransaction.Metadata.TopUp.Amount,
		Fee:           tmpTransaction.Metadata.TopUp.Fee,
		TotalPrice:    tmpTransaction.Metadata.TopUp.TotalPrice,
		CurrencyCode:  tmpTransaction.Metadata.TopUp.CurrencyCode,
		PaymentMethod: ToTopUpPaymentMethodProto(tmpTransaction),
	}, nil
}
