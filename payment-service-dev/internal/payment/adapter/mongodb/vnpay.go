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

type VNPayTx struct {
	Base          `bson:",inline" json:",inline"`
	RefId         string                 `bson:"ref_id" json:"ref_id,omitempty"`
	UserId        string                 `bson:"user_id" json:"user_id,omitempty"`
	OrderId       string                 `bson:"order_id" json:"order_id,omitempty"`
	OrderCode     string                 `bson:"order_code" json:"order_code,omitempty"`
	OrderDesc     string                 `bson:"order_desc" json:"order_desc,omitempty"`
	OrderAmount   float64                `bson:"order_amount" json:"order_amount,omitempty"`
	OrderCurrency domain.PaymentCurrency `bson:"order_currency" json:"order_currency,omitempty"`
	Actions       domain.VNPayTxActions  `bson:"actions" json:"actions,omitempty"`
	ServiceName   string                 `bson:"service_name" json:"service_name,omitempty"`
}

func (p *VNPayTx) ToDomain() *domain.VNPayTx {
	return &domain.VNPayTx{
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

func (p *VNPayTx) FromDomain(in domain.VNPayTx) error {
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

func (r Repository) AddVNPayTx(ctx context.Context, in domain.VNPayTx) (*domain.VNPayTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.AddVNPayTx")
	defer span.End()
	m := &VNPayTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	m.OnCreate()
	if err := r.db.Insert(ctx, vnpayCollectionName, m); err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return m.ToDomain(), nil
}

func (r Repository) UpdateVNPayTx(ctx context.Context, in domain.VNPayTx) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.UpdateVNPayTx")
	defer span.End()

	m := &VNPayTx{}
	if err := m.FromDomain(in); err != nil {
		tracing.TraceErr(span, err)
		return err
	}

	m.OnUpdate()
	err := r.db.UpdateOne(
		ctx,
		vnpayCollectionName,
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

func (r Repository) GetVNPayTxByRefId(
	ctx context.Context,
	refId string,
) (*domain.VNPayTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetVNPayTxByRefId")
	defer span.End()

	var m *VNPayTx
	err := r.db.FindOne(
		ctx,
		vnpayCollectionName,
		&m,
		mongodb.WithFilter(bson.M{"ref_id": refId}),
		mongodb.WithHint(VNPayTxIndexRefId),
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

func (r Repository) GetVNPayTxById(
	ctx context.Context,
	id string,
) (*domain.VNPayTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetVNPayTxById")
	defer span.End()

	var m *VNPayTx
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
