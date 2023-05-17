package mongodb

import (
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

func ToPaymentMethodDomain(pm *PaymentMethod) *domain.PaymentMethodInfo {
	return &domain.PaymentMethodInfo{
		Id:                 pm.Id.Hex(),
		PartnershipId:      pm.PartnershipId,
		Name:               pm.Name,
		Code:               pm.Code,
		Method:             pm.Method,
		Fee:                pm.Fee,
		AdditionalFee:      pm.AdditionalFee,
		DisplayFee:         pm.DisplayFee,
		Icon:               pm.Icon,
		Version:            pm.Version,
		Tag:                pm.Tag,
		IsEnable:           pm.IsEnable,
		IncludeFee:         pm.IncludeFee,
		WhitelistCountries: pm.WhitelistCountries,
		BlacklistCountries: pm.BlacklistCountries,
	}
}

func ToPaymentMethodsDomain(pm []*PaymentMethod) []*domain.PaymentMethodInfo {
	var paymentMethods []*domain.PaymentMethodInfo
	for _, pm := range pm {
		paymentMethods = append(paymentMethods, ToPaymentMethodDomain(pm))
	}
	return paymentMethods
}
