import * as jspb from 'google-protobuf'



export class TransferredTicketInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TransferredTicketInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): TransferredTicketInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): TransferredTicketInfo;

  getOrderId(): string;
  setOrderId(value: string): TransferredTicketInfo;

  getEventInfo(): TransferredTicketEventInfo | undefined;
  setEventInfo(value?: TransferredTicketEventInfo): TransferredTicketInfo;
  hasEventInfo(): boolean;
  clearEventInfo(): TransferredTicketInfo;

  getSeatInfo(): TransferredTicketSeatInfo | undefined;
  setSeatInfo(value?: TransferredTicketSeatInfo): TransferredTicketInfo;
  hasSeatInfo(): boolean;
  clearSeatInfo(): TransferredTicketInfo;

  getUserInfo(): TransferredTicketUserInfo | undefined;
  setUserInfo(value?: TransferredTicketUserInfo): TransferredTicketInfo;
  hasUserInfo(): boolean;
  clearUserInfo(): TransferredTicketInfo;

  getIsEnabledVerificationCode(): boolean;
  setIsEnabledVerificationCode(value: boolean): TransferredTicketInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): TransferredTicketInfo;

  getReceiverInfo(): TransferredTicketUserInfo | undefined;
  setReceiverInfo(value?: TransferredTicketUserInfo): TransferredTicketInfo;
  hasReceiverInfo(): boolean;
  clearReceiverInfo(): TransferredTicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferredTicketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransferredTicketInfo): TransferredTicketInfo.AsObject;
  static serializeBinaryToWriter(message: TransferredTicketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferredTicketInfo;
  static deserializeBinaryFromReader(message: TransferredTicketInfo, reader: jspb.BinaryReader): TransferredTicketInfo;
}

export namespace TransferredTicketInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    orderId: string,
    eventInfo?: TransferredTicketEventInfo.AsObject,
    seatInfo?: TransferredTicketSeatInfo.AsObject,
    userInfo?: TransferredTicketUserInfo.AsObject,
    isEnabledVerificationCode: boolean,
    partnershipId: string,
    receiverInfo?: TransferredTicketUserInfo.AsObject,
  }
}

export class TransferredTicketPriceSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TransferredTicketPriceSimpleInfo;

  getName(): string;
  setName(value: string): TransferredTicketPriceSimpleInfo;

  getIcon(): string;
  setIcon(value: string): TransferredTicketPriceSimpleInfo;

  getPrice(): number;
  setPrice(value: number): TransferredTicketPriceSimpleInfo;

  getCurrency(): TransferredTicketCurrencyInfo | undefined;
  setCurrency(value?: TransferredTicketCurrencyInfo): TransferredTicketPriceSimpleInfo;
  hasCurrency(): boolean;
  clearCurrency(): TransferredTicketPriceSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferredTicketPriceSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransferredTicketPriceSimpleInfo): TransferredTicketPriceSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: TransferredTicketPriceSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferredTicketPriceSimpleInfo;
  static deserializeBinaryFromReader(message: TransferredTicketPriceSimpleInfo, reader: jspb.BinaryReader): TransferredTicketPriceSimpleInfo;
}

export namespace TransferredTicketPriceSimpleInfo {
  export type AsObject = {
    id: string,
    name: string,
    icon: string,
    price: number,
    currency?: TransferredTicketCurrencyInfo.AsObject,
  }
}

export class TransferredTicketCurrencyInfo extends jspb.Message {
  getName(): string;
  setName(value: string): TransferredTicketCurrencyInfo;

  getCode(): string;
  setCode(value: string): TransferredTicketCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): TransferredTicketCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferredTicketCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransferredTicketCurrencyInfo): TransferredTicketCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: TransferredTicketCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferredTicketCurrencyInfo;
  static deserializeBinaryFromReader(message: TransferredTicketCurrencyInfo, reader: jspb.BinaryReader): TransferredTicketCurrencyInfo;
}

export namespace TransferredTicketCurrencyInfo {
  export type AsObject = {
    name: string,
    code: string,
    icon: string,
  }
}

export class TransferredTicketEventLocation extends jspb.Message {
  getId(): string;
  setId(value: string): TransferredTicketEventLocation;

  getAddress(): string;
  setAddress(value: string): TransferredTicketEventLocation;

  getWard(): string;
  setWard(value: string): TransferredTicketEventLocation;

  getDistrict(): string;
  setDistrict(value: string): TransferredTicketEventLocation;

  getCity(): string;
  setCity(value: string): TransferredTicketEventLocation;

  getCountry(): string;
  setCountry(value: string): TransferredTicketEventLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferredTicketEventLocation.AsObject;
  static toObject(includeInstance: boolean, msg: TransferredTicketEventLocation): TransferredTicketEventLocation.AsObject;
  static serializeBinaryToWriter(message: TransferredTicketEventLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferredTicketEventLocation;
  static deserializeBinaryFromReader(message: TransferredTicketEventLocation, reader: jspb.BinaryReader): TransferredTicketEventLocation;
}

export namespace TransferredTicketEventLocation {
  export type AsObject = {
    id: string,
    address: string,
    ward: string,
    district: string,
    city: string,
    country: string,
  }
}

export class TransferredTicketEventInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): TransferredTicketEventInfo;

  getName(): string;
  setName(value: string): TransferredTicketEventInfo;

  getStartTime(): number;
  setStartTime(value: number): TransferredTicketEventInfo;

  getEndTime(): number;
  setEndTime(value: number): TransferredTicketEventInfo;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): TransferredTicketEventInfo;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): TransferredTicketEventInfo;

  getLocation(): TransferredTicketEventLocation | undefined;
  setLocation(value?: TransferredTicketEventLocation): TransferredTicketEventInfo;
  hasLocation(): boolean;
  clearLocation(): TransferredTicketEventInfo;

  getTimezone(): string;
  setTimezone(value: string): TransferredTicketEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferredTicketEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransferredTicketEventInfo): TransferredTicketEventInfo.AsObject;
  static serializeBinaryToWriter(message: TransferredTicketEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferredTicketEventInfo;
  static deserializeBinaryFromReader(message: TransferredTicketEventInfo, reader: jspb.BinaryReader): TransferredTicketEventInfo;
}

export namespace TransferredTicketEventInfo {
  export type AsObject = {
    eventId: string,
    name: string,
    startTime: number,
    endTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    location?: TransferredTicketEventLocation.AsObject,
    timezone: string,
  }
}

export class TransferredTicketUserInfo extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): TransferredTicketUserInfo;

  getUserFullName(): string;
  setUserFullName(value: string): TransferredTicketUserInfo;

  getUserPhone(): string;
  setUserPhone(value: string): TransferredTicketUserInfo;

  getUserEmail(): string;
  setUserEmail(value: string): TransferredTicketUserInfo;

  getUserAddress(): string;
  setUserAddress(value: string): TransferredTicketUserInfo;

  getUserImage(): string;
  setUserImage(value: string): TransferredTicketUserInfo;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): TransferredTicketUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferredTicketUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransferredTicketUserInfo): TransferredTicketUserInfo.AsObject;
  static serializeBinaryToWriter(message: TransferredTicketUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferredTicketUserInfo;
  static deserializeBinaryFromReader(message: TransferredTicketUserInfo, reader: jspb.BinaryReader): TransferredTicketUserInfo;
}

export namespace TransferredTicketUserInfo {
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

export class TransferredTicketSeatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TransferredTicketSeatInfo;

  getName(): string;
  setName(value: string): TransferredTicketSeatInfo;

  getPrice(): TransferredTicketPriceSimpleInfo | undefined;
  setPrice(value?: TransferredTicketPriceSimpleInfo): TransferredTicketSeatInfo;
  hasPrice(): boolean;
  clearPrice(): TransferredTicketSeatInfo;

  getPriceBlockId(): string;
  setPriceBlockId(value: string): TransferredTicketSeatInfo;

  getPriceBlockName(): string;
  setPriceBlockName(value: string): TransferredTicketSeatInfo;

  getGeneralSeatMapId(): string;
  setGeneralSeatMapId(value: string): TransferredTicketSeatInfo;

  getGeneralSeatMapName(): string;
  setGeneralSeatMapName(value: string): TransferredTicketSeatInfo;

  getSeatTypeName(): string;
  setSeatTypeName(value: string): TransferredTicketSeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferredTicketSeatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransferredTicketSeatInfo): TransferredTicketSeatInfo.AsObject;
  static serializeBinaryToWriter(message: TransferredTicketSeatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferredTicketSeatInfo;
  static deserializeBinaryFromReader(message: TransferredTicketSeatInfo, reader: jspb.BinaryReader): TransferredTicketSeatInfo;
}

export namespace TransferredTicketSeatInfo {
  export type AsObject = {
    id: string,
    name: string,
    price?: TransferredTicketPriceSimpleInfo.AsObject,
    priceBlockId: string,
    priceBlockName: string,
    generalSeatMapId: string,
    generalSeatMapName: string,
    seatTypeName: string,
  }
}

export class GetMyTransferredTicketByOrderIdReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): GetMyTransferredTicketByOrderIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTransferredTicketByOrderIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTransferredTicketByOrderIdReq): GetMyTransferredTicketByOrderIdReq.AsObject;
  static serializeBinaryToWriter(message: GetMyTransferredTicketByOrderIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTransferredTicketByOrderIdReq;
  static deserializeBinaryFromReader(message: GetMyTransferredTicketByOrderIdReq, reader: jspb.BinaryReader): GetMyTransferredTicketByOrderIdReq;
}

export namespace GetMyTransferredTicketByOrderIdReq {
  export type AsObject = {
    orderId: string,
  }
}

export class GetMyTransferredTicketByOrderIdRes extends jspb.Message {
  getInfoList(): Array<TransferredTicketInfo>;
  setInfoList(value: Array<TransferredTicketInfo>): GetMyTransferredTicketByOrderIdRes;
  clearInfoList(): GetMyTransferredTicketByOrderIdRes;
  addInfo(value?: TransferredTicketInfo, index?: number): TransferredTicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyTransferredTicketByOrderIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyTransferredTicketByOrderIdRes): GetMyTransferredTicketByOrderIdRes.AsObject;
  static serializeBinaryToWriter(message: GetMyTransferredTicketByOrderIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyTransferredTicketByOrderIdRes;
  static deserializeBinaryFromReader(message: GetMyTransferredTicketByOrderIdRes, reader: jspb.BinaryReader): GetMyTransferredTicketByOrderIdRes;
}

export namespace GetMyTransferredTicketByOrderIdRes {
  export type AsObject = {
    infoList: Array<TransferredTicketInfo.AsObject>,
  }
}

