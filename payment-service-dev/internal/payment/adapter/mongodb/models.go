package mongodb

import (
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const (
	IndexDefault               = "_id_"
	VNPayTxIndexRefId          = "_ref_id_"
	PaypalTxIndexPaypalOrderId = "_paypal_order_id_"
	TixlabsTxIndexOrderCode    = "_order_code_"
	TwoCheckoutTxIndexRefId    = "_ref_id_"
	PayooTxIndexOrderId        = "_payoo_order_id_"
	PayooTxIndexOrderCode      = "_payoo_order_code_"
	OnePayTxIndexOrderCode     = "_onepay_order_code_"
	OnePayTxIndexRefId         = "_ref_id_"
	OnePayTxIndexOrderId       = "_order_id_"

	IndexPaymentMethodPartnershipId = "_partnership_id_"
)

func GetTixlabsTxIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys:    bson.D{{"order_code", 1}},
			Options: options.Index().SetName(TixlabsTxIndexOrderCode).SetUnique(true),
		},
	}
	return indexes
}

func GetPaypalTxIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys:    bson.D{{"paypal_order_id", 1}},
			Options: options.Index().SetName(PaypalTxIndexPaypalOrderId).SetUnique(true),
		},
	}
	return indexes
}

func GetVNPayTxIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys:    bson.D{{"ref_id", 1}},
			Options: options.Index().SetName(VNPayTxIndexRefId).SetUnique(true),
		},
	}
	return indexes
}

func GetTwoCheckoutTxIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys:    bson.D{{"ref_id", 1}},
			Options: options.Index().SetName(TwoCheckoutTxIndexRefId).SetUnique(true),
		},
	}
	return indexes
}

func GetPayooIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys:    bson.D{{"order_id", 1}},
			Options: options.Index().SetName(PayooTxIndexOrderId).SetUnique(true),
		},
		{
			Keys:    bson.D{{"order_code", 1}},
			Options: options.Index().SetName(PayooTxIndexOrderCode).SetUnique(false),
		},
	}
	return indexes
}

func GetOnePayIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys:    bson.D{{"order_code", 1}},
			Options: options.Index().SetName(OnePayTxIndexOrderCode).SetUnique(false),
		},
		{
			Keys:    bson.D{{"ref_id", 1}},
			Options: options.Index().SetName(OnePayTxIndexRefId).SetUnique(true),
		},
		{
			Keys:    bson.D{{"order_id", 1}},
			Options: options.Index().SetName(OnePayTxIndexOrderId).SetUnique(false),
		},
	}
	return indexes
}

// Base contains common fields for all tables
type Base struct {
	Id        primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	CreatedAt *time.Time         `bson:"created_at,omitempty" json:"created_at,omitempty"`
	UpdatedAt *time.Time         `bson:"updated_at,omitempty" json:"updated_at,omitempty"`
	DeletedAt *time.Time         `bson:"deleted_at,omitempty" json:"deleted_at,omitempty"`
}

func GetPaymentMethodIndexes() []mongo.IndexModel {
	indexes := []mongo.IndexModel{
		{
			Keys: bson.D{
				{"partnership_id", 1},
			},
			Options: options.Index().SetName(IndexPaymentMethodPartnershipId),
		},
	}
	return indexes
}

func (b *Base) OnCreate() {
	now := time.Now()
	b.CreatedAt = &now
	b.UpdatedAt = &now
}

func (b *Base) OnUpdate() {
	now := time.Now()
	b.UpdatedAt = &now
}

func (b *Base) OnDelete() {
	now := time.Now()
	b.DeletedAt = &now
}
