import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';


export class SponsorRankBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SponsorRankBasicInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): SponsorRankBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorRankBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorRankBasicInfo): SponsorRankBasicInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorRankBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorRankBasicInfo;
  static deserializeBinaryFromReader(message: SponsorRankBasicInfo, reader: jspb.BinaryReader): SponsorRankBasicInfo;
}

export namespace SponsorRankBasicInfo {
  export type AsObject = {
    name: string,
    partnershipId: string,
  }
}

export class SponsorRankInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SponsorRankInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): SponsorRankInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SponsorRankInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SponsorRankInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SponsorRankInfo;

  getName(): string;
  setName(value: string): SponsorRankInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): SponsorRankInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorRankInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorRankInfo): SponsorRankInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorRankInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorRankInfo;
  static deserializeBinaryFromReader(message: SponsorRankInfo, reader: jspb.BinaryReader): SponsorRankInfo;
}

export namespace SponsorRankInfo {
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

export class ListSponsorRankReq extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): ListSponsorRankReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListSponsorRankReq;
  hasPagination(): boolean;
  clearPagination(): ListSponsorRankReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): ListSponsorRankReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): ListSponsorRankReq;
  clearOrderByList(): ListSponsorRankReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSponsorRankReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSponsorRankReq): ListSponsorRankReq.AsObject;
  static serializeBinaryToWriter(message: ListSponsorRankReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSponsorRankReq;
  static deserializeBinaryFromReader(message: ListSponsorRankReq, reader: jspb.BinaryReader): ListSponsorRankReq;
}

export namespace ListSponsorRankReq {
  export type AsObject = {
    search: string,
    pagination?: base_base_pb.PaginationReq.AsObject,
    partnershipId: string,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
  }
}

export class ListSponsorRankRes extends jspb.Message {
  getItemsList(): Array<SponsorRankInfo>;
  setItemsList(value: Array<SponsorRankInfo>): ListSponsorRankRes;
  clearItemsList(): ListSponsorRankRes;
  addItems(value?: SponsorRankInfo, index?: number): SponsorRankInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): ListSponsorRankRes;
  hasPagination(): boolean;
  clearPagination(): ListSponsorRankRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSponsorRankRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSponsorRankRes): ListSponsorRankRes.AsObject;
  static serializeBinaryToWriter(message: ListSponsorRankRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSponsorRankRes;
  static deserializeBinaryFromReader(message: ListSponsorRankRes, reader: jspb.BinaryReader): ListSponsorRankRes;
}

export namespace ListSponsorRankRes {
  export type AsObject = {
    itemsList: Array<SponsorRankInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

