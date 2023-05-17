package backend

import (
	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

func ToTransactionProto(t *domain.Transaction) *pb.Transaction {
	transactionProto := &pb.Transaction{
		Id:     t.Id,
		Status: pb.TransactionStatus(t.Status),
		Type:   pb.TransactionType(t.Type),
		Amount: t.Amount,
		Fee:    0,
		Time:   t.CreatedAt,
	}
	transactionProto.Fund = domain.DefaultFund
	if t.Type == domain.TransactionTypeTopUp {
		transactionProto.Fund = t.Metadata.TopUp.PaymentMethod.Code
	}
	return transactionProto
}

func ToTransactionsProto(transactions []*domain.Transaction) []*pb.Transaction {
	var txs []*pb.Transaction

	for _, t := range transactions {
		txs = append(txs, ToTransactionProto(t))
	}
	return txs
}
