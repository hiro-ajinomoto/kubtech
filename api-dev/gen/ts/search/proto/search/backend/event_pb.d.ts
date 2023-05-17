import * as jspb from 'google-protobuf'

import * as proto_search_backend_base_pb from '../../../proto/search/backend/base_pb';


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

  getMediasList(): Array<proto_search_backend_base_pb.Media>;
  setMediasList(value: Array<proto_search_backend_base_pb.Media>): EventSimpleInfo;
  clearMediasList(): EventSimpleInfo;
  addMedias(value?: proto_search_backend_base_pb.Media, index?: number): proto_search_backend_base_pb.Media;

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
    mediasList: Array<proto_search_backend_base_pb.Media.AsObject>,
    hightlightDateStr: string,
    hightlightAddress: string,
    currency?: EventCurrencyInfo.AsObject,
    prefixSecretCode: string,
    numberOfTickets: number,
  }
}

export class InternalGetEventReq extends jspb.Message {
  getId(): string;
  setId(value: string): InternalGetEventReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): InternalGetEventReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalGetEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalGetEventReq): InternalGetEventReq.AsObject;
  static serializeBinaryToWriter(message: InternalGetEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalGetEventReq;
  static deserializeBinaryFromReader(message: InternalGetEventReq, reader: jspb.BinaryReader): InternalGetEventReq;
}

export namespace InternalGetEventReq {
  export type AsObject = {
    id: string,
    partnershipId: string,
  }
}

export class InternalGetEventRes extends jspb.Message {
  getInfo(): EventSimpleInfo | undefined;
  setInfo(value?: EventSimpleInfo): InternalGetEventRes;
  hasInfo(): boolean;
  clearInfo(): InternalGetEventRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalGetEventRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalGetEventRes): InternalGetEventRes.AsObject;
  static serializeBinaryToWriter(message: InternalGetEventRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalGetEventRes;
  static deserializeBinaryFromReader(message: InternalGetEventRes, reader: jspb.BinaryReader): InternalGetEventRes;
}

export namespace InternalGetEventRes {
  export type AsObject = {
    info?: EventSimpleInfo.AsObject,
  }
}

