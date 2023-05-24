package config

import (
	"bytes"
	"encoding/json"
	"fmt"
	"math"
	"strings"

	"github.com/joho/godotenv"
	"github.com/mitchellh/mapstructure"
	"github.com/spf13/viper"
	"gitlab.bcasia.io/thuynga/apps/common/constants"
	"gitlab.bcasia.io/thuynga/apps/common/errors"
)

type Schema struct { // ???
	Env      string `json:"env"`
	Port     string `json:"port"`
	HTTPPort string `json:"http_port"`

	AuthSigningKey      string   `json:"auth_signing_key"`
	PublicPaths         []string `json:"public_paths"`
	PublicMethods       []string `json:"public_methods"`
	InternalMethods     []string `json:"internal_methods"`
	InternalSecretToken string   `json:"internal_secret_token"`

	DBWriteURL   string `json:"db_write_url"`
	DBReadURL    string `json:"db_read_url"`
	DBName       string `json:"db_name"`
	DBWalletName string `json:"db_wallet_name"`

	RabbitmqURL           string `json:"rabbitmq_url"`
	RabbitDeclarationFile string `json:"rabbit_declaration_file"`

	RabbitmqWalletURL           string `json:"rabbitmq_wallet_url"`
	RabbitWalletDeclarationFile string `json:"rabbit_wallet_declaration_file"`

	VNPPayURL            string `json:"vnp_pay_url"`
	VNPMerchantURL       string `json:"vnp_merchant_url"`
	VNPReturnURL         string `json:"vnp_return_url"`
	VNPVersion           string `json:"vnp_version"`
	VNPCode              string `json:"vnp_code"`
	VNPCodeForINTCARD    string `json:"vnp_code_for_intcard"`
	VNPKey               string `json:"vnp_key"`
	VNPPaymentExpireTime uint64 `json:"vnp_payment_expire_time"`

	PaypalBrandName    string `json:"paypal_brand_name"`
	PaypalReturnURL    string `json:"paypal_return_url"`
	PaypalCancelURL    string `json:"paypal_cancel_url"`
	PaypalClientId     string `json:"paypal_client_id"`
	PaypalClientSecret string `json:"paypal_client_secret"`
	PaypalExpireTime   uint64 `json:"paypal_expire_time"`

	BankPayURL        string `json:"bank_pay_url"`
	MomoPayURL        string `json:"momo_pay_url"`
	TixlabsSecret     string `json:"tixlabs_secret"`
	TixlabsExpireTime uint64 `json:"tixlabs_expire_time"`

	TwoCheckoutMerchantCode      string `json:"two_checkout_merchant_code"`
	TwoCheckoutPayURL            string `json:"two_checkout_pay_url"`
	TwoCheckoutSecretKey         string `json:"two_checkout_secret_key"`
	TwoCheckoutBuyLinkSecretWord string `json:"two_checkout_buy_link_secret_word"`
	TwoCheckoutPaymentExpireTime uint64 `json:"two_checkout_payment_expire_time"`

	PayooUserName     string `json:"payoo_user_name"`
	PayooShopId       string `json:"payoo_shop_id"`
	PayooShopTitle    string `json:"payoo_shop_title"`
	PayooShopDomain   string `json:"payoo_shop_domain"`
	PayooSecretKey    string `json:"payoo_secret_key"`
	PayooShopBackUrl  string `json:"payoo_shop_back_url"`
	PayooNotifyUrl    string `json:"payoo_notify_url"`
	PayooAPIBaseUrl   string `json:"payoo_api_base_url"`
	PayooAPIUserName  string `json:"payoo_api_user_name"`
	PayooAPIPassword  string `json:"payoo_api_password"`
	PayooAPISignature string `json:"payoo_api_signature"`
	PayooExpireTime   uint64 `json:"payoo_expire_time"`

	OnePayAPIBaseUrl        string `json:"one_pay_base_url"`
	OnePayMerchantId        string `json:"one_pay_merchant_id"`
	OnePayAccessCode        string `json:"one_pay_access_code"`
	OnePayHashCode          string `json:"one_pay_hash_code"`
	OnePayUser              string `json:"one_pay_user"`
	OnePayPassword          string `json:"one_pay_password"`
	OnePayCallbackUrl       string `json:"one_pay_callback_url"`
	OnePayReturnURL         string `json:"one_pay_return_url"`
	OnePayReturnURLDeepLink string `json:"one_pay_return_url_deep_link"`
	OnePayAgainLink         string `json:"one_pay_again_link"`
	OnePayPaymentExpireTime uint64 `json:"one_pay_payment_expire_time"`

	OrderExchange           string `json:"order_exchange"`
	OrderPaymentRoute       string `json:"order_payment_route"`
	OrderPaymentStatusRoute string `json:"order_payment_status_route"`

	PaymentExchange     string `json:"payment_exchange"`
	PaymentPendingRoute string `json:"payment_pending_route"`

	WalletExchange               string `json:"wallet_exchange"`
	WalletDepositProcessingRoute string `json:"wallet_deposit_processing_route"`

	PaymentBaseURL string `json:"payment_base_url"`
	StorageBaseURL string `json:"storage_base_url"`

	ExchangeRateAUD       float64 `json:"exchange_rate_aud"`
	ExchangeRateUSD       float64 `json:"exchange_rate_usd"`
	ExchangeRateVND       float64 `json:"exchange_rate_vnd"`
	ExchangeRateBasePoint float64 `json:"exchange_rate_base_point"`
	PointDisplayName      string  `json:"point_display_name"`
	TransactionExpireTime uint64  `json:"transaction_expire_time"`
}

const (
	NotificationExchangeName = "notification_exchange"
	NotificationMulticastKey = "notification.multicast"
)

var exchangeRateCurrencyToBase map[string]float64

func New() (*Schema, error) {
	godotenv.Load()

	v := viper.New()
	v.SetEnvKeyReplacer(strings.NewReplacer(".", "__"))
	v.AutomaticEnv() // set true
	v.SetConfigType("yaml")

	if err := v.ReadConfig(bytes.NewBuffer(defaultConfig)); err != nil {
		return nil, err
	}

	cfg := Schema{}
	err := v.Unmarshal(&cfg, func(c *mapstructure.DecoderConfig) {
		c.TagName = "json"
	})

	if cfg.ExchangeRateAUD == 0 || cfg.ExchangeRateUSD == 0 ||
		cfg.ExchangeRateVND == 0 || cfg.ExchangeRateBasePoint == 0 {
		e := "Invalid EXCHANGE_RATE_ config"
		panic(e)
	}
	exchangeRateCurrencyToBase = make(map[string]float64)
	exchangeRateCurrencyToBase["aud"] = cfg.ExchangeRateAUD
	exchangeRateCurrencyToBase["usd"] = cfg.ExchangeRateUSD
	exchangeRateCurrencyToBase["vnd"] = cfg.ExchangeRateVND

	if cfg.Env != constants.ProductionEnvName {
		c, _ := json.MarshalIndent(cfg, "", "\t")
		fmt.Println("Config:", string(c))
	}

	return &cfg, err
}

func (Schema) PointFromCurrency(amount float64, currencyCode string) (float64, error) {

	toBaseRate, isOk := exchangeRateCurrencyToBase[strings.ToLower(currencyCode)] // check if the currencyCode exists , turn currencyCode into lowercase
	//lấy được tỉ lệ tương ứng ở đơn vị gốc (vnd)

	if !isOk {
		return 0, errors.New(errors.BadRequest, "UNSUPPORTED_CURRENCY")
	}

	// convert currency to point
	payPointAmount := math.Ceil((amount*toBaseRate)*100) / 100
	if payPointAmount <= 0 {
		return 0, errors.New(errors.BadRequest, "INVALID_PAY_AMOUNT")
	}

	return payPointAmount, nil
}
func (Schema) ExchangeCurrency(amount float64, fromCurrency, toCurrency string) (float64, error) {
	fromCurrency = strings.ToLower(fromCurrency)
	toCurrency = strings.ToLower(toCurrency)
	if fromCurrency == toCurrency {
		return amount, nil
	}
	// baseRate = for example: 24000
	fromBaseRate, isOk := exchangeRateCurrencyToBase[fromCurrency]
	// lấy giá trị base trước (float)
	if !isOk {
		return 0, errors.New(errors.BadRequest, "UNSUPPORTED_CURRENCY")
	}
	// lấy tỉ giá tiền cần chuyển đổi
	toRate, isOk := exchangeRateCurrencyToBase[toCurrency]
	if !isOk {
		return 0, errors.New(errors.BadRequest, "UNSUPPORTED_CURRENCY")
	}

	// vnd = 1
	// aus = 16000
	// usd = 24000

	// convert currency to base
	// chuyển đổi về đơn vị base
	amountInBase := amount * fromBaseRate //

	// chuyển đổi về đơn vị to (chia cho to)
	return math.Ceil((amountInBase/toRate)*100) / 100, nil
}
