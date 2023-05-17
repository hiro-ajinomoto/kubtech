package domain

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

const VNPayDateTimeFormat = "20060102150405"

var VNPayTZ = time.FixedZone("Hanoi Time", int((7 * time.Hour).Seconds()))

type VNPayResponse struct {
	RspCode string
	Message string
}

func (r VNPayResponse) IsError() bool {
	return r.RspCode != "00"
}

var (
	VNPayOK                VNPayResponse = VNPayResponse{RspCode: "00", Message: "Confirm Success"}
	VNPayErrUnknown        VNPayResponse = VNPayResponse{RspCode: "99", Message: "Unknown Error"}
	VNPayErrChecksum       VNPayResponse = VNPayResponse{RspCode: "97", Message: "Invalid Checksum"}
	VNPayErrOrderNotFound  VNPayResponse = VNPayResponse{RspCode: "01", Message: "Order Not Found"}
	VNPayErrInvalidAmount  VNPayResponse = VNPayResponse{RspCode: "04", Message: "Invalid Amount"}
	VNPayErrOrderConfirmed VNPayResponse = VNPayResponse{RspCode: "02", Message: "Order Already Confirmed"}
)

var vnpayAllowPaymentMethods = map[string]bool{
	"INTCARD": true,
	"VNPAYQR": true,
	"VNBANK":  true,
	"VNMART":  true,
}

func IsVNPayPaymentMethod(in string) bool {
	_, ok := vnpayAllowPaymentMethods[in]
	return ok
}

func IsVNPayINTCARD(in string) bool {
	return in == "INTCARD"
}

type VNPayTxActionType string

const (
	VNPayTxActionType_INVALID VNPayTxActionType = "INVALID"
	VNPayTxActionType_OPEN    VNPayTxActionType = "OPEN"
	VNPayTxActionType_PAY     VNPayTxActionType = "PAY"
	VNPayTxActionType_REFUND  VNPayTxActionType = "REFUND"
)

type VNPayTxStatus string

const (
	VNPayTxStatus_INVALID VNPayTxStatus = "INVALID"
	VNPayTxStatus_SUCCESS VNPayTxStatus = "SUCCESS"
	VNPayTxStatus_FAIL    VNPayTxStatus = "FAIL"
)

type VNPayTxAction struct {
	Action          VNPayTxActionType
	Status          VNPayTxStatus
	At              *time.Time
	Note            string
	RequestPayload  map[string]string
	ResponsePayload map[string]string
}

type VNPayTxActions []*VNPayTxAction

type VNPayTx struct {
	Id            string
	RefId         string
	UserId        string
	OrderId       string
	OrderCode     string
	OrderDesc     string
	OrderAmount   float64
	OrderCurrency PaymentCurrency
	Actions       VNPayTxActions
	ServiceName   string
}

func (p VNPayTx) IsConfirmed() bool {
	for _, a := range p.Actions {
		if a.Action == VNPayTxActionType_PAY {
			return true
		}
	}

	return false
}

func (p VNPayTx) IsPaid() bool {
	for _, a := range p.Actions {
		if a.Action == VNPayTxActionType_PAY && a.Status == VNPayTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p VNPayTx) IsRefunded() bool {
	for _, a := range p.Actions {
		if a.Action == VNPayTxActionType_REFUND && a.Status == VNPayTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p *VNPayTx) AddActions(a *VNPayTxAction) {
	p.Actions = append(p.Actions, a)
}

type VNPayTxRepository interface {
	AddVNPayTx(ctx context.Context, in VNPayTx) (out *VNPayTx, err error)
	UpdateVNPayTx(ctx context.Context, in VNPayTx) error
	GetVNPayTxByRefId(ctx context.Context, refId string) (out *VNPayTx, err error)
	GetVNPayTxById(ctx context.Context, id string) (out *VNPayTx, err error)
}

func NewOpenVNPayTx(
	refId string,
	userId string,
	orderId string,
	orderCode string,
	orderDesc string,
	orderAmount float64,
	orderCurrency PaymentCurrency,
) (*VNPayTx, error) {
	if orderCurrency == PaymentCurrency_INVALID {
		return nil, ErrInvalidCurrency
	}

	if refId == "" {
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
	createdAction := &VNPayTxAction{
		Action: VNPayTxActionType_OPEN,
		Status: VNPayTxStatus_SUCCESS,
		At:     &now,
	}
	return &VNPayTx{
		Id:            primitive.NewObjectID().Hex(),
		RefId:         refId,
		UserId:        userId,
		OrderId:       orderId,
		OrderCode:     orderCode,
		OrderDesc:     orderDesc,
		OrderAmount:   orderAmount,
		OrderCurrency: orderCurrency,
		Actions:       VNPayTxActions{createdAction},
	}, nil
}
