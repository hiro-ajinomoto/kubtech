import * as jspb from 'google-protobuf'

import * as proto_admin_web_partnership_base_pb from '../../../proto/admin/web_partnership/base_pb';


export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserInfo;

  getUsername(): string;
  setUsername(value: string): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getPassword(): string;
  setPassword(value: string): UserInfo;

  getName(): string;
  setName(value: string): UserInfo;

  getPhoneVerified(): boolean;
  setPhoneVerified(value: boolean): UserInfo;

  getIsEnabled(): boolean;
  setIsEnabled(value: boolean): UserInfo;

  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): UserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): UserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserInfo;

  getDescription(): string;
  setDescription(value: string): UserInfo;

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
    username: string,
    email: string,
    password: string,
    name: string,
    phoneVerified: boolean,
    isEnabled: boolean,
    emailVerified: boolean,
    createdAt: number,
    updatedAt: number,
    phoneNumber: string,
    phoneCode: string,
    profilePicture: string,
    description: string,
  }
}

export class CreateAdminReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreateAdminReq;

  getPassword(): string;
  setPassword(value: string): CreateAdminReq;

  getName(): string;
  setName(value: string): CreateAdminReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CreateAdminReq;

  getPhoneCode(): string;
  setPhoneCode(value: string): CreateAdminReq;

  getProfilePicture(): string;
  setProfilePicture(value: string): CreateAdminReq;

  getDescription(): string;
  setDescription(value: string): CreateAdminReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdminReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdminReq): CreateAdminReq.AsObject;
  static serializeBinaryToWriter(message: CreateAdminReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdminReq;
  static deserializeBinaryFromReader(message: CreateAdminReq, reader: jspb.BinaryReader): CreateAdminReq;
}

export namespace CreateAdminReq {
  export type AsObject = {
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    phoneCode: string,
    profilePicture: string,
    description: string,
  }
}

export class LoginReq extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginReq;

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
    username: string,
    password: string,
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

