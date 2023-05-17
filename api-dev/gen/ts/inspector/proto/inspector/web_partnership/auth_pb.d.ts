import * as jspb from 'google-protobuf'

import * as proto_inspector_web_partnership_base_pb from '../../../proto/inspector/web_partnership/base_pb';


export class LoginReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginReq;

  getPassword(): string;
  setPassword(value: string): LoginReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReq.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReq): LoginReq.AsObject;
  static serializeBinaryToWriter(message: LoginReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReq;
  static deserializeBinaryFromReader(message: LoginReq, reader: jspb.BinaryReader): LoginReq;
}

export namespace LoginReq {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class SendOtpToResetPasswordReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): SendOtpToResetPasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToResetPasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToResetPasswordReq): SendOtpToResetPasswordReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpToResetPasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToResetPasswordReq;
  static deserializeBinaryFromReader(message: SendOtpToResetPasswordReq, reader: jspb.BinaryReader): SendOtpToResetPasswordReq;
}

export namespace SendOtpToResetPasswordReq {
  export type AsObject = {
    email: string,
  }
}

export class VerifyOtpToResetPasswordReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): VerifyOtpToResetPasswordReq;

  getOtp(): string;
  setOtp(value: string): VerifyOtpToResetPasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordReq): VerifyOtpToResetPasswordReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordReq;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordReq, reader: jspb.BinaryReader): VerifyOtpToResetPasswordReq;
}

export namespace VerifyOtpToResetPasswordReq {
  export type AsObject = {
    email: string,
    otp: string,
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

  getExpireTime(): number;
  setExpireTime(value: number): VerifyOtpToResetPasswordRes;

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
    expireTime: number,
  }
}

