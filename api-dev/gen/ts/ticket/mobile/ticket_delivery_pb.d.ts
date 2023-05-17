import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';
import * as ticket_mobile_ticket_pb from '../../ticket/mobile/ticket_pb';


export class TicketDeliveryEventInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): TicketDeliveryEventInfo;

  getAddress(): string;
  setAddress(value: string): TicketDeliveryEventInfo;

  getName(): string;
  setName(value: string): TicketDeliveryEventInfo;

  getStartTime(): number;
  setStartTime(value: number): TicketDeliveryEventInfo;

  getEndTime(): number;
  setEndTime(value: number): TicketDeliveryEventInfo;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): TicketDeliveryEventInfo;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): TicketDeliveryEventInfo;

  getTimezone(): string;
  setTimezone(value: string): TicketDeliveryEventInfo;

  getSeatBlockNamesList(): Array<string>;
  setSeatBlockNamesList(value: Array<string>): TicketDeliveryEventInfo;
  clearSeatBlockNamesList(): TicketDeliveryEventInfo;
  addSeatBlockNames(value: string, index?: number): TicketDeliveryEventInfo;

  getSeatNamesList(): Array<string>;
  setSeatNamesList(value: Array<string>): TicketDeliveryEventInfo;
  clearSeatNamesList(): TicketDeliveryEventInfo;
  addSeatNames(value: string, index?: number): TicketDeliveryEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketDeliveryEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketDeliveryEventInfo): TicketDeliveryEventInfo.AsObject;
  static serializeBinaryToWriter(message: TicketDeliveryEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketDeliveryEventInfo;
  static deserializeBinaryFromReader(message: TicketDeliveryEventInfo, reader: jspb.BinaryReader): TicketDeliveryEventInfo;
}

export namespace TicketDeliveryEventInfo {
  export type AsObject = {
    eventId: string,
    address: string,
    name: string,
    startTime: number,
    endTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    timezone: string,
    seatBlockNamesList: Array<string>,
    seatNamesList: Array<string>,
  }
}

export class TicketDeliveryInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketDeliveryInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): TicketDeliveryInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): TicketDeliveryInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): TicketDeliveryInfo;

  getSecretCode(): string;
  setSecretCode(value: string): TicketDeliveryInfo;

  getTicketsList(): Array<ticket_mobile_ticket_pb.TicketInfo>;
  setTicketsList(value: Array<ticket_mobile_ticket_pb.TicketInfo>): TicketDeliveryInfo;
  clearTicketsList(): TicketDeliveryInfo;
  addTickets(value?: ticket_mobile_ticket_pb.TicketInfo, index?: number): ticket_mobile_ticket_pb.TicketInfo;

  getUserId(): string;
  setUserId(value: string): TicketDeliveryInfo;

  getOrderCode(): string;
  setOrderCode(value: string): TicketDeliveryInfo;

  getStatus(): TicketDeliveryStatus;
  setStatus(value: TicketDeliveryStatus): TicketDeliveryInfo;

  getTicketCheckInAmount(): number;
  setTicketCheckInAmount(value: number): TicketDeliveryInfo;

  getEventInfo(): TicketDeliveryEventInfo | undefined;
  setEventInfo(value?: TicketDeliveryEventInfo): TicketDeliveryInfo;
  hasEventInfo(): boolean;
  clearEventInfo(): TicketDeliveryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketDeliveryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketDeliveryInfo): TicketDeliveryInfo.AsObject;
  static serializeBinaryToWriter(message: TicketDeliveryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketDeliveryInfo;
  static deserializeBinaryFromReader(message: TicketDeliveryInfo, reader: jspb.BinaryReader): TicketDeliveryInfo;
}

export namespace TicketDeliveryInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    partnershipId: string,
    secretCode: string,
    ticketsList: Array<ticket_mobile_ticket_pb.TicketInfo.AsObject>,
    userId: string,
    orderCode: string,
    status: TicketDeliveryStatus,
    ticketCheckInAmount: number,
    eventInfo?: TicketDeliveryEventInfo.AsObject,
  }
}

export class ListTicketDeliveriesReq extends jspb.Message {
  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListTicketDeliveriesReq;
  hasPagination(): boolean;
  clearPagination(): ListTicketDeliveriesReq;

  getSearchEvent(): string;
  setSearchEvent(value: string): ListTicketDeliveriesReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTicketDeliveriesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListTicketDeliveriesReq): ListTicketDeliveriesReq.AsObject;
  static serializeBinaryToWriter(message: ListTicketDeliveriesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTicketDeliveriesReq;
  static deserializeBinaryFromReader(message: ListTicketDeliveriesReq, reader: jspb.BinaryReader): ListTicketDeliveriesReq;
}

export namespace ListTicketDeliveriesReq {
  export type AsObject = {
    pagination?: base_base_pb.PaginationReq.AsObject,
    searchEvent: string,
  }
}

export class ListTicketDeliveriesRes extends jspb.Message {
  getListList(): Array<TicketDeliveryInfo>;
  setListList(value: Array<TicketDeliveryInfo>): ListTicketDeliveriesRes;
  clearListList(): ListTicketDeliveriesRes;
  addList(value?: TicketDeliveryInfo, index?: number): TicketDeliveryInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): ListTicketDeliveriesRes;
  hasPagination(): boolean;
  clearPagination(): ListTicketDeliveriesRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTicketDeliveriesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListTicketDeliveriesRes): ListTicketDeliveriesRes.AsObject;
  static serializeBinaryToWriter(message: ListTicketDeliveriesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTicketDeliveriesRes;
  static deserializeBinaryFromReader(message: ListTicketDeliveriesRes, reader: jspb.BinaryReader): ListTicketDeliveriesRes;
}

export namespace ListTicketDeliveriesRes {
  export type AsObject = {
    listList: Array<TicketDeliveryInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

export enum TicketDeliveryStatus { 
  TICKET_DELIVERY_STATUS_INVALID = 0,
  TICKET_DELIVERY_STATUS_NOT_USED = 1,
  TICKET_DELIVERY_STATUS_CHECKED_IN = 2,
}
