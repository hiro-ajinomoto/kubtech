package command

import (
	"context"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/helpers"
)

type ExpireTransactionRepo interface {
	GetExpiredTransactions(ctx context.Context, expireTime int64) ([]*domain.Transaction, error)
	UpdateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error)
	CreateTransactionLog(ctx context.Context, t *domain.TransactionLog) (*domain.TransactionLog, error)
}

type ExpireTransaction struct {
}

type ExpireTransactionHandler struct {
	cfg             *config.Schema
	repo            ExpireTransactionRepo
	notificationSvc service.NotificationService
}

func NewExpireTransactionHandler(cfg *config.Schema, repo ExpireTransactionRepo, notificationSvc service.NotificationService) ExpireTransactionHandler {
	if repo == nil {
		panic("nil ExpireTransactionRepo")
	}
	return ExpireTransactionHandler{
		cfg:             cfg,
		repo:            repo,
		notificationSvc: notificationSvc,
	}
}

func (h *ExpireTransactionHandler) Handle(ctx context.Context) ([]*domain.Transaction, error) {

	ctx, span := tracing.StartSpanFromContext(ctx, "ExpireTransactionHandler.Handle")
	defer span.End()

	expireTime := time.Now().Add(-(time.Duration(h.cfg.TransactionExpireTime) * time.Second)).UTC().UnixMilli()

	transactions, err := h.repo.GetExpiredTransactions(ctx, expireTime)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return nil, err
	}
	for _, transaction := range transactions {
		logger.Info(transaction)
		transactionLog, _ := domain.NewTransactionLog(transaction, nil)
		oldTx := new(domain.Transaction)
		helpers.DeepCopy(transaction, oldTx)
		transaction.Failed(domain.TransactionFailureReasonExpired)
		transaction, err = h.repo.UpdateTransaction(ctx, transaction)
		if err != nil {
			tracing.TraceErr(span, err)
			logger.Errorf("Expire transaction error: %+v", err)
		} else {
			//TODO push notification
			logger.Infof("TransactionId %s expired", transaction.Id)
			transactionLog.TransactionUpdated(transaction)
			_, err := h.repo.CreateTransactionLog(ctx, transactionLog)
			if err != nil {
				tracing.TraceErr(span, err)
			}

		}
	}
	return transactions, nil
}
