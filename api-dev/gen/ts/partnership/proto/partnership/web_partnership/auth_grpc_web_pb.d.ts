import * as grpcWeb from 'grpc-web';

import * as proto_partnership_web_partnership_base_pb from '../../../proto/partnership/web_partnership/base_pb';
import * as proto_partnership_web_partnership_auth_pb from '../../../proto/partnership/web_partnership/auth_pb';


export class AuthServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: proto_partnership_web_partnership_auth_pb.LoginReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_auth_pb.LoginRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_auth_pb.LoginRes>;

  logout(
    request: proto_partnership_web_partnership_auth_pb.LogoutReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_base_pb.Empty>;

  refreshToken(
    request: proto_partnership_web_partnership_auth_pb.RefreshTokenReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_auth_pb.RefreshTokenRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_auth_pb.RefreshTokenRes>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: proto_partnership_web_partnership_auth_pb.LoginReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_auth_pb.LoginRes>;

  logout(
    request: proto_partnership_web_partnership_auth_pb.LogoutReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_base_pb.Empty>;

  refreshToken(
    request: proto_partnership_web_partnership_auth_pb.RefreshTokenReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_auth_pb.RefreshTokenRes>;

}

