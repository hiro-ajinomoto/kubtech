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

type OnePayTx struct {
	Base          `bson:",inline" json:",inline"`
	RefId         string                 `bson:"ref_id" json:"ref_id,omitempty"`
	UserId        string                 `bson:"user_id" json:"user_id,omitempty"`
	OrderId       string                 `bson:"order_id" json:"order_id,omitempty"`
	OrderCode     string                 `bson:"order_code" json:"order_code,omitempty"`
	OrderDesc     string                 `bson:"order_desc" json:"order_desc,omitempty"`
	OrderAmount   float64                `bson:"order_amount" json:"order_amount,omitempty"`
	OrderCurrency domain.PaymentCurrency `bson:"order_currency" json:"order_currency,omitempty"`
	Actions       domain.OnePayTxActions `bson:"actions" json:"actions,omitempty"`
	ServiceName   string                 `bson:"service_name" json:"service_name,omitempty"`
}

func (p *OnePayTx) ToDomain() *domain.OnePayTx {
	return &domain.OnePayTx{
		Id:            p.Id.Hex(),
		RefId:         p.RefId,
		UserId:        p.UserId,
		OrderId:       p.OrderId,
		OrderCode:     p.OrderCode,
		OrderDesc:     p.OrderDesc,
		OrderAmount:   p.OrderAmount,
		OrderCurrency: p.OrderCurrency,
		Actions:       p.Actions,
		ServiceName:   p.ServiceName,
	}
}

func (p *OnePayTx) FromDomain(in domain.OnePayTx) error {
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
	p.OrderCode = in.OrderCode
	p.OrderDesc = in.OrderDesc
	p.OrderAmount = in.OrderAmount
	p.OrderCurrency = in.OrderCurrency
	p.Actions = in.Actions
	p.ServiceName = in.ServiceName

	return nil
}

func (r Repository) AddOnePayTx(ctx context.Context, in domain.OnePayTx) (*domain.OnePayTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.AddOnePayTx")
	defer span.End()
	m := &OnePayTx{}
	if err := m.FromDomain(in); err != nil {
		return nil, err
	}

	m.OnCreate()
	if err := r.db.Insert(ctx, onePayCollectionName, m); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return m.ToDomain(), nil
}

func (r Repository) UpdateOnePayTx(ctx context.Context, in domain.OnePayTx) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.UpdateOnePayTx")
	defer span.End()
	m := &OnePayTx{}
	if err := m.FromDomain(in); err != nil {
		return err
	}

	m.OnUpdate()
	err := r.db.UpdateOne(
		ctx,
		onePayCollectionName,
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

func (r Repository) GetOnePayTxById(
	ctx context.Context,
	id string,
) (*domain.OnePayTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetOnePayTxById")
	defer span.End()
	var m *OnePayTx
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	err = r.db.FindOne(
		ctx,
		onePayCollectionName,
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

func (r Repository) GetOnePayTxByOrderCode(ctx context.Context, orderCode string) (*domain.OnePayTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetOnePayTxByOrderCode")
	defer span.End()

	var m *OnePayTx

	err := r.db.FindOne(
		ctx,
		onePayCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"order_code": orderCode}),
		mongodb.WithHint(OnePayTxIndexOrderCode),
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

func (r Repository) GetOnePayTxByRefId(ctx context.Context, refId string) (*domain.OnePayTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetOnePayTxByRefId")
	defer span.End()

	var m *OnePayTx

	err := r.db.FindOne(
		ctx,
		onePayCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"ref_id": refId}),
		mongodb.WithHint(OnePayTxIndexRefId),
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
func (r Repository) GetOnePayTxByOrderId(ctx context.Context, orderId string) (*domain.OnePayTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetOnePayTxByOrderId")
	defer span.End()

	var m *OnePayTx

	err := r.db.FindOne(
		ctx,
		onePayCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"order_id": orderId}),
		mongodb.WithHint(OnePayTxIndexOrderId),
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
