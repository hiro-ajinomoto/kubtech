import * as jspb from 'google-protobuf'

import * as proto_partner_mobile_base_pb from '../../../proto/partner/mobile/base_pb';


export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UserInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): UserInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getPassword(): string;
  setPassword(value: string): UserInfo;

  getName(): string;
  setName(value: string): UserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): UserInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): UserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserInfo;

  getPartnerShopId(): string;
  setPartnerShopId(value: string): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    email: string,
    password: string,
    name: string,
    profilePicture: string,
    partnershipId: string,
    phoneCode: string,
    phoneNumber: string,
    partnerShopId: string,
  }
}

export class GetMeReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeReq): GetMeReq.AsObject;
  static serializeBinaryToWriter(message: GetMeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeReq;
  static deserializeBinaryFromReader(message: GetMeReq, reader: jspb.BinaryReader): GetMeReq;
}

export namespace GetMeReq {
  export type AsObject = {
  }
}

export class ChangePasswordReq extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): ChangePasswordReq;

  getPassword(): string;
  setPassword(value: string): ChangePasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordReq): ChangePasswordReq.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordReq;
  static deserializeBinaryFromReader(message: ChangePasswordReq, reader: jspb.BinaryReader): ChangePasswordReq;
}

export namespace ChangePasswordReq {
  export type AsObject = {
    oldPassword: string,
    password: string,
  }
}

export class GetMeRes extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): GetMeRes;
  hasUserInfo(): boolean;
  clearUserInfo(): GetMeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeRes): GetMeRes.AsObject;
  static serializeBinaryToWriter(message: GetMeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeRes;
  static deserializeBinaryFromReader(message: GetMeRes, reader: jspb.BinaryReader): GetMeRes;
}

export namespace GetMeRes {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

