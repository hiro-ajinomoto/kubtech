package command

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type TopUpProcessingRepo interface {
	UpdateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error)
	GetTransactionByTransactionId(ctx context.Context, transactionId string) (*domain.Transaction, error)
	WalletEarning(ctx context.Context, userId, partnershipId string, quantity float64) (*domain.Wallet, error)
	CreateTransactionLog(ctx context.Context, t *domain.TransactionLog) (*domain.TransactionLog, error)
	GetWalletBalanceByUserId(ctx context.Context, userId, partnershipId string) (float64, error)
}

type TopUpProcessing struct {
	TransactionId    string
	PaymentId        string
	PaymentProvider  string
	PaymentCurrency  string
	IsPaymentSuccess bool
	Reason           string
}

type TopUpProcessingHandler struct {
	cfg             *config.Schema
	repo            TopUpProcessingRepo
	notificationSvc service.NotificationService
}

func NewTopUpProcessingHandler(cfg *config.Schema, repo TopUpProcessingRepo, notificationSvc service.NotificationService) TopUpProcessingHandler {
	if repo == nil {
		panic("nil TopUpProcessingRepo")
	}
	return TopUpProcessingHandler{
		cfg:             cfg,
		repo:            repo,
		notificationSvc: notificationSvc,
	}
}

func (h *TopUpProcessingHandler) Handle(ctx context.Context, cmd *TopUpProcessing) (*domain.Transaction, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "TopUpProcessingHandler.Handle")
	defer span.End()

	tx, err := h.repo.GetTransactionByTransactionId(ctx, cmd.TransactionId)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("GetTransactionByTransactionId error: %+v\n", err)
		return nil, domain.ErrSomethingWentWrong
	}

	if tx == nil {
		return nil, domain.ErrTransactionNotFound
	}

	if tx.Status == domain.TransactionStatusFailed {
		return nil, domain.ErrTransactionIsFailed
	}
	if tx.Status == domain.TransactionStatusSuccessful {
		logger.Errorf("TransactionId %s already earned", tx.Id)
		return nil, domain.ErrTransactionIsProcessed

	}

	transactionLog, _ := domain.NewTransactionLog(tx, nil)
	defer func() {
		transactionLog.TransactionUpdated(tx)
		h.repo.CreateTransactionLog(ctx, transactionLog)
	}()

	payPointAmount, err := h.cfg.PointFromCurrency(tx.Metadata.TopUp.Amount, tx.Metadata.TopUp.CurrencyCode)
	if err != nil {
		logger.Error("Invalid exchange point 2, error: %v", err)
		return nil, domain.ErrUnsupportedCurrency
	}
	tx.Amount = payPointAmount
	if cmd.IsPaymentSuccess {
		// update transaction status
		lastBalance, err := h.repo.GetWalletBalanceByUserId(ctx, tx.UserId, tx.PartnershipId)
		if err != nil {
			tracing.TraceErr(span, err)
		}
		tx.Status = domain.TransactionStatusSuccessful
		tx.Metadata.LastBalance = lastBalance + tx.Amount
		tx, err = h.repo.UpdateTransaction(ctx, tx)
		if err != nil {
			tracing.TraceErr(span, err)
			logger.Errorf("UpdateTransaction error: %+v\n", err)
			return nil, domain.ErrSomethingWentWrong
		}
		// earn point
		_, err = h.repo.WalletEarning(ctx, tx.UserId, tx.PartnershipId, tx.Amount)
		if err != nil {
			tracing.TraceErr(span, err)
			logger.Errorf("WalletEarning error: %+v\n", err)
			return nil, domain.ErrSomethingWentWrong
		}

		err = h.notificationSvc.SendNotificationTopUpSuccessFully(tx.UserId, tx.Id, tx.Amount, h.cfg.PointDisplayName)
		if err != nil {
			tracing.TraceErr(span, err)
		}

		return tx, nil
	}
	tx.Failed(domain.TransactionFailureReasonPaymentGatewayFailed)
	tx, err = h.repo.UpdateTransaction(ctx, tx)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("UpdateTransaction error: %+v\n", err)
		return nil, domain.ErrSomethingWentWrong
	}
	err = h.notificationSvc.SendNotificationTopUpFailed(tx.UserId, tx.Id)
	if err != nil {
		tracing.TraceErr(span, err)
	}

	return tx, nil
}
