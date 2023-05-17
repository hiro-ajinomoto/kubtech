package mongodb

import (
	"context"

	"github.com/pkg/errors"
	"gitlab.bcasia.io/thuynga/apps/common/adapter/mongodb"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type PaymentMethod struct {
	Base               `bson:",inline"`
	PartnershipId      string               `bson:"partnership_id"`
	Name               string               `bson:"name,omitempty"`
	Code               string               `bson:"code,omitempty"`
	Method             domain.PaymentMethod `bson:"method,omitempty"`
	Fee                float64              `bson:"fee,omitempty"`
	AdditionalFee      float64              `bson:"additional_fee,omitempty"`
	DisplayFee         string               `bson:"display_fee,omitempty"`
	Icon               string               `bson:"icon,omitempty"`
	Version            string               `bson:"version,omitempty"`
	Tag                string               `bson:"tag,omitempty"`
	IsEnable           bool                 `bson:"is_enable,omitempty"`
	IncludeFee         bool                 `bson:"include_fee,omitempty"`
	WhitelistCountries []string             `bson:"whitelist_countries,omitempty"`
	BlacklistCountries []string             `bson:"blacklist_countries,omitempty"`
}

func (r Repository) ListPaymentMethods(ctx context.Context, partnershipId string) ([]*domain.PaymentMethodInfo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.ListPaymentMethods")
	defer span.End()
	var m []*PaymentMethod
	err := r.db.Find(
		ctx,
		paymentMethodCollectionName,
		&m,
		mongodb.WithFilter(bson.M{
			"partnership_id": partnershipId,
			"is_enable":      true,
		}),
		mongodb.WithHint(IndexPaymentMethodPartnershipId),
	)

	if err != nil {
		tracing.TraceErr(span, err)
		return nil, errors.Wrap(err, "ListPaymentMethods: Find")
	}

	return ToPaymentMethodsDomain(m), nil

}

func (r Repository) GetPaymentMethodById(ctx context.Context, id, partnershipId string) (*domain.PaymentMethodInfo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetPaymentMethodById")
	defer span.End()
	var m *PaymentMethod
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	err = r.db.FindOne(
		ctx,
		paymentMethodCollectionName,
		&m,
		mongodb.WithFilter(bson.M{
			"_id":            objectId,
			"partnership_id": partnershipId,
		}),
		mongodb.WithHint(IndexPaymentMethodPartnershipId),
	)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, errors.Wrap(err, "PaymentMethodRepository.GetPaymentMethodById: FindOne")
	}

	return ToPaymentMethodDomain(m), nil

}

func (r Repository) GetPaymentMethodByCode(ctx context.Context, code, partnershipId string) (*domain.PaymentMethodInfo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Repository.GetPaymentMethodByCode")
	defer span.End()

	var m *PaymentMethod

	err := r.db.FindOne(
		ctx,
		paymentMethodCollectionName,
		&m,
		mongodb.WithFilter(bson.M{
			"partnership_id": partnershipId,
			"code":           code,
		}),
		mongodb.WithHint(IndexPaymentMethodPartnershipId),
	)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, errors.Wrap(err, "PaymentMethodRepository.GetPaymentMethodByCode: FindOne")
	}

	return ToPaymentMethodDomain(m), nil

}
