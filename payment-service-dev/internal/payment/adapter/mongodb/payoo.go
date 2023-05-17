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

type PayooTx struct {
	Base          `bson:",inline" json:",inline"`
	UserId        string                 `bson:"user_id" json:"user_id,omitempty"`
	OrderId       string                 `bson:"order_id" json:"order_id,omitempty"`
	OrderDesc     string                 `bson:"order_desc" json:"order_desc,omitempty"`
	OrderCode     string                 `bson:"order_code" json:"order_code,omitempty"`
	OrderAmount   float64                `bson:"order_amount" json:"order_amount,omitempty"`
	OrderCurrency domain.PaymentCurrency `bson:"order_currency" json:"order_currency,omitempty"`
	Actions       domain.PayooTxActions  `bson:"actions" json:"actions,omitempty"`
	ServiceName   string                 `bson:"service_name" json:"service_name,omitempty"`
}

func (p *PayooTx) ToDomain() *domain.PayooTx {
	return &domain.PayooTx{
		Id:            p.Id.Hex(),
		UserId:        p.UserId,
		OrderId:       p.OrderId,
		OrderCode:     p.OrderCode,
		OrderDesc:     p.OrderDesc,
		OrderAmount:   p.OrderAmount,
		OrderCurrency: p.OrderCurrency,
		CreateAt:      p.CreatedAt,
		Actions:       p.Actions,
		ServiceName:   p.ServiceName,
	}
}

func (p *PayooTx) FromDomain(in domain.PayooTx) error {
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
	p.OrderDesc = in.OrderDesc
	p.OrderAmount = in.OrderAmount
	p.OrderCurrency = in.OrderCurrency
	p.Actions = in.Actions
	p.OrderCode = in.OrderCode
	p.ServiceName = in.ServiceName

	return nil
}

func (r Repository) AddPayooTx(ctx context.Context, in domain.PayooTx) (*domain.PayooTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.AddPayooTx")
	defer span.End()

	m := &PayooTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	m.OnCreate()
	if err := r.db.Insert(ctx, payooCollectionName, m); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return m.ToDomain(), nil
}

func (r Repository) GetPayooTxById(
	ctx context.Context,
	id string,
) (*domain.PayooTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetPayooTxById")
	defer span.End()

	var m *PayooTx
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	err = r.db.FindOne(
		ctx,
		vnpayCollectionName,
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

func (r Repository) GetPayooTxByOrderId(
	ctx context.Context,
	orderId string,
) (*domain.PayooTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetPayooTxByOrderId")
	defer span.End()

	var m *PayooTx

	err := r.db.FindOne(
		ctx,
		payooCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"order_id": orderId}),
		mongodb.WithHint(PayooTxIndexOrderId),
	)
	if err == mongo.ErrNoDocuments {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	return m.ToDomain(), nil
}

func (r Repository) GetPayooTxByOrderCode(
	ctx context.Context,
	orderId string,
) (*domain.PayooTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetPayooTxByOrderCode")
	defer span.End()

	var m *PayooTx

	err := r.db.FindOne(
		ctx,
		payooCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"order_code": orderId}),
		mongodb.WithHint(PayooTxIndexOrderId),
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

func (r Repository) UpdatePayooTx(ctx context.Context, in domain.PayooTx) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.UpdatePayooTx")
	defer span.End()

	m := &PayooTx{}
	if err := m.FromDomain(in); err != nil {
		return err
	}

	m.OnUpdate()
	err := r.db.UpdateOne(
		ctx,
		payooCollectionName,
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
