import * as jspb from 'google-protobuf'

import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';


export class SendOtpByPhoneReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): SendOtpByPhoneReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): SendOtpByPhoneReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): SendOtpByPhoneReq;

  getOtpType(): PhoneOtpType;
  setOtpType(value: PhoneOtpType): SendOtpByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpByPhoneReq): SendOtpByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpByPhoneReq;
  static deserializeBinaryFromReader(message: SendOtpByPhoneReq, reader: jspb.BinaryReader): SendOtpByPhoneReq;
}

export namespace SendOtpByPhoneReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    partnershipId: string,
    otpType: PhoneOtpType,
  }
}

export class VerifyPhoneNumberReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): VerifyPhoneNumberReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyPhoneNumberReq;

  getOtp(): string;
  setOtp(value: string): VerifyPhoneNumberReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): VerifyPhoneNumberReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneNumberReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneNumberReq): VerifyPhoneNumberReq.AsObject;
  static serializeBinaryToWriter(message: VerifyPhoneNumberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneNumberReq;
  static deserializeBinaryFromReader(message: VerifyPhoneNumberReq, reader: jspb.BinaryReader): VerifyPhoneNumberReq;
}

export namespace VerifyPhoneNumberReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    otp: string,
    partnershipId: string,
  }
}

export class VerifyOtpToResetPasswordByPhoneReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): VerifyOtpToResetPasswordByPhoneReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyOtpToResetPasswordByPhoneReq;

  getOtp(): string;
  setOtp(value: string): VerifyOtpToResetPasswordByPhoneReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): VerifyOtpToResetPasswordByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordByPhoneReq): VerifyOtpToResetPasswordByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordByPhoneReq;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordByPhoneReq, reader: jspb.BinaryReader): VerifyOtpToResetPasswordByPhoneReq;
}

export namespace VerifyOtpToResetPasswordByPhoneReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    otp: string,
    partnershipId: string,
  }
}

export class ResetPasswordByPhoneReq extends jspb.Message {
  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordByPhoneReq): ResetPasswordByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordByPhoneReq;
  static deserializeBinaryFromReader(message: ResetPasswordByPhoneReq, reader: jspb.BinaryReader): ResetPasswordByPhoneReq;
}

export namespace ResetPasswordByPhoneReq {
  export type AsObject = {
    newPassword: string,
  }
}

export class SendOtpSecurityByPhoneReq extends jspb.Message {
  getType(): PhoneOtpSecurityType;
  setType(value: PhoneOtpSecurityType): SendOtpSecurityByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpSecurityByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpSecurityByPhoneReq): SendOtpSecurityByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpSecurityByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpSecurityByPhoneReq;
  static deserializeBinaryFromReader(message: SendOtpSecurityByPhoneReq, reader: jspb.BinaryReader): SendOtpSecurityByPhoneReq;
}

export namespace SendOtpSecurityByPhoneReq {
  export type AsObject = {
    type: PhoneOtpSecurityType,
  }
}

export class VerifyOtpSecurityByPhoneReq extends jspb.Message {
  getOtp(): string;
  setOtp(value: string): VerifyOtpSecurityByPhoneReq;

  getType(): PhoneOtpSecurityType;
  setType(value: PhoneOtpSecurityType): VerifyOtpSecurityByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpSecurityByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpSecurityByPhoneReq): VerifyOtpSecurityByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpSecurityByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpSecurityByPhoneReq;
  static deserializeBinaryFromReader(message: VerifyOtpSecurityByPhoneReq, reader: jspb.BinaryReader): VerifyOtpSecurityByPhoneReq;
}

export namespace VerifyOtpSecurityByPhoneReq {
  export type AsObject = {
    otp: string,
    type: PhoneOtpSecurityType,
  }
}

export class SendOtpToChangePhoneByPhoneReq extends jspb.Message {
  getToken(): string;
  setToken(value: string): SendOtpToChangePhoneByPhoneReq;

  getPhoneCode(): string;
  setPhoneCode(value: string): SendOtpToChangePhoneByPhoneReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): SendOtpToChangePhoneByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToChangePhoneByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToChangePhoneByPhoneReq): SendOtpToChangePhoneByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpToChangePhoneByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToChangePhoneByPhoneReq;
  static deserializeBinaryFromReader(message: SendOtpToChangePhoneByPhoneReq, reader: jspb.BinaryReader): SendOtpToChangePhoneByPhoneReq;
}

export namespace SendOtpToChangePhoneByPhoneReq {
  export type AsObject = {
    token: string,
    phoneCode: string,
    phoneNumber: string,
  }
}

export class VerifyOtpToChangePhoneByPhoneReq extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyOtpToChangePhoneByPhoneReq;

  getPhoneCode(): string;
  setPhoneCode(value: string): VerifyOtpToChangePhoneByPhoneReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyOtpToChangePhoneByPhoneReq;

  getOtp(): string;
  setOtp(value: string): VerifyOtpToChangePhoneByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToChangePhoneByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToChangePhoneByPhoneReq): VerifyOtpToChangePhoneByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToChangePhoneByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToChangePhoneByPhoneReq;
  static deserializeBinaryFromReader(message: VerifyOtpToChangePhoneByPhoneReq, reader: jspb.BinaryReader): VerifyOtpToChangePhoneByPhoneReq;
}

export namespace VerifyOtpToChangePhoneByPhoneReq {
  export type AsObject = {
    token: string,
    phoneCode: string,
    phoneNumber: string,
    otp: string,
  }
}

export class SendOtpByPhoneRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendOtpByPhoneRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpByPhoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpByPhoneRes): SendOtpByPhoneRes.AsObject;
  static serializeBinaryToWriter(message: SendOtpByPhoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpByPhoneRes;
  static deserializeBinaryFromReader(message: SendOtpByPhoneRes, reader: jspb.BinaryReader): SendOtpByPhoneRes;
}

export namespace SendOtpByPhoneRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export class SendOtpSecurityByPhoneRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendOtpSecurityByPhoneRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpSecurityByPhoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpSecurityByPhoneRes): SendOtpSecurityByPhoneRes.AsObject;
  static serializeBinaryToWriter(message: SendOtpSecurityByPhoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpSecurityByPhoneRes;
  static deserializeBinaryFromReader(message: SendOtpSecurityByPhoneRes, reader: jspb.BinaryReader): SendOtpSecurityByPhoneRes;
}

export namespace SendOtpSecurityByPhoneRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export class VerifyOtpToResetPasswordByPhoneRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): VerifyOtpToResetPasswordByPhoneRes;

  getExpireTime(): number;
  setExpireTime(value: number): VerifyOtpToResetPasswordByPhoneRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordByPhoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordByPhoneRes): VerifyOtpToResetPasswordByPhoneRes.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordByPhoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordByPhoneRes;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordByPhoneRes, reader: jspb.BinaryReader): VerifyOtpToResetPasswordByPhoneRes;
}

export namespace VerifyOtpToResetPasswordByPhoneRes {
  export type AsObject = {
    accessToken: string,
    expireTime: number,
  }
}

export class VerifyOtpSecurityByPhoneRes extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyOtpSecurityByPhoneRes;

  getExpireTime(): number;
  setExpireTime(value: number): VerifyOtpSecurityByPhoneRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpSecurityByPhoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpSecurityByPhoneRes): VerifyOtpSecurityByPhoneRes.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpSecurityByPhoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpSecurityByPhoneRes;
  static deserializeBinaryFromReader(message: VerifyOtpSecurityByPhoneRes, reader: jspb.BinaryReader): VerifyOtpSecurityByPhoneRes;
}

export namespace VerifyOtpSecurityByPhoneRes {
  export type AsObject = {
    token: string,
    expireTime: number,
  }
}

export class SendOtpToChangePhoneByPhoneRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendOtpToChangePhoneByPhoneRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToChangePhoneByPhoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToChangePhoneByPhoneRes): SendOtpToChangePhoneByPhoneRes.AsObject;
  static serializeBinaryToWriter(message: SendOtpToChangePhoneByPhoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToChangePhoneByPhoneRes;
  static deserializeBinaryFromReader(message: SendOtpToChangePhoneByPhoneRes, reader: jspb.BinaryReader): SendOtpToChangePhoneByPhoneRes;
}

export namespace SendOtpToChangePhoneByPhoneRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export enum PhoneOtpType { 
  PHONE_OTP_TYPE_INVALID = 0,
  PHONE_OTP_CUSTOMER_PHONE_VERIFICATION = 1,
  PHONE_OTP_CUSTOMER_RESET_PASSWORD = 2,
}
export enum PhoneOtpSecurityType { 
  PHONE_OTP_SECURITY_TYPE_INVALID = 0,
  PHONE_OTP_SECURITY_TYPE_CHANGE_PHONE_NUMBER = 1,
  PHONE_OTP_SECURITY_TYPE_CHANGE_EMAIL = 2,
}
