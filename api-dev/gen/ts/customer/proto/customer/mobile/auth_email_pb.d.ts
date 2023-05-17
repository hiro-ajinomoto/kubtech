import * as jspb from 'google-protobuf'

import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';


export class SendOtpByEmailReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): SendOtpByEmailReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): SendOtpByEmailReq;

  getType(): EmailOtpType;
  setType(value: EmailOtpType): SendOtpByEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpByEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpByEmailReq): SendOtpByEmailReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpByEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpByEmailReq;
  static deserializeBinaryFromReader(message: SendOtpByEmailReq, reader: jspb.BinaryReader): SendOtpByEmailReq;
}

export namespace SendOtpByEmailReq {
  export type AsObject = {
    email: string,
    partnershipId: string,
    type: EmailOtpType,
  }
}

export class SendOtpSecurityByEmailReq extends jspb.Message {
  getType(): EmailOtpSecurityType;
  setType(value: EmailOtpSecurityType): SendOtpSecurityByEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpSecurityByEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpSecurityByEmailReq): SendOtpSecurityByEmailReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpSecurityByEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpSecurityByEmailReq;
  static deserializeBinaryFromReader(message: SendOtpSecurityByEmailReq, reader: jspb.BinaryReader): SendOtpSecurityByEmailReq;
}

export namespace SendOtpSecurityByEmailReq {
  export type AsObject = {
    type: EmailOtpSecurityType,
  }
}

export class ResetPasswordByEmailReq extends jspb.Message {
  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordByEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordByEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordByEmailReq): ResetPasswordByEmailReq.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordByEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordByEmailReq;
  static deserializeBinaryFromReader(message: ResetPasswordByEmailReq, reader: jspb.BinaryReader): ResetPasswordByEmailReq;
}

export namespace ResetPasswordByEmailReq {
  export type AsObject = {
    newPassword: string,
  }
}

export class VerifyEmailReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): VerifyEmailReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): VerifyEmailReq;

  getOtp(): string;
  setOtp(value: string): VerifyEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailReq): VerifyEmailReq.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailReq;
  static deserializeBinaryFromReader(message: VerifyEmailReq, reader: jspb.BinaryReader): VerifyEmailReq;
}

export namespace VerifyEmailReq {
  export type AsObject = {
    email: string,
    partnershipId: string,
    otp: string,
  }
}

export class VerifyOtpToResetPasswordByEmailReq extends jspb.Message {
  getOtp(): string;
  setOtp(value: string): VerifyOtpToResetPasswordByEmailReq;

  getEmail(): string;
  setEmail(value: string): VerifyOtpToResetPasswordByEmailReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): VerifyOtpToResetPasswordByEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordByEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordByEmailReq): VerifyOtpToResetPasswordByEmailReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordByEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordByEmailReq;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordByEmailReq, reader: jspb.BinaryReader): VerifyOtpToResetPasswordByEmailReq;
}

export namespace VerifyOtpToResetPasswordByEmailReq {
  export type AsObject = {
    otp: string,
    email: string,
    partnershipId: string,
  }
}

export class VerifyOtpSecurityByEmailReq extends jspb.Message {
  getOtp(): string;
  setOtp(value: string): VerifyOtpSecurityByEmailReq;

  getType(): EmailOtpSecurityType;
  setType(value: EmailOtpSecurityType): VerifyOtpSecurityByEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpSecurityByEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpSecurityByEmailReq): VerifyOtpSecurityByEmailReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpSecurityByEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpSecurityByEmailReq;
  static deserializeBinaryFromReader(message: VerifyOtpSecurityByEmailReq, reader: jspb.BinaryReader): VerifyOtpSecurityByEmailReq;
}

export namespace VerifyOtpSecurityByEmailReq {
  export type AsObject = {
    otp: string,
    type: EmailOtpSecurityType,
  }
}

export class SendOtpToChangeEmailByEmailReq extends jspb.Message {
  getToken(): string;
  setToken(value: string): SendOtpToChangeEmailByEmailReq;

  getEmail(): string;
  setEmail(value: string): SendOtpToChangeEmailByEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToChangeEmailByEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToChangeEmailByEmailReq): SendOtpToChangeEmailByEmailReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpToChangeEmailByEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToChangeEmailByEmailReq;
  static deserializeBinaryFromReader(message: SendOtpToChangeEmailByEmailReq, reader: jspb.BinaryReader): SendOtpToChangeEmailByEmailReq;
}

export namespace SendOtpToChangeEmailByEmailReq {
  export type AsObject = {
    token: string,
    email: string,
  }
}

export class VerifyOtpToChangeEmailByEmailReq extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyOtpToChangeEmailByEmailReq;

  getEmail(): string;
  setEmail(value: string): VerifyOtpToChangeEmailByEmailReq;

  getOtp(): string;
  setOtp(value: string): VerifyOtpToChangeEmailByEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToChangeEmailByEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToChangeEmailByEmailReq): VerifyOtpToChangeEmailByEmailReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToChangeEmailByEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToChangeEmailByEmailReq;
  static deserializeBinaryFromReader(message: VerifyOtpToChangeEmailByEmailReq, reader: jspb.BinaryReader): VerifyOtpToChangeEmailByEmailReq;
}

export namespace VerifyOtpToChangeEmailByEmailReq {
  export type AsObject = {
    token: string,
    email: string,
    otp: string,
  }
}

export class SendOtpByEmailRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendOtpByEmailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpByEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpByEmailRes): SendOtpByEmailRes.AsObject;
  static serializeBinaryToWriter(message: SendOtpByEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpByEmailRes;
  static deserializeBinaryFromReader(message: SendOtpByEmailRes, reader: jspb.BinaryReader): SendOtpByEmailRes;
}

export namespace SendOtpByEmailRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export class SendOtpSecurityByEmailRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendOtpSecurityByEmailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpSecurityByEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpSecurityByEmailRes): SendOtpSecurityByEmailRes.AsObject;
  static serializeBinaryToWriter(message: SendOtpSecurityByEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpSecurityByEmailRes;
  static deserializeBinaryFromReader(message: SendOtpSecurityByEmailRes, reader: jspb.BinaryReader): SendOtpSecurityByEmailRes;
}

export namespace SendOtpSecurityByEmailRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export class VerifyOtpToResetPasswordByEmailRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): VerifyOtpToResetPasswordByEmailRes;

  getExpireTime(): number;
  setExpireTime(value: number): VerifyOtpToResetPasswordByEmailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordByEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordByEmailRes): VerifyOtpToResetPasswordByEmailRes.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordByEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordByEmailRes;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordByEmailRes, reader: jspb.BinaryReader): VerifyOtpToResetPasswordByEmailRes;
}

export namespace VerifyOtpToResetPasswordByEmailRes {
  export type AsObject = {
    accessToken: string,
    expireTime: number,
  }
}

export class VerifyOtpSecurityByEmailRes extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyOtpSecurityByEmailRes;

  getExpireTime(): number;
  setExpireTime(value: number): VerifyOtpSecurityByEmailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpSecurityByEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpSecurityByEmailRes): VerifyOtpSecurityByEmailRes.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpSecurityByEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpSecurityByEmailRes;
  static deserializeBinaryFromReader(message: VerifyOtpSecurityByEmailRes, reader: jspb.BinaryReader): VerifyOtpSecurityByEmailRes;
}

export namespace VerifyOtpSecurityByEmailRes {
  export type AsObject = {
    token: string,
    expireTime: number,
  }
}

export class SendOtpToChangeEmailByEmailRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendOtpToChangeEmailByEmailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToChangeEmailByEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToChangeEmailByEmailRes): SendOtpToChangeEmailByEmailRes.AsObject;
  static serializeBinaryToWriter(message: SendOtpToChangeEmailByEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToChangeEmailByEmailRes;
  static deserializeBinaryFromReader(message: SendOtpToChangeEmailByEmailRes, reader: jspb.BinaryReader): SendOtpToChangeEmailByEmailRes;
}

export namespace SendOtpToChangeEmailByEmailRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export enum EmailOtpType { 
  EMAIL_OTP_TYPE_INVALID = 0,
  EMAIL_OTP_TYPE_CUSTOMER_EMAIL_VERIFICATION = 1,
  EMAIL_OTP_TYPE_CUSTOMER_RESET_PASSWORD = 2,
}
export enum EmailOtpSecurityType { 
  EMAIL_OTP_SECURITY_TYPE_INVALID = 0,
  EMAIL_OTP_SECURITY_TYPE_CHANGE_PHONE_NUMBER = 1,
  EMAIL_OTP_SECURITY_TYPE_CHANGE_EMAIL = 2,
}
