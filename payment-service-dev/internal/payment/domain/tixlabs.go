package domain

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type TixlabsResponseStatus int

const (
	TixlabsResponseStatus_SUCCESS = iota + 1
	TixlabsResponseStatus_FAIL
	TixlabsResponseStatus_CONFIRMED
	TixlabsResponseStatus_EXPIRED
)

type TixlabsResponse struct {
	Status  TixlabsResponseStatus
	Message string
}

func (r TixlabsResponse) IsError() bool {
	return r.Status != TixlabsResponseStatus_SUCCESS
}

var (
	TixlabsOK                         = TixlabsResponse{Status: TixlabsResponseStatus_SUCCESS, Message: "Success"}
	TixlabsErrUnknown                 = TixlabsResponse{Status: TixlabsResponseStatus_FAIL, Message: "Fail"}
	TixlabsErrUnauthorized            = TixlabsResponse{Status: TixlabsResponseStatus_FAIL, Message: "Unauthorized"}
	TixlabsErrInvalidParams           = TixlabsResponse{Status: TixlabsResponseStatus_FAIL, Message: "Invalid Params"}
	TixlabsErrInvalidPaymentProvider  = TixlabsResponse{Status: TixlabsResponseStatus_FAIL, Message: "Invalid Payment Provider"}
	TixlabsErrOrderNotFound           = TixlabsResponse{Status: TixlabsResponseStatus_FAIL, Message: "Order Not Found"}
	TixlabsErrInvalidAmount           = TixlabsResponse{Status: TixlabsResponseStatus_FAIL, Message: "Invalid Amount"}
	TixlabsErrMismatchPaymentProvider = TixlabsResponse{Status: TixlabsResponseStatus_FAIL, Message: "Mismatch Payment Provider"}
	TixlabsErrOrderConfirmed          = TixlabsResponse{Status: TixlabsResponseStatus_CONFIRMED, Message: "Order Already Confirmed"}
	TixlabsErrOrderPaid               = TixlabsResponse{Status: TixlabsResponseStatus_CONFIRMED, Message: "Order Already Paid"}
	TixlabsErrExpired                 = TixlabsResponse{Status: TixlabsResponseStatus_EXPIRED, Message: "Transaction Expired"}
)

var tixlabsProviders = map[PaymentProvider]bool{
	PaymentProvider_BANK: true,
	PaymentProvider_MOMO: true,
}

func IsTixlabsProvider(in PaymentProvider) bool {
	_, ok := tixlabsProviders[in]
	return ok
}

type TixlabsTxActionType string

const (
	TixlabsTxActionType_INVALID TixlabsTxActionType = "INVALID"
	TixlabsTxActionType_OPEN    TixlabsTxActionType = "OPEN"
	TixlabsTxActionType_PAY     TixlabsTxActionType = "PAY"
)

type TixlabsTxStatus string

const (
	TixlabsTxStatus_INVALID TixlabsTxStatus = "INVALID"
	TixlabsTxStatus_SUCCESS TixlabsTxStatus = "SUCCESS"
	TixlabsTxStatus_FAIL    TixlabsTxStatus = "FAIL"
)

type TixlabsTxAction struct {
	Action TixlabsTxActionType
	Status TixlabsTxStatus
	At     *time.Time
	Note   string
}

type TixlabsTxActions []*TixlabsTxAction

type TixlabsTx struct {
	Id            string
	UserId        string
	OrderId       string
	OrderCode     string
	OrderAmount   float64
	OrderCurrency PaymentCurrency
	Provider      PaymentProvider
	Actions       TixlabsTxActions
	CreatedAt     time.Time
	ServiceName   string
}

func (p TixlabsTx) IsConfirmed() bool {
	for _, a := range p.Actions {
		if a.Action == TixlabsTxActionType_PAY {
			return true
		}
	}

	return false
}

func (p TixlabsTx) IsPaid() bool {
	for _, a := range p.Actions {
		if a.Action == TixlabsTxActionType_PAY && a.Status == TixlabsTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p *TixlabsTx) AddActions(a *TixlabsTxAction) {
	p.Actions = append(p.Actions, a)
}

type TixlabsTxRepository interface {
	AddTixlabsTx(ctx context.Context, in TixlabsTx) (out *TixlabsTx, err error)
	UpdateTixlabsTx(ctx context.Context, in TixlabsTx) error
	GetTixlabsTxByOrderCode(ctx context.Context, orderCode string) (out *TixlabsTx, err error)
}

func NewOpenTixlabsTx(
	provider PaymentProvider,
	userId string,
	orderId string,
	orderCode string,
	orderAmount float64,
	orderCurrency PaymentCurrency,
) (*TixlabsTx, error) {
	if orderCurrency == PaymentCurrency_INVALID {
		return nil, ErrInvalidCurrency
	}

	if orderId == "" {
		return nil, ErrMissingOrderId
	}

	if userId == "" {
		return nil, ErrMissingUserId
	}

	now := time.Now()
	openAction := &TixlabsTxAction{
		Action: TixlabsTxActionType_OPEN,
		Status: TixlabsTxStatus_SUCCESS,
		At:     &now,
	}
	return &TixlabsTx{
		Id:            primitive.NewObjectID().Hex(),
		Provider:      provider,
		UserId:        userId,
		OrderId:       orderId,
		OrderCode:     orderCode,
		OrderAmount:   orderAmount,
		OrderCurrency: orderCurrency,
		Actions:       TixlabsTxActions{openAction},
	}, nil
}
