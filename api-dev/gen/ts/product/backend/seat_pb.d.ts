import * as jspb from 'google-protobuf'



export class SeatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatInfo;

  getUserId(): string;
  setUserId(value: string): SeatInfo;

  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): SeatInfo;

  getSeatPriceBlockId(): string;
  setSeatPriceBlockId(value: string): SeatInfo;

  getPosition(): SeatPosition | undefined;
  setPosition(value?: SeatPosition): SeatInfo;
  hasPosition(): boolean;
  clearPosition(): SeatInfo;

  getName(): string;
  setName(value: string): SeatInfo;

  getSeatType(): SeatType;
  setSeatType(value: SeatType): SeatInfo;

  getPrice(): number;
  setPrice(value: number): SeatInfo;

  getCurrency(): SeatPriceCurrencyInfo | undefined;
  setCurrency(value?: SeatPriceCurrencyInfo): SeatInfo;
  hasCurrency(): boolean;
  clearCurrency(): SeatInfo;

  getStatus(): SeatStatus;
  setStatus(value: SeatStatus): SeatInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): SeatInfo;

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
    userId: string,
    generalSeatMapId: string,
    seatPriceBlockId: string,
    position?: SeatPosition.AsObject,
    name: string,
    seatType: SeatType,
    price: number,
    currency?: SeatPriceCurrencyInfo.AsObject,
    status: SeatStatus,
    partnershipId: string,
  }
}

export class SeatPriceCurrencyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatPriceCurrencyInfo;

  getName(): string;
  setName(value: string): SeatPriceCurrencyInfo;

  getCode(): string;
  setCode(value: string): SeatPriceCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): SeatPriceCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatPriceCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatPriceCurrencyInfo): SeatPriceCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: SeatPriceCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatPriceCurrencyInfo;
  static deserializeBinaryFromReader(message: SeatPriceCurrencyInfo, reader: jspb.BinaryReader): SeatPriceCurrencyInfo;
}

export namespace SeatPriceCurrencyInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class SeatPosition extends jspb.Message {
  getX(): number;
  setX(value: number): SeatPosition;

  getY(): number;
  setY(value: number): SeatPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatPosition.AsObject;
  static toObject(includeInstance: boolean, msg: SeatPosition): SeatPosition.AsObject;
  static serializeBinaryToWriter(message: SeatPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatPosition;
  static deserializeBinaryFromReader(message: SeatPosition, reader: jspb.BinaryReader): SeatPosition;
}

export namespace SeatPosition {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class SeatSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatSimpleInfo;

  getName(): string;
  setName(value: string): SeatSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatSimpleInfo): SeatSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: SeatSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatSimpleInfo;
  static deserializeBinaryFromReader(message: SeatSimpleInfo, reader: jspb.BinaryReader): SeatSimpleInfo;
}

export namespace SeatSimpleInfo {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class CheckIsAbleDeleteSeatsInPriceBlockIdReq extends jspb.Message {
  getPriceBlockId(): string;
  setPriceBlockId(value: string): CheckIsAbleDeleteSeatsInPriceBlockIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckIsAbleDeleteSeatsInPriceBlockIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckIsAbleDeleteSeatsInPriceBlockIdReq): CheckIsAbleDeleteSeatsInPriceBlockIdReq.AsObject;
  static serializeBinaryToWriter(message: CheckIsAbleDeleteSeatsInPriceBlockIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckIsAbleDeleteSeatsInPriceBlockIdReq;
  static deserializeBinaryFromReader(message: CheckIsAbleDeleteSeatsInPriceBlockIdReq, reader: jspb.BinaryReader): CheckIsAbleDeleteSeatsInPriceBlockIdReq;
}

export namespace CheckIsAbleDeleteSeatsInPriceBlockIdReq {
  export type AsObject = {
    priceBlockId: string,
  }
}

export class GetSeatsReq extends jspb.Message {
  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): GetSeatsReq;
  clearSeatIdsList(): GetSeatsReq;
  addSeatIds(value: string, index?: number): GetSeatsReq;

  getStatus(): SeatStatus;
  setStatus(value: SeatStatus): GetSeatsReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetSeatsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeatsReq): GetSeatsReq.AsObject;
  static serializeBinaryToWriter(message: GetSeatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeatsReq;
  static deserializeBinaryFromReader(message: GetSeatsReq, reader: jspb.BinaryReader): GetSeatsReq;
}

export namespace GetSeatsReq {
  export type AsObject = {
    seatIdsList: Array<string>,
    status: SeatStatus,
    partnershipId: string,
  }
}

export class CheckIsAbleDeleteSeatsInPriceBlockIdRes extends jspb.Message {
  getIsAbleDelete(): boolean;
  setIsAbleDelete(value: boolean): CheckIsAbleDeleteSeatsInPriceBlockIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckIsAbleDeleteSeatsInPriceBlockIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: CheckIsAbleDeleteSeatsInPriceBlockIdRes): CheckIsAbleDeleteSeatsInPriceBlockIdRes.AsObject;
  static serializeBinaryToWriter(message: CheckIsAbleDeleteSeatsInPriceBlockIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckIsAbleDeleteSeatsInPriceBlockIdRes;
  static deserializeBinaryFromReader(message: CheckIsAbleDeleteSeatsInPriceBlockIdRes, reader: jspb.BinaryReader): CheckIsAbleDeleteSeatsInPriceBlockIdRes;
}

export namespace CheckIsAbleDeleteSeatsInPriceBlockIdRes {
  export type AsObject = {
    isAbleDelete: boolean,
  }
}

export class GetSeatsRes extends jspb.Message {
  getSeatsList(): Array<SeatInfo>;
  setSeatsList(value: Array<SeatInfo>): GetSeatsRes;
  clearSeatsList(): GetSeatsRes;
  addSeats(value?: SeatInfo, index?: number): SeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeatsRes): GetSeatsRes.AsObject;
  static serializeBinaryToWriter(message: GetSeatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeatsRes;
  static deserializeBinaryFromReader(message: GetSeatsRes, reader: jspb.BinaryReader): GetSeatsRes;
}

export namespace GetSeatsRes {
  export type AsObject = {
    seatsList: Array<SeatInfo.AsObject>,
  }
}

export enum SeatStatus { 
  SEAT_STATUS_INVALID = 0,
  SEAT_STATUS_UNAVAILABLE = 1,
  SEAT_STATUS_AVAILABLE = 2,
  SEAT_STATUS_BLOCKED = 3,
  SEAT_STATUS_BOOKED = 4,
}
export enum SeatType { 
  SEAT_TYPE_INVALID = 0,
  SEAT_TYPE_GENERAL = 1,
  SEAT_TYPE_SPECIAL = 2,
  SEAT_TYPE_VIP = 3,
  SEAT_TYPE_COUPLE = 4,
  SEAT_TYPE_OTHER = 5,
}
