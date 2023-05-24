package backend

import (
	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/payment/backend"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

func ToPaymentMethodProto(method *domain.PaymentMethodInfo) *pb.PaymentMethodInfo {
	return &pb.PaymentMethodInfo{
		PartnershipId: method.PartnershipId, // partnershipId là cái gi?
		Id:            method.Id,
		Name:          method.Name,
		Code:          method.Code,
		Fee:           method.Fee,
		AdditionalFee: method.AdditionalFee, // what?
		DisplayFee:    method.DisplayFee,    // what?
		Icon:          method.Icon,          // what?
		Tag:           method.Tag,
		IsEnable:      method.IsEnable,
		Method:        pb.PaymentMethod(method.Method),
		IncludeFee:    method.IncludeFee,
	}
}

func ToPaymentMethodsProto(methods []*domain.PaymentMethodInfo) []*pb.PaymentMethodInfo {
	paymentMethods := make([]*pb.PaymentMethodInfo, len(methods))
	for i, method := range methods {
		paymentMethods[i] = ToPaymentMethodProto(method)
	}
	return paymentMethods
}
