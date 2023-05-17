import * as jspb from 'google-protobuf'

import * as ticket_web_inspector_base_pb from '../../ticket/web_inspector/base_pb';


export class PaperTicketInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PaperTicketInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): PaperTicketInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): PaperTicketInfo;

  getInspectorImage(): string;
  setInspectorImage(value: string): PaperTicketInfo;

  getEventInfo(): PaperTicketEventInfo | undefined;
  setEventInfo(value?: PaperTicketEventInfo): PaperTicketInfo;
  hasEventInfo(): boolean;
  clearEventInfo(): PaperTicketInfo;

  getSecretCode(): string;
  setSecretCode(value: string): PaperTicketInfo;

  getCheckinLogsList(): Array<PaperTicketCheckInLogInfo>;
  setCheckinLogsList(value: Array<PaperTicketCheckInLogInfo>): PaperTicketInfo;
  clearCheckinLogsList(): PaperTicketInfo;
  addCheckinLogs(value?: PaperTicketCheckInLogInfo, index?: number): PaperTicketCheckInLogInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): PaperTicketInfo;

  getStatus(): PaperTicketStatus;
  setStatus(value: PaperTicketStatus): PaperTicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaperTicketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PaperTicketInfo): PaperTicketInfo.AsObject;
  static serializeBinaryToWriter(message: PaperTicketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaperTicketInfo;
  static deserializeBinaryFromReader(message: PaperTicketInfo, reader: jspb.BinaryReader): PaperTicketInfo;
}

export namespace PaperTicketInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    inspectorImage: string,
    eventInfo?: PaperTicketEventInfo.AsObject,
    secretCode: string,
    checkinLogsList: Array<PaperTicketCheckInLogInfo.AsObject>,
    partnershipId: string,
    status: PaperTicketStatus,
  }
}

export class PaperTicketEventLocation extends jspb.Message {
  getId(): string;
  setId(value: string): PaperTicketEventLocation;

  getAddress(): string;
  setAddress(value: string): PaperTicketEventLocation;

  getWard(): string;
  setWard(value: string): PaperTicketEventLocation;

  getDistrict(): string;
  setDistrict(value: string): PaperTicketEventLocation;

  getCity(): string;
  setCity(value: string): PaperTicketEventLocation;

  getCountry(): string;
  setCountry(value: string): PaperTicketEventLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaperTicketEventLocation.AsObject;
  static toObject(includeInstance: boolean, msg: PaperTicketEventLocation): PaperTicketEventLocation.AsObject;
  static serializeBinaryToWriter(message: PaperTicketEventLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaperTicketEventLocation;
  static deserializeBinaryFromReader(message: PaperTicketEventLocation, reader: jspb.BinaryReader): PaperTicketEventLocation;
}

export namespace PaperTicketEventLocation {
  export type AsObject = {
    id: string,
    address: string,
    ward: string,
    district: string,
    city: string,
    country: string,
  }
}

export class PaperTicketEventInfo extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): PaperTicketEventInfo;

  getName(): string;
  setName(value: string): PaperTicketEventInfo;

  getStartTime(): number;
  setStartTime(value: number): PaperTicketEventInfo;

  getEndTime(): number;
  setEndTime(value: number): PaperTicketEventInfo;

  getCheckinStartTime(): number;
  setCheckinStartTime(value: number): PaperTicketEventInfo;

  getCheckinEndTime(): number;
  setCheckinEndTime(value: number): PaperTicketEventInfo;

  getLocation(): PaperTicketEventLocation | undefined;
  setLocation(value?: PaperTicketEventLocation): PaperTicketEventInfo;
  hasLocation(): boolean;
  clearLocation(): PaperTicketEventInfo;

  getTimezone(): string;
  setTimezone(value: string): PaperTicketEventInfo;

  getCheckinEnded(): boolean;
  setCheckinEnded(value: boolean): PaperTicketEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaperTicketEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PaperTicketEventInfo): PaperTicketEventInfo.AsObject;
  static serializeBinaryToWriter(message: PaperTicketEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaperTicketEventInfo;
  static deserializeBinaryFromReader(message: PaperTicketEventInfo, reader: jspb.BinaryReader): PaperTicketEventInfo;
}

export namespace PaperTicketEventInfo {
  export type AsObject = {
    eventId: string,
    name: string,
    startTime: number,
    endTime: number,
    checkinStartTime: number,
    checkinEndTime: number,
    location?: PaperTicketEventLocation.AsObject,
    timezone: string,
    checkinEnded: boolean,
  }
}

export class PaperTicketCheckInLogInfo extends jspb.Message {
  getInspectorId(): string;
  setInspectorId(value: string): PaperTicketCheckInLogInfo;

  getTime(): number;
  setTime(value: number): PaperTicketCheckInLogInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaperTicketCheckInLogInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PaperTicketCheckInLogInfo): PaperTicketCheckInLogInfo.AsObject;
  static serializeBinaryToWriter(message: PaperTicketCheckInLogInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaperTicketCheckInLogInfo;
  static deserializeBinaryFromReader(message: PaperTicketCheckInLogInfo, reader: jspb.BinaryReader): PaperTicketCheckInLogInfo;
}

export namespace PaperTicketCheckInLogInfo {
  export type AsObject = {
    inspectorId: string,
    time: number,
  }
}

export class MapPaperTicketInfoAndCheckinReq extends jspb.Message {
  getSecretCode(): string;
  setSecretCode(value: string): MapPaperTicketInfoAndCheckinReq;

  getEventInfo(): PaperTicketEventInfo | undefined;
  setEventInfo(value?: PaperTicketEventInfo): MapPaperTicketInfoAndCheckinReq;
  hasEventInfo(): boolean;
  clearEventInfo(): MapPaperTicketInfoAndCheckinReq;

  getInspectorImage(): string;
  setInspectorImage(value: string): MapPaperTicketInfoAndCheckinReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): MapPaperTicketInfoAndCheckinReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapPaperTicketInfoAndCheckinReq.AsObject;
  static toObject(includeInstance: boolean, msg: MapPaperTicketInfoAndCheckinReq): MapPaperTicketInfoAndCheckinReq.AsObject;
  static serializeBinaryToWriter(message: MapPaperTicketInfoAndCheckinReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapPaperTicketInfoAndCheckinReq;
  static deserializeBinaryFromReader(message: MapPaperTicketInfoAndCheckinReq, reader: jspb.BinaryReader): MapPaperTicketInfoAndCheckinReq;
}

export namespace MapPaperTicketInfoAndCheckinReq {
  export type AsObject = {
    secretCode: string,
    eventInfo?: PaperTicketEventInfo.AsObject,
    inspectorImage: string,
    partnershipId: string,
  }
}

export class GetPaperTicketByCodeReq extends jspb.Message {
  getSecretCode(): string;
  setSecretCode(value: string): GetPaperTicketByCodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaperTicketByCodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaperTicketByCodeReq): GetPaperTicketByCodeReq.AsObject;
  static serializeBinaryToWriter(message: GetPaperTicketByCodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaperTicketByCodeReq;
  static deserializeBinaryFromReader(message: GetPaperTicketByCodeReq, reader: jspb.BinaryReader): GetPaperTicketByCodeReq;
}

export namespace GetPaperTicketByCodeReq {
  export type AsObject = {
    secretCode: string,
  }
}

export class GetPaperTicketByCodeRes extends jspb.Message {
  getInfo(): PaperTicketInfo | undefined;
  setInfo(value?: PaperTicketInfo): GetPaperTicketByCodeRes;
  hasInfo(): boolean;
  clearInfo(): GetPaperTicketByCodeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaperTicketByCodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaperTicketByCodeRes): GetPaperTicketByCodeRes.AsObject;
  static serializeBinaryToWriter(message: GetPaperTicketByCodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaperTicketByCodeRes;
  static deserializeBinaryFromReader(message: GetPaperTicketByCodeRes, reader: jspb.BinaryReader): GetPaperTicketByCodeRes;
}

export namespace GetPaperTicketByCodeRes {
  export type AsObject = {
    info?: PaperTicketInfo.AsObject,
  }
}

export enum PaperTicketStatus { 
  PAPER_TICKET_STATUS_INVALID = 0,
  PAPER_TICKET_STATUS_NOT_USED = 1,
  PAPER_TICKET_STATUS_CHECKED_IN = 2,
}
