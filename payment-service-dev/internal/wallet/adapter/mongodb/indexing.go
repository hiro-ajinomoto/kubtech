package mongodb

import (
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const (
	IndexDefault = "_id_"

	IndexWalletUserId = "_wallet_user_id_"

	IndexTransactionUserIdTransactionId = "_transaction_user_id_transaction_id_"
	IndexTransactionTransactionId       = "_transaction_transaction_id_"
	IndexTransactionStatusCreatedAt     = "_transaction_status_created_at_"

	IndexTransactionLogTransactionId = "_transaction_log_transaction_id_"
)

func GetWalletIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys: bson.D{
				{"user_id", 1},
			},
			Options: options.Index().SetName(IndexWalletUserId),
		},
	}
	return indexes
}

func GetTransactionIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys: bson.D{
				{"user_id", 1},
				{"transaction_id", 1},
			},
			Options: options.Index().SetName(IndexTransactionUserIdTransactionId),
		},
		{
			Keys: bson.D{
				{"status", 1},
				{"created_at", 1},
			},
			Options: options.Index().SetName(IndexTransactionStatusCreatedAt),
		},
		{
			Keys: bson.D{
				{"transaction_id", 1},
			},
			Options: options.Index().SetName(IndexTransactionTransactionId),
		},
	}
	return indexes
}

func GetTransactionLogIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys: bson.D{
				{"transaction_id", 1},
			},
			Options: options.Index().SetName(IndexTransactionLogTransactionId),
		},
	}
	return indexes
}
