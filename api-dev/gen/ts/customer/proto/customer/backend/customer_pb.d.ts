import * as jspb from 'google-protobuf'

import * as proto_customer_backend_base_pb from '../../../proto/customer/backend/base_pb';


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

  getPhoneVerified(): proto_customer_backend_base_pb.Boolean;
  setPhoneVerified(value: proto_customer_backend_base_pb.Boolean): UserInfo;

  getEmailVerified(): proto_customer_backend_base_pb.Boolean;
  setEmailVerified(value: proto_customer_backend_base_pb.Boolean): UserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): UserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserInfo;

  getDescription(): string;
  setDescription(value: string): UserInfo;

  getInviterId(): string;
  setInviterId(value: string): UserInfo;

  getBirthday(): number;
  setBirthday(value: number): UserInfo;

  getGender(): Gender;
  setGender(value: Gender): UserInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): UserInfo;

  getIsSocialAccount(): proto_customer_backend_base_pb.Boolean;
  setIsSocialAccount(value: proto_customer_backend_base_pb.Boolean): UserInfo;

  getSocialType(): SocialType;
  setSocialType(value: SocialType): UserInfo;

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
    phoneVerified: proto_customer_backend_base_pb.Boolean,
    emailVerified: proto_customer_backend_base_pb.Boolean,
    phoneNumber: string,
    phoneCode: string,
    profilePicture: string,
    description: string,
    inviterId: string,
    birthday: number,
    gender: Gender,
    partnershipId: string,
    isSocialAccount: proto_customer_backend_base_pb.Boolean,
    socialType: SocialType,
  }
}

export class UserSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserSimpleInfo;

  getName(): string;
  setName(value: string): UserSimpleInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserSimpleInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserSimpleInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): UserSimpleInfo;

  getBirthday(): number;
  setBirthday(value: number): UserSimpleInfo;

  getGender(): Gender;
  setGender(value: Gender): UserSimpleInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): UserSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserSimpleInfo): UserSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: UserSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSimpleInfo;
  static deserializeBinaryFromReader(message: UserSimpleInfo, reader: jspb.BinaryReader): UserSimpleInfo;
}

export namespace UserSimpleInfo {
  export type AsObject = {
    id: string,
    name: string,
    profilePicture: string,
    phoneNumber: string,
    phoneCode: string,
    birthday: number,
    gender: Gender,
    partnershipId: string,
  }
}

export class StreamCustomersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCustomersReq.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCustomersReq): StreamCustomersReq.AsObject;
  static serializeBinaryToWriter(message: StreamCustomersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCustomersReq;
  static deserializeBinaryFromReader(message: StreamCustomersReq, reader: jspb.BinaryReader): StreamCustomersReq;
}

export namespace StreamCustomersReq {
  export type AsObject = {
  }
}

export class PushNotificationAllCustomersReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): PushNotificationAllCustomersReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotificationAllCustomersReq.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotificationAllCustomersReq): PushNotificationAllCustomersReq.AsObject;
  static serializeBinaryToWriter(message: PushNotificationAllCustomersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotificationAllCustomersReq;
  static deserializeBinaryFromReader(message: PushNotificationAllCustomersReq, reader: jspb.BinaryReader): PushNotificationAllCustomersReq;
}

export namespace PushNotificationAllCustomersReq {
  export type AsObject = {
    partnershipId: string,
  }
}

export class GetUserByIdReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetUserByIdReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetUserByIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByIdReq): GetUserByIdReq.AsObject;
  static serializeBinaryToWriter(message: GetUserByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByIdReq;
  static deserializeBinaryFromReader(message: GetUserByIdReq, reader: jspb.BinaryReader): GetUserByIdReq;
}

export namespace GetUserByIdReq {
  export type AsObject = {
    userId: string,
    partnershipId: string,
  }
}

export class GetUserReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): GetUserReq;

  getPhoneCode(): string;
  setPhoneCode(value: string): GetUserReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): GetUserReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetUserReq;

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
    phoneCode: string,
    phoneNumber: string,
    partnershipId: string,
  }
}

export class GetUserByIdRes extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): GetUserByIdRes;
  hasUserInfo(): boolean;
  clearUserInfo(): GetUserByIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByIdRes): GetUserByIdRes.AsObject;
  static serializeBinaryToWriter(message: GetUserByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByIdRes;
  static deserializeBinaryFromReader(message: GetUserByIdRes, reader: jspb.BinaryReader): GetUserByIdRes;
}

export namespace GetUserByIdRes {
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

export enum SocialType { 
  SOCIAL_TYPE_INVALID = 0,
  SOCIAL_TYPE_FACEBOOK = 1,
  SOCIAL_TYPE_GOOGLE = 2,
  SOCIAL_TYPE_APPLE = 3,
}
export enum Gender { 
  GENDER_INVALID = 0,
  GENDER_MALE = 1,
  GENDER_FEMALE = 2,
  GENDER_OTHER = 3,
}
