import * as jspb from 'google-protobuf'

import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class SeatAccessoryBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SeatAccessoryBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatAccessoryBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatAccessoryBasicInfo): SeatAccessoryBasicInfo.AsObject;
  static serializeBinaryToWriter(message: SeatAccessoryBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatAccessoryBasicInfo;
  static deserializeBinaryFromReader(message: SeatAccessoryBasicInfo, reader: jspb.BinaryReader): SeatAccessoryBasicInfo;
}

export namespace SeatAccessoryBasicInfo {
  export type AsObject = {
    name: string,
  }
}

export class SeatAccessoryListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatAccessoryListInfo;

  getInfo(): SeatAccessoryBasicInfo | undefined;
  setInfo(value?: SeatAccessoryBasicInfo): SeatAccessoryListInfo;
  hasInfo(): boolean;
  clearInfo(): SeatAccessoryListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): SeatAccessoryListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SeatAccessoryListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SeatAccessoryListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SeatAccessoryListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatAccessoryListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatAccessoryListInfo): SeatAccessoryListInfo.AsObject;
  static serializeBinaryToWriter(message: SeatAccessoryListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatAccessoryListInfo;
  static deserializeBinaryFromReader(message: SeatAccessoryListInfo, reader: jspb.BinaryReader): SeatAccessoryListInfo;
}

export namespace SeatAccessoryListInfo {
  export type AsObject = {
    id: string,
    info?: SeatAccessoryBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class CreateSeatAccessoryReq extends jspb.Message {
  getInfo(): SeatAccessoryBasicInfo | undefined;
  setInfo(value?: SeatAccessoryBasicInfo): CreateSeatAccessoryReq;
  hasInfo(): boolean;
  clearInfo(): CreateSeatAccessoryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatAccessoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatAccessoryReq): CreateSeatAccessoryReq.AsObject;
  static serializeBinaryToWriter(message: CreateSeatAccessoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatAccessoryReq;
  static deserializeBinaryFromReader(message: CreateSeatAccessoryReq, reader: jspb.BinaryReader): CreateSeatAccessoryReq;
}

export namespace CreateSeatAccessoryReq {
  export type AsObject = {
    info?: SeatAccessoryBasicInfo.AsObject,
  }
}

export class UpdateSeatAccessoryReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSeatAccessoryReq;

  getInfo(): SeatAccessoryBasicInfo | undefined;
  setInfo(value?: SeatAccessoryBasicInfo): UpdateSeatAccessoryReq;
  hasInfo(): boolean;
  clearInfo(): UpdateSeatAccessoryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeatAccessoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeatAccessoryReq): UpdateSeatAccessoryReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSeatAccessoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeatAccessoryReq;
  static deserializeBinaryFromReader(message: UpdateSeatAccessoryReq, reader: jspb.BinaryReader): UpdateSeatAccessoryReq;
}

export namespace UpdateSeatAccessoryReq {
  export type AsObject = {
    id: string,
    info?: SeatAccessoryBasicInfo.AsObject,
  }
}

export class DeleteSeatAccessoryReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSeatAccessoryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSeatAccessoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSeatAccessoryReq): DeleteSeatAccessoryReq.AsObject;
  static serializeBinaryToWriter(message: DeleteSeatAccessoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSeatAccessoryReq;
  static deserializeBinaryFromReader(message: DeleteSeatAccessoryReq, reader: jspb.BinaryReader): DeleteSeatAccessoryReq;
}

export namespace DeleteSeatAccessoryReq {
  export type AsObject = {
    id: string,
  }
}

export class ListSeatAccessoryReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListSeatAccessoryReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): ListSeatAccessoryReq;
  hasPagination(): boolean;
  clearPagination(): ListSeatAccessoryReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): ListSeatAccessoryReq;
  clearOrderByList(): ListSeatAccessoryReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatAccessoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatAccessoryReq): ListSeatAccessoryReq.AsObject;
  static serializeBinaryToWriter(message: ListSeatAccessoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatAccessoryReq;
  static deserializeBinaryFromReader(message: ListSeatAccessoryReq, reader: jspb.BinaryReader): ListSeatAccessoryReq;
}

export namespace ListSeatAccessoryReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
  }
}

export class RetrieveSeatAccessoryReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSeatAccessoryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatAccessoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatAccessoryReq): RetrieveSeatAccessoryReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatAccessoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatAccessoryReq;
  static deserializeBinaryFromReader(message: RetrieveSeatAccessoryReq, reader: jspb.BinaryReader): RetrieveSeatAccessoryReq;
}

export namespace RetrieveSeatAccessoryReq {
  export type AsObject = {
    id: string,
  }
}

export class CreateSeatAccessoryRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSeatAccessoryRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatAccessoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatAccessoryRes): CreateSeatAccessoryRes.AsObject;
  static serializeBinaryToWriter(message: CreateSeatAccessoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatAccessoryRes;
  static deserializeBinaryFromReader(message: CreateSeatAccessoryRes, reader: jspb.BinaryReader): CreateSeatAccessoryRes;
}

export namespace CreateSeatAccessoryRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveSeatAccessoryRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSeatAccessoryRes;

  getInfo(): SeatAccessoryBasicInfo | undefined;
  setInfo(value?: SeatAccessoryBasicInfo): RetrieveSeatAccessoryRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveSeatAccessoryRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrieveSeatAccessoryRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrieveSeatAccessoryRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrieveSeatAccessoryRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrieveSeatAccessoryRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatAccessoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatAccessoryRes): RetrieveSeatAccessoryRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatAccessoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatAccessoryRes;
  static deserializeBinaryFromReader(message: RetrieveSeatAccessoryRes, reader: jspb.BinaryReader): RetrieveSeatAccessoryRes;
}

export namespace RetrieveSeatAccessoryRes {
  export type AsObject = {
    id: string,
    info?: SeatAccessoryBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListSeatAccessoryRes extends jspb.Message {
  getInfoList(): Array<SeatAccessoryListInfo>;
  setInfoList(value: Array<SeatAccessoryListInfo>): ListSeatAccessoryRes;
  clearInfoList(): ListSeatAccessoryRes;
  addInfo(value?: SeatAccessoryListInfo, index?: number): SeatAccessoryListInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): ListSeatAccessoryRes;
  hasPagination(): boolean;
  clearPagination(): ListSeatAccessoryRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatAccessoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatAccessoryRes): ListSeatAccessoryRes.AsObject;
  static serializeBinaryToWriter(message: ListSeatAccessoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatAccessoryRes;
  static deserializeBinaryFromReader(message: ListSeatAccessoryRes, reader: jspb.BinaryReader): ListSeatAccessoryRes;
}

export namespace ListSeatAccessoryRes {
  export type AsObject = {
    infoList: Array<SeatAccessoryListInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

