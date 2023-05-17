import * as jspb from 'google-protobuf'

import * as proto_inspector_mobile_base_pb from '../../../proto/inspector/mobile/base_pb';


export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getPassword(): string;
  setPassword(value: string): UserInfo;

  getName(): string;
  setName(value: string): UserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): UserInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): UserInfo;

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
    email: string,
    password: string,
    name: string,
    profilePicture: string,
    createdBy: string,
    updatedBy: string,
  }
}

export class CreateReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreateReq;

  getPassword(): string;
  setPassword(value: string): CreateReq;

  getName(): string;
  setName(value: string): CreateReq;

  getProfilePicture(): string;
  setProfilePicture(value: string): CreateReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReq): CreateReq.AsObject;
  static serializeBinaryToWriter(message: CreateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReq;
  static deserializeBinaryFromReader(message: CreateReq, reader: jspb.BinaryReader): CreateReq;
}

export namespace CreateReq {
  export type AsObject = {
    email: string,
    password: string,
    name: string,
    profilePicture: string,
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

export class GetUserReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): GetUserReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserReq): GetUserReq.AsObject;
  static serializeBinaryToWriter(message: GetUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserReq;
  static deserializeBinaryFromReader(message: GetUserReq, reader: jspb.BinaryReader): GetUserReq;
}

export namespace GetUserReq {
  export type AsObject = {
    email: string,
  }
}

export class CheckAlreadyExistEmailReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CheckAlreadyExistEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAlreadyExistEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAlreadyExistEmailReq): CheckAlreadyExistEmailReq.AsObject;
  static serializeBinaryToWriter(message: CheckAlreadyExistEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAlreadyExistEmailReq;
  static deserializeBinaryFromReader(message: CheckAlreadyExistEmailReq, reader: jspb.BinaryReader): CheckAlreadyExistEmailReq;
}

export namespace CheckAlreadyExistEmailReq {
  export type AsObject = {
    email: string,
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

export class GetUserRes extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): GetUserRes;
  hasUserInfo(): boolean;
  clearUserInfo(): GetUserRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRes): GetUserRes.AsObject;
  static serializeBinaryToWriter(message: GetUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRes;
  static deserializeBinaryFromReader(message: GetUserRes, reader: jspb.BinaryReader): GetUserRes;
}

export namespace GetUserRes {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

export class CheckAlreadyExistEmailRes extends jspb.Message {
  getIsExist(): boolean;
  setIsExist(value: boolean): CheckAlreadyExistEmailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAlreadyExistEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAlreadyExistEmailRes): CheckAlreadyExistEmailRes.AsObject;
  static serializeBinaryToWriter(message: CheckAlreadyExistEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAlreadyExistEmailRes;
  static deserializeBinaryFromReader(message: CheckAlreadyExistEmailRes, reader: jspb.BinaryReader): CheckAlreadyExistEmailRes;
}

export namespace CheckAlreadyExistEmailRes {
  export type AsObject = {
    isExist: boolean,
  }
}

