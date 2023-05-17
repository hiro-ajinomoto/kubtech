import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';
import * as event_enum_event_state_pb from '../../event/enum/event_state_pb';


export class EventBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): EventBasicInfo;

  getCode(): string;
  setCode(value: string): EventBasicInfo;

  getEventImageUrlsList(): Array<string>;
  setEventImageUrlsList(value: Array<string>): EventBasicInfo;
  clearEventImageUrlsList(): EventBasicInfo;
  addEventImageUrls(value: string, index?: number): EventBasicInfo;

  getArtistsList(): Array<EventArtist>;
  setArtistsList(value: Array<EventArtist>): EventBasicInfo;
  clearArtistsList(): EventBasicInfo;
  addArtists(value?: EventArtist, index?: number): EventArtist;

  getHashTagsList(): Array<string>;
  setHashTagsList(value: Array<string>): EventBasicInfo;
  clearHashTagsList(): EventBasicInfo;
  addHashTags(value: string, index?: number): EventBasicInfo;

  getProgramsImageUrlsList(): Array<string>;
  setProgramsImageUrlsList(value: Array<string>): EventBasicInfo;
  clearProgramsImageUrlsList(): EventBasicInfo;
  addProgramsImageUrls(value: string, index?: number): EventBasicInfo;

  getDescription(): string;
  setDescription(value: string): EventBasicInfo;

  getSchedulesList(): Array<EventSchedule>;
  setSchedulesList(value: Array<EventSchedule>): EventBasicInfo;
  clearSchedulesList(): EventBasicInfo;
  addSchedules(value?: EventSchedule, index?: number): EventSchedule;

  getIsHot(): boolean;
  setIsHot(value: boolean): EventBasicInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): EventBasicInfo;

  getDuration(): number;
  setDuration(value: number): EventBasicInfo;

  getNumberOfTickets(): number;
  setNumberOfTickets(value: number): EventBasicInfo;

  getMinTicketPrice(): number;
  setMinTicketPrice(value: number): EventBasicInfo;

  getMaxTicketPrice(): number;
  setMaxTicketPrice(value: number): EventBasicInfo;

  getCurrency(): EventCurrencyInfo | undefined;
  setCurrency(value?: EventCurrencyInfo): EventBasicInfo;
  hasCurrency(): boolean;
  clearCurrency(): EventBasicInfo;

  getLocation(): EventLocation | undefined;
  setLocation(value?: EventLocation): EventBasicInfo;
  hasLocation(): boolean;
  clearLocation(): EventBasicInfo;

  getSponsorsList(): Array<EventSponsor>;
  setSponsorsList(value: Array<EventSponsor>): EventBasicInfo;
  clearSponsorsList(): EventBasicInfo;
  addSponsors(value?: EventSponsor, index?: number): EventSponsor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventBasicInfo): EventBasicInfo.AsObject;
  static serializeBinaryToWriter(message: EventBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBasicInfo;
  static deserializeBinaryFromReader(message: EventBasicInfo, reader: jspb.BinaryReader): EventBasicInfo;
}

export namespace EventBasicInfo {
  export type AsObject = {
    name: string,
    code: string,
    eventImageUrlsList: Array<string>,
    artistsList: Array<EventArtist.AsObject>,
    hashTagsList: Array<string>,
    programsImageUrlsList: Array<string>,
    description: string,
    schedulesList: Array<EventSchedule.AsObject>,
    isHot: boolean,
    isPublic: boolean,
    duration: number,
    numberOfTickets: number,
    minTicketPrice: number,
    maxTicketPrice: number,
    currency?: EventCurrencyInfo.AsObject,
    location?: EventLocation.AsObject,
    sponsorsList: Array<EventSponsor.AsObject>,
  }
}

export class EventSimpleInfo extends jspb.Message {
  getName(): string;
  setName(value: string): EventSimpleInfo;

  getCode(): string;
  setCode(value: string): EventSimpleInfo;

  getEventImageUrlsList(): Array<string>;
  setEventImageUrlsList(value: Array<string>): EventSimpleInfo;
  clearEventImageUrlsList(): EventSimpleInfo;
  addEventImageUrls(value: string, index?: number): EventSimpleInfo;

  getArtistsList(): Array<EventArtist>;
  setArtistsList(value: Array<EventArtist>): EventSimpleInfo;
  clearArtistsList(): EventSimpleInfo;
  addArtists(value?: EventArtist, index?: number): EventArtist;

  getHashTagsList(): Array<string>;
  setHashTagsList(value: Array<string>): EventSimpleInfo;
  clearHashTagsList(): EventSimpleInfo;
  addHashTags(value: string, index?: number): EventSimpleInfo;

  getProgramsImageUrlsList(): Array<string>;
  setProgramsImageUrlsList(value: Array<string>): EventSimpleInfo;
  clearProgramsImageUrlsList(): EventSimpleInfo;
  addProgramsImageUrls(value: string, index?: number): EventSimpleInfo;

  getDescription(): string;
  setDescription(value: string): EventSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventSimpleInfo): EventSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: EventSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSimpleInfo;
  static deserializeBinaryFromReader(message: EventSimpleInfo, reader: jspb.BinaryReader): EventSimpleInfo;
}

export namespace EventSimpleInfo {
  export type AsObject = {
    name: string,
    code: string,
    eventImageUrlsList: Array<string>,
    artistsList: Array<EventArtist.AsObject>,
    hashTagsList: Array<string>,
    programsImageUrlsList: Array<string>,
    description: string,
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

export class EventLocation extends jspb.Message {
  getId(): string;
  setId(value: string): EventLocation;

  getAddress(): string;
  setAddress(value: string): EventLocation;

  getWard(): string;
  setWard(value: string): EventLocation;

  getDistrict(): string;
  setDistrict(value: string): EventLocation;

  getCity(): string;
  setCity(value: string): EventLocation;

  getCountry(): string;
  setCountry(value: string): EventLocation;

  getName(): string;
  setName(value: string): EventLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLocation.AsObject;
  static toObject(includeInstance: boolean, msg: EventLocation): EventLocation.AsObject;
  static serializeBinaryToWriter(message: EventLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLocation;
  static deserializeBinaryFromReader(message: EventLocation, reader: jspb.BinaryReader): EventLocation;
}

export namespace EventLocation {
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

export class EventSponsor extends jspb.Message {
  getId(): string;
  setId(value: string): EventSponsor;

  getName(): string;
  setName(value: string): EventSponsor;

  getAvatar(): string;
  setAvatar(value: string): EventSponsor;

  getLevel(): EventSponsorLevelInfo | undefined;
  setLevel(value?: EventSponsorLevelInfo): EventSponsor;
  hasLevel(): boolean;
  clearLevel(): EventSponsor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSponsor.AsObject;
  static toObject(includeInstance: boolean, msg: EventSponsor): EventSponsor.AsObject;
  static serializeBinaryToWriter(message: EventSponsor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSponsor;
  static deserializeBinaryFromReader(message: EventSponsor, reader: jspb.BinaryReader): EventSponsor;
}

export namespace EventSponsor {
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

export class EventSchedule extends jspb.Message {
  getId(): string;
  setId(value: string): EventSchedule;

  getGeneralSeatMapsList(): Array<EventSeatMaps>;
  setGeneralSeatMapsList(value: Array<EventSeatMaps>): EventSchedule;
  clearGeneralSeatMapsList(): EventSchedule;
  addGeneralSeatMaps(value?: EventSeatMaps, index?: number): EventSeatMaps;

  getStartTime(): number;
  setStartTime(value: number): EventSchedule;

  getEndTime(): number;
  setEndTime(value: number): EventSchedule;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): EventSchedule;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): EventSchedule;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): EventSchedule;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): EventSchedule;

  getTimezone(): string;
  setTimezone(value: string): EventSchedule;

  getIsSoldout(): boolean;
  setIsSoldout(value: boolean): EventSchedule;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): EventSchedule;

  getEventType(): EventForm;
  setEventType(value: EventForm): EventSchedule;

  getName(): string;
  setName(value: string): EventSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: EventSchedule): EventSchedule.AsObject;
  static serializeBinaryToWriter(message: EventSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSchedule;
  static deserializeBinaryFromReader(message: EventSchedule, reader: jspb.BinaryReader): EventSchedule;
}

export namespace EventSchedule {
  export type AsObject = {
    id: string,
    generalSeatMapsList: Array<EventSeatMaps.AsObject>,
    startTime: number,
    endTime: number,
    bookingStartTime: number,
    bookingEndTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    timezone: string,
    isSoldout: boolean,
    isPublic: boolean,
    eventType: EventForm,
    name: string,
  }
}

export class EventArtist extends jspb.Message {
  getId(): string;
  setId(value: string): EventArtist;

  getName(): string;
  setName(value: string): EventArtist;

  getAvatar(): string;
  setAvatar(value: string): EventArtist;

  getTypeList(): Array<EventArtistTypeInfo>;
  setTypeList(value: Array<EventArtistTypeInfo>): EventArtist;
  clearTypeList(): EventArtist;
  addType(value?: EventArtistTypeInfo, index?: number): EventArtistTypeInfo;

  getIntro(): string;
  setIntro(value: string): EventArtist;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventArtist.AsObject;
  static toObject(includeInstance: boolean, msg: EventArtist): EventArtist.AsObject;
  static serializeBinaryToWriter(message: EventArtist, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventArtist;
  static deserializeBinaryFromReader(message: EventArtist, reader: jspb.BinaryReader): EventArtist;
}

export namespace EventArtist {
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

export class ProductEventInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): ProductEventInfo;

  getAddress(): string;
  setAddress(value: string): ProductEventInfo;

  getName(): string;
  setName(value: string): ProductEventInfo;

  getTimezone(): string;
  setTimezone(value: string): ProductEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductEventInfo): ProductEventInfo.AsObject;
  static serializeBinaryToWriter(message: ProductEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductEventInfo;
  static deserializeBinaryFromReader(message: ProductEventInfo, reader: jspb.BinaryReader): ProductEventInfo;
}

export namespace ProductEventInfo {
  export type AsObject = {
    eventId: string,
    address: string,
    name: string,
    timezone: string,
  }
}

export class ProductEventScheduleInfo extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): ProductEventScheduleInfo;

  getEndTime(): number;
  setEndTime(value: number): ProductEventScheduleInfo;

  getCheckInStartTime(): number;
  setCheckInStartTime(value: number): ProductEventScheduleInfo;

  getScheduleId(): string;
  setScheduleId(value: string): ProductEventScheduleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductEventScheduleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductEventScheduleInfo): ProductEventScheduleInfo.AsObject;
  static serializeBinaryToWriter(message: ProductEventScheduleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductEventScheduleInfo;
  static deserializeBinaryFromReader(message: ProductEventScheduleInfo, reader: jspb.BinaryReader): ProductEventScheduleInfo;
}

export namespace ProductEventScheduleInfo {
  export type AsObject = {
    startTime: number,
    endTime: number,
    checkInStartTime: number,
    scheduleId: string,
  }
}

export class ProductEventSeatBlockInfo extends jspb.Message {
  getSeatBlockId(): string;
  setSeatBlockId(value: string): ProductEventSeatBlockInfo;

  getSeatBlockName(): string;
  setSeatBlockName(value: string): ProductEventSeatBlockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductEventSeatBlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductEventSeatBlockInfo): ProductEventSeatBlockInfo.AsObject;
  static serializeBinaryToWriter(message: ProductEventSeatBlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductEventSeatBlockInfo;
  static deserializeBinaryFromReader(message: ProductEventSeatBlockInfo, reader: jspb.BinaryReader): ProductEventSeatBlockInfo;
}

export namespace ProductEventSeatBlockInfo {
  export type AsObject = {
    seatBlockId: string,
    seatBlockName: string,
  }
}

export class ProductEventSeatInfo extends jspb.Message {
  getSeatId(): string;
  setSeatId(value: string): ProductEventSeatInfo;

  getSeatName(): string;
  setSeatName(value: string): ProductEventSeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductEventSeatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductEventSeatInfo): ProductEventSeatInfo.AsObject;
  static serializeBinaryToWriter(message: ProductEventSeatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductEventSeatInfo;
  static deserializeBinaryFromReader(message: ProductEventSeatInfo, reader: jspb.BinaryReader): ProductEventSeatInfo;
}

export namespace ProductEventSeatInfo {
  export type AsObject = {
    seatId: string,
    seatName: string,
  }
}

export class SearchProductEventSeatMap extends jspb.Message {
  getSeatMapId(): string;
  setSeatMapId(value: string): SearchProductEventSeatMap;

  getSeatBlockIdsList(): Array<string>;
  setSeatBlockIdsList(value: Array<string>): SearchProductEventSeatMap;
  clearSeatBlockIdsList(): SearchProductEventSeatMap;
  addSeatBlockIds(value: string, index?: number): SearchProductEventSeatMap;

  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): SearchProductEventSeatMap;
  clearSeatIdsList(): SearchProductEventSeatMap;
  addSeatIds(value: string, index?: number): SearchProductEventSeatMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchProductEventSeatMap.AsObject;
  static toObject(includeInstance: boolean, msg: SearchProductEventSeatMap): SearchProductEventSeatMap.AsObject;
  static serializeBinaryToWriter(message: SearchProductEventSeatMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchProductEventSeatMap;
  static deserializeBinaryFromReader(message: SearchProductEventSeatMap, reader: jspb.BinaryReader): SearchProductEventSeatMap;
}

export namespace SearchProductEventSeatMap {
  export type AsObject = {
    seatMapId: string,
    seatBlockIdsList: Array<string>,
    seatIdsList: Array<string>,
  }
}

export class SearchProductEventSchedule extends jspb.Message {
  getScheduleId(): string;
  setScheduleId(value: string): SearchProductEventSchedule;

  getSeatMapsList(): Array<SearchProductEventSeatMap>;
  setSeatMapsList(value: Array<SearchProductEventSeatMap>): SearchProductEventSchedule;
  clearSeatMapsList(): SearchProductEventSchedule;
  addSeatMaps(value?: SearchProductEventSeatMap, index?: number): SearchProductEventSeatMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchProductEventSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: SearchProductEventSchedule): SearchProductEventSchedule.AsObject;
  static serializeBinaryToWriter(message: SearchProductEventSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchProductEventSchedule;
  static deserializeBinaryFromReader(message: SearchProductEventSchedule, reader: jspb.BinaryReader): SearchProductEventSchedule;
}

export namespace SearchProductEventSchedule {
  export type AsObject = {
    scheduleId: string,
    seatMapsList: Array<SearchProductEventSeatMap.AsObject>,
  }
}

export class RetrieveSimpleEventReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveSimpleEventReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSimpleEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSimpleEventReq): RetrieveSimpleEventReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveSimpleEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSimpleEventReq;
  static deserializeBinaryFromReader(message: RetrieveSimpleEventReq, reader: jspb.BinaryReader): RetrieveSimpleEventReq;
}

export namespace RetrieveSimpleEventReq {
  export type AsObject = {
    id: string,
  }
}

export class SearchEventsByNameReq extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): SearchEventsByNameReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEventsByNameReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEventsByNameReq): SearchEventsByNameReq.AsObject;
  static serializeBinaryToWriter(message: SearchEventsByNameReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEventsByNameReq;
  static deserializeBinaryFromReader(message: SearchEventsByNameReq, reader: jspb.BinaryReader): SearchEventsByNameReq;
}

export namespace SearchEventsByNameReq {
  export type AsObject = {
    search: string,
  }
}

export class GetProductEventsInfoReq extends jspb.Message {
  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): GetProductEventsInfoReq;
  clearEventIdsList(): GetProductEventsInfoReq;
  addEventIds(value: string, index?: number): GetProductEventsInfoReq;

  getSchedulesList(): Array<SearchProductEventSchedule>;
  setSchedulesList(value: Array<SearchProductEventSchedule>): GetProductEventsInfoReq;
  clearSchedulesList(): GetProductEventsInfoReq;
  addSchedules(value?: SearchProductEventSchedule, index?: number): SearchProductEventSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductEventsInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductEventsInfoReq): GetProductEventsInfoReq.AsObject;
  static serializeBinaryToWriter(message: GetProductEventsInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductEventsInfoReq;
  static deserializeBinaryFromReader(message: GetProductEventsInfoReq, reader: jspb.BinaryReader): GetProductEventsInfoReq;
}

export namespace GetProductEventsInfoReq {
  export type AsObject = {
    eventIdsList: Array<string>,
    schedulesList: Array<SearchProductEventSchedule.AsObject>,
  }
}

export class RetrieveSimpleEventRes extends jspb.Message {
  getInfo(): EventSimpleInfo | undefined;
  setInfo(value?: EventSimpleInfo): RetrieveSimpleEventRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveSimpleEventRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveSimpleEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveSimpleEventRes): RetrieveSimpleEventRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveSimpleEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveSimpleEventRes;
  static deserializeBinaryFromReader(message: RetrieveSimpleEventRes, reader: jspb.BinaryReader): RetrieveSimpleEventRes;
}

export namespace RetrieveSimpleEventRes {
  export type AsObject = {
    info?: EventSimpleInfo.AsObject,
  }
}

export class SearchEventsByNameRes extends jspb.Message {
  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): SearchEventsByNameRes;
  clearEventIdsList(): SearchEventsByNameRes;
  addEventIds(value: string, index?: number): SearchEventsByNameRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEventsByNameRes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEventsByNameRes): SearchEventsByNameRes.AsObject;
  static serializeBinaryToWriter(message: SearchEventsByNameRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEventsByNameRes;
  static deserializeBinaryFromReader(message: SearchEventsByNameRes, reader: jspb.BinaryReader): SearchEventsByNameRes;
}

export namespace SearchEventsByNameRes {
  export type AsObject = {
    eventIdsList: Array<string>,
  }
}

export class GetProductEventsInfoRes extends jspb.Message {
  getEventsList(): Array<ProductEventInfo>;
  setEventsList(value: Array<ProductEventInfo>): GetProductEventsInfoRes;
  clearEventsList(): GetProductEventsInfoRes;
  addEvents(value?: ProductEventInfo, index?: number): ProductEventInfo;

  getSchedulesList(): Array<ProductEventScheduleInfo>;
  setSchedulesList(value: Array<ProductEventScheduleInfo>): GetProductEventsInfoRes;
  clearSchedulesList(): GetProductEventsInfoRes;
  addSchedules(value?: ProductEventScheduleInfo, index?: number): ProductEventScheduleInfo;

  getSeatBlocksList(): Array<ProductEventSeatBlockInfo>;
  setSeatBlocksList(value: Array<ProductEventSeatBlockInfo>): GetProductEventsInfoRes;
  clearSeatBlocksList(): GetProductEventsInfoRes;
  addSeatBlocks(value?: ProductEventSeatBlockInfo, index?: number): ProductEventSeatBlockInfo;

  getSeatsList(): Array<ProductEventSeatInfo>;
  setSeatsList(value: Array<ProductEventSeatInfo>): GetProductEventsInfoRes;
  clearSeatsList(): GetProductEventsInfoRes;
  addSeats(value?: ProductEventSeatInfo, index?: number): ProductEventSeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductEventsInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductEventsInfoRes): GetProductEventsInfoRes.AsObject;
  static serializeBinaryToWriter(message: GetProductEventsInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductEventsInfoRes;
  static deserializeBinaryFromReader(message: GetProductEventsInfoRes, reader: jspb.BinaryReader): GetProductEventsInfoRes;
}

export namespace GetProductEventsInfoRes {
  export type AsObject = {
    eventsList: Array<ProductEventInfo.AsObject>,
    schedulesList: Array<ProductEventScheduleInfo.AsObject>,
    seatBlocksList: Array<ProductEventSeatBlockInfo.AsObject>,
    seatsList: Array<ProductEventSeatInfo.AsObject>,
  }
}

export class ListScheduleByEventIDReq extends jspb.Message {
  getId(): string;
  setId(value: string): ListScheduleByEventIDReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduleByEventIDReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduleByEventIDReq): ListScheduleByEventIDReq.AsObject;
  static serializeBinaryToWriter(message: ListScheduleByEventIDReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduleByEventIDReq;
  static deserializeBinaryFromReader(message: ListScheduleByEventIDReq, reader: jspb.BinaryReader): ListScheduleByEventIDReq;
}

export namespace ListScheduleByEventIDReq {
  export type AsObject = {
    id: string,
  }
}

export class ListScheduleByEventIDRes extends jspb.Message {
  getItemsList(): Array<EventSchedule>;
  setItemsList(value: Array<EventSchedule>): ListScheduleByEventIDRes;
  clearItemsList(): ListScheduleByEventIDRes;
  addItems(value?: EventSchedule, index?: number): EventSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduleByEventIDRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduleByEventIDRes): ListScheduleByEventIDRes.AsObject;
  static serializeBinaryToWriter(message: ListScheduleByEventIDRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduleByEventIDRes;
  static deserializeBinaryFromReader(message: ListScheduleByEventIDRes, reader: jspb.BinaryReader): ListScheduleByEventIDRes;
}

export namespace ListScheduleByEventIDRes {
  export type AsObject = {
    itemsList: Array<EventSchedule.AsObject>,
  }
}

export class InternalUpdateEventStateReq extends jspb.Message {
  getId(): string;
  setId(value: string): InternalUpdateEventStateReq;

  getState(): event_enum_event_state_pb.EventState;
  setState(value: event_enum_event_state_pb.EventState): InternalUpdateEventStateReq;

  getStateDescription(): string;
  setStateDescription(value: string): InternalUpdateEventStateReq;

  getIsPublish(): boolean;
  setIsPublish(value: boolean): InternalUpdateEventStateReq;

  getUserId(): string;
  setUserId(value: string): InternalUpdateEventStateReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalUpdateEventStateReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalUpdateEventStateReq): InternalUpdateEventStateReq.AsObject;
  static serializeBinaryToWriter(message: InternalUpdateEventStateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalUpdateEventStateReq;
  static deserializeBinaryFromReader(message: InternalUpdateEventStateReq, reader: jspb.BinaryReader): InternalUpdateEventStateReq;
}

export namespace InternalUpdateEventStateReq {
  export type AsObject = {
    id: string,
    state: event_enum_event_state_pb.EventState,
    stateDescription: string,
    isPublish: boolean,
    userId: string,
  }
}

export enum EventForm { 
  EVENT_FORM_INVALID = 0,
  EVENT_FORM_OFFLINE = 1,
  EVENT_FORM_ONLINE = 2,
}
