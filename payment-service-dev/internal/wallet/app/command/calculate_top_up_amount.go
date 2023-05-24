package command

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type CalculateTopUpAmountRepo interface{}

type CalculateTopUpAmount struct {
	Amount            float64
	CurrencyCode      string
	PaymentMethodCode string
	PartnershipID     string
}

type CalculateTopUpAmountHandler struct {
	cfg        *config.Schema
	repo       CalculateTopUpAmountRepo
	paymentSvc service.PaymentService // lúc start app, cfg, repo, paymentSvc sẽ được bơm vào đây, vốn đã implment từ repository db và paymentService
}

// bơm vào bằng thằng new này
func NewCalculateTopUpAmountHandler(cfg *config.Schema, repo CalculateTopUpAmountRepo, paymentSvc service.PaymentService) CalculateTopUpAmountHandler {
	if repo == nil {
		panic("nil CalculateTopUpAmountRepo")
	}
	return CalculateTopUpAmountHandler{
		cfg:        cfg,
		repo:       repo,
		paymentSvc: paymentSvc,
	}
}

func (h *CalculateTopUpAmountHandler) Handle(ctx context.Context, cmd *CalculateTopUpAmount) (*domain.Transaction, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "CalculateTopUpAmountHandler.Handle")
	defer span.End()

	paymentMethod, err := h.paymentSvc.InternalGetPaymentMethodByCode(ctx, cmd.PaymentMethodCode, cmd.PartnershipID) // ???

	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return nil, domain.ErrInvalidPaymentMethod
	}
	transaction := domain.Transaction{
		Amount: cmd.Amount,
		Type:   domain.TransactionTypeTopUp,
	}
	topUp := domain.TransactionMetadataTopUp{
		PaymentMethod: paymentMethod,
		CurrencyCode:  cmd.CurrencyCode,
	}
	transaction.Metadata.TopUp = &topUp
	transaction.ConvertAmount()

	return &transaction, nil
}
