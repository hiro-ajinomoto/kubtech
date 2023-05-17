import * as grpcWeb from 'grpc-web';

import * as proto_admin_web_partnership_auth_pb from '../../../proto/admin/web_partnership/auth_pb';
import * as proto_admin_web_partnership_base_pb from '../../../proto/admin/web_partnership/base_pb';


export class AuthServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createAdmin(
    request: proto_admin_web_partnership_auth_pb.CreateAdminReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_admin_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_admin_web_partnership_base_pb.Empty>;

  login(
    request: proto_admin_web_partnership_auth_pb.LoginReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_admin_web_partnership_auth_pb.LoginRes) => void
  ): grpcWeb.ClientReadableStream<proto_admin_web_partnership_auth_pb.LoginRes>;

  changePassword(
    request: proto_admin_web_partnership_auth_pb.ChangePasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_admin_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_admin_web_partnership_base_pb.Empty>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createAdmin(
    request: proto_admin_web_partnership_auth_pb.CreateAdminReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_admin_web_partnership_base_pb.Empty>;

  login(
    request: proto_admin_web_partnership_auth_pb.LoginReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_admin_web_partnership_auth_pb.LoginRes>;

  changePassword(
    request: proto_admin_web_partnership_auth_pb.ChangePasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_admin_web_partnership_base_pb.Empty>;

}

