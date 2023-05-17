import * as jspb from 'google-protobuf'

import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class SeatTypeBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SeatTypeBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatTypeBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatTypeBasicInfo): SeatTypeBasicInfo.AsObject;
  static serializeBinaryToWriter(message: SeatTypeBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatTypeBasicInfo;
  static deserializeBinaryFromReader(message: SeatTypeBasicInfo, reader: jspb.BinaryReader): SeatTypeBasicInfo;
}

export namespace SeatTypeBasicInfo {
  export type AsObject = {
    name: string,
  }
}

export class SeatTypeListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatTypeListInfo;

  getInfo(): SeatTypeBasicInfo | undefined;
  setInfo(value?: SeatTypeBasicInfo): SeatTypeListInfo;
  hasInfo(): boolean;
  clearInfo(): SeatTypeListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): SeatTypeListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SeatTypeListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SeatTypeListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SeatTypeListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatTypeListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatTypeListInfo): SeatTypeListInfo.AsObject;
  static serializeBinaryToWriter(message: SeatTypeListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatTypeListInfo;
  static deserializeBinaryFromReader(message: SeatTypeListInfo, reader: jspb.BinaryReader): SeatTypeListInfo;
}

export namespace SeatTypeListInfo {
  export type AsObject = {
    id: string,
    info?: SeatTypeBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class CreateSeatTypeReq extends jspb.Message {
  getName(): string;
  setName(value: string): CreateSeatTypeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatTypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatTypeReq): CreateSeatTypeReq.AsObject;
  static serializeBinaryToWriter(message: CreateSeatTypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatTypeReq;
  static deserializeBinaryFromReader(message: CreateSeatTypeReq, reader: jspb.BinaryReader): CreateSeatTypeReq;
}

export namespace CreateSeatTypeReq {
  export type AsObject = {
    name: string,
  }
}

export class UpdateSeatTypeReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSeatTypeReq;

  getInfo(): SeatTypeBasicInfo | undefined;
  setInfo(value?: SeatTypeBasicInfo): UpdateSeatTypeReq;
  hasInfo(): boolean;
  clearInfo(): UpdateSeatTypeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeatTypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeatTypeReq): UpdateSeatTypeReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSeatTypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeatTypeReq;
  static deserializeBinaryFromReader(message: UpdateSeatTypeReq, reader: jspb.BinaryReader): UpdateSeatTypeReq;
}

export namespace UpdateSeatTypeReq {
  export type AsObject = {
    id: string,
    info?: SeatTypeBasicInfo.AsObject,
  }
}

export class DeleteSeatTypeReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSeatTypeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSeatTypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSeatTypeReq): DeleteSeatTypeReq.AsObject;
  static serializeBinaryToWriter(message: DeleteSeatTypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSeatTypeReq;
  static deserializeBinaryFromReader(message: DeleteSeatTypeReq, reader: jspb.BinaryReader): DeleteSeatTypeReq;
}

export namespace DeleteSeatTypeReq {
  export type AsObject = {
    id: string,
  }
}

export class ListSeatTypeReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListSeatTypeReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): ListSeatTypeReq;
  hasPagination(): boolean;
  clearPagination(): ListSeatTypeReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): ListSeatTypeReq;
  clearOrderByList(): ListSeatTypeReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatTypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatTypeReq): ListSeatTypeReq.AsObject;
  static serializeBinaryToWriter(message: ListSeatTypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatTypeReq;
  static deserializeBinaryFromReader(message: ListSeatTypeReq, reader: jspb.BinaryReader): ListSeatTypeReq;
}

export namespace ListSeatTypeReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
  }
}

export class RetrieveSeatTypeReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSeatTypeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatTypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatTypeReq): RetrieveSeatTypeReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatTypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatTypeReq;
  static deserializeBinaryFromReader(message: RetrieveSeatTypeReq, reader: jspb.BinaryReader): RetrieveSeatTypeReq;
}

export namespace RetrieveSeatTypeReq {
  export type AsObject = {
    id: string,
  }
}

export class CreateSeatTypeRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSeatTypeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatTypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatTypeRes): CreateSeatTypeRes.AsObject;
  static serializeBinaryToWriter(message: CreateSeatTypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatTypeRes;
  static deserializeBinaryFromReader(message: CreateSeatTypeRes, reader: jspb.BinaryReader): CreateSeatTypeRes;
}

export namespace CreateSeatTypeRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveSeatTypeRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSeatTypeRes;

  getInfo(): SeatTypeBasicInfo | undefined;
  setInfo(value?: SeatTypeBasicInfo): RetrieveSeatTypeRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveSeatTypeRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrieveSeatTypeRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrieveSeatTypeRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrieveSeatTypeRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrieveSeatTypeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatTypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatTypeRes): RetrieveSeatTypeRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatTypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatTypeRes;
  static deserializeBinaryFromReader(message: RetrieveSeatTypeRes, reader: jspb.BinaryReader): RetrieveSeatTypeRes;
}

export namespace RetrieveSeatTypeRes {
  export type AsObject = {
    id: string,
    info?: SeatTypeBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListSeatTypeRes extends jspb.Message {
  getInfoList(): Array<SeatTypeListInfo>;
  setInfoList(value: Array<SeatTypeListInfo>): ListSeatTypeRes;
  clearInfoList(): ListSeatTypeRes;
  addInfo(value?: SeatTypeListInfo, index?: number): SeatTypeListInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): ListSeatTypeRes;
  hasPagination(): boolean;
  clearPagination(): ListSeatTypeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatTypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatTypeRes): ListSeatTypeRes.AsObject;
  static serializeBinaryToWriter(message: ListSeatTypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatTypeRes;
  static deserializeBinaryFromReader(message: ListSeatTypeRes, reader: jspb.BinaryReader): ListSeatTypeRes;
}

export namespace ListSeatTypeRes {
  export type AsObject = {
    infoList: Array<SeatTypeListInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

