package web

import (
	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/web_partnership"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

func ToPaymentMethodProto(method *domain.PaymentMethodInfo) *pb.PaymentMethodInfo {
	return &pb.PaymentMethodInfo{
		PartnershipId: method.PartnershipId,
		Id:            method.Id,
		Name:          method.Name,
		Code:          method.Code,
		Fee:           method.Fee,
		AdditionalFee: method.AdditionalFee,
		DisplayFee:    method.DisplayFee,
		Icon:          method.Icon,
		Tag:           method.Tag,
		IsEnable:      method.IsEnable,
		Method:        pb.PaymentMethod(method.Method),
	}
}

func ToPaymentMethodsProto(methods []*domain.PaymentMethodInfo) []*pb.PaymentMethodInfo {
	paymentMethods := make([]*pb.PaymentMethodInfo, len(methods))
	for i, method := range methods {
		paymentMethods[i] = ToPaymentMethodProto(method)
	}
	return paymentMethods
}
