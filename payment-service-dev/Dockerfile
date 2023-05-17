# Accept the Go version for the image to be set as a build argument.
ARG GO_VERSION=1.18.5

# Execute the build using an alpine linux environment so that it will execute properly in the final environment
FROM golang:${GO_VERSION}-alpine AS builder

ARG CI_JOB_TOKEN

ENV CI_JOB_TOKEN=$CI_JOB_TOKEN
ENV GO111MODULE=on
ENV GOPRIVATE=gitlab.bcasia.io

# git is required to fetch go dependencies
RUN apk add --no-cache ca-certificates git

# Install grpc_health_probe binary
RUN GRPC_HEALTH_PROBE_VERSION=v0.4.14 && \
    wget -qO /grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
    chmod +x /grpc_health_probe

# Create the user and group files that will be used in the running container to
# run the process as an unprivileged user.
RUN mkdir /user && \
    echo 'nobody:x:65534:65534:nobody:/:' > /user/passwd && \
    echo 'nobody:x:65534:' > /user/group

# Set a directory to contain the go app to be compiled (this directory will work for go apps making use of go modules as long as go 1.13+ is used)
RUN mkdir -p /go/src/bcasia/payment
# For pulling private repo.
RUN echo "machine gitlab.bcasia.io login gitlab-ci-token password ${CI_JOB_TOKEN}" > ~/.netrc

WORKDIR /go/src/bcasia/payment
COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY . .

# Build the executable to /app. Mark the build as statically linked.
RUN CGO_ENABLED=0 go build \
    -installsuffix 'static' \
    -o /payment .

# Final stage: the running container.
FROM alpine AS final

# Copy CA cert
# COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

# Import the user and group files from the first stage.
COPY --from=builder /user/group /user/passwd /etc/

COPY --from=builder /go/src/bcasia/payment/pkg/config/*.json /pkg/config/

# Import the compiled executable from the first stage.
COPY --from=builder /payment /payment
COPY --from=builder /grpc_health_probe /grpc_health_probe

# Perform any further action as an unprivileged user.
USER nobody:nobody

# Run the compiled binary.
ENTRYPOINT ["/payment"]
