import * as grpcWeb from 'grpc-web';

import * as proto_customer_mobile_auth_pb from '../../../proto/customer/mobile/auth_pb';
import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';


export class AuthServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  register(
    request: proto_customer_mobile_auth_pb.RegisterReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_pb.RegisterRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_pb.RegisterRes>;

  login(
    request: proto_customer_mobile_auth_pb.LoginReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_pb.LoginRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_pb.LoginRes>;

  socialLogin(
    request: proto_customer_mobile_auth_pb.SocialLoginReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_pb.LoginRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_pb.LoginRes>;

  refreshToken(
    request: proto_customer_mobile_auth_pb.RefreshTokenReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_pb.RefreshTokenRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_pb.RefreshTokenRes>;

  linkSocialAccount(
    request: proto_customer_mobile_auth_pb.LinkSocialAccountReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_pb.LinkSocialAccountRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_pb.LinkSocialAccountRes>;

  logout(
    request: proto_customer_mobile_base_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  logoutAllDevice(
    request: proto_customer_mobile_base_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  verifySocialToken(
    request: proto_customer_mobile_auth_pb.VerifySocialTokenReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  scanQRCode(
    request: proto_customer_mobile_auth_pb.ScanQRCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  loginByQRCode(
    request: proto_customer_mobile_auth_pb.LoginByQRCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_pb.LoginByQRCodeRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_pb.LoginByQRCodeRes>;

  verifyPasswordSecurity(
    request: proto_customer_mobile_auth_pb.VerifyPasswordSecurityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_pb.VerifyPasswordSecurityRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_pb.VerifyPasswordSecurityRes>;

  checkAccountHavePhoneNumber(
    request: proto_customer_mobile_auth_pb.CheckAccountHavePhoneNumberReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_auth_pb.CheckAccountHavePhoneNumberRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_auth_pb.CheckAccountHavePhoneNumberRes>;

  updateImportantInformation(
    request: proto_customer_mobile_auth_pb.UpdateImportantInformationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  register(
    request: proto_customer_mobile_auth_pb.RegisterReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_pb.RegisterRes>;

  login(
    request: proto_customer_mobile_auth_pb.LoginReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_pb.LoginRes>;

  socialLogin(
    request: proto_customer_mobile_auth_pb.SocialLoginReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_pb.LoginRes>;

  refreshToken(
    request: proto_customer_mobile_auth_pb.RefreshTokenReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_pb.RefreshTokenRes>;

  linkSocialAccount(
    request: proto_customer_mobile_auth_pb.LinkSocialAccountReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_pb.LinkSocialAccountRes>;

  logout(
    request: proto_customer_mobile_base_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  logoutAllDevice(
    request: proto_customer_mobile_base_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  verifySocialToken(
    request: proto_customer_mobile_auth_pb.VerifySocialTokenReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  scanQRCode(
    request: proto_customer_mobile_auth_pb.ScanQRCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  loginByQRCode(
    request: proto_customer_mobile_auth_pb.LoginByQRCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_pb.LoginByQRCodeRes>;

  verifyPasswordSecurity(
    request: proto_customer_mobile_auth_pb.VerifyPasswordSecurityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_pb.VerifyPasswordSecurityRes>;

  checkAccountHavePhoneNumber(
    request: proto_customer_mobile_auth_pb.CheckAccountHavePhoneNumberReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_auth_pb.CheckAccountHavePhoneNumberRes>;

  updateImportantInformation(
    request: proto_customer_mobile_auth_pb.UpdateImportantInformationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

}

