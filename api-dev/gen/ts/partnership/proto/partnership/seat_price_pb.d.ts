import * as jspb from 'google-protobuf'

import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class CurrencySimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CurrencySimpleInfo;

  getName(): string;
  setName(value: string): CurrencySimpleInfo;

  getCode(): string;
  setCode(value: string): CurrencySimpleInfo;

  getIcon(): string;
  setIcon(value: string): CurrencySimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencySimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencySimpleInfo): CurrencySimpleInfo.AsObject;
  static serializeBinaryToWriter(message: CurrencySimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencySimpleInfo;
  static deserializeBinaryFromReader(message: CurrencySimpleInfo, reader: jspb.BinaryReader): CurrencySimpleInfo;
}

export namespace CurrencySimpleInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class SeatPriceBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SeatPriceBasicInfo;

  getIcon(): string;
  setIcon(value: string): SeatPriceBasicInfo;

  getPrice(): number;
  setPrice(value: number): SeatPriceBasicInfo;

  getCurrency(): CurrencySimpleInfo | undefined;
  setCurrency(value?: CurrencySimpleInfo): SeatPriceBasicInfo;
  hasCurrency(): boolean;
  clearCurrency(): SeatPriceBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatPriceBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatPriceBasicInfo): SeatPriceBasicInfo.AsObject;
  static serializeBinaryToWriter(message: SeatPriceBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatPriceBasicInfo;
  static deserializeBinaryFromReader(message: SeatPriceBasicInfo, reader: jspb.BinaryReader): SeatPriceBasicInfo;
}

export namespace SeatPriceBasicInfo {
  export type AsObject = {
    name: string,
    icon: string,
    price: number,
    currency?: CurrencySimpleInfo.AsObject,
  }
}

export class SeatPriceListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatPriceListInfo;

  getInfo(): SeatPriceBasicInfo | undefined;
  setInfo(value?: SeatPriceBasicInfo): SeatPriceListInfo;
  hasInfo(): boolean;
  clearInfo(): SeatPriceListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): SeatPriceListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SeatPriceListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SeatPriceListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SeatPriceListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatPriceListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatPriceListInfo): SeatPriceListInfo.AsObject;
  static serializeBinaryToWriter(message: SeatPriceListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatPriceListInfo;
  static deserializeBinaryFromReader(message: SeatPriceListInfo, reader: jspb.BinaryReader): SeatPriceListInfo;
}

export namespace SeatPriceListInfo {
  export type AsObject = {
    id: string,
    info?: SeatPriceBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class CreateSeatPriceReq extends jspb.Message {
  getInfo(): SeatPriceBasicInfo | undefined;
  setInfo(value?: SeatPriceBasicInfo): CreateSeatPriceReq;
  hasInfo(): boolean;
  clearInfo(): CreateSeatPriceReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatPriceReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatPriceReq): CreateSeatPriceReq.AsObject;
  static serializeBinaryToWriter(message: CreateSeatPriceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatPriceReq;
  static deserializeBinaryFromReader(message: CreateSeatPriceReq, reader: jspb.BinaryReader): CreateSeatPriceReq;
}

export namespace CreateSeatPriceReq {
  export type AsObject = {
    info?: SeatPriceBasicInfo.AsObject,
  }
}

export class UpdateSeatPriceReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSeatPriceReq;

  getInfo(): SeatPriceBasicInfo | undefined;
  setInfo(value?: SeatPriceBasicInfo): UpdateSeatPriceReq;
  hasInfo(): boolean;
  clearInfo(): UpdateSeatPriceReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeatPriceReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeatPriceReq): UpdateSeatPriceReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSeatPriceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeatPriceReq;
  static deserializeBinaryFromReader(message: UpdateSeatPriceReq, reader: jspb.BinaryReader): UpdateSeatPriceReq;
}

export namespace UpdateSeatPriceReq {
  export type AsObject = {
    id: string,
    info?: SeatPriceBasicInfo.AsObject,
  }
}

export class DeleteSeatPriceReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSeatPriceReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSeatPriceReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSeatPriceReq): DeleteSeatPriceReq.AsObject;
  static serializeBinaryToWriter(message: DeleteSeatPriceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSeatPriceReq;
  static deserializeBinaryFromReader(message: DeleteSeatPriceReq, reader: jspb.BinaryReader): DeleteSeatPriceReq;
}

export namespace DeleteSeatPriceReq {
  export type AsObject = {
    id: string,
  }
}

export class ListSeatPriceReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListSeatPriceReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): ListSeatPriceReq;
  hasPagination(): boolean;
  clearPagination(): ListSeatPriceReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): ListSeatPriceReq;
  clearOrderByList(): ListSeatPriceReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatPriceReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatPriceReq): ListSeatPriceReq.AsObject;
  static serializeBinaryToWriter(message: ListSeatPriceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatPriceReq;
  static deserializeBinaryFromReader(message: ListSeatPriceReq, reader: jspb.BinaryReader): ListSeatPriceReq;
}

export namespace ListSeatPriceReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
  }
}

export class RetrieveSeatPriceReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSeatPriceReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatPriceReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatPriceReq): RetrieveSeatPriceReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatPriceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatPriceReq;
  static deserializeBinaryFromReader(message: RetrieveSeatPriceReq, reader: jspb.BinaryReader): RetrieveSeatPriceReq;
}

export namespace RetrieveSeatPriceReq {
  export type AsObject = {
    id: string,
  }
}

export class CreateSeatPriceRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSeatPriceRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatPriceRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatPriceRes): CreateSeatPriceRes.AsObject;
  static serializeBinaryToWriter(message: CreateSeatPriceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatPriceRes;
  static deserializeBinaryFromReader(message: CreateSeatPriceRes, reader: jspb.BinaryReader): CreateSeatPriceRes;
}

export namespace CreateSeatPriceRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveSeatPriceRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSeatPriceRes;

  getInfo(): SeatPriceBasicInfo | undefined;
  setInfo(value?: SeatPriceBasicInfo): RetrieveSeatPriceRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveSeatPriceRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrieveSeatPriceRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrieveSeatPriceRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrieveSeatPriceRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrieveSeatPriceRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatPriceRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatPriceRes): RetrieveSeatPriceRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatPriceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatPriceRes;
  static deserializeBinaryFromReader(message: RetrieveSeatPriceRes, reader: jspb.BinaryReader): RetrieveSeatPriceRes;
}

export namespace RetrieveSeatPriceRes {
  export type AsObject = {
    id: string,
    info?: SeatPriceBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListSeatPriceRes extends jspb.Message {
  getInfoList(): Array<SeatPriceListInfo>;
  setInfoList(value: Array<SeatPriceListInfo>): ListSeatPriceRes;
  clearInfoList(): ListSeatPriceRes;
  addInfo(value?: SeatPriceListInfo, index?: number): SeatPriceListInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): ListSeatPriceRes;
  hasPagination(): boolean;
  clearPagination(): ListSeatPriceRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatPriceRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatPriceRes): ListSeatPriceRes.AsObject;
  static serializeBinaryToWriter(message: ListSeatPriceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatPriceRes;
  static deserializeBinaryFromReader(message: ListSeatPriceRes, reader: jspb.BinaryReader): ListSeatPriceRes;
}

export namespace ListSeatPriceRes {
  export type AsObject = {
    infoList: Array<SeatPriceListInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

