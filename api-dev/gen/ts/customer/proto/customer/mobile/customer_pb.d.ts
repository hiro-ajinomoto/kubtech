import * as jspb from 'google-protobuf'

import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';


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

  getPhoneVerified(): proto_customer_mobile_base_pb.Boolean;
  setPhoneVerified(value: proto_customer_mobile_base_pb.Boolean): UserInfo;

  getEmailVerified(): proto_customer_mobile_base_pb.Boolean;
  setEmailVerified(value: proto_customer_mobile_base_pb.Boolean): UserInfo;

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

  getIsSocialAccount(): proto_customer_mobile_base_pb.Boolean;
  setIsSocialAccount(value: proto_customer_mobile_base_pb.Boolean): UserInfo;

  getSocialType(): SocialType;
  setSocialType(value: SocialType): UserInfo;

  getHashCode(): string;
  setHashCode(value: string): UserInfo;

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
    phoneVerified: proto_customer_mobile_base_pb.Boolean,
    emailVerified: proto_customer_mobile_base_pb.Boolean,
    phoneNumber: string,
    phoneCode: string,
    profilePicture: string,
    description: string,
    inviterId: string,
    birthday: number,
    gender: Gender,
    partnershipId: string,
    isSocialAccount: proto_customer_mobile_base_pb.Boolean,
    socialType: SocialType,
    hashCode: string,
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

export class UpdateMeReq extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateMeReq;

  getProfilePicture(): string;
  setProfilePicture(value: string): UpdateMeReq;

  getDescription(): string;
  setDescription(value: string): UpdateMeReq;

  getInviterId(): string;
  setInviterId(value: string): UpdateMeReq;

  getBirthday(): number;
  setBirthday(value: number): UpdateMeReq;

  getGender(): Gender;
  setGender(value: Gender): UpdateMeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeReq): UpdateMeReq.AsObject;
  static serializeBinaryToWriter(message: UpdateMeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeReq;
  static deserializeBinaryFromReader(message: UpdateMeReq, reader: jspb.BinaryReader): UpdateMeReq;
}

export namespace UpdateMeReq {
  export type AsObject = {
    name: string,
    profilePicture: string,
    description: string,
    inviterId: string,
    birthday: number,
    gender: Gender,
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

export class DeleteUserReq extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): DeleteUserReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserReq): DeleteUserReq.AsObject;
  static serializeBinaryToWriter(message: DeleteUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserReq;
  static deserializeBinaryFromReader(message: DeleteUserReq, reader: jspb.BinaryReader): DeleteUserReq;
}

export namespace DeleteUserReq {
  export type AsObject = {
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

export class GetListUserByIdsReq extends jspb.Message {
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): GetListUserByIdsReq;
  clearUserIdsList(): GetListUserByIdsReq;
  addUserIds(value: string, index?: number): GetListUserByIdsReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetListUserByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListUserByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetListUserByIdsReq): GetListUserByIdsReq.AsObject;
  static serializeBinaryToWriter(message: GetListUserByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListUserByIdsReq;
  static deserializeBinaryFromReader(message: GetListUserByIdsReq, reader: jspb.BinaryReader): GetListUserByIdsReq;
}

export namespace GetListUserByIdsReq {
  export type AsObject = {
    userIdsList: Array<string>,
    partnershipId: string,
  }
}

export class GetListUserReq extends jspb.Message {
  getPagination(): proto_customer_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_customer_mobile_base_pb.PaginationReq): GetListUserReq;
  hasPagination(): boolean;
  clearPagination(): GetListUserReq;

  getOrderByList(): Array<proto_customer_mobile_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_customer_mobile_base_pb.OrderByItem>): GetListUserReq;
  clearOrderByList(): GetListUserReq;
  addOrderBy(value?: proto_customer_mobile_base_pb.OrderByItem, index?: number): proto_customer_mobile_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetListUserReq): GetListUserReq.AsObject;
  static serializeBinaryToWriter(message: GetListUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListUserReq;
  static deserializeBinaryFromReader(message: GetListUserReq, reader: jspb.BinaryReader): GetListUserReq;
}

export namespace GetListUserReq {
  export type AsObject = {
    pagination?: proto_customer_mobile_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_customer_mobile_base_pb.OrderByItem.AsObject>,
  }
}

export class CheckAlreadyExistEmailReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CheckAlreadyExistEmailReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): CheckAlreadyExistEmailReq;

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
    partnershipId: string,
  }
}

export class CheckAlreadyExistPhoneReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): CheckAlreadyExistPhoneReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CheckAlreadyExistPhoneReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): CheckAlreadyExistPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAlreadyExistPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAlreadyExistPhoneReq): CheckAlreadyExistPhoneReq.AsObject;
  static serializeBinaryToWriter(message: CheckAlreadyExistPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAlreadyExistPhoneReq;
  static deserializeBinaryFromReader(message: CheckAlreadyExistPhoneReq, reader: jspb.BinaryReader): CheckAlreadyExistPhoneReq;
}

export namespace CheckAlreadyExistPhoneReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    partnershipId: string,
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

export class GetListUserByIdsRes extends jspb.Message {
  getUsersList(): Array<UserSimpleInfo>;
  setUsersList(value: Array<UserSimpleInfo>): GetListUserByIdsRes;
  clearUsersList(): GetListUserByIdsRes;
  addUsers(value?: UserSimpleInfo, index?: number): UserSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListUserByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetListUserByIdsRes): GetListUserByIdsRes.AsObject;
  static serializeBinaryToWriter(message: GetListUserByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListUserByIdsRes;
  static deserializeBinaryFromReader(message: GetListUserByIdsRes, reader: jspb.BinaryReader): GetListUserByIdsRes;
}

export namespace GetListUserByIdsRes {
  export type AsObject = {
    usersList: Array<UserSimpleInfo.AsObject>,
  }
}

export class GetListUserRes extends jspb.Message {
  getUsersList(): Array<UserSimpleInfo>;
  setUsersList(value: Array<UserSimpleInfo>): GetListUserRes;
  clearUsersList(): GetListUserRes;
  addUsers(value?: UserSimpleInfo, index?: number): UserSimpleInfo;

  getPagination(): proto_customer_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_customer_mobile_base_pb.PaginationRes): GetListUserRes;
  hasPagination(): boolean;
  clearPagination(): GetListUserRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetListUserRes): GetListUserRes.AsObject;
  static serializeBinaryToWriter(message: GetListUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListUserRes;
  static deserializeBinaryFromReader(message: GetListUserRes, reader: jspb.BinaryReader): GetListUserRes;
}

export namespace GetListUserRes {
  export type AsObject = {
    usersList: Array<UserSimpleInfo.AsObject>,
    pagination?: proto_customer_mobile_base_pb.PaginationRes.AsObject,
  }
}

export enum Gender { 
  GENDER_INVALID = 0,
  GENDER_MALE = 1,
  GENDER_FEMALE = 2,
  GENDER_OTHER = 3,
}
export enum SocialType { 
  SOCIAL_TYPE_INVALID = 0,
  SOCIAL_TYPE_FACEBOOK = 1,
  SOCIAL_TYPE_GOOGLE = 2,
  SOCIAL_TYPE_APPLE = 3,
}
