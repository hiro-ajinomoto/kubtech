import * as grpcWeb from 'grpc-web';

import * as proto_customer_backend_location_pb from '../../../proto/customer/backend/location_pb';


export class CustomerLocationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveCustomerLocation(
    request: proto_customer_backend_location_pb.RetrieveCustomerLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_backend_location_pb.RetrieveCustomerLocationRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_backend_location_pb.RetrieveCustomerLocationRes>;

}

export class CustomerLocationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveCustomerLocation(
    request: proto_customer_backend_location_pb.RetrieveCustomerLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_backend_location_pb.RetrieveCustomerLocationRes>;

}

