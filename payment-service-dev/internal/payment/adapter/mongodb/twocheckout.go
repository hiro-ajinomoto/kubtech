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

type TwoCheckoutTx struct {
	Base          `bson:",inline" json:",inline"`
	RefId         string                      `bson:"ref_id" json:"ref_id,omitempty"`
	UserId        string                      `bson:"user_id" json:"user_id,omitempty"`
	OrderId       string                      `bson:"order_id" json:"order_id,omitempty"`
	OrderDesc     string                      `bson:"order_desc" json:"order_desc,omitempty"`
	OrderCode     string                      `bson:"order_code" json:"order_code,omitempty"`
	OrderAmount   float64                     `bson:"order_amount" json:"order_amount,omitempty"`
	OrderCurrency domain.PaymentCurrency      `bson:"order_currency" json:"order_currency,omitempty"`
	Actions       domain.TwoCheckoutTxActions `bson:"actions" json:"actions,omitempty"`
	ServiceName   string                      `bson:"service_name" json:"service_name,omitempty"`
}

func (p *TwoCheckoutTx) ToDomain() *domain.TwoCheckoutTx {
	return &domain.TwoCheckoutTx{
		Id:            p.Id.Hex(),
		RefId:         p.RefId,
		UserId:        p.UserId,
		OrderId:       p.OrderId,
		OrderDesc:     p.OrderDesc,
		OrderCode:     p.OrderCode,
		OrderAmount:   p.OrderAmount,
		OrderCurrency: p.OrderCurrency,
		Actions:       p.Actions,
		ServiceName:   p.ServiceName,
	}
}

func (p *TwoCheckoutTx) FromDomain(in domain.TwoCheckoutTx) error {
	if in.Id != "" {
		objectId, err := primitive.ObjectIDFromHex(in.Id)
		if err != nil {
			return err
		}

		p.Id = objectId
	}

	p.OrderId = in.OrderId
	p.RefId = in.RefId
	p.UserId = in.UserId
	p.OrderId = in.OrderId
	p.OrderDesc = in.OrderDesc
	p.OrderCode = in.OrderCode
	p.OrderAmount = in.OrderAmount
	p.OrderCurrency = in.OrderCurrency
	p.Actions = in.Actions
	p.ServiceName = in.ServiceName

	return nil
}

func (r Repository) AddTwoCheckoutTx(ctx context.Context, in domain.TwoCheckoutTx) (*domain.TwoCheckoutTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.AddTwoCheckoutTx")
	defer span.End()

	m := &TwoCheckoutTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	m.OnCreate()
	if err := r.db.Insert(ctx, twoCheckoutCollectionName, m); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return m.ToDomain(), nil
}

func (r Repository) UpdateTwoCheckoutTx(ctx context.Context, in domain.TwoCheckoutTx) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.UpdateTwoCheckoutTx")
	defer span.End()

	m := &TwoCheckoutTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return err
	}

	m.OnUpdate()
	err := r.db.UpdateOne(
		ctx,
		twoCheckoutCollectionName,
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

func (r Repository) GetTwoCheckoutTxByRefId(
	ctx context.Context,
	refId string,
) (*domain.TwoCheckoutTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetTwoCheckoutTxByRefId")
	defer span.End()

	var m *TwoCheckoutTx
	err := r.db.FindOne(
		ctx,
		twoCheckoutCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"ref_id": refId}),
		mongodb.WithHint(TwoCheckoutTxIndexRefId),
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

func (r Repository) GetTwoCheckoutTxById(
	ctx context.Context,
	id string,
) (*domain.TwoCheckoutTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetTwoCheckoutTxById")
	defer span.End()

	var m *TwoCheckoutTx
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	err = r.db.FindOne(
		ctx,
		twoCheckoutCollectionName,
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
