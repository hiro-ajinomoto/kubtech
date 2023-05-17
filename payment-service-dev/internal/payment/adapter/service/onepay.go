package service

import (
	"io"
	"net/http"
	"net/url"
	"sort"
	"strings"

	"github.com/pkg/errors"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/onepay"
)

// OnePay implements service.OnePay interface in the app/service folder.
type OnePay struct {
	cfg *config.Schema
}

func NewOnePay(cfg *config.Schema) *OnePay {
	return &OnePay{cfg}
}

func (c *OnePay) getURL(baseURL string, params map[string]string) string {
	// Sort params by names.
	fieldNames := make([]string, 0, len(params))
	for k := range params {
		fieldNames = append(fieldNames, k)
	}
	sort.Strings(fieldNames)
	// Build URL
	queryParams := url.Values{}
	var hashDataStr string
	for _, fieldName := range fieldNames {
		fieldValue := params[fieldName]
		if fieldValue != "" {
			queryParams.Add(fieldName, fieldValue)
			if strings.HasPrefix(fieldName, "vpc_") || strings.HasPrefix(fieldName, "user_") {
				hashDataStr = hashDataStr + (fieldName + "=" + fieldValue + "&")
			}
		}
	}
	hashDataStr = strings.TrimRight(hashDataStr, "&")
	checksum := onepay.GetChecksum(c.cfg.OnePayHashCode, []byte(hashDataStr))
	queryURL := queryParams.Encode()
	queryURL += "&vpc_SecureHash=" + checksum

	return baseURL + "?" + queryURL
}

func (c *OnePay) PaymentURL(params map[string]string) string {
	appLang := params["appLang"]
	delete(params, "appLang")

	if appLang == "vi" {
		params["vpc_Locale"] = "vn"
	} else {
		params["vpc_Locale"] = "en"
	}

	params["vpc_Version"] = "2"
	params["vpc_Currency"] = "VND"
	params["vpc_Command"] = "pay"
	params["vpc_AccessCode"] = c.cfg.OnePayAccessCode
	params["vpc_Merchant"] = c.cfg.OnePayMerchantId
	params["vpc_ReturnURL"] = c.cfg.OnePayReturnURL
	params["vpc_CallbackURL"] = c.cfg.OnePayCallbackUrl

	params["AgainLink"] = c.cfg.OnePayAgainLink
	params["Title"] = "Thanh toan cho don hang " + params["vpc_MerchTxnRef"]

	if params["vpc_CardList"] == "QR" {
		params["vpc_ReturnURL"] = c.cfg.OnePayReturnURLDeepLink
	}

	paymentApi := c.cfg.OnePayAPIBaseUrl + "/paygate/vpcpay.op"

	return c.getURL(paymentApi, params)
}

func (c *OnePay) ChecksumIsValid(params map[string]string) bool {
	return onepay.VerifyChecksum(c.cfg.OnePayHashCode, params)
}

func (c *OnePay) Refund(params map[string]string) (map[string]string, error) {

	params["vpc_Command"] = "refund"
	params["vpc_Merchant"] = c.cfg.OnePayMerchantId
	params["vpc_AccessCode"] = c.cfg.OnePayAccessCode
	params["vpc_Version"] = "2"

	refundApi := c.cfg.OnePayAPIBaseUrl + "/msp/api/v1/vpc/refunds"
	requestURL := c.getURL(refundApi, params)

	logger.Info("OnePay refund requestURL ", requestURL)

	res, err := http.Get(requestURL)
	if err != nil {
		return nil, errors.Wrap(err, "OnePay call request failed")
	}

	if res.StatusCode != 200 {
		return nil, errors.Errorf("OnePay call request failed, status: %d", res.StatusCode)
	}

	resBody, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, errors.Wrap(err, "OnePay read response body failed")
	}

	m, err := url.ParseQuery(string(resBody))
	if err != nil {
		return nil, errors.Wrap(err, "OnePay parse response failed")
	}

	resMap := make(map[string]string)
	for k, v := range m {
		resMap[k] = v[0]
	}

	logger.Infof("refund response: %+v", resMap)
	return resMap, nil
}

func (c *OnePay) GetInvoicesInfo(merchTxnRef string) (map[string]string, error) {

	queryParams := map[string]string{
		"vpc_Command":     "queryDR",
		"vpc_Version":     "1",
		"vpc_MerchTxnRef": merchTxnRef,
		"vpc_Merchant":    c.cfg.OnePayMerchantId,
		"vpc_AccessCode":  c.cfg.OnePayAccessCode,
		"vpc_User":        c.cfg.OnePayUser,
		"vpc_Password":    c.cfg.OnePayPassword,
	}

	queryApi := c.cfg.OnePayAPIBaseUrl + "/msp/api/v1/vpc/invoices/queries"
	requestURL := c.getURL(queryApi, queryParams)

	res, err := http.PostForm(requestURL, url.Values{})

	if err != nil {
		return nil, errors.Wrap(err, "OnePay call 	request failed")
	}

	if res.StatusCode != 200 {
		return nil, errors.Errorf("OnePay call request failed, status: %d", res.StatusCode)
	}

	resBody, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, errors.Wrap(err, "OnePay read response body failed")
	}

	m, err := url.ParseQuery(string(resBody))
	if err != nil {
		return nil, errors.Wrap(err, "OnePay parse response failed")
	}

	resMap := make(map[string]string)
	for k, v := range m {
		resMap[k] = v[0]
	}

	logger.Infof("invoices queries response: %+v", resMap)
	return resMap, nil

}
