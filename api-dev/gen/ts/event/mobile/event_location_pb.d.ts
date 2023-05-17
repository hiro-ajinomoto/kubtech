import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';


export class EventLocationBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): EventLocationBasicInfo;

  getCoordinate(): string;
  setCoordinate(value: string): EventLocationBasicInfo;

  getAddress(): string;
  setAddress(value: string): EventLocationBasicInfo;

  getTimezone(): string;
  setTimezone(value: string): EventLocationBasicInfo;

  getCountry(): string;
  setCountry(value: string): EventLocationBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLocationBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventLocationBasicInfo): EventLocationBasicInfo.AsObject;
  static serializeBinaryToWriter(message: EventLocationBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLocationBasicInfo;
  static deserializeBinaryFromReader(message: EventLocationBasicInfo, reader: jspb.BinaryReader): EventLocationBasicInfo;
}

export namespace EventLocationBasicInfo {
  export type AsObject = {
    name: string,
    coordinate: string,
    address: string,
    timezone: string,
    country: string,
  }
}

export class EventLocationInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventLocationInfo;

  getName(): string;
  setName(value: string): EventLocationInfo;

  getCoordinate(): string;
  setCoordinate(value: string): EventLocationInfo;

  getAddress(): string;
  setAddress(value: string): EventLocationInfo;

  getCountry(): string;
  setCountry(value: string): EventLocationInfo;

  getTimezone(): string;
  setTimezone(value: string): EventLocationInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): EventLocationInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EventLocationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventLocationInfo): EventLocationInfo.AsObject;
  static serializeBinaryToWriter(message: EventLocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLocationInfo;
  static deserializeBinaryFromReader(message: EventLocationInfo, reader: jspb.BinaryReader): EventLocationInfo;
}

export namespace EventLocationInfo {
  export type AsObject = {
    id: string,
    name: string,
    coordinate: string,
    address: string,
    country: string,
    timezone: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class RetrieveEventLocationReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveEventLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveEventLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveEventLocationReq): RetrieveEventLocationReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveEventLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveEventLocationReq;
  static deserializeBinaryFromReader(message: RetrieveEventLocationReq, reader: jspb.BinaryReader): RetrieveEventLocationReq;
}

export namespace RetrieveEventLocationReq {
  export type AsObject = {
    id: string,
  }
}

export class ListEventLocationReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListEventLocationReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListEventLocationReq;
  hasPagination(): boolean;
  clearPagination(): ListEventLocationReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): ListEventLocationReq;
  clearOrderByList(): ListEventLocationReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventLocationReq): ListEventLocationReq.AsObject;
  static serializeBinaryToWriter(message: ListEventLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventLocationReq;
  static deserializeBinaryFromReader(message: ListEventLocationReq, reader: jspb.BinaryReader): ListEventLocationReq;
}

export namespace ListEventLocationReq {
  export type AsObject = {
    searchText: string,
    pagination?: base_base_pb.PaginationReq.AsObject,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
  }
}

export class InternalListEventLocationByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListEventLocationByIdsReq;
  clearIdsList(): InternalListEventLocationByIdsReq;
  addIds(value: string, index?: number): InternalListEventLocationByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListEventLocationByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListEventLocationByIdsReq): InternalListEventLocationByIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListEventLocationByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListEventLocationByIdsReq;
  static deserializeBinaryFromReader(message: InternalListEventLocationByIdsReq, reader: jspb.BinaryReader): InternalListEventLocationByIdsReq;
}

export namespace InternalListEventLocationByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class RetrieveEventLocationRes extends jspb.Message {
  getInfo(): EventLocationInfo | undefined;
  setInfo(value?: EventLocationInfo): RetrieveEventLocationRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveEventLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveEventLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveEventLocationRes): RetrieveEventLocationRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveEventLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveEventLocationRes;
  static deserializeBinaryFromReader(message: RetrieveEventLocationRes, reader: jspb.BinaryReader): RetrieveEventLocationRes;
}

export namespace RetrieveEventLocationRes {
  export type AsObject = {
    info?: EventLocationInfo.AsObject,
  }
}

export class EventLocationListRes extends jspb.Message {
  getItemsList(): Array<EventLocationInfo>;
  setItemsList(value: Array<EventLocationInfo>): EventLocationListRes;
  clearItemsList(): EventLocationListRes;
  addItems(value?: EventLocationInfo, index?: number): EventLocationInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): EventLocationListRes;
  hasPagination(): boolean;
  clearPagination(): EventLocationListRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLocationListRes.AsObject;
  static toObject(includeInstance: boolean, msg: EventLocationListRes): EventLocationListRes.AsObject;
  static serializeBinaryToWriter(message: EventLocationListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLocationListRes;
  static deserializeBinaryFromReader(message: EventLocationListRes, reader: jspb.BinaryReader): EventLocationListRes;
}

export namespace EventLocationListRes {
  export type AsObject = {
    itemsList: Array<EventLocationInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

export class InternalListEventLocationByIdsRes extends jspb.Message {
  getItemsList(): Array<EventLocationInfo>;
  setItemsList(value: Array<EventLocationInfo>): InternalListEventLocationByIdsRes;
  clearItemsList(): InternalListEventLocationByIdsRes;
  addItems(value?: EventLocationInfo, index?: number): EventLocationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListEventLocationByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListEventLocationByIdsRes): InternalListEventLocationByIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListEventLocationByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListEventLocationByIdsRes;
  static deserializeBinaryFromReader(message: InternalListEventLocationByIdsRes, reader: jspb.BinaryReader): InternalListEventLocationByIdsRes;
}

export namespace InternalListEventLocationByIdsRes {
  export type AsObject = {
    itemsList: Array<EventLocationInfo.AsObject>,
  }
}

