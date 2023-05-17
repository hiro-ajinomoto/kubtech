import * as grpcWeb from 'grpc-web';

import * as proto_payment_backend_payment_pb from '../../../proto/payment/backend/payment_pb';


export class PaymentServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPaymentMethod(
    request: proto_payment_backend_payment_pb.CreatePaymentMethodReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_payment_backend_payment_pb.CreatePaymentMethodRes) => void
  ): grpcWeb.ClientReadableStream<proto_payment_backend_payment_pb.CreatePaymentMethodRes>;

  getPaymentMethodById(
    request: proto_payment_backend_payment_pb.GetPaymentMethodByIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_payment_backend_payment_pb.GetPaymentMethodByIdRes) => void
  ): grpcWeb.ClientReadableStream<proto_payment_backend_payment_pb.GetPaymentMethodByIdRes>;

  getPaymentMethodByCode(
    request: proto_payment_backend_payment_pb.GetPaymentMethodByCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_payment_backend_payment_pb.GetPaymentMethodByCodeRes) => void
  ): grpcWeb.ClientReadableStream<proto_payment_backend_payment_pb.GetPaymentMethodByCodeRes>;

}

export class PaymentServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPaymentMethod(
    request: proto_payment_backend_payment_pb.CreatePaymentMethodReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_payment_backend_payment_pb.CreatePaymentMethodRes>;

  getPaymentMethodById(
    request: proto_payment_backend_payment_pb.GetPaymentMethodByIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_payment_backend_payment_pb.GetPaymentMethodByIdRes>;

  getPaymentMethodByCode(
    request: proto_payment_backend_payment_pb.GetPaymentMethodByCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_payment_backend_payment_pb.GetPaymentMethodByCodeRes>;

}

