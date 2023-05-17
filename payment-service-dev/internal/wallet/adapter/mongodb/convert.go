package mongodb

import (
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func ToWalletDomain(w *Wallet) *domain.Wallet {
	return &domain.Wallet{
		Id:            w.Id.Hex(),
		UserId:        w.UserId,
		PartnershipId: w.PartnershipId,
		Balance:       w.Balance,
	}
}

func FromWalletDomain(w *domain.Wallet) *Wallet {
	objectId, _ := primitive.ObjectIDFromHex(w.Id)
	return &Wallet{
		Base: Base{
			Id: objectId,
		},
		UserId:        w.UserId,
		PartnershipId: w.PartnershipId,
		Balance:       w.Balance,
	}
}

func ToTransactionDomain(t *Transaction) *domain.Transaction {

	transaction := &domain.Transaction{
		Id:            t.TransactionId,
		UserId:        t.UserId,
		PartnershipId: t.PartnershipId,
		Amount:        t.Amount,
		Fee:           t.Fee,
		Status:        t.Status,
		Description:   t.Description,
		Type:          t.Type,
		CreatedAt:     t.CreatedAt,
		Metadata: domain.TransactionMetadata{
			LastBalance:   t.Metadata.LastBalance,
			FailureReason: t.Metadata.FailureReason,
		},
	}

	if t.Type == domain.TransactionTypeTopUp {
		transaction.Metadata.TopUp = &domain.TransactionMetadataTopUp{
			PaymentMethod: t.Metadata.TopUp.PaymentMethod,
			CurrencyCode:  t.Metadata.TopUp.CurrencyCode,
			Amount:        t.Metadata.TopUp.Amount,
			Fee:           t.Metadata.TopUp.Fee,
			TotalPrice:    t.Metadata.TopUp.TotalPrice,
		}
	}
	if t.Type == domain.TransactionTypePay {
		transaction.Metadata.Pay = &domain.TransactionMetadataPay{
			ServiceName:  t.Metadata.Pay.ServiceName,
			ServiceRefId: t.Metadata.Pay.ServiceRefId,
			Description:  t.Metadata.Pay.Description,
		}
	}

	return transaction
}

func ToTransactionsDomain(transactions []*Transaction) []*domain.Transaction {
	var transactionsDomain []*domain.Transaction
	for _, transaction := range transactions {
		transactionsDomain = append(transactionsDomain, ToTransactionDomain(transaction))
	}
	return transactionsDomain
}

func FromTransactionDomain(t *domain.Transaction) *Transaction {
	transaction := Transaction{
		Base: Base{
			CreatedAt: t.CreatedAt,
		},
		TransactionId: t.Id,
		UserId:        t.UserId,
		PartnershipId: t.PartnershipId,
		Amount:        t.Amount,
		Fee:           t.Fee,
		Status:        t.Status,
		Description:   t.Description,
		Type:          t.Type,
		Metadata: transactionMetadata{
			LastBalance:   t.Metadata.LastBalance,
			FailureReason: t.Metadata.FailureReason,
		},
	}
	if t.Type == domain.TransactionTypeTopUp {
		transaction.Metadata.TopUp = &topUp{
			PaymentMethod: t.Metadata.TopUp.PaymentMethod,
			CurrencyCode:  t.Metadata.TopUp.CurrencyCode,
			Amount:        t.Metadata.TopUp.Amount,
			Fee:           t.Metadata.TopUp.Fee,
			TotalPrice:    t.Metadata.TopUp.TotalPrice,
		}
	}
	if t.Type == domain.TransactionTypePay {
		transaction.Metadata.Pay = &pay{
			ServiceName:  t.Metadata.Pay.ServiceName,
			ServiceRefId: t.Metadata.Pay.ServiceRefId,
			Description:  t.Metadata.Pay.Description,
		}
	}

	return &transaction

}

func ToTransactionLogDomain(t *TransactionLog) *domain.TransactionLog {
	return &domain.TransactionLog{
		Id:            t.Id.Hex(),
		Action:        t.Action,
		TransactionId: t.TransactionId,
		Changes:       t.Changes,
	}
}

func FromTransactionLogDomain(t *domain.TransactionLog) *TransactionLog {
	objectId, _ := primitive.ObjectIDFromHex(t.Id)
	return &TransactionLog{
		Base: Base{
			Id: objectId,
		},
		Action:        t.Action,
		TransactionId: t.TransactionId,
		Changes:       t.Changes,
	}
}
