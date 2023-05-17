package service

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"strconv"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"github.com/plutov/paypal/v4"
	"gitlab.bcasia.io/thuynga/apps/common/constants"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	svc "gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

// Paypal implements appService.Paypal interface in the app/service folder.
type Paypal struct {
	c         *paypal.Client
	brandName string
	returnURL string
	cancelURL string
}

func NewPaypal(cfg *config.Schema) *Paypal {
	if cfg == nil {
		panic("nil cfg")
	}

	base := paypal.APIBaseSandBox
	if cfg.Env == constants.ProductionEnvName {
		base = paypal.APIBaseLive
	}

	c, err := paypal.NewClient(cfg.PaypalClientId, cfg.PaypalClientSecret, base)
	if err != nil {
		panic(err)
	}
	// c.SetLog(os.Stdout)

	_, err = c.GetAccessToken(context.Background())
	if err != nil {
		panic(err)
	}

	return &Paypal{
		c:         c,
		brandName: cfg.PaypalBrandName,
		returnURL: cfg.PaypalReturnURL,
		cancelURL: cfg.PaypalCancelURL,
	}
}

func (p *Paypal) CreateOrder(
	ctx context.Context,
	req svc.PaypalCreateOrderRequest,
) (*svc.PaypalCreateOrderResponse, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Paypal.CreateOrder")
	defer span.End()
	pu := paypal.PurchaseUnitRequest{
		ReferenceID: req.OrderId,
		Amount:      &paypal.PurchaseUnitAmount{Value: req.OrderAmount, Currency: "USD"},
		Description: req.OrderDesc,
	}

	order, err := p.c.CreateOrder(
		ctx,
		paypal.OrderIntentCapture,
		[]paypal.PurchaseUnitRequest{pu},
		nil,
		&paypal.ApplicationContext{
			BrandName: p.brandName,
			ReturnURL: p.returnURL,
			CancelURL: p.cancelURL,
		},
	)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	// Log order response data.
	o, _ := json.Marshal(order)
	logger.Info("order: ", string(o))

	res := &svc.PaypalCreateOrderResponse{
		PaypalOrderId: order.ID,
	}
	for _, l := range order.Links {
		if l.Rel == "approve" {
			res.ApproveURL = l.Href
			return res, nil
		}
	}

	return nil, fmt.Errorf("not found approve link")
}

func (p *Paypal) CaptureOrder(ctx context.Context, id string) (*svc.PaypalCaptureOrderResponse, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Paypal.CaptureOrder")
	defer span.End()

	capture, err := p.c.CaptureOrder(ctx, id, paypal.CaptureOrderRequest{})
	if err != nil {
		tracing.TraceErr(span, err)
		var paypalErr *paypal.ErrorResponse
		if errors.As(err, &paypalErr) {
			logger.Errorf("Paypal.CaptureOrder error: %+v", paypalErr)
			var issue string
			if len(paypalErr.Details) > 0 {
				issue = paypalErr.Details[0].Issue
			}
			return &svc.PaypalCaptureOrderResponse{
				PaypalErrorResponse: svc.NewPaypalErrorResponse(
					paypalErr.Name,
					issue,
				),
			}, nil
		}

		return nil, err
	}

	// Log capture response data.
	c, _ := json.Marshal(capture)
	logger.Info("capture: ", string(c))

	transaction := capture.PurchaseUnits[0].Payments.Captures[0]
	orderId := capture.PurchaseUnits[0].ReferenceID
	orderCurrency := domain.ParseCurrency(transaction.Amount.Currency)
	orderAmount, err := strconv.ParseFloat(transaction.Amount.Value, 64)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	return &svc.PaypalCaptureOrderResponse{
		Id:            transaction.ID,
		OrderId:       orderId,
		OrderAmount:   orderAmount,
		OrderCurrency: orderCurrency,
	}, nil
}

func (p *Paypal) Refund(ctx context.Context, id string) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Paypal.Refund")
	defer span.End()
	refund, err := p.c.RefundCapture(ctx, id, paypal.RefundCaptureRequest{})
	if err != nil {
		tracing.TraceErr(span, err)
		var paypalErr *paypal.ErrorResponse
		if errors.As(err, &paypalErr) {
			logger.Errorf("%+v", paypalErr)
		}

		return err
	}

	// Log capture response data.
	c, _ := json.Marshal(refund)
	logger.Info("refund: ", string(c))
	return nil
}
