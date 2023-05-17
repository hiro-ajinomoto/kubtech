import * as grpcWeb from 'grpc-web';

import * as proto_payment_mobile_payment_pb from '../../../proto/payment/mobile/payment_pb';


export class PaymentServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPaymentMethods(
    request: proto_payment_mobile_payment_pb.GetPaymentMethodsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_payment_mobile_payment_pb.GetPaymentMethodsRes) => void
  ): grpcWeb.ClientReadableStream<proto_payment_mobile_payment_pb.GetPaymentMethodsRes>;

}

export class PaymentServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPaymentMethods(
    request: proto_payment_mobile_payment_pb.GetPaymentMethodsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_payment_mobile_payment_pb.GetPaymentMethodsRes>;

}

