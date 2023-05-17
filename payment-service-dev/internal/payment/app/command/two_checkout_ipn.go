package command

import (
	"context"
	"strconv"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type TwoCheckoutIPN struct {
	IPNExternalReference []string                        `json:"IPN_EXTERNAL_REFERENCE[]" validate:"required,min=1"`
	IPNPProductName      []string                        `json:"IPN_PNAME[]" validate:"required,min=1"`
	IPNPProductPrice     []string                        `json:"IPN_PRICE[]" validate:"required,min=1"`
	OrderStatus          []domain.TwoCheckoutOrderStatus `json:"ORDERSTATUS" validate:"required,min=1"`
	Hash                 []string                        `json:"HASH" validate:"required,min=1"`
}

type TwoCheckoutIPNHandler struct {
	cfg               *config.Schema
	twoCheckoutTxRepo domain.TwoCheckoutTxRepository
	orderClient       service.Order
}

func NewTwoCheckoutIPNHandler(
	cfg *config.Schema,
	twoCheckoutTxRepo domain.TwoCheckoutTxRepository,
	orderClient service.Order,
) TwoCheckoutIPNHandler {
	if twoCheckoutTxRepo == nil {
		panic("nil twoCheckoutTxRepo")
	}

	if orderClient == nil {
		panic("nil orderClient")
	}

	return TwoCheckoutIPNHandler{
		cfg:               cfg,
		twoCheckoutTxRepo: twoCheckoutTxRepo,
		orderClient:       orderClient,
	}
}

func (h TwoCheckoutIPNHandler) Handle(ctx context.Context, cmd TwoCheckoutIPN, rawParams string) domain.TwoCheckoutResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "TwoCheckoutIPNHandler.Handle")
	defer span.End()

	logger.Infof("%s", cmd)
	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error("Validate req: ", err)
		return domain.TwoCheckoutErrInvalidAmount
	}

	// Checksum
	//if ok := twocheckout.VerifyChecksum(h.cfg.TwoCheckoutSecretKey, rawParams); !ok {
	//	return domain.TwoCheckoutErrChecksum
	//}

	refId := cmd.IPNExternalReference[0]
	orderCode := cmd.IPNPProductName[0]
	paymentAmount := cmd.IPNPProductPrice[0]
	orderStatus := cmd.OrderStatus[0]
	if refId == "" || orderCode == "" || paymentAmount == "" || orderStatus == "" {
		logger.Error("missing critical data.")
		return domain.TwoCheckoutErrUnknown
	}

	tx, err := h.twoCheckoutTxRepo.GetTwoCheckoutTxByRefId(ctx, refId)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TwoCheckoutErrUnknown
	}

	if tx == nil {
		logger.Errorf("not found, refId %s, orderCode: %s", refId, orderCode)
		return domain.TwoCheckoutErrOrderNotFound
	}

	if tx.IsPaid() {
		logger.Errorf("already confirmed, orderCode: %s", orderCode)
		return domain.TwoCheckoutErrOrderConfirmed
	}

	now := time.Now()
	if domain.IgnoreOrderStatus[orderStatus] {
		payAction := &domain.TwoCheckoutTxAction{
			Action: domain.TwoCheckoutTxActionType_PAY,
			Status: domain.TwoCheckoutTxStatus_IN_PROGRESS,
			At:     &now,
		}
		tx.AddActions(payAction)
		if err := h.twoCheckoutTxRepo.UpdateTwoCheckoutTx(ctx, *tx); err != nil {
			tracing.TraceErr(span, err)
			return domain.TwoCheckoutErrUnknown
		}
		return domain.TwoCheckoutOK
	}

	orderAmount, err := strconv.ParseFloat(paymentAmount, 64)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return domain.TwoCheckoutErrUnknown
	}

	if orderAmount < tx.OrderAmount {
		logger.Errorf("invalid amount, expected: %f, actual: %f", tx.OrderAmount, orderAmount)
		return domain.TwoCheckoutErrInvalidAmount
	}

	// Save transaction.
	isPaymentSuccess := orderStatus == domain.TwoCheckoutOrderStatus_COMPLETE
	payActionStatus := domain.TwoCheckoutTxStatus_FAIL
	if isPaymentSuccess {
		payActionStatus = domain.TwoCheckoutTxStatus_SUCCESS
	}
	payAction := &domain.TwoCheckoutTxAction{
		Action: domain.TwoCheckoutTxActionType_PAY,
		Status: payActionStatus,
		At:     &now,
	}
	tx.AddActions(payAction)
	if err := h.twoCheckoutTxRepo.UpdateTwoCheckoutTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		return domain.TwoCheckoutErrUnknown
	}

	// Notify order service to update order's payment status.
	req := service.UpdatePaymentRequest{
		PaymentId:        tx.Id,
		OrderId:          tx.OrderId,
		OrderCode:        tx.OrderCode,
		OrderAmount:      tx.OrderAmount,
		PaymentProvider:  domain.PaymentProvider_TWO_CHECKOUT,
		PaymentCurrency:  domain.PaymentCurrency_USD,
		IsPaymentSuccess: isPaymentSuccess,
		ServiceName:      tx.ServiceName,
	}
	err = h.orderClient.UpdatePayment(ctx, req)
	if err != nil {
		tracing.TraceErr(span, err)
		return domain.TwoCheckoutErrUnknown
	}

	return domain.TwoCheckoutOK
}
