import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';
import * as event_mobile_event_location_pb from '../../event/mobile/event_location_pb';
import * as event_mobile_artist_pb from '../../event/mobile/artist_pb';
import * as event_mobile_sponsor_pb from '../../event/mobile/sponsor_pb';


export class Event extends jspb.Message {
  getId(): string;
  setId(value: string): Event;

  getName(): string;
  setName(value: string): Event;

  getCode(): string;
  setCode(value: string): Event;

  getDuration(): number;
  setDuration(value: number): Event;

  getPriceDescription(): string;
  setPriceDescription(value: string): Event;

  getDescription(): string;
  setDescription(value: string): Event;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): Event;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): Event;

  getTimezone(): string;
  setTimezone(value: string): Event;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): Event;
  clearHashtagsList(): Event;
  addHashtags(value: string, index?: number): Event;

  getEventImageUrlsList(): Array<string>;
  setEventImageUrlsList(value: Array<string>): Event;
  clearEventImageUrlsList(): Event;
  addEventImageUrls(value: string, index?: number): Event;

  getProgramImageUrlsList(): Array<string>;
  setProgramImageUrlsList(value: Array<string>): Event;
  clearProgramImageUrlsList(): Event;
  addProgramImageUrls(value: string, index?: number): Event;

  getIsHot(): boolean;
  setIsHot(value: boolean): Event;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): Event;

  getArtistsList(): Array<event_mobile_artist_pb.ArtistInfo>;
  setArtistsList(value: Array<event_mobile_artist_pb.ArtistInfo>): Event;
  clearArtistsList(): Event;
  addArtists(value?: event_mobile_artist_pb.ArtistInfo, index?: number): event_mobile_artist_pb.ArtistInfo;

  getSponsorsList(): Array<EventSponsor>;
  setSponsorsList(value: Array<EventSponsor>): Event;
  clearSponsorsList(): Event;
  addSponsors(value?: EventSponsor, index?: number): EventSponsor;

  getSchedulesList(): Array<EventScheduleInfo>;
  setSchedulesList(value: Array<EventScheduleInfo>): Event;
  clearSchedulesList(): Event;
  addSchedules(value?: EventScheduleInfo, index?: number): EventScheduleInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): Event;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Event;

  getLocation(): event_mobile_event_location_pb.EventLocationInfo | undefined;
  setLocation(value?: event_mobile_event_location_pb.EventLocationInfo): Event;
  hasLocation(): boolean;
  clearLocation(): Event;

  getStats(): EventStats | undefined;
  setStats(value?: EventStats): Event;
  hasStats(): boolean;
  clearStats(): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    duration: number,
    priceDescription: string,
    description: string,
    bookingStartTime: number,
    bookingEndTime: number,
    timezone: string,
    hashtagsList: Array<string>,
    eventImageUrlsList: Array<string>,
    programImageUrlsList: Array<string>,
    isHot: boolean,
    isPublic: boolean,
    artistsList: Array<event_mobile_artist_pb.ArtistInfo.AsObject>,
    sponsorsList: Array<EventSponsor.AsObject>,
    schedulesList: Array<EventScheduleInfo.AsObject>,
    createdAt: number,
    updatedAt: number,
    location?: event_mobile_event_location_pb.EventLocationInfo.AsObject,
    stats?: EventStats.AsObject,
  }
}

export class EventListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventListInfo;

  getName(): string;
  setName(value: string): EventListInfo;

  getCode(): string;
  setCode(value: string): EventListInfo;

  getDuration(): number;
  setDuration(value: number): EventListInfo;

  getPriceDescription(): string;
  setPriceDescription(value: string): EventListInfo;

  getDescription(): string;
  setDescription(value: string): EventListInfo;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): EventListInfo;
  clearHashtagsList(): EventListInfo;
  addHashtags(value: string, index?: number): EventListInfo;

  getEventImageUrlsList(): Array<string>;
  setEventImageUrlsList(value: Array<string>): EventListInfo;
  clearEventImageUrlsList(): EventListInfo;
  addEventImageUrls(value: string, index?: number): EventListInfo;

  getIsHot(): boolean;
  setIsHot(value: boolean): EventListInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): EventListInfo;

  getStats(): EventStats | undefined;
  setStats(value?: EventStats): EventListInfo;
  hasStats(): boolean;
  clearStats(): EventListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventListInfo): EventListInfo.AsObject;
  static serializeBinaryToWriter(message: EventListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventListInfo;
  static deserializeBinaryFromReader(message: EventListInfo, reader: jspb.BinaryReader): EventListInfo;
}

export namespace EventListInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    duration: number,
    priceDescription: string,
    description: string,
    hashtagsList: Array<string>,
    eventImageUrlsList: Array<string>,
    isHot: boolean,
    isPublic: boolean,
    stats?: EventStats.AsObject,
  }
}

export class EventStats extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): EventStats;

  getEndTime(): number;
  setEndTime(value: number): EventStats;

  getStatus(): EventStatus;
  setStatus(value: EventStatus): EventStats;

  getIsSoldOut(): boolean;
  setIsSoldOut(value: boolean): EventStats;

  getNumberOfSeat(): number;
  setNumberOfSeat(value: number): EventStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventStats.AsObject;
  static toObject(includeInstance: boolean, msg: EventStats): EventStats.AsObject;
  static serializeBinaryToWriter(message: EventStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventStats;
  static deserializeBinaryFromReader(message: EventStats, reader: jspb.BinaryReader): EventStats;
}

export namespace EventStats {
  export type AsObject = {
    startTime: number,
    endTime: number,
    status: EventStatus,
    isSoldOut: boolean,
    numberOfSeat: number,
  }
}

export class EventSponsor extends jspb.Message {
  getRank(): string;
  setRank(value: string): EventSponsor;

  getSponsor(): event_mobile_sponsor_pb.SponsorInfo | undefined;
  setSponsor(value?: event_mobile_sponsor_pb.SponsorInfo): EventSponsor;
  hasSponsor(): boolean;
  clearSponsor(): EventSponsor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSponsor.AsObject;
  static toObject(includeInstance: boolean, msg: EventSponsor): EventSponsor.AsObject;
  static serializeBinaryToWriter(message: EventSponsor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSponsor;
  static deserializeBinaryFromReader(message: EventSponsor, reader: jspb.BinaryReader): EventSponsor;
}

export namespace EventSponsor {
  export type AsObject = {
    rank: string,
    sponsor?: event_mobile_sponsor_pb.SponsorInfo.AsObject,
  }
}

export class EventSeatMap extends jspb.Message {
  getId(): string;
  setId(value: string): EventSeatMap;

  getName(): string;
  setName(value: string): EventSeatMap;

  getMapPicture(): string;
  setMapPicture(value: string): EventSeatMap;

  getDescription(): string;
  setDescription(value: string): EventSeatMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSeatMap.AsObject;
  static toObject(includeInstance: boolean, msg: EventSeatMap): EventSeatMap.AsObject;
  static serializeBinaryToWriter(message: EventSeatMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSeatMap;
  static deserializeBinaryFromReader(message: EventSeatMap, reader: jspb.BinaryReader): EventSeatMap;
}

export namespace EventSeatMap {
  export type AsObject = {
    id: string,
    name: string,
    mapPicture: string,
    description: string,
  }
}

export class EventScheduleBasicInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): EventScheduleBasicInfo;

  getName(): string;
  setName(value: string): EventScheduleBasicInfo;

  getStartTime(): number;
  setStartTime(value: number): EventScheduleBasicInfo;

  getEndTime(): number;
  setEndTime(value: number): EventScheduleBasicInfo;

  getCheckInStartTime(): number;
  setCheckInStartTime(value: number): EventScheduleBasicInfo;

  getCheckInEndTime(): number;
  setCheckInEndTime(value: number): EventScheduleBasicInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): EventScheduleBasicInfo;

  getEventType(): EventType;
  setEventType(value: EventType): EventScheduleBasicInfo;

  getSeatMapsIdsList(): Array<string>;
  setSeatMapsIdsList(value: Array<string>): EventScheduleBasicInfo;
  clearSeatMapsIdsList(): EventScheduleBasicInfo;
  addSeatMapsIds(value: string, index?: number): EventScheduleBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventScheduleBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventScheduleBasicInfo): EventScheduleBasicInfo.AsObject;
  static serializeBinaryToWriter(message: EventScheduleBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventScheduleBasicInfo;
  static deserializeBinaryFromReader(message: EventScheduleBasicInfo, reader: jspb.BinaryReader): EventScheduleBasicInfo;
}

export namespace EventScheduleBasicInfo {
  export type AsObject = {
    eventId: string,
    name: string,
    startTime: number,
    endTime: number,
    checkInStartTime: number,
    checkInEndTime: number,
    isPublic: boolean,
    eventType: EventType,
    seatMapsIdsList: Array<string>,
  }
}

export class EventScheduleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventScheduleInfo;

  getName(): string;
  setName(value: string): EventScheduleInfo;

  getStartTime(): number;
  setStartTime(value: number): EventScheduleInfo;

  getEndTime(): number;
  setEndTime(value: number): EventScheduleInfo;

  getCheckInStartTime(): number;
  setCheckInStartTime(value: number): EventScheduleInfo;

  getCheckInEndTime(): number;
  setCheckInEndTime(value: number): EventScheduleInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): EventScheduleInfo;

  getIsSoldOut(): boolean;
  setIsSoldOut(value: boolean): EventScheduleInfo;

  getSeatMapsIdsList(): Array<string>;
  setSeatMapsIdsList(value: Array<string>): EventScheduleInfo;
  clearSeatMapsIdsList(): EventScheduleInfo;
  addSeatMapsIds(value: string, index?: number): EventScheduleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventScheduleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventScheduleInfo): EventScheduleInfo.AsObject;
  static serializeBinaryToWriter(message: EventScheduleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventScheduleInfo;
  static deserializeBinaryFromReader(message: EventScheduleInfo, reader: jspb.BinaryReader): EventScheduleInfo;
}

export namespace EventScheduleInfo {
  export type AsObject = {
    id: string,
    name: string,
    startTime: number,
    endTime: number,
    checkInStartTime: number,
    checkInEndTime: number,
    isPublic: boolean,
    isSoldOut: boolean,
    seatMapsIdsList: Array<string>,
  }
}

export class PublicRetrieveEventReq extends jspb.Message {
  getId(): string;
  setId(value: string): PublicRetrieveEventReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrieveEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrieveEventReq): PublicRetrieveEventReq.AsObject;
  static serializeBinaryToWriter(message: PublicRetrieveEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrieveEventReq;
  static deserializeBinaryFromReader(message: PublicRetrieveEventReq, reader: jspb.BinaryReader): PublicRetrieveEventReq;
}

export namespace PublicRetrieveEventReq {
  export type AsObject = {
    id: string,
  }
}

export class PublicListEventsReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): PublicListEventsReq;

  getStatus(): SearchEventStatus;
  setStatus(value: SearchEventStatus): PublicListEventsReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): PublicListEventsReq;
  hasPagination(): boolean;
  clearPagination(): PublicListEventsReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): PublicListEventsReq;
  clearOrderByList(): PublicListEventsReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListEventsReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListEventsReq): PublicListEventsReq.AsObject;
  static serializeBinaryToWriter(message: PublicListEventsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListEventsReq;
  static deserializeBinaryFromReader(message: PublicListEventsReq, reader: jspb.BinaryReader): PublicListEventsReq;
}

export namespace PublicListEventsReq {
  export type AsObject = {
    searchText: string,
    status: SearchEventStatus,
    pagination?: base_base_pb.PaginationReq.AsObject,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
  }
}

export class ListEventScheduleReq extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): ListEventScheduleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventScheduleReq): ListEventScheduleReq.AsObject;
  static serializeBinaryToWriter(message: ListEventScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventScheduleReq;
  static deserializeBinaryFromReader(message: ListEventScheduleReq, reader: jspb.BinaryReader): ListEventScheduleReq;
}

export namespace ListEventScheduleReq {
  export type AsObject = {
    eventId: string,
  }
}

export class PublicRetrieveEventRes extends jspb.Message {
  getInfo(): Event | undefined;
  setInfo(value?: Event): PublicRetrieveEventRes;
  hasInfo(): boolean;
  clearInfo(): PublicRetrieveEventRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrieveEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrieveEventRes): PublicRetrieveEventRes.AsObject;
  static serializeBinaryToWriter(message: PublicRetrieveEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrieveEventRes;
  static deserializeBinaryFromReader(message: PublicRetrieveEventRes, reader: jspb.BinaryReader): PublicRetrieveEventRes;
}

export namespace PublicRetrieveEventRes {
  export type AsObject = {
    info?: Event.AsObject,
  }
}

export class PublicListEventsRes extends jspb.Message {
  getItemsList(): Array<EventListInfo>;
  setItemsList(value: Array<EventListInfo>): PublicListEventsRes;
  clearItemsList(): PublicListEventsRes;
  addItems(value?: EventListInfo, index?: number): EventListInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): PublicListEventsRes;
  hasPagination(): boolean;
  clearPagination(): PublicListEventsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListEventsRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListEventsRes): PublicListEventsRes.AsObject;
  static serializeBinaryToWriter(message: PublicListEventsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListEventsRes;
  static deserializeBinaryFromReader(message: PublicListEventsRes, reader: jspb.BinaryReader): PublicListEventsRes;
}

export namespace PublicListEventsRes {
  export type AsObject = {
    itemsList: Array<EventListInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

export class ListEventScheduleRes extends jspb.Message {
  getItemsList(): Array<EventScheduleInfo>;
  setItemsList(value: Array<EventScheduleInfo>): ListEventScheduleRes;
  clearItemsList(): ListEventScheduleRes;
  addItems(value?: EventScheduleInfo, index?: number): EventScheduleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventScheduleRes): ListEventScheduleRes.AsObject;
  static serializeBinaryToWriter(message: ListEventScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventScheduleRes;
  static deserializeBinaryFromReader(message: ListEventScheduleRes, reader: jspb.BinaryReader): ListEventScheduleRes;
}

export namespace ListEventScheduleRes {
  export type AsObject = {
    itemsList: Array<EventScheduleInfo.AsObject>,
  }
}

export enum EventType { 
  EVENT_TYPE_INVALID = 0,
  EVENT_TYPE_OFFLINE = 1,
  EVENT_TYPE_ONLINE = 2,
}
export enum SearchEventStatus { 
  EVENT_FILTER_STATUS_NONE = 0,
  EVENT_FILTER_STATUS_SALE_COMING_SOON = 1,
  EVENT_FILTER_STATUS_ON_SALE = 2,
  EVENT_FILTER_STATUS_STOP_SALE = 3,
  EVENT_FILTER_STATUS_SOLD_OUT = 4,
  EVENT_FILTER_STATUS_UPCOMING = 5,
  EVENT_FILTER_STATUS_GOING_ON = 6,
  EVENT_FILTER_STATUS_ENDED = 7,
  EVENT_FILTER_STATUS_HOT = 8,
  EVENT_FILTER_STATUS_PUBLISHED = 9,
  EVENT_FILTER_STATUS_UNPUBLISHED = 10,
}
export enum EventStatus { 
  EVENT_DISPLAY_STATUS_NONE = 0,
  EVENT_DISPLAY_STATUS_SALE_COMING_SOON = 1,
  EVENT_DISPLAY_STATUS_ON_SALE = 2,
  EVENT_DISPLAY_STATUS_STOP_SALE = 3,
  EVENT_DISPLAY_STATUS_SOLD_OUT = 4,
  EVENT_DISPLAY_STATUS_UPCOMING = 5,
  EVENT_DISPLAY_STATUS_GOING_ON = 6,
  EVENT_DISPLAY_STATUS_ENDED = 7,
}
