import * as jspb from 'google-protobuf'



export class PaginationReq extends jspb.Message {
  getPageNumber(): number;
  setPageNumber(value: number): PaginationReq;

  getPageLimit(): number;
  setPageLimit(value: number): PaginationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationReq.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationReq): PaginationReq.AsObject;
  static serializeBinaryToWriter(message: PaginationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationReq;
  static deserializeBinaryFromReader(message: PaginationReq, reader: jspb.BinaryReader): PaginationReq;
}

export namespace PaginationReq {
  export type AsObject = {
    pageNumber: number,
    pageLimit: number,
  }
}

export class PaginationRes extends jspb.Message {
  getPageCurrent(): number;
  setPageCurrent(value: number): PaginationRes;

  getPageLimit(): number;
  setPageLimit(value: number): PaginationRes;

  getTotalPage(): number;
  setTotalPage(value: number): PaginationRes;

  getTotalRecord(): number;
  setTotalRecord(value: number): PaginationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationRes.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationRes): PaginationRes.AsObject;
  static serializeBinaryToWriter(message: PaginationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationRes;
  static deserializeBinaryFromReader(message: PaginationRes, reader: jspb.BinaryReader): PaginationRes;
}

export namespace PaginationRes {
  export type AsObject = {
    pageCurrent: number,
    pageLimit: number,
    totalPage: number,
    totalRecord: number,
  }
}

export class OrderByItem extends jspb.Message {
  getDesc(): boolean;
  setDesc(value: boolean): OrderByItem;

  getField(): string;
  setField(value: string): OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByItem.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByItem): OrderByItem.AsObject;
  static serializeBinaryToWriter(message: OrderByItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByItem;
  static deserializeBinaryFromReader(message: OrderByItem, reader: jspb.BinaryReader): OrderByItem;
}

export namespace OrderByItem {
  export type AsObject = {
    desc: boolean,
    field: string,
  }
}

export class DefaultRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DefaultRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultRes.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultRes): DefaultRes.AsObject;
  static serializeBinaryToWriter(message: DefaultRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultRes;
  static deserializeBinaryFromReader(message: DefaultRes, reader: jspb.BinaryReader): DefaultRes;
}

export namespace DefaultRes {
  export type AsObject = {
    result: boolean,
  }
}

export class Coordinates extends jspb.Message {
  getLat(): number;
  setLat(value: number): Coordinates;

  getLong(): number;
  setLong(value: number): Coordinates;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coordinates.AsObject;
  static toObject(includeInstance: boolean, msg: Coordinates): Coordinates.AsObject;
  static serializeBinaryToWriter(message: Coordinates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coordinates;
  static deserializeBinaryFromReader(message: Coordinates, reader: jspb.BinaryReader): Coordinates;
}

export namespace Coordinates {
  export type AsObject = {
    lat: number,
    pb_long: number,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export enum Boolean { 
  BOOLEAN_INVALID = 0,
  BOOLEAN_TRUE = 1,
  BOOLEAN_FALSE = 2,
}
