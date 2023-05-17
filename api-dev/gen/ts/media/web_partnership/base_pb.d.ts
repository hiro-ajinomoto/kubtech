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

export class I18N extends jspb.Message {
  getLangCode(): string;
  setLangCode(value: string): I18N;

  getText(): string;
  setText(value: string): I18N;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): I18N.AsObject;
  static toObject(includeInstance: boolean, msg: I18N): I18N.AsObject;
  static serializeBinaryToWriter(message: I18N, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): I18N;
  static deserializeBinaryFromReader(message: I18N, reader: jspb.BinaryReader): I18N;
}

export namespace I18N {
  export type AsObject = {
    langCode: string,
    text: string,
  }
}

export enum MediaType { 
  INVALID = 0,
  IMAGE = 1,
  VIDEO = 2,
  AUDIO = 3,
  URL = 4,
  PDF = 5,
  DOC = 6,
  OTHER = 7,
}
export enum Boolean { 
  BOOLEAN_INVALID = 0,
  BOOLEAN_TRUE = 1,
  BOOLEAN_FALSE = 2,
}
