import * as jspb from 'google-protobuf'



export class EventLocationInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventLocationInfo;

  getName(): string;
  setName(value: string): EventLocationInfo;

  getDescription(): string;
  setDescription(value: string): EventLocationInfo;

  getCoordination(): string;
  setCoordination(value: string): EventLocationInfo;

  getAddress(): string;
  setAddress(value: string): EventLocationInfo;

  getCountry(): string;
  setCountry(value: string): EventLocationInfo;

  getTimezone(): string;
  setTimezone(value: string): EventLocationInfo;

  getWard(): string;
  setWard(value: string): EventLocationInfo;

  getDistrict(): string;
  setDistrict(value: string): EventLocationInfo;

  getCity(): string;
  setCity(value: string): EventLocationInfo;

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
    name: string,
    description: string,
    coordination: string,
    address: string,
    country: string,
    timezone: string,
    ward: string,
    district: string,
    city: string,
  }
}

export class RetrieveEventLocationByIdReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveEventLocationByIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveEventLocationByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveEventLocationByIdReq): RetrieveEventLocationByIdReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveEventLocationByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveEventLocationByIdReq;
  static deserializeBinaryFromReader(message: RetrieveEventLocationByIdReq, reader: jspb.BinaryReader): RetrieveEventLocationByIdReq;
}

export namespace RetrieveEventLocationByIdReq {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveEventLocationByIdRes extends jspb.Message {
  getInfo(): EventLocationInfo | undefined;
  setInfo(value?: EventLocationInfo): RetrieveEventLocationByIdRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveEventLocationByIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveEventLocationByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveEventLocationByIdRes): RetrieveEventLocationByIdRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveEventLocationByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveEventLocationByIdRes;
  static deserializeBinaryFromReader(message: RetrieveEventLocationByIdRes, reader: jspb.BinaryReader): RetrieveEventLocationByIdRes;
}

export namespace RetrieveEventLocationByIdRes {
  export type AsObject = {
    info?: EventLocationInfo.AsObject,
  }
}

