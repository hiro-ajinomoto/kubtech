import * as jspb from 'google-protobuf'



export class SeatMap extends jspb.Message {
  getId(): string;
  setId(value: string): SeatMap;

  getName(): string;
  setName(value: string): SeatMap;

  getDescription(): string;
  setDescription(value: string): SeatMap;

  getMapPicture(): string;
  setMapPicture(value: string): SeatMap;

  getBlocksList(): Array<SeatBlock>;
  setBlocksList(value: Array<SeatBlock>): SeatMap;
  clearBlocksList(): SeatMap;
  addBlocks(value?: SeatBlock, index?: number): SeatBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatMap.AsObject;
  static toObject(includeInstance: boolean, msg: SeatMap): SeatMap.AsObject;
  static serializeBinaryToWriter(message: SeatMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatMap;
  static deserializeBinaryFromReader(message: SeatMap, reader: jspb.BinaryReader): SeatMap;
}

export namespace SeatMap {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    mapPicture: string,
    blocksList: Array<SeatBlock.AsObject>,
  }
}

export class SeatMapInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatMapInfo;

  getName(): string;
  setName(value: string): SeatMapInfo;

  getDescription(): string;
  setDescription(value: string): SeatMapInfo;

  getMapPicture(): string;
  setMapPicture(value: string): SeatMapInfo;

  getBlocksList(): Array<SeatBlock>;
  setBlocksList(value: Array<SeatBlock>): SeatMapInfo;
  clearBlocksList(): SeatMapInfo;
  addBlocks(value?: SeatBlock, index?: number): SeatBlock;

  getCreatedAt(): number;
  setCreatedAt(value: number): SeatMapInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SeatMapInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SeatMapInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SeatMapInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatMapInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatMapInfo): SeatMapInfo.AsObject;
  static serializeBinaryToWriter(message: SeatMapInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatMapInfo;
  static deserializeBinaryFromReader(message: SeatMapInfo, reader: jspb.BinaryReader): SeatMapInfo;
}

export namespace SeatMapInfo {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    mapPicture: string,
    blocksList: Array<SeatBlock.AsObject>,
    createdAt: number,
    createdBy: string,
    updatedAt: number,
    updatedBy: string,
  }
}

export class SeatBlock extends jspb.Message {
  getId(): string;
  setId(value: string): SeatBlock;

  getName(): string;
  setName(value: string): SeatBlock;

  getColor(): string;
  setColor(value: string): SeatBlock;

  getRow(): SeatLabel | undefined;
  setRow(value?: SeatLabel): SeatBlock;
  hasRow(): boolean;
  clearRow(): SeatBlock;

  getCol(): SeatLabel | undefined;
  setCol(value?: SeatLabel): SeatBlock;
  hasCol(): boolean;
  clearCol(): SeatBlock;

  getPrice(): number;
  setPrice(value: number): SeatBlock;

  getCurrency(): Currency | undefined;
  setCurrency(value?: Currency): SeatBlock;
  hasCurrency(): boolean;
  clearCurrency(): SeatBlock;

  getPosition(): Position | undefined;
  setPosition(value?: Position): SeatBlock;
  hasPosition(): boolean;
  clearPosition(): SeatBlock;

  getDescription(): string;
  setDescription(value: string): SeatBlock;

  getSeatsList(): Array<Seat>;
  setSeatsList(value: Array<Seat>): SeatBlock;
  clearSeatsList(): SeatBlock;
  addSeats(value?: Seat, index?: number): Seat;

  getSeatMapId(): string;
  setSeatMapId(value: string): SeatBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatBlock.AsObject;
  static toObject(includeInstance: boolean, msg: SeatBlock): SeatBlock.AsObject;
  static serializeBinaryToWriter(message: SeatBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatBlock;
  static deserializeBinaryFromReader(message: SeatBlock, reader: jspb.BinaryReader): SeatBlock;
}

export namespace SeatBlock {
  export type AsObject = {
    id: string,
    name: string,
    color: string,
    row?: SeatLabel.AsObject,
    col?: SeatLabel.AsObject,
    price: number,
    currency?: Currency.AsObject,
    position?: Position.AsObject,
    description: string,
    seatsList: Array<Seat.AsObject>,
    seatMapId: string,
  }
}

export class SeatLabel extends jspb.Message {
  getTotalSeat(): number;
  setTotalSeat(value: number): SeatLabel;

  getLabelType(): LabelType;
  setLabelType(value: LabelType): SeatLabel;

  getStartWith(): string;
  setStartWith(value: string): SeatLabel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatLabel.AsObject;
  static toObject(includeInstance: boolean, msg: SeatLabel): SeatLabel.AsObject;
  static serializeBinaryToWriter(message: SeatLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatLabel;
  static deserializeBinaryFromReader(message: SeatLabel, reader: jspb.BinaryReader): SeatLabel;
}

export namespace SeatLabel {
  export type AsObject = {
    totalSeat: number,
    labelType: LabelType,
    startWith: string,
  }
}

export class Currency extends jspb.Message {
  getId(): string;
  setId(value: string): Currency;

  getName(): string;
  setName(value: string): Currency;

  getCode(): string;
  setCode(value: string): Currency;

  getIcon(): string;
  setIcon(value: string): Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class Position extends jspb.Message {
  getX(): number;
  setX(value: number): Position;

  getY(): number;
  setY(value: number): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class Seat extends jspb.Message {
  getName(): string;
  setName(value: string): Seat;

  getPosition(): Position | undefined;
  setPosition(value?: Position): Seat;
  hasPosition(): boolean;
  clearPosition(): Seat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Seat.AsObject;
  static toObject(includeInstance: boolean, msg: Seat): Seat.AsObject;
  static serializeBinaryToWriter(message: Seat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Seat;
  static deserializeBinaryFromReader(message: Seat, reader: jspb.BinaryReader): Seat;
}

export namespace Seat {
  export type AsObject = {
    name: string,
    position?: Position.AsObject,
  }
}

export class RetrieveSeatMapReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSeatMapReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): RetrieveSeatMapReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatMapReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatMapReq): RetrieveSeatMapReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatMapReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatMapReq;
  static deserializeBinaryFromReader(message: RetrieveSeatMapReq, reader: jspb.BinaryReader): RetrieveSeatMapReq;
}

export namespace RetrieveSeatMapReq {
  export type AsObject = {
    id: string,
    partnershipId: string,
  }
}

export class RetrieveSeatMapRes extends jspb.Message {
  getInfo(): SeatMapInfo | undefined;
  setInfo(value?: SeatMapInfo): RetrieveSeatMapRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveSeatMapRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatMapRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatMapRes): RetrieveSeatMapRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatMapRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatMapRes;
  static deserializeBinaryFromReader(message: RetrieveSeatMapRes, reader: jspb.BinaryReader): RetrieveSeatMapRes;
}

export namespace RetrieveSeatMapRes {
  export type AsObject = {
    info?: SeatMapInfo.AsObject,
  }
}

export enum LabelType { 
  LABEL_TYPE_INVALID = 0,
  LABEL_TYPE_CHARACTER = 1,
  LABEL_TYPE_NUMBER = 2,
}
