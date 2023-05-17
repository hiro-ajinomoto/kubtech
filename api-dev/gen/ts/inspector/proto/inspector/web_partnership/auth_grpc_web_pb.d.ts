import * as grpcWeb from 'grpc-web';

import * as proto_inspector_web_partnership_base_pb from '../../../proto/inspector/web_partnership/base_pb';
import * as proto_inspector_web_partnership_auth_pb from '../../../proto/inspector/web_partnership/auth_pb';


export class AuthServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: proto_inspector_web_partnership_auth_pb.LoginReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_web_partnership_auth_pb.LoginRes) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_web_partnership_auth_pb.LoginRes>;

  sendOtpToResetPassword(
    request: proto_inspector_web_partnership_auth_pb.SendOtpToResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_web_partnership_auth_pb.SendOtpToResetPasswordRes) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_web_partnership_auth_pb.SendOtpToResetPasswordRes>;

  verifyOtpToResetPassword(
    request: proto_inspector_web_partnership_auth_pb.VerifyOtpToResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_web_partnership_auth_pb.VerifyOtpToResetPasswordRes) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_web_partnership_auth_pb.VerifyOtpToResetPasswordRes>;

  resetPassword(
    request: proto_inspector_web_partnership_auth_pb.ResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_web_partnership_base_pb.Empty>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: proto_inspector_web_partnership_auth_pb.LoginReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_web_partnership_auth_pb.LoginRes>;

  sendOtpToResetPassword(
    request: proto_inspector_web_partnership_auth_pb.SendOtpToResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_web_partnership_auth_pb.SendOtpToResetPasswordRes>;

  verifyOtpToResetPassword(
    request: proto_inspector_web_partnership_auth_pb.VerifyOtpToResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_web_partnership_auth_pb.VerifyOtpToResetPasswordRes>;

  resetPassword(
    request: proto_inspector_web_partnership_auth_pb.ResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_web_partnership_base_pb.Empty>;

}

