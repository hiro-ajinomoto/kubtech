package backend

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

func (s BackendServer) Pay(ctx context.Context, req *pb.PayReq) (*pb.PayRes, error) {

	cmd := command.Pay{
		UserId:        req.UserId,
		PartnershipId: req.PartnershipId,
		Amount:        req.Amount,
		ServiceName:   req.ServiceName,
		ServiceRefId:  req.ServiceRefId,
		Description:   req.Description,
		CurrencyCode:  req.CurrencyCode,
	}

	if cmd.CurrencyCode == "" {
		return nil, domain.ErrUnsupportedCurrency
	}
	if cmd.Amount <= 0 {
		return nil, domain.ErrInvalidPayAmount
	}

	transaction, err := s.app.Commands.Pay.Handle(ctx, cmd)
	if err != nil {
		return nil, err
	}

	if transaction.Status == domain.TransactionStatusSuccessful {
		return &pb.PayRes{
			Success:       true,
			TransactionId: transaction.Id,
		}, nil
	}

	return &pb.PayRes{
		Success: false,
	}, nil

}
