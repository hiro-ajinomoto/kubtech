package service

import (
	"fmt"
	"net/url"
	"sort"

	twocheckout "gitlab.bcasia.io/thuynga/apps/payment-service/pkg/2checkout"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
)

var signatureRequiredFields = map[string]bool{
	"prod":         true,
	"price":        true,
	"currency":     true,
	"qty":          true,
	"type":         true,
	"expiration":   true,
	"item-ext-ref": true,
}

// TwoCheckout implements service.TwoCheckout interface in the app/service folder.
type TwoCheckout struct {
	cfg *config.Schema
}

func NewTwoCheckout(cfg *config.Schema) *TwoCheckout {
	return &TwoCheckout{cfg}
}

func (c *TwoCheckout) getURL(baseURL string, params map[string]string) string {
	queryParams := url.Values{}
	for key, value := range params {
		if value != "" {
			queryParams.Add(key, value)
		}
	}

	// Sort params by names.
	signatureFieldNames := make([]string, 0, len(params))
	for k := range params {
		if signatureRequiredFields[k] {
			signatureFieldNames = append(signatureFieldNames, k)
		}
	}
	sort.Strings(signatureFieldNames)

	// Build URL
	signatureInput := ""
	for _, fieldName := range signatureFieldNames {
		fieldValue := params[fieldName]
		if fieldValue != "" {
			signatureInput += fmt.Sprintf("%d%s", len(fieldValue), fieldValue)
		}
	}
	queryURL := queryParams.Encode()
	queryURL += "&signature=" + twocheckout.GetSignature(c.cfg.TwoCheckoutBuyLinkSecretWord, []byte(signatureInput))

	return baseURL + "?" + queryURL
}

func (c *TwoCheckout) PaymentURL(params map[string]string) string {
	params["dynamic"] = "1"
	params["currency"] = "USD"
	params["qty"] = "1"
	params["type"] = "digital"
	params["tpl"] = "one-column"
	return c.getURL(c.cfg.TwoCheckoutPayURL, params)
}
