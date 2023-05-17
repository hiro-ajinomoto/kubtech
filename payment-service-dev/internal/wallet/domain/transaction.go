package domain

import (
	"strings"

	"github.com/segmentio/ksuid"
	"gitlab.bcasia.io/thuynga/apps/common/helpers"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type TransactionType int

const (
	TransactionTypeInvalid  TransactionType = 0
	TransactionTypeTopUp    TransactionType = 1
	TransactionTypePay      TransactionType = 2
	TransactionTypeWithdraw TransactionType = 3
)

type TransactionStatus int

const (
	TransactionStatusInvalid    TransactionStatus = 0
	TransactionStatusPending    TransactionStatus = 1
	TransactionStatusProcessing TransactionStatus = 2
	TransactionStatusSuccessful TransactionStatus = 3
	TransactionStatusFailed     TransactionStatus = 4
	TransactionStatusCanceled   TransactionStatus = 5
)

const (
	TransactionFailureReasonUnknown                   string = "UNKNOWN"
	TransactionFailureReasonExpired                   string = "EXPIRED"
	TransactionFailureReasonInsufficientFunds         string = "INSUFFICIENT_FUNDS"
	TransactionFailureReasonPaymentMethodNotAvailable string = "PAYMENT_METHOD_NOT_AVAILABLE"
	TransactionFailureReasonPaymentGatewayFailed      string = "PAYMENT_GATEWAY_FAILED"
)

type Transaction struct {
	Id            string
	UserId        string
	PartnershipId string
	Amount        float64
	Fee           float64
	Description   string
	Status        TransactionStatus
	Type          TransactionType
	Source        string
	CreatedAt     int64
	Metadata      TransactionMetadata
}

type TransactionMetadata struct {
	LastBalance   float64
	FailureReason string
	TopUp         *TransactionMetadataTopUp
	Pay           *TransactionMetadataPay
}

type TransactionMetadataTopUp struct {
	PaymentMethod *PaymentMethod
	CurrencyCode  string
	Amount        float64
	Fee           float64
	TotalPrice    float64
}
type TransactionMetadataPay struct {
	ServiceName  string
	ServiceRefId string
	Description  string
}

func NewTopUpTransaction(
	partnershipID string,
	userID string,
	amount float64,
	paymentMethod *PaymentMethod,
	lastBalance float64,
	currencyCode string,
) *Transaction {
	newTxID := ksuid.New().String()
	transaction := Transaction{
		Id:            newTxID,
		Status:        TransactionStatusProcessing,
		Type:          TransactionTypeTopUp,
		UserId:        userID,
		PartnershipId: partnershipID,
		Amount:        amount,
		Description:   newTxID,
	}

	topUp := TransactionMetadataTopUp{
		PaymentMethod: paymentMethod,
		CurrencyCode:  currencyCode,
	}
	transaction.Metadata.LastBalance = lastBalance
	transaction.Metadata.TopUp = &topUp
	transaction.ConvertAmount()
	return &transaction
}

func NewPayTransaction(
	userId string,
	partnershipId string,
	amount float64,
	serviceName string,
	serviceRefId string,
	lastBalance float64,
	description string,
) *Transaction {

	newTxId := ksuid.New().String()
	transaction := Transaction{
		Id:            newTxId,
		UserId:        userId,
		PartnershipId: partnershipId,
		Status:        TransactionStatusProcessing,
		Type:          TransactionTypePay,
		Amount:        -amount,
		Description:   newTxId,
	}
	pay := TransactionMetadataPay{
		ServiceName:  serviceName,
		ServiceRefId: serviceRefId,
		Description:  description,
	}
	transaction.Metadata.LastBalance = lastBalance
	transaction.Metadata.Pay = &pay
	return &transaction
}

func (t *Transaction) Failed(reason string) {
	t.Status = TransactionStatusFailed
	if reason != "" {
		t.Metadata.FailureReason = reason
	}
}

func (t *Transaction) ChangeCurrency(currencyCode string) {
	if t.Type != TransactionTypeTopUp {
		return
	}
	currencyCode = strings.ToLower(currencyCode)
	if t.Metadata.TopUp.CurrencyCode == currencyCode {
		return
	}
	cfg, _ := config.New()
	exchangeAmount, err := cfg.ExchangeCurrency(t.Amount, t.Metadata.TopUp.CurrencyCode, currencyCode)
	if err != nil {
		return
	}
	t.Metadata.TopUp.CurrencyCode = currencyCode
	t.Metadata.TopUp.Amount = exchangeAmount
}

func (t *Transaction) ConvertAmount() {

	if t.Type != TransactionTypeTopUp {
		return
	}
	if t.Metadata.TopUp.CurrencyCode == "" {
		t.Metadata.TopUp.CurrencyCode = CurrencyCodeUSD
	}
	t.Metadata.TopUp.Amount = t.Amount

	amountPrecision := uint(2)
	switch t.Metadata.TopUp.PaymentMethod.Method {
	case PaymentMethod_VNPAY_EWALLET,
		PaymentMethod_VNPAY_CREDITCARD,
		PaymentMethod_VNPAY_BANKTRANSFER,
		PaymentMethod_VNPAY_QRCODE,
		PaymentMethod_MANUAL_BANKTRANSFER,
		PaymentMethod_MOMO,
		PaymentMethod_PAYOO_CREDITCARD,
		PaymentMethod_PAYOO_DOMESTIC_CARD,
		PaymentMethod_PAYOO_QRCODE,
		PaymentMethod_ONE_PAY_CREDITCARD,
		PaymentMethod_ONE_PAY_CREDITCARD_DOMESTIC_ISSUE,
		PaymentMethod_ONE_PAY_DOMESTIC_CARD,
		PaymentMethod_ONE_PAY_QRCODE:
		t.ChangeCurrency(CurrencyCodeVND)
		amountPrecision = 0

	case PaymentMethod_PAYPAL,
		PaymentMethod_TWO_CHECKOUT:
		t.ChangeCurrency(CurrencyCodeUSD)
	}
	t.Metadata.TopUp.Fee = helpers.RoundFloat(t.Metadata.TopUp.PaymentMethod.Fee*t.Metadata.TopUp.Amount+
		t.Metadata.TopUp.PaymentMethod.AdditionalFee, amountPrecision)
	if t.Metadata.TopUp.PaymentMethod.IncludeFee {
		t.Metadata.TopUp.TotalPrice = helpers.RoundFloat(t.Metadata.TopUp.Amount+t.Metadata.TopUp.Fee, amountPrecision)
	} else {
		t.Metadata.TopUp.TotalPrice = helpers.RoundFloat(t.Metadata.TopUp.Amount, amountPrecision)
	}

	t.Metadata.TopUp.Amount = helpers.RoundFloat(t.Metadata.TopUp.Amount, amountPrecision)

}
