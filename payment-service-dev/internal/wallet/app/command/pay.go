package command

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type PayRepo interface {
	GetWalletBalanceByUserId(ctx context.Context, userId, partnershipId string) (float64, error)
	WalletSpending(ctx context.Context, userId, partnershipId string, quantity float64) (bool, error)
	CreateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error)
	CreateTransactionLog(ctx context.Context, t *domain.TransactionLog) (*domain.TransactionLog, error)
	UpdateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error)
}

type Pay struct {
	UserId        string
	PartnershipId string
	Amount        float64
	CurrencyCode  string
	ServiceRefId  string
	ServiceName   string
	Description   string
	AppLang       string
}

type PayHandler struct {
	cfg  *config.Schema
	repo PayRepo
}

func NewPayHandler(cfg *config.Schema, repo PayRepo) PayHandler {
	if repo == nil {
		panic("nil PayRepo")
	}
	return PayHandler{
		cfg:  cfg,
		repo: repo,
	}
}

func (h *PayHandler) Handle(ctx context.Context, cmd Pay) (*domain.Transaction, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PayHandler.Handle")
	defer span.End()
	if cmd.Amount <= 0 {
		return nil, domain.ErrInvalidPayAmount
	}

	payPointAmount, err := h.cfg.PointFromCurrency(cmd.Amount, cmd.CurrencyCode)

	if err != nil {
		logger.Error("Invalid exchange point 1, error: %v", err)
		return nil, domain.ErrUnsupportedCurrency
	}

	balance, err := h.repo.GetWalletBalanceByUserId(ctx, cmd.UserId, cmd.PartnershipId)

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	if balance < payPointAmount {
		return nil, domain.ErrInsufficientFunds
	}

	transaction := domain.NewPayTransaction(
		cmd.UserId,
		cmd.PartnershipId,
		payPointAmount,
		cmd.ServiceName,
		cmd.ServiceRefId,
		balance,
		cmd.Description,
	)
	transaction, err = h.repo.CreateTransaction(ctx, transaction)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return nil, err
	}
	transactionLog, _ := domain.NewTransactionLog(transaction, nil)
	go func() {
		h.repo.CreateTransactionLog(ctx, transactionLog)
	}()
	defer func() {
		transactionLog.TransactionUpdated(transaction)
		h.repo.CreateTransactionLog(ctx, transactionLog)
	}()

	isOk, err := h.repo.WalletSpending(ctx, cmd.UserId, cmd.PartnershipId, payPointAmount)

	//TODO push notification to user
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		failureReason := domain.TransactionFailureReasonUnknown
		if err.Error() == "INSUFFICIENT_FUNDS" {
			failureReason = domain.TransactionFailureReasonInsufficientFunds
		}
		transaction.Failed(failureReason)
		var err2 error
		transaction, err2 = h.repo.UpdateTransaction(ctx, transaction)
		if err2 != nil {
			tracing.TraceErr(span, err2)
			logger.Error(err2)
		}
		if err.Error() == "INSUFFICIENT_FUNDS" {
			return nil, domain.ErrInsufficientFunds
		}
		return nil, err

	}

	if isOk {
		lastBalance, _ := h.repo.GetWalletBalanceByUserId(ctx, cmd.UserId, cmd.PartnershipId)
		transaction.Status = domain.TransactionStatusSuccessful
		transaction.Metadata.LastBalance = lastBalance
		transaction, err = h.repo.UpdateTransaction(ctx, transaction)
		if err != nil {
			tracing.TraceErr(span, err)
			logger.Error(err)
			return nil, err
		}
	}

	return transaction, nil
}
