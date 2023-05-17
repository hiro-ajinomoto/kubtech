package service

import (
	"context"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io"
	"time"

	"gitlab.bcasia.io/thuynga/apps/common/tracing"
	tracingHttp "gitlab.bcasia.io/thuynga/apps/common/tracing/http"

	"gitlab.bcasia.io/thuynga/apps/common/logger"

	"gitlab.bcasia.io/thuynga/apps/payment-service/internal/payment/domain"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/config"
	"gitlab.bcasia.io/thuynga/apps/payment-service/pkg/payoo"
)

// Payoo implements service.Payoo interface in the app/service folder.
type Payoo struct {
	cfg          *config.Schema
	timeLocation *time.Location
}

type payooCustomer struct {
	Name    string `xml:"name"`
	Phone   string `xml:"phone"`
	Address string `xml:"address"`
	Email   string `xml:"email"`
}

type payooOrderXML struct {
	Session          string        `xml:"session"`
	Username         string        `xml:"username"`
	ShopId           string        `xml:"shop_id"`
	ShopTitle        string        `xml:"shop_title"`
	ShopDomain       string        `xml:"shop_domain"`
	ShopBackUrl      string        `xml:"shop_back_url"`
	OrderNo          string        `xml:"order_no"`
	OrderShipDate    string        `xml:"order_ship_date"`
	OrderShipDays    string        `xml:"order_ship_days"`
	OrderCashAmount  string        `xml:"order_cash_amount"`
	NotifyUrl        string        `xml:"notify_url"`
	ValidityTime     string        `xml:"validity_time"`
	OrderDescription string        `xml:"order_description"`
	Customer         payooCustomer `xml:"customer"`
	JsonResponse     string        `xml:"JsonResponse"`
}

type shops struct {
	Shop []payooOrderXML `xml:"shop"`
}

type refundResponseData struct {
	ResponseCode string `json:",string"`
}

type getOrderInfoRequest struct {
	RequestData string
	Signature   string
}

func NewPayoo(cfg *config.Schema) *Payoo {
	return &Payoo{cfg: cfg, timeLocation: time.FixedZone("GMT+7", 7*60*60)}
}

func (p *Payoo) GenerateOrderInfo(ctx context.Context, params map[string]string) (orderInfoXML string, checksum string, err error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Payoo.GenerateOrderInfo")
	defer span.End()

	orderId := params["orderId"]
	orderCashAmount := params["orderCashAmount"]
	orderDesc := params["orderDesc"]
	buyerName := params["buyerName"]
	orderCode := params["orderCode"]

	now := time.Now()
	orderShipDate := now.In(p.timeLocation).Format("02/01/2006")
	validityTime := now.Add(time.Duration(p.cfg.PayooExpireTime) * time.Second).In(p.timeLocation).Format("20060102150405")

	//TODO check order status from payoo backend

	orderInfo := payooOrderXML{
		Session:          orderId,
		Username:         p.cfg.PayooUserName,
		ShopId:           p.cfg.PayooShopId,
		ShopTitle:        p.cfg.PayooShopTitle,
		ShopDomain:       p.cfg.PayooShopDomain,
		ShopBackUrl:      p.cfg.PayooShopBackUrl,
		OrderNo:          orderCode,
		OrderShipDate:    orderShipDate,
		OrderShipDays:    "0",
		OrderCashAmount:  orderCashAmount,
		NotifyUrl:        p.cfg.PayooNotifyUrl,
		ValidityTime:     validityTime,
		OrderDescription: orderDesc,
		Customer: payooCustomer{
			Name: buyerName,
		},
		JsonResponse: "TRUE",
	}

	shops := shops{}
	shops.Shop = append(shops.Shop, orderInfo)

	xmlByte, errXml := xml.Marshal(&shops)

	if errXml != nil {
		return "", "", domain.ErrInternalServer

	}

	orderInfoXML = string(xmlByte)
	checksum = payoo.GetChecksum(p.cfg.PayooSecretKey, orderInfoXML)
	return
}

func (p *Payoo) GetOrderInfo(ctx context.Context, orderId string, purchaseDate *time.Time) (*domain.PayooOrderInfoResponse, error) {
	ctx, span := tracing.StartSpanFromContext(ctx, "Payoo.GetOrderInfo")
	defer span.End()

	requestApi := p.cfg.PayooAPIBaseUrl + "/BusinessRestAPI.svc/GetOrderInfo"

	headers := map[string]string{
		"APIUsername":  p.cfg.PayooAPIUserName,
		"APIPassword":  p.cfg.PayooAPIPassword,
		"APISignature": p.cfg.PayooAPISignature,
	}

	requestData := map[string]string{
		"OrderId":      orderId,
		"ShopId":       p.cfg.PayooShopId,
		"PurchaseDate": purchaseDate.Format("20060102"),
	}

	requestDataJson, err := json.Marshal(requestData)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	requestDataStr := string(requestDataJson)
	signature := payoo.GetChecksum(p.cfg.PayooSecretKey, requestDataStr)

	logger.Debug("requestDataStr ", requestDataStr)
	logger.Debug("signature ", signature)

	getOrderInfoBody := getOrderInfoRequest{
		RequestData: requestDataStr,
		Signature:   signature,
	}

	response, err := tracingHttp.JSONRequest(context.Background(), requestApi, "POST", getOrderInfoBody, headers)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	var res map[string]string
	var responseData domain.PayooOrderInfo

	resByte, err := io.ReadAll(response.Body)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	err = json.Unmarshal(resByte, &res)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	err = json.Unmarshal([]byte(res["ResponseData"]), &responseData)
	if err != nil {
		tracing.TraceErr(span, err)
		return nil, err
	}

	// TODO verify signature

	return &domain.PayooOrderInfoResponse{
		Signature:    res["Signature"],
		ResponseData: responseData,
	}, nil
}

func (p *Payoo) Refund(ctx context.Context, params map[string]string) error {
	ctx, span := tracing.StartSpanFromContext(ctx, "Payoo.Refund")
	defer span.End()

	orderNo := params["orderId"]
	money := params["orderAmount"]
	description := params["description"]
	refundId := params["txId"]
	purchaseDate := params["purchaseDate"]

	requestApi := p.cfg.PayooAPIBaseUrl + "/BusinessRestAPI.svc/refund"
	headers := map[string]string{
		"APIUsername":  p.cfg.PayooAPIUserName,
		"APIPassword":  p.cfg.PayooAPIPassword,
		"APISignature": p.cfg.PayooAPISignature,
	}

	body := map[string]string{
		"OrderNo":      orderNo,
		"Money":        money,
		"description":  description,
		"actionType":   "2",
		"refundId":     refundId,
		"PurchaseDate": purchaseDate,
	}

	res, err := tracingHttp.JSONRequest(ctx, requestApi, "POST", body, headers)
	if err != nil {
		tracing.TraceErr(span, err)
		return err
	}
	resByte, err := io.ReadAll(res.Body)
	if err != nil {
		tracing.TraceErr(span, err)
		return err
	}
	responseData := refundResponseData{}
	err = json.Unmarshal(resByte, &responseData)
	if err != nil {
		tracing.TraceErr(span, err)
		return err
	}
	if responseData.ResponseCode == "0" {
		return nil
	}
	return fmt.Errorf("Refund failed! Payoo backend return code %s", responseData.ResponseCode)
}
