import * as jspb from 'google-protobuf'

import * as ticket_mobile_base_pb from '../../ticket/mobile/base_pb';


export class TicketTransferableInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketTransferableInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): TicketTransferableInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): TicketTransferableInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): TicketTransferableInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): TicketTransferableInfo;

  getTicketsList(): Array<TicketTransferableTicketInfo>;
  setTicketsList(value: Array<TicketTransferableTicketInfo>): TicketTransferableInfo;
  clearTicketsList(): TicketTransferableInfo;
  addTickets(value?: TicketTransferableTicketInfo, index?: number): TicketTransferableTicketInfo;

  getUserInfo(): TicketTransferableUserInfo | undefined;
  setUserInfo(value?: TicketTransferableUserInfo): TicketTransferableInfo;
  hasUserInfo(): boolean;
  clearUserInfo(): TicketTransferableInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): TicketTransferableInfo;

  getEventInfo(): TicketTransferableEventInfo | undefined;
  setEventInfo(value?: TicketTransferableEventInfo): TicketTransferableInfo;
  hasEventInfo(): boolean;
  clearEventInfo(): TicketTransferableInfo;

  getOrderId(): string;
  setOrderId(value: string): TicketTransferableInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableInfo): TicketTransferableInfo.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableInfo;
  static deserializeBinaryFromReader(message: TicketTransferableInfo, reader: jspb.BinaryReader): TicketTransferableInfo;
}

export namespace TicketTransferableInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    ticketsList: Array<TicketTransferableTicketInfo.AsObject>,
    userInfo?: TicketTransferableUserInfo.AsObject,
    partnershipId: string,
    eventInfo?: TicketTransferableEventInfo.AsObject,
    orderId: string,
  }
}

export class TicketTransferableTicketInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketTransferableTicketInfo;

  getSeatInfo(): TicketTransferableSeatInfo | undefined;
  setSeatInfo(value?: TicketTransferableSeatInfo): TicketTransferableTicketInfo;
  hasSeatInfo(): boolean;
  clearSeatInfo(): TicketTransferableTicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableTicketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableTicketInfo): TicketTransferableTicketInfo.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableTicketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableTicketInfo;
  static deserializeBinaryFromReader(message: TicketTransferableTicketInfo, reader: jspb.BinaryReader): TicketTransferableTicketInfo;
}

export namespace TicketTransferableTicketInfo {
  export type AsObject = {
    id: string,
    seatInfo?: TicketTransferableSeatInfo.AsObject,
  }
}

export class TicketTransferablePriceSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketTransferablePriceSimpleInfo;

  getName(): string;
  setName(value: string): TicketTransferablePriceSimpleInfo;

  getIcon(): string;
  setIcon(value: string): TicketTransferablePriceSimpleInfo;

  getPrice(): number;
  setPrice(value: number): TicketTransferablePriceSimpleInfo;

  getCurrency(): TicketTransferableCurrencyInfo | undefined;
  setCurrency(value?: TicketTransferableCurrencyInfo): TicketTransferablePriceSimpleInfo;
  hasCurrency(): boolean;
  clearCurrency(): TicketTransferablePriceSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferablePriceSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferablePriceSimpleInfo): TicketTransferablePriceSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: TicketTransferablePriceSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferablePriceSimpleInfo;
  static deserializeBinaryFromReader(message: TicketTransferablePriceSimpleInfo, reader: jspb.BinaryReader): TicketTransferablePriceSimpleInfo;
}

export namespace TicketTransferablePriceSimpleInfo {
  export type AsObject = {
    id: string,
    name: string,
    icon: string,
    price: number,
    currency?: TicketTransferableCurrencyInfo.AsObject,
  }
}

export class TicketTransferableCurrencyInfo extends jspb.Message {
  getName(): string;
  setName(value: string): TicketTransferableCurrencyInfo;

  getCode(): string;
  setCode(value: string): TicketTransferableCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): TicketTransferableCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableCurrencyInfo): TicketTransferableCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableCurrencyInfo;
  static deserializeBinaryFromReader(message: TicketTransferableCurrencyInfo, reader: jspb.BinaryReader): TicketTransferableCurrencyInfo;
}

export namespace TicketTransferableCurrencyInfo {
  export type AsObject = {
    name: string,
    code: string,
    icon: string,
  }
}

export class TicketTransferableUserInfo extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): TicketTransferableUserInfo;

  getUserFullName(): string;
  setUserFullName(value: string): TicketTransferableUserInfo;

  getUserPhone(): string;
  setUserPhone(value: string): TicketTransferableUserInfo;

  getUserEmail(): string;
  setUserEmail(value: string): TicketTransferableUserInfo;

  getUserAddress(): string;
  setUserAddress(value: string): TicketTransferableUserInfo;

  getUserImage(): string;
  setUserImage(value: string): TicketTransferableUserInfo;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): TicketTransferableUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableUserInfo): TicketTransferableUserInfo.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableUserInfo;
  static deserializeBinaryFromReader(message: TicketTransferableUserInfo, reader: jspb.BinaryReader): TicketTransferableUserInfo;
}

export namespace TicketTransferableUserInfo {
  export type AsObject = {
    userId: string,
    userFullName: string,
    userPhone: string,
    userEmail: string,
    userAddress: string,
    userImage: string,
    userPhoneCode: string,
  }
}

export class TicketTransferableSeatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketTransferableSeatInfo;

  getName(): string;
  setName(value: string): TicketTransferableSeatInfo;

  getPrice(): TicketTransferablePriceSimpleInfo | undefined;
  setPrice(value?: TicketTransferablePriceSimpleInfo): TicketTransferableSeatInfo;
  hasPrice(): boolean;
  clearPrice(): TicketTransferableSeatInfo;

  getPriceBlockId(): string;
  setPriceBlockId(value: string): TicketTransferableSeatInfo;

  getPriceBlockName(): string;
  setPriceBlockName(value: string): TicketTransferableSeatInfo;

  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): TicketTransferableSeatInfo;

  getGeneralSeatMapName(): string;
  setGeneralSeatMapName(value: string): TicketTransferableSeatInfo;

  getSeatTypeName(): string;
  setSeatTypeName(value: string): TicketTransferableSeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableSeatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableSeatInfo): TicketTransferableSeatInfo.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableSeatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableSeatInfo;
  static deserializeBinaryFromReader(message: TicketTransferableSeatInfo, reader: jspb.BinaryReader): TicketTransferableSeatInfo;
}

export namespace TicketTransferableSeatInfo {
  export type AsObject = {
    id: string,
    name: string,
    price?: TicketTransferablePriceSimpleInfo.AsObject,
    priceBlockId: string,
    priceBlockName: string,
    generalSeatMapId: string,
    generalSeatMapName: string,
    seatTypeName: string,
  }
}

export class TicketTransferableEventInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): TicketTransferableEventInfo;

  getSchedule(): TicketTransferableEventSchedule | undefined;
  setSchedule(value?: TicketTransferableEventSchedule): TicketTransferableEventInfo;
  hasSchedule(): boolean;
  clearSchedule(): TicketTransferableEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableEventInfo): TicketTransferableEventInfo.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableEventInfo;
  static deserializeBinaryFromReader(message: TicketTransferableEventInfo, reader: jspb.BinaryReader): TicketTransferableEventInfo;
}

export namespace TicketTransferableEventInfo {
  export type AsObject = {
    eventId: string,
    schedule?: TicketTransferableEventSchedule.AsObject,
  }
}

export class TicketTransferableEventLocation extends jspb.Message {
  getId(): string;
  setId(value: string): TicketTransferableEventLocation;

  getAddress(): string;
  setAddress(value: string): TicketTransferableEventLocation;

  getWard(): string;
  setWard(value: string): TicketTransferableEventLocation;

  getDistrict(): string;
  setDistrict(value: string): TicketTransferableEventLocation;

  getCity(): string;
  setCity(value: string): TicketTransferableEventLocation;

  getCountry(): string;
  setCountry(value: string): TicketTransferableEventLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableEventLocation.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableEventLocation): TicketTransferableEventLocation.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableEventLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableEventLocation;
  static deserializeBinaryFromReader(message: TicketTransferableEventLocation, reader: jspb.BinaryReader): TicketTransferableEventLocation;
}

export namespace TicketTransferableEventLocation {
  export type AsObject = {
    id: string,
    address: string,
    ward: string,
    district: string,
    city: string,
    country: string,
  }
}

export class TicketTransferableEventVoucherInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketTransferableEventVoucherInfo;

  getName(): string;
  setName(value: string): TicketTransferableEventVoucherInfo;

  getThumbnail(): string;
  setThumbnail(value: string): TicketTransferableEventVoucherInfo;

  getSponsorId(): string;
  setSponsorId(value: string): TicketTransferableEventVoucherInfo;

  getExpiredAt(): number;
  setExpiredAt(value: number): TicketTransferableEventVoucherInfo;

  getEventId(): string;
  setEventId(value: string): TicketTransferableEventVoucherInfo;

  getDetail(): string;
  setDetail(value: string): TicketTransferableEventVoucherInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableEventVoucherInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableEventVoucherInfo): TicketTransferableEventVoucherInfo.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableEventVoucherInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableEventVoucherInfo;
  static deserializeBinaryFromReader(message: TicketTransferableEventVoucherInfo, reader: jspb.BinaryReader): TicketTransferableEventVoucherInfo;
}

export namespace TicketTransferableEventVoucherInfo {
  export type AsObject = {
    id: string,
    name: string,
    thumbnail: string,
    sponsorId: string,
    expiredAt: number,
    eventId: string,
    detail: string,
  }
}

export class TicketTransferableEventSchedule extends jspb.Message {
  getLocation(): TicketTransferableEventLocation | undefined;
  setLocation(value?: TicketTransferableEventLocation): TicketTransferableEventSchedule;
  hasLocation(): boolean;
  clearLocation(): TicketTransferableEventSchedule;

  getVouchersList(): Array<TicketTransferableEventVoucherInfo>;
  setVouchersList(value: Array<TicketTransferableEventVoucherInfo>): TicketTransferableEventSchedule;
  clearVouchersList(): TicketTransferableEventSchedule;
  addVouchers(value?: TicketTransferableEventVoucherInfo, index?: number): TicketTransferableEventVoucherInfo;

  getTime(): TicketTransferableEventTime | undefined;
  setTime(value?: TicketTransferableEventTime): TicketTransferableEventSchedule;
  hasTime(): boolean;
  clearTime(): TicketTransferableEventSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableEventSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableEventSchedule): TicketTransferableEventSchedule.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableEventSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableEventSchedule;
  static deserializeBinaryFromReader(message: TicketTransferableEventSchedule, reader: jspb.BinaryReader): TicketTransferableEventSchedule;
}

export namespace TicketTransferableEventSchedule {
  export type AsObject = {
    location?: TicketTransferableEventLocation.AsObject,
    vouchersList: Array<TicketTransferableEventVoucherInfo.AsObject>,
    time?: TicketTransferableEventTime.AsObject,
  }
}

export class TicketTransferableEventTime extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): TicketTransferableEventTime;

  getEndTime(): number;
  setEndTime(value: number): TicketTransferableEventTime;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): TicketTransferableEventTime;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): TicketTransferableEventTime;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): TicketTransferableEventTime;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): TicketTransferableEventTime;

  getTimezone(): string;
  setTimezone(value: string): TicketTransferableEventTime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketTransferableEventTime.AsObject;
  static toObject(includeInstance: boolean, msg: TicketTransferableEventTime): TicketTransferableEventTime.AsObject;
  static serializeBinaryToWriter(message: TicketTransferableEventTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketTransferableEventTime;
  static deserializeBinaryFromReader(message: TicketTransferableEventTime, reader: jspb.BinaryReader): TicketTransferableEventTime;
}

export namespace TicketTransferableEventTime {
  export type AsObject = {
    startTime: number,
    endTime: number,
    bookingStartTime: number,
    bookingEndTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    timezone: string,
  }
}

export class CreateTicketTransferableReq extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): CreateTicketTransferableReq;

  getTicketIdsList(): Array<string>;
  setTicketIdsList(value: Array<string>): CreateTicketTransferableReq;
  clearTicketIdsList(): CreateTicketTransferableReq;
  addTicketIds(value: string, index?: number): CreateTicketTransferableReq;

  getEventInfo(): TicketTransferableEventInfo | undefined;
  setEventInfo(value?: TicketTransferableEventInfo): CreateTicketTransferableReq;
  hasEventInfo(): boolean;
  clearEventInfo(): CreateTicketTransferableReq;

  getOrderId(): string;
  setOrderId(value: string): CreateTicketTransferableReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketTransferableReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketTransferableReq): CreateTicketTransferableReq.AsObject;
  static serializeBinaryToWriter(message: CreateTicketTransferableReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketTransferableReq;
  static deserializeBinaryFromReader(message: CreateTicketTransferableReq, reader: jspb.BinaryReader): CreateTicketTransferableReq;
}

export namespace CreateTicketTransferableReq {
  export type AsObject = {
    transferableId: string,
    ticketIdsList: Array<string>,
    eventInfo?: TicketTransferableEventInfo.AsObject,
    orderId: string,
  }
}

export class CreateTicketTransferableAllReq extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): CreateTicketTransferableAllReq;

  getSeatMapId(): string;
  setSeatMapId(value: string): CreateTicketTransferableAllReq;

  getPriceBlockId(): string;
  setPriceBlockId(value: string): CreateTicketTransferableAllReq;

  getSeatNameFrom(): string;
  setSeatNameFrom(value: string): CreateTicketTransferableAllReq;

  getSeatNameTo(): string;
  setSeatNameTo(value: string): CreateTicketTransferableAllReq;

  getEventInfo(): TicketTransferableEventInfo | undefined;
  setEventInfo(value?: TicketTransferableEventInfo): CreateTicketTransferableAllReq;
  hasEventInfo(): boolean;
  clearEventInfo(): CreateTicketTransferableAllReq;

  getOrderId(): string;
  setOrderId(value: string): CreateTicketTransferableAllReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketTransferableAllReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketTransferableAllReq): CreateTicketTransferableAllReq.AsObject;
  static serializeBinaryToWriter(message: CreateTicketTransferableAllReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketTransferableAllReq;
  static deserializeBinaryFromReader(message: CreateTicketTransferableAllReq, reader: jspb.BinaryReader): CreateTicketTransferableAllReq;
}

export namespace CreateTicketTransferableAllReq {
  export type AsObject = {
    transferableId: string,
    seatMapId: string,
    priceBlockId: string,
    seatNameFrom: string,
    seatNameTo: string,
    eventInfo?: TicketTransferableEventInfo.AsObject,
    orderId: string,
  }
}

export class CreateTicketTransferableAllExcludeReq extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): CreateTicketTransferableAllExcludeReq;

  getSeatMapId(): string;
  setSeatMapId(value: string): CreateTicketTransferableAllExcludeReq;

  getPriceBlockId(): string;
  setPriceBlockId(value: string): CreateTicketTransferableAllExcludeReq;

  getSeatNameFrom(): string;
  setSeatNameFrom(value: string): CreateTicketTransferableAllExcludeReq;

  getSeatNameTo(): string;
  setSeatNameTo(value: string): CreateTicketTransferableAllExcludeReq;

  getExcludeTicketIdsList(): Array<string>;
  setExcludeTicketIdsList(value: Array<string>): CreateTicketTransferableAllExcludeReq;
  clearExcludeTicketIdsList(): CreateTicketTransferableAllExcludeReq;
  addExcludeTicketIds(value: string, index?: number): CreateTicketTransferableAllExcludeReq;

  getEventInfo(): TicketTransferableEventInfo | undefined;
  setEventInfo(value?: TicketTransferableEventInfo): CreateTicketTransferableAllExcludeReq;
  hasEventInfo(): boolean;
  clearEventInfo(): CreateTicketTransferableAllExcludeReq;

  getOrderId(): string;
  setOrderId(value: string): CreateTicketTransferableAllExcludeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketTransferableAllExcludeReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketTransferableAllExcludeReq): CreateTicketTransferableAllExcludeReq.AsObject;
  static serializeBinaryToWriter(message: CreateTicketTransferableAllExcludeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketTransferableAllExcludeReq;
  static deserializeBinaryFromReader(message: CreateTicketTransferableAllExcludeReq, reader: jspb.BinaryReader): CreateTicketTransferableAllExcludeReq;
}

export namespace CreateTicketTransferableAllExcludeReq {
  export type AsObject = {
    transferableId: string,
    seatMapId: string,
    priceBlockId: string,
    seatNameFrom: string,
    seatNameTo: string,
    excludeTicketIdsList: Array<string>,
    eventInfo?: TicketTransferableEventInfo.AsObject,
    orderId: string,
  }
}

export class MapUserInfoReq extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): MapUserInfoReq;

  getUserInfo(): TicketTransferableUserInfo | undefined;
  setUserInfo(value?: TicketTransferableUserInfo): MapUserInfoReq;
  hasUserInfo(): boolean;
  clearUserInfo(): MapUserInfoReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapUserInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: MapUserInfoReq): MapUserInfoReq.AsObject;
  static serializeBinaryToWriter(message: MapUserInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapUserInfoReq;
  static deserializeBinaryFromReader(message: MapUserInfoReq, reader: jspb.BinaryReader): MapUserInfoReq;
}

export namespace MapUserInfoReq {
  export type AsObject = {
    transferableId: string,
    userInfo?: TicketTransferableUserInfo.AsObject,
  }
}

export class SubmitTicketTransferableReq extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): SubmitTicketTransferableReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTicketTransferableReq.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTicketTransferableReq): SubmitTicketTransferableReq.AsObject;
  static serializeBinaryToWriter(message: SubmitTicketTransferableReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTicketTransferableReq;
  static deserializeBinaryFromReader(message: SubmitTicketTransferableReq, reader: jspb.BinaryReader): SubmitTicketTransferableReq;
}

export namespace SubmitTicketTransferableReq {
  export type AsObject = {
    transferableId: string,
  }
}

export class GetDetailTicketTransferableReq extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): GetDetailTicketTransferableReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetailTicketTransferableReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetailTicketTransferableReq): GetDetailTicketTransferableReq.AsObject;
  static serializeBinaryToWriter(message: GetDetailTicketTransferableReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetailTicketTransferableReq;
  static deserializeBinaryFromReader(message: GetDetailTicketTransferableReq, reader: jspb.BinaryReader): GetDetailTicketTransferableReq;
}

export namespace GetDetailTicketTransferableReq {
  export type AsObject = {
    transferableId: string,
  }
}

export class CreateTicketTransferableRes extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): CreateTicketTransferableRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketTransferableRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketTransferableRes): CreateTicketTransferableRes.AsObject;
  static serializeBinaryToWriter(message: CreateTicketTransferableRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketTransferableRes;
  static deserializeBinaryFromReader(message: CreateTicketTransferableRes, reader: jspb.BinaryReader): CreateTicketTransferableRes;
}

export namespace CreateTicketTransferableRes {
  export type AsObject = {
    transferableId: string,
  }
}

export class CreateTicketTransferableAllRes extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): CreateTicketTransferableAllRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketTransferableAllRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketTransferableAllRes): CreateTicketTransferableAllRes.AsObject;
  static serializeBinaryToWriter(message: CreateTicketTransferableAllRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketTransferableAllRes;
  static deserializeBinaryFromReader(message: CreateTicketTransferableAllRes, reader: jspb.BinaryReader): CreateTicketTransferableAllRes;
}

export namespace CreateTicketTransferableAllRes {
  export type AsObject = {
    transferableId: string,
  }
}

export class CreateTicketTransferableAllExcludeRes extends jspb.Message {
  getTransferableId(): string;
  setTransferableId(value: string): CreateTicketTransferableAllExcludeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTicketTransferableAllExcludeRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTicketTransferableAllExcludeRes): CreateTicketTransferableAllExcludeRes.AsObject;
  static serializeBinaryToWriter(message: CreateTicketTransferableAllExcludeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTicketTransferableAllExcludeRes;
  static deserializeBinaryFromReader(message: CreateTicketTransferableAllExcludeRes, reader: jspb.BinaryReader): CreateTicketTransferableAllExcludeRes;
}

export namespace CreateTicketTransferableAllExcludeRes {
  export type AsObject = {
    transferableId: string,
  }
}

export class GetDetailTicketTransferableRes extends jspb.Message {
  getTransferableInfo(): TicketTransferableInfo | undefined;
  setTransferableInfo(value?: TicketTransferableInfo): GetDetailTicketTransferableRes;
  hasTransferableInfo(): boolean;
  clearTransferableInfo(): GetDetailTicketTransferableRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDetailTicketTransferableRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDetailTicketTransferableRes): GetDetailTicketTransferableRes.AsObject;
  static serializeBinaryToWriter(message: GetDetailTicketTransferableRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDetailTicketTransferableRes;
  static deserializeBinaryFromReader(message: GetDetailTicketTransferableRes, reader: jspb.BinaryReader): GetDetailTicketTransferableRes;
}

export namespace GetDetailTicketTransferableRes {
  export type AsObject = {
    transferableInfo?: TicketTransferableInfo.AsObject,
  }
}

