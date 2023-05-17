import * as jspb from 'google-protobuf'

import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class NewsBasicInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): NewsBasicInfo;

  getMediasList(): Array<proto_partnership_base_pb.Media>;
  setMediasList(value: Array<proto_partnership_base_pb.Media>): NewsBasicInfo;
  clearMediasList(): NewsBasicInfo;
  addMedias(value?: proto_partnership_base_pb.Media, index?: number): proto_partnership_base_pb.Media;

  getSlug(): string;
  setSlug(value: string): NewsBasicInfo;

  getIntro(): string;
  setIntro(value: string): NewsBasicInfo;

  getDetail(): string;
  setDetail(value: string): NewsBasicInfo;

  getLang(): string;
  setLang(value: string): NewsBasicInfo;

  getType(): ContentType;
  setType(value: ContentType): NewsBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NewsBasicInfo): NewsBasicInfo.AsObject;
  static serializeBinaryToWriter(message: NewsBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsBasicInfo;
  static deserializeBinaryFromReader(message: NewsBasicInfo, reader: jspb.BinaryReader): NewsBasicInfo;
}

export namespace NewsBasicInfo {
  export type AsObject = {
    title: string,
    mediasList: Array<proto_partnership_base_pb.Media.AsObject>,
    slug: string,
    intro: string,
    detail: string,
    lang: string,
    type: ContentType,
  }
}

export class NewstListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): NewstListInfo;

  getTitle(): string;
  setTitle(value: string): NewstListInfo;

  getMediasList(): Array<proto_partnership_base_pb.Media>;
  setMediasList(value: Array<proto_partnership_base_pb.Media>): NewstListInfo;
  clearMediasList(): NewstListInfo;
  addMedias(value?: proto_partnership_base_pb.Media, index?: number): proto_partnership_base_pb.Media;

  getSlug(): string;
  setSlug(value: string): NewstListInfo;

  getIntro(): string;
  setIntro(value: string): NewstListInfo;

  getLang(): string;
  setLang(value: string): NewstListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): NewstListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): NewstListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): NewstListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): NewstListInfo;

  getType(): ContentType;
  setType(value: ContentType): NewstListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewstListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NewstListInfo): NewstListInfo.AsObject;
  static serializeBinaryToWriter(message: NewstListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewstListInfo;
  static deserializeBinaryFromReader(message: NewstListInfo, reader: jspb.BinaryReader): NewstListInfo;
}

export namespace NewstListInfo {
  export type AsObject = {
    id: string,
    title: string,
    mediasList: Array<proto_partnership_base_pb.Media.AsObject>,
    slug: string,
    intro: string,
    lang: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    type: ContentType,
  }
}

export class CreateNewsReq extends jspb.Message {
  getInfo(): NewsBasicInfo | undefined;
  setInfo(value?: NewsBasicInfo): CreateNewsReq;
  hasInfo(): boolean;
  clearInfo(): CreateNewsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewsReq): CreateNewsReq.AsObject;
  static serializeBinaryToWriter(message: CreateNewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewsReq;
  static deserializeBinaryFromReader(message: CreateNewsReq, reader: jspb.BinaryReader): CreateNewsReq;
}

export namespace CreateNewsReq {
  export type AsObject = {
    info?: NewsBasicInfo.AsObject,
  }
}

export class UpdateNewsReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateNewsReq;

  getInfo(): NewsBasicInfo | undefined;
  setInfo(value?: NewsBasicInfo): UpdateNewsReq;
  hasInfo(): boolean;
  clearInfo(): UpdateNewsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNewsReq): UpdateNewsReq.AsObject;
  static serializeBinaryToWriter(message: UpdateNewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNewsReq;
  static deserializeBinaryFromReader(message: UpdateNewsReq, reader: jspb.BinaryReader): UpdateNewsReq;
}

export namespace UpdateNewsReq {
  export type AsObject = {
    id: string,
    info?: NewsBasicInfo.AsObject,
  }
}

export class DeleteNewsReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteNewsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNewsReq): DeleteNewsReq.AsObject;
  static serializeBinaryToWriter(message: DeleteNewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNewsReq;
  static deserializeBinaryFromReader(message: DeleteNewsReq, reader: jspb.BinaryReader): DeleteNewsReq;
}

export namespace DeleteNewsReq {
  export type AsObject = {
    id: string,
  }
}

export class ListNewsReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListNewsReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): ListNewsReq;
  hasPagination(): boolean;
  clearPagination(): ListNewsReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): ListNewsReq;
  clearOrderByList(): ListNewsReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListNewsReq): ListNewsReq.AsObject;
  static serializeBinaryToWriter(message: ListNewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNewsReq;
  static deserializeBinaryFromReader(message: ListNewsReq, reader: jspb.BinaryReader): ListNewsReq;
}

export namespace ListNewsReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
  }
}

export class RetrieveNewsReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveNewsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveNewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveNewsReq): RetrieveNewsReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveNewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveNewsReq;
  static deserializeBinaryFromReader(message: RetrieveNewsReq, reader: jspb.BinaryReader): RetrieveNewsReq;
}

export namespace RetrieveNewsReq {
  export type AsObject = {
    id: string,
  }
}

export class PublicRetrieveNewsReq extends jspb.Message {
  getId(): string;
  setId(value: string): PublicRetrieveNewsReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): PublicRetrieveNewsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrieveNewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrieveNewsReq): PublicRetrieveNewsReq.AsObject;
  static serializeBinaryToWriter(message: PublicRetrieveNewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrieveNewsReq;
  static deserializeBinaryFromReader(message: PublicRetrieveNewsReq, reader: jspb.BinaryReader): PublicRetrieveNewsReq;
}

export namespace PublicRetrieveNewsReq {
  export type AsObject = {
    id: string,
    partnershipId: string,
  }
}

export class PublicListNewsReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): PublicListNewsReq;

  getLang(): string;
  setLang(value: string): PublicListNewsReq;

  getSearchText(): string;
  setSearchText(value: string): PublicListNewsReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): PublicListNewsReq;
  hasPagination(): boolean;
  clearPagination(): PublicListNewsReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): PublicListNewsReq;
  clearOrderByList(): PublicListNewsReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListNewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListNewsReq): PublicListNewsReq.AsObject;
  static serializeBinaryToWriter(message: PublicListNewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListNewsReq;
  static deserializeBinaryFromReader(message: PublicListNewsReq, reader: jspb.BinaryReader): PublicListNewsReq;
}

export namespace PublicListNewsReq {
  export type AsObject = {
    partnershipId: string,
    lang: string,
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
  }
}

export class CreateNewsRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateNewsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewsRes): CreateNewsRes.AsObject;
  static serializeBinaryToWriter(message: CreateNewsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewsRes;
  static deserializeBinaryFromReader(message: CreateNewsRes, reader: jspb.BinaryReader): CreateNewsRes;
}

export namespace CreateNewsRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveNewsRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveNewsRes;

  getPartnershipId(): string;
  setPartnershipId(value: string): RetrieveNewsRes;

  getInfo(): NewsBasicInfo | undefined;
  setInfo(value?: NewsBasicInfo): RetrieveNewsRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveNewsRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrieveNewsRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrieveNewsRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrieveNewsRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrieveNewsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveNewsRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveNewsRes): RetrieveNewsRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveNewsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveNewsRes;
  static deserializeBinaryFromReader(message: RetrieveNewsRes, reader: jspb.BinaryReader): RetrieveNewsRes;
}

export namespace RetrieveNewsRes {
  export type AsObject = {
    id: string,
    partnershipId: string,
    info?: NewsBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListNewsRes extends jspb.Message {
  getInfoList(): Array<NewstListInfo>;
  setInfoList(value: Array<NewstListInfo>): ListNewsRes;
  clearInfoList(): ListNewsRes;
  addInfo(value?: NewstListInfo, index?: number): NewstListInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): ListNewsRes;
  hasPagination(): boolean;
  clearPagination(): ListNewsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNewsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListNewsRes): ListNewsRes.AsObject;
  static serializeBinaryToWriter(message: ListNewsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNewsRes;
  static deserializeBinaryFromReader(message: ListNewsRes, reader: jspb.BinaryReader): ListNewsRes;
}

export namespace ListNewsRes {
  export type AsObject = {
    infoList: Array<NewstListInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

export class PublicListNewsRes extends jspb.Message {
  getInfoList(): Array<NewstListInfo>;
  setInfoList(value: Array<NewstListInfo>): PublicListNewsRes;
  clearInfoList(): PublicListNewsRes;
  addInfo(value?: NewstListInfo, index?: number): NewstListInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): PublicListNewsRes;
  hasPagination(): boolean;
  clearPagination(): PublicListNewsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListNewsRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListNewsRes): PublicListNewsRes.AsObject;
  static serializeBinaryToWriter(message: PublicListNewsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListNewsRes;
  static deserializeBinaryFromReader(message: PublicListNewsRes, reader: jspb.BinaryReader): PublicListNewsRes;
}

export namespace PublicListNewsRes {
  export type AsObject = {
    infoList: Array<NewstListInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

export enum ContentType { 
  CONTENT_TYPE_TEXT = 0,
  CONTENT_TYPE_LINK = 1,
}
