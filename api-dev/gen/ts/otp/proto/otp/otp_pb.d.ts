import * as jspb from 'google-protobuf'

import * as proto_otp_base_pb from '../../proto/otp/base_pb';


export class SendPhoneOTPReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): SendPhoneOTPReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): SendPhoneOTPReq;

  getRecaptchaToken(): string;
  setRecaptchaToken(value: string): SendPhoneOTPReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): SendPhoneOTPReq;

  getOtpType(): OTPType;
  setOtpType(value: OTPType): SendPhoneOTPReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPhoneOTPReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendPhoneOTPReq): SendPhoneOTPReq.AsObject;
  static serializeBinaryToWriter(message: SendPhoneOTPReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPhoneOTPReq;
  static deserializeBinaryFromReader(message: SendPhoneOTPReq, reader: jspb.BinaryReader): SendPhoneOTPReq;
}

export namespace SendPhoneOTPReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    recaptchaToken: string,
    partnershipId: string,
    otpType: OTPType,
  }
}

export class SendEmailOTPReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): SendEmailOTPReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): SendEmailOTPReq;

  getType(): OTPType;
  setType(value: OTPType): SendEmailOTPReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEmailOTPReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendEmailOTPReq): SendEmailOTPReq.AsObject;
  static serializeBinaryToWriter(message: SendEmailOTPReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEmailOTPReq;
  static deserializeBinaryFromReader(message: SendEmailOTPReq, reader: jspb.BinaryReader): SendEmailOTPReq;
}

export namespace SendEmailOTPReq {
  export type AsObject = {
    email: string,
    partnershipId: string,
    type: OTPType,
  }
}

export class VerifyPhoneOTPReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): VerifyPhoneOTPReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyPhoneOTPReq;

  getOtp(): string;
  setOtp(value: string): VerifyPhoneOTPReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): VerifyPhoneOTPReq;

  getFirebaseSid(): string;
  setFirebaseSid(value: string): VerifyPhoneOTPReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneOTPReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneOTPReq): VerifyPhoneOTPReq.AsObject;
  static serializeBinaryToWriter(message: VerifyPhoneOTPReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneOTPReq;
  static deserializeBinaryFromReader(message: VerifyPhoneOTPReq, reader: jspb.BinaryReader): VerifyPhoneOTPReq;
}

export namespace VerifyPhoneOTPReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    otp: string,
    partnershipId: string,
    firebaseSid: string,
  }
}

export class VerifyEmailOTPReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): VerifyEmailOTPReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): VerifyEmailOTPReq;

  getOtp(): string;
  setOtp(value: string): VerifyEmailOTPReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailOTPReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailOTPReq): VerifyEmailOTPReq.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailOTPReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailOTPReq;
  static deserializeBinaryFromReader(message: VerifyEmailOTPReq, reader: jspb.BinaryReader): VerifyEmailOTPReq;
}

export namespace VerifyEmailOTPReq {
  export type AsObject = {
    email: string,
    partnershipId: string,
    otp: string,
  }
}

export class SendPhoneOTPRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendPhoneOTPRes;

  getFirebaseSid(): string;
  setFirebaseSid(value: string): SendPhoneOTPRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPhoneOTPRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendPhoneOTPRes): SendPhoneOTPRes.AsObject;
  static serializeBinaryToWriter(message: SendPhoneOTPRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPhoneOTPRes;
  static deserializeBinaryFromReader(message: SendPhoneOTPRes, reader: jspb.BinaryReader): SendPhoneOTPRes;
}

export namespace SendPhoneOTPRes {
  export type AsObject = {
    timeRemaining: number,
    firebaseSid: string,
  }
}

export class SendEmailOTPRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendEmailOTPRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendEmailOTPRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendEmailOTPRes): SendEmailOTPRes.AsObject;
  static serializeBinaryToWriter(message: SendEmailOTPRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendEmailOTPRes;
  static deserializeBinaryFromReader(message: SendEmailOTPRes, reader: jspb.BinaryReader): SendEmailOTPRes;
}

export namespace SendEmailOTPRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export enum OTPType { 
  OTP_TYPE_INVALID = 0,
  OTP_TYPE_CUSTOMER_EMAIL_VERIFICATION = 1,
  OTP_TYPE_CUSTOMER_PHONE_VERIFICATION = 2,
  OTP_TYPE_CUSTOMER_RESET_PASSWORD = 3,
  OTP_TYPE_CUSTOMER_TRANSFER_TICKET = 4,
}
