package query

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type CanPayRepo interface { // what truly communicate with db
	GetWalletBalanceByUserId(ctx context.Context, userId, partnershipId string) (float64, error)
}

type CanPay struct {
	UserId        string
	PartnershipId string //???
	Amount        float64
	CurrencyCode  string //??
}

type CanPayHandler struct {
	cfg  *config.Schema
	repo CanPayRepo
}

func NewCanPayHandler(cfg *config.Schema, repo CanPayRepo) CanPayHandler {
	if repo == nil {
		panic("nil CanPayRepo")
	}
	return CanPayHandler{
		cfg:  cfg,
		repo: repo,
	}
}

func (h *CanPayHandler) Handle(ctx context.Context, query CanPay) (bool, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "CanPayHandler.Handle")
	defer span.End()

	if query.Amount <= 0 { // check in handlers
		return false, domain.ErrInvalidPayAmount
	}

	payPointAmount, err := h.cfg.PointFromCurrency(query.Amount, query.CurrencyCode) // ??
	if err != nil {
		logger.Error("Invalid exchange point 3, error: %v", err)
		return false, domain.ErrUnsupportedCurrency
	}

	balance, err := h.repo.GetWalletBalanceByUserId(ctx, query.UserId, query.PartnershipId) //??

	if err != nil {
		tracing.TraceErr(span, err)
		return false, err
	}
	return balance >= payPointAmount, nil

}
