import * as jspb from 'google-protobuf'

import * as media_base_media_pb from '../../media/base_media_pb';
import * as media_mobile_base_pb from '../../media/mobile/base_pb';


export class HashtagBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): HashtagBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HashtagBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HashtagBasicInfo): HashtagBasicInfo.AsObject;
  static serializeBinaryToWriter(message: HashtagBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HashtagBasicInfo;
  static deserializeBinaryFromReader(message: HashtagBasicInfo, reader: jspb.BinaryReader): HashtagBasicInfo;
}

export namespace HashtagBasicInfo {
  export type AsObject = {
    name: string,
  }
}

export class HashtagInfo extends jspb.Message {
  getId(): string;
  setId(value: string): HashtagInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): HashtagInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): HashtagInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): HashtagInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): HashtagInfo;

  getName(): string;
  setName(value: string): HashtagInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): HashtagInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HashtagInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HashtagInfo): HashtagInfo.AsObject;
  static serializeBinaryToWriter(message: HashtagInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HashtagInfo;
  static deserializeBinaryFromReader(message: HashtagInfo, reader: jspb.BinaryReader): HashtagInfo;
}

export namespace HashtagInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    name: string,
    partnershipId: string,
  }
}

export class CreateHashtagReq extends jspb.Message {
  getName(): string;
  setName(value: string): CreateHashtagReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHashtagReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHashtagReq): CreateHashtagReq.AsObject;
  static serializeBinaryToWriter(message: CreateHashtagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHashtagReq;
  static deserializeBinaryFromReader(message: CreateHashtagReq, reader: jspb.BinaryReader): CreateHashtagReq;
}

export namespace CreateHashtagReq {
  export type AsObject = {
    name: string,
  }
}

export class UpdateHashtagReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateHashtagReq;

  getName(): string;
  setName(value: string): UpdateHashtagReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHashtagReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHashtagReq): UpdateHashtagReq.AsObject;
  static serializeBinaryToWriter(message: UpdateHashtagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHashtagReq;
  static deserializeBinaryFromReader(message: UpdateHashtagReq, reader: jspb.BinaryReader): UpdateHashtagReq;
}

export namespace UpdateHashtagReq {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class DeleteHashtagReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteHashtagReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHashtagReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHashtagReq): DeleteHashtagReq.AsObject;
  static serializeBinaryToWriter(message: DeleteHashtagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHashtagReq;
  static deserializeBinaryFromReader(message: DeleteHashtagReq, reader: jspb.BinaryReader): DeleteHashtagReq;
}

export namespace DeleteHashtagReq {
  export type AsObject = {
    id: string,
  }
}

export class PublicListHashtagReq extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): PublicListHashtagReq;

  getPagination(): media_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: media_mobile_base_pb.PaginationReq): PublicListHashtagReq;
  hasPagination(): boolean;
  clearPagination(): PublicListHashtagReq;

  getOrderByList(): Array<media_base_media_pb.OrderByItem>;
  setOrderByList(value: Array<media_base_media_pb.OrderByItem>): PublicListHashtagReq;
  clearOrderByList(): PublicListHashtagReq;
  addOrderBy(value?: media_base_media_pb.OrderByItem, index?: number): media_base_media_pb.OrderByItem;

  getPartnershipId(): string;
  setPartnershipId(value: string): PublicListHashtagReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListHashtagReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListHashtagReq): PublicListHashtagReq.AsObject;
  static serializeBinaryToWriter(message: PublicListHashtagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListHashtagReq;
  static deserializeBinaryFromReader(message: PublicListHashtagReq, reader: jspb.BinaryReader): PublicListHashtagReq;
}

export namespace PublicListHashtagReq {
  export type AsObject = {
    search: string,
    pagination?: media_mobile_base_pb.PaginationReq.AsObject,
    orderByList: Array<media_base_media_pb.OrderByItem.AsObject>,
    partnershipId: string,
  }
}

export class RetrieveHashtagReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveHashtagReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveHashtagReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveHashtagReq): RetrieveHashtagReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveHashtagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveHashtagReq;
  static deserializeBinaryFromReader(message: RetrieveHashtagReq, reader: jspb.BinaryReader): RetrieveHashtagReq;
}

export namespace RetrieveHashtagReq {
  export type AsObject = {
    id: string,
  }
}

export class PublicRetrieveHashtagReq extends jspb.Message {
  getId(): string;
  setId(value: string): PublicRetrieveHashtagReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): PublicRetrieveHashtagReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrieveHashtagReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrieveHashtagReq): PublicRetrieveHashtagReq.AsObject;
  static serializeBinaryToWriter(message: PublicRetrieveHashtagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrieveHashtagReq;
  static deserializeBinaryFromReader(message: PublicRetrieveHashtagReq, reader: jspb.BinaryReader): PublicRetrieveHashtagReq;
}

export namespace PublicRetrieveHashtagReq {
  export type AsObject = {
    id: string,
    partnershipId: string,
  }
}

export class InternalListHashtagByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListHashtagByIdsReq;
  clearIdsList(): InternalListHashtagByIdsReq;
  addIds(value: string, index?: number): InternalListHashtagByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListHashtagByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListHashtagByIdsReq): InternalListHashtagByIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListHashtagByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListHashtagByIdsReq;
  static deserializeBinaryFromReader(message: InternalListHashtagByIdsReq, reader: jspb.BinaryReader): InternalListHashtagByIdsReq;
}

export namespace InternalListHashtagByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class CreateHashtagRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateHashtagRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHashtagRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHashtagRes): CreateHashtagRes.AsObject;
  static serializeBinaryToWriter(message: CreateHashtagRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHashtagRes;
  static deserializeBinaryFromReader(message: CreateHashtagRes, reader: jspb.BinaryReader): CreateHashtagRes;
}

export namespace CreateHashtagRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveHashtagRes extends jspb.Message {
  getInfo(): HashtagInfo | undefined;
  setInfo(value?: HashtagInfo): RetrieveHashtagRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveHashtagRes;

  getBought(): boolean;
  setBought(value: boolean): RetrieveHashtagRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveHashtagRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveHashtagRes): RetrieveHashtagRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveHashtagRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveHashtagRes;
  static deserializeBinaryFromReader(message: RetrieveHashtagRes, reader: jspb.BinaryReader): RetrieveHashtagRes;
}

export namespace RetrieveHashtagRes {
  export type AsObject = {
    info?: HashtagInfo.AsObject,
    bought: boolean,
  }
}

export class PublicRetrieveHashtagRes extends jspb.Message {
  getInfo(): HashtagInfo | undefined;
  setInfo(value?: HashtagInfo): PublicRetrieveHashtagRes;
  hasInfo(): boolean;
  clearInfo(): PublicRetrieveHashtagRes;

  getBought(): boolean;
  setBought(value: boolean): PublicRetrieveHashtagRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrieveHashtagRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrieveHashtagRes): PublicRetrieveHashtagRes.AsObject;
  static serializeBinaryToWriter(message: PublicRetrieveHashtagRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrieveHashtagRes;
  static deserializeBinaryFromReader(message: PublicRetrieveHashtagRes, reader: jspb.BinaryReader): PublicRetrieveHashtagRes;
}

export namespace PublicRetrieveHashtagRes {
  export type AsObject = {
    info?: HashtagInfo.AsObject,
    bought: boolean,
  }
}

export class InternalListHashtagByIdsRes extends jspb.Message {
  getInfosList(): Array<HashtagInfo>;
  setInfosList(value: Array<HashtagInfo>): InternalListHashtagByIdsRes;
  clearInfosList(): InternalListHashtagByIdsRes;
  addInfos(value?: HashtagInfo, index?: number): HashtagInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListHashtagByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListHashtagByIdsRes): InternalListHashtagByIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListHashtagByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListHashtagByIdsRes;
  static deserializeBinaryFromReader(message: InternalListHashtagByIdsRes, reader: jspb.BinaryReader): InternalListHashtagByIdsRes;
}

export namespace InternalListHashtagByIdsRes {
  export type AsObject = {
    infosList: Array<HashtagInfo.AsObject>,
  }
}

export class PublicListHashtagRes extends jspb.Message {
  getInfoList(): Array<HashtagBasicInfo>;
  setInfoList(value: Array<HashtagBasicInfo>): PublicListHashtagRes;
  clearInfoList(): PublicListHashtagRes;
  addInfo(value?: HashtagBasicInfo, index?: number): HashtagBasicInfo;

  getPagination(): media_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: media_mobile_base_pb.PaginationRes): PublicListHashtagRes;
  hasPagination(): boolean;
  clearPagination(): PublicListHashtagRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListHashtagRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListHashtagRes): PublicListHashtagRes.AsObject;
  static serializeBinaryToWriter(message: PublicListHashtagRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListHashtagRes;
  static deserializeBinaryFromReader(message: PublicListHashtagRes, reader: jspb.BinaryReader): PublicListHashtagRes;
}

export namespace PublicListHashtagRes {
  export type AsObject = {
    infoList: Array<HashtagBasicInfo.AsObject>,
    pagination?: media_mobile_base_pb.PaginationRes.AsObject,
  }
}

