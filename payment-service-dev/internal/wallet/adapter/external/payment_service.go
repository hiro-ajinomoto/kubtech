package external

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	tracingHttp "gitlab.bcasia.io/thuynga/apps/common/tracing/http"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/wallet/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
	"google.golang.org/grpc/metadata"

	paymentSrv "gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/app/service"
)

/*
*
1.0 : Call into payment service (another repo)
1.0.1: Call into payment service (inside repo)
*/
type paymentURL struct {
	URL string `json:"url"`
}

type PaymentService struct { //external Paymentservice (trùng tên trong service) implement từ Paymentservice
	cfg *config.Schema //--> CÁI NÀY LÀ ADAPTER PHƯƠNG THỨC THÌ LẤY TỪ INTERNAL SERVICVE, BỌC SERVICE TỪ PAYMENT THÀNH 1 FIELD
	/// HÌNH NHƯ KHÔNG ĐƯỢC BỌC LẠI, MÀ DÙNG THÀNG THẰNG SERVICE LUÔN
}

func NewPaymentService(cfg *config.Schema) *PaymentService {
	return &PaymentService{
		cfg: cfg,
	}
}

// TRONG EXTERNAL SERVICE NÀY MỚI LÀ THẰNG SỬ DỤNG PHƯƠNG THỨC NẰM NGOÀI

// MẤU CHỐT LOGIC NẰM Ở 2 SERVICE KHÁC NHAU
// EXTERNAL -> THỰC THI SERVICE CỦA WALLET
// TRONG SERVICE CỦA WALLET SỬ DỤNG SERVICE CỦA PAYMENT

// thằng con implement từ service (nhưng lại nằm trong external)
func (s PaymentService) InternalGetPaymentMethodByCode(ctx context.Context, code, partnershipId string) (*domain.PaymentMethod, error) {
	// conn, err := tracingGRPC.DialWithTrace(ctx, s.cfg.PaymentServiceEndpoint)
	// if err != nil {
	// 	logger.Error("Cannot connect payment service: ", err)
	// 	return nil, err
	// }
	// defer conn.Close()

	md := metadata.New(map[string]string{ //create a new md, with an element token : key is token and value is Service
		"token": s.cfg.InternalSecretToken,
	})
	newCtx := metadata.NewOutgoingContext(ctx, md) // return new context
	// client := paymentPb.NewPaymentServiceClient(conn)

	//đang dùng service của payment
	// KHÔNG BỌC THẰNG SERVICE THÀNH 1 FIELD MÀ SỬ DỤNG TRỰC TIẾP NÓ LUÔN
	res, err := paymentSrv.GetInternalService().GetPaymentMethodByCode(newCtx, code, partnershipId) //service from payment
	// tại sao lại không .repo

	if err != nil {
		return nil, err
	}

	return &domain.PaymentMethod{
		Id:            res.Id,
		Code:          res.Code,
		Name:          res.Name,
		Method:        domain.SupportedPaymentMethod(res.Method),
		Fee:           res.Fee,
		AdditionalFee: res.AdditionalFee,
		DisplayFee:    res.DisplayFee,
		Icon:          res.Icon,
		IncludeFee:    res.IncludeFee,
	}, nil
}

func (s PaymentService) GetPaymentData(ctx context.Context, paymentCreator domain.PaymentCreator, transaction *domain.Transaction) (*domain.PaymentData, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PaymentService.GetPaymentData")
	defer span.End()

	paymentData := &domain.PaymentData{} // tạo payment data rỗng

	if s.isWebviewMethod(transaction.Metadata.TopUp.PaymentMethod) {
		webviewUrl, err := s.getPaymentURL(ctx, paymentCreator, transaction) // và set up các filed cho metadata đó
		if err != nil {
			tracing.TraceErr(span, err)
			return nil, err
		}
		paymentData.WebviewUrl = webviewUrl
		return paymentData, nil
	}

	if transaction.Metadata.TopUp.PaymentMethod.Method == domain.PaymentMethod_PAYOO_CREDITCARD ||
		transaction.Metadata.TopUp.PaymentMethod.Method == domain.PaymentMethod_PAYOO_DOMESTIC_CARD ||
		transaction.Metadata.TopUp.PaymentMethod.Method == domain.PaymentMethod_PAYOO_QRCODE {
		payooOrderInfo, err := s.payooGenerateOrderInfo(ctx, paymentCreator, transaction)
		if err != nil {
			tracing.TraceErr(span, err)
			return nil, err
		}
		paymentData.SDK.Payoo = payooOrderInfo
		return paymentData, nil
	}

	return paymentData, nil
}

func (s PaymentService) getPaymentURL(ctx context.Context, paymentCreator domain.PaymentCreator, transaction *domain.Transaction) (string, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PaymentService.getPaymentURL")
	defer span.End()

	queryURL := buildQuery(paymentCreator, transaction)
	var getUrl string
	switch transaction.Metadata.TopUp.PaymentMethod.Method {
	case domain.PaymentMethod_PAYPAL:
		getUrl = fmt.Sprintf("%s/payment/paypal/payment-url", s.cfg.PaymentBaseURL) + "?" + queryURL
	case domain.PaymentMethod_VNPAY_EWALLET,
		domain.PaymentMethod_VNPAY_CREDITCARD,
		domain.PaymentMethod_VNPAY_BANKTRANSFER,
		domain.PaymentMethod_VNPAY_QRCODE:
		getUrl = fmt.Sprintf("%s/payment/vnpay/payment-url", s.cfg.PaymentBaseURL) + "?" + queryURL
	case domain.PaymentMethod_MANUAL_BANKTRANSFER:
		getUrl = fmt.Sprintf("%s/payment/tixlabs/bank-payment-url", s.cfg.PaymentBaseURL) + "?" + queryURL
	case domain.PaymentMethod_MOMO:
		getUrl = fmt.Sprintf("%s/payment/tixlabs/momo-payment-url", s.cfg.PaymentBaseURL) + "?" + queryURL
	case domain.PaymentMethod_TWO_CHECKOUT:
		getUrl = fmt.Sprintf("%s/payment/2checkout/payment-url", s.cfg.PaymentBaseURL) + "?" + queryURL
	case domain.PaymentMethod_ONE_PAY_DOMESTIC_CARD,
		domain.PaymentMethod_ONE_PAY_CREDITCARD,
		domain.PaymentMethod_ONE_PAY_CREDITCARD_DOMESTIC_ISSUE,
		domain.PaymentMethod_ONE_PAY_QRCODE:
		getUrl = fmt.Sprintf("%s/payment/onepay/payment-url", s.cfg.PaymentBaseURL) + "?" + queryURL
	default:
		return "", domain.ErrInvalidPaymentMethod
	}

	//m, ok := metadata.FromIncomingContext(ctx)
	//if !ok || len(m["token"]) == 0 {
	//	return "", domain.ErrUnauthorized
	//}

	headers := map[string]string{
		"Authorization": fmt.Sprintf("Bearer %s", paymentCreator.Token),
	}
	response, err := tracingHttp.JSONRequest(ctx, getUrl, "GET", nil, headers)
	if err != nil {
		tracing.TraceErr(span, err)
		return "", err
	}

	resBody, err := io.ReadAll(response.Body)
	if err != nil {
		tracing.TraceErr(span, err)
		return "", err
	}
	if response.StatusCode != http.StatusOK {
		tracing.TraceErr(span, errors.New(string(resBody)))
		return "", errors.New(string(resBody))
	}

	var res *paymentURL
	if err = json.Unmarshal(resBody, &res); err != nil || res == nil {
		tracing.TraceErr(span, err)
		return "", err
	}

	return res.URL, nil
}

func (s PaymentService) isWebviewMethod(p *domain.PaymentMethod) bool {
	switch p.Method {
	case domain.PaymentMethod_PAYPAL,
		domain.PaymentMethod_VNPAY_EWALLET,
		domain.PaymentMethod_VNPAY_CREDITCARD,
		domain.PaymentMethod_VNPAY_BANKTRANSFER,
		domain.PaymentMethod_VNPAY_QRCODE,
		domain.PaymentMethod_MANUAL_BANKTRANSFER,
		domain.PaymentMethod_MOMO,
		domain.PaymentMethod_TWO_CHECKOUT,
		domain.PaymentMethod_ONE_PAY_DOMESTIC_CARD,
		domain.PaymentMethod_ONE_PAY_CREDITCARD,
		domain.PaymentMethod_ONE_PAY_CREDITCARD_DOMESTIC_ISSUE,
		domain.PaymentMethod_ONE_PAY_QRCODE:
		return true
	}
	return false
}

func (s *PaymentService) payooGenerateOrderInfo(ctx context.Context, paymentCreator domain.PaymentCreator, transaction *domain.Transaction) (*domain.Payoo, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "PaymentService.payooGenerateOrderInfo")
	defer span.End()

	paymentAmount := transaction.Metadata.TopUp.TotalPrice
	params := map[string]string{
		"orderId":       transaction.Id,
		"orderAmount":   fmt.Sprintf("%.0f", paymentAmount),
		"orderDesc":     transaction.Description,
		"orderCode":     transaction.Id,
		"paymentMethod": transaction.Metadata.TopUp.PaymentMethod.Code,
		"appLang":       paymentCreator.AppLang,
		"serviceName":   domain.ServiceName,
	}
	// Build URL
	queryParams := url.Values{}
	for k, v := range params {
		queryParams.Add(k, v)
	}
	queryURL := queryParams.Encode()
	paymentServiceUrl := fmt.Sprintf("%s/payment/payoo/generate-order-info", s.cfg.PaymentBaseURL) + "?" + queryURL

	headers := map[string]string{"Authorization": fmt.Sprintf("Bearer %s", paymentCreator.Token)}
	response, err := tracingHttp.JSONRequest(context.Background(), paymentServiceUrl, "GET", nil, headers)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	resBody, err := io.ReadAll(response.Body)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}
	if response.StatusCode != http.StatusOK {
		return nil, errors.New(string(resBody))
	}
	payooOrderInfo := domain.Payoo{}
	if err := json.Unmarshal(resBody, &payooOrderInfo); err != nil {
		return nil, err
	}
	return &payooOrderInfo, nil

}

// quẻy trả về string là một dãy các số được mã hóa từ các param được lấy từ transaction và payment create
func buildQuery(paymentCreator domain.PaymentCreator, transaction *domain.Transaction) string {
	paymentAmount := transaction.Metadata.TopUp.TotalPrice

	params := map[string]string{
		"orderId":       transaction.Id,
		"orderAmount":   fmt.Sprintf("%.2f", paymentAmount), ///(chữ số thập phân được làm tròn đến 2 chữ số sau dấu phẩy
		"orderDesc":     transaction.Description,
		"orderCode":     transaction.Id,
		"paymentMethod": transaction.Metadata.TopUp.PaymentMethod.Code,
		"appLang":       paymentCreator.AppLang,
		"serviceName":   domain.ServiceName,
	}
	// nếu chưa có payment method data và method trong là manual banktransfer hoặc  method là momo thì số lượng olà số lượng payment
	// nếu A && B đúng thì không cần kiểm tra C -> chạy thẳng xử lý ngoặc
	// nếu A & B sai thì kiêm tra C có đúng không
	// nếu C đúng thì chạy vào trong ngoặc
	if transaction.Metadata.TopUp.PaymentMethod != nil && (transaction.Metadata.TopUp.PaymentMethod.Method == domain.PaymentMethod_MANUAL_BANKTRANSFER ||
		transaction.Metadata.TopUp.PaymentMethod.Method == domain.PaymentMethod_MOMO) {
		params["orderAmount"] = fmt.Sprintf("%d", int(paymentAmount))
	}
	// Build URL
	queryParams := url.Values{}
	for k, v := range params {
		queryParams.Add(k, v)
	}
	queryURL := queryParams.Encode()
	return queryURL
}
