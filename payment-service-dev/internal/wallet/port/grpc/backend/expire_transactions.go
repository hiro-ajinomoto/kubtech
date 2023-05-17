package backend

import (
	"context"

	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/backend"
)

func (s BackendServer) ExpireTransactions(ctx context.Context, req *pb.ExpireTransactionsReq) (*pb.ExpireTransactionsRes, error) {

	transactions, err := s.app.Commands.ExpireTransaction.Handle(ctx)

	if err != nil {
		return nil, err
	}

	return &pb.ExpireTransactionsRes{
		Transactions: ToTransactionsProto(transactions),
	}, nil
}
