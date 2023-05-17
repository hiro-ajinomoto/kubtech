import * as jspb from 'google-protobuf'

import * as ticket_mobile_base_pb from '../../ticket/mobile/base_pb';
import * as base_base_pb from '../../base/base_pb';


export class TicketInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): TicketInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): TicketInfo;

  getOrderId(): string;
  setOrderId(value: string): TicketInfo;

  getEventInfo(): TicketEventInfo | undefined;
  setEventInfo(value?: TicketEventInfo): TicketInfo;
  hasEventInfo(): boolean;
  clearEventInfo(): TicketInfo;

  getSeatInfo(): TicketSeatInfo | undefined;
  setSeatInfo(value?: TicketSeatInfo): TicketInfo;
  hasSeatInfo(): boolean;
  clearSeatInfo(): TicketInfo;

  getStatus(): TicketStatus;
  setStatus(value: TicketStatus): TicketInfo;

  getSecretCode(): string;
  setSecretCode(value: string): TicketInfo;

  getVerificationCode(): string;
  setVerificationCode(value: string): TicketInfo;

  getUserInfo(): TicketUserInfo | undefined;
  setUserInfo(value?: TicketUserInfo): TicketInfo;
  hasUserInfo(): boolean;
  clearUserInfo(): TicketInfo;

  getIsEnabledVerificationCode(): boolean;
  setIsEnabledVerificationCode(value: boolean): TicketInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): TicketInfo;

  getTicketType(): TicketType;
  setTicketType(value: TicketType): TicketInfo;

  getOwnerId(): string;
  setOwnerId(value: string): TicketInfo;

  getIsTransferableTicket(): boolean;
  setIsTransferableTicket(value: boolean): TicketInfo;

  getTransferTransactionId(): string;
  setTransferTransactionId(value: string): TicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketInfo): TicketInfo.AsObject;
  static serializeBinaryToWriter(message: TicketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketInfo;
  static deserializeBinaryFromReader(message: TicketInfo, reader: jspb.BinaryReader): TicketInfo;
}

export namespace TicketInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    orderId: string,
    eventInfo?: TicketEventInfo.AsObject,
    seatInfo?: TicketSeatInfo.AsObject,
    status: TicketStatus,
    secretCode: string,
    verificationCode: string,
    userInfo?: TicketUserInfo.AsObject,
    isEnabledVerificationCode: boolean,
    partnershipId: string,
    ticketType: TicketType,
    ownerId: string,
    isTransferableTicket: boolean,
    transferTransactionId: string,
  }
}

export class TicketPriceSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketPriceSimpleInfo;

  getName(): string;
  setName(value: string): TicketPriceSimpleInfo;

  getIcon(): string;
  setIcon(value: string): TicketPriceSimpleInfo;

  getPrice(): number;
  setPrice(value: number): TicketPriceSimpleInfo;

  getCurrency(): TicketCurrencyInfo | undefined;
  setCurrency(value?: TicketCurrencyInfo): TicketPriceSimpleInfo;
  hasCurrency(): boolean;
  clearCurrency(): TicketPriceSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketPriceSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketPriceSimpleInfo): TicketPriceSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: TicketPriceSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketPriceSimpleInfo;
  static deserializeBinaryFromReader(message: TicketPriceSimpleInfo, reader: jspb.BinaryReader): TicketPriceSimpleInfo;
}

export namespace TicketPriceSimpleInfo {
  export type AsObject = {
    id: string,
    name: string,
    icon: string,
    price: number,
    currency?: TicketCurrencyInfo.AsObject,
  }
}

export class TicketCurrencyInfo extends jspb.Message {
  getName(): string;
  setName(value: string): TicketCurrencyInfo;

  getCode(): string;
  setCode(value: string): TicketCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): TicketCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCurrencyInfo): TicketCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: TicketCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCurrencyInfo;
  static deserializeBinaryFromReader(message: TicketCurrencyInfo, reader: jspb.BinaryReader): TicketCurrencyInfo;
}

export namespace TicketCurrencyInfo {
  export type AsObject = {
    name: string,
    code: string,
    icon: string,
  }
}

export class TicketEventLocation extends jspb.Message {
  getId(): string;
  setId(value: string): TicketEventLocation;

  getAddress(): string;
  setAddress(value: string): TicketEventLocation;

  getWard(): string;
  setWard(value: string): TicketEventLocation;

  getDistrict(): string;
  setDistrict(value: string): TicketEventLocation;

  getCity(): string;
  setCity(value: string): TicketEventLocation;

  getCountry(): string;
  setCountry(value: string): TicketEventLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketEventLocation.AsObject;
  static toObject(includeInstance: boolean, msg: TicketEventLocation): TicketEventLocation.AsObject;
  static serializeBinaryToWriter(message: TicketEventLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketEventLocation;
  static deserializeBinaryFromReader(message: TicketEventLocation, reader: jspb.BinaryReader): TicketEventLocation;
}

export namespace TicketEventLocation {
  export type AsObject = {
    id: string,
    address: string,
    ward: string,
    district: string,
    city: string,
    country: string,
  }
}

export class TicketEventInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): TicketEventInfo;

  getName(): string;
  setName(value: string): TicketEventInfo;

  getStartTime(): number;
  setStartTime(value: number): TicketEventInfo;

  getEndTime(): number;
  setEndTime(value: number): TicketEventInfo;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): TicketEventInfo;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): TicketEventInfo;

  getLocation(): TicketEventLocation | undefined;
  setLocation(value?: TicketEventLocation): TicketEventInfo;
  hasLocation(): boolean;
  clearLocation(): TicketEventInfo;

  getTimezone(): string;
  setTimezone(value: string): TicketEventInfo;

  getCheckinEnded(): boolean;
  setCheckinEnded(value: boolean): TicketEventInfo;

  getScheduleId(): string;
  setScheduleId(value: string): TicketEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketEventInfo): TicketEventInfo.AsObject;
  static serializeBinaryToWriter(message: TicketEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketEventInfo;
  static deserializeBinaryFromReader(message: TicketEventInfo, reader: jspb.BinaryReader): TicketEventInfo;
}

export namespace TicketEventInfo {
  export type AsObject = {
    eventId: string,
    name: string,
    startTime: number,
    endTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    location?: TicketEventLocation.AsObject,
    timezone: string,
    checkinEnded: boolean,
    scheduleId: string,
  }
}

export class TicketUserInfo extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): TicketUserInfo;

  getUserFullName(): string;
  setUserFullName(value: string): TicketUserInfo;

  getUserPhone(): string;
  setUserPhone(value: string): TicketUserInfo;

  getUserEmail(): string;
  setUserEmail(value: string): TicketUserInfo;

  getUserAddress(): string;
  setUserAddress(value: string): TicketUserInfo;

  getUserImage(): string;
  setUserImage(value: string): TicketUserInfo;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): TicketUserInfo;

  getIsDeclaredCovid(): boolean;
  setIsDeclaredCovid(value: boolean): TicketUserInfo;

  getUserInspectorImage(): string;
  setUserInspectorImage(value: string): TicketUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketUserInfo): TicketUserInfo.AsObject;
  static serializeBinaryToWriter(message: TicketUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketUserInfo;
  static deserializeBinaryFromReader(message: TicketUserInfo, reader: jspb.BinaryReader): TicketUserInfo;
}

export namespace TicketUserInfo {
  export type AsObject = {
    userId: string,
    userFullName: string,
    userPhone: string,
    userEmail: string,
    userAddress: string,
    userImage: string,
    userPhoneCode: string,
    isDeclaredCovid: boolean,
    userInspectorImage: string,
  }
}

export class TicketSeatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TicketSeatInfo;

  getName(): string;
  setName(value: string): TicketSeatInfo;

  getPrice(): TicketPriceSimpleInfo | undefined;
  setPrice(value?: TicketPriceSimpleInfo): TicketSeatInfo;
  hasPrice(): boolean;
  clearPrice(): TicketSeatInfo;

  getPriceBlockId(): string;
  setPriceBlockId(value: string): TicketSeatInfo;

  getPriceBlockName(): string;
  setPriceBlockName(value: string): TicketSeatInfo;

  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): TicketSeatInfo;

  getGeneralSeatMapName(): string;
  setGeneralSeatMapName(value: string): TicketSeatInfo;

  getSeatTypeName(): string;
  setSeatTypeName(value: string): TicketSeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketSeatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketSeatInfo): TicketSeatInfo.AsObject;
  static serializeBinaryToWriter(message: TicketSeatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketSeatInfo;
  static deserializeBinaryFromReader(message: TicketSeatInfo, reader: jspb.BinaryReader): TicketSeatInfo;
}

export namespace TicketSeatInfo {
  export type AsObject = {
    id: string,
    name: string,
    price?: TicketPriceSimpleInfo.AsObject,
    priceBlockId: string,
    priceBlockName: string,
    generalSeatMapId: string,
    generalSeatMapName: string,
    seatTypeName: string,
  }
}

export class TransferTicket extends jspb.Message {
  getId(): string;
  setId(value: string): TransferTicket;

  getEventId(): string;
  setEventId(value: string): TransferTicket;

  getSeatId(): string;
  setSeatId(value: string): TransferTicket;

  getSeatName(): string;
  setSeatName(value: string): TransferTicket;

  getPrice(): number;
  setPrice(value: number): TransferTicket;

  getPriceBlockId(): string;
  setPriceBlockId(value: string): TransferTicket;

  getPriceBlockName(): string;
  setPriceBlockName(value: string): TransferTicket;

  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): TransferTicket;

  getGeneralSeatMapName(): string;
  setGeneralSeatMapName(value: string): TransferTicket;

  getSeatTypeName(): string;
  setSeatTypeName(value: string): TransferTicket;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): TransferTicket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferTicket.AsObject;
  static toObject(includeInstance: boolean, msg: TransferTicket): TransferTicket.AsObject;
  static serializeBinaryToWriter(message: TransferTicket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferTicket;
  static deserializeBinaryFromReader(message: TransferTicket, reader: jspb.BinaryReader): TransferTicket;
}

export namespace TransferTicket {
  export type AsObject = {
    id: string,
    eventId: string,
    seatId: string,
    seatName: string,
    price: number,
    priceBlockId: string,
    priceBlockName: string,
    generalSeatMapId: string,
    generalSeatMapName: string,
    seatTypeName: string,
    currencyCode: string,
  }
}

export class TransferTransaction extends jspb.Message {
  getId(): string;
  setId(value: string): TransferTransaction;

  getTicketsList(): Array<TransferTicket>;
  setTicketsList(value: Array<TransferTicket>): TransferTransaction;
  clearTicketsList(): TransferTransaction;
  addTickets(value?: TransferTicket, index?: number): TransferTicket;

  getFrom(): string;
  setFrom(value: string): TransferTransaction;

  getTo(): string;
  setTo(value: string): TransferTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: TransferTransaction): TransferTransaction.AsObject;
  static serializeBinaryToWriter(message: TransferTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferTransaction;
  static deserializeBinaryFromReader(message: TransferTransaction, reader: jspb.BinaryReader): TransferTransaction;
}

export namespace TransferTransaction {
  export type AsObject = {
    id: string,
    ticketsList: Array<TransferTicket.AsObject>,
    from: string,
    to: string,
  }
}

export class UpdateUserInfoReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): UpdateUserInfoReq;

  getUserId(): string;
  setUserId(value: string): UpdateUserInfoReq;

  getUserFullName(): string;
  setUserFullName(value: string): UpdateUserInfoReq;

  getUserPhone(): string;
  setUserPhone(value: string): UpdateUserInfoReq;

  getUserEmail(): string;
  setUserEmail(value: string): UpdateUserInfoReq;

  getUserAddress(): string;
  setUserAddress(value: string): UpdateUserInfoReq;

  getUserImage(): string;
  setUserImage(value: string): UpdateUserInfoReq;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): UpdateUserInfoReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserInfoReq): UpdateUserInfoReq.AsObject;
  static serializeBinaryToWriter(message: UpdateUserInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserInfoReq;
  static deserializeBinaryFromReader(message: UpdateUserInfoReq, reader: jspb.BinaryReader): UpdateUserInfoReq;
}

export namespace UpdateUserInfoReq {
  export type AsObject = {
    ticketId: string,
    userId: string,
    userFullName: string,
    userPhone: string,
    userEmail: string,
    userAddress: string,
    userImage: string,
    userPhoneCode: string,
  }
}

export class UpdateStatusReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): UpdateStatusReq;

  getStatus(): TicketStatus;
  setStatus(value: TicketStatus): UpdateStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStatusReq): UpdateStatusReq.AsObject;
  static serializeBinaryToWriter(message: UpdateStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStatusReq;
  static deserializeBinaryFromReader(message: UpdateStatusReq, reader: jspb.BinaryReader): UpdateStatusReq;
}

export namespace UpdateStatusReq {
  export type AsObject = {
    ticketId: string,
    status: TicketStatus,
  }
}

export class UpdateEnableVerificationCodeReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): UpdateEnableVerificationCodeReq;

  getIsEnabledVerificationCode(): boolean;
  setIsEnabledVerificationCode(value: boolean): UpdateEnableVerificationCodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEnableVerificationCodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEnableVerificationCodeReq): UpdateEnableVerificationCodeReq.AsObject;
  static serializeBinaryToWriter(message: UpdateEnableVerificationCodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEnableVerificationCodeReq;
  static deserializeBinaryFromReader(message: UpdateEnableVerificationCodeReq, reader: jspb.BinaryReader): UpdateEnableVerificationCodeReq;
}

export namespace UpdateEnableVerificationCodeReq {
  export type AsObject = {
    ticketId: string,
    isEnabledVerificationCode: boolean,
  }
}

export class GetMyTicketReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetMyTicketReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketReq): GetMyTicketReq.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketReq;
  static deserializeBinaryFromReader(message: GetMyTicketReq, reader: jspb.BinaryReader): GetMyTicketReq;
}

export namespace GetMyTicketReq {
  export type AsObject = {
    id: string,
  }
}

export class GetMyTicketByOrderIdReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): GetMyTicketByOrderIdReq;

  getStatus(): TicketStatusFilter;
  setStatus(value: TicketStatusFilter): GetMyTicketByOrderIdReq;

  getPagination(): ticket_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationReq): GetMyTicketByOrderIdReq;
  hasPagination(): boolean;
  clearPagination(): GetMyTicketByOrderIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketByOrderIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketByOrderIdReq): GetMyTicketByOrderIdReq.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketByOrderIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketByOrderIdReq;
  static deserializeBinaryFromReader(message: GetMyTicketByOrderIdReq, reader: jspb.BinaryReader): GetMyTicketByOrderIdReq;
}

export namespace GetMyTicketByOrderIdReq {
  export type AsObject = {
    orderId: string,
    status: TicketStatusFilter,
    pagination?: ticket_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class GetMyTicketByPhoneReq extends jspb.Message {
  getUserPhone(): string;
  setUserPhone(value: string): GetMyTicketByPhoneReq;

  getVerificationCode(): string;
  setVerificationCode(value: string): GetMyTicketByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketByPhoneReq): GetMyTicketByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketByPhoneReq;
  static deserializeBinaryFromReader(message: GetMyTicketByPhoneReq, reader: jspb.BinaryReader): GetMyTicketByPhoneReq;
}

export namespace GetMyTicketByPhoneReq {
  export type AsObject = {
    userPhone: string,
    verificationCode: string,
  }
}

export class GetMyTicketByTransferTransactionIdReq extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): GetMyTicketByTransferTransactionIdReq;

  getPagination(): ticket_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationReq): GetMyTicketByTransferTransactionIdReq;
  hasPagination(): boolean;
  clearPagination(): GetMyTicketByTransferTransactionIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketByTransferTransactionIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketByTransferTransactionIdReq): GetMyTicketByTransferTransactionIdReq.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketByTransferTransactionIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketByTransferTransactionIdReq;
  static deserializeBinaryFromReader(message: GetMyTicketByTransferTransactionIdReq, reader: jspb.BinaryReader): GetMyTicketByTransferTransactionIdReq;
}

export namespace GetMyTicketByTransferTransactionIdReq {
  export type AsObject = {
    transactionId: string,
    pagination?: ticket_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class ListMyTicketReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyTicketReq): ListMyTicketReq.AsObject;
  static serializeBinaryToWriter(message: ListMyTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyTicketReq;
  static deserializeBinaryFromReader(message: ListMyTicketReq, reader: jspb.BinaryReader): ListMyTicketReq;
}

export namespace ListMyTicketReq {
  export type AsObject = {
  }
}

export class ListMyTicketByStatusReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): ListMyTicketByStatusReq;

  getStatus(): TicketStatus;
  setStatus(value: TicketStatus): ListMyTicketByStatusReq;

  getPagination(): ticket_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationReq): ListMyTicketByStatusReq;
  hasPagination(): boolean;
  clearPagination(): ListMyTicketByStatusReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyTicketByStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyTicketByStatusReq): ListMyTicketByStatusReq.AsObject;
  static serializeBinaryToWriter(message: ListMyTicketByStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyTicketByStatusReq;
  static deserializeBinaryFromReader(message: ListMyTicketByStatusReq, reader: jspb.BinaryReader): ListMyTicketByStatusReq;
}

export namespace ListMyTicketByStatusReq {
  export type AsObject = {
    orderId: string,
    status: TicketStatus,
    pagination?: ticket_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class ListMyTicketByPriceBlockReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): ListMyTicketByPriceBlockReq;

  getPriceBlockId(): string;
  setPriceBlockId(value: string): ListMyTicketByPriceBlockReq;

  getSeatNameFrom(): string;
  setSeatNameFrom(value: string): ListMyTicketByPriceBlockReq;

  getSeatNameTo(): string;
  setSeatNameTo(value: string): ListMyTicketByPriceBlockReq;

  getSeatMapId(): string;
  setSeatMapId(value: string): ListMyTicketByPriceBlockReq;

  getPagination(): ticket_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationReq): ListMyTicketByPriceBlockReq;
  hasPagination(): boolean;
  clearPagination(): ListMyTicketByPriceBlockReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyTicketByPriceBlockReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyTicketByPriceBlockReq): ListMyTicketByPriceBlockReq.AsObject;
  static serializeBinaryToWriter(message: ListMyTicketByPriceBlockReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyTicketByPriceBlockReq;
  static deserializeBinaryFromReader(message: ListMyTicketByPriceBlockReq, reader: jspb.BinaryReader): ListMyTicketByPriceBlockReq;
}

export namespace ListMyTicketByPriceBlockReq {
  export type AsObject = {
    orderId: string,
    priceBlockId: string,
    seatNameFrom: string,
    seatNameTo: string,
    seatMapId: string,
    pagination?: ticket_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class ListMyTicketReadyToCheckinReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyTicketReadyToCheckinReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyTicketReadyToCheckinReq): ListMyTicketReadyToCheckinReq.AsObject;
  static serializeBinaryToWriter(message: ListMyTicketReadyToCheckinReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyTicketReadyToCheckinReq;
  static deserializeBinaryFromReader(message: ListMyTicketReadyToCheckinReq, reader: jspb.BinaryReader): ListMyTicketReadyToCheckinReq;
}

export namespace ListMyTicketReadyToCheckinReq {
  export type AsObject = {
  }
}

export class MarkTicketOfflineReq extends jspb.Message {
  getTicketIdsList(): Array<string>;
  setTicketIdsList(value: Array<string>): MarkTicketOfflineReq;
  clearTicketIdsList(): MarkTicketOfflineReq;
  addTicketIds(value: string, index?: number): MarkTicketOfflineReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkTicketOfflineReq.AsObject;
  static toObject(includeInstance: boolean, msg: MarkTicketOfflineReq): MarkTicketOfflineReq.AsObject;
  static serializeBinaryToWriter(message: MarkTicketOfflineReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkTicketOfflineReq;
  static deserializeBinaryFromReader(message: MarkTicketOfflineReq, reader: jspb.BinaryReader): MarkTicketOfflineReq;
}

export namespace MarkTicketOfflineReq {
  export type AsObject = {
    ticketIdsList: Array<string>,
  }
}

export class GetMyTransferTransactionHistoryReq extends jspb.Message {
  getPagination(): ticket_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationReq): GetMyTransferTransactionHistoryReq;
  hasPagination(): boolean;
  clearPagination(): GetMyTransferTransactionHistoryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTransferTransactionHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTransferTransactionHistoryReq): GetMyTransferTransactionHistoryReq.AsObject;
  static serializeBinaryToWriter(message: GetMyTransferTransactionHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTransferTransactionHistoryReq;
  static deserializeBinaryFromReader(message: GetMyTransferTransactionHistoryReq, reader: jspb.BinaryReader): GetMyTransferTransactionHistoryReq;
}

export namespace GetMyTransferTransactionHistoryReq {
  export type AsObject = {
    pagination?: ticket_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class GetMyTicketsByDeliveryIDReq extends jspb.Message {
  getDeliveryId(): string;
  setDeliveryId(value: string): GetMyTicketsByDeliveryIDReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): GetMyTicketsByDeliveryIDReq;
  hasPagination(): boolean;
  clearPagination(): GetMyTicketsByDeliveryIDReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketsByDeliveryIDReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketsByDeliveryIDReq): GetMyTicketsByDeliveryIDReq.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketsByDeliveryIDReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketsByDeliveryIDReq;
  static deserializeBinaryFromReader(message: GetMyTicketsByDeliveryIDReq, reader: jspb.BinaryReader): GetMyTicketsByDeliveryIDReq;
}

export namespace GetMyTicketsByDeliveryIDReq {
  export type AsObject = {
    deliveryId: string,
    pagination?: base_base_pb.PaginationReq.AsObject,
  }
}

export class GetMyTicketRes extends jspb.Message {
  getInfo(): TicketInfo | undefined;
  setInfo(value?: TicketInfo): GetMyTicketRes;
  hasInfo(): boolean;
  clearInfo(): GetMyTicketRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketRes): GetMyTicketRes.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketRes;
  static deserializeBinaryFromReader(message: GetMyTicketRes, reader: jspb.BinaryReader): GetMyTicketRes;
}

export namespace GetMyTicketRes {
  export type AsObject = {
    info?: TicketInfo.AsObject,
  }
}

export class GetMyTicketByOrderIdRes extends jspb.Message {
  getInfoList(): Array<TicketInfo>;
  setInfoList(value: Array<TicketInfo>): GetMyTicketByOrderIdRes;
  clearInfoList(): GetMyTicketByOrderIdRes;
  addInfo(value?: TicketInfo, index?: number): TicketInfo;

  getPagination(): ticket_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationRes): GetMyTicketByOrderIdRes;
  hasPagination(): boolean;
  clearPagination(): GetMyTicketByOrderIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketByOrderIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketByOrderIdRes): GetMyTicketByOrderIdRes.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketByOrderIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketByOrderIdRes;
  static deserializeBinaryFromReader(message: GetMyTicketByOrderIdRes, reader: jspb.BinaryReader): GetMyTicketByOrderIdRes;
}

export namespace GetMyTicketByOrderIdRes {
  export type AsObject = {
    infoList: Array<TicketInfo.AsObject>,
    pagination?: ticket_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class GetMyTicketByPhoneRes extends jspb.Message {
  getInfo(): TicketInfo | undefined;
  setInfo(value?: TicketInfo): GetMyTicketByPhoneRes;
  hasInfo(): boolean;
  clearInfo(): GetMyTicketByPhoneRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketByPhoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketByPhoneRes): GetMyTicketByPhoneRes.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketByPhoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketByPhoneRes;
  static deserializeBinaryFromReader(message: GetMyTicketByPhoneRes, reader: jspb.BinaryReader): GetMyTicketByPhoneRes;
}

export namespace GetMyTicketByPhoneRes {
  export type AsObject = {
    info?: TicketInfo.AsObject,
  }
}

export class GetMyTicketsRes extends jspb.Message {
  getInfoList(): Array<TicketInfo>;
  setInfoList(value: Array<TicketInfo>): GetMyTicketsRes;
  clearInfoList(): GetMyTicketsRes;
  addInfo(value?: TicketInfo, index?: number): TicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketsRes): GetMyTicketsRes.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketsRes;
  static deserializeBinaryFromReader(message: GetMyTicketsRes, reader: jspb.BinaryReader): GetMyTicketsRes;
}

export namespace GetMyTicketsRes {
  export type AsObject = {
    infoList: Array<TicketInfo.AsObject>,
  }
}

export class GetMyTicketByTransferTransactionIdRes extends jspb.Message {
  getInfoList(): Array<TicketInfo>;
  setInfoList(value: Array<TicketInfo>): GetMyTicketByTransferTransactionIdRes;
  clearInfoList(): GetMyTicketByTransferTransactionIdRes;
  addInfo(value?: TicketInfo, index?: number): TicketInfo;

  getPagination(): ticket_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationRes): GetMyTicketByTransferTransactionIdRes;
  hasPagination(): boolean;
  clearPagination(): GetMyTicketByTransferTransactionIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketByTransferTransactionIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketByTransferTransactionIdRes): GetMyTicketByTransferTransactionIdRes.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketByTransferTransactionIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketByTransferTransactionIdRes;
  static deserializeBinaryFromReader(message: GetMyTicketByTransferTransactionIdRes, reader: jspb.BinaryReader): GetMyTicketByTransferTransactionIdRes;
}

export namespace GetMyTicketByTransferTransactionIdRes {
  export type AsObject = {
    infoList: Array<TicketInfo.AsObject>,
    pagination?: ticket_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class ListMyTicketByStatusRes extends jspb.Message {
  getInfoList(): Array<TicketInfo>;
  setInfoList(value: Array<TicketInfo>): ListMyTicketByStatusRes;
  clearInfoList(): ListMyTicketByStatusRes;
  addInfo(value?: TicketInfo, index?: number): TicketInfo;

  getPagination(): ticket_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationRes): ListMyTicketByStatusRes;
  hasPagination(): boolean;
  clearPagination(): ListMyTicketByStatusRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyTicketByStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyTicketByStatusRes): ListMyTicketByStatusRes.AsObject;
  static serializeBinaryToWriter(message: ListMyTicketByStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyTicketByStatusRes;
  static deserializeBinaryFromReader(message: ListMyTicketByStatusRes, reader: jspb.BinaryReader): ListMyTicketByStatusRes;
}

export namespace ListMyTicketByStatusRes {
  export type AsObject = {
    infoList: Array<TicketInfo.AsObject>,
    pagination?: ticket_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class ListMyTicketByPriceBlockRes extends jspb.Message {
  getInfoList(): Array<TicketInfo>;
  setInfoList(value: Array<TicketInfo>): ListMyTicketByPriceBlockRes;
  clearInfoList(): ListMyTicketByPriceBlockRes;
  addInfo(value?: TicketInfo, index?: number): TicketInfo;

  getPagination(): ticket_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationRes): ListMyTicketByPriceBlockRes;
  hasPagination(): boolean;
  clearPagination(): ListMyTicketByPriceBlockRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyTicketByPriceBlockRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyTicketByPriceBlockRes): ListMyTicketByPriceBlockRes.AsObject;
  static serializeBinaryToWriter(message: ListMyTicketByPriceBlockRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyTicketByPriceBlockRes;
  static deserializeBinaryFromReader(message: ListMyTicketByPriceBlockRes, reader: jspb.BinaryReader): ListMyTicketByPriceBlockRes;
}

export namespace ListMyTicketByPriceBlockRes {
  export type AsObject = {
    infoList: Array<TicketInfo.AsObject>,
    pagination?: ticket_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class ListMyTicketReadyToCheckinRes extends jspb.Message {
  getInfoList(): Array<TicketInfo>;
  setInfoList(value: Array<TicketInfo>): ListMyTicketReadyToCheckinRes;
  clearInfoList(): ListMyTicketReadyToCheckinRes;
  addInfo(value?: TicketInfo, index?: number): TicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyTicketReadyToCheckinRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyTicketReadyToCheckinRes): ListMyTicketReadyToCheckinRes.AsObject;
  static serializeBinaryToWriter(message: ListMyTicketReadyToCheckinRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyTicketReadyToCheckinRes;
  static deserializeBinaryFromReader(message: ListMyTicketReadyToCheckinRes, reader: jspb.BinaryReader): ListMyTicketReadyToCheckinRes;
}

export namespace ListMyTicketReadyToCheckinRes {
  export type AsObject = {
    infoList: Array<TicketInfo.AsObject>,
  }
}

export class GetMyTransferTransactionHistoryRes extends jspb.Message {
  getTransactionsList(): Array<TransferTransaction>;
  setTransactionsList(value: Array<TransferTransaction>): GetMyTransferTransactionHistoryRes;
  clearTransactionsList(): GetMyTransferTransactionHistoryRes;
  addTransactions(value?: TransferTransaction, index?: number): TransferTransaction;

  getPagination(): ticket_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: ticket_mobile_base_pb.PaginationRes): GetMyTransferTransactionHistoryRes;
  hasPagination(): boolean;
  clearPagination(): GetMyTransferTransactionHistoryRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTransferTransactionHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTransferTransactionHistoryRes): GetMyTransferTransactionHistoryRes.AsObject;
  static serializeBinaryToWriter(message: GetMyTransferTransactionHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTransferTransactionHistoryRes;
  static deserializeBinaryFromReader(message: GetMyTransferTransactionHistoryRes, reader: jspb.BinaryReader): GetMyTransferTransactionHistoryRes;
}

export namespace GetMyTransferTransactionHistoryRes {
  export type AsObject = {
    transactionsList: Array<TransferTransaction.AsObject>,
    pagination?: ticket_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class GetMyTicketsByDeliveryIDRes extends jspb.Message {
  getItemsList(): Array<TicketInfo>;
  setItemsList(value: Array<TicketInfo>): GetMyTicketsByDeliveryIDRes;
  clearItemsList(): GetMyTicketsByDeliveryIDRes;
  addItems(value?: TicketInfo, index?: number): TicketInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): GetMyTicketsByDeliveryIDRes;
  hasPagination(): boolean;
  clearPagination(): GetMyTicketsByDeliveryIDRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTicketsByDeliveryIDRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTicketsByDeliveryIDRes): GetMyTicketsByDeliveryIDRes.AsObject;
  static serializeBinaryToWriter(message: GetMyTicketsByDeliveryIDRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTicketsByDeliveryIDRes;
  static deserializeBinaryFromReader(message: GetMyTicketsByDeliveryIDRes, reader: jspb.BinaryReader): GetMyTicketsByDeliveryIDRes;
}

export namespace GetMyTicketsByDeliveryIDRes {
  export type AsObject = {
    itemsList: Array<TicketInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

export enum TicketStatus { 
  TICKET_STATUS_INVALID = 0,
  TICKET_STATUS_NOT_USED = 1,
  TICKET_STATUS_CHECKED_IN = 2,
}
export enum TicketStatusFilter { 
  TICKET_FILTER_STATUS_INVALID = 0,
  TICKET_FILTER_STATUS_NOT_USED = 1,
  TICKET_FILTER_STATUS_CHECKED_IN = 2,
  TICKET_FILTER_STATUS_TRANSFERRED = 3,
}
export enum TicketType { 
  TICKET_TYPE_BUY = 0,
  TICKET_TYPE_RELEASE = 1,
  TICKET_TYPE_TRANSFER = 2,
}
