package query

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/onepay"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
)

var (
	OnePayReturnFailedChecksum = domain.OnePayResponse{Message: "Failed checksum"}
	OnePayReturnSuccess        = domain.OnePayResponse{Message: "Success"}
	OnePayReturnFail           = domain.OnePayResponse{Message: "Fail"}
)

type OnePayReturnHandler struct {
	hashKey string
}

func NewOnePayReturnHandler(hashKey string) OnePayReturnHandler {
	return OnePayReturnHandler{hashKey}
}

func (h OnePayReturnHandler) Handle(ctx context.Context, params map[string]string) domain.OnePayResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "OnePayReturnHandler.Handle")
	defer span.End()

	// Checksum
	if ok := onepay.VerifyChecksum(h.hashKey, params); !ok {
		return OnePayReturnFailedChecksum
	}

	locale := params["vpc_Locale"]
	if locale != "vn" && locale != "en" {
		locale = "vi"
	}
	if locale == "vn" {
		locale = "vi"
	}

	respCode := params["vpc_TxnResponseCode"]
	if respCode == "0" {
		return OnePayReturnSuccess
	}

	if val, ok := domain.OnePayResponseCodeByLocale[locale][respCode]; ok {
		return domain.OnePayResponse{
			RspCode: respCode,
			Message: val,
		}
	}

	return OnePayReturnFail
}
