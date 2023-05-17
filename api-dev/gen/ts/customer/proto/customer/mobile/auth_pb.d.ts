import * as jspb from 'google-protobuf'

import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';
import * as proto_customer_mobile_customer_pb from '../../../proto/customer/mobile/customer_pb';


export class RegisterReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterReq;

  getPassword(): string;
  setPassword(value: string): RegisterReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): RegisterReq;

  getPhoneCode(): string;
  setPhoneCode(value: string): RegisterReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): RegisterReq;

  getName(): string;
  setName(value: string): RegisterReq;

  getAuthenticationType(): AuthenticationType;
  setAuthenticationType(value: AuthenticationType): RegisterReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterReq): RegisterReq.AsObject;
  static serializeBinaryToWriter(message: RegisterReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterReq;
  static deserializeBinaryFromReader(message: RegisterReq, reader: jspb.BinaryReader): RegisterReq;
}

export namespace RegisterReq {
  export type AsObject = {
    email: string,
    password: string,
    phoneNumber: string,
    phoneCode: string,
    partnershipId: string,
    name: string,
    authenticationType: AuthenticationType,
  }
}

export class LoginReq extends jspb.Message {
  getType(): AuthenticationType;
  setType(value: AuthenticationType): LoginReq;

  getEmail(): string;
  setEmail(value: string): LoginReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): LoginReq;

  getPhoneCode(): string;
  setPhoneCode(value: string): LoginReq;

  getPassword(): string;
  setPassword(value: string): LoginReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): LoginReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReq.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReq): LoginReq.AsObject;
  static serializeBinaryToWriter(message: LoginReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReq;
  static deserializeBinaryFromReader(message: LoginReq, reader: jspb.BinaryReader): LoginReq;
}

export namespace LoginReq {
  export type AsObject = {
    type: AuthenticationType,
    email: string,
    phoneNumber: string,
    phoneCode: string,
    password: string,
    partnershipId: string,
  }
}

export class SocialLoginReq extends jspb.Message {
  getType(): proto_customer_mobile_customer_pb.SocialType;
  setType(value: proto_customer_mobile_customer_pb.SocialType): SocialLoginReq;

  getAccessToken(): string;
  setAccessToken(value: string): SocialLoginReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): SocialLoginReq;

  getName(): string;
  setName(value: string): SocialLoginReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialLoginReq.AsObject;
  static toObject(includeInstance: boolean, msg: SocialLoginReq): SocialLoginReq.AsObject;
  static serializeBinaryToWriter(message: SocialLoginReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialLoginReq;
  static deserializeBinaryFromReader(message: SocialLoginReq, reader: jspb.BinaryReader): SocialLoginReq;
}

export namespace SocialLoginReq {
  export type AsObject = {
    type: proto_customer_mobile_customer_pb.SocialType,
    accessToken: string,
    partnershipId: string,
    name: string,
  }
}

export class LinkSocialAccountReq extends jspb.Message {
  getType(): proto_customer_mobile_customer_pb.SocialType;
  setType(value: proto_customer_mobile_customer_pb.SocialType): LinkSocialAccountReq;

  getAccessToken(): string;
  setAccessToken(value: string): LinkSocialAccountReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): LinkSocialAccountReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkSocialAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: LinkSocialAccountReq): LinkSocialAccountReq.AsObject;
  static serializeBinaryToWriter(message: LinkSocialAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkSocialAccountReq;
  static deserializeBinaryFromReader(message: LinkSocialAccountReq, reader: jspb.BinaryReader): LinkSocialAccountReq;
}

export namespace LinkSocialAccountReq {
  export type AsObject = {
    type: proto_customer_mobile_customer_pb.SocialType,
    accessToken: string,
    partnershipId: string,
  }
}

export class RefreshTokenReq extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshTokenReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenReq): RefreshTokenReq.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenReq;
  static deserializeBinaryFromReader(message: RefreshTokenReq, reader: jspb.BinaryReader): RefreshTokenReq;
}

export namespace RefreshTokenReq {
  export type AsObject = {
    refreshToken: string,
  }
}

export class VerifySocialTokenReq extends jspb.Message {
  getType(): proto_customer_mobile_customer_pb.SocialType;
  setType(value: proto_customer_mobile_customer_pb.SocialType): VerifySocialTokenReq;

  getAccessToken(): string;
  setAccessToken(value: string): VerifySocialTokenReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifySocialTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifySocialTokenReq): VerifySocialTokenReq.AsObject;
  static serializeBinaryToWriter(message: VerifySocialTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifySocialTokenReq;
  static deserializeBinaryFromReader(message: VerifySocialTokenReq, reader: jspb.BinaryReader): VerifySocialTokenReq;
}

export namespace VerifySocialTokenReq {
  export type AsObject = {
    type: proto_customer_mobile_customer_pb.SocialType,
    accessToken: string,
  }
}

export class ScanQRCodeReq extends jspb.Message {
  getQrCode(): string;
  setQrCode(value: string): ScanQRCodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanQRCodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: ScanQRCodeReq): ScanQRCodeReq.AsObject;
  static serializeBinaryToWriter(message: ScanQRCodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanQRCodeReq;
  static deserializeBinaryFromReader(message: ScanQRCodeReq, reader: jspb.BinaryReader): ScanQRCodeReq;
}

export namespace ScanQRCodeReq {
  export type AsObject = {
    qrCode: string,
  }
}

export class LoginByQRCodeReq extends jspb.Message {
  getQrCode(): string;
  setQrCode(value: string): LoginByQRCodeReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): LoginByQRCodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginByQRCodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: LoginByQRCodeReq): LoginByQRCodeReq.AsObject;
  static serializeBinaryToWriter(message: LoginByQRCodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginByQRCodeReq;
  static deserializeBinaryFromReader(message: LoginByQRCodeReq, reader: jspb.BinaryReader): LoginByQRCodeReq;
}

export namespace LoginByQRCodeReq {
  export type AsObject = {
    qrCode: string,
    partnershipId: string,
  }
}

export class VerifyPasswordSecurityReq extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): VerifyPasswordSecurityReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPasswordSecurityReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPasswordSecurityReq): VerifyPasswordSecurityReq.AsObject;
  static serializeBinaryToWriter(message: VerifyPasswordSecurityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPasswordSecurityReq;
  static deserializeBinaryFromReader(message: VerifyPasswordSecurityReq, reader: jspb.BinaryReader): VerifyPasswordSecurityReq;
}

export namespace VerifyPasswordSecurityReq {
  export type AsObject = {
    password: string,
  }
}

export class CheckAccountHavePhoneNumberReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAccountHavePhoneNumberReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAccountHavePhoneNumberReq): CheckAccountHavePhoneNumberReq.AsObject;
  static serializeBinaryToWriter(message: CheckAccountHavePhoneNumberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAccountHavePhoneNumberReq;
  static deserializeBinaryFromReader(message: CheckAccountHavePhoneNumberReq, reader: jspb.BinaryReader): CheckAccountHavePhoneNumberReq;
}

export namespace CheckAccountHavePhoneNumberReq {
  export type AsObject = {
  }
}

export class UpdateImportantInformationReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): UpdateImportantInformationReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UpdateImportantInformationReq;

  getFullName(): string;
  setFullName(value: string): UpdateImportantInformationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateImportantInformationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateImportantInformationReq): UpdateImportantInformationReq.AsObject;
  static serializeBinaryToWriter(message: UpdateImportantInformationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateImportantInformationReq;
  static deserializeBinaryFromReader(message: UpdateImportantInformationReq, reader: jspb.BinaryReader): UpdateImportantInformationReq;
}

export namespace UpdateImportantInformationReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    fullName: string,
  }
}

export class RegisterRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): RegisterRes;

  getRefreshToken(): string;
  setRefreshToken(value: string): RegisterRes;

  getExpireTime(): number;
  setExpireTime(value: number): RegisterRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRes.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRes): RegisterRes.AsObject;
  static serializeBinaryToWriter(message: RegisterRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRes;
  static deserializeBinaryFromReader(message: RegisterRes, reader: jspb.BinaryReader): RegisterRes;
}

export namespace RegisterRes {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    expireTime: number,
  }
}

export class LoginRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): LoginRes;

  getRefreshToken(): string;
  setRefreshToken(value: string): LoginRes;

  getExpireTime(): number;
  setExpireTime(value: number): LoginRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRes.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRes): LoginRes.AsObject;
  static serializeBinaryToWriter(message: LoginRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRes;
  static deserializeBinaryFromReader(message: LoginRes, reader: jspb.BinaryReader): LoginRes;
}

export namespace LoginRes {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    expireTime: number,
  }
}

export class LinkSocialAccountRes extends jspb.Message {
  getUserInfo(): proto_customer_mobile_customer_pb.UserInfo | undefined;
  setUserInfo(value?: proto_customer_mobile_customer_pb.UserInfo): LinkSocialAccountRes;
  hasUserInfo(): boolean;
  clearUserInfo(): LinkSocialAccountRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkSocialAccountRes.AsObject;
  static toObject(includeInstance: boolean, msg: LinkSocialAccountRes): LinkSocialAccountRes.AsObject;
  static serializeBinaryToWriter(message: LinkSocialAccountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkSocialAccountRes;
  static deserializeBinaryFromReader(message: LinkSocialAccountRes, reader: jspb.BinaryReader): LinkSocialAccountRes;
}

export namespace LinkSocialAccountRes {
  export type AsObject = {
    userInfo?: proto_customer_mobile_customer_pb.UserInfo.AsObject,
  }
}

export class RefreshTokenRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): RefreshTokenRes;

  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshTokenRes;

  getExpireTime(): number;
  setExpireTime(value: number): RefreshTokenRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRes.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRes): RefreshTokenRes.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRes;
  static deserializeBinaryFromReader(message: RefreshTokenRes, reader: jspb.BinaryReader): RefreshTokenRes;
}

export namespace RefreshTokenRes {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    expireTime: number,
  }
}

export class LoginByQRCodeRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): LoginByQRCodeRes;

  getRefreshToken(): string;
  setRefreshToken(value: string): LoginByQRCodeRes;

  getExpireTime(): number;
  setExpireTime(value: number): LoginByQRCodeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginByQRCodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: LoginByQRCodeRes): LoginByQRCodeRes.AsObject;
  static serializeBinaryToWriter(message: LoginByQRCodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginByQRCodeRes;
  static deserializeBinaryFromReader(message: LoginByQRCodeRes, reader: jspb.BinaryReader): LoginByQRCodeRes;
}

export namespace LoginByQRCodeRes {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    expireTime: number,
  }
}

export class VerifyPasswordSecurityRes extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyPasswordSecurityRes;

  getExpireTime(): number;
  setExpireTime(value: number): VerifyPasswordSecurityRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPasswordSecurityRes.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPasswordSecurityRes): VerifyPasswordSecurityRes.AsObject;
  static serializeBinaryToWriter(message: VerifyPasswordSecurityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPasswordSecurityRes;
  static deserializeBinaryFromReader(message: VerifyPasswordSecurityRes, reader: jspb.BinaryReader): VerifyPasswordSecurityRes;
}

export namespace VerifyPasswordSecurityRes {
  export type AsObject = {
    token: string,
    expireTime: number,
  }
}

export class CheckAccountHavePhoneNumberRes extends jspb.Message {
  getHavePhoneNumber(): boolean;
  setHavePhoneNumber(value: boolean): CheckAccountHavePhoneNumberRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAccountHavePhoneNumberRes.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAccountHavePhoneNumberRes): CheckAccountHavePhoneNumberRes.AsObject;
  static serializeBinaryToWriter(message: CheckAccountHavePhoneNumberRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAccountHavePhoneNumberRes;
  static deserializeBinaryFromReader(message: CheckAccountHavePhoneNumberRes, reader: jspb.BinaryReader): CheckAccountHavePhoneNumberRes;
}

export namespace CheckAccountHavePhoneNumberRes {
  export type AsObject = {
    havePhoneNumber: boolean,
  }
}

export enum AuthenticationType { 
  AUTHENTICATION_TYPE_INVALID = 0,
  AUTHENTICATION_TYPE_PHONE = 1,
  AUTHENTICATION_TYPE_EMAIL = 2,
}
