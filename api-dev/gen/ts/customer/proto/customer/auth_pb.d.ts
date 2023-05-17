import * as jspb from 'google-protobuf'

import * as proto_customer_base_pb from '../../proto/customer/base_pb';


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

export enum AuthenticationType { 
  AUTHENTICATION_TYPE_INVALID = 0,
  AUTHENTICATION_TYPE_PHONE = 1,
  AUTHENTICATION_TYPE_EMAIL = 2,
}
