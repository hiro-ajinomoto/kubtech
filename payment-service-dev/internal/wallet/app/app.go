package app

import (
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/command"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/app/query"
)

type Application struct {
	Commands Commands
	Queries  Queries
}

type Commands struct {
	TopUp                      command.TopUpHandler
	CalculateTopUpAmount       command.CalculateTopUpAmountHandler
	TopUpTransactionProcessing command.TopUpProcessingHandler
	Pay                        command.PayHandler
	ExpireTransaction          command.ExpireTransactionHandler
}
type Queries struct {
	GetWalletInfo          query.GetWalletInfoHandler
	GetTransactionsHistory query.GetTransactionsHistoryHandler
	CanPay                 query.CanPayHandler
}
