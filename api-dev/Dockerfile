FROM golang:1.20.3 AS builder
WORKDIR /app

RUN apt update
RUN apt install -y make nodejs npm unzip

RUN curl -LO https://github.com/protocolbuffers/protobuf/releases/download/v3.20.3/protoc-3.20.3-linux-x86_64.zip
RUN unzip protoc-3.20.3-linux-x86_64.zip -d ./proto
RUN chmod 755 -R ./proto/bin
ENV BASE=/usr
RUN cp ./proto/bin/protoc ${BASE}/bin/
RUN cp -R ./proto/include/* ${BASE}/include/

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
RUN npm i -g protoc-gen-grpc-web

COPY ./go.mod ./go.mod
RUN go mod tidy

COPY ./package.json ./package.json
RUN npm install

COPY ./Makefile  ./Makefile
COPY ./proto ./proto