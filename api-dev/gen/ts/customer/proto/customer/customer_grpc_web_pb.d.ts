import * as grpcWeb from 'grpc-web';

import * as proto_customer_customer_pb from '../../proto/customer/customer_pb';


export class CustomerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_customer_customer_pb.GetMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_customer_pb.GetMeRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_customer_pb.GetMeRes>;

}

export class CustomerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_customer_customer_pb.GetMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_customer_pb.GetMeRes>;

}

