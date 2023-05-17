package mongodb

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type PaypalTx struct {
	Base             `bson:",inline" json:",inline"`
	PaypalOrderId    string                 `bson:"paypal_order_id" json:"paypal_order_id,omitempty"`
	PaypalCapturedId string                 `bson:"paypal_captured_id" json:"paypal_captured_id,omitempty"`
	UserId           string                 `bson:"user_id" json:"user_id,omitempty"`
	OrderId          string                 `bson:"order_id" json:"order_id,omitempty"`
	OrderCode        string                 `bson:"order_code" json:"order_code,omitempty"`
	OrderDesc        string                 `bson:"order_desc" json:"order_desc,omitempty"`
	OrderAmount      float64                `bson:"order_amount" json:"order_amount,omitempty"`
	OrderCurrency    domain.PaymentCurrency `bson:"order_currency" json:"order_currency,omitempty"`
	Actions          domain.PaypalTxActions `bson:"actions" json:"actions,omitempty"`
	ServiceName      string                 `bson:"service_name" json:"service_name,omitempty"`
}

func (p *PaypalTx) ToDomain() *domain.PaypalTx {
	return &domain.PaypalTx{
		Id:               p.Id.Hex(),
		PaypalOrderId:    p.PaypalOrderId,
		PaypalCapturedId: p.PaypalCapturedId,
		UserId:           p.UserId,
		OrderId:          p.OrderId,
		OrderCode:        p.OrderCode,
		OrderDesc:        p.OrderDesc,
		OrderAmount:      p.OrderAmount,
		OrderCurrency:    p.OrderCurrency,
		Actions:          p.Actions,
		CreatedAt:        *p.CreatedAt,
		ServiceName:      p.ServiceName,
	}
}

func (p *PaypalTx) FromDomain(in domain.PaypalTx) error {
	if in.Id != "" {
		objectId, err := primitive.ObjectIDFromHex(in.Id)
		if err != nil {
			return err
		}

		p.Id = objectId
	}

	p.OrderId = in.OrderId
	p.PaypalOrderId = in.PaypalOrderId
	p.PaypalCapturedId = in.PaypalCapturedId
	p.UserId = in.UserId
	p.OrderId = in.OrderId
	p.OrderCode = in.OrderCode
	p.OrderDesc = in.OrderDesc
	p.OrderAmount = in.OrderAmount
	p.OrderCurrency = in.OrderCurrency
	p.Actions = in.Actions
	p.ServiceName = in.ServiceName

	return nil
}

func (r Repository) AddPaypalTx(ctx context.Context, in domain.PaypalTx) (*domain.PaypalTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.AddPaypalTx")
	defer span.End()
	m := &PaypalTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	m.OnCreate()
	if err := r.db.Insert(ctx, paypalCollectionName, m); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return m.ToDomain(), nil
}

func (r Repository) UpdatePaypalTx(ctx context.Context, in domain.PaypalTx) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Paypal.UpdatePaypalTx")
	defer span.End()
	m := &PaypalTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return err
	}

	m.OnUpdate()
	err := r.db.UpdateOne(
		ctx,
		paypalCollectionName,
		bson.M{"_id": m.Id},
		m,
		&options.UpdateOptions{Hint: IndexDefault},
	)
	if err != nil {
		tracing.TraceErr(span, err)
		return err
	}

	return nil
}

func (r Repository) GetPaypalTxByPaypalOrderId(
	ctx context.Context,
	paypalOrderId string,
) (*domain.PaypalTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Paypal.GetPaypalTxByPaypalOrderId")
	defer span.End()
	var m *PaypalTx
	err := r.db.FindOne(
		ctx,
		paypalCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"paypal_order_id": paypalOrderId}),
		mongodb.WithHint(PaypalTxIndexPaypalOrderId),
	)
	if err == mongo.ErrNoDocuments {
		return nil, nil
	}

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return m.ToDomain(), nil
}

func (r Repository) GetPaypalTxById(
	ctx context.Context,
	id string,
) (*domain.PaypalTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Paypal.GetPaypalTxById")
	defer span.End()

	var m *PaypalTx
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	err = r.db.FindOne(
		ctx,
		paypalCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"_id": objectId}),
		mongodb.WithHint(IndexDefault),
	)
	if err == mongo.ErrNoDocuments {
		return nil, nil
	}

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return m.ToDomain(), nil
}
