package domain

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type OnePayResponse struct {
	RspCode string
	Message string
}

var OnePayResponseCodeByLocale = map[string]map[string]string{
	"vi": {
		"0":   "Giao dịch thành công",
		"1":   "Ngân hàng từ chối cấp phép giao dịch.",
		"2":   "Ngân hàng phát hành thẻ từ chối cấp phép giao dịch.",
		"3":   "Không nhận được kết quả phản hồi từ Tổ chức phát hành thẻ.",
		"4":   "Tháng/Năm hết hạn của thẻ không đúng hoặc thẻ đã hết hạn sử dụng.",
		"5":   "Số dư/Hạn mức của thẻ không đủ để thanh toán.",
		"6":   "Không nhận được kết quả phản hồi từ Tổ chức phát hành thẻ.",
		"7":   "Lỗi trong quá trình xử lý giao dịch của Ngân hàng.",
		"8":   "Ngân hàng phát hành thẻ không hỗ trợ thanh toán trực tuyến.",
		"9":   "Tên chủ thẻ/tài khoản không hợp lệ",
		"10":  "Thẻ hết hạn/Thẻ bị khóa.",
		"11":  "Thẻ/Tài khoản chưa đăng ký dịch vụ hỗ trợ thanh toán trực tuyến",
		"12":  "Tháng/Năm phát hành hoặc hết hạn của thẻ không hợp lệ.",
		"13":  "Giao dịch vượt quá hạn mức thanh toán trực tuyến theo quy định của Ngân hàng.",
		"14":  "Số thẻ không hợp lệ.",
		"21":  "Số dư tài khoản không đủ để thanh toán.",
		"22":  "Thông tin tài khoản không hợp lệ.",
		"23":  "Thẻ/Tài khoản bị khóa hoặc chưa được kích hoạt.",
		"24":  "Thông tin thẻ/tài khoản không hợp lệ.",
		"25":  "Mã xác thực OTP không hợp lệ.",
		"26":  "Mã xác thực OTP đã hết hiệu lực.",
		"98":  "Xác thực giao dịch bị hủy",
		"99":  "Người dùng hủy giao dịch.",
		"100": "Giao dịch đang được xử lý",
		"B":   "Lỗi trong quá trình xác thực giao dịch của Ngân hàng phát hành thẻ.",
		"D":   "Lỗi trong quá trình xác thực giao dịch của Ngân hàng phát hành thẻ.",
		"F":   "Xác thực giao dịch không thành công.",
		"U":   "Xác thực mã CSC không thành công.",
		"Z":   "Giao dịch bị từ chối.",
		"253": "Hết thời hạn nhập thông tin thanh toán.",
		"300": "Giao dịch đang chờ xử lý",
	},
	"en": {
		"0":   "Successful Transaction",
		"1":   "Unspecified failure in the authorization process of your Card Issuer.",
		"2":   "Card Issuer declined to authorize the transaction.",
		"3":   "No response from Card Issuer.",
		"4":   "Invalid Expiration Date or your card is now expired.",
		"5":   "Your card credit limit/ account balance was not enough to cover the payment.",
		"6":   "No response from Card Issuer.",
		"7":   "System error while processing transaction.",
		"8":   "Card Issuer does not support online payment.",
		"9":   "Card Issuer declined to authorize the transaction.",
		"10":  "Your card is now expired or deactivated.",
		"11":  "Your card/account was not activated features supporting for online payment.",
		"12":  "Invalid Issue Date or Expiration Date.",
		"13":  "Your transaction was exceeded online payment limit in accordance with your Bank's regulations.",
		"14":  "Invalid card number.",
		"21":  "Your account balance was not enough to cover the payment.",
		"22":  "Invalid Account Information.",
		"23":  "Your card/account is now blocked or not activated.",
		"24":  "Invalid Card/Account Information.",
		"25":  "Invalid OTP.",
		"26":  "OTP has expired.",
		"98":  "Authentication was cancelled.",
		"99":  "User cancelled transaction.",
		"100": "Transaction is processing",
		"B":   "Authentication failed.",
		"D":   "Authentication failed.",
		"F":   "Transaction authentication was not successful.",
		"U":   "CSC authentication was not successful.",
		"Z":   "Your transaction was declined.",
		"253": "Your session has expired.",
		"300": "Transaction is pending",
	},
}

func (r OnePayResponse) IsError() bool {
	return r.RspCode != "1"
}

var (
	OnePayOK                OnePayResponse = OnePayResponse{RspCode: "0", Message: "confirm-success"}
	OnePayErrUnknown        OnePayResponse = OnePayResponse{RspCode: "-1", Message: "Unknown Error"}
	OnePayErrChecksum       OnePayResponse = OnePayResponse{RspCode: "-1", Message: "Invalid Checksum"}
	OnePayErrOrderNotFound  OnePayResponse = OnePayResponse{RspCode: "-1", Message: "Order Not Found"}
	OnePayErrInvalidAmount  OnePayResponse = OnePayResponse{RspCode: "-1", Message: "Invalid Amount"}
	OnePayErrOrderConfirmed OnePayResponse = OnePayResponse{RspCode: "-1", Message: "Order Already Confirmed"}
)

type OnePayTxActionType string

const (
	OnePayTxActionType_INVALID OnePayTxActionType = "INVALID"
	OnePayTxActionType_OPEN    OnePayTxActionType = "OPEN"
	OnePayTxActionType_PAY     OnePayTxActionType = "PAY"
	OnePayTxActionType_REFUND  OnePayTxActionType = "REFUND"
)

type OnePayTxStatus string

const (
	OnePayTxStatus_INVALID OnePayTxStatus = "INVALID"
	OnePayTxStatus_SUCCESS OnePayTxStatus = "SUCCESS"
	OnePayTxStatus_FAIL    OnePayTxStatus = "FAIL"
)

type OnePayTxAction struct {
	Action          OnePayTxActionType
	Status          OnePayTxStatus
	At              *time.Time
	Note            string
	RequestPayload  map[string]string
	ResponsePayload map[string]string
}

type OnePayTxActions []*OnePayTxAction

type OnePayTx struct {
	Id            string
	RefId         string
	UserId        string
	OrderId       string
	OrderCode     string
	OrderDesc     string
	OrderAmount   float64
	OrderCurrency PaymentCurrency
	Actions       OnePayTxActions
	ServiceName   string
}

func (p OnePayTx) IsConfirmed() bool {
	for _, a := range p.Actions {
		if a.Action == OnePayTxActionType_PAY {
			return true
		}
	}

	return false
}

func (p OnePayTx) IsPaid() bool {
	for _, a := range p.Actions {
		if a.Action == OnePayTxActionType_PAY && a.Status == OnePayTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p OnePayTx) IsRefunded() bool {
	for _, a := range p.Actions {
		if a.Action == OnePayTxActionType_REFUND && a.Status == OnePayTxStatus_SUCCESS {
			return true
		}
	}

	return false
}

func (p *OnePayTx) AddActions(a *OnePayTxAction) {
	p.Actions = append(p.Actions, a)
}

type OnePayTxRepository interface {
	AddOnePayTx(ctx context.Context, in OnePayTx) (out *OnePayTx, err error)
	UpdateOnePayTx(ctx context.Context, in OnePayTx) error
	GetOnePayTxById(ctx context.Context, id string) (out *OnePayTx, err error)
	GetOnePayTxByOrderCode(ctx context.Context, orderCode string) (out *OnePayTx, err error)
	GetOnePayTxByRefId(ctx context.Context, refId string) (out *OnePayTx, err error)
	GetOnePayTxByOrderId(ctx context.Context, orderId string) (out *OnePayTx, err error)
}

func NewOpenOnePayTx(
	refId string,
	userId string,
	orderId string,
	orderCode string,
	orderDesc string,
	orderAmount float64,
	orderCurrency PaymentCurrency,
) (*OnePayTx, error) {
	if orderCurrency == PaymentCurrency_INVALID {
		return nil, ErrInvalidCurrency
	}

	if refId == "" {
		return nil, ErrPaypalMissingPaypalOrderId
	}

	if orderId == "" {
		return nil, ErrMissingOrderId
	}

	if userId == "" {
		return nil, ErrMissingUserId
	}

	now := time.Now()
	createdAction := &OnePayTxAction{
		Action: OnePayTxActionType_OPEN,
		Status: OnePayTxStatus_SUCCESS,
		At:     &now,
	}
	return &OnePayTx{
		Id:            primitive.NewObjectID().Hex(),
		RefId:         refId,
		UserId:        userId,
		OrderId:       orderId,
		OrderCode:     orderCode,
		OrderDesc:     orderDesc,
		OrderAmount:   orderAmount,
		OrderCurrency: orderCurrency,
		Actions:       OnePayTxActions{createdAction},
	}, nil
}
