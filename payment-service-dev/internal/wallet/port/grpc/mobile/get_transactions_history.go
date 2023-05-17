package mobile

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/mobile"
	"gitlab.bcasia.io/thuynga/apps/common/auth"
	commonDomain "gitlab.bcasia.io/thuynga/apps/common/domain"
	"gitlab.bcasia.io/thuynga/apps/common/errors"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/query"
)

func (s MobileServer) GetTransactionsHistory(ctx context.Context, req *pb.GetTransactionsHistoryReq) (*pb.GetTransactionsHistoryRes, error) {

	usrContext, ok := auth.GetContextUser(ctx)

	if !ok {
		return nil, errors.ErrInvalidToken
	}

	pagination := commonDomain.Pagination{}
	pagination.Init(1, 10)
	if req.Pagination != nil {
		pagination.Init(int64(req.Pagination.PageNumber), int64(req.Pagination.PageLimit))

	}

	qr := &query.GetTransactionsHistory{
		UserId:     usrContext.Id,
		Pagination: &pagination,
	}

	transactions, totalRecord, err := s.app.Queries.GetTransactionsHistory.Handle(ctx, qr)
	if err != nil {
		return nil, err
	}
	pagination.SetTotalRecord(totalRecord)

	res := &pb.GetTransactionsHistoryRes{
		Transactions: ToTransactionsProto(transactions),
		Pagination:   ToPagingProto(&pagination),
	}

	return res, nil
}
