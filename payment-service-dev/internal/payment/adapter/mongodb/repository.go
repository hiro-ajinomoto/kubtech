package mongodb

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
)

const (
	vnpayCollectionName         string = "vnpay_transactions"
	paypalCollectionName        string = "paypal_transactions"
	tixlabsCollectionName       string = "tixlabs_transactions"
	twoCheckoutCollectionName   string = "two_checkout_transactions"
	payooCollectionName         string = "payoo_transactions"
	onePayCollectionName        string = "onepay_transactions"
	paymentMethodCollectionName string = "payment_methods"
)

type Repository struct {
	db mongodb.DB // type
}

func NewRepository(db mongodb.DB) *Repository {
	if db == nil {
		panic("nil *mongo.Database")
	}

	err := db.EnsureIndexes(context.Background(), vnpayCollectionName, GetVNPayTxIndexes()) //???
	if err != nil {
		panic(err)
	}

	err = db.EnsureIndexes(context.Background(), paypalCollectionName, GetPaypalTxIndexes()) ///???
	if err != nil {
		panic(err)
	}

	err = db.EnsureIndexes(context.Background(), tixlabsCollectionName, GetTixlabsTxIndexes()) ///???
	if err != nil {
		panic(err)
	}

	err = db.EnsureIndexes(context.Background(), twoCheckoutCollectionName, GetTwoCheckoutTxIndexes()) ///???
	if err != nil {
		panic(err)
	}

	err = db.EnsureIndexes(context.Background(), payooCollectionName, GetPayooIndexes()) ///???
	if err != nil {
		panic(err)
	}

	err = db.EnsureIndexes(context.Background(), onePayCollectionName, GetOnePayIndexes()) ///???
	if err != nil {
		panic(err)
	}

	err = db.EnsureIndexes(context.Background(), paymentMethodCollectionName, GetPaymentMethodIndexes()) ///???
	if err != nil {
		panic(err)
	}

	return &Repository{db}
}
