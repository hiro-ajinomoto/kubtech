import * as jspb from 'google-protobuf'



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

export class GetInspectorByIdReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetInspectorByIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInspectorByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetInspectorByIdReq): GetInspectorByIdReq.AsObject;
  static serializeBinaryToWriter(message: GetInspectorByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInspectorByIdReq;
  static deserializeBinaryFromReader(message: GetInspectorByIdReq, reader: jspb.BinaryReader): GetInspectorByIdReq;
}

export namespace GetInspectorByIdReq {
  export type AsObject = {
    id: string,
  }
}

export class GetInspectorByIdRes extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): GetInspectorByIdRes;
  hasUserInfo(): boolean;
  clearUserInfo(): GetInspectorByIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInspectorByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetInspectorByIdRes): GetInspectorByIdRes.AsObject;
  static serializeBinaryToWriter(message: GetInspectorByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInspectorByIdRes;
  static deserializeBinaryFromReader(message: GetInspectorByIdRes, reader: jspb.BinaryReader): GetInspectorByIdRes;
}

export namespace GetInspectorByIdRes {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

