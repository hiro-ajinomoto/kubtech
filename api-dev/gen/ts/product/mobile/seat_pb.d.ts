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

export class AvailableSeatsByBlockIds extends jspb.Message {
  getSeatPriceBlockId(): string;
  setSeatPriceBlockId(value: string): AvailableSeatsByBlockIds;

  getTotalAvailableSeats(): number;
  setTotalAvailableSeats(value: number): AvailableSeatsByBlockIds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableSeatsByBlockIds.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableSeatsByBlockIds): AvailableSeatsByBlockIds.AsObject;
  static serializeBinaryToWriter(message: AvailableSeatsByBlockIds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableSeatsByBlockIds;
  static deserializeBinaryFromReader(message: AvailableSeatsByBlockIds, reader: jspb.BinaryReader): AvailableSeatsByBlockIds;
}

export namespace AvailableSeatsByBlockIds {
  export type AsObject = {
    seatPriceBlockId: string,
    totalAvailableSeats: number,
  }
}

export class GetSeatsReq extends jspb.Message {
  getSeatPriceBlockId(): string;
  setSeatPriceBlockId(value: string): GetSeatsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeatsReq): GetSeatsReq.AsObject;
  static serializeBinaryToWriter(message: GetSeatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeatsReq;
  static deserializeBinaryFromReader(message: GetSeatsReq, reader: jspb.BinaryReader): GetSeatsReq;
}

export namespace GetSeatsReq {
  export type AsObject = {
    seatPriceBlockId: string,
  }
}

export class GetAvailableSeatsReq extends jspb.Message {
  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): GetAvailableSeatsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableSeatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableSeatsReq): GetAvailableSeatsReq.AsObject;
  static serializeBinaryToWriter(message: GetAvailableSeatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableSeatsReq;
  static deserializeBinaryFromReader(message: GetAvailableSeatsReq, reader: jspb.BinaryReader): GetAvailableSeatsReq;
}

export namespace GetAvailableSeatsReq {
  export type AsObject = {
    generalSeatMapId: string,
  }
}

export class GetSeatsRes extends jspb.Message {
  getInfosList(): Array<SeatInfo>;
  setInfosList(value: Array<SeatInfo>): GetSeatsRes;
  clearInfosList(): GetSeatsRes;
  addInfos(value?: SeatInfo, index?: number): SeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeatsRes): GetSeatsRes.AsObject;
  static serializeBinaryToWriter(message: GetSeatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeatsRes;
  static deserializeBinaryFromReader(message: GetSeatsRes, reader: jspb.BinaryReader): GetSeatsRes;
}

export namespace GetSeatsRes {
  export type AsObject = {
    infosList: Array<SeatInfo.AsObject>,
  }
}

export class GetAvailableSeatsRes extends jspb.Message {
  getInfoList(): Array<AvailableSeatsByBlockIds>;
  setInfoList(value: Array<AvailableSeatsByBlockIds>): GetAvailableSeatsRes;
  clearInfoList(): GetAvailableSeatsRes;
  addInfo(value?: AvailableSeatsByBlockIds, index?: number): AvailableSeatsByBlockIds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableSeatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableSeatsRes): GetAvailableSeatsRes.AsObject;
  static serializeBinaryToWriter(message: GetAvailableSeatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableSeatsRes;
  static deserializeBinaryFromReader(message: GetAvailableSeatsRes, reader: jspb.BinaryReader): GetAvailableSeatsRes;
}

export namespace GetAvailableSeatsRes {
  export type AsObject = {
    infoList: Array<AvailableSeatsByBlockIds.AsObject>,
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
