package query

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

type GetWallet struct {
	UserId                string
	PartnershipId         string
	ConvertToCurrencyCode string
}

type GetWalletRepo interface {
	GetOrCreateWalletByUserId(ctx context.Context, userId, partnershipId string) (*domain.Wallet, error)
}

type GetWalletInfoHandler struct {
	repo GetWalletRepo
}

func NewGetWalletInfoHandler(repo GetWalletRepo) GetWalletInfoHandler {

	if repo == nil {
		panic("nil repo")
	}

	return GetWalletInfoHandler{
		repo,
	}
}

func (h *GetWalletInfoHandler) Handle(ctx context.Context, query GetWallet) (*domain.Wallet, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "GetWalletInfoHandler.Handle")
	defer span.End()

	wallet, err := h.repo.GetOrCreateWalletByUserId(ctx, query.UserId, query.PartnershipId)

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return wallet, nil

}
