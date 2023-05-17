import * as grpcWeb from 'grpc-web';

import * as proto_partnership_web_partnership_partnership_user_pb from '../../../proto/partnership/web_partnership/partnership_user_pb';
import * as proto_partnership_web_partnership_base_pb from '../../../proto/partnership/web_partnership/base_pb';


export class PartnershipUserServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createUser(
    request: proto_partnership_web_partnership_partnership_user_pb.CreateUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_partnership_user_pb.CreateUserRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_partnership_user_pb.CreateUserRes>;

  getMe(
    request: proto_partnership_web_partnership_partnership_user_pb.GetMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_partnership_user_pb.GetMeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_partnership_user_pb.GetMeRes>;

  updateMe(
    request: proto_partnership_web_partnership_partnership_user_pb.UpdateMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_base_pb.Empty>;

  changePassword(
    request: proto_partnership_web_partnership_partnership_user_pb.ChangePasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_base_pb.Empty>;

  getBasicUsers(
    request: proto_partnership_web_partnership_partnership_user_pb.GetBasicUsersReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_partnership_user_pb.GetBasicUsersRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_partnership_user_pb.GetBasicUsersRes>;

  sendOtpToResetPassword(
    request: proto_partnership_web_partnership_partnership_user_pb.SendOtpToResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_partnership_user_pb.SendOtpToResetPasswordRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_partnership_user_pb.SendOtpToResetPasswordRes>;

  verifyOtpToResetPassword(
    request: proto_partnership_web_partnership_partnership_user_pb.VerifyOtpToResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_partnership_user_pb.VerifyOtpToResetPasswordRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_partnership_user_pb.VerifyOtpToResetPasswordRes>;

  resetPassword(
    request: proto_partnership_web_partnership_partnership_user_pb.ResetPasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_base_pb.Empty>;

  updateUser(
    request: proto_partnership_web_partnership_partnership_user_pb.UpdateUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_base_pb.Empty>;

  deleteUser(
    request: proto_partnership_web_partnership_partnership_user_pb.DeleteUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_base_pb.Empty>;

  disableUser(
    request: proto_partnership_web_partnership_partnership_user_pb.DisableUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_base_pb.Empty>;

}

export class PartnershipUserServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createUser(
    request: proto_partnership_web_partnership_partnership_user_pb.CreateUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_partnership_user_pb.CreateUserRes>;

  getMe(
    request: proto_partnership_web_partnership_partnership_user_pb.GetMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_partnership_user_pb.GetMeRes>;

  updateMe(
    request: proto_partnership_web_partnership_partnership_user_pb.UpdateMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_base_pb.Empty>;

  changePassword(
    request: proto_partnership_web_partnership_partnership_user_pb.ChangePasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_base_pb.Empty>;

  getBasicUsers(
    request: proto_partnership_web_partnership_partnership_user_pb.GetBasicUsersReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_partnership_user_pb.GetBasicUsersRes>;

  sendOtpToResetPassword(
    request: proto_partnership_web_partnership_partnership_user_pb.SendOtpToResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_partnership_user_pb.SendOtpToResetPasswordRes>;

  verifyOtpToResetPassword(
    request: proto_partnership_web_partnership_partnership_user_pb.VerifyOtpToResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_partnership_user_pb.VerifyOtpToResetPasswordRes>;

  resetPassword(
    request: proto_partnership_web_partnership_partnership_user_pb.ResetPasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_base_pb.Empty>;

  updateUser(
    request: proto_partnership_web_partnership_partnership_user_pb.UpdateUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_base_pb.Empty>;

  deleteUser(
    request: proto_partnership_web_partnership_partnership_user_pb.DeleteUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_base_pb.Empty>;

  disableUser(
    request: proto_partnership_web_partnership_partnership_user_pb.DisableUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_base_pb.Empty>;

}

