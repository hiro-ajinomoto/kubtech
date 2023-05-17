import * as jspb from 'google-protobuf'

import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class CurrencyBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): CurrencyBasicInfo;

  getCode(): string;
  setCode(value: string): CurrencyBasicInfo;

  getIcon(): string;
  setIcon(value: string): CurrencyBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyBasicInfo): CurrencyBasicInfo.AsObject;
  static serializeBinaryToWriter(message: CurrencyBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyBasicInfo;
  static deserializeBinaryFromReader(message: CurrencyBasicInfo, reader: jspb.BinaryReader): CurrencyBasicInfo;
}

export namespace CurrencyBasicInfo {
  export type AsObject = {
    name: string,
    code: string,
    icon: string,
  }
}

export class CurrencyListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CurrencyListInfo;

  getInfo(): CurrencyBasicInfo | undefined;
  setInfo(value?: CurrencyBasicInfo): CurrencyListInfo;
  hasInfo(): boolean;
  clearInfo(): CurrencyListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): CurrencyListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CurrencyListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): CurrencyListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): CurrencyListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyListInfo): CurrencyListInfo.AsObject;
  static serializeBinaryToWriter(message: CurrencyListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyListInfo;
  static deserializeBinaryFromReader(message: CurrencyListInfo, reader: jspb.BinaryReader): CurrencyListInfo;
}

export namespace CurrencyListInfo {
  export type AsObject = {
    id: string,
    info?: CurrencyBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class CreateCurrencyReq extends jspb.Message {
  getInfo(): CurrencyBasicInfo | undefined;
  setInfo(value?: CurrencyBasicInfo): CreateCurrencyReq;
  hasInfo(): boolean;
  clearInfo(): CreateCurrencyReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCurrencyReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCurrencyReq): CreateCurrencyReq.AsObject;
  static serializeBinaryToWriter(message: CreateCurrencyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCurrencyReq;
  static deserializeBinaryFromReader(message: CreateCurrencyReq, reader: jspb.BinaryReader): CreateCurrencyReq;
}

export namespace CreateCurrencyReq {
  export type AsObject = {
    info?: CurrencyBasicInfo.AsObject,
  }
}

export class UpdateCurrencyReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCurrencyReq;

  getInfo(): CurrencyBasicInfo | undefined;
  setInfo(value?: CurrencyBasicInfo): UpdateCurrencyReq;
  hasInfo(): boolean;
  clearInfo(): UpdateCurrencyReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCurrencyReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCurrencyReq): UpdateCurrencyReq.AsObject;
  static serializeBinaryToWriter(message: UpdateCurrencyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCurrencyReq;
  static deserializeBinaryFromReader(message: UpdateCurrencyReq, reader: jspb.BinaryReader): UpdateCurrencyReq;
}

export namespace UpdateCurrencyReq {
  export type AsObject = {
    id: string,
    info?: CurrencyBasicInfo.AsObject,
  }
}

export class DeleteCurrencyReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCurrencyReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCurrencyReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCurrencyReq): DeleteCurrencyReq.AsObject;
  static serializeBinaryToWriter(message: DeleteCurrencyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCurrencyReq;
  static deserializeBinaryFromReader(message: DeleteCurrencyReq, reader: jspb.BinaryReader): DeleteCurrencyReq;
}

export namespace DeleteCurrencyReq {
  export type AsObject = {
    id: string,
  }
}

export class ListCurrencyReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListCurrencyReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): ListCurrencyReq;
  hasPagination(): boolean;
  clearPagination(): ListCurrencyReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): ListCurrencyReq;
  clearOrderByList(): ListCurrencyReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCurrencyReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCurrencyReq): ListCurrencyReq.AsObject;
  static serializeBinaryToWriter(message: ListCurrencyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCurrencyReq;
  static deserializeBinaryFromReader(message: ListCurrencyReq, reader: jspb.BinaryReader): ListCurrencyReq;
}

export namespace ListCurrencyReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
  }
}

export class RetrieveCurrencyReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveCurrencyReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveCurrencyReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveCurrencyReq): RetrieveCurrencyReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveCurrencyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveCurrencyReq;
  static deserializeBinaryFromReader(message: RetrieveCurrencyReq, reader: jspb.BinaryReader): RetrieveCurrencyReq;
}

export namespace RetrieveCurrencyReq {
  export type AsObject = {
    id: string,
  }
}

export class InternalRetrieveCurrencyReq extends jspb.Message {
  getId(): string;
  setId(value: string): InternalRetrieveCurrencyReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalRetrieveCurrencyReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalRetrieveCurrencyReq): InternalRetrieveCurrencyReq.AsObject;
  static serializeBinaryToWriter(message: InternalRetrieveCurrencyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalRetrieveCurrencyReq;
  static deserializeBinaryFromReader(message: InternalRetrieveCurrencyReq, reader: jspb.BinaryReader): InternalRetrieveCurrencyReq;
}

export namespace InternalRetrieveCurrencyReq {
  export type AsObject = {
    id: string,
  }
}

export class CreateCurrencyRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateCurrencyRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCurrencyRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCurrencyRes): CreateCurrencyRes.AsObject;
  static serializeBinaryToWriter(message: CreateCurrencyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCurrencyRes;
  static deserializeBinaryFromReader(message: CreateCurrencyRes, reader: jspb.BinaryReader): CreateCurrencyRes;
}

export namespace CreateCurrencyRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveCurrencyRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveCurrencyRes;

  getInfo(): CurrencyBasicInfo | undefined;
  setInfo(value?: CurrencyBasicInfo): RetrieveCurrencyRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveCurrencyRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrieveCurrencyRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrieveCurrencyRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrieveCurrencyRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrieveCurrencyRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveCurrencyRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveCurrencyRes): RetrieveCurrencyRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveCurrencyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveCurrencyRes;
  static deserializeBinaryFromReader(message: RetrieveCurrencyRes, reader: jspb.BinaryReader): RetrieveCurrencyRes;
}

export namespace RetrieveCurrencyRes {
  export type AsObject = {
    id: string,
    info?: CurrencyBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListCurrencyRes extends jspb.Message {
  getInfoList(): Array<CurrencyListInfo>;
  setInfoList(value: Array<CurrencyListInfo>): ListCurrencyRes;
  clearInfoList(): ListCurrencyRes;
  addInfo(value?: CurrencyListInfo, index?: number): CurrencyListInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): ListCurrencyRes;
  hasPagination(): boolean;
  clearPagination(): ListCurrencyRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCurrencyRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCurrencyRes): ListCurrencyRes.AsObject;
  static serializeBinaryToWriter(message: ListCurrencyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCurrencyRes;
  static deserializeBinaryFromReader(message: ListCurrencyRes, reader: jspb.BinaryReader): ListCurrencyRes;
}

export namespace ListCurrencyRes {
  export type AsObject = {
    infoList: Array<CurrencyListInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

export class InternalRetrieveCurrencyRes extends jspb.Message {
  getId(): string;
  setId(value: string): InternalRetrieveCurrencyRes;

  getInfo(): CurrencyBasicInfo | undefined;
  setInfo(value?: CurrencyBasicInfo): InternalRetrieveCurrencyRes;
  hasInfo(): boolean;
  clearInfo(): InternalRetrieveCurrencyRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalRetrieveCurrencyRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalRetrieveCurrencyRes): InternalRetrieveCurrencyRes.AsObject;
  static serializeBinaryToWriter(message: InternalRetrieveCurrencyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalRetrieveCurrencyRes;
  static deserializeBinaryFromReader(message: InternalRetrieveCurrencyRes, reader: jspb.BinaryReader): InternalRetrieveCurrencyRes;
}

export namespace InternalRetrieveCurrencyRes {
  export type AsObject = {
    id: string,
    info?: CurrencyBasicInfo.AsObject,
  }
}

