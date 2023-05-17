import * as grpcWeb from 'grpc-web';

import * as proto_customer_backend_base_pb from '../../../proto/customer/backend/base_pb';
import * as proto_customer_backend_customer_pb from '../../../proto/customer/backend/customer_pb';


export class CustomerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamCustomers(
    request: proto_customer_backend_customer_pb.StreamCustomersReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_backend_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_backend_base_pb.Empty>;

  pushNotificationAllCustomers(
    request: proto_customer_backend_customer_pb.PushNotificationAllCustomersReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_backend_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_backend_base_pb.Empty>;

  getUserById(
    request: proto_customer_backend_customer_pb.GetUserByIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_backend_customer_pb.GetUserByIdRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_backend_customer_pb.GetUserByIdRes>;

  getUser(
    request: proto_customer_backend_customer_pb.GetUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_backend_customer_pb.GetUserRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_backend_customer_pb.GetUserRes>;

}

export class CustomerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamCustomers(
    request: proto_customer_backend_customer_pb.StreamCustomersReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_backend_base_pb.Empty>;

  pushNotificationAllCustomers(
    request: proto_customer_backend_customer_pb.PushNotificationAllCustomersReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_backend_base_pb.Empty>;

  getUserById(
    request: proto_customer_backend_customer_pb.GetUserByIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_backend_customer_pb.GetUserByIdRes>;

  getUser(
    request: proto_customer_backend_customer_pb.GetUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_backend_customer_pb.GetUserRes>;

}

