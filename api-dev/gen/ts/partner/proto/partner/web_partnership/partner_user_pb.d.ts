import * as jspb from 'google-protobuf'

import * as proto_partner_web_partnership_base_pb from '../../../proto/partner/web_partnership/base_pb';


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

export class CreatePartnerUserReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): CreatePartnerUserReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CreatePartnerUserReq;

  getPassword(): string;
  setPassword(value: string): CreatePartnerUserReq;

  getName(): string;
  setName(value: string): CreatePartnerUserReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnerUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnerUserReq): CreatePartnerUserReq.AsObject;
  static serializeBinaryToWriter(message: CreatePartnerUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnerUserReq;
  static deserializeBinaryFromReader(message: CreatePartnerUserReq, reader: jspb.BinaryReader): CreatePartnerUserReq;
}

export namespace CreatePartnerUserReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    password: string,
    name: string,
  }
}

export class RetrievePartnerUserReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrievePartnerUserReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePartnerUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePartnerUserReq): RetrievePartnerUserReq.AsObject;
  static serializeBinaryToWriter(message: RetrievePartnerUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePartnerUserReq;
  static deserializeBinaryFromReader(message: RetrievePartnerUserReq, reader: jspb.BinaryReader): RetrievePartnerUserReq;
}

export namespace RetrievePartnerUserReq {
  export type AsObject = {
    id: string,
  }
}

export class ListPartnerUserFilter extends jspb.Message {
  getIsDisable(): boolean;
  setIsDisable(value: boolean): ListPartnerUserFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnerUserFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnerUserFilter): ListPartnerUserFilter.AsObject;
  static serializeBinaryToWriter(message: ListPartnerUserFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnerUserFilter;
  static deserializeBinaryFromReader(message: ListPartnerUserFilter, reader: jspb.BinaryReader): ListPartnerUserFilter;
}

export namespace ListPartnerUserFilter {
  export type AsObject = {
    isDisable: boolean,
  }
}

export class ListPartnerUserReq extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): ListPartnerUserReq;

  getPagination(): proto_partner_web_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partner_web_partnership_base_pb.PaginationReq): ListPartnerUserReq;
  hasPagination(): boolean;
  clearPagination(): ListPartnerUserReq;

  getOrderByList(): Array<proto_partner_web_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partner_web_partnership_base_pb.OrderByItem>): ListPartnerUserReq;
  clearOrderByList(): ListPartnerUserReq;
  addOrderBy(value?: proto_partner_web_partnership_base_pb.OrderByItem, index?: number): proto_partner_web_partnership_base_pb.OrderByItem;

  getPartnershipId(): string;
  setPartnershipId(value: string): ListPartnerUserReq;

  getFilter(): ListPartnerUserFilter | undefined;
  setFilter(value?: ListPartnerUserFilter): ListPartnerUserReq;
  hasFilter(): boolean;
  clearFilter(): ListPartnerUserReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnerUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnerUserReq): ListPartnerUserReq.AsObject;
  static serializeBinaryToWriter(message: ListPartnerUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnerUserReq;
  static deserializeBinaryFromReader(message: ListPartnerUserReq, reader: jspb.BinaryReader): ListPartnerUserReq;
}

export namespace ListPartnerUserReq {
  export type AsObject = {
    search: string,
    pagination?: proto_partner_web_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partner_web_partnership_base_pb.OrderByItem.AsObject>,
    partnershipId: string,
    filter?: ListPartnerUserFilter.AsObject,
  }
}

export class DisablePartnerUserReq extends jspb.Message {
  getId(): string;
  setId(value: string): DisablePartnerUserReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisablePartnerUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: DisablePartnerUserReq): DisablePartnerUserReq.AsObject;
  static serializeBinaryToWriter(message: DisablePartnerUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisablePartnerUserReq;
  static deserializeBinaryFromReader(message: DisablePartnerUserReq, reader: jspb.BinaryReader): DisablePartnerUserReq;
}

export namespace DisablePartnerUserReq {
  export type AsObject = {
    id: string,
  }
}

export class DeletePartnerUserReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeletePartnerUserReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePartnerUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePartnerUserReq): DeletePartnerUserReq.AsObject;
  static serializeBinaryToWriter(message: DeletePartnerUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePartnerUserReq;
  static deserializeBinaryFromReader(message: DeletePartnerUserReq, reader: jspb.BinaryReader): DeletePartnerUserReq;
}

export namespace DeletePartnerUserReq {
  export type AsObject = {
    id: string,
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

export class CreatePartnerUserRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreatePartnerUserRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnerUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnerUserRes): CreatePartnerUserRes.AsObject;
  static serializeBinaryToWriter(message: CreatePartnerUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnerUserRes;
  static deserializeBinaryFromReader(message: CreatePartnerUserRes, reader: jspb.BinaryReader): CreatePartnerUserRes;
}

export namespace CreatePartnerUserRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrievePartnerUserRes extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): RetrievePartnerUserRes;
  hasUserInfo(): boolean;
  clearUserInfo(): RetrievePartnerUserRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePartnerUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePartnerUserRes): RetrievePartnerUserRes.AsObject;
  static serializeBinaryToWriter(message: RetrievePartnerUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePartnerUserRes;
  static deserializeBinaryFromReader(message: RetrievePartnerUserRes, reader: jspb.BinaryReader): RetrievePartnerUserRes;
}

export namespace RetrievePartnerUserRes {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

export class ListPartnerUserRes extends jspb.Message {
  getUserInfosList(): Array<UserInfo>;
  setUserInfosList(value: Array<UserInfo>): ListPartnerUserRes;
  clearUserInfosList(): ListPartnerUserRes;
  addUserInfos(value?: UserInfo, index?: number): UserInfo;

  getPagination(): proto_partner_web_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partner_web_partnership_base_pb.PaginationRes): ListPartnerUserRes;
  hasPagination(): boolean;
  clearPagination(): ListPartnerUserRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnerUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnerUserRes): ListPartnerUserRes.AsObject;
  static serializeBinaryToWriter(message: ListPartnerUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnerUserRes;
  static deserializeBinaryFromReader(message: ListPartnerUserRes, reader: jspb.BinaryReader): ListPartnerUserRes;
}

export namespace ListPartnerUserRes {
  export type AsObject = {
    userInfosList: Array<UserInfo.AsObject>,
    pagination?: proto_partner_web_partnership_base_pb.PaginationRes.AsObject,
  }
}

