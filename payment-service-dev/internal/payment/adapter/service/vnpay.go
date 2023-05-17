package service

import (
	"io/ioutil"
	"net/http"
	"net/url"
	"sort"

	"github.com/pkg/errors"
	"gitlab.bcasia.io/thuynga/apps/common/logger"
	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/vnpay"
)

// VNPay implements service.VNPay interface in the app/service folder.
type VNPay struct {
	cfg *config.Schema
}

func NewVNPay(cfg *config.Schema) *VNPay {
	return &VNPay{cfg}
}

func (c *VNPay) getURL(baseURL string, params map[string]string) string {
	// Sort params by names.
	fieldNames := make([]string, 0, len(params))
	for k := range params {
		fieldNames = append(fieldNames, k)
	}
	sort.Strings(fieldNames)

	// Build URL
	queryParams := url.Values{}
	for _, fieldName := range fieldNames {
		fieldValue := params[fieldName]
		if fieldValue != "" {
			queryParams.Add(fieldName, fieldValue)
		}
	}
	queryURL := queryParams.Encode()
	queryURL += "&vnp_SecureHash=" + vnpay.GetChecksum(c.cfg.VNPKey, []byte(queryURL))

	return baseURL + "?" + queryURL
}

func (c *VNPay) PaymentURL(params map[string]string) string {
	params["vnp_TmnCode"] = c.cfg.VNPCode
	if domain.IsVNPayINTCARD(params["vnp_BankCode"]) {
		params["vnp_TmnCode"] = c.cfg.VNPCodeForINTCARD
	}

	params["vnp_Version"] = c.cfg.VNPVersion
	params["vnp_ReturnUrl"] = c.cfg.VNPReturnURL
	params["vnp_Command"] = "pay"
	params["vnp_Locale"] = "vn"
	params["vnp_CurrCode"] = "VND"
	return c.getURL(c.cfg.VNPPayURL, params)
}

func (c *VNPay) Refund(params map[string]string) (map[string]string, error) {
	params["vnp_Version"] = c.cfg.VNPVersion
	params["vnp_TmnCode"] = c.cfg.VNPCode
	params["vnp_Command"] = "refund"
	params["vnp_TransactionType"] = "02" //Full refund.
	params["vnp_IpAddr"] = "127.0.0.1"
	params["vnp_CreateBy"] = "tixlabs"
	requestURL := c.getURL(c.cfg.VNPMerchantURL, params)
	logger.Info("refund request: ", requestURL)

	res, err := http.Get(requestURL)
	if err != nil {
		return nil, errors.Wrap(err, "VNPay call request failed")
	}

	if res.StatusCode != 200 {
		return nil, errors.Errorf("VNPay call request failed, status: %d", res.StatusCode)
	}

	resBody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, errors.Wrap(err, "VNPay read response body failed")
	}

	m, err := url.ParseQuery(string(resBody))
	if err != nil {
		return nil, errors.Wrap(err, "VNPay parse response failed")
	}

	resMap := make(map[string]string)
	for k, v := range m {
		resMap[k] = v[0]
	}

	logger.Infof("refund response: %+v", resMap)
	return resMap, nil
}
