import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';


export class ArtistRoleBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ArtistRoleBasicInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): ArtistRoleBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtistRoleBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ArtistRoleBasicInfo): ArtistRoleBasicInfo.AsObject;
  static serializeBinaryToWriter(message: ArtistRoleBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtistRoleBasicInfo;
  static deserializeBinaryFromReader(message: ArtistRoleBasicInfo, reader: jspb.BinaryReader): ArtistRoleBasicInfo;
}

export namespace ArtistRoleBasicInfo {
  export type AsObject = {
    name: string,
    partnershipId: string,
  }
}

export class ArtistRoleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ArtistRoleInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ArtistRoleInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ArtistRoleInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): ArtistRoleInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): ArtistRoleInfo;

  getName(): string;
  setName(value: string): ArtistRoleInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): ArtistRoleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtistRoleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ArtistRoleInfo): ArtistRoleInfo.AsObject;
  static serializeBinaryToWriter(message: ArtistRoleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtistRoleInfo;
  static deserializeBinaryFromReader(message: ArtistRoleInfo, reader: jspb.BinaryReader): ArtistRoleInfo;
}

export namespace ArtistRoleInfo {
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

export class ListArtistRoleReq extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): ListArtistRoleReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListArtistRoleReq;
  hasPagination(): boolean;
  clearPagination(): ListArtistRoleReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): ListArtistRoleReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): ListArtistRoleReq;
  clearOrderByList(): ListArtistRoleReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArtistRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListArtistRoleReq): ListArtistRoleReq.AsObject;
  static serializeBinaryToWriter(message: ListArtistRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArtistRoleReq;
  static deserializeBinaryFromReader(message: ListArtistRoleReq, reader: jspb.BinaryReader): ListArtistRoleReq;
}

export namespace ListArtistRoleReq {
  export type AsObject = {
    search: string,
    pagination?: base_base_pb.PaginationReq.AsObject,
    partnershipId: string,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
  }
}

export class ListArtistRoleRes extends jspb.Message {
  getItemsList(): Array<ArtistRoleInfo>;
  setItemsList(value: Array<ArtistRoleInfo>): ListArtistRoleRes;
  clearItemsList(): ListArtistRoleRes;
  addItems(value?: ArtistRoleInfo, index?: number): ArtistRoleInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): ListArtistRoleRes;
  hasPagination(): boolean;
  clearPagination(): ListArtistRoleRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArtistRoleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListArtistRoleRes): ListArtistRoleRes.AsObject;
  static serializeBinaryToWriter(message: ListArtistRoleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArtistRoleRes;
  static deserializeBinaryFromReader(message: ListArtistRoleRes, reader: jspb.BinaryReader): ListArtistRoleRes;
}

export namespace ListArtistRoleRes {
  export type AsObject = {
    itemsList: Array<ArtistRoleInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

