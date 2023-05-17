package mobile

import (
	pb "gitlab.bcasia.io/thuynga/apps/api/gen/go/wallet/mobile"
	commonDomain "gitlab.bcasia.io/thuynga/apps/common/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
)

func ToWalletProto(w *domain.Wallet) *pb.Wallet {
	return &pb.Wallet{
		Id:      w.Id,
		UserId:  w.UserId,
		Balance: w.Balance,
	}
}

func ToTopUpProto(p *domain.PaymentData, t *domain.Transaction) *pb.TopUpRes {

	paymentMethod := t.Metadata.TopUp.PaymentMethod
	action := domain.PaymentAction_WEB_VIEW
	actionData := &pb.TopUpPaymentActionData{}
	if p.WebviewUrl != "" {
		actionData = &pb.TopUpPaymentActionData{
			WebviewUrl: p.WebviewUrl,
		}
	}

	if paymentMethod.Method == domain.PaymentMethod_PAYOO_CREDITCARD ||
		paymentMethod.Method == domain.PaymentMethod_PAYOO_DOMESTIC_CARD ||
		paymentMethod.Method == domain.PaymentMethod_PAYOO_QRCODE {
		action = domain.PaymentAction_IN_APP_SDK
		actionData = &pb.TopUpPaymentActionData{
			Sdk: &pb.TopUpPaymentSDK{
				Payoo: &pb.Payoo{
					OrderChecksum: p.SDK.Payoo.OrderChecksum,
					OrderXml:      p.SDK.Payoo.OrderXml,
				},
			},
		}
	}

	topUpPaymentMethod := ToTopUpPaymentMethodProto(t)

	res := &pb.TopUpRes{
		Success:    true,
		Action:     pb.TopUpPaymentAction(action),
		ActionData: actionData,
		Payment: &pb.TopUpPaymentInfo{
			TransactionId:     t.Id,
			TransactionStatus: pb.TransactionStatus(t.Status),
			Amount:            t.Metadata.TopUp.Amount,
			Fee:               t.Metadata.TopUp.Fee,
			TotalPrice:        t.Metadata.TopUp.TotalPrice,
			CurrencyCode:      t.Metadata.TopUp.CurrencyCode,
			PaymentMethod:     topUpPaymentMethod,
		},
	}

	return res
}

func ToTopUpPaymentMethodProto(t *domain.Transaction) *pb.TopUpPaymentMethod {
	paymentMethod := t.Metadata.TopUp.PaymentMethod
	return &pb.TopUpPaymentMethod{
		Id:            paymentMethod.Id,
		Method:        int32(paymentMethod.Method),
		Name:          paymentMethod.Name,
		Code:          paymentMethod.Code,
		Fee:           paymentMethod.Fee,
		AdditionalFee: paymentMethod.AdditionalFee,
		DisplayFee:    paymentMethod.DisplayFee,
		Icon:          paymentMethod.Icon,
	}
}

func ToTransactionProto(t *domain.Transaction) *pb.Transaction {
	transactionProto := &pb.Transaction{
		Id:          t.Id,
		Status:      pb.TransactionStatus(t.Status),
		Type:        pb.TransactionType(t.Type),
		Amount:      t.Amount,
		Fee:         0,
		Time:        t.CreatedAt,
		LastBalance: t.Metadata.LastBalance,
	}
	transactionProto.Fund = domain.DefaultFund
	if t.Type == domain.TransactionTypeTopUp {
		transactionProto.Fund = t.Metadata.TopUp.PaymentMethod.Code
	}
	if t.Type == domain.TransactionTypePay {
		metadata := &pb.TransactionMetadata{
			ServiceName:  t.Metadata.Pay.ServiceName,
			ServiceRefId: t.Metadata.Pay.ServiceRefId,
			Description:  t.Metadata.Pay.Description,
		}
		transactionProto.Metadata = metadata
	}

	return transactionProto
}

func ToTransactionsProto(transactions []*domain.Transaction) []*pb.Transaction {
	var txs []*pb.Transaction

	for _, t := range transactions {
		txs = append(txs, ToTransactionProto(t))
	}
	return txs
}

func ToPagingProto(paging *commonDomain.Pagination) *pb.PaginationRes {
	pagingProto := &pb.PaginationRes{
		PageCurrent: uint32(paging.PageCurrent),
		PageLimit:   uint32(paging.PageLimit),
		TotalPage:   uint32(paging.TotalPage),
		TotalRecord: paging.TotalRecord,
	}

	return pagingProto
}
