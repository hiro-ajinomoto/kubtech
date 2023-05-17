package query

import (
	"context"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/vnpay"
)

var (
	VNPayReturnFailedChecksum = domain.VNPayResponse{Message: "Failed checksum"}
	VNPayReturnSuccess        = domain.VNPayResponse{Message: "Success"}
	VNPayReturnFail           = domain.VNPayResponse{Message: "Fail"}
)

type VNPayReturnHandler struct {
	vnpayKey string
}

func NewVNPayReturnHandler(vnpayKey string) VNPayReturnHandler {
	return VNPayReturnHandler{vnpayKey}
}

func (h VNPayReturnHandler) Handle(ctx context.Context, params map[string]string) domain.VNPayResponse {
	ctx, span := tracing.StartSpanFromContext(ctx, "VNPayReturnHandler.Handle")
	defer span.End()
	// Checksum
	if ok := vnpay.VerifyChecksum(h.vnpayKey, params); !ok {
		return VNPayReturnFailedChecksum
	}

	respCode := params["vnp_ResponseCode"]
	if respCode == "00" {
		return VNPayReturnSuccess
	}

	if val, ok := VNPayResponseCode[respCode]; ok {
		return domain.VNPayResponse{
			RspCode: respCode,
			Message: val,
		}
	}

	return VNPayReturnFail
}
