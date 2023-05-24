package query

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

type GetWallet struct { // naming is bit weird
	UserId                string
	PartnershipId         string // ?
	ConvertToCurrencyCode string // ?
}

type GetWalletRepo interface { // get the wallet info here
	GetOrCreateWalletByUserId(ctx context.Context, userId, partnershipId string) (*domain.Wallet, error)
}

type GetWalletInfoHandler struct { // query handler -> biggest
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
	ctx, span := tracing.StartSpanFromContext(ctx, "GetWalletInfoHandler.Handle") // open span // used for tracing error, if err use loggger.Error to print the tracer
	//  span {{[0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] [0 0 0 0 0 0 0 0] 0 {[]} true} 0xc00074cac0}
	defer span.End() // close span

	// communicate with database // logic from database will be separate
	wallet, err := h.repo.GetOrCreateWalletByUserId(ctx, query.UserId, query.PartnershipId)

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return wallet, nil

}
