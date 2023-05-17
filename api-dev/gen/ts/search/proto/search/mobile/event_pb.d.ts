import * as jspb from 'google-protobuf'

import * as proto_search_mobile_base_pb from '../../../proto/search/mobile/base_pb';


export class EventDetailInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): EventDetailInfo;

  getName(): string;
  setName(value: string): EventDetailInfo;

  getStatus(): EventDetailPageDisplayStatus;
  setStatus(value: EventDetailPageDisplayStatus): EventDetailInfo;

  getMediasList(): Array<proto_search_mobile_base_pb.Media>;
  setMediasList(value: Array<proto_search_mobile_base_pb.Media>): EventDetailInfo;
  clearMediasList(): EventDetailInfo;
  addMedias(value?: proto_search_mobile_base_pb.Media, index?: number): proto_search_mobile_base_pb.Media;

  getProgramsList(): Array<proto_search_mobile_base_pb.Media>;
  setProgramsList(value: Array<proto_search_mobile_base_pb.Media>): EventDetailInfo;
  clearProgramsList(): EventDetailInfo;
  addPrograms(value?: proto_search_mobile_base_pb.Media, index?: number): proto_search_mobile_base_pb.Media;

  getArtistsList(): Array<EventArtistInfo>;
  setArtistsList(value: Array<EventArtistInfo>): EventDetailInfo;
  clearArtistsList(): EventDetailInfo;
  addArtists(value?: EventArtistInfo, index?: number): EventArtistInfo;

  getDescription(): string;
  setDescription(value: string): EventDetailInfo;

  getSchedulesList(): Array<EventScheduleInfo>;
  setSchedulesList(value: Array<EventScheduleInfo>): EventDetailInfo;
  clearSchedulesList(): EventDetailInfo;
  addSchedules(value?: EventScheduleInfo, index?: number): EventScheduleInfo;

  getDuration(): number;
  setDuration(value: number): EventDetailInfo;

  getNumberOfTickets(): number;
  setNumberOfTickets(value: number): EventDetailInfo;

  getMinTicketPrice(): number;
  setMinTicketPrice(value: number): EventDetailInfo;

  getMaxTicketPrice(): number;
  setMaxTicketPrice(value: number): EventDetailInfo;

  getCurrency(): EventCurrencyInfo | undefined;
  setCurrency(value?: EventCurrencyInfo): EventDetailInfo;
  hasCurrency(): boolean;
  clearCurrency(): EventDetailInfo;

  getHashTagsList(): Array<string>;
  setHashTagsList(value: Array<string>): EventDetailInfo;
  clearHashTagsList(): EventDetailInfo;
  addHashTags(value: string, index?: number): EventDetailInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): EventDetailInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EventDetailInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): EventDetailInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): EventDetailInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDetailInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventDetailInfo): EventDetailInfo.AsObject;
  static serializeBinaryToWriter(message: EventDetailInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDetailInfo;
  static deserializeBinaryFromReader(message: EventDetailInfo, reader: jspb.BinaryReader): EventDetailInfo;
}

export namespace EventDetailInfo {
  export type AsObject = {
    eventId: string,
    name: string,
    status: EventDetailPageDisplayStatus,
    mediasList: Array<proto_search_mobile_base_pb.Media.AsObject>,
    programsList: Array<proto_search_mobile_base_pb.Media.AsObject>,
    artistsList: Array<EventArtistInfo.AsObject>,
    description: string,
    schedulesList: Array<EventScheduleInfo.AsObject>,
    duration: number,
    numberOfTickets: number,
    minTicketPrice: number,
    maxTicketPrice: number,
    currency?: EventCurrencyInfo.AsObject,
    hashTagsList: Array<string>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class EventCurrencyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventCurrencyInfo;

  getName(): string;
  setName(value: string): EventCurrencyInfo;

  getCode(): string;
  setCode(value: string): EventCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): EventCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventCurrencyInfo): EventCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: EventCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCurrencyInfo;
  static deserializeBinaryFromReader(message: EventCurrencyInfo, reader: jspb.BinaryReader): EventCurrencyInfo;
}

export namespace EventCurrencyInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class EventSimpleInfo extends jspb.Message {
  getEsId(): string;
  setEsId(value: string): EventSimpleInfo;

  getEventId(): string;
  setEventId(value: string): EventSimpleInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): EventSimpleInfo;

  getName(): string;
  setName(value: string): EventSimpleInfo;

  getMediasList(): Array<proto_search_mobile_base_pb.Media>;
  setMediasList(value: Array<proto_search_mobile_base_pb.Media>): EventSimpleInfo;
  clearMediasList(): EventSimpleInfo;
  addMedias(value?: proto_search_mobile_base_pb.Media, index?: number): proto_search_mobile_base_pb.Media;

  getHightlightDateStr(): string;
  setHightlightDateStr(value: string): EventSimpleInfo;

  getHightlightAddress(): string;
  setHightlightAddress(value: string): EventSimpleInfo;

  getCurrency(): EventCurrencyInfo | undefined;
  setCurrency(value?: EventCurrencyInfo): EventSimpleInfo;
  hasCurrency(): boolean;
  clearCurrency(): EventSimpleInfo;

  getPrefixSecretCode(): string;
  setPrefixSecretCode(value: string): EventSimpleInfo;

  getNumberOfTickets(): number;
  setNumberOfTickets(value: number): EventSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventSimpleInfo): EventSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: EventSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSimpleInfo;
  static deserializeBinaryFromReader(message: EventSimpleInfo, reader: jspb.BinaryReader): EventSimpleInfo;
}

export namespace EventSimpleInfo {
  export type AsObject = {
    esId: string,
    eventId: string,
    partnershipId: string,
    name: string,
    mediasList: Array<proto_search_mobile_base_pb.Media.AsObject>,
    hightlightDateStr: string,
    hightlightAddress: string,
    currency?: EventCurrencyInfo.AsObject,
    prefixSecretCode: string,
    numberOfTickets: number,
  }
}

export class EventListInfo extends jspb.Message {
  getEsId(): string;
  setEsId(value: string): EventListInfo;

  getEventId(): string;
  setEventId(value: string): EventListInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): EventListInfo;

  getName(): string;
  setName(value: string): EventListInfo;

  getMediasList(): Array<proto_search_mobile_base_pb.Media>;
  setMediasList(value: Array<proto_search_mobile_base_pb.Media>): EventListInfo;
  clearMediasList(): EventListInfo;
  addMedias(value?: proto_search_mobile_base_pb.Media, index?: number): proto_search_mobile_base_pb.Media;

  getMinDateStart(): number;
  setMinDateStart(value: number): EventListInfo;

  getMaxDateEnd(): number;
  setMaxDateEnd(value: number): EventListInfo;

  getMinBookingDateStart(): number;
  setMinBookingDateStart(value: number): EventListInfo;

  getMaxBookingDateEnd(): number;
  setMaxBookingDateEnd(value: number): EventListInfo;

  getIsHot(): boolean;
  setIsHot(value: boolean): EventListInfo;

  getHightlightDateStr(): string;
  setHightlightDateStr(value: string): EventListInfo;

  getHightlightAddress(): string;
  setHightlightAddress(value: string): EventListInfo;

  getIsSoldOut(): boolean;
  setIsSoldOut(value: boolean): EventListInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): EventListInfo;

  getMinTicketPrice(): number;
  setMinTicketPrice(value: number): EventListInfo;

  getCurrency(): EventCurrencyInfo | undefined;
  setCurrency(value?: EventCurrencyInfo): EventListInfo;
  hasCurrency(): boolean;
  clearCurrency(): EventListInfo;

  getIsBookingAvailable(): boolean;
  setIsBookingAvailable(value: boolean): EventListInfo;

  getSchedulesList(): Array<EventScheduleInfo>;
  setSchedulesList(value: Array<EventScheduleInfo>): EventListInfo;
  clearSchedulesList(): EventListInfo;
  addSchedules(value?: EventScheduleInfo, index?: number): EventScheduleInfo;

  getHashTagsList(): Array<string>;
  setHashTagsList(value: Array<string>): EventListInfo;
  clearHashTagsList(): EventListInfo;
  addHashTags(value: string, index?: number): EventListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventListInfo): EventListInfo.AsObject;
  static serializeBinaryToWriter(message: EventListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventListInfo;
  static deserializeBinaryFromReader(message: EventListInfo, reader: jspb.BinaryReader): EventListInfo;
}

export namespace EventListInfo {
  export type AsObject = {
    esId: string,
    eventId: string,
    partnershipId: string,
    name: string,
    mediasList: Array<proto_search_mobile_base_pb.Media.AsObject>,
    minDateStart: number,
    maxDateEnd: number,
    minBookingDateStart: number,
    maxBookingDateEnd: number,
    isHot: boolean,
    hightlightDateStr: string,
    hightlightAddress: string,
    isSoldOut: boolean,
    isPublic: boolean,
    minTicketPrice: number,
    currency?: EventCurrencyInfo.AsObject,
    isBookingAvailable: boolean,
    schedulesList: Array<EventScheduleInfo.AsObject>,
    hashTagsList: Array<string>,
  }
}

export class EventArtistInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventArtistInfo;

  getName(): string;
  setName(value: string): EventArtistInfo;

  getAvatar(): string;
  setAvatar(value: string): EventArtistInfo;

  getTypeList(): Array<EventArtistTypeInfo>;
  setTypeList(value: Array<EventArtistTypeInfo>): EventArtistInfo;
  clearTypeList(): EventArtistInfo;
  addType(value?: EventArtistTypeInfo, index?: number): EventArtistTypeInfo;

  getIntro(): string;
  setIntro(value: string): EventArtistInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventArtistInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventArtistInfo): EventArtistInfo.AsObject;
  static serializeBinaryToWriter(message: EventArtistInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventArtistInfo;
  static deserializeBinaryFromReader(message: EventArtistInfo, reader: jspb.BinaryReader): EventArtistInfo;
}

export namespace EventArtistInfo {
  export type AsObject = {
    id: string,
    name: string,
    avatar: string,
    typeList: Array<EventArtistTypeInfo.AsObject>,
    intro: string,
  }
}

export class EventArtistTypeInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventArtistTypeInfo;

  getName(): string;
  setName(value: string): EventArtistTypeInfo;

  getIcon(): string;
  setIcon(value: string): EventArtistTypeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventArtistTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventArtistTypeInfo): EventArtistTypeInfo.AsObject;
  static serializeBinaryToWriter(message: EventArtistTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventArtistTypeInfo;
  static deserializeBinaryFromReader(message: EventArtistTypeInfo, reader: jspb.BinaryReader): EventArtistTypeInfo;
}

export namespace EventArtistTypeInfo {
  export type AsObject = {
    id: string,
    name: string,
    icon: string,
  }
}

export class EventScheduleInfo extends jspb.Message {
  getLocation(): EventLocationInfo | undefined;
  setLocation(value?: EventLocationInfo): EventScheduleInfo;
  hasLocation(): boolean;
  clearLocation(): EventScheduleInfo;

  getTimesList(): Array<EventTime>;
  setTimesList(value: Array<EventTime>): EventScheduleInfo;
  clearTimesList(): EventScheduleInfo;
  addTimes(value?: EventTime, index?: number): EventTime;

  getSponsorsList(): Array<EventSponsors>;
  setSponsorsList(value: Array<EventSponsors>): EventScheduleInfo;
  clearSponsorsList(): EventScheduleInfo;
  addSponsors(value?: EventSponsors, index?: number): EventSponsors;

  getVouchersList(): Array<EventVoucherInfo>;
  setVouchersList(value: Array<EventVoucherInfo>): EventScheduleInfo;
  clearVouchersList(): EventScheduleInfo;
  addVouchers(value?: EventVoucherInfo, index?: number): EventVoucherInfo;

  getIsSoldOut(): boolean;
  setIsSoldOut(value: boolean): EventScheduleInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): EventScheduleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventScheduleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventScheduleInfo): EventScheduleInfo.AsObject;
  static serializeBinaryToWriter(message: EventScheduleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventScheduleInfo;
  static deserializeBinaryFromReader(message: EventScheduleInfo, reader: jspb.BinaryReader): EventScheduleInfo;
}

export namespace EventScheduleInfo {
  export type AsObject = {
    location?: EventLocationInfo.AsObject,
    timesList: Array<EventTime.AsObject>,
    sponsorsList: Array<EventSponsors.AsObject>,
    vouchersList: Array<EventVoucherInfo.AsObject>,
    isSoldOut: boolean,
    isPublic: boolean,
  }
}

export class EventSeatMaps extends jspb.Message {
  getId(): string;
  setId(value: string): EventSeatMaps;

  getName(): string;
  setName(value: string): EventSeatMaps;

  getMapPicture(): string;
  setMapPicture(value: string): EventSeatMaps;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSeatMaps.AsObject;
  static toObject(includeInstance: boolean, msg: EventSeatMaps): EventSeatMaps.AsObject;
  static serializeBinaryToWriter(message: EventSeatMaps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSeatMaps;
  static deserializeBinaryFromReader(message: EventSeatMaps, reader: jspb.BinaryReader): EventSeatMaps;
}

export namespace EventSeatMaps {
  export type AsObject = {
    id: string,
    name: string,
    mapPicture: string,
  }
}

export class EventTime extends jspb.Message {
  getGeneralSeatMapsList(): Array<EventSeatMaps>;
  setGeneralSeatMapsList(value: Array<EventSeatMaps>): EventTime;
  clearGeneralSeatMapsList(): EventTime;
  addGeneralSeatMaps(value?: EventSeatMaps, index?: number): EventSeatMaps;

  getStartTime(): number;
  setStartTime(value: number): EventTime;

  getEndTime(): number;
  setEndTime(value: number): EventTime;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): EventTime;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): EventTime;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): EventTime;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): EventTime;

  getTimezone(): string;
  setTimezone(value: string): EventTime;

  getIsSoldout(): boolean;
  setIsSoldout(value: boolean): EventTime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTime.AsObject;
  static toObject(includeInstance: boolean, msg: EventTime): EventTime.AsObject;
  static serializeBinaryToWriter(message: EventTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTime;
  static deserializeBinaryFromReader(message: EventTime, reader: jspb.BinaryReader): EventTime;
}

export namespace EventTime {
  export type AsObject = {
    generalSeatMapsList: Array<EventSeatMaps.AsObject>,
    startTime: number,
    endTime: number,
    bookingStartTime: number,
    bookingEndTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    timezone: string,
    isSoldout: boolean,
  }
}

export class EventSponsors extends jspb.Message {
  getId(): string;
  setId(value: string): EventSponsors;

  getName(): string;
  setName(value: string): EventSponsors;

  getAvatar(): string;
  setAvatar(value: string): EventSponsors;

  getLevel(): EventSponsorLevelInfo | undefined;
  setLevel(value?: EventSponsorLevelInfo): EventSponsors;
  hasLevel(): boolean;
  clearLevel(): EventSponsors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSponsors.AsObject;
  static toObject(includeInstance: boolean, msg: EventSponsors): EventSponsors.AsObject;
  static serializeBinaryToWriter(message: EventSponsors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSponsors;
  static deserializeBinaryFromReader(message: EventSponsors, reader: jspb.BinaryReader): EventSponsors;
}

export namespace EventSponsors {
  export type AsObject = {
    id: string,
    name: string,
    avatar: string,
    level?: EventSponsorLevelInfo.AsObject,
  }
}

export class EventSponsorLevelInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventSponsorLevelInfo;

  getName(): string;
  setName(value: string): EventSponsorLevelInfo;

  getIcon(): string;
  setIcon(value: string): EventSponsorLevelInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSponsorLevelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventSponsorLevelInfo): EventSponsorLevelInfo.AsObject;
  static serializeBinaryToWriter(message: EventSponsorLevelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSponsorLevelInfo;
  static deserializeBinaryFromReader(message: EventSponsorLevelInfo, reader: jspb.BinaryReader): EventSponsorLevelInfo;
}

export namespace EventSponsorLevelInfo {
  export type AsObject = {
    id: string,
    name: string,
    icon: string,
  }
}

export class EventVoucherInfo extends jspb.Message {
  getName(): string;
  setName(value: string): EventVoucherInfo;

  getThumbnail(): string;
  setThumbnail(value: string): EventVoucherInfo;

  getSponsorId(): string;
  setSponsorId(value: string): EventVoucherInfo;

  getExpiredAt(): number;
  setExpiredAt(value: number): EventVoucherInfo;

  getEventId(): string;
  setEventId(value: string): EventVoucherInfo;

  getDetail(): string;
  setDetail(value: string): EventVoucherInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventVoucherInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventVoucherInfo): EventVoucherInfo.AsObject;
  static serializeBinaryToWriter(message: EventVoucherInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventVoucherInfo;
  static deserializeBinaryFromReader(message: EventVoucherInfo, reader: jspb.BinaryReader): EventVoucherInfo;
}

export namespace EventVoucherInfo {
  export type AsObject = {
    name: string,
    thumbnail: string,
    sponsorId: string,
    expiredAt: number,
    eventId: string,
    detail: string,
  }
}

export class EventLocationInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventLocationInfo;

  getAddress(): string;
  setAddress(value: string): EventLocationInfo;

  getWard(): string;
  setWard(value: string): EventLocationInfo;

  getDistrict(): string;
  setDistrict(value: string): EventLocationInfo;

  getCity(): string;
  setCity(value: string): EventLocationInfo;

  getCountry(): string;
  setCountry(value: string): EventLocationInfo;

  getName(): string;
  setName(value: string): EventLocationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventLocationInfo): EventLocationInfo.AsObject;
  static serializeBinaryToWriter(message: EventLocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLocationInfo;
  static deserializeBinaryFromReader(message: EventLocationInfo, reader: jspb.BinaryReader): EventLocationInfo;
}

export namespace EventLocationInfo {
  export type AsObject = {
    id: string,
    address: string,
    ward: string,
    district: string,
    city: string,
    country: string,
    name: string,
  }
}

export class GetEventDetailReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventDetailReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetEventDetailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventDetailReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventDetailReq): GetEventDetailReq.AsObject;
  static serializeBinaryToWriter(message: GetEventDetailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventDetailReq;
  static deserializeBinaryFromReader(message: GetEventDetailReq, reader: jspb.BinaryReader): GetEventDetailReq;
}

export namespace GetEventDetailReq {
  export type AsObject = {
    id: string,
    partnershipId: string,
  }
}

export class SearchTopEventsReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): SearchTopEventsReq;

  getPagination(): proto_search_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_search_mobile_base_pb.PaginationReq): SearchTopEventsReq;
  hasPagination(): boolean;
  clearPagination(): SearchTopEventsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTopEventsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTopEventsReq): SearchTopEventsReq.AsObject;
  static serializeBinaryToWriter(message: SearchTopEventsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTopEventsReq;
  static deserializeBinaryFromReader(message: SearchTopEventsReq, reader: jspb.BinaryReader): SearchTopEventsReq;
}

export namespace SearchTopEventsReq {
  export type AsObject = {
    partnershipId: string,
    pagination?: proto_search_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class SearchListEventsReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): SearchListEventsReq;

  getStatus(): SearchEventStatus;
  setStatus(value: SearchEventStatus): SearchListEventsReq;

  getPagination(): proto_search_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_search_mobile_base_pb.PaginationReq): SearchListEventsReq;
  hasPagination(): boolean;
  clearPagination(): SearchListEventsReq;

  getOrderByList(): Array<proto_search_mobile_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_search_mobile_base_pb.OrderByItem>): SearchListEventsReq;
  clearOrderByList(): SearchListEventsReq;
  addOrderBy(value?: proto_search_mobile_base_pb.OrderByItem, index?: number): proto_search_mobile_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchListEventsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchListEventsReq): SearchListEventsReq.AsObject;
  static serializeBinaryToWriter(message: SearchListEventsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchListEventsReq;
  static deserializeBinaryFromReader(message: SearchListEventsReq, reader: jspb.BinaryReader): SearchListEventsReq;
}

export namespace SearchListEventsReq {
  export type AsObject = {
    partnershipId: string,
    status: SearchEventStatus,
    pagination?: proto_search_mobile_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_search_mobile_base_pb.OrderByItem.AsObject>,
  }
}

export class GetEventDetailRes extends jspb.Message {
  getInfo(): EventDetailInfo | undefined;
  setInfo(value?: EventDetailInfo): GetEventDetailRes;
  hasInfo(): boolean;
  clearInfo(): GetEventDetailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventDetailRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventDetailRes): GetEventDetailRes.AsObject;
  static serializeBinaryToWriter(message: GetEventDetailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventDetailRes;
  static deserializeBinaryFromReader(message: GetEventDetailRes, reader: jspb.BinaryReader): GetEventDetailRes;
}

export namespace GetEventDetailRes {
  export type AsObject = {
    info?: EventDetailInfo.AsObject,
  }
}

export class SearchTopEventsRes extends jspb.Message {
  getInfoList(): Array<EventListInfo>;
  setInfoList(value: Array<EventListInfo>): SearchTopEventsRes;
  clearInfoList(): SearchTopEventsRes;
  addInfo(value?: EventListInfo, index?: number): EventListInfo;

  getPagination(): proto_search_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_search_mobile_base_pb.PaginationRes): SearchTopEventsRes;
  hasPagination(): boolean;
  clearPagination(): SearchTopEventsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTopEventsRes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTopEventsRes): SearchTopEventsRes.AsObject;
  static serializeBinaryToWriter(message: SearchTopEventsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTopEventsRes;
  static deserializeBinaryFromReader(message: SearchTopEventsRes, reader: jspb.BinaryReader): SearchTopEventsRes;
}

export namespace SearchTopEventsRes {
  export type AsObject = {
    infoList: Array<EventListInfo.AsObject>,
    pagination?: proto_search_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class SearchListEventsRes extends jspb.Message {
  getInfoList(): Array<EventListInfo>;
  setInfoList(value: Array<EventListInfo>): SearchListEventsRes;
  clearInfoList(): SearchListEventsRes;
  addInfo(value?: EventListInfo, index?: number): EventListInfo;

  getPagination(): proto_search_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_search_mobile_base_pb.PaginationRes): SearchListEventsRes;
  hasPagination(): boolean;
  clearPagination(): SearchListEventsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchListEventsRes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchListEventsRes): SearchListEventsRes.AsObject;
  static serializeBinaryToWriter(message: SearchListEventsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchListEventsRes;
  static deserializeBinaryFromReader(message: SearchListEventsRes, reader: jspb.BinaryReader): SearchListEventsRes;
}

export namespace SearchListEventsRes {
  export type AsObject = {
    infoList: Array<EventListInfo.AsObject>,
    pagination?: proto_search_mobile_base_pb.PaginationRes.AsObject,
  }
}

export enum SearchEventStatus {
  EVENT_FILTER_STATUS_INVALID = 0,
  EVENT_FILTER_STATUS_HOT = 1,
  EVENT_FILTER_STATUS_PUBLISHED = 2,
  EVENT_FILTER_STATUS_UNPUBLISHED = 3,
  EVENT_FILTER_STATUS_GOING_ON = 4,
  EVENT_FILTER_STATUS_UPCOMING = 5,
  EVENT_FILTER_STATUS_SOLD_OUT = 6,
  EVENT_FILTER_STATUS_ENDED = 7,
  EVENT_FILTER_STATUS_ON_SALE = 8,
  EVENT_FILTER_STATUS_SALE_COMMING_SOON = 9,
  EVENT_FILTER_STATUS_STOP_SALE = 10,
}
export enum EventDetailPageDisplayStatus {
  EVENT_DETAIL_DISPLAY_STATUS_INVALID = 0,
  EVENT_DETAIL_DISPLAY_STATUS_BOOKING_GOING_ON = 1,
  EVENT_DETAIL_DISPLAY_STATUS_BOOKING_AVAILABLE = 2,
  EVENT_FILTER_DISPLAY_STATUS_HOT = 3,
  EVENT_FILTER_DISPLAY_STATUS_GOING_ON = 4,
  EVENT_FILTER_DISPLAY_STATUS_LIVE = 5,
  EVENT_FILTER_DISPLAY_STATUS_SOLD_OUT = 6,
  EVENT_FILTER_DISPLAY_STATUS_ENDED = 7,
}
