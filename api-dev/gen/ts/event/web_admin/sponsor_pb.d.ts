import * as jspb from 'google-protobuf'

import * as event_web_admin_base_pb from '../../event/web_admin/base_pb';


export class SponsorBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SponsorBasicInfo;

  getCover(): string;
  setCover(value: string): SponsorBasicInfo;

  getAvatar(): string;
  setAvatar(value: string): SponsorBasicInfo;

  getDetail(): string;
  setDetail(value: string): SponsorBasicInfo;

  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): SponsorBasicInfo;
  clearUrlsList(): SponsorBasicInfo;
  addUrls(value: string, index?: number): SponsorBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorBasicInfo): SponsorBasicInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorBasicInfo;
  static deserializeBinaryFromReader(message: SponsorBasicInfo, reader: jspb.BinaryReader): SponsorBasicInfo;
}

export namespace SponsorBasicInfo {
  export type AsObject = {
    name: string,
    cover: string,
    avatar: string,
    detail: string,
    urlsList: Array<string>,
  }
}

export class SponsorListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SponsorListInfo;

  getInfo(): SponsorBasicInfo | undefined;
  setInfo(value?: SponsorBasicInfo): SponsorListInfo;
  hasInfo(): boolean;
  clearInfo(): SponsorListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): SponsorListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SponsorListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SponsorListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SponsorListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorListInfo): SponsorListInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorListInfo;
  static deserializeBinaryFromReader(message: SponsorListInfo, reader: jspb.BinaryReader): SponsorListInfo;
}

export namespace SponsorListInfo {
  export type AsObject = {
    id: string,
    info?: SponsorBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class CreateSponsorReq extends jspb.Message {
  getInfo(): SponsorBasicInfo | undefined;
  setInfo(value?: SponsorBasicInfo): CreateSponsorReq;
  hasInfo(): boolean;
  clearInfo(): CreateSponsorReq;

  getLang(): string;
  setLang(value: string): CreateSponsorReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSponsorReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSponsorReq): CreateSponsorReq.AsObject;
  static serializeBinaryToWriter(message: CreateSponsorReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSponsorReq;
  static deserializeBinaryFromReader(message: CreateSponsorReq, reader: jspb.BinaryReader): CreateSponsorReq;
}

export namespace CreateSponsorReq {
  export type AsObject = {
    info?: SponsorBasicInfo.AsObject,
    lang: string,
  }
}

export class UpdateSponsorReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSponsorReq;

  getInfo(): SponsorBasicInfo | undefined;
  setInfo(value?: SponsorBasicInfo): UpdateSponsorReq;
  hasInfo(): boolean;
  clearInfo(): UpdateSponsorReq;

  getLang(): string;
  setLang(value: string): UpdateSponsorReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSponsorReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSponsorReq): UpdateSponsorReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSponsorReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSponsorReq;
  static deserializeBinaryFromReader(message: UpdateSponsorReq, reader: jspb.BinaryReader): UpdateSponsorReq;
}

export namespace UpdateSponsorReq {
  export type AsObject = {
    id: string,
    info?: SponsorBasicInfo.AsObject,
    lang: string,
  }
}

export class DeleteSponsorReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSponsorReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSponsorReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSponsorReq): DeleteSponsorReq.AsObject;
  static serializeBinaryToWriter(message: DeleteSponsorReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSponsorReq;
  static deserializeBinaryFromReader(message: DeleteSponsorReq, reader: jspb.BinaryReader): DeleteSponsorReq;
}

export namespace DeleteSponsorReq {
  export type AsObject = {
    id: string,
  }
}

export class ListSponsorReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListSponsorReq;

  getPagination(): event_web_admin_base_pb.PaginationReq | undefined;
  setPagination(value?: event_web_admin_base_pb.PaginationReq): ListSponsorReq;
  hasPagination(): boolean;
  clearPagination(): ListSponsorReq;

  getOrderByList(): Array<event_web_admin_base_pb.OrderByItem>;
  setOrderByList(value: Array<event_web_admin_base_pb.OrderByItem>): ListSponsorReq;
  clearOrderByList(): ListSponsorReq;
  addOrderBy(value?: event_web_admin_base_pb.OrderByItem, index?: number): event_web_admin_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSponsorReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSponsorReq): ListSponsorReq.AsObject;
  static serializeBinaryToWriter(message: ListSponsorReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSponsorReq;
  static deserializeBinaryFromReader(message: ListSponsorReq, reader: jspb.BinaryReader): ListSponsorReq;
}

export namespace ListSponsorReq {
  export type AsObject = {
    searchText: string,
    pagination?: event_web_admin_base_pb.PaginationReq.AsObject,
    orderByList: Array<event_web_admin_base_pb.OrderByItem.AsObject>,
  }
}

export class GetSponsorDetailReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetSponsorDetailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSponsorDetailReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSponsorDetailReq): GetSponsorDetailReq.AsObject;
  static serializeBinaryToWriter(message: GetSponsorDetailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSponsorDetailReq;
  static deserializeBinaryFromReader(message: GetSponsorDetailReq, reader: jspb.BinaryReader): GetSponsorDetailReq;
}

export namespace GetSponsorDetailReq {
  export type AsObject = {
    id: string,
  }
}

export class CreateSponsorRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSponsorRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSponsorRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSponsorRes): CreateSponsorRes.AsObject;
  static serializeBinaryToWriter(message: CreateSponsorRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSponsorRes;
  static deserializeBinaryFromReader(message: CreateSponsorRes, reader: jspb.BinaryReader): CreateSponsorRes;
}

export namespace CreateSponsorRes {
  export type AsObject = {
    id: string,
  }
}

export class GetSponsorDetailRes extends jspb.Message {
  getId(): string;
  setId(value: string): GetSponsorDetailRes;

  getInfo(): SponsorBasicInfo | undefined;
  setInfo(value?: SponsorBasicInfo): GetSponsorDetailRes;
  hasInfo(): boolean;
  clearInfo(): GetSponsorDetailRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): GetSponsorDetailRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): GetSponsorDetailRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): GetSponsorDetailRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): GetSponsorDetailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSponsorDetailRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSponsorDetailRes): GetSponsorDetailRes.AsObject;
  static serializeBinaryToWriter(message: GetSponsorDetailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSponsorDetailRes;
  static deserializeBinaryFromReader(message: GetSponsorDetailRes, reader: jspb.BinaryReader): GetSponsorDetailRes;
}

export namespace GetSponsorDetailRes {
  export type AsObject = {
    id: string,
    info?: SponsorBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListSponsorRes extends jspb.Message {
  getInfoList(): Array<SponsorListInfo>;
  setInfoList(value: Array<SponsorListInfo>): ListSponsorRes;
  clearInfoList(): ListSponsorRes;
  addInfo(value?: SponsorListInfo, index?: number): SponsorListInfo;

  getPagination(): event_web_admin_base_pb.PaginationRes | undefined;
  setPagination(value?: event_web_admin_base_pb.PaginationRes): ListSponsorRes;
  hasPagination(): boolean;
  clearPagination(): ListSponsorRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSponsorRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSponsorRes): ListSponsorRes.AsObject;
  static serializeBinaryToWriter(message: ListSponsorRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSponsorRes;
  static deserializeBinaryFromReader(message: ListSponsorRes, reader: jspb.BinaryReader): ListSponsorRes;
}

export namespace ListSponsorRes {
  export type AsObject = {
    infoList: Array<SponsorListInfo.AsObject>,
    pagination?: event_web_admin_base_pb.PaginationRes.AsObject,
  }
}

