package command

import (
	"context"
	"fmt"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

type OnePayGetURL struct {
	RemoteAddr    string     `json:"remote_addr"`
	PaymentMethod string     `json:"payment_method"`
	UserId        string     `json:"user_id" validate:"required"`
	OrderId       string     `json:"order_id" validate:"required"`
	OrderDesc     string     `json:"order_desc" validate:"required"`
	OrderCode     string     `json:"order_code" validate:"required"`
	AppLang       string     `json:"app_lang" validate:"required"`
	OrderAmount   float64    `json:"order_amount" validate:"required"`
	CreateTime    *time.Time `json:"create_time" validate:"required"`
	ServiceName   string     `json:"service_name"`
}

type OnePayURLResponse struct {
	URL string `json:"url"`
}

type OnePayGetURLHandler struct {
	paymentExpireTime uint64
	onePayTxRepo      domain.OnePayTxRepository
	onePayClient      service.OnePay
}

func NewOnePayGetURLHandler(
	paymentExpireTime uint64,
	onePayTxRepo domain.OnePayTxRepository,
	onePayClient service.OnePay,
) OnePayGetURLHandler {
	if onePayTxRepo == nil {
		panic("nil onePayTxRepo")
	}

	if onePayClient == nil {
		panic("nil onePayClient")
	}

	return OnePayGetURLHandler{paymentExpireTime, onePayTxRepo, onePayClient}
}

func (h OnePayGetURLHandler) Handle(ctx context.Context, cmd OnePayGetURL) (string, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "OnePayGetURLHandler.Handle")
	defer span.End()

	createDate := cmd.CreateTime.In(time.FixedZone("GMT+7", 7*60*60))
	createDateStr := fmt.Sprint(createDate.Format("20060102150405"))
	refId := fmt.Sprintf("%s__%s", cmd.OrderCode, createDateStr)

	tx, err := h.onePayTxRepo.GetOnePayTxByOrderCode(ctx, cmd.OrderCode)

	if err != nil {
		tracing.TraceErr(span, err)
		return "", err
	}

	if tx != nil {
		if tx.OrderAmount != cmd.OrderAmount {
			tx.OrderAmount = cmd.OrderAmount
		}
		if tx.OrderDesc != cmd.OrderDesc {
			tx.OrderDesc = cmd.OrderDesc
		}

		// Update new refId, refId is unique each time submit to onepay
		tx.RefId = refId
		if err := h.onePayTxRepo.UpdateOnePayTx(ctx, *tx); err != nil {
			logger.Errorf("[OnePayGetUrl] UpdateOnePayTx Error: %+v", err)
			return "", domain.ErrInternalServer
		}
	}

	if tx == nil && err == nil {
		// Save transaction
		tx, err = domain.NewOpenOnePayTx(
			refId,
			cmd.UserId,
			cmd.OrderId,
			cmd.OrderCode,
			cmd.OrderDesc,
			cmd.OrderAmount,
			domain.PaymentCurrency_VND,
		)

		if err != nil {
			tracing.TraceErr(span, err)
			return "", err
		}
		if cmd.ServiceName != "" {
			tx.ServiceName = cmd.ServiceName
		}

		if _, err := h.onePayTxRepo.AddOnePayTx(ctx, *tx); err != nil {
			tracing.TraceErr(span, err)
			return "", domain.ErrInternalServer
		}
	}

	oneParams := map[string]string{}
	oneParams["vpc_MerchTxnRef"] = tx.RefId
	oneParams["vpc_OrderInfo"] = tx.OrderDesc
	oneParams["vpc_Amount"] = fmt.Sprintf("%d", uint64(tx.OrderAmount)*100)
	oneParams["vpc_TicketNo"] = cmd.RemoteAddr
	oneParams["appLang"] = cmd.AppLang

	if cmd.PaymentMethod == "ONE_PAY_DOMESTIC_CARD" {
		oneParams["vpc_CardList"] = "DOMESTIC"
	} else if cmd.PaymentMethod == "ONE_PAY_QRCODE" {
		oneParams["vpc_CardList"] = "QR"
	} else {
		oneParams["vpc_CardList"] = "INTERNATIONAL"
	}

	return h.onePayClient.PaymentURL(oneParams), nil
}
