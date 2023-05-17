import * as jspb from 'google-protobuf'

import * as proto_partner_mobile_base_pb from '../../../proto/partner/mobile/base_pb';


export class LoginReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): LoginReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): LoginReq;

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
    phoneCode: string,
    phoneNumber: string,
    password: string,
    partnershipId: string,
  }
}

export class SendOtpToResetPasswordReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): SendOtpToResetPasswordReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): SendOtpToResetPasswordReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): SendOtpToResetPasswordReq;

  getRecaptchaToken(): string;
  setRecaptchaToken(value: string): SendOtpToResetPasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToResetPasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToResetPasswordReq): SendOtpToResetPasswordReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpToResetPasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToResetPasswordReq;
  static deserializeBinaryFromReader(message: SendOtpToResetPasswordReq, reader: jspb.BinaryReader): SendOtpToResetPasswordReq;
}

export namespace SendOtpToResetPasswordReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    partnershipId: string,
    recaptchaToken: string,
  }
}

export class VerifyOtpToResetPasswordReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): VerifyOtpToResetPasswordReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyOtpToResetPasswordReq;

  getOtp(): string;
  setOtp(value: string): VerifyOtpToResetPasswordReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): VerifyOtpToResetPasswordReq;

  getFirebaseSid(): string;
  setFirebaseSid(value: string): VerifyOtpToResetPasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordReq): VerifyOtpToResetPasswordReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordReq;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordReq, reader: jspb.BinaryReader): VerifyOtpToResetPasswordReq;
}

export namespace VerifyOtpToResetPasswordReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    otp: string,
    partnershipId: string,
    firebaseSid: string,
  }
}

export class ResetPasswordReq extends jspb.Message {
  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordReq): ResetPasswordReq.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordReq;
  static deserializeBinaryFromReader(message: ResetPasswordReq, reader: jspb.BinaryReader): ResetPasswordReq;
}

export namespace ResetPasswordReq {
  export type AsObject = {
    newPassword: string,
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

export class LoginRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): LoginRes;

  getRefreshToken(): string;
  setRefreshToken(value: string): LoginRes;

  getExpiredTime(): number;
  setExpiredTime(value: number): LoginRes;

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
    expiredTime: number,
  }
}

export class SendOtpToResetPasswordRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendOtpToResetPasswordRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToResetPasswordRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToResetPasswordRes): SendOtpToResetPasswordRes.AsObject;
  static serializeBinaryToWriter(message: SendOtpToResetPasswordRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToResetPasswordRes;
  static deserializeBinaryFromReader(message: SendOtpToResetPasswordRes, reader: jspb.BinaryReader): SendOtpToResetPasswordRes;
}

export namespace SendOtpToResetPasswordRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export class VerifyOtpToResetPasswordRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): VerifyOtpToResetPasswordRes;

  getExpiredTime(): number;
  setExpiredTime(value: number): VerifyOtpToResetPasswordRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordRes.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordRes): VerifyOtpToResetPasswordRes.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordRes;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordRes, reader: jspb.BinaryReader): VerifyOtpToResetPasswordRes;
}

export namespace VerifyOtpToResetPasswordRes {
  export type AsObject = {
    accessToken: string,
    expiredTime: number,
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

