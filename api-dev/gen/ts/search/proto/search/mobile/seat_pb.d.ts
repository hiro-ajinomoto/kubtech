import * as jspb from 'google-protobuf'



export class SeatBasicInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatBasicInfo;

  getUserId(): string;
  setUserId(value: string): SeatBasicInfo;

  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): SeatBasicInfo;

  getSeatPriceBlockId(): string;
  setSeatPriceBlockId(value: string): SeatBasicInfo;

  getPosition(): SeatPosition | undefined;
  setPosition(value?: SeatPosition): SeatBasicInfo;
  hasPosition(): boolean;
  clearPosition(): SeatBasicInfo;

  getName(): string;
  setName(value: string): SeatBasicInfo;

  getSeatType(): SeatTypeBasicInfo | undefined;
  setSeatType(value?: SeatTypeBasicInfo): SeatBasicInfo;
  hasSeatType(): boolean;
  clearSeatType(): SeatBasicInfo;

  getPrice(): SeatPriceInfo | undefined;
  setPrice(value?: SeatPriceInfo): SeatBasicInfo;
  hasPrice(): boolean;
  clearPrice(): SeatBasicInfo;

  getSeatAccessoriesList(): Array<SeatAccessoryBasicInfo>;
  setSeatAccessoriesList(value: Array<SeatAccessoryBasicInfo>): SeatBasicInfo;
  clearSeatAccessoriesList(): SeatBasicInfo;
  addSeatAccessories(value?: SeatAccessoryBasicInfo, index?: number): SeatAccessoryBasicInfo;

  getLockExpiredTime(): number;
  setLockExpiredTime(value: number): SeatBasicInfo;

  getStatus(): SeatStatus;
  setStatus(value: SeatStatus): SeatBasicInfo;

  getIsMine(): boolean;
  setIsMine(value: boolean): SeatBasicInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): SeatBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatBasicInfo): SeatBasicInfo.AsObject;
  static serializeBinaryToWriter(message: SeatBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatBasicInfo;
  static deserializeBinaryFromReader(message: SeatBasicInfo, reader: jspb.BinaryReader): SeatBasicInfo;
}

export namespace SeatBasicInfo {
  export type AsObject = {
    id: string,
    userId: string,
    generalSeatMapId: string,
    seatPriceBlockId: string,
    position?: SeatPosition.AsObject,
    name: string,
    seatType?: SeatTypeBasicInfo.AsObject,
    price?: SeatPriceInfo.AsObject,
    seatAccessoriesList: Array<SeatAccessoryBasicInfo.AsObject>,
    lockExpiredTime: number,
    status: SeatStatus,
    isMine: boolean,
    partnershipId: string,
  }
}

export class SeatPriceInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatPriceInfo;

  getName(): string;
  setName(value: string): SeatPriceInfo;

  getIcon(): string;
  setIcon(value: string): SeatPriceInfo;

  getPrice(): number;
  setPrice(value: number): SeatPriceInfo;

  getCurrency(): SeatPriceCurrencyInfo | undefined;
  setCurrency(value?: SeatPriceCurrencyInfo): SeatPriceInfo;
  hasCurrency(): boolean;
  clearCurrency(): SeatPriceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatPriceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatPriceInfo): SeatPriceInfo.AsObject;
  static serializeBinaryToWriter(message: SeatPriceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatPriceInfo;
  static deserializeBinaryFromReader(message: SeatPriceInfo, reader: jspb.BinaryReader): SeatPriceInfo;
}

export namespace SeatPriceInfo {
  export type AsObject = {
    id: string,
    name: string,
    icon: string,
    price: number,
    currency?: SeatPriceCurrencyInfo.AsObject,
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

export class SeatAccessoryBasicInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatAccessoryBasicInfo;

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
    id: string,
    name: string,
  }
}

export class SeatTypeBasicInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatTypeBasicInfo;

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
    id: string,
    name: string,
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

export class GetSeatsRes extends jspb.Message {
  getInfosList(): Array<SeatBasicInfo>;
  setInfosList(value: Array<SeatBasicInfo>): GetSeatsRes;
  clearInfosList(): GetSeatsRes;
  addInfos(value?: SeatBasicInfo, index?: number): SeatBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeatsRes): GetSeatsRes.AsObject;
  static serializeBinaryToWriter(message: GetSeatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeatsRes;
  static deserializeBinaryFromReader(message: GetSeatsRes, reader: jspb.BinaryReader): GetSeatsRes;
}

export namespace GetSeatsRes {
  export type AsObject = {
    infosList: Array<SeatBasicInfo.AsObject>,
  }
}

export enum SeatStatus { 
  SEAT_STATUS_INVALID = 0,
  SEAT_STATUS_UNAVAILABLE = 1,
  SEAT_STATUS_AVAILABLE = 2,
  SEAT_STATUS_BLOCKED = 3,
  SEAT_STATUS_BOOKED = 4,
}
