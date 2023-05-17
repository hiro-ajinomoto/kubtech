package config

var defaultConfig = []byte(`
env: local
port: 3003
http_port: 8000

auth_signing_key: auth-key
public_paths:
- /payment/vnpay/ipn
- /payment/vnpay/refund
- /payment/vnpay/return
- /payment/paypal/return
- /payment/tixlabs/ipn
- /payment/2checkout/ipn
- /payment/payoo/ipn
- /payment/onepay/ipn
- /payment/onepay/return

internal_methods:
- /payment.backend.PaymentService/CreatePaymentMethod
- /payment.backend.PaymentService/GetPaymentMethodById
- /payment.backend.PaymentService/GetPaymentMethodByCode
- /wallet.backend.WalletService/Pay
- /wallet.backend.WalletService/GetWalletBalance
- /wallet.backend.TransactionService/ExpireTransactions

internal_secret_token: very-secret

db_write_url: mongodb://localhost:27017
db_read_url: mongodb://localhost:27017
db_name: my-payment-db
db_wallet_name: peahoki-user

rabbitmq_url: amqp://localhost:5672
rabbit_declaration_file: ./pkg/config/declaration.json

rabbitmq_wallet_url: amqp://localhost:5672
rabbit_wallet_declaration_file: ./pkg/config/declaration_wallet.json

order_exchange: order_exchange
order_payment_route: order.payment
order_payment_status_route: order.payment.status

payment_exchange: payment_exchange
payment_pending_route: payment.pending

wallet_exchange: wallet_exchange
wallet_deposit_processing_route: wallet.top_up

vnp_pay_url: https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
vnp_merchant_url: https://sandbox.vnpayment.vn/merchant_webapi/merchant.html
vnp_return_url: http://localhost/return
vnp_version: 2.1.0
vnp_code: TIXLAB01
vnp_code_for_intcard: TIXLAB01
vnp_key: EYQMOCEPMQKUEQNTTTXQJZDNPURTPCGN
vnp_payment_expire_time: 900

paypal_brand_name: Tixlabs Sandbox
paypal_return_url: https://example.com/return
paypal_cancel_url: https://example.com/return?cancel=true
paypal_client_id: AQA-jooT87R-lsCZBsXq719-tdaWOfVjfckxYAJ6W7KRLm1_L2CQudS3Iok_Vo8KwDlvzEz0CLflS7w9
paypal_client_secret: EBsms0dPiULPuZn856PZwOhA7dFwGnBpScdD8-xzESbRNVXtAhB_RDgmyGfxKRYMOrvX2bxkXmgpRrSI
paypal_expire_time: 900

bank_pay_url: https://storage-dev.tixlabs.io/sites/bank-transfer/index.html
momo_pay_url: https://storage-dev.tixlabs.io/sites/momo/index.html
tixlabs_secret: xxxxxxxxxxxxxx
tixlabs_expire_time: 900

two_checkout_pay_url: https://secure.2checkout.com/checkout/buy/
two_checkout_secret_key: xxxxxxxxxx
two_checkout_buy_link_secret_word: xxxxxxxxxx
two_checkout_merchant_code: xxxxxxxxxx
two_checkout_payment_expire_time: 900

payoo_user_name: tixlabs
payoo_shop_id: 123
payoo_shop_title: tixlabs
payoo_shop_domain: http://localhost
payoo_secret_key: xxxxxxxxxx
payoo_shop_back_url: http://localhost
payoo_notify_url: http://localhost
payoo_api_base_url: https://bizsandbox.payoo.com.vn
payoo_api_user_name: tixlabs
payoo_api_password: xxxxxxxxxx
payoo_api_signature: xxxxxxxxxx
payoo_expire_time: 900

one_pay_base_url: https://mtf.onepay.vn
one_pay_merchant_id: TESTONEPAY34
one_pay_access_code: 6BEB2566
one_pay_hash_code: 6D0870CDE5F24F34F3915FB0045120D6
one_pay_user: op01
one_pay_callback_url: https://api-dev.tixlabs.io/payment/onepay/ipn
one_pay_password: op123456
one_pay_return_url: http://localhost/return
one_pay_return_url_deep_link: merchantthuyngacheme://onepay
one_pay_again_link: http://localhost/
one_pay_payment_expire_time: 900
payment_base_url: http://payment-service:8000
point_display_name: Point
transaction_expire_time: 900
storage_base_url: http://storage-service:8000

exchange_rate_vnd: 16000
exchange_rate_usd: 24000
exchange_rate_aud: 1
exchange_rate_base_point: 1
`)
