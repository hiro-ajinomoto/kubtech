package mongodb

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type TixlabsTx struct {
	Base          `bson:",inline" json:",inline"`
	UserId        string                  `bson:"user_id" json:"user_id,omitempty"`
	OrderId       string                  `bson:"order_id" json:"order_id,omitempty"`
	OrderCode     string                  `bson:"order_code" json:"order_code,omitempty"`
	OrderAmount   float64                 `bson:"order_amount" json:"order_amount,omitempty"`
	OrderCurrency domain.PaymentCurrency  `bson:"order_currency" json:"order_currency,omitempty"`
	Provider      domain.PaymentProvider  `bson:"provider" json:"provider,omitempty"`
	Actions       domain.TixlabsTxActions `bson:"actions" json:"actions,omitempty"`
	ServiceName   string                  `bson:"service_name" json:"service_name,omitempty"`
}

func (p *TixlabsTx) ToDomain() *domain.TixlabsTx {
	return &domain.TixlabsTx{
		Id:            p.Id.Hex(),
		UserId:        p.UserId,
		OrderId:       p.OrderId,
		OrderCode:     p.OrderCode,
		OrderAmount:   p.OrderAmount,
		OrderCurrency: p.OrderCurrency,
		Provider:      p.Provider,
		Actions:       p.Actions,
		CreatedAt:     *p.CreatedAt,
		ServiceName:   p.ServiceName,
	}
}

func (p *TixlabsTx) FromDomain(in domain.TixlabsTx) error {
	if in.Id != "" {
		objectId, err := primitive.ObjectIDFromHex(in.Id)
		if err != nil {
			return err
		}

		p.Id = objectId
	}

	p.OrderId = in.OrderId
	p.UserId = in.UserId
	p.OrderId = in.OrderId
	p.OrderCode = in.OrderCode
	p.OrderAmount = in.OrderAmount
	p.OrderCurrency = in.OrderCurrency
	p.Provider = in.Provider
	p.Actions = in.Actions
	p.ServiceName = in.ServiceName

	return nil
}

func (r Repository) AddTixlabsTx(ctx context.Context, in domain.TixlabsTx) (*domain.TixlabsTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.AddTixlabsTx")
	defer span.End()

	m := &TixlabsTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	m.OnCreate()
	if err := r.db.Insert(ctx, tixlabsCollectionName, m); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return m.ToDomain(), nil
}

func (r Repository) UpdateTixlabsTx(ctx context.Context, in domain.TixlabsTx) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.UpdateTixlabsTx")
	defer span.End()

	m := &TixlabsTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return err
	}

	m.OnUpdate()
	err := r.db.UpdateOne(
		ctx,
		tixlabsCollectionName,
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

func (r Repository) GetTixlabsTxByOrderCode(
	ctx context.Context,
	orderCode string,
) (*domain.TixlabsTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetTixlabsTxByOrderCode")
	defer span.End()

	var m *TixlabsTx
	err := r.db.FindOne(
		ctx,
		tixlabsCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"order_code": orderCode}),
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
