package query

import (
	"context"

	commonDomain "gitlab.bcasia.io/thuynga/apps/common/domain"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

type GetTransactionsHistoryRepo interface {
	GetTransactionsByUserId(ctx context.Context, userId string, dPaging *commonDomain.Pagination) ([]*domain.Transaction, int64, error)
}

type GetTransactionsHistory struct {
	UserId     string
	Pagination *commonDomain.Pagination
}

type GetTransactionsHistoryHandler struct {
	repo GetTransactionsHistoryRepo
}

func NewGetTransactionsHistoryHandler(repo GetTransactionsHistoryRepo) GetTransactionsHistoryHandler {
	if repo == nil {
		panic("nil GetTransactionsHistoryRepo")
	}
	return GetTransactionsHistoryHandler{
		repo: repo,
	}
}

func (h *GetTransactionsHistoryHandler) Handle(ctx context.Context, query *GetTransactionsHistory) ([]*domain.Transaction, int64, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "GetTransactionsHistoryHandler.Handle")
	defer span.End()

	transactions, totalRecord, err := h.repo.GetTransactionsByUserId(ctx, query.UserId, query.Pagination)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Errorf("GetTransactionsByUserId failed: %v", err)
		return nil, 0, domain.ErrSomethingWentWrong
	}
	return transactions, totalRecord, nil
}
