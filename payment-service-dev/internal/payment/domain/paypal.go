package domain

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type PaypalTxActionType string

const (
	PaypalTxActionType_INVALID  PaypalTxActionType = "INVALID"
	PaypalTxActionType_CREATED  PaypalTxActionType = "CREATED"
	PaypalTxActionType_CAPTURED PaypalTxActionType = "CAPTURED"
	PaypalTxActionType_REFUND   PaypalTxActionType = "REFUND"
)

type PaypalTxStatus string

const (
	PaypalTxStatus_INVALID PaypalTxStatus = "INVALID"
	PaypalTxStatus_SUCCESS PaypalTxStatus = "SUCCESS"
	PaypalTxStatus_FAIL    PaypalTxStatus = "FAIL"
)

type PaypalTxAction struct {
	Action PaypalTxActionType
	Status PaypalTxStatus
	At     *time.Time
	Note   string
}

type PaypalTxActions []*PaypalTxAction

type PaypalTx struct {
	Id               string
	PaypalOrderId    string
	PaypalCapturedId string
	UserId           string
	OrderId          string
	OrderCode        string
	OrderDesc        string
	OrderAmount      float64
	OrderCurrency    PaymentCurrency
	Actions          PaypalTxActions
	CreatedAt        time.Time
	ServiceName      string
}

func (p PaypalTx) IsPaid() bool {
	for _, a := range p.Actions {
		if a.Action == PaypalTxActionType_CAPTURED && a.Status == PaypalTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p PaypalTx) IsRefunded() bool {
	for _, a := range p.Actions {
		if a.Action == PaypalTxActionType_REFUND && a.Status == PaypalTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p *PaypalTx) AddActions(a *PaypalTxAction) {
	p.Actions = append(p.Actions, a)
}

type PaypalTxRepository interface {
	AddPaypalTx(ctx context.Context, in PaypalTx) (out *PaypalTx, err error)
	UpdatePaypalTx(ctx context.Context, in PaypalTx) error
	GetPaypalTxByPaypalOrderId(ctx context.Context, paypalOrderId string) (out *PaypalTx, err error)
	GetPaypalTxById(ctx context.Context, id string) (out *PaypalTx, err error)
}

func NewCreatedPaypalTx(
	paypalOrderId string,
	userId string,
	orderId string,
	orderCode string,
	orderDesc string,
	orderAmount float64,
	orderCurrency PaymentCurrency,
) (*PaypalTx, error) {
	if orderCurrency == PaymentCurrency_INVALID {
		return nil, ErrInvalidCurrency
	}

	if paypalOrderId == "" {
		return nil, ErrPaypalMissingPaypalOrderId
	}

	if orderId == "" {
		return nil, ErrMissingOrderId
	}

	if orderCode == "" {
		return nil, ErrMissingOrderId
	}

	if userId == "" {
		return nil, ErrMissingUserId
	}

	now := time.Now()
	createdAction := &PaypalTxAction{
		Action: PaypalTxActionType_CREATED,
		Status: PaypalTxStatus_SUCCESS,
		At:     &now,
	}
	return &PaypalTx{
		Id:            primitive.NewObjectID().Hex(),
		PaypalOrderId: paypalOrderId,
		UserId:        userId,
		OrderId:       orderId,
		OrderCode:     orderCode,
		OrderDesc:     orderDesc,
		OrderAmount:   orderAmount,
		OrderCurrency: orderCurrency,
		Actions:       PaypalTxActions{createdAction},
		CreatedAt:     now,
	}, nil
}
