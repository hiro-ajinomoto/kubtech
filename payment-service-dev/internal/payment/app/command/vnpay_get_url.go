package command

import (
	"context"
	"fmt"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/validator"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type VNPayGetURL struct {
	RemoteAddr    string     `json:"remote_addr"`
	PaymentMethod string     `json:"payment_method"`
	UserId        string     `json:"user_id" validate:"required"`
	OrderId       string     `json:"order_id" validate:"required"`
	OrderCode     string     `json:"order_code" validate:"required"`
	OrderDesc     string     `json:"order_desc" validate:"required"`
	OrderAmount   float64    `json:"order_amount" validate:"required"`
	CreateTime    *time.Time `json:"create_time" validate:"required"`
	ServiceName   string     `json:"service_name"`
}

type VNPayGetURLHandler struct {
	paymentExpireTime uint64
	vnpayTxRepo       domain.VNPayTxRepository
	vnpayClient       service.VNPay
}

func NewVNPayGetURLHandler(
	paymentExpireTime uint64,
	vnpayTxRepo domain.VNPayTxRepository,
	vnpayClient service.VNPay,
) VNPayGetURLHandler {
	if vnpayTxRepo == nil {
		panic("nil vnpayTxRepo")
	}

	if vnpayClient == nil {
		panic("nil vnpayClient")
	}

	return VNPayGetURLHandler{paymentExpireTime, vnpayTxRepo, vnpayClient}
}

func (h VNPayGetURLHandler) Handle(ctx context.Context, cmd VNPayGetURL) (string, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "VNPayGetURLHandler.Handle")
	defer span.End()

	if err := validator.Validate(cmd); err != nil {
		tracing.TraceErr(span, err)
		logger.Error(err)
		return "", domain.ErrIncorrectValue
	}

	if !domain.IsVNPayPaymentMethod(cmd.PaymentMethod) {
		return "", domain.ErrVNPayInvalidPaymentMethod
	}

	createDate := cmd.CreateTime.In(domain.VNPayTZ)
	expireTime := time.Duration(h.paymentExpireTime) * time.Second
	expireDate := createDate.Add(expireTime)
	createDateStr := fmt.Sprint(createDate.Format(domain.VNPayDateTimeFormat))
	expireDateStr := fmt.Sprint(expireDate.Format(domain.VNPayDateTimeFormat))
	refId := fmt.Sprintf("%s__%s", cmd.OrderId, createDateStr)

	vnpParams := map[string]string{}
	vnpParams["vnp_TxnRef"] = refId
	vnpParams["vnp_IpAddr"] = cmd.RemoteAddr
	vnpParams["vnp_OrderInfo"] = cmd.OrderDesc
	vnpParams["vnp_BankCode"] = cmd.PaymentMethod
	vnpParams["vnp_Amount"] = fmt.Sprintf("%d", uint64(cmd.OrderAmount*100))
	vnpParams["vnp_CreateDate"] = createDateStr
	vnpParams["vnp_ExpireDate"] = expireDateStr

	// Save transaction.
	tx, err := domain.NewOpenVNPayTx(
		refId,
		cmd.UserId,
		cmd.OrderId,
		cmd.OrderCode,
		cmd.OrderDesc,
		cmd.OrderAmount,
		domain.PaymentCurrency_VND,
	)
	if err != nil {
		return "", err
	}
	if cmd.ServiceName != "" {
		tx.ServiceName = cmd.ServiceName
	}
	if _, err := h.vnpayTxRepo.AddVNPayTx(ctx, *tx); err != nil {
		tracing.TraceErr(span, err)
		return "", domain.ErrInternalServer
	}

	return h.vnpayClient.PaymentURL(vnpParams), nil
}
