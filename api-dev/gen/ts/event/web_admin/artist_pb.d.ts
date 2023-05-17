import * as jspb from 'google-protobuf'

import * as event_web_admin_base_pb from '../../event/web_admin/base_pb';


export class ArtistBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ArtistBasicInfo;

  getAvatar(): string;
  setAvatar(value: string): ArtistBasicInfo;

  getTypeList(): Array<ArtistTypeInfo>;
  setTypeList(value: Array<ArtistTypeInfo>): ArtistBasicInfo;
  clearTypeList(): ArtistBasicInfo;
  addType(value?: ArtistTypeInfo, index?: number): ArtistTypeInfo;

  getPersonalUrl(): string;
  setPersonalUrl(value: string): ArtistBasicInfo;

  getFacebookUrl(): string;
  setFacebookUrl(value: string): ArtistBasicInfo;

  getInstagramUrl(): string;
  setInstagramUrl(value: string): ArtistBasicInfo;

  getIntro(): string;
  setIntro(value: string): ArtistBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtistBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ArtistBasicInfo): ArtistBasicInfo.AsObject;
  static serializeBinaryToWriter(message: ArtistBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtistBasicInfo;
  static deserializeBinaryFromReader(message: ArtistBasicInfo, reader: jspb.BinaryReader): ArtistBasicInfo;
}

export namespace ArtistBasicInfo {
  export type AsObject = {
    name: string,
    avatar: string,
    typeList: Array<ArtistTypeInfo.AsObject>,
    personalUrl: string,
    facebookUrl: string,
    instagramUrl: string,
    intro: string,
  }
}

export class ArtistListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ArtistListInfo;

  getName(): string;
  setName(value: string): ArtistListInfo;

  getAvatar(): string;
  setAvatar(value: string): ArtistListInfo;

  getTypeList(): Array<ArtistTypeInfo>;
  setTypeList(value: Array<ArtistTypeInfo>): ArtistListInfo;
  clearTypeList(): ArtistListInfo;
  addType(value?: ArtistTypeInfo, index?: number): ArtistTypeInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ArtistListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ArtistListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): ArtistListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): ArtistListInfo;

  getIntro(): string;
  setIntro(value: string): ArtistListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtistListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ArtistListInfo): ArtistListInfo.AsObject;
  static serializeBinaryToWriter(message: ArtistListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtistListInfo;
  static deserializeBinaryFromReader(message: ArtistListInfo, reader: jspb.BinaryReader): ArtistListInfo;
}

export namespace ArtistListInfo {
  export type AsObject = {
    id: string,
    name: string,
    avatar: string,
    typeList: Array<ArtistTypeInfo.AsObject>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    intro: string,
  }
}

export class ArtistTypeInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ArtistTypeInfo;

  getName(): string;
  setName(value: string): ArtistTypeInfo;

  getIcon(): string;
  setIcon(value: string): ArtistTypeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtistTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ArtistTypeInfo): ArtistTypeInfo.AsObject;
  static serializeBinaryToWriter(message: ArtistTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtistTypeInfo;
  static deserializeBinaryFromReader(message: ArtistTypeInfo, reader: jspb.BinaryReader): ArtistTypeInfo;
}

export namespace ArtistTypeInfo {
  export type AsObject = {
    id: string,
    name: string,
    icon: string,
  }
}

export class CreateArtistReq extends jspb.Message {
  getName(): string;
  setName(value: string): CreateArtistReq;

  getAvatar(): string;
  setAvatar(value: string): CreateArtistReq;

  getTypeIdsList(): Array<string>;
  setTypeIdsList(value: Array<string>): CreateArtistReq;
  clearTypeIdsList(): CreateArtistReq;
  addTypeIds(value: string, index?: number): CreateArtistReq;

  getPersonalUrl(): string;
  setPersonalUrl(value: string): CreateArtistReq;

  getFacebookUrl(): string;
  setFacebookUrl(value: string): CreateArtistReq;

  getInstagramUrl(): string;
  setInstagramUrl(value: string): CreateArtistReq;

  getIntro(): string;
  setIntro(value: string): CreateArtistReq;

  getLang(): string;
  setLang(value: string): CreateArtistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateArtistReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateArtistReq): CreateArtistReq.AsObject;
  static serializeBinaryToWriter(message: CreateArtistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateArtistReq;
  static deserializeBinaryFromReader(message: CreateArtistReq, reader: jspb.BinaryReader): CreateArtistReq;
}

export namespace CreateArtistReq {
  export type AsObject = {
    name: string,
    avatar: string,
    typeIdsList: Array<string>,
    personalUrl: string,
    facebookUrl: string,
    instagramUrl: string,
    intro: string,
    lang: string,
  }
}

export class UpdateArtistReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateArtistReq;

  getName(): string;
  setName(value: string): UpdateArtistReq;

  getAvatar(): string;
  setAvatar(value: string): UpdateArtistReq;

  getTypeIdsList(): Array<string>;
  setTypeIdsList(value: Array<string>): UpdateArtistReq;
  clearTypeIdsList(): UpdateArtistReq;
  addTypeIds(value: string, index?: number): UpdateArtistReq;

  getPersonalUrl(): string;
  setPersonalUrl(value: string): UpdateArtistReq;

  getFacebookUrl(): string;
  setFacebookUrl(value: string): UpdateArtistReq;

  getInstagramUrl(): string;
  setInstagramUrl(value: string): UpdateArtistReq;

  getIntro(): string;
  setIntro(value: string): UpdateArtistReq;

  getLang(): string;
  setLang(value: string): UpdateArtistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateArtistReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateArtistReq): UpdateArtistReq.AsObject;
  static serializeBinaryToWriter(message: UpdateArtistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateArtistReq;
  static deserializeBinaryFromReader(message: UpdateArtistReq, reader: jspb.BinaryReader): UpdateArtistReq;
}

export namespace UpdateArtistReq {
  export type AsObject = {
    id: string,
    name: string,
    avatar: string,
    typeIdsList: Array<string>,
    personalUrl: string,
    facebookUrl: string,
    instagramUrl: string,
    intro: string,
    lang: string,
  }
}

export class DeleteArtistReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteArtistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteArtistReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteArtistReq): DeleteArtistReq.AsObject;
  static serializeBinaryToWriter(message: DeleteArtistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteArtistReq;
  static deserializeBinaryFromReader(message: DeleteArtistReq, reader: jspb.BinaryReader): DeleteArtistReq;
}

export namespace DeleteArtistReq {
  export type AsObject = {
    id: string,
  }
}

export class ListArtistReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListArtistReq;

  getPagination(): event_web_admin_base_pb.PaginationReq | undefined;
  setPagination(value?: event_web_admin_base_pb.PaginationReq): ListArtistReq;
  hasPagination(): boolean;
  clearPagination(): ListArtistReq;

  getOrderByList(): Array<event_web_admin_base_pb.OrderByItem>;
  setOrderByList(value: Array<event_web_admin_base_pb.OrderByItem>): ListArtistReq;
  clearOrderByList(): ListArtistReq;
  addOrderBy(value?: event_web_admin_base_pb.OrderByItem, index?: number): event_web_admin_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArtistReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListArtistReq): ListArtistReq.AsObject;
  static serializeBinaryToWriter(message: ListArtistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArtistReq;
  static deserializeBinaryFromReader(message: ListArtistReq, reader: jspb.BinaryReader): ListArtistReq;
}

export namespace ListArtistReq {
  export type AsObject = {
    searchText: string,
    pagination?: event_web_admin_base_pb.PaginationReq.AsObject,
    orderByList: Array<event_web_admin_base_pb.OrderByItem.AsObject>,
  }
}

export class GetArtistDetailReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetArtistDetailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArtistDetailReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetArtistDetailReq): GetArtistDetailReq.AsObject;
  static serializeBinaryToWriter(message: GetArtistDetailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArtistDetailReq;
  static deserializeBinaryFromReader(message: GetArtistDetailReq, reader: jspb.BinaryReader): GetArtistDetailReq;
}

export namespace GetArtistDetailReq {
  export type AsObject = {
    id: string,
  }
}

export class CreateArtistRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateArtistRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateArtistRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateArtistRes): CreateArtistRes.AsObject;
  static serializeBinaryToWriter(message: CreateArtistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateArtistRes;
  static deserializeBinaryFromReader(message: CreateArtistRes, reader: jspb.BinaryReader): CreateArtistRes;
}

export namespace CreateArtistRes {
  export type AsObject = {
    id: string,
  }
}

export class GetArtistDetailRes extends jspb.Message {
  getId(): string;
  setId(value: string): GetArtistDetailRes;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetArtistDetailRes;

  getInfo(): ArtistBasicInfo | undefined;
  setInfo(value?: ArtistBasicInfo): GetArtistDetailRes;
  hasInfo(): boolean;
  clearInfo(): GetArtistDetailRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): GetArtistDetailRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): GetArtistDetailRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): GetArtistDetailRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): GetArtistDetailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArtistDetailRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetArtistDetailRes): GetArtistDetailRes.AsObject;
  static serializeBinaryToWriter(message: GetArtistDetailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArtistDetailRes;
  static deserializeBinaryFromReader(message: GetArtistDetailRes, reader: jspb.BinaryReader): GetArtistDetailRes;
}

export namespace GetArtistDetailRes {
  export type AsObject = {
    id: string,
    partnershipId: string,
    info?: ArtistBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListArtistRes extends jspb.Message {
  getInfoList(): Array<ArtistListInfo>;
  setInfoList(value: Array<ArtistListInfo>): ListArtistRes;
  clearInfoList(): ListArtistRes;
  addInfo(value?: ArtistListInfo, index?: number): ArtistListInfo;

  getPagination(): event_web_admin_base_pb.PaginationRes | undefined;
  setPagination(value?: event_web_admin_base_pb.PaginationRes): ListArtistRes;
  hasPagination(): boolean;
  clearPagination(): ListArtistRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArtistRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListArtistRes): ListArtistRes.AsObject;
  static serializeBinaryToWriter(message: ListArtistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArtistRes;
  static deserializeBinaryFromReader(message: ListArtistRes, reader: jspb.BinaryReader): ListArtistRes;
}

export namespace ListArtistRes {
  export type AsObject = {
    infoList: Array<ArtistListInfo.AsObject>,
    pagination?: event_web_admin_base_pb.PaginationRes.AsObject,
  }
}

