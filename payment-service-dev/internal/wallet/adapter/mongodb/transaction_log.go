package mongodb

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

type TransactionLog struct {
	Base          `bson:",inline,omitempty"`
	TransactionId string                      `bson:"transaction_id"`
	Action        domain.TransactionLogAction `bson:"action"`
	Changes       interface{}                 `bson:"changes"`
}

func (r Repository) CreateTransactionLog(ctx context.Context, t *domain.TransactionLog) (*domain.TransactionLog, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.CreateTransactionLog")
	defer span.End()

	transactionLog := FromTransactionLogDomain(t)
	transactionLog.BeforeCreate()

	err := r.db.Insert(ctx, transactionLogCollectionName, transactionLog)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	return ToTransactionLogDomain(transactionLog), nil
}
