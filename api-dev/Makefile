GO_GEN_CUSTOMER=./gen/go/customer/
TS_GEN_CUSTOMER=./gen/ts/customer/

GO_GEN_INSPECTOR=./gen/go/inspector/
TS_GEN_INSPECTOR=./gen/ts/inspector/

GO_GEN_ADMIN=./gen/go/admin/
TS_GEN_ADMIN=./gen/ts/admin/

GO_GEN_PARTNERSHIP=./gen/go/partnership/
TS_GEN_PARTNERSHIP=./gen/ts/partnership/

GO_GEN_OTP=./gen/go/otp/
TS_GEN_OTP=./gen/ts/otp/

GO_GEN_NOTIFICATION=./gen/go/notification/
TS_GEN_NOTIFICATION=./gen/ts/notification/

GO_GEN_ORDER=./gen/go/order/
TS_GEN_ORDER=./gen/ts/order/

GO_GEN_SEARCH=./gen/go/search/
TS_GEN_SEARCH=./gen/ts/search/

GO_GEN_TICKET=./gen/go/ticket/
TS_GEN_TICKET=./gen/ts/ticket/

GO_GEN_STREAMING=./gen/go/streaming/
TS_GEN_STREAMING=./gen/ts/streaming/

GO_GEN_PRODUCT=./gen/go/product/
TS_GEN_PRODUCT=./gen/ts/product/

GO_GEN_PARTNER=./gen/go/partner/
TS_GEN_PARTNER=./gen/ts/partner/

GO_GEN_AUTHORIZATION=./gen/go/authorization/
TS_GEN_AUTHORIZATION=./gen/ts/authorization/

GO_GEN_WALLET=./gen/go/wallet/
TS_GEN_WALLET=./gen/ts/wallet/

GO_GEN_PAYMENT=./gen/go/payment/
TS_GEN_PAYMENT=./gen/ts/payment/

GO_GEN_BASE=./gen/go/base/
TS_GEN_BASE=./gen/ts/


BUILD_TARGETs =go ts
BUILD_SERVICEs=base customer inspector admin partnership notification order search ticket streaming product partner authorization wallet payment otp event media


GO_OUT=./gen/go/
TS_OUT=./gen/ts/

define prepare_structure
	@for target in ${BUILD_TARGETs}; do mkdir -p ./gen/$$target/$@ ; done
    mkdir -p ./gen/$(1)/$(2)
endef

build: clean customer inspector admin partnership notification order search ticket streaming product partner authorization wallet payment otp event media base

.PHONY: clean
link:
	mkdir -p tmp/gitlab.bcasia.io/thuynga/apps/api/gen
	ln -snf $(shell pwd)/gen/go tmp/gitlab.bcasia.io/thuynga/apps/api/gen/go
.PHONY: clean
clean:
	@for target in ${BUILD_TARGETs};  \
	do                                \
		rm -fr ./gen/$$target/* ;          \
		for service in ${BUILD_SERVICEs};  \
		do                                 \
			mkdir -p ./gen/$$target/$$service ; \
		done                               \
	done
	mkdir -p tmp/gitlab.bcasia.io/thuynga/apps/api/gen
	ln -snf $(shell pwd)/gen/go tmp/gitlab.bcasia.io/thuynga/apps/api/gen/go


.PHONY: customer
customer:
	@for dir in ${GO_GEN_CUSTOMER} ${TS_GEN_CUSTOMER}; do rm -rf $$dir/* ; done

	protoc --go_out ${GO_GEN_CUSTOMER} --go_opt=paths=import --go-grpc_out ${GO_GEN_CUSTOMER} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_CUSTOMER} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_CUSTOMER} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/customer/**/*.proto

	protoc --go_out ${GO_GEN_CUSTOMER} --go_opt=paths=import --go-grpc_out ${GO_GEN_CUSTOMER} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_CUSTOMER} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_CUSTOMER} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/customer/*.proto

.PHONY: inspector
inspector:
	protoc --go_out ${GO_GEN_INSPECTOR} --go_opt=paths=import --go-grpc_out ${GO_GEN_INSPECTOR} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_INSPECTOR} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_INSPECTOR} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/inspector/**/*.proto

	ls ${GO_GEN_INSPECTOR}**/*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

.PHONY: admin
admin:
	protoc --go_out ${GO_GEN_ADMIN} --go_opt=paths=import --go-grpc_out ${GO_GEN_ADMIN} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_ADMIN} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_ADMIN} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/admin/web_partnership/*.proto

	ls ${GO_GEN_ADMIN}**/*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

.PHONY: partnership
partnership:
	protoc --go_out ${GO_GEN_PARTNERSHIP} --go_opt=paths=import --go-grpc_out ${GO_GEN_PARTNERSHIP} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_PARTNERSHIP} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_PARTNERSHIP} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/partnership/*.proto

	protoc --go_out ${GO_GEN_PARTNERSHIP} --go_opt=paths=import --go-grpc_out ${GO_GEN_PARTNERSHIP} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_PARTNERSHIP} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_PARTNERSHIP} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/partnership/**/*.proto

	ls ${GO_GEN_PARTNERSHIP}**/*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

.PHONY: otp
otp:
	protoc --go_out ${GO_GEN_OTP} --go_opt=paths=import --go-grpc_out ${GO_GEN_OTP} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_OTP} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_OTP} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/otp/*.proto

	ls ${GO_GEN_OTP}*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

.PHONY: notification
notification:
	protoc --go_out ${GO_GEN_NOTIFICATION} --go_opt=paths=import --go-grpc_out ${GO_GEN_NOTIFICATION} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_NOTIFICATION} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_NOTIFICATION} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/notification/**/*.proto

	ls ${GO_GEN_NOTIFICATION}*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

.PHONY: order
order:
	protoc -Iproto  --go_out ./tmp --go_opt=paths=import --go-grpc_out ./tmp --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_OUT} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_OUT} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/order/**/*.proto

.PHONY: search
search:
	protoc --go_out ${GO_GEN_SEARCH} --go_opt=paths=import --go-grpc_out ${GO_GEN_SEARCH} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_SEARCH} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_SEARCH} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/search/**/*.proto

	ls ${GO_GEN_SEARCH}**/*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

TICKET=ticket
.PHONY: ticket
ticket:
	protoc -Iproto --go_out ${GO_OUT}${TICKET}/ \
	--go-grpc_out ${GO_OUT}${TICKET}/  \
	--go-grpc_opt=paths=import --go_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_OUT} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_OUT} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/${TICKET}/**/*.proto

	# --ts_out=./gen/ts2/ \

.PHONY: streaming
streaming:
	protoc --go_out ${GO_GEN_STREAMING} --go_opt=paths=import --go-grpc_out ${GO_GEN_STREAMING} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_STREAMING} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_STREAMING} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/streaming/*.proto

	ls ${GO_GEN_STREAMING}*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

.PHONY: product
PRODUCT=product
product:
	protoc -Iproto  --go_out ./tmp --go_opt=paths=import --go-grpc_out ./tmp --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_OUT} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_OUT} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/product/*.proto proto/product/**/*.proto

.PHONY: partner
partner:
	protoc --go_out ${GO_GEN_PARTNER} --go_opt=paths=import --go-grpc_out ${GO_GEN_PARTNER} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_PARTNER} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_PARTNER} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/partner/**/*.proto

.PHONY: authorization
authorization:
	protoc --go_out ${GO_GEN_AUTHORIZATION} --go_opt=paths=import --go-grpc_out ${GO_GEN_AUTHORIZATION} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_AUTHORIZATION} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_AUTHORIZATION} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/authorization/*.proto

	ls ${GO_GEN_AUTHORIZATION}*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

.PHONY: wallet
wallet:
	protoc --go_out ${GO_GEN_WALLET} --go_opt=paths=import --go-grpc_out ${GO_GEN_WALLET} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_WALLET} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_WALLET} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/wallet/**/*.proto

.PHONY: payment
payment:
	protoc --go_out ${GO_GEN_PAYMENT} --go_opt=paths=import --go-grpc_out ${GO_GEN_PAYMENT} --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_GEN_PAYMENT} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_GEN_PAYMENT} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/payment/**/*.proto

# patch files
	ls ${GO_GEN_PAYMENT}**/*.pb.go | xargs -n1 -IX bash -c "sed -e '/bool/ s/,omitempty//' X > X.tmp && mv X{.tmp,}"

.PHONY: base
base:
	@for dir in ${GO_GEN_BASE} ${TS_OUT}base; do rm -rf $$dir/* ; done
	protoc -Iproto/ --go_out ./tmp --go_opt=paths=import --go-grpc_out ./tmp --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_OUT} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_OUT} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/base/*.proto

EVENT=event
.PHONY: event
event:
	protoc -Iproto  --go_out ./tmp --go_opt=paths=import --go-grpc_out ./tmp --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_OUT} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_OUT} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/${EVENT}/**/*.proto

.PHONY: media
media:
	protoc -Iproto  --go_out ./tmp --go_opt=paths=import --go-grpc_out ./tmp --go-grpc_opt=paths=import \
	--js_out=import_style=commonjs,binary:${TS_OUT} \
	--grpc-web_out=import_style=commonjs+dts,mode=grpcweb:${TS_OUT} \
	--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
	proto/media/*.proto proto/media/**/*.proto