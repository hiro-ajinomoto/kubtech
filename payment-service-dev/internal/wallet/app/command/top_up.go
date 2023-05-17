package command

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/helpers"
)

type TopUpRepo interface {
	CreateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error)
	CreateTransactionLog(ctx context.Context, t *domain.TransactionLog) (*domain.TransactionLog, error)
	UpdateTransaction(ctx context.Context, t *domain.Transaction) (*domain.Transaction, error)
	GetWalletBalanceByUserId(ctx context.Context, userID, partnershipID string) (float64, error)
}

type TopUp struct {
	UserID            string
	PartnershipID     string
	Amount            float64
	CurrencyCode      string
	PaymentMethodCode string
	UserToken         string
	AppLang           string
}

type TopUpHandler struct {
	cfg             *config.Schema
	repo            TopUpRepo
	paymentSvc      service.PaymentService
	notificationSvc service.NotificationService
}

func NewTopUpHandler(
	cfg *config.Schema,
	repo TopUpRepo,
	paymentSvc service.PaymentService,
	notificationSvc service.NotificationService,
) TopUpHandler {
	if repo == nil {
		panic("nil TopUpRepo")
	}
	return TopUpHandler{
		cfg:             cfg,
		repo:            repo,
		paymentSvc:      paymentSvc,
		notificationSvc: notificationSvc,
	}
}

func (h *TopUpHandler) Handle(ctx context.Context, cmd TopUp) (*domain.PaymentData, *domain.Transaction, error) {

	ctx, span := tracing.StartSpanFromContext(ctx, "TopUpHandler.Handle")
	defer span.End()

	paymentMethod, err := h.paymentSvc.InternalGetPaymentMethodByCode(ctx, cmd.PaymentMethodCode, cmd.PartnershipID)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return nil, nil, domain.ErrInvalidPaymentMethod
	}

	lastBalance, err := h.repo.GetWalletBalanceByUserId(ctx, cmd.UserID, cmd.PartnershipID)

	if err != nil {
		logger.Error(err)
		tracing.TraceErr(span, err)
		return nil, nil, domain.ErrSomethingWentWrong
	}

	transaction := domain.NewTopUpTransaction(
		cmd.PartnershipID,
		cmd.UserID,
		cmd.Amount,
		paymentMethod,
		lastBalance,
		cmd.CurrencyCode,
	)

	transaction, err = h.repo.CreateTransaction(ctx, transaction)
	if err != nil {
		logger.Errorf("Create transaction failed: %v", err)
		tracing.TraceErr(span, err)
		return nil, nil, domain.ErrSomethingWentWrong
	}

	transactionLog, _ := domain.NewTransactionLog(transaction, nil)
	go func() {
		h.repo.CreateTransactionLog(ctx, transactionLog)
	}()

	logger.Debugf("TX %+v\n", transaction)

	paymentCreator := domain.PaymentCreator{
		Token:   cmd.UserToken,
		AppLang: cmd.AppLang,
	}

	paymentData, err := h.paymentSvc.GetPaymentData(ctx, paymentCreator, transaction)

	if err != nil {
		logger.Errorf("[%s] Get payment data failed: %v", cmd.PaymentMethodCode, err)
		tracing.TraceErr(span, err)

		cloneTx := new(domain.Transaction)
		helpers.DeepCopy(transaction, cloneTx)
		transaction.Failed(domain.TransactionFailureReasonPaymentMethodNotAvailable)
		transaction, err = h.repo.UpdateTransaction(ctx, transaction)
		go func() {
			transactionLog.TransactionUpdated(transaction)
			h.repo.CreateTransactionLog(ctx, transactionLog)
		}()

		return nil, nil, domain.ErrPaymentMethodNotAvailable
	}

	return paymentData, transaction, nil
}
