import * as grpcWeb from 'grpc-web';

import * as proto_customer_base_pb from '../../proto/customer/base_pb';
import * as proto_customer_auth_pb from '../../proto/customer/auth_pb';


export class AuthServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: proto_customer_auth_pb.LoginReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_auth_pb.LoginRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_auth_pb.LoginRes>;

  logout(
    request: proto_customer_base_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_base_pb.Empty>;

  loginByQRCode(
    request: proto_customer_auth_pb.LoginByQRCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_auth_pb.LoginByQRCodeRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_auth_pb.LoginByQRCodeRes>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: proto_customer_auth_pb.LoginReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_auth_pb.LoginRes>;

  logout(
    request: proto_customer_base_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_base_pb.Empty>;

  loginByQRCode(
    request: proto_customer_auth_pb.LoginByQRCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_auth_pb.LoginByQRCodeRes>;

}

