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

	usrContext, ok := auth.GetContextUser(ctx) //  get user context???

	if !ok {
		return nil, errors.ErrInvalidToken
	}

	pagination := commonDomain.Pagination{} //cái này giống với adapter struct thì hơn, tại vì nó làm việc với databse
	pagination.Init(1, 10)                  // init pagination(1,10)
	if req.Pagination != nil {              // if có request thì cài đặt theo request
		pagination.Init(int64(req.Pagination.PageNumber), int64(req.Pagination.PageLimit))
		// set page number và page limit
	}

	qr := &query.GetTransactionsHistory{
		UserId:     usrContext.Id, // truyền vào userId
		Pagination: &pagination,   // truyền vào pagination
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
