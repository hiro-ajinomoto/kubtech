import * as grpcWeb from 'grpc-web';

import * as proto_otp_base_pb from '../../proto/otp/base_pb';
import * as proto_otp_otp_pb from '../../proto/otp/otp_pb';


export class OTPServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendPhoneOTP(
    request: proto_otp_otp_pb.SendPhoneOTPReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_otp_otp_pb.SendPhoneOTPRes) => void
  ): grpcWeb.ClientReadableStream<proto_otp_otp_pb.SendPhoneOTPRes>;

  sendEmailOTP(
    request: proto_otp_otp_pb.SendEmailOTPReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_otp_otp_pb.SendEmailOTPRes) => void
  ): grpcWeb.ClientReadableStream<proto_otp_otp_pb.SendEmailOTPRes>;

  verifyPhoneOTP(
    request: proto_otp_otp_pb.VerifyPhoneOTPReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_otp_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_otp_base_pb.Empty>;

  verifyEmailOTP(
    request: proto_otp_otp_pb.VerifyEmailOTPReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_otp_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_otp_base_pb.Empty>;

}

export class OTPServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendPhoneOTP(
    request: proto_otp_otp_pb.SendPhoneOTPReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_otp_otp_pb.SendPhoneOTPRes>;

  sendEmailOTP(
    request: proto_otp_otp_pb.SendEmailOTPReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_otp_otp_pb.SendEmailOTPRes>;

  verifyPhoneOTP(
    request: proto_otp_otp_pb.VerifyPhoneOTPReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_otp_base_pb.Empty>;

  verifyEmailOTP(
    request: proto_otp_otp_pb.VerifyEmailOTPReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_otp_base_pb.Empty>;

}

