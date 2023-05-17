package mongodb

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	commonDomain "gitlab.bcasia.io/thuynga/apps/common/domain"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Transaction struct {
	Base          `bson:",inline,omitempty"`
	UserId        string                   `bson:"user_id"`
	PartnershipId string                   `bson:"partnership_id"`
	TransactionId string                   `bson:"transaction_id"`
	Amount        float64                  `bson:"amount"`
	Fee           float64                  `bson:"fee"`
	Description   string                   `bson:"description,omitempty"`
	Status        domain.TransactionStatus `bson:"status"`
	Type          domain.TransactionType   `bson:"type"`
	Metadata      transactionMetadata      `bson:"metadata"`
}
type transactionMetadata struct {
	LastBalance   float64 `bson:"last_balance,omitempty"`
	FailureReason string  `bson:"failure_reason"`
	TopUp         *topUp  `bson:"top_up,omitempty"`
	Pay           *pay    `bson:"pay,omitempty"`
}

type topUp struct {
	PaymentMethod *domain.PaymentMethod `bson:"payment_method"`
	CurrencyCode  string                `bson:"currency_code"`
	Amount        float64               `bson:"amount"`
	Fee           float64               `bson:"fee"`
	TotalPrice    float64               `bson:"total_price"`
}

type pay struct {
	ServiceName  string `bson:"service_name"`
	ServiceRefId string `bson:"service_ref_id"`
	Description  string `bson:"description"`
}

func (r Repository) CreateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.CreateTransaction")
	defer span.End()

	transaction := FromTransactionDomain(t)
	transaction.BeforeCreate()

	err := r.db.Insert(ctx, transactionCollectionName, transaction)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	return ToTransactionDomain(transaction), nil
}

func (r Repository) GetTransactionByTransactionId(ctx context.Context, transactionId string) (*domain.Transaction, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetTransactionByTransactionId")
	defer span.End()
	var transaction Transaction

	filter := bson.M{
		"transaction_id": transactionId,
	}

	opts := []mongodb.Option{
		mongodb.WithHint(IndexTransactionUserIdTransactionId),
		mongodb.WithFilter(filter),
	}

	err := r.db.FindOne(
		ctx,
		transactionCollectionName,
		&transaction,
		opts...,
	)
	if err == mongo.ErrNoDocuments {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return ToTransactionDomain(&transaction), nil
}

func (r Repository) UpdateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.UpdateTransaction")
	defer span.End()

	transaction := FromTransactionDomain(t)

	transaction.BeforeUpdate()

	filter := bson.M{
		"transaction_id": transaction.TransactionId,
	}

	err := r.db.UpdateOne(
		ctx,
		transactionCollectionName,
		filter,
		transaction,
		&options.UpdateOptions{
			Hint: IndexTransactionUserIdTransactionId,
		})

	if err != nil {
		return nil, err
	}
	return ToTransactionDomain(transaction), nil
}

func (r Repository) GetExpiredTransactions(ctx context.Context, expireTime int64) ([]*domain.Transaction, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetExpiredTransactions")
	defer span.End()
	var transactions []*Transaction

	filter := bson.M{
		"status": domain.TransactionStatusProcessing,
		"created_at": bson.M{
			"$lte": expireTime,
		},
	}

	opts := []mongodb.Option{
		mongodb.WithHint(IndexTransactionStatusCreatedAt),
		mongodb.WithFilter(filter),
	}

	err := r.db.Find(
		ctx,
		transactionCollectionName,
		&transactions,
		opts...,
	)
	if err == mongo.ErrNoDocuments {
		return nil, nil
	}
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	return ToTransactionsDomain(transactions), nil
}

func (r Repository) GetTransactionsByUserId(ctx context.Context, userId string, dPaging *commonDomain.Pagination) ([]*domain.Transaction, int64, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetTransactionsByUserId")
	defer span.End()

	var transactions []*Transaction

	filter := bson.M{
		"user_id": userId,
	}

	opts := []mongodb.Option{
		mongodb.WithHint(IndexTransactionStatusCreatedAt),
		mongodb.WithFilter(filter),
	}
	if dPaging != nil {
		opts = append(opts, mongodb.WithPaging(dPaging))
	}

	err := r.db.Find(
		ctx,
		transactionCollectionName,
		&transactions,
		opts...,
	)
	if err == mongo.ErrNoDocuments {
		return nil, 0, nil
	}
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, 0, err
	}
	return ToTransactionsDomain(transactions), dPaging.TotalRecord, nil
}
