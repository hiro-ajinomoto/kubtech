package domain

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type PayooRepository interface {
	AddPayooTx(ctx context.Context, in PayooTx) (out *PayooTx, err error)
	GetPayooTxByOrderId(ctx context.Context, orderId string) (out *PayooTx, err error)
	GetPayooTxById(ctx context.Context, id string) (out *PayooTx, err error)
	GetPayooTxByOrderCode(ctx context.Context, orderCode string) (out *PayooTx, err error)
	UpdatePayooTx(ctx context.Context, in PayooTx) error
}

type PayooTx struct {
	Id            string
	UserId        string
	OrderId       string
	OrderDesc     string
	OrderCode     string
	OrderAmount   float64
	CreateAt      *time.Time
	OrderCurrency PaymentCurrency
	Actions       PayooTxActions
	ServiceName   string
}

type PayooTxActionType string

const (
	PayooTxActionType_INVALID PayooTxActionType = "INVALID"
	PayooTxActionType_OPEN    PayooTxActionType = "OPEN"
	PayooTxActionType_PAY     PayooTxActionType = "PAY"
	PayooTxActionType_REFUND  PayooTxActionType = "REFUND"
)

type PayooTxStatus string

const (
	PayooTxStatus_INVALID PayooTxStatus = "INVALID"
	PayooTxStatus_SUCCESS PayooTxStatus = "SUCCESS"
	PayooTxStatus_FAIL    PayooTxStatus = "FAIL"
)

type PayooTxAction struct {
	Action          PayooTxActionType
	Status          PayooTxStatus
	At              *time.Time
	Note            string
	RequestPayload  map[string]string
	ResponsePayload map[string]string
}

type PayooTxActions []*PayooTxAction

type PayooIPNData struct {
	ResponseData   string `validate:"required"`
	Signature      string `validate:"required"`
	PayooIpAddress string `validate:"required"`
}

type PayooIPNResponse struct {
	ReturnCode  int // 0 : The successful result (Payoo will continue to return the result if the merchant's "ReturnCode" parameter is not 0).
	Description string
}

type PayooOrderInfo struct {
	OrderNo          string  `json:"OrderNo,omitempty"`
	OrderCash        float64 `json:"OrderCash,omitempty"`
	PaymentStatus    int     `json:"PaymentStatus,omitempty"`
	PaymentMethod    string  `json:"PaymentMethod,omitempty"`
	PurchaseDate     string  `json:"PurchaseDate,omitempty"`
	MerchantUserName string  `json:"MerchantUserName,omitempty"`
	ShopId           int64   `json:"ShopId,omitempty"`
	BankName         string  `json:"BankName,omitempty"`
	CardNumber       string  `json:"CardNumber,omitempty"`
	BillingCode      string  `json:"BillingCode,omitempty"`
	CardIssuanceType int     `json:"CardIssuanceType,omitempty"`
	ResponseCode     int     `json:"ResponseCode"`
}

type PayooOrderInfoResponse struct {
	ResponseData PayooOrderInfo `json:"ResponseData"`
	Signature    string         `json:"Signature,omitempty"`
}

var (
	PayooIPNResponse_OK               PayooIPNResponse = PayooIPNResponse{0, ""}
	PayooIPNResponse_INVALID_CHECKSUM PayooIPNResponse = PayooIPNResponse{1, "Invalid Checksum"}
	PayooIPNResponse_INVALID_DATA     PayooIPNResponse = PayooIPNResponse{1, "Invalid Data"}
	PayooIPNResponse_INVALID_AMOUNT   PayooIPNResponse = PayooIPNResponse{1, "Invalid Amount"}
	PayooIPNResponse_ORDER_NOT_FOUND  PayooIPNResponse = PayooIPNResponse{1, "Order Not found"}
	PayooIPNResponse_UNKNOWN_ERROR    PayooIPNResponse = PayooIPNResponse{1, "Unknown Error"}
)

var (
	PayooOrderInfoResponse_ERROR PayooOrderInfoResponse = PayooOrderInfoResponse{
		ResponseData: PayooOrderInfo{
			ResponseCode: -1,
		},
	}
	PayooOrderInfoResponse_PAID PayooOrderInfoResponse = PayooOrderInfoResponse{
		ResponseData: PayooOrderInfo{
			ResponseCode: 0,
		},
	}
	PayooOrderInfoResponse_PENDING PayooOrderInfoResponse = PayooOrderInfoResponse{
		ResponseData: PayooOrderInfo{
			ResponseCode: 2,
		},
	}
)

func (p PayooTx) IsPaid() bool {
	for _, a := range p.Actions {
		if a.Action == PayooTxActionType_PAY && a.Status == PayooTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p PayooTx) IsRefunded() bool {
	for _, a := range p.Actions {
		if a.Action == PayooTxActionType_REFUND && a.Status == PayooTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p PayooTx) IsFailed() bool {
	for _, a := range p.Actions {
		if a.Action == PayooTxActionType_PAY && a.Status == PayooTxStatus_FAIL {
			return true
		}
	}

	return false
}

func (p *PayooTx) AddActions(a *PayooTxAction) {
	p.Actions = append(p.Actions, a)
}

func NewOpenPayooTx(
	userId string,
	orderId string,
	orderCode string,
	orderDesc string,
	orderAmount float64,
	orderCurrency PaymentCurrency,
) (*PayooTx, error) {
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
	createdAction := &PayooTxAction{
		Action: PayooTxActionType_OPEN,
		Status: PayooTxStatus_SUCCESS,
		At:     &now,
	}
	return &PayooTx{
		Id:            primitive.NewObjectID().Hex(),
		UserId:        userId,
		OrderId:       orderId,
		OrderCode:     orderCode,
		OrderDesc:     orderDesc,
		OrderAmount:   orderAmount,
		OrderCurrency: orderCurrency,
		Actions:       PayooTxActions{createdAction},
	}, nil
}
