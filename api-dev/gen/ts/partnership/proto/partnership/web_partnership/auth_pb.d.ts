import * as jspb from 'google-protobuf'

import * as proto_partnership_web_partnership_base_pb from '../../../proto/partnership/web_partnership/base_pb';


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

export class LogoutReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutReq.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutReq): LogoutReq.AsObject;
  static serializeBinaryToWriter(message: LogoutReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutReq;
  static deserializeBinaryFromReader(message: LogoutReq, reader: jspb.BinaryReader): LogoutReq;
}

export namespace LogoutReq {
  export type AsObject = {
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

