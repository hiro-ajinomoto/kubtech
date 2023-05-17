import * as jspb from 'google-protobuf'

import * as ticket_web_inspector_base_pb from '../../ticket/web_inspector/base_pb';


export class InspectorTicketInfo extends jspb.Message {
  getId(): string;
  setId(value: string): InspectorTicketInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): InspectorTicketInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): InspectorTicketInfo;

  getOrderId(): string;
  setOrderId(value: string): InspectorTicketInfo;

  getEventInfo(): InspectorTicketEventInfo | undefined;
  setEventInfo(value?: InspectorTicketEventInfo): InspectorTicketInfo;
  hasEventInfo(): boolean;
  clearEventInfo(): InspectorTicketInfo;

  getSeatInfo(): InspectorTicketSeatInfo | undefined;
  setSeatInfo(value?: InspectorTicketSeatInfo): InspectorTicketInfo;
  hasSeatInfo(): boolean;
  clearSeatInfo(): InspectorTicketInfo;

  getStatus(): InspectorTicketStatus;
  setStatus(value: InspectorTicketStatus): InspectorTicketInfo;

  getSecretCode(): string;
  setSecretCode(value: string): InspectorTicketInfo;

  getVerificationCode(): string;
  setVerificationCode(value: string): InspectorTicketInfo;

  getUserInfo(): InspectorTicketUserInfo | undefined;
  setUserInfo(value?: InspectorTicketUserInfo): InspectorTicketInfo;
  hasUserInfo(): boolean;
  clearUserInfo(): InspectorTicketInfo;

  getIsEnabledVerificationCode(): boolean;
  setIsEnabledVerificationCode(value: boolean): InspectorTicketInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): InspectorTicketInfo;

  getTicketType(): InspectorTicketType;
  setTicketType(value: InspectorTicketType): InspectorTicketInfo;

  getOwnerId(): string;
  setOwnerId(value: string): InspectorTicketInfo;

  getNote(): string;
  setNote(value: string): InspectorTicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectorTicketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InspectorTicketInfo): InspectorTicketInfo.AsObject;
  static serializeBinaryToWriter(message: InspectorTicketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectorTicketInfo;
  static deserializeBinaryFromReader(message: InspectorTicketInfo, reader: jspb.BinaryReader): InspectorTicketInfo;
}

export namespace InspectorTicketInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    orderId: string,
    eventInfo?: InspectorTicketEventInfo.AsObject,
    seatInfo?: InspectorTicketSeatInfo.AsObject,
    status: InspectorTicketStatus,
    secretCode: string,
    verificationCode: string,
    userInfo?: InspectorTicketUserInfo.AsObject,
    isEnabledVerificationCode: boolean,
    partnershipId: string,
    ticketType: InspectorTicketType,
    ownerId: string,
    note: string,
  }
}

export class InspectorTicketPriceSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): InspectorTicketPriceSimpleInfo;

  getName(): string;
  setName(value: string): InspectorTicketPriceSimpleInfo;

  getIcon(): string;
  setIcon(value: string): InspectorTicketPriceSimpleInfo;

  getPrice(): number;
  setPrice(value: number): InspectorTicketPriceSimpleInfo;

  getCurrency(): InspectorTicketCurrencyInfo | undefined;
  setCurrency(value?: InspectorTicketCurrencyInfo): InspectorTicketPriceSimpleInfo;
  hasCurrency(): boolean;
  clearCurrency(): InspectorTicketPriceSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectorTicketPriceSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InspectorTicketPriceSimpleInfo): InspectorTicketPriceSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: InspectorTicketPriceSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectorTicketPriceSimpleInfo;
  static deserializeBinaryFromReader(message: InspectorTicketPriceSimpleInfo, reader: jspb.BinaryReader): InspectorTicketPriceSimpleInfo;
}

export namespace InspectorTicketPriceSimpleInfo {
  export type AsObject = {
    id: string,
    name: string,
    icon: string,
    price: number,
    currency?: InspectorTicketCurrencyInfo.AsObject,
  }
}

export class InspectorTicketCurrencyInfo extends jspb.Message {
  getName(): string;
  setName(value: string): InspectorTicketCurrencyInfo;

  getCode(): string;
  setCode(value: string): InspectorTicketCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): InspectorTicketCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectorTicketCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InspectorTicketCurrencyInfo): InspectorTicketCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: InspectorTicketCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectorTicketCurrencyInfo;
  static deserializeBinaryFromReader(message: InspectorTicketCurrencyInfo, reader: jspb.BinaryReader): InspectorTicketCurrencyInfo;
}

export namespace InspectorTicketCurrencyInfo {
  export type AsObject = {
    name: string,
    code: string,
    icon: string,
  }
}

export class InspectorTicketEventLocation extends jspb.Message {
  getId(): string;
  setId(value: string): InspectorTicketEventLocation;

  getAddress(): string;
  setAddress(value: string): InspectorTicketEventLocation;

  getWard(): string;
  setWard(value: string): InspectorTicketEventLocation;

  getDistrict(): string;
  setDistrict(value: string): InspectorTicketEventLocation;

  getCity(): string;
  setCity(value: string): InspectorTicketEventLocation;

  getCountry(): string;
  setCountry(value: string): InspectorTicketEventLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectorTicketEventLocation.AsObject;
  static toObject(includeInstance: boolean, msg: InspectorTicketEventLocation): InspectorTicketEventLocation.AsObject;
  static serializeBinaryToWriter(message: InspectorTicketEventLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectorTicketEventLocation;
  static deserializeBinaryFromReader(message: InspectorTicketEventLocation, reader: jspb.BinaryReader): InspectorTicketEventLocation;
}

export namespace InspectorTicketEventLocation {
  export type AsObject = {
    id: string,
    address: string,
    ward: string,
    district: string,
    city: string,
    country: string,
  }
}

export class InspectorTicketEventInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): InspectorTicketEventInfo;

  getName(): string;
  setName(value: string): InspectorTicketEventInfo;

  getStartTime(): number;
  setStartTime(value: number): InspectorTicketEventInfo;

  getEndTime(): number;
  setEndTime(value: number): InspectorTicketEventInfo;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): InspectorTicketEventInfo;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): InspectorTicketEventInfo;

  getLocation(): InspectorTicketEventLocation | undefined;
  setLocation(value?: InspectorTicketEventLocation): InspectorTicketEventInfo;
  hasLocation(): boolean;
  clearLocation(): InspectorTicketEventInfo;

  getTimezone(): string;
  setTimezone(value: string): InspectorTicketEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectorTicketEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InspectorTicketEventInfo): InspectorTicketEventInfo.AsObject;
  static serializeBinaryToWriter(message: InspectorTicketEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectorTicketEventInfo;
  static deserializeBinaryFromReader(message: InspectorTicketEventInfo, reader: jspb.BinaryReader): InspectorTicketEventInfo;
}

export namespace InspectorTicketEventInfo {
  export type AsObject = {
    eventId: string,
    name: string,
    startTime: number,
    endTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    location?: InspectorTicketEventLocation.AsObject,
    timezone: string,
  }
}

export class InspectorTicketCheckinEventInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): InspectorTicketCheckinEventInfo;

  getName(): string;
  setName(value: string): InspectorTicketCheckinEventInfo;

  getStartTime(): number;
  setStartTime(value: number): InspectorTicketCheckinEventInfo;

  getEndTime(): number;
  setEndTime(value: number): InspectorTicketCheckinEventInfo;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): InspectorTicketCheckinEventInfo;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): InspectorTicketCheckinEventInfo;

  getLocation(): InspectorTicketEventLocation | undefined;
  setLocation(value?: InspectorTicketEventLocation): InspectorTicketCheckinEventInfo;
  hasLocation(): boolean;
  clearLocation(): InspectorTicketCheckinEventInfo;

  getTimezone(): string;
  setTimezone(value: string): InspectorTicketCheckinEventInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): InspectorTicketCheckinEventInfo;

  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): InspectorTicketCheckinEventInfo;

  getMediasList(): Array<ticket_web_inspector_base_pb.Media>;
  setMediasList(value: Array<ticket_web_inspector_base_pb.Media>): InspectorTicketCheckinEventInfo;
  clearMediasList(): InspectorTicketCheckinEventInfo;
  addMedias(value?: ticket_web_inspector_base_pb.Media, index?: number): ticket_web_inspector_base_pb.Media;

  getSeatMapUrl(): string;
  setSeatMapUrl(value: string): InspectorTicketCheckinEventInfo;

  getInstructionUrl(): string;
  setInstructionUrl(value: string): InspectorTicketCheckinEventInfo;

  getSafetyFormUrl(): string;
  setSafetyFormUrl(value: string): InspectorTicketCheckinEventInfo;

  getIsLive(): boolean;
  setIsLive(value: boolean): InspectorTicketCheckinEventInfo;

  getGeneralSeatMapName(): string;
  setGeneralSeatMapName(value: string): InspectorTicketCheckinEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectorTicketCheckinEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InspectorTicketCheckinEventInfo): InspectorTicketCheckinEventInfo.AsObject;
  static serializeBinaryToWriter(message: InspectorTicketCheckinEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectorTicketCheckinEventInfo;
  static deserializeBinaryFromReader(message: InspectorTicketCheckinEventInfo, reader: jspb.BinaryReader): InspectorTicketCheckinEventInfo;
}

export namespace InspectorTicketCheckinEventInfo {
  export type AsObject = {
    eventId: string,
    name: string,
    startTime: number,
    endTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    location?: InspectorTicketEventLocation.AsObject,
    timezone: string,
    partnershipId: string,
    generalSeatMapId: string,
    mediasList: Array<ticket_web_inspector_base_pb.Media.AsObject>,
    seatMapUrl: string,
    instructionUrl: string,
    safetyFormUrl: string,
    isLive: boolean,
    generalSeatMapName: string,
  }
}

export class InspectorTicketUserInfo extends jspb.Message {
  getUserFullName(): string;
  setUserFullName(value: string): InspectorTicketUserInfo;

  getUserPhone(): string;
  setUserPhone(value: string): InspectorTicketUserInfo;

  getUserEmail(): string;
  setUserEmail(value: string): InspectorTicketUserInfo;

  getUserAddress(): string;
  setUserAddress(value: string): InspectorTicketUserInfo;

  getUserImage(): string;
  setUserImage(value: string): InspectorTicketUserInfo;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): InspectorTicketUserInfo;

  getIsDeclaredCovid(): boolean;
  setIsDeclaredCovid(value: boolean): InspectorTicketUserInfo;

  getUserInspectorImage(): string;
  setUserInspectorImage(value: string): InspectorTicketUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectorTicketUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InspectorTicketUserInfo): InspectorTicketUserInfo.AsObject;
  static serializeBinaryToWriter(message: InspectorTicketUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectorTicketUserInfo;
  static deserializeBinaryFromReader(message: InspectorTicketUserInfo, reader: jspb.BinaryReader): InspectorTicketUserInfo;
}

export namespace InspectorTicketUserInfo {
  export type AsObject = {
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

export class InspectorTicketSeatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): InspectorTicketSeatInfo;

  getName(): string;
  setName(value: string): InspectorTicketSeatInfo;

  getPrice(): InspectorTicketPriceSimpleInfo | undefined;
  setPrice(value?: InspectorTicketPriceSimpleInfo): InspectorTicketSeatInfo;
  hasPrice(): boolean;
  clearPrice(): InspectorTicketSeatInfo;

  getPriceBlockId(): string;
  setPriceBlockId(value: string): InspectorTicketSeatInfo;

  getPriceBlockName(): string;
  setPriceBlockName(value: string): InspectorTicketSeatInfo;

  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): InspectorTicketSeatInfo;

  getGeneralSeatMapName(): string;
  setGeneralSeatMapName(value: string): InspectorTicketSeatInfo;

  getSeatTypeName(): string;
  setSeatTypeName(value: string): InspectorTicketSeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InspectorTicketSeatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InspectorTicketSeatInfo): InspectorTicketSeatInfo.AsObject;
  static serializeBinaryToWriter(message: InspectorTicketSeatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InspectorTicketSeatInfo;
  static deserializeBinaryFromReader(message: InspectorTicketSeatInfo, reader: jspb.BinaryReader): InspectorTicketSeatInfo;
}

export namespace InspectorTicketSeatInfo {
  export type AsObject = {
    id: string,
    name: string,
    price?: InspectorTicketPriceSimpleInfo.AsObject,
    priceBlockId: string,
    priceBlockName: string,
    generalSeatMapId: string,
    generalSeatMapName: string,
    seatTypeName: string,
  }
}

export class CheckInLogInfo extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): CheckInLogInfo;

  getUserId(): string;
  setUserId(value: string): CheckInLogInfo;

  getTime(): number;
  setTime(value: number): CheckInLogInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): CheckInLogInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckInLogInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CheckInLogInfo): CheckInLogInfo.AsObject;
  static serializeBinaryToWriter(message: CheckInLogInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckInLogInfo;
  static deserializeBinaryFromReader(message: CheckInLogInfo, reader: jspb.BinaryReader): CheckInLogInfo;
}

export namespace CheckInLogInfo {
  export type AsObject = {
    ticketId: string,
    userId: string,
    time: number,
    partnershipId: string,
  }
}

export class CheckInReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): CheckInReq;

  getVerificationCode(): string;
  setVerificationCode(value: string): CheckInReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckInReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckInReq): CheckInReq.AsObject;
  static serializeBinaryToWriter(message: CheckInReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckInReq;
  static deserializeBinaryFromReader(message: CheckInReq, reader: jspb.BinaryReader): CheckInReq;
}

export namespace CheckInReq {
  export type AsObject = {
    ticketId: string,
    verificationCode: string,
  }
}

export class MappingUserInfoToTicketAndCheckInReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): MappingUserInfoToTicketAndCheckInReq;

  getUserFullName(): string;
  setUserFullName(value: string): MappingUserInfoToTicketAndCheckInReq;

  getUserPhone(): string;
  setUserPhone(value: string): MappingUserInfoToTicketAndCheckInReq;

  getUserEmail(): string;
  setUserEmail(value: string): MappingUserInfoToTicketAndCheckInReq;

  getUserAddress(): string;
  setUserAddress(value: string): MappingUserInfoToTicketAndCheckInReq;

  getUserImage(): string;
  setUserImage(value: string): MappingUserInfoToTicketAndCheckInReq;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): MappingUserInfoToTicketAndCheckInReq;

  getVerificationCode(): string;
  setVerificationCode(value: string): MappingUserInfoToTicketAndCheckInReq;

  getUserInspectorImage(): string;
  setUserInspectorImage(value: string): MappingUserInfoToTicketAndCheckInReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MappingUserInfoToTicketAndCheckInReq.AsObject;
  static toObject(includeInstance: boolean, msg: MappingUserInfoToTicketAndCheckInReq): MappingUserInfoToTicketAndCheckInReq.AsObject;
  static serializeBinaryToWriter(message: MappingUserInfoToTicketAndCheckInReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MappingUserInfoToTicketAndCheckInReq;
  static deserializeBinaryFromReader(message: MappingUserInfoToTicketAndCheckInReq, reader: jspb.BinaryReader): MappingUserInfoToTicketAndCheckInReq;
}

export namespace MappingUserInfoToTicketAndCheckInReq {
  export type AsObject = {
    ticketId: string,
    userFullName: string,
    userPhone: string,
    userEmail: string,
    userAddress: string,
    userImage: string,
    userPhoneCode: string,
    verificationCode: string,
    userInspectorImage: string,
  }
}

export class ListCheckInLogsReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): ListCheckInLogsReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): ListCheckInLogsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCheckInLogsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListCheckInLogsReq): ListCheckInLogsReq.AsObject;
  static serializeBinaryToWriter(message: ListCheckInLogsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCheckInLogsReq;
  static deserializeBinaryFromReader(message: ListCheckInLogsReq, reader: jspb.BinaryReader): ListCheckInLogsReq;
}

export namespace ListCheckInLogsReq {
  export type AsObject = {
    ticketId: string,
    partnershipId: string,
  }
}

export class GetTicketByCodeReq extends jspb.Message {
  getSecretCode(): string;
  setSecretCode(value: string): GetTicketByCodeReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetTicketByCodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketByCodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketByCodeReq): GetTicketByCodeReq.AsObject;
  static serializeBinaryToWriter(message: GetTicketByCodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketByCodeReq;
  static deserializeBinaryFromReader(message: GetTicketByCodeReq, reader: jspb.BinaryReader): GetTicketByCodeReq;
}

export namespace GetTicketByCodeReq {
  export type AsObject = {
    secretCode: string,
    partnershipId: string,
  }
}

export class GetTicketByPhoneReq extends jspb.Message {
  getUserPhone(): string;
  setUserPhone(value: string): GetTicketByPhoneReq;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): GetTicketByPhoneReq;

  getVerificationCode(): string;
  setVerificationCode(value: string): GetTicketByPhoneReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetTicketByPhoneReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketByPhoneReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketByPhoneReq): GetTicketByPhoneReq.AsObject;
  static serializeBinaryToWriter(message: GetTicketByPhoneReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketByPhoneReq;
  static deserializeBinaryFromReader(message: GetTicketByPhoneReq, reader: jspb.BinaryReader): GetTicketByPhoneReq;
}

export namespace GetTicketByPhoneReq {
  export type AsObject = {
    userPhone: string,
    userPhoneCode: string,
    verificationCode: string,
    partnershipId: string,
  }
}

export class GetTicketByEmailReq extends jspb.Message {
  getUserEmail(): string;
  setUserEmail(value: string): GetTicketByEmailReq;

  getVerificationCode(): string;
  setVerificationCode(value: string): GetTicketByEmailReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetTicketByEmailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketByEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketByEmailReq): GetTicketByEmailReq.AsObject;
  static serializeBinaryToWriter(message: GetTicketByEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketByEmailReq;
  static deserializeBinaryFromReader(message: GetTicketByEmailReq, reader: jspb.BinaryReader): GetTicketByEmailReq;
}

export namespace GetTicketByEmailReq {
  export type AsObject = {
    userEmail: string,
    verificationCode: string,
    partnershipId: string,
  }
}

export class GetCurrentCheckinEventReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentCheckinEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentCheckinEventReq): GetCurrentCheckinEventReq.AsObject;
  static serializeBinaryToWriter(message: GetCurrentCheckinEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentCheckinEventReq;
  static deserializeBinaryFromReader(message: GetCurrentCheckinEventReq, reader: jspb.BinaryReader): GetCurrentCheckinEventReq;
}

export namespace GetCurrentCheckinEventReq {
  export type AsObject = {
  }
}

export class GetUpcomingCheckinEventReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpcomingCheckinEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpcomingCheckinEventReq): GetUpcomingCheckinEventReq.AsObject;
  static serializeBinaryToWriter(message: GetUpcomingCheckinEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpcomingCheckinEventReq;
  static deserializeBinaryFromReader(message: GetUpcomingCheckinEventReq, reader: jspb.BinaryReader): GetUpcomingCheckinEventReq;
}

export namespace GetUpcomingCheckinEventReq {
  export type AsObject = {
  }
}

export class MappingUserInfoToTicketReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): MappingUserInfoToTicketReq;

  getUserFullName(): string;
  setUserFullName(value: string): MappingUserInfoToTicketReq;

  getUserPhone(): string;
  setUserPhone(value: string): MappingUserInfoToTicketReq;

  getUserEmail(): string;
  setUserEmail(value: string): MappingUserInfoToTicketReq;

  getUserAddress(): string;
  setUserAddress(value: string): MappingUserInfoToTicketReq;

  getUserImage(): string;
  setUserImage(value: string): MappingUserInfoToTicketReq;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): MappingUserInfoToTicketReq;

  getVerificationCode(): string;
  setVerificationCode(value: string): MappingUserInfoToTicketReq;

  getUserInspectorImage(): string;
  setUserInspectorImage(value: string): MappingUserInfoToTicketReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MappingUserInfoToTicketReq.AsObject;
  static toObject(includeInstance: boolean, msg: MappingUserInfoToTicketReq): MappingUserInfoToTicketReq.AsObject;
  static serializeBinaryToWriter(message: MappingUserInfoToTicketReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MappingUserInfoToTicketReq;
  static deserializeBinaryFromReader(message: MappingUserInfoToTicketReq, reader: jspb.BinaryReader): MappingUserInfoToTicketReq;
}

export namespace MappingUserInfoToTicketReq {
  export type AsObject = {
    ticketId: string,
    userFullName: string,
    userPhone: string,
    userEmail: string,
    userAddress: string,
    userImage: string,
    userPhoneCode: string,
    verificationCode: string,
    userInspectorImage: string,
  }
}

export class ListCheckInLogsRes extends jspb.Message {
  getLogsList(): Array<CheckInLogInfo>;
  setLogsList(value: Array<CheckInLogInfo>): ListCheckInLogsRes;
  clearLogsList(): ListCheckInLogsRes;
  addLogs(value?: CheckInLogInfo, index?: number): CheckInLogInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCheckInLogsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListCheckInLogsRes): ListCheckInLogsRes.AsObject;
  static serializeBinaryToWriter(message: ListCheckInLogsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCheckInLogsRes;
  static deserializeBinaryFromReader(message: ListCheckInLogsRes, reader: jspb.BinaryReader): ListCheckInLogsRes;
}

export namespace ListCheckInLogsRes {
  export type AsObject = {
    logsList: Array<CheckInLogInfo.AsObject>,
  }
}

export class GetTicketByPhoneRes extends jspb.Message {
  getInfo(): InspectorTicketInfo | undefined;
  setInfo(value?: InspectorTicketInfo): GetTicketByPhoneRes;
  hasInfo(): boolean;
  clearInfo(): GetTicketByPhoneRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketByPhoneRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketByPhoneRes): GetTicketByPhoneRes.AsObject;
  static serializeBinaryToWriter(message: GetTicketByPhoneRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketByPhoneRes;
  static deserializeBinaryFromReader(message: GetTicketByPhoneRes, reader: jspb.BinaryReader): GetTicketByPhoneRes;
}

export namespace GetTicketByPhoneRes {
  export type AsObject = {
    info?: InspectorTicketInfo.AsObject,
  }
}

export class GetTicketByEmailRes extends jspb.Message {
  getInfo(): InspectorTicketInfo | undefined;
  setInfo(value?: InspectorTicketInfo): GetTicketByEmailRes;
  hasInfo(): boolean;
  clearInfo(): GetTicketByEmailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketByEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketByEmailRes): GetTicketByEmailRes.AsObject;
  static serializeBinaryToWriter(message: GetTicketByEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketByEmailRes;
  static deserializeBinaryFromReader(message: GetTicketByEmailRes, reader: jspb.BinaryReader): GetTicketByEmailRes;
}

export namespace GetTicketByEmailRes {
  export type AsObject = {
    info?: InspectorTicketInfo.AsObject,
  }
}

export class GetTicketByCodeRes extends jspb.Message {
  getInfo(): InspectorTicketInfo | undefined;
  setInfo(value?: InspectorTicketInfo): GetTicketByCodeRes;
  hasInfo(): boolean;
  clearInfo(): GetTicketByCodeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketByCodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketByCodeRes): GetTicketByCodeRes.AsObject;
  static serializeBinaryToWriter(message: GetTicketByCodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketByCodeRes;
  static deserializeBinaryFromReader(message: GetTicketByCodeRes, reader: jspb.BinaryReader): GetTicketByCodeRes;
}

export namespace GetTicketByCodeRes {
  export type AsObject = {
    info?: InspectorTicketInfo.AsObject,
  }
}

export class GetCurrentCheckinEventRes extends jspb.Message {
  getEventInfo(): InspectorTicketCheckinEventInfo | undefined;
  setEventInfo(value?: InspectorTicketCheckinEventInfo): GetCurrentCheckinEventRes;
  hasEventInfo(): boolean;
  clearEventInfo(): GetCurrentCheckinEventRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentCheckinEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentCheckinEventRes): GetCurrentCheckinEventRes.AsObject;
  static serializeBinaryToWriter(message: GetCurrentCheckinEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentCheckinEventRes;
  static deserializeBinaryFromReader(message: GetCurrentCheckinEventRes, reader: jspb.BinaryReader): GetCurrentCheckinEventRes;
}

export namespace GetCurrentCheckinEventRes {
  export type AsObject = {
    eventInfo?: InspectorTicketCheckinEventInfo.AsObject,
  }
}

export class GetUpcomingCheckinEventRes extends jspb.Message {
  getEventInfosList(): Array<InspectorTicketCheckinEventInfo>;
  setEventInfosList(value: Array<InspectorTicketCheckinEventInfo>): GetUpcomingCheckinEventRes;
  clearEventInfosList(): GetUpcomingCheckinEventRes;
  addEventInfos(value?: InspectorTicketCheckinEventInfo, index?: number): InspectorTicketCheckinEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpcomingCheckinEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpcomingCheckinEventRes): GetUpcomingCheckinEventRes.AsObject;
  static serializeBinaryToWriter(message: GetUpcomingCheckinEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpcomingCheckinEventRes;
  static deserializeBinaryFromReader(message: GetUpcomingCheckinEventRes, reader: jspb.BinaryReader): GetUpcomingCheckinEventRes;
}

export namespace GetUpcomingCheckinEventRes {
  export type AsObject = {
    eventInfosList: Array<InspectorTicketCheckinEventInfo.AsObject>,
  }
}

export enum InspectorTicketStatus { 
  INSPECTOR_TICKET_STATUS_INVALID = 0,
  INSPECTOR_TICKET_STATUS_NOT_USED = 1,
  INSPECTOR_TICKET_STATUS_CHECKED_IN = 2,
}
export enum InspectorTicketType { 
  INSPECTOR_TICKET_TYPE_BUY = 0,
  INSPECTOR_TICKET_TYPE_RELEASE = 1,
  INSPECTOR_TICKET_TYPE_TRANSFER = 2,
}
