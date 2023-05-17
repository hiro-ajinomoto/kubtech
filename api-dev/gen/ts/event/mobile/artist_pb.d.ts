import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';
import * as event_mobile_base_pb from '../../event/mobile/base_pb';


export class ArtistInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ArtistInfo;

  getName(): string;
  setName(value: string): ArtistInfo;

  getAvatar(): string;
  setAvatar(value: string): ArtistInfo;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): ArtistInfo;
  clearRolesList(): ArtistInfo;
  addRoles(value: string, index?: number): ArtistInfo;

  getContactUrlsList(): Array<event_mobile_base_pb.Url>;
  setContactUrlsList(value: Array<event_mobile_base_pb.Url>): ArtistInfo;
  clearContactUrlsList(): ArtistInfo;
  addContactUrls(value?: event_mobile_base_pb.Url, index?: number): event_mobile_base_pb.Url;

  getIntro(): string;
  setIntro(value: string): ArtistInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtistInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ArtistInfo): ArtistInfo.AsObject;
  static serializeBinaryToWriter(message: ArtistInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtistInfo;
  static deserializeBinaryFromReader(message: ArtistInfo, reader: jspb.BinaryReader): ArtistInfo;
}

export namespace ArtistInfo {
  export type AsObject = {
    id: string,
    name: string,
    avatar: string,
    rolesList: Array<string>,
    contactUrlsList: Array<event_mobile_base_pb.Url.AsObject>,
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

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): ArtistListInfo;
  clearRolesList(): ArtistListInfo;
  addRoles(value: string, index?: number): ArtistListInfo;

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

  getCover(): string;
  setCover(value: string): ArtistListInfo;

  getContactUrlsList(): Array<event_mobile_base_pb.Url>;
  setContactUrlsList(value: Array<event_mobile_base_pb.Url>): ArtistListInfo;
  clearContactUrlsList(): ArtistListInfo;
  addContactUrls(value?: event_mobile_base_pb.Url, index?: number): event_mobile_base_pb.Url;

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
    rolesList: Array<string>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    intro: string,
    cover: string,
    contactUrlsList: Array<event_mobile_base_pb.Url.AsObject>,
  }
}

export class ListArtistReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListArtistReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListArtistReq;
  hasPagination(): boolean;
  clearPagination(): ListArtistReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): ListArtistReq;
  clearOrderByList(): ListArtistReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

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
    pagination?: base_base_pb.PaginationReq.AsObject,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
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

export class GetArtistDetailRes extends jspb.Message {
  getInfo(): ArtistInfo | undefined;
  setInfo(value?: ArtistInfo): GetArtistDetailRes;
  hasInfo(): boolean;
  clearInfo(): GetArtistDetailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArtistDetailRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetArtistDetailRes): GetArtistDetailRes.AsObject;
  static serializeBinaryToWriter(message: GetArtistDetailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArtistDetailRes;
  static deserializeBinaryFromReader(message: GetArtistDetailRes, reader: jspb.BinaryReader): GetArtistDetailRes;
}

export namespace GetArtistDetailRes {
  export type AsObject = {
    info?: ArtistInfo.AsObject,
  }
}

export class ListArtistRes extends jspb.Message {
  getItemsList(): Array<ArtistListInfo>;
  setItemsList(value: Array<ArtistListInfo>): ListArtistRes;
  clearItemsList(): ListArtistRes;
  addItems(value?: ArtistListInfo, index?: number): ArtistListInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): ListArtistRes;
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
    itemsList: Array<ArtistListInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

