package domain

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type TwoCheckoutResponse struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

func (r TwoCheckoutResponse) IsError() bool {
	return r.Code != "00"
}

var (
	TwoCheckoutOK                 = TwoCheckoutResponse{Code: "0", Message: "Confirm Success"}
	TwoCheckoutErrUnknown         = TwoCheckoutResponse{Code: "1", Message: "Unknown Error"}
	TwoCheckoutErrInvalidArgument = TwoCheckoutResponse{Code: "1", Message: "Invalid Argument"}
	TwoCheckoutErrChecksum        = TwoCheckoutResponse{Code: "1", Message: "Invalid Checksum"}
	TwoCheckoutErrOrderNotFound   = TwoCheckoutResponse{Code: "1", Message: "Order Not Found"}
	TwoCheckoutErrInvalidAmount   = TwoCheckoutResponse{Code: "1", Message: "Invalid Amount"}
	TwoCheckoutErrOrderConfirmed  = TwoCheckoutResponse{Code: "1", Message: "Order Already Confirmed"}
)

type TwoCheckoutOrderStatus string

const (
	TwoCheckoutOrderStatus_INVALID            TwoCheckoutOrderStatus = "INVALID"
	TwoCheckoutOrderStatus_PENDING            TwoCheckoutOrderStatus = "PENDING"
	TwoCheckoutOrderStatus_PAYMENT_AUTHORIZED TwoCheckoutOrderStatus = "PAYMENT_AUTHORIZED"
	TwoCheckoutOrderStatus_SUSPECT            TwoCheckoutOrderStatus = "SUSPECT"
	TwoCheckoutOrderStatus_COMPLETE           TwoCheckoutOrderStatus = "COMPLETE"
	TwoCheckoutOrderStatus_REFUND             TwoCheckoutOrderStatus = "REFUND"
	TwoCheckoutOrderStatus_REVERSED           TwoCheckoutOrderStatus = "REVERSED"
	TwoCheckoutOrderStatus_PURCHASE_PENDING   TwoCheckoutOrderStatus = "PURCHASE_PENDING"
	TwoCheckoutOrderStatus_PAYMENT_RECEIVED   TwoCheckoutOrderStatus = "PAYMENT_RECEIVED"
	TwoCheckoutOrderStatus_CANCELED           TwoCheckoutOrderStatus = "CANCELED"
	TwoCheckoutOrderStatus_PENDING_APPROVAL   TwoCheckoutOrderStatus = "PENDING_APPROVAL"
)

var IgnoreOrderStatus = map[TwoCheckoutOrderStatus]bool{
	TwoCheckoutOrderStatus_INVALID:            false,
	TwoCheckoutOrderStatus_PENDING:            true,
	TwoCheckoutOrderStatus_PAYMENT_AUTHORIZED: true,
	TwoCheckoutOrderStatus_SUSPECT:            true,
	TwoCheckoutOrderStatus_COMPLETE:           false,
	TwoCheckoutOrderStatus_REFUND:             false,
	TwoCheckoutOrderStatus_REVERSED:           false,
	TwoCheckoutOrderStatus_PURCHASE_PENDING:   true,
	TwoCheckoutOrderStatus_PAYMENT_RECEIVED:   true,
	TwoCheckoutOrderStatus_CANCELED:           false,
	TwoCheckoutOrderStatus_PENDING_APPROVAL:   true,
}

type TwoCheckoutTxActionType string

const (
	TwoCheckoutTxActionType_INVALID TwoCheckoutTxActionType = "INVALID"
	TwoCheckoutTxActionType_OPEN    TwoCheckoutTxActionType = "OPEN"
	TwoCheckoutTxActionType_PAY     TwoCheckoutTxActionType = "PAY"
)

type TwoCheckoutTxStatus string

const (
	TwoCheckoutTxStatus_INVALID     TwoCheckoutTxStatus = "INVALID"
	TwoCheckoutTxStatus_SUCCESS     TwoCheckoutTxStatus = "SUCCESS"
	TwoCheckoutTxStatus_FAIL        TwoCheckoutTxStatus = "FAIL"
	TwoCheckoutTxStatus_IN_PROGRESS TwoCheckoutTxStatus = "IN_PROGRESS"
)

type TwoCheckoutTxAction struct {
	Action TwoCheckoutTxActionType
	Status TwoCheckoutTxStatus
	At     *time.Time
	Note   string
}

type TwoCheckoutTxActions []*TwoCheckoutTxAction

type TwoCheckoutTx struct {
	Id            string
	RefId         string
	UserId        string
	OrderId       string
	OrderDesc     string
	OrderCode     string
	OrderAmount   float64
	OrderCurrency PaymentCurrency
	Actions       TwoCheckoutTxActions
	ServiceName   string
}

func (p TwoCheckoutTx) IsPaid() bool {
	for _, a := range p.Actions {
		if a.Action == TwoCheckoutTxActionType_PAY && a.Status == TwoCheckoutTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p *TwoCheckoutTx) AddActions(a *TwoCheckoutTxAction) {
	p.Actions = append(p.Actions, a)
}

type TwoCheckoutTxRepository interface {
	AddTwoCheckoutTx(ctx context.Context, in TwoCheckoutTx) (out *TwoCheckoutTx, err error)
	UpdateTwoCheckoutTx(ctx context.Context, in TwoCheckoutTx) error
	GetTwoCheckoutTxByRefId(ctx context.Context, refId string) (out *TwoCheckoutTx, err error)
	GetTwoCheckoutTxById(ctx context.Context, id string) (out *TwoCheckoutTx, err error)
}

func NewOpenTwoCheckoutTx(
	refId string,
	userId string,
	orderId string,
	orderDesc string,
	orderCode string,
	orderAmount float64,
	orderCurrency PaymentCurrency,
) (*TwoCheckoutTx, error) {
	if orderCurrency == PaymentCurrency_INVALID {
		return nil, ErrInvalidCurrency
	}

	if refId == "" {
		return nil, ErrTwoCheckoutMissingOrderId
	}

	if orderId == "" {
		return nil, ErrMissingOrderId
	}

	if userId == "" {
		return nil, ErrMissingUserId
	}

	now := time.Now()
	createdAction := &TwoCheckoutTxAction{
		Action: TwoCheckoutTxActionType_OPEN,
		Status: TwoCheckoutTxStatus_SUCCESS,
		At:     &now,
	}
	return &TwoCheckoutTx{
		Id:            primitive.NewObjectID().Hex(),
		RefId:         refId,
		UserId:        userId,
		OrderId:       orderId,
		OrderDesc:     orderDesc,
		OrderCode:     orderCode,
		OrderAmount:   orderAmount,
		OrderCurrency: orderCurrency,
		Actions:       TwoCheckoutTxActions{createdAction},
	}, nil
}
