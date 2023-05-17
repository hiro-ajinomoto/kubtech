import * as jspb from 'google-protobuf'



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

export class Media extends jspb.Message {
  getName(): string;
  setName(value: string): Media;

  getMediaType(): MediaType;
  setMediaType(value: MediaType): Media;

  getSourceUrl(): string;
  setSourceUrl(value: string): Media;

  getThumbnail(): string;
  setThumbnail(value: string): Media;

  getIsCover(): boolean;
  setIsCover(value: boolean): Media;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Media.AsObject;
  static toObject(includeInstance: boolean, msg: Media): Media.AsObject;
  static serializeBinaryToWriter(message: Media, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Media;
  static deserializeBinaryFromReader(message: Media, reader: jspb.BinaryReader): Media;
}

export namespace Media {
  export type AsObject = {
    name: string,
    mediaType: MediaType,
    sourceUrl: string,
    thumbnail: string,
    isCover: boolean,
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

export class SeatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatInfo;

  getType(): SeatInfoType;
  setType(value: SeatInfoType): SeatInfo;

  getSeatName(): string;
  setSeatName(value: string): SeatInfo;

  getSeatId(): string;
  setSeatId(value: string): SeatInfo;

  getSeatBlockId(): string;
  setSeatBlockId(value: string): SeatInfo;

  getSeatBlockName(): string;
  setSeatBlockName(value: string): SeatInfo;

  getSeatMapId(): string;
  setSeatMapId(value: string): SeatInfo;

  getScheduleId(): string;
  setScheduleId(value: string): SeatInfo;

  getEventId(): string;
  setEventId(value: string): SeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatInfo): SeatInfo.AsObject;
  static serializeBinaryToWriter(message: SeatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatInfo;
  static deserializeBinaryFromReader(message: SeatInfo, reader: jspb.BinaryReader): SeatInfo;
}

export namespace SeatInfo {
  export type AsObject = {
    id: string,
    type: SeatInfoType,
    seatName: string,
    seatId: string,
    seatBlockId: string,
    seatBlockName: string,
    seatMapId: string,
    scheduleId: string,
    eventId: string,
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
export enum SeatInfoType { 
  SEATINFOTYPENONE = 0,
  SEATINFOTYPESEAT = 1,
  SEATINFOTYPESEATBLOCK = 2,
}
export enum ProductType { 
  PRODUCTTYPENONE = 0,
  PRODUCTTYPEVOD = 1,
  PRODUCTTYPETICKET = 2,
}
