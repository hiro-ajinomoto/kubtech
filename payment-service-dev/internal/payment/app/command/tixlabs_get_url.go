package command

import (
	"context"
	"fmt"
	"net/url"
	"sort"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

type TixlabsGetURL struct {
	PaymentProvider domain.PaymentProvider `json:"payment_provider" validate:"required"`
	UserId          string                 `json:"user_id" validate:"required"`
	OrderId         string                 `json:"order_id" validate:"required"`
	OrderCode       string                 `json:"order_code" validate:"required"`
	OrderAmount     float64                `json:"order_amount" validate:"required"`
	ServiceName     string                 `json:"service_name"`
}

type TixlabsGetURLHandler struct {
	cfg           *config.Schema
	tixlabsTxRepo domain.TixlabsTxRepository
}

func NewTixlabsGetURLHandler(
	cfg *config.Schema,
	tixlabsTxRepo domain.TixlabsTxRepository,
) TixlabsGetURLHandler {
	if cfg == nil {
		panic("nil cfg")
	}

	if tixlabsTxRepo == nil {
		panic("nil tixlabsTxRepo")
	}

	return TixlabsGetURLHandler{cfg, tixlabsTxRepo}
}

func (h TixlabsGetURLHandler) Handle(ctx context.Context, cmd TixlabsGetURL) (string, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "TixlabsGetURLHandler.Handle")
	defer span.End()

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrIncorrectValue
	}

	tx, err := h.tixlabsTxRepo.GetTixlabsTxByOrderCode(ctx, cmd.OrderCode)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrInternalServer
	}

	// This is a fresh new request.
	if tx == nil {
		logger.Infof("create tx for orderCode: %s", cmd.OrderCode)
		openTx, err := h.createOpenTx(ctx, cmd)
		if err != nil {
			tracing.TraceErr(span, err)
			return "", err
		}

		return h.buildURL(openTx)
	}

	// Already existed transaction, update it.
	if tx.IsConfirmed() {
		logger.Infof("already confirmed, orderCode: %s, orderId: %s", tx.OrderCode, tx.OrderId)
		return "", domain.ErrTixlabsAlreadyConfirmed
	}

	// Currently, we only update order amount of existed transaction.
	tx.OrderAmount = cmd.OrderAmount

	// Add action for audit.
	now := time.Now()
	openAction := &domain.TixlabsTxAction{
		Action: domain.TixlabsTxActionType_OPEN,
		Status: domain.TixlabsTxStatus_SUCCESS,
		At:     &now,
		Note:   fmt.Sprintf("update amount: %.2f", cmd.OrderAmount),
	}
	tx.AddActions(openAction)

	if err := h.tixlabsTxRepo.UpdateTixlabsTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrInternalServer
	}

	return h.buildURL(tx)

}

func (h TixlabsGetURLHandler) createOpenTx(ctx context.Context, cmd TixlabsGetURL) (*domain.TixlabsTx, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "TixlabsGetURLHandler.createOpenTx")
	defer span.End()

	tx, err := domain.NewOpenTixlabsTx(
		cmd.PaymentProvider,
		cmd.UserId,
		cmd.OrderId,
		cmd.OrderCode,
		cmd.OrderAmount,
		domain.PaymentCurrency_VND,
	)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	if cmd.ServiceName != "" {
		tx.ServiceName = cmd.ServiceName
	}
	inserted, err := h.tixlabsTxRepo.AddTixlabsTx(ctx, *tx)
	if err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return nil, domain.ErrInternalServer
	}

	return inserted, nil
}

func (h TixlabsGetURLHandler) buildURL(tx *domain.TixlabsTx) (string, error) {
	params := map[string]string{
		"orderId":     tx.OrderId,
		"orderCode":   tx.OrderCode,
		"orderAmount": fmt.Sprintf("%d", uint64(tx.OrderAmount)),
		"expireTime":  fmt.Sprintf("%d", 300),
	}

	// Sort params by names.
	fieldNames := make([]string, 0, len(params))
	for k := range params {
		fieldNames = append(fieldNames, k)
	}
	sort.Strings(fieldNames)

	// Assemble URL
	queryParams := url.Values{}
	for _, fieldName := range fieldNames {
		fieldValue := params[fieldName]
		if fieldValue != "" {
			queryParams.Add(fieldName, fieldValue)
		}
	}
	queryURL := queryParams.Encode()
	payURL := h.cfg.BankPayURL + "?" + queryURL
	if tx.Provider == domain.PaymentProvider_MOMO {
		payURL = h.cfg.MomoPayURL + "?" + queryURL
	}

	return payURL, nil
}
