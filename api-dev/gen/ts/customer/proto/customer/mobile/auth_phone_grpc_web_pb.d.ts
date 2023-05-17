import * as grpcWeb from 'grpc-web';

import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';
import * as proto_customer_mobile_auth_phone_pb from '../../../proto/customer/mobile/auth_phone_pb';


export class AuthPhoneServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendOtpByPhone(
    request: proto_customer_mobile_auth_phone_pb.SendOtpByPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_phone_pb.SendOtpByPhoneRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_phone_pb.SendOtpByPhoneRes>;

  verifyPhoneNumber(
    request: proto_customer_mobile_auth_phone_pb.VerifyPhoneNumberReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  verifyOtpToResetPasswordByPhone(
    request: proto_customer_mobile_auth_phone_pb.VerifyOtpToResetPasswordByPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_phone_pb.VerifyOtpToResetPasswordByPhoneRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_phone_pb.VerifyOtpToResetPasswordByPhoneRes>;

  resetPasswordByPhone(
    request: proto_customer_mobile_auth_phone_pb.ResetPasswordByPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  sendOtpSecurityByPhone(
    request: proto_customer_mobile_auth_phone_pb.SendOtpSecurityByPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_phone_pb.SendOtpSecurityByPhoneRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_phone_pb.SendOtpSecurityByPhoneRes>;

  verifyOtpSecurityByPhone(
    request: proto_customer_mobile_auth_phone_pb.VerifyOtpSecurityByPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_phone_pb.VerifyOtpSecurityByPhoneRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_phone_pb.VerifyOtpSecurityByPhoneRes>;

  sendOtpToChangePhoneByPhone(
    request: proto_customer_mobile_auth_phone_pb.SendOtpToChangePhoneByPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_phone_pb.SendOtpToChangePhoneByPhoneRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_phone_pb.SendOtpToChangePhoneByPhoneRes>;

  verifyOtpToChangePhoneByPhone(
    request: proto_customer_mobile_auth_phone_pb.VerifyOtpToChangePhoneByPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

}

export class AuthPhoneServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendOtpByPhone(
    request: proto_customer_mobile_auth_phone_pb.SendOtpByPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_phone_pb.SendOtpByPhoneRes>;

  verifyPhoneNumber(
    request: proto_customer_mobile_auth_phone_pb.VerifyPhoneNumberReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  verifyOtpToResetPasswordByPhone(
    request: proto_customer_mobile_auth_phone_pb.VerifyOtpToResetPasswordByPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_phone_pb.VerifyOtpToResetPasswordByPhoneRes>;

  resetPasswordByPhone(
    request: proto_customer_mobile_auth_phone_pb.ResetPasswordByPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  sendOtpSecurityByPhone(
    request: proto_customer_mobile_auth_phone_pb.SendOtpSecurityByPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_phone_pb.SendOtpSecurityByPhoneRes>;

  verifyOtpSecurityByPhone(
    request: proto_customer_mobile_auth_phone_pb.VerifyOtpSecurityByPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_phone_pb.VerifyOtpSecurityByPhoneRes>;

  sendOtpToChangePhoneByPhone(
    request: proto_customer_mobile_auth_phone_pb.SendOtpToChangePhoneByPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_phone_pb.SendOtpToChangePhoneByPhoneRes>;

  verifyOtpToChangePhoneByPhone(
    request: proto_customer_mobile_auth_phone_pb.VerifyOtpToChangePhoneByPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

}

