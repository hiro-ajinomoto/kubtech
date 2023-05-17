import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';
import * as event_web_partnership_base_pb from '../../event/web_partnership/base_pb';


export class SponsorBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SponsorBasicInfo;

  getCover(): string;
  setCover(value: string): SponsorBasicInfo;

  getAvatar(): string;
  setAvatar(value: string): SponsorBasicInfo;

  getIntro(): string;
  setIntro(value: string): SponsorBasicInfo;

  getContactUrlsList(): Array<event_web_partnership_base_pb.Url>;
  setContactUrlsList(value: Array<event_web_partnership_base_pb.Url>): SponsorBasicInfo;
  clearContactUrlsList(): SponsorBasicInfo;
  addContactUrls(value?: event_web_partnership_base_pb.Url, index?: number): event_web_partnership_base_pb.Url;

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
    intro: string,
    contactUrlsList: Array<event_web_partnership_base_pb.Url.AsObject>,
  }
}

export class SponsorInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SponsorInfo;

  getName(): string;
  setName(value: string): SponsorInfo;

  getCover(): string;
  setCover(value: string): SponsorInfo;

  getAvatar(): string;
  setAvatar(value: string): SponsorInfo;

  getIntro(): string;
  setIntro(value: string): SponsorInfo;

  getContactUrlsList(): Array<event_web_partnership_base_pb.Url>;
  setContactUrlsList(value: Array<event_web_partnership_base_pb.Url>): SponsorInfo;
  clearContactUrlsList(): SponsorInfo;
  addContactUrls(value?: event_web_partnership_base_pb.Url, index?: number): event_web_partnership_base_pb.Url;

  getCreatedAt(): number;
  setCreatedAt(value: number): SponsorInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SponsorInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SponsorInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SponsorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorInfo): SponsorInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorInfo;
  static deserializeBinaryFromReader(message: SponsorInfo, reader: jspb.BinaryReader): SponsorInfo;
}

export namespace SponsorInfo {
  export type AsObject = {
    id: string,
    name: string,
    cover: string,
    avatar: string,
    intro: string,
    contactUrlsList: Array<event_web_partnership_base_pb.Url.AsObject>,
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
  }
}

export class UpdateSponsorReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSponsorReq;

  getInfo(): SponsorBasicInfo | undefined;
  setInfo(value?: SponsorBasicInfo): UpdateSponsorReq;
  hasInfo(): boolean;
  clearInfo(): UpdateSponsorReq;

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

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListSponsorReq;
  hasPagination(): boolean;
  clearPagination(): ListSponsorReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): ListSponsorReq;
  clearOrderByList(): ListSponsorReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

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
    pagination?: base_base_pb.PaginationReq.AsObject,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
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

  getName(): string;
  setName(value: string): GetSponsorDetailRes;

  getCover(): string;
  setCover(value: string): GetSponsorDetailRes;

  getAvatar(): string;
  setAvatar(value: string): GetSponsorDetailRes;

  getIntro(): string;
  setIntro(value: string): GetSponsorDetailRes;

  getContactUrlsList(): Array<event_web_partnership_base_pb.Url>;
  setContactUrlsList(value: Array<event_web_partnership_base_pb.Url>): GetSponsorDetailRes;
  clearContactUrlsList(): GetSponsorDetailRes;
  addContactUrls(value?: event_web_partnership_base_pb.Url, index?: number): event_web_partnership_base_pb.Url;

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
    name: string,
    cover: string,
    avatar: string,
    intro: string,
    contactUrlsList: Array<event_web_partnership_base_pb.Url.AsObject>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListSponsorRes extends jspb.Message {
  getItemsList(): Array<SponsorInfo>;
  setItemsList(value: Array<SponsorInfo>): ListSponsorRes;
  clearItemsList(): ListSponsorRes;
  addItems(value?: SponsorInfo, index?: number): SponsorInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): ListSponsorRes;
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
    itemsList: Array<SponsorInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

