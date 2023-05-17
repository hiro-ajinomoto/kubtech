import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';
import * as event_enum_event_state_pb from '../../event/enum/event_state_pb';
import * as event_web_partnership_event_location_pb from '../../event/web_partnership/event_location_pb';
import * as event_web_partnership_artist_pb from '../../event/web_partnership/artist_pb';
import * as event_web_partnership_sponsor_pb from '../../event/web_partnership/sponsor_pb';


export class EventBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): EventBasicInfo;

  getCode(): string;
  setCode(value: string): EventBasicInfo;

  getDuration(): number;
  setDuration(value: number): EventBasicInfo;

  getPriceDescription(): string;
  setPriceDescription(value: string): EventBasicInfo;

  getDescription(): string;
  setDescription(value: string): EventBasicInfo;

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
    duration: number,
    priceDescription: string,
    description: string,
  }
}

export class EventInfo extends jspb.Message {
  getName(): string;
  setName(value: string): EventInfo;

  getCode(): string;
  setCode(value: string): EventInfo;

  getDuration(): number;
  setDuration(value: number): EventInfo;

  getPriceDescription(): string;
  setPriceDescription(value: string): EventInfo;

  getDescription(): string;
  setDescription(value: string): EventInfo;

  getLocation(): string;
  setLocation(value: string): EventInfo;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): EventInfo;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): EventInfo;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): EventInfo;
  clearHashtagsList(): EventInfo;
  addHashtags(value: string, index?: number): EventInfo;

  getEventImageUrlsList(): Array<string>;
  setEventImageUrlsList(value: Array<string>): EventInfo;
  clearEventImageUrlsList(): EventInfo;
  addEventImageUrls(value: string, index?: number): EventInfo;

  getProgramsImageUrlsList(): Array<string>;
  setProgramsImageUrlsList(value: Array<string>): EventInfo;
  clearProgramsImageUrlsList(): EventInfo;
  addProgramsImageUrls(value: string, index?: number): EventInfo;

  getIsHot(): boolean;
  setIsHot(value: boolean): EventInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): EventInfo;

  getArtistsList(): Array<string>;
  setArtistsList(value: Array<string>): EventInfo;
  clearArtistsList(): EventInfo;
  addArtists(value: string, index?: number): EventInfo;

  getSponsorsList(): Array<EventSponsor>;
  setSponsorsList(value: Array<EventSponsor>): EventInfo;
  clearSponsorsList(): EventInfo;
  addSponsors(value?: EventSponsor, index?: number): EventSponsor;

  getState(): event_enum_event_state_pb.EventState;
  setState(value: event_enum_event_state_pb.EventState): EventInfo;

  getStateDescription(): string;
  setStateDescription(value: string): EventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventInfo): EventInfo.AsObject;
  static serializeBinaryToWriter(message: EventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventInfo;
  static deserializeBinaryFromReader(message: EventInfo, reader: jspb.BinaryReader): EventInfo;
}

export namespace EventInfo {
  export type AsObject = {
    name: string,
    code: string,
    duration: number,
    priceDescription: string,
    description: string,
    location: string,
    bookingStartTime: number,
    bookingEndTime: number,
    hashtagsList: Array<string>,
    eventImageUrlsList: Array<string>,
    programsImageUrlsList: Array<string>,
    isHot: boolean,
    isPublic: boolean,
    artistsList: Array<string>,
    sponsorsList: Array<EventSponsor.AsObject>,
    state: event_enum_event_state_pb.EventState,
    stateDescription: string,
  }
}

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

  getProgramsImageUrlsList(): Array<string>;
  setProgramsImageUrlsList(value: Array<string>): Event;
  clearProgramsImageUrlsList(): Event;
  addProgramsImageUrls(value: string, index?: number): Event;

  getIsHot(): boolean;
  setIsHot(value: boolean): Event;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): Event;

  getArtistsList(): Array<event_web_partnership_artist_pb.ArtistInfo>;
  setArtistsList(value: Array<event_web_partnership_artist_pb.ArtistInfo>): Event;
  clearArtistsList(): Event;
  addArtists(value?: event_web_partnership_artist_pb.ArtistInfo, index?: number): event_web_partnership_artist_pb.ArtistInfo;

  getSponsorsList(): Array<EventSponsorFullInfo>;
  setSponsorsList(value: Array<EventSponsorFullInfo>): Event;
  clearSponsorsList(): Event;
  addSponsors(value?: EventSponsorFullInfo, index?: number): EventSponsorFullInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): Event;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Event;

  getCreatedBy(): string;
  setCreatedBy(value: string): Event;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): Event;

  getLocation(): event_web_partnership_event_location_pb.EventLocationInfo | undefined;
  setLocation(value?: event_web_partnership_event_location_pb.EventLocationInfo): Event;
  hasLocation(): boolean;
  clearLocation(): Event;

  getStats(): EventStats | undefined;
  setStats(value?: EventStats): Event;
  hasStats(): boolean;
  clearStats(): Event;

  getState(): event_enum_event_state_pb.EventState;
  setState(value: event_enum_event_state_pb.EventState): Event;

  getStateDescription(): string;
  setStateDescription(value: string): Event;

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
    programsImageUrlsList: Array<string>,
    isHot: boolean,
    isPublic: boolean,
    artistsList: Array<event_web_partnership_artist_pb.ArtistInfo.AsObject>,
    sponsorsList: Array<EventSponsorFullInfo.AsObject>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    location?: event_web_partnership_event_location_pb.EventLocationInfo.AsObject,
    stats?: EventStats.AsObject,
    state: event_enum_event_state_pb.EventState,
    stateDescription: string,
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

  getLocation(): string;
  setLocation(value: string): EventListInfo;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): EventListInfo;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): EventListInfo;

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
    location: string,
    bookingStartTime: number,
    bookingEndTime: number,
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

  getIsBookingAvailable(): boolean;
  setIsBookingAvailable(value: boolean): EventStats;

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
    isBookingAvailable: boolean,
    isSoldOut: boolean,
    numberOfSeat: number,
  }
}

export class EventSponsor extends jspb.Message {
  getRank(): string;
  setRank(value: string): EventSponsor;

  getSponsorId(): string;
  setSponsorId(value: string): EventSponsor;

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
    sponsorId: string,
  }
}

export class EventSponsorFullInfo extends jspb.Message {
  getRank(): string;
  setRank(value: string): EventSponsorFullInfo;

  getSponsor(): event_web_partnership_sponsor_pb.SponsorInfo | undefined;
  setSponsor(value?: event_web_partnership_sponsor_pb.SponsorInfo): EventSponsorFullInfo;
  hasSponsor(): boolean;
  clearSponsor(): EventSponsorFullInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSponsorFullInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventSponsorFullInfo): EventSponsorFullInfo.AsObject;
  static serializeBinaryToWriter(message: EventSponsorFullInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSponsorFullInfo;
  static deserializeBinaryFromReader(message: EventSponsorFullInfo, reader: jspb.BinaryReader): EventSponsorFullInfo;
}

export namespace EventSponsorFullInfo {
  export type AsObject = {
    rank: string,
    sponsor?: event_web_partnership_sponsor_pb.SponsorInfo.AsObject,
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

  getEventId(): string;
  setEventId(value: string): EventScheduleInfo;

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

  getEventType(): EventType;
  setEventType(value: EventType): EventScheduleInfo;

  getSeatMapsList(): Array<EventSeatMap>;
  setSeatMapsList(value: Array<EventSeatMap>): EventScheduleInfo;
  clearSeatMapsList(): EventScheduleInfo;
  addSeatMaps(value?: EventSeatMap, index?: number): EventSeatMap;

  getIsSoldOut(): boolean;
  setIsSoldOut(value: boolean): EventScheduleInfo;

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
    eventId: string,
    name: string,
    startTime: number,
    endTime: number,
    checkInStartTime: number,
    checkInEndTime: number,
    isPublic: boolean,
    eventType: EventType,
    seatMapsList: Array<EventSeatMap.AsObject>,
    isSoldOut: boolean,
  }
}

export class CreateEventReq extends jspb.Message {
  getInfo(): EventBasicInfo | undefined;
  setInfo(value?: EventBasicInfo): CreateEventReq;
  hasInfo(): boolean;
  clearInfo(): CreateEventReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventReq): CreateEventReq.AsObject;
  static serializeBinaryToWriter(message: CreateEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventReq;
  static deserializeBinaryFromReader(message: CreateEventReq, reader: jspb.BinaryReader): CreateEventReq;
}

export namespace CreateEventReq {
  export type AsObject = {
    info?: EventBasicInfo.AsObject,
  }
}

export class UpdateEventReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventReq;

  getInfo(): EventInfo | undefined;
  setInfo(value?: EventInfo): UpdateEventReq;
  hasInfo(): boolean;
  clearInfo(): UpdateEventReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventReq): UpdateEventReq.AsObject;
  static serializeBinaryToWriter(message: UpdateEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventReq;
  static deserializeBinaryFromReader(message: UpdateEventReq, reader: jspb.BinaryReader): UpdateEventReq;
}

export namespace UpdateEventReq {
  export type AsObject = {
    id: string,
    info?: EventInfo.AsObject,
  }
}

export class RetrieveEventReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveEventReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveEventReq): RetrieveEventReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveEventReq;
  static deserializeBinaryFromReader(message: RetrieveEventReq, reader: jspb.BinaryReader): RetrieveEventReq;
}

export namespace RetrieveEventReq {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventReq): DeleteEventReq.AsObject;
  static serializeBinaryToWriter(message: DeleteEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventReq;
  static deserializeBinaryFromReader(message: DeleteEventReq, reader: jspb.BinaryReader): DeleteEventReq;
}

export namespace DeleteEventReq {
  export type AsObject = {
    id: string,
  }
}

export class CreateScheduleReq extends jspb.Message {
  getInfo(): EventScheduleBasicInfo | undefined;
  setInfo(value?: EventScheduleBasicInfo): CreateScheduleReq;
  hasInfo(): boolean;
  clearInfo(): CreateScheduleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScheduleReq): CreateScheduleReq.AsObject;
  static serializeBinaryToWriter(message: CreateScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScheduleReq;
  static deserializeBinaryFromReader(message: CreateScheduleReq, reader: jspb.BinaryReader): CreateScheduleReq;
}

export namespace CreateScheduleReq {
  export type AsObject = {
    info?: EventScheduleBasicInfo.AsObject,
  }
}

export class UpdateScheduleReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateScheduleReq;

  getInfo(): EventScheduleBasicInfo | undefined;
  setInfo(value?: EventScheduleBasicInfo): UpdateScheduleReq;
  hasInfo(): boolean;
  clearInfo(): UpdateScheduleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateScheduleReq): UpdateScheduleReq.AsObject;
  static serializeBinaryToWriter(message: UpdateScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateScheduleReq;
  static deserializeBinaryFromReader(message: UpdateScheduleReq, reader: jspb.BinaryReader): UpdateScheduleReq;
}

export namespace UpdateScheduleReq {
  export type AsObject = {
    id: string,
    info?: EventScheduleBasicInfo.AsObject,
  }
}

export class DeleteEventScheduleReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventScheduleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventScheduleReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventScheduleReq): DeleteEventScheduleReq.AsObject;
  static serializeBinaryToWriter(message: DeleteEventScheduleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventScheduleReq;
  static deserializeBinaryFromReader(message: DeleteEventScheduleReq, reader: jspb.BinaryReader): DeleteEventScheduleReq;
}

export namespace DeleteEventScheduleReq {
  export type AsObject = {
    id: string,
  }
}

export class ListEventsReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListEventsReq;

  getStatus(): SearchEventStatus;
  setStatus(value: SearchEventStatus): ListEventsReq;

  getIsPublic(): string;
  setIsPublic(value: string): ListEventsReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListEventsReq;
  hasPagination(): boolean;
  clearPagination(): ListEventsReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): ListEventsReq;
  clearOrderByList(): ListEventsReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

  getStatusesList(): Array<SearchEventStatus>;
  setStatusesList(value: Array<SearchEventStatus>): ListEventsReq;
  clearStatusesList(): ListEventsReq;
  addStatuses(value: SearchEventStatus, index?: number): ListEventsReq;

  getOrStatusesList(): Array<SearchEventStatus>;
  setOrStatusesList(value: Array<SearchEventStatus>): ListEventsReq;
  clearOrStatusesList(): ListEventsReq;
  addOrStatuses(value: SearchEventStatus, index?: number): ListEventsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsReq): ListEventsReq.AsObject;
  static serializeBinaryToWriter(message: ListEventsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsReq;
  static deserializeBinaryFromReader(message: ListEventsReq, reader: jspb.BinaryReader): ListEventsReq;
}

export namespace ListEventsReq {
  export type AsObject = {
    searchText: string,
    status: SearchEventStatus,
    isPublic: string,
    pagination?: base_base_pb.PaginationReq.AsObject,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
    statusesList: Array<SearchEventStatus>,
    orStatusesList: Array<SearchEventStatus>,
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

export class CreateEventRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateEventRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventRes): CreateEventRes.AsObject;
  static serializeBinaryToWriter(message: CreateEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventRes;
  static deserializeBinaryFromReader(message: CreateEventRes, reader: jspb.BinaryReader): CreateEventRes;
}

export namespace CreateEventRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveEventRes extends jspb.Message {
  getInfo(): Event | undefined;
  setInfo(value?: Event): RetrieveEventRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveEventRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveEventRes): RetrieveEventRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveEventRes;
  static deserializeBinaryFromReader(message: RetrieveEventRes, reader: jspb.BinaryReader): RetrieveEventRes;
}

export namespace RetrieveEventRes {
  export type AsObject = {
    info?: Event.AsObject,
  }
}

export class ListEventsRes extends jspb.Message {
  getItemsList(): Array<EventListInfo>;
  setItemsList(value: Array<EventListInfo>): ListEventsRes;
  clearItemsList(): ListEventsRes;
  addItems(value?: EventListInfo, index?: number): EventListInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): ListEventsRes;
  hasPagination(): boolean;
  clearPagination(): ListEventsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsRes): ListEventsRes.AsObject;
  static serializeBinaryToWriter(message: ListEventsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsRes;
  static deserializeBinaryFromReader(message: ListEventsRes, reader: jspb.BinaryReader): ListEventsRes;
}

export namespace ListEventsRes {
  export type AsObject = {
    itemsList: Array<EventListInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

export class CreateEventScheduleRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateEventScheduleRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventScheduleRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventScheduleRes): CreateEventScheduleRes.AsObject;
  static serializeBinaryToWriter(message: CreateEventScheduleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventScheduleRes;
  static deserializeBinaryFromReader(message: CreateEventScheduleRes, reader: jspb.BinaryReader): CreateEventScheduleRes;
}

export namespace CreateEventScheduleRes {
  export type AsObject = {
    id: string,
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
