import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';


export class SeatMapInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SeatMapInfo;

  getDescription(): string;
  setDescription(value: string): SeatMapInfo;

  getMapPicture(): string;
  setMapPicture(value: string): SeatMapInfo;

  getMaxSeatPerOrder(): number;
  setMaxSeatPerOrder(value: number): SeatMapInfo;

  getCurrency(): string;
  setCurrency(value: string): SeatMapInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatMapInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatMapInfo): SeatMapInfo.AsObject;
  static serializeBinaryToWriter(message: SeatMapInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatMapInfo;
  static deserializeBinaryFromReader(message: SeatMapInfo, reader: jspb.BinaryReader): SeatMapInfo;
}

export namespace SeatMapInfo {
  export type AsObject = {
    name: string,
    description: string,
    mapPicture: string,
    maxSeatPerOrder: number,
    currency: string,
  }
}

export class SeatMap extends jspb.Message {
  getId(): string;
  setId(value: string): SeatMap;

  getName(): string;
  setName(value: string): SeatMap;

  getDescription(): string;
  setDescription(value: string): SeatMap;

  getMapPicture(): string;
  setMapPicture(value: string): SeatMap;

  getMaxSeatPerOrder(): number;
  setMaxSeatPerOrder(value: number): SeatMap;

  getCurrency(): string;
  setCurrency(value: string): SeatMap;

  getCreatedAt(): number;
  setCreatedAt(value: number): SeatMap;

  getCreatedBy(): string;
  setCreatedBy(value: string): SeatMap;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SeatMap;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SeatMap;

  getCountBlock(): number;
  setCountBlock(value: number): SeatMap;

  getCountSeat(): number;
  setCountSeat(value: number): SeatMap;

  getMinPrice(): number;
  setMinPrice(value: number): SeatMap;

  getMaxPrice(): number;
  setMaxPrice(value: number): SeatMap;

  getDecorationItemsList(): Array<Sharp>;
  setDecorationItemsList(value: Array<Sharp>): SeatMap;
  clearDecorationItemsList(): SeatMap;
  addDecorationItems(value?: Sharp, index?: number): Sharp;

  getEventId(): string;
  setEventId(value: string): SeatMap;

  getScheduleId(): string;
  setScheduleId(value: string): SeatMap;

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
    maxSeatPerOrder: number,
    currency: string,
    createdAt: number,
    createdBy: string,
    updatedAt: number,
    updatedBy: string,
    countBlock: number,
    countSeat: number,
    minPrice: number,
    maxPrice: number,
    decorationItemsList: Array<Sharp.AsObject>,
    eventId: string,
    scheduleId: string,
  }
}

export class SeatBlockInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SeatBlockInfo;

  getColor(): string;
  setColor(value: string): SeatBlockInfo;

  getRow(): SeatLine | undefined;
  setRow(value?: SeatLine): SeatBlockInfo;
  hasRow(): boolean;
  clearRow(): SeatBlockInfo;

  getCol(): SeatLine | undefined;
  setCol(value?: SeatLine): SeatBlockInfo;
  hasCol(): boolean;
  clearCol(): SeatBlockInfo;

  getWidth(): number;
  setWidth(value: number): SeatBlockInfo;

  getHeight(): number;
  setHeight(value: number): SeatBlockInfo;

  getTotalSeat(): number;
  setTotalSeat(value: number): SeatBlockInfo;

  getPrice(): number;
  setPrice(value: number): SeatBlockInfo;

  getPosition(): Position | undefined;
  setPosition(value?: Position): SeatBlockInfo;
  hasPosition(): boolean;
  clearPosition(): SeatBlockInfo;

  getSeatMapId(): string;
  setSeatMapId(value: string): SeatBlockInfo;

  getCanSelectSeat(): boolean;
  setCanSelectSeat(value: boolean): SeatBlockInfo;

  getSeatsList(): Array<Seat>;
  setSeatsList(value: Array<Seat>): SeatBlockInfo;
  clearSeatsList(): SeatBlockInfo;
  addSeats(value?: Seat, index?: number): Seat;

  getRotation(): number;
  setRotation(value: number): SeatBlockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatBlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatBlockInfo): SeatBlockInfo.AsObject;
  static serializeBinaryToWriter(message: SeatBlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatBlockInfo;
  static deserializeBinaryFromReader(message: SeatBlockInfo, reader: jspb.BinaryReader): SeatBlockInfo;
}

export namespace SeatBlockInfo {
  export type AsObject = {
    name: string,
    color: string,
    row?: SeatLine.AsObject,
    col?: SeatLine.AsObject,
    width: number,
    height: number,
    totalSeat: number,
    price: number,
    position?: Position.AsObject,
    seatMapId: string,
    canSelectSeat: boolean,
    seatsList: Array<Seat.AsObject>,
    rotation: number,
  }
}

export class SeatBlock extends jspb.Message {
  getId(): string;
  setId(value: string): SeatBlock;

  getName(): string;
  setName(value: string): SeatBlock;

  getColor(): string;
  setColor(value: string): SeatBlock;

  getRow(): SeatLine | undefined;
  setRow(value?: SeatLine): SeatBlock;
  hasRow(): boolean;
  clearRow(): SeatBlock;

  getCol(): SeatLine | undefined;
  setCol(value?: SeatLine): SeatBlock;
  hasCol(): boolean;
  clearCol(): SeatBlock;

  getWidth(): number;
  setWidth(value: number): SeatBlock;

  getHeight(): number;
  setHeight(value: number): SeatBlock;

  getTotalSeat(): number;
  setTotalSeat(value: number): SeatBlock;

  getPrice(): number;
  setPrice(value: number): SeatBlock;

  getPosition(): Position | undefined;
  setPosition(value?: Position): SeatBlock;
  hasPosition(): boolean;
  clearPosition(): SeatBlock;

  getSeatsList(): Array<Seat>;
  setSeatsList(value: Array<Seat>): SeatBlock;
  clearSeatsList(): SeatBlock;
  addSeats(value?: Seat, index?: number): Seat;

  getSeatMapId(): string;
  setSeatMapId(value: string): SeatBlock;

  getCanSelectSeat(): boolean;
  setCanSelectSeat(value: boolean): SeatBlock;

  getCreatedAt(): number;
  setCreatedAt(value: number): SeatBlock;

  getCreatedBy(): string;
  setCreatedBy(value: string): SeatBlock;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SeatBlock;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SeatBlock;

  getRotation(): number;
  setRotation(value: number): SeatBlock;

  getStats(): BlockStats | undefined;
  setStats(value?: BlockStats): SeatBlock;
  hasStats(): boolean;
  clearStats(): SeatBlock;

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
    row?: SeatLine.AsObject,
    col?: SeatLine.AsObject,
    width: number,
    height: number,
    totalSeat: number,
    price: number,
    position?: Position.AsObject,
    seatsList: Array<Seat.AsObject>,
    seatMapId: string,
    canSelectSeat: boolean,
    createdAt: number,
    createdBy: string,
    updatedAt: number,
    updatedBy: string,
    rotation: number,
    stats?: BlockStats.AsObject,
  }
}

export class Sharp extends jspb.Message {
  getId(): string;
  setId(value: string): Sharp;

  getName(): string;
  setName(value: string): Sharp;

  getColor(): string;
  setColor(value: string): Sharp;

  getPosition(): Position | undefined;
  setPosition(value?: Position): Sharp;
  hasPosition(): boolean;
  clearPosition(): Sharp;

  getType(): string;
  setType(value: string): Sharp;

  getPointsList(): Array<Position>;
  setPointsList(value: Array<Position>): Sharp;
  clearPointsList(): Sharp;
  addPoints(value?: Position, index?: number): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sharp.AsObject;
  static toObject(includeInstance: boolean, msg: Sharp): Sharp.AsObject;
  static serializeBinaryToWriter(message: Sharp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sharp;
  static deserializeBinaryFromReader(message: Sharp, reader: jspb.BinaryReader): Sharp;
}

export namespace Sharp {
  export type AsObject = {
    id: string,
    name: string,
    color: string,
    position?: Position.AsObject,
    type: string,
    pointsList: Array<Position.AsObject>,
  }
}

export class BlockStats extends jspb.Message {
  getAvailable(): number;
  setAvailable(value: number): BlockStats;

  getBooking(): number;
  setBooking(value: number): BlockStats;

  getLocked(): number;
  setLocked(value: number): BlockStats;

  getSold(): number;
  setSold(value: number): BlockStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockStats.AsObject;
  static toObject(includeInstance: boolean, msg: BlockStats): BlockStats.AsObject;
  static serializeBinaryToWriter(message: BlockStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockStats;
  static deserializeBinaryFromReader(message: BlockStats, reader: jspb.BinaryReader): BlockStats;
}

export namespace BlockStats {
  export type AsObject = {
    available: number,
    booking: number,
    locked: number,
    sold: number,
  }
}

export class SeatLine extends jspb.Message {
  getQuantity(): number;
  setQuantity(value: number): SeatLine;

  getBeginCharacter(): string;
  setBeginCharacter(value: string): SeatLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatLine.AsObject;
  static toObject(includeInstance: boolean, msg: SeatLine): SeatLine.AsObject;
  static serializeBinaryToWriter(message: SeatLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatLine;
  static deserializeBinaryFromReader(message: SeatLine, reader: jspb.BinaryReader): SeatLine;
}

export namespace SeatLine {
  export type AsObject = {
    quantity: number,
    beginCharacter: string,
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
  getId(): string;
  setId(value: string): Seat;

  getName(): string;
  setName(value: string): Seat;

  getPosition(): Position | undefined;
  setPosition(value?: Position): Seat;
  hasPosition(): boolean;
  clearPosition(): Seat;

  getStatus(): SeatStatus;
  setStatus(value: SeatStatus): Seat;

  getOrderX(): number;
  setOrderX(value: number): Seat;

  getOrderY(): number;
  setOrderY(value: number): Seat;

  getLog(): SeatStatusLog | undefined;
  setLog(value?: SeatStatusLog): Seat;
  hasLog(): boolean;
  clearLog(): Seat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Seat.AsObject;
  static toObject(includeInstance: boolean, msg: Seat): Seat.AsObject;
  static serializeBinaryToWriter(message: Seat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Seat;
  static deserializeBinaryFromReader(message: Seat, reader: jspb.BinaryReader): Seat;
}

export namespace Seat {
  export type AsObject = {
    id: string,
    name: string,
    position?: Position.AsObject,
    status: SeatStatus,
    orderX: number,
    orderY: number,
    log?: SeatStatusLog.AsObject,
  }
}

export class SeatStatusLog extends jspb.Message {
  getUpdatedAt(): number;
  setUpdatedAt(value: number): SeatStatusLog;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SeatStatusLog;

  getOldStatus(): SeatStatus;
  setOldStatus(value: SeatStatus): SeatStatusLog;

  getStatus(): SeatStatus;
  setStatus(value: SeatStatus): SeatStatusLog;

  getNote(): string;
  setNote(value: string): SeatStatusLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatStatusLog.AsObject;
  static toObject(includeInstance: boolean, msg: SeatStatusLog): SeatStatusLog.AsObject;
  static serializeBinaryToWriter(message: SeatStatusLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatStatusLog;
  static deserializeBinaryFromReader(message: SeatStatusLog, reader: jspb.BinaryReader): SeatStatusLog;
}

export namespace SeatStatusLog {
  export type AsObject = {
    updatedAt: number,
    updatedBy: string,
    oldStatus: SeatStatus,
    status: SeatStatus,
    note: string,
  }
}

export class CreateSeatMapReq extends jspb.Message {
  getInfo(): SeatMapInfo | undefined;
  setInfo(value?: SeatMapInfo): CreateSeatMapReq;
  hasInfo(): boolean;
  clearInfo(): CreateSeatMapReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatMapReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatMapReq): CreateSeatMapReq.AsObject;
  static serializeBinaryToWriter(message: CreateSeatMapReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatMapReq;
  static deserializeBinaryFromReader(message: CreateSeatMapReq, reader: jspb.BinaryReader): CreateSeatMapReq;
}

export namespace CreateSeatMapReq {
  export type AsObject = {
    info?: SeatMapInfo.AsObject,
  }
}

export class UpdateSeatMapReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSeatMapReq;

  getInfo(): SeatMapInfo | undefined;
  setInfo(value?: SeatMapInfo): UpdateSeatMapReq;
  hasInfo(): boolean;
  clearInfo(): UpdateSeatMapReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeatMapReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeatMapReq): UpdateSeatMapReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSeatMapReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeatMapReq;
  static deserializeBinaryFromReader(message: UpdateSeatMapReq, reader: jspb.BinaryReader): UpdateSeatMapReq;
}

export namespace UpdateSeatMapReq {
  export type AsObject = {
    id: string,
    info?: SeatMapInfo.AsObject,
  }
}

export class DeleteSeatMapReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSeatMapReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSeatMapReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSeatMapReq): DeleteSeatMapReq.AsObject;
  static serializeBinaryToWriter(message: DeleteSeatMapReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSeatMapReq;
  static deserializeBinaryFromReader(message: DeleteSeatMapReq, reader: jspb.BinaryReader): DeleteSeatMapReq;
}

export namespace DeleteSeatMapReq {
  export type AsObject = {
    id: string,
  }
}

export class ListSeatMapReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListSeatMapReq;

  getEventAssocStatus(): EventAssocStatus;
  setEventAssocStatus(value: EventAssocStatus): ListSeatMapReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListSeatMapReq;
  hasPagination(): boolean;
  clearPagination(): ListSeatMapReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): ListSeatMapReq;
  clearOrderByList(): ListSeatMapReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatMapReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatMapReq): ListSeatMapReq.AsObject;
  static serializeBinaryToWriter(message: ListSeatMapReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatMapReq;
  static deserializeBinaryFromReader(message: ListSeatMapReq, reader: jspb.BinaryReader): ListSeatMapReq;
}

export namespace ListSeatMapReq {
  export type AsObject = {
    searchText: string,
    eventAssocStatus: EventAssocStatus,
    pagination?: base_base_pb.PaginationReq.AsObject,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
  }
}

export class RetrieveSeatMapReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSeatMapReq;

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
  }
}

export class CreateSeatBlockReq extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): CreateSeatBlockReq;

  getSeatBlock(): SeatBlockInfo | undefined;
  setSeatBlock(value?: SeatBlockInfo): CreateSeatBlockReq;
  hasSeatBlock(): boolean;
  clearSeatBlock(): CreateSeatBlockReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatBlockReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatBlockReq): CreateSeatBlockReq.AsObject;
  static serializeBinaryToWriter(message: CreateSeatBlockReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatBlockReq;
  static deserializeBinaryFromReader(message: CreateSeatBlockReq, reader: jspb.BinaryReader): CreateSeatBlockReq;
}

export namespace CreateSeatBlockReq {
  export type AsObject = {
    seatMapId: string,
    seatBlock?: SeatBlockInfo.AsObject,
  }
}

export class ListSeatBlockReq extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): ListSeatBlockReq;

  getSeatDetail(): boolean;
  setSeatDetail(value: boolean): ListSeatBlockReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatBlockReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatBlockReq): ListSeatBlockReq.AsObject;
  static serializeBinaryToWriter(message: ListSeatBlockReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatBlockReq;
  static deserializeBinaryFromReader(message: ListSeatBlockReq, reader: jspb.BinaryReader): ListSeatBlockReq;
}

export namespace ListSeatBlockReq {
  export type AsObject = {
    seatMapId: string,
    seatDetail: boolean,
  }
}

export class UpdateSeatBlockReq extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): UpdateSeatBlockReq;

  getSeatBlockId(): string;
  setSeatBlockId(value: string): UpdateSeatBlockReq;

  getInfo(): SeatBlockInfo | undefined;
  setInfo(value?: SeatBlockInfo): UpdateSeatBlockReq;
  hasInfo(): boolean;
  clearInfo(): UpdateSeatBlockReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeatBlockReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeatBlockReq): UpdateSeatBlockReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSeatBlockReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeatBlockReq;
  static deserializeBinaryFromReader(message: UpdateSeatBlockReq, reader: jspb.BinaryReader): UpdateSeatBlockReq;
}

export namespace UpdateSeatBlockReq {
  export type AsObject = {
    seatMapId: string,
    seatBlockId: string,
    info?: SeatBlockInfo.AsObject,
  }
}

export class DeleteSeatBlockReq extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): DeleteSeatBlockReq;

  getSeatBlockId(): string;
  setSeatBlockId(value: string): DeleteSeatBlockReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSeatBlockReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSeatBlockReq): DeleteSeatBlockReq.AsObject;
  static serializeBinaryToWriter(message: DeleteSeatBlockReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSeatBlockReq;
  static deserializeBinaryFromReader(message: DeleteSeatBlockReq, reader: jspb.BinaryReader): DeleteSeatBlockReq;
}

export namespace DeleteSeatBlockReq {
  export type AsObject = {
    seatMapId: string,
    seatBlockId: string,
  }
}

export class RetrieveSeatBlockReq extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): RetrieveSeatBlockReq;

  getSeatBlockId(): string;
  setSeatBlockId(value: string): RetrieveSeatBlockReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatBlockReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatBlockReq): RetrieveSeatBlockReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatBlockReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatBlockReq;
  static deserializeBinaryFromReader(message: RetrieveSeatBlockReq, reader: jspb.BinaryReader): RetrieveSeatBlockReq;
}

export namespace RetrieveSeatBlockReq {
  export type AsObject = {
    seatMapId: string,
    seatBlockId: string,
  }
}

export class UpsertDecorationReq extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): UpsertDecorationReq;

  getInfo(): Sharp | undefined;
  setInfo(value?: Sharp): UpsertDecorationReq;
  hasInfo(): boolean;
  clearInfo(): UpsertDecorationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertDecorationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertDecorationReq): UpsertDecorationReq.AsObject;
  static serializeBinaryToWriter(message: UpsertDecorationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertDecorationReq;
  static deserializeBinaryFromReader(message: UpsertDecorationReq, reader: jspb.BinaryReader): UpsertDecorationReq;
}

export namespace UpsertDecorationReq {
  export type AsObject = {
    seatMapId: string,
    info?: Sharp.AsObject,
  }
}

export class UpdateSeatStatusReq extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): UpdateSeatStatusReq;

  getSeatDetailList(): Array<UpdateSeatStatusDetailReq>;
  setSeatDetailList(value: Array<UpdateSeatStatusDetailReq>): UpdateSeatStatusReq;
  clearSeatDetailList(): UpdateSeatStatusReq;
  addSeatDetail(value?: UpdateSeatStatusDetailReq, index?: number): UpdateSeatStatusDetailReq;

  getStatus(): SeatStatus;
  setStatus(value: SeatStatus): UpdateSeatStatusReq;

  getNote(): string;
  setNote(value: string): UpdateSeatStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeatStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeatStatusReq): UpdateSeatStatusReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSeatStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeatStatusReq;
  static deserializeBinaryFromReader(message: UpdateSeatStatusReq, reader: jspb.BinaryReader): UpdateSeatStatusReq;
}

export namespace UpdateSeatStatusReq {
  export type AsObject = {
    seatMapId: string,
    seatDetailList: Array<UpdateSeatStatusDetailReq.AsObject>,
    status: SeatStatus,
    note: string,
  }
}

export class UpdateSeatStatusDetailReq extends jspb.Message {
  getSeatBlockId(): string;
  setSeatBlockId(value: string): UpdateSeatStatusDetailReq;

  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): UpdateSeatStatusDetailReq;
  clearSeatIdsList(): UpdateSeatStatusDetailReq;
  addSeatIds(value: string, index?: number): UpdateSeatStatusDetailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeatStatusDetailReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeatStatusDetailReq): UpdateSeatStatusDetailReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSeatStatusDetailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeatStatusDetailReq;
  static deserializeBinaryFromReader(message: UpdateSeatStatusDetailReq, reader: jspb.BinaryReader): UpdateSeatStatusDetailReq;
}

export namespace UpdateSeatStatusDetailReq {
  export type AsObject = {
    seatBlockId: string,
    seatIdsList: Array<string>,
  }
}

export class ListDecorationReq extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): ListDecorationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDecorationReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListDecorationReq): ListDecorationReq.AsObject;
  static serializeBinaryToWriter(message: ListDecorationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDecorationReq;
  static deserializeBinaryFromReader(message: ListDecorationReq, reader: jspb.BinaryReader): ListDecorationReq;
}

export namespace ListDecorationReq {
  export type AsObject = {
    seatMapId: string,
  }
}

export class CreateSeatMapRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSeatMapRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatMapRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatMapRes): CreateSeatMapRes.AsObject;
  static serializeBinaryToWriter(message: CreateSeatMapRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatMapRes;
  static deserializeBinaryFromReader(message: CreateSeatMapRes, reader: jspb.BinaryReader): CreateSeatMapRes;
}

export namespace CreateSeatMapRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveSeatMapRes extends jspb.Message {
  getInfo(): SeatMap | undefined;
  setInfo(value?: SeatMap): RetrieveSeatMapRes;
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
    info?: SeatMap.AsObject,
  }
}

export class ListSeatMapRes extends jspb.Message {
  getItemsList(): Array<SeatMap>;
  setItemsList(value: Array<SeatMap>): ListSeatMapRes;
  clearItemsList(): ListSeatMapRes;
  addItems(value?: SeatMap, index?: number): SeatMap;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): ListSeatMapRes;
  hasPagination(): boolean;
  clearPagination(): ListSeatMapRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatMapRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatMapRes): ListSeatMapRes.AsObject;
  static serializeBinaryToWriter(message: ListSeatMapRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatMapRes;
  static deserializeBinaryFromReader(message: ListSeatMapRes, reader: jspb.BinaryReader): ListSeatMapRes;
}

export namespace ListSeatMapRes {
  export type AsObject = {
    itemsList: Array<SeatMap.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

export class ListSeatBlockRes extends jspb.Message {
  getItemsList(): Array<SeatBlock>;
  setItemsList(value: Array<SeatBlock>): ListSeatBlockRes;
  clearItemsList(): ListSeatBlockRes;
  addItems(value?: SeatBlock, index?: number): SeatBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatBlockRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatBlockRes): ListSeatBlockRes.AsObject;
  static serializeBinaryToWriter(message: ListSeatBlockRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatBlockRes;
  static deserializeBinaryFromReader(message: ListSeatBlockRes, reader: jspb.BinaryReader): ListSeatBlockRes;
}

export namespace ListSeatBlockRes {
  export type AsObject = {
    itemsList: Array<SeatBlock.AsObject>,
  }
}

export class ListDecorationRes extends jspb.Message {
  getItemsList(): Array<Sharp>;
  setItemsList(value: Array<Sharp>): ListDecorationRes;
  clearItemsList(): ListDecorationRes;
  addItems(value?: Sharp, index?: number): Sharp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDecorationRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListDecorationRes): ListDecorationRes.AsObject;
  static serializeBinaryToWriter(message: ListDecorationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDecorationRes;
  static deserializeBinaryFromReader(message: ListDecorationRes, reader: jspb.BinaryReader): ListDecorationRes;
}

export namespace ListDecorationRes {
  export type AsObject = {
    itemsList: Array<Sharp.AsObject>,
  }
}

export class CreateSeatBlockRes extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): CreateSeatBlockRes;

  getSeatBlockId(): string;
  setSeatBlockId(value: string): CreateSeatBlockRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSeatBlockRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSeatBlockRes): CreateSeatBlockRes.AsObject;
  static serializeBinaryToWriter(message: CreateSeatBlockRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSeatBlockRes;
  static deserializeBinaryFromReader(message: CreateSeatBlockRes, reader: jspb.BinaryReader): CreateSeatBlockRes;
}

export namespace CreateSeatBlockRes {
  export type AsObject = {
    seatMapId: string,
    seatBlockId: string,
  }
}

export class UpdateSeatStatusRes extends jspb.Message {
  getIsSuccessed(): boolean;
  setIsSuccessed(value: boolean): UpdateSeatStatusRes;

  getErrorSeatIdsList(): Array<string>;
  setErrorSeatIdsList(value: Array<string>): UpdateSeatStatusRes;
  clearErrorSeatIdsList(): UpdateSeatStatusRes;
  addErrorSeatIds(value: string, index?: number): UpdateSeatStatusRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSeatStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSeatStatusRes): UpdateSeatStatusRes.AsObject;
  static serializeBinaryToWriter(message: UpdateSeatStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSeatStatusRes;
  static deserializeBinaryFromReader(message: UpdateSeatStatusRes, reader: jspb.BinaryReader): UpdateSeatStatusRes;
}

export namespace UpdateSeatStatusRes {
  export type AsObject = {
    isSuccessed: boolean,
    errorSeatIdsList: Array<string>,
  }
}

export class RetrieveSeatBlockRes extends jspb.Message {
  getInfo(): SeatBlock | undefined;
  setInfo(value?: SeatBlock): RetrieveSeatBlockRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveSeatBlockRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSeatBlockRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSeatBlockRes): RetrieveSeatBlockRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveSeatBlockRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSeatBlockRes;
  static deserializeBinaryFromReader(message: RetrieveSeatBlockRes, reader: jspb.BinaryReader): RetrieveSeatBlockRes;
}

export namespace RetrieveSeatBlockRes {
  export type AsObject = {
    info?: SeatBlock.AsObject,
  }
}

export enum SeatStatus { 
  SEAT_STATUS_UNUSE = 0,
  SEAT_STATUS_AVAILABLE = 1,
  SEAT_STATUS_BOOKING = 2,
  SEAT_STATUS_LOCKED = 3,
  SEAT_STATUS_SOLD = 4,
  SEAT_STATUS_DISABLE = 99,
}
export enum EventAssocStatus { 
  EVENT_ASSOC_UNUSE = 0,
  EVENT_ASSOC_NOT_YET = 1,
  EVENT_ASSOC_LOCKED = 2,
}
