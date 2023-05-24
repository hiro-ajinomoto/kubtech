package mongodb

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
)

const (
	walletCollectionName         string = "wallets"
	transactionCollectionName    string = "transactions"
	transactionLogCollectionName string = "transaction_logs"
)

// lấy reported bọc lại thằng db
type Repository struct {
	db mongodb.DB
}

func NewRepository(db mongodb.DB) *Repository {
	if db == nil {
		panic("nil *mongo.Database")
	}
	//???
	err := db.EnsureIndexes(context.Background(), walletCollectionName, GetWalletIndexes())
	if err != nil {
		panic(err)
	}
	err = db.EnsureIndexes(context.Background(), transactionCollectionName, GetTransactionIndexes())
	if err != nil {
		panic(err)
	}
	err = db.EnsureIndexes(context.Background(), transactionLogCollectionName, GetTransactionLogIndexes())
	if err != nil {
		panic(err)
	}

	return &Repository{
		db: db,
	}
}
