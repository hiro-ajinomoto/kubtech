import * as jspb from 'google-protobuf'

import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class VoucherBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): VoucherBasicInfo;

  getThumbnail(): string;
  setThumbnail(value: string): VoucherBasicInfo;

  getSponsor(): VoucherSponsorInfo | undefined;
  setSponsor(value?: VoucherSponsorInfo): VoucherBasicInfo;
  hasSponsor(): boolean;
  clearSponsor(): VoucherBasicInfo;

  getExpiredAt(): number;
  setExpiredAt(value: number): VoucherBasicInfo;

  getEventId(): string;
  setEventId(value: string): VoucherBasicInfo;

  getDetail(): string;
  setDetail(value: string): VoucherBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoucherBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VoucherBasicInfo): VoucherBasicInfo.AsObject;
  static serializeBinaryToWriter(message: VoucherBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoucherBasicInfo;
  static deserializeBinaryFromReader(message: VoucherBasicInfo, reader: jspb.BinaryReader): VoucherBasicInfo;
}

export namespace VoucherBasicInfo {
  export type AsObject = {
    name: string,
    thumbnail: string,
    sponsor?: VoucherSponsorInfo.AsObject,
    expiredAt: number,
    eventId: string,
    detail: string,
  }
}

export class VoucherListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): VoucherListInfo;

  getInfo(): VoucherBasicInfo | undefined;
  setInfo(value?: VoucherBasicInfo): VoucherListInfo;
  hasInfo(): boolean;
  clearInfo(): VoucherListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): VoucherListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): VoucherListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): VoucherListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): VoucherListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoucherListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VoucherListInfo): VoucherListInfo.AsObject;
  static serializeBinaryToWriter(message: VoucherListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoucherListInfo;
  static deserializeBinaryFromReader(message: VoucherListInfo, reader: jspb.BinaryReader): VoucherListInfo;
}

export namespace VoucherListInfo {
  export type AsObject = {
    id: string,
    info?: VoucherBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class VoucherSponsorInfo extends jspb.Message {
  getId(): string;
  setId(value: string): VoucherSponsorInfo;

  getName(): string;
  setName(value: string): VoucherSponsorInfo;

  getCover(): string;
  setCover(value: string): VoucherSponsorInfo;

  getAvatar(): string;
  setAvatar(value: string): VoucherSponsorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoucherSponsorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VoucherSponsorInfo): VoucherSponsorInfo.AsObject;
  static serializeBinaryToWriter(message: VoucherSponsorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoucherSponsorInfo;
  static deserializeBinaryFromReader(message: VoucherSponsorInfo, reader: jspb.BinaryReader): VoucherSponsorInfo;
}

export namespace VoucherSponsorInfo {
  export type AsObject = {
    id: string,
    name: string,
    cover: string,
    avatar: string,
  }
}

export class CreateVoucherReq extends jspb.Message {
  getName(): string;
  setName(value: string): CreateVoucherReq;

  getThumbnail(): string;
  setThumbnail(value: string): CreateVoucherReq;

  getSponsorId(): string;
  setSponsorId(value: string): CreateVoucherReq;

  getExpiredAt(): number;
  setExpiredAt(value: number): CreateVoucherReq;

  getEventId(): string;
  setEventId(value: string): CreateVoucherReq;

  getDetail(): string;
  setDetail(value: string): CreateVoucherReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVoucherReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVoucherReq): CreateVoucherReq.AsObject;
  static serializeBinaryToWriter(message: CreateVoucherReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVoucherReq;
  static deserializeBinaryFromReader(message: CreateVoucherReq, reader: jspb.BinaryReader): CreateVoucherReq;
}

export namespace CreateVoucherReq {
  export type AsObject = {
    name: string,
    thumbnail: string,
    sponsorId: string,
    expiredAt: number,
    eventId: string,
    detail: string,
  }
}

export class UpdateVoucherReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateVoucherReq;

  getName(): string;
  setName(value: string): UpdateVoucherReq;

  getThumbnail(): string;
  setThumbnail(value: string): UpdateVoucherReq;

  getSponsorId(): string;
  setSponsorId(value: string): UpdateVoucherReq;

  getExpiredAt(): number;
  setExpiredAt(value: number): UpdateVoucherReq;

  getEventId(): string;
  setEventId(value: string): UpdateVoucherReq;

  getDetail(): string;
  setDetail(value: string): UpdateVoucherReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVoucherReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVoucherReq): UpdateVoucherReq.AsObject;
  static serializeBinaryToWriter(message: UpdateVoucherReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVoucherReq;
  static deserializeBinaryFromReader(message: UpdateVoucherReq, reader: jspb.BinaryReader): UpdateVoucherReq;
}

export namespace UpdateVoucherReq {
  export type AsObject = {
    id: string,
    name: string,
    thumbnail: string,
    sponsorId: string,
    expiredAt: number,
    eventId: string,
    detail: string,
  }
}

export class DeleteVoucherReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteVoucherReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVoucherReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVoucherReq): DeleteVoucherReq.AsObject;
  static serializeBinaryToWriter(message: DeleteVoucherReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVoucherReq;
  static deserializeBinaryFromReader(message: DeleteVoucherReq, reader: jspb.BinaryReader): DeleteVoucherReq;
}

export namespace DeleteVoucherReq {
  export type AsObject = {
    id: string,
  }
}

export class ListVoucherReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListVoucherReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): ListVoucherReq;
  hasPagination(): boolean;
  clearPagination(): ListVoucherReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): ListVoucherReq;
  clearOrderByList(): ListVoucherReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoucherReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoucherReq): ListVoucherReq.AsObject;
  static serializeBinaryToWriter(message: ListVoucherReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoucherReq;
  static deserializeBinaryFromReader(message: ListVoucherReq, reader: jspb.BinaryReader): ListVoucherReq;
}

export namespace ListVoucherReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
  }
}

export class RetrieveVoucherReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveVoucherReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveVoucherReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveVoucherReq): RetrieveVoucherReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveVoucherReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveVoucherReq;
  static deserializeBinaryFromReader(message: RetrieveVoucherReq, reader: jspb.BinaryReader): RetrieveVoucherReq;
}

export namespace RetrieveVoucherReq {
  export type AsObject = {
    id: string,
  }
}

export class InternalListVoucherByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListVoucherByIdsReq;
  clearIdsList(): InternalListVoucherByIdsReq;
  addIds(value: string, index?: number): InternalListVoucherByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListVoucherByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListVoucherByIdsReq): InternalListVoucherByIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListVoucherByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListVoucherByIdsReq;
  static deserializeBinaryFromReader(message: InternalListVoucherByIdsReq, reader: jspb.BinaryReader): InternalListVoucherByIdsReq;
}

export namespace InternalListVoucherByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class CreateVoucherRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateVoucherRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVoucherRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVoucherRes): CreateVoucherRes.AsObject;
  static serializeBinaryToWriter(message: CreateVoucherRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVoucherRes;
  static deserializeBinaryFromReader(message: CreateVoucherRes, reader: jspb.BinaryReader): CreateVoucherRes;
}

export namespace CreateVoucherRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveVoucherRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveVoucherRes;

  getInfo(): VoucherBasicInfo | undefined;
  setInfo(value?: VoucherBasicInfo): RetrieveVoucherRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveVoucherRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrieveVoucherRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrieveVoucherRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrieveVoucherRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrieveVoucherRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveVoucherRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveVoucherRes): RetrieveVoucherRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveVoucherRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveVoucherRes;
  static deserializeBinaryFromReader(message: RetrieveVoucherRes, reader: jspb.BinaryReader): RetrieveVoucherRes;
}

export namespace RetrieveVoucherRes {
  export type AsObject = {
    id: string,
    info?: VoucherBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListVoucherRes extends jspb.Message {
  getInfoList(): Array<VoucherListInfo>;
  setInfoList(value: Array<VoucherListInfo>): ListVoucherRes;
  clearInfoList(): ListVoucherRes;
  addInfo(value?: VoucherListInfo, index?: number): VoucherListInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): ListVoucherRes;
  hasPagination(): boolean;
  clearPagination(): ListVoucherRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoucherRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoucherRes): ListVoucherRes.AsObject;
  static serializeBinaryToWriter(message: ListVoucherRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoucherRes;
  static deserializeBinaryFromReader(message: ListVoucherRes, reader: jspb.BinaryReader): ListVoucherRes;
}

export namespace ListVoucherRes {
  export type AsObject = {
    infoList: Array<VoucherListInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

export class InternalListVoucherByIdsRes extends jspb.Message {
  getInfoList(): Array<VoucherListInfo>;
  setInfoList(value: Array<VoucherListInfo>): InternalListVoucherByIdsRes;
  clearInfoList(): InternalListVoucherByIdsRes;
  addInfo(value?: VoucherListInfo, index?: number): VoucherListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListVoucherByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListVoucherByIdsRes): InternalListVoucherByIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListVoucherByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListVoucherByIdsRes;
  static deserializeBinaryFromReader(message: InternalListVoucherByIdsRes, reader: jspb.BinaryReader): InternalListVoucherByIdsRes;
}

export namespace InternalListVoucherByIdsRes {
  export type AsObject = {
    infoList: Array<VoucherListInfo.AsObject>,
  }
}

