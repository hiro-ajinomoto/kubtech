package service

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

//go:generate mockery --name=Paypal

type PaypalErrorResponse struct {
	errName  string
	errIssue string
}

func (p PaypalErrorResponse) GotError() bool {
	return p.errName != ""
}

func (p PaypalErrorResponse) GetErrorMessage() string {
	return p.errName + "__" + p.errIssue
}

func NewPaypalErrorResponse(name, issue string) PaypalErrorResponse {
	return PaypalErrorResponse{
		errName:  name,
		errIssue: issue,
	}
}

type PaypalCreateOrderRequest struct {
	OrderId     string
	OrderAmount string
	OrderDesc   string
}

type PaypalCreateOrderResponse struct {
	PaypalOrderId string
	ApproveURL    string
}

type PaypalCaptureOrderResponse struct {
	PaypalErrorResponse
	Id            string
	OrderId       string
	OrderAmount   float64
	OrderCurrency domain.PaymentCurrency
}

type Paypal interface {
	CreateOrder(ctx context.Context, req PaypalCreateOrderRequest) (*PaypalCreateOrderResponse, error)
	CaptureOrder(ctx context.Context, id string) (*PaypalCaptureOrderResponse, error)
	Refund(ctx context.Context, id string) error
}
