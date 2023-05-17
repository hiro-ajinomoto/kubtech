import * as grpcWeb from 'grpc-web';

import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';
import * as proto_customer_mobile_auth_email_pb from '../../../proto/customer/mobile/auth_email_pb';


export class AuthEmailServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendOtpByEmail(
    request: proto_customer_mobile_auth_email_pb.SendOtpByEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_email_pb.SendOtpByEmailRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_email_pb.SendOtpByEmailRes>;

  verifyEmail(
    request: proto_customer_mobile_auth_email_pb.VerifyEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  verifyOtpToResetPasswordByEmail(
    request: proto_customer_mobile_auth_email_pb.VerifyOtpToResetPasswordByEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_email_pb.VerifyOtpToResetPasswordByEmailRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_email_pb.VerifyOtpToResetPasswordByEmailRes>;

  resetPasswordByEmail(
    request: proto_customer_mobile_auth_email_pb.ResetPasswordByEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  sendOtpSecurityByEmail(
    request: proto_customer_mobile_auth_email_pb.SendOtpSecurityByEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_email_pb.SendOtpSecurityByEmailRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_email_pb.SendOtpSecurityByEmailRes>;

  verifyOtpSecurityByEmail(
    request: proto_customer_mobile_auth_email_pb.VerifyOtpSecurityByEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_email_pb.VerifyOtpSecurityByEmailRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_email_pb.VerifyOtpSecurityByEmailRes>;

  sendOtpToChangeEmailByEmail(
    request: proto_customer_mobile_auth_email_pb.SendOtpToChangeEmailByEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_email_pb.SendOtpToChangeEmailByEmailRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_email_pb.SendOtpToChangeEmailByEmailRes>;

  verifyOtpToChangeEmailByEmail(
    request: proto_customer_mobile_auth_email_pb.VerifyOtpToChangeEmailByEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

}

export class AuthEmailServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendOtpByEmail(
    request: proto_customer_mobile_auth_email_pb.SendOtpByEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_email_pb.SendOtpByEmailRes>;

  verifyEmail(
    request: proto_customer_mobile_auth_email_pb.VerifyEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  verifyOtpToResetPasswordByEmail(
    request: proto_customer_mobile_auth_email_pb.VerifyOtpToResetPasswordByEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_email_pb.VerifyOtpToResetPasswordByEmailRes>;

  resetPasswordByEmail(
    request: proto_customer_mobile_auth_email_pb.ResetPasswordByEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  sendOtpSecurityByEmail(
    request: proto_customer_mobile_auth_email_pb.SendOtpSecurityByEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_email_pb.SendOtpSecurityByEmailRes>;

  verifyOtpSecurityByEmail(
    request: proto_customer_mobile_auth_email_pb.VerifyOtpSecurityByEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_email_pb.VerifyOtpSecurityByEmailRes>;

  sendOtpToChangeEmailByEmail(
    request: proto_customer_mobile_auth_email_pb.SendOtpToChangeEmailByEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_email_pb.SendOtpToChangeEmailByEmailRes>;

  verifyOtpToChangeEmailByEmail(
    request: proto_customer_mobile_auth_email_pb.VerifyOtpToChangeEmailByEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

}

