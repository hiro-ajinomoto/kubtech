import * as grpcWeb from 'grpc-web';

import * as proto_partnership_mobile_partnership_user_pb from '../../../proto/partnership/mobile/partnership_user_pb';
import * as proto_partnership_mobile_base_pb from '../../../proto/partnership/mobile/base_pb';


export class PartnershipUserServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_partnership_mobile_partnership_user_pb.GetMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_mobile_partnership_user_pb.GetMeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_mobile_partnership_user_pb.GetMeRes>;

  updateMe(
    request: proto_partnership_mobile_partnership_user_pb.UpdateMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_mobile_base_pb.Empty>;

  changePassword(
    request: proto_partnership_mobile_partnership_user_pb.ChangePasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_mobile_base_pb.Empty>;

  sendOtpToResetPassword(
    request: proto_partnership_mobile_partnership_user_pb.SendOtpToResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_mobile_partnership_user_pb.SendOtpToResetPasswordRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_mobile_partnership_user_pb.SendOtpToResetPasswordRes>;

  verifyOtpToResetPassword(
    request: proto_partnership_mobile_partnership_user_pb.VerifyOtpToResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_mobile_partnership_user_pb.VerifyOtpToResetPasswordRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_mobile_partnership_user_pb.VerifyOtpToResetPasswordRes>;

  resetPassword(
    request: proto_partnership_mobile_partnership_user_pb.ResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_mobile_base_pb.Empty>;

}

export class PartnershipUserServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_partnership_mobile_partnership_user_pb.GetMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_mobile_partnership_user_pb.GetMeRes>;

  updateMe(
    request: proto_partnership_mobile_partnership_user_pb.UpdateMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_mobile_base_pb.Empty>;

  changePassword(
    request: proto_partnership_mobile_partnership_user_pb.ChangePasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_mobile_base_pb.Empty>;

  sendOtpToResetPassword(
    request: proto_partnership_mobile_partnership_user_pb.SendOtpToResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_mobile_partnership_user_pb.SendOtpToResetPasswordRes>;

  verifyOtpToResetPassword(
    request: proto_partnership_mobile_partnership_user_pb.VerifyOtpToResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_mobile_partnership_user_pb.VerifyOtpToResetPasswordRes>;

  resetPassword(
    request: proto_partnership_mobile_partnership_user_pb.ResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_mobile_base_pb.Empty>;

}

