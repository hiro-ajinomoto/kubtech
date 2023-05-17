import * as jspb from 'google-protobuf'

import * as event_backend_base_pb from '../../event/backend/base_pb';
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

  getPosition(): event_backend_base_pb.Position | undefined;
  setPosition(value?: event_backend_base_pb.Position): SeatBlockInfo;
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
    position?: event_backend_base_pb.Position.AsObject,
    seatMapId: string,
    canSelectSeat: boolean,
    seatsList: Array<Seat.AsObject>,
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

  getPosition(): event_backend_base_pb.Position | undefined;
  setPosition(value?: event_backend_base_pb.Position): SeatBlock;
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
    position?: event_backend_base_pb.Position.AsObject,
    seatsList: Array<Seat.AsObject>,
    seatMapId: string,
    canSelectSeat: boolean,
    createdAt: number,
    createdBy: string,
    updatedAt: number,
    updatedBy: string,
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

export class Seat extends jspb.Message {
  getId(): string;
  setId(value: string): Seat;

  getName(): string;
  setName(value: string): Seat;

  getPosition(): event_backend_base_pb.Position | undefined;
  setPosition(value?: event_backend_base_pb.Position): Seat;
  hasPosition(): boolean;
  clearPosition(): Seat;

  getStatus(): SeatStatus;
  setStatus(value: SeatStatus): Seat;

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
    position?: event_backend_base_pb.Position.AsObject,
    status: SeatStatus,
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

export class ListSeatMapByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListSeatMapByIdsReq;
  clearIdsList(): ListSeatMapByIdsReq;
  addIds(value: string, index?: number): ListSeatMapByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatMapByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatMapByIdsReq): ListSeatMapByIdsReq.AsObject;
  static serializeBinaryToWriter(message: ListSeatMapByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatMapByIdsReq;
  static deserializeBinaryFromReader(message: ListSeatMapByIdsReq, reader: jspb.BinaryReader): ListSeatMapByIdsReq;
}

export namespace ListSeatMapByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class InternalListSeatMapDetailByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListSeatMapDetailByIdsReq;
  clearIdsList(): InternalListSeatMapDetailByIdsReq;
  addIds(value: string, index?: number): InternalListSeatMapDetailByIdsReq;

  getSeatBlockIdsList(): Array<string>;
  setSeatBlockIdsList(value: Array<string>): InternalListSeatMapDetailByIdsReq;
  clearSeatBlockIdsList(): InternalListSeatMapDetailByIdsReq;
  addSeatBlockIds(value: string, index?: number): InternalListSeatMapDetailByIdsReq;

  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): InternalListSeatMapDetailByIdsReq;
  clearSeatIdsList(): InternalListSeatMapDetailByIdsReq;
  addSeatIds(value: string, index?: number): InternalListSeatMapDetailByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListSeatMapDetailByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListSeatMapDetailByIdsReq): InternalListSeatMapDetailByIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListSeatMapDetailByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListSeatMapDetailByIdsReq;
  static deserializeBinaryFromReader(message: InternalListSeatMapDetailByIdsReq, reader: jspb.BinaryReader): InternalListSeatMapDetailByIdsReq;
}

export namespace InternalListSeatMapDetailByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
    seatBlockIdsList: Array<string>,
    seatIdsList: Array<string>,
  }
}

export class AssociateScheduleReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): AssociateScheduleReq;

  getUserId(): string;
  setUserId(value: string): AssociateScheduleReq;

  getEventId(): string;
  setEventId(value: string): AssociateScheduleReq;

  getScheduleId(): string;
  setScheduleId(value: string): AssociateScheduleReq;

  getSeatMapIdsList(): Array<string>;
  setSeatMapIdsList(value: Array<string>): AssociateScheduleReq;
  clearSeatMapIdsList(): AssociateScheduleReq;
  addSeatMapIds(value: string, index?: number): AssociateScheduleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssociateScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: AssociateScheduleReq): AssociateScheduleReq.AsObject;
  static serializeBinaryToWriter(message: AssociateScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssociateScheduleReq;
  static deserializeBinaryFromReader(message: AssociateScheduleReq, reader: jspb.BinaryReader): AssociateScheduleReq;
}

export namespace AssociateScheduleReq {
  export type AsObject = {
    partnershipId: string,
    userId: string,
    eventId: string,
    scheduleId: string,
    seatMapIdsList: Array<string>,
  }
}

export class AcquireLockReq extends jspb.Message {
  getActorSource(): LockSource;
  setActorSource(value: LockSource): AcquireLockReq;

  getActorId(): string;
  setActorId(value: string): AcquireLockReq;

  getActorName(): string;
  setActorName(value: string): AcquireLockReq;

  getDuration(): number;
  setDuration(value: number): AcquireLockReq;

  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): AcquireLockReq;
  clearSeatIdsList(): AcquireLockReq;
  addSeatIds(value: string, index?: number): AcquireLockReq;

  getBlocksMap(): jspb.Map<string, number>;
  clearBlocksMap(): AcquireLockReq;

  getNote(): string;
  setNote(value: string): AcquireLockReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcquireLockReq.AsObject;
  static toObject(includeInstance: boolean, msg: AcquireLockReq): AcquireLockReq.AsObject;
  static serializeBinaryToWriter(message: AcquireLockReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcquireLockReq;
  static deserializeBinaryFromReader(message: AcquireLockReq, reader: jspb.BinaryReader): AcquireLockReq;
}

export namespace AcquireLockReq {
  export type AsObject = {
    actorSource: LockSource,
    actorId: string,
    actorName: string,
    duration: number,
    seatIdsList: Array<string>,
    blocksMap: Array<[string, number]>,
    note: string,
  }
}

export class ReleaseLockReq extends jspb.Message {
  getActorSource(): LockSource;
  setActorSource(value: LockSource): ReleaseLockReq;

  getActorId(): string;
  setActorId(value: string): ReleaseLockReq;

  getActorName(): string;
  setActorName(value: string): ReleaseLockReq;

  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): ReleaseLockReq;
  clearSeatIdsList(): ReleaseLockReq;
  addSeatIds(value: string, index?: number): ReleaseLockReq;

  getBlocksMap(): jspb.Map<string, number>;
  clearBlocksMap(): ReleaseLockReq;

  getNote(): string;
  setNote(value: string): ReleaseLockReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReleaseLockReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReleaseLockReq): ReleaseLockReq.AsObject;
  static serializeBinaryToWriter(message: ReleaseLockReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReleaseLockReq;
  static deserializeBinaryFromReader(message: ReleaseLockReq, reader: jspb.BinaryReader): ReleaseLockReq;
}

export namespace ReleaseLockReq {
  export type AsObject = {
    actorSource: LockSource,
    actorId: string,
    actorName: string,
    seatIdsList: Array<string>,
    blocksMap: Array<[string, number]>,
    note: string,
  }
}

export class AcquireSellReq extends jspb.Message {
  getActorSource(): LockSource;
  setActorSource(value: LockSource): AcquireSellReq;

  getActorId(): string;
  setActorId(value: string): AcquireSellReq;

  getActorName(): string;
  setActorName(value: string): AcquireSellReq;

  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): AcquireSellReq;
  clearSeatIdsList(): AcquireSellReq;
  addSeatIds(value: string, index?: number): AcquireSellReq;

  getBlocksMap(): jspb.Map<string, number>;
  clearBlocksMap(): AcquireSellReq;

  getNote(): string;
  setNote(value: string): AcquireSellReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcquireSellReq.AsObject;
  static toObject(includeInstance: boolean, msg: AcquireSellReq): AcquireSellReq.AsObject;
  static serializeBinaryToWriter(message: AcquireSellReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcquireSellReq;
  static deserializeBinaryFromReader(message: AcquireSellReq, reader: jspb.BinaryReader): AcquireSellReq;
}

export namespace AcquireSellReq {
  export type AsObject = {
    actorSource: LockSource,
    actorId: string,
    actorName: string,
    seatIdsList: Array<string>,
    blocksMap: Array<[string, number]>,
    note: string,
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

export class SeatBlockRes extends jspb.Message {
  getInfo(): SeatBlock | undefined;
  setInfo(value?: SeatBlock): SeatBlockRes;
  hasInfo(): boolean;
  clearInfo(): SeatBlockRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatBlockRes.AsObject;
  static toObject(includeInstance: boolean, msg: SeatBlockRes): SeatBlockRes.AsObject;
  static serializeBinaryToWriter(message: SeatBlockRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatBlockRes;
  static deserializeBinaryFromReader(message: SeatBlockRes, reader: jspb.BinaryReader): SeatBlockRes;
}

export namespace SeatBlockRes {
  export type AsObject = {
    info?: SeatBlock.AsObject,
  }
}

export class RetrieveSeatMapRes extends jspb.Message {
  getInfo(): SeatMap | undefined;
  setInfo(value?: SeatMap): RetrieveSeatMapRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveSeatMapRes;

  getPriceBlocksList(): Array<SeatBlockRes>;
  setPriceBlocksList(value: Array<SeatBlockRes>): RetrieveSeatMapRes;
  clearPriceBlocksList(): RetrieveSeatMapRes;
  addPriceBlocks(value?: SeatBlockRes, index?: number): SeatBlockRes;

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
    priceBlocksList: Array<SeatBlockRes.AsObject>,
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

export class ListSeatMapByIdsRes extends jspb.Message {
  getItemsList(): Array<SeatMap>;
  setItemsList(value: Array<SeatMap>): ListSeatMapByIdsRes;
  clearItemsList(): ListSeatMapByIdsRes;
  addItems(value?: SeatMap, index?: number): SeatMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatMapByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatMapByIdsRes): ListSeatMapByIdsRes.AsObject;
  static serializeBinaryToWriter(message: ListSeatMapByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatMapByIdsRes;
  static deserializeBinaryFromReader(message: ListSeatMapByIdsRes, reader: jspb.BinaryReader): ListSeatMapByIdsRes;
}

export namespace ListSeatMapByIdsRes {
  export type AsObject = {
    itemsList: Array<SeatMap.AsObject>,
  }
}

export class ListSeatMapDetailByEventIdReq extends jspb.Message {
  getId(): string;
  setId(value: string): ListSeatMapDetailByEventIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatMapDetailByEventIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatMapDetailByEventIdReq): ListSeatMapDetailByEventIdReq.AsObject;
  static serializeBinaryToWriter(message: ListSeatMapDetailByEventIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatMapDetailByEventIdReq;
  static deserializeBinaryFromReader(message: ListSeatMapDetailByEventIdReq, reader: jspb.BinaryReader): ListSeatMapDetailByEventIdReq;
}

export namespace ListSeatMapDetailByEventIdReq {
  export type AsObject = {
    id: string,
  }
}

export class SeatMapDetailByEventIDRes extends jspb.Message {
  getInfo(): SeatMap | undefined;
  setInfo(value?: SeatMap): SeatMapDetailByEventIDRes;
  hasInfo(): boolean;
  clearInfo(): SeatMapDetailByEventIDRes;

  getBlocksList(): Array<SeatBlock>;
  setBlocksList(value: Array<SeatBlock>): SeatMapDetailByEventIDRes;
  clearBlocksList(): SeatMapDetailByEventIDRes;
  addBlocks(value?: SeatBlock, index?: number): SeatBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatMapDetailByEventIDRes.AsObject;
  static toObject(includeInstance: boolean, msg: SeatMapDetailByEventIDRes): SeatMapDetailByEventIDRes.AsObject;
  static serializeBinaryToWriter(message: SeatMapDetailByEventIDRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatMapDetailByEventIDRes;
  static deserializeBinaryFromReader(message: SeatMapDetailByEventIDRes, reader: jspb.BinaryReader): SeatMapDetailByEventIDRes;
}

export namespace SeatMapDetailByEventIDRes {
  export type AsObject = {
    info?: SeatMap.AsObject,
    blocksList: Array<SeatBlock.AsObject>,
  }
}

export class ListSeatMapDetailByEventIdRes extends jspb.Message {
  getItemsList(): Array<SeatMapDetailByEventIDRes>;
  setItemsList(value: Array<SeatMapDetailByEventIDRes>): ListSeatMapDetailByEventIdRes;
  clearItemsList(): ListSeatMapDetailByEventIdRes;
  addItems(value?: SeatMapDetailByEventIDRes, index?: number): SeatMapDetailByEventIDRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSeatMapDetailByEventIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSeatMapDetailByEventIdRes): ListSeatMapDetailByEventIdRes.AsObject;
  static serializeBinaryToWriter(message: ListSeatMapDetailByEventIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSeatMapDetailByEventIdRes;
  static deserializeBinaryFromReader(message: ListSeatMapDetailByEventIdRes, reader: jspb.BinaryReader): ListSeatMapDetailByEventIdRes;
}

export namespace ListSeatMapDetailByEventIdRes {
  export type AsObject = {
    itemsList: Array<SeatMapDetailByEventIDRes.AsObject>,
  }
}

export class InternalListSeatMapDetailByIdsRes extends jspb.Message {
  getSeatMapsList(): Array<SeatMap>;
  setSeatMapsList(value: Array<SeatMap>): InternalListSeatMapDetailByIdsRes;
  clearSeatMapsList(): InternalListSeatMapDetailByIdsRes;
  addSeatMaps(value?: SeatMap, index?: number): SeatMap;

  getSeatBlocksList(): Array<SeatBlock>;
  setSeatBlocksList(value: Array<SeatBlock>): InternalListSeatMapDetailByIdsRes;
  clearSeatBlocksList(): InternalListSeatMapDetailByIdsRes;
  addSeatBlocks(value?: SeatBlock, index?: number): SeatBlock;

  getSeatsList(): Array<Seat>;
  setSeatsList(value: Array<Seat>): InternalListSeatMapDetailByIdsRes;
  clearSeatsList(): InternalListSeatMapDetailByIdsRes;
  addSeats(value?: Seat, index?: number): Seat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListSeatMapDetailByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListSeatMapDetailByIdsRes): InternalListSeatMapDetailByIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListSeatMapDetailByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListSeatMapDetailByIdsRes;
  static deserializeBinaryFromReader(message: InternalListSeatMapDetailByIdsRes, reader: jspb.BinaryReader): InternalListSeatMapDetailByIdsRes;
}

export namespace InternalListSeatMapDetailByIdsRes {
  export type AsObject = {
    seatMapsList: Array<SeatMap.AsObject>,
    seatBlocksList: Array<SeatBlock.AsObject>,
    seatsList: Array<Seat.AsObject>,
  }
}

export class InternalListSeatBlockBySeatMapIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListSeatBlockBySeatMapIdsReq;
  clearIdsList(): InternalListSeatBlockBySeatMapIdsReq;
  addIds(value: string, index?: number): InternalListSeatBlockBySeatMapIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListSeatBlockBySeatMapIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListSeatBlockBySeatMapIdsReq): InternalListSeatBlockBySeatMapIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListSeatBlockBySeatMapIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListSeatBlockBySeatMapIdsReq;
  static deserializeBinaryFromReader(message: InternalListSeatBlockBySeatMapIdsReq, reader: jspb.BinaryReader): InternalListSeatBlockBySeatMapIdsReq;
}

export namespace InternalListSeatBlockBySeatMapIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class InternalListSeatBlockBySeatMapIdsRes extends jspb.Message {
  getItemsList(): Array<SeatBlock>;
  setItemsList(value: Array<SeatBlock>): InternalListSeatBlockBySeatMapIdsRes;
  clearItemsList(): InternalListSeatBlockBySeatMapIdsRes;
  addItems(value?: SeatBlock, index?: number): SeatBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListSeatBlockBySeatMapIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListSeatBlockBySeatMapIdsRes): InternalListSeatBlockBySeatMapIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListSeatBlockBySeatMapIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListSeatBlockBySeatMapIdsRes;
  static deserializeBinaryFromReader(message: InternalListSeatBlockBySeatMapIdsRes, reader: jspb.BinaryReader): InternalListSeatBlockBySeatMapIdsRes;
}

export namespace InternalListSeatBlockBySeatMapIdsRes {
  export type AsObject = {
    itemsList: Array<SeatBlock.AsObject>,
  }
}

export class InternalListSeatBySeatBlockIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListSeatBySeatBlockIdsReq;
  clearIdsList(): InternalListSeatBySeatBlockIdsReq;
  addIds(value: string, index?: number): InternalListSeatBySeatBlockIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListSeatBySeatBlockIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListSeatBySeatBlockIdsReq): InternalListSeatBySeatBlockIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListSeatBySeatBlockIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListSeatBySeatBlockIdsReq;
  static deserializeBinaryFromReader(message: InternalListSeatBySeatBlockIdsReq, reader: jspb.BinaryReader): InternalListSeatBySeatBlockIdsReq;
}

export namespace InternalListSeatBySeatBlockIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class InternalListSeatBySeatBlockIdsRes extends jspb.Message {
  getItemsList(): Array<Seat>;
  setItemsList(value: Array<Seat>): InternalListSeatBySeatBlockIdsRes;
  clearItemsList(): InternalListSeatBySeatBlockIdsRes;
  addItems(value?: Seat, index?: number): Seat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListSeatBySeatBlockIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListSeatBySeatBlockIdsRes): InternalListSeatBySeatBlockIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListSeatBySeatBlockIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListSeatBySeatBlockIdsRes;
  static deserializeBinaryFromReader(message: InternalListSeatBySeatBlockIdsRes, reader: jspb.BinaryReader): InternalListSeatBySeatBlockIdsRes;
}

export namespace InternalListSeatBySeatBlockIdsRes {
  export type AsObject = {
    itemsList: Array<Seat.AsObject>,
  }
}

export class AcquireRes extends jspb.Message {
  getIsSuccess(): boolean;
  setIsSuccess(value: boolean): AcquireRes;

  getErrorSeatsMap(): jspb.Map<string, string>;
  clearErrorSeatsMap(): AcquireRes;

  getErrorBlocksMap(): jspb.Map<string, string>;
  clearErrorBlocksMap(): AcquireRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcquireRes.AsObject;
  static toObject(includeInstance: boolean, msg: AcquireRes): AcquireRes.AsObject;
  static serializeBinaryToWriter(message: AcquireRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcquireRes;
  static deserializeBinaryFromReader(message: AcquireRes, reader: jspb.BinaryReader): AcquireRes;
}

export namespace AcquireRes {
  export type AsObject = {
    isSuccess: boolean,
    errorSeatsMap: Array<[string, string]>,
    errorBlocksMap: Array<[string, string]>,
  }
}

export enum LockSource { 
  LOCK_SOURCE_INVALID = 0,
  LOCK_SOURCE_PST = 1,
  LOCK_SOURCE_MOBILE = 2,
}
export enum SeatStatus { 
  SEAT_STATUS_NONE = 0,
  SEAT_STATUS_AVAILABLE = 1,
  SEAT_STATUS_BOOKING = 2,
  SEAT_STATUS_LOCKED = 3,
  SEAT_STATUS_SOLD = 4,
  SEAT_STATUS_DISABLE = 99,
}
