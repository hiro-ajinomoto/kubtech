import * as jspb from 'google-protobuf'

import * as proto_partner_backend_base_pb from '../../../proto/partner/backend/base_pb';


export class PartnerLocationContactInfo extends jspb.Message {
  getFullName(): string;
  setFullName(value: string): PartnerLocationContactInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): PartnerLocationContactInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): PartnerLocationContactInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnerLocationContactInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PartnerLocationContactInfo): PartnerLocationContactInfo.AsObject;
  static serializeBinaryToWriter(message: PartnerLocationContactInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnerLocationContactInfo;
  static deserializeBinaryFromReader(message: PartnerLocationContactInfo, reader: jspb.BinaryReader): PartnerLocationContactInfo;
}

export namespace PartnerLocationContactInfo {
  export type AsObject = {
    fullName: string,
    phoneCode: string,
    phoneNumber: string,
  }
}

export class PartnerLocationBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): PartnerLocationBasicInfo;

  getDescription(): string;
  setDescription(value: string): PartnerLocationBasicInfo;

  getCoordinates(): proto_partner_backend_base_pb.Coordinates | undefined;
  setCoordinates(value?: proto_partner_backend_base_pb.Coordinates): PartnerLocationBasicInfo;
  hasCoordinates(): boolean;
  clearCoordinates(): PartnerLocationBasicInfo;

  getUnit(): string;
  setUnit(value: string): PartnerLocationBasicInfo;

  getNumber(): string;
  setNumber(value: string): PartnerLocationBasicInfo;

  getStreet(): string;
  setStreet(value: string): PartnerLocationBasicInfo;

  getWard(): string;
  setWard(value: string): PartnerLocationBasicInfo;

  getDistrict(): string;
  setDistrict(value: string): PartnerLocationBasicInfo;

  getCity(): string;
  setCity(value: string): PartnerLocationBasicInfo;

  getRegion(): string;
  setRegion(value: string): PartnerLocationBasicInfo;

  getCountry(): string;
  setCountry(value: string): PartnerLocationBasicInfo;

  getPostalCode(): string;
  setPostalCode(value: string): PartnerLocationBasicInfo;

  getFullAddress(): string;
  setFullAddress(value: string): PartnerLocationBasicInfo;

  getSuburban(): string;
  setSuburban(value: string): PartnerLocationBasicInfo;

  getPartnerId(): string;
  setPartnerId(value: string): PartnerLocationBasicInfo;

  getContactInfo(): PartnerLocationContactInfo | undefined;
  setContactInfo(value?: PartnerLocationContactInfo): PartnerLocationBasicInfo;
  hasContactInfo(): boolean;
  clearContactInfo(): PartnerLocationBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnerLocationBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PartnerLocationBasicInfo): PartnerLocationBasicInfo.AsObject;
  static serializeBinaryToWriter(message: PartnerLocationBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnerLocationBasicInfo;
  static deserializeBinaryFromReader(message: PartnerLocationBasicInfo, reader: jspb.BinaryReader): PartnerLocationBasicInfo;
}

export namespace PartnerLocationBasicInfo {
  export type AsObject = {
    name: string,
    description: string,
    coordinates?: proto_partner_backend_base_pb.Coordinates.AsObject,
    unit: string,
    number: string,
    street: string,
    ward: string,
    district: string,
    city: string,
    region: string,
    country: string,
    postalCode: string,
    fullAddress: string,
    suburban: string,
    partnerId: string,
    contactInfo?: PartnerLocationContactInfo.AsObject,
  }
}

export class PartnerLocationListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PartnerLocationListInfo;

  getInfo(): PartnerLocationBasicInfo | undefined;
  setInfo(value?: PartnerLocationBasicInfo): PartnerLocationListInfo;
  hasInfo(): boolean;
  clearInfo(): PartnerLocationListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): PartnerLocationListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): PartnerLocationListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): PartnerLocationListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): PartnerLocationListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnerLocationListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PartnerLocationListInfo): PartnerLocationListInfo.AsObject;
  static serializeBinaryToWriter(message: PartnerLocationListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnerLocationListInfo;
  static deserializeBinaryFromReader(message: PartnerLocationListInfo, reader: jspb.BinaryReader): PartnerLocationListInfo;
}

export namespace PartnerLocationListInfo {
  export type AsObject = {
    id: string,
    info?: PartnerLocationBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class RetrievePartnerLocationReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrievePartnerLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePartnerLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePartnerLocationReq): RetrievePartnerLocationReq.AsObject;
  static serializeBinaryToWriter(message: RetrievePartnerLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePartnerLocationReq;
  static deserializeBinaryFromReader(message: RetrievePartnerLocationReq, reader: jspb.BinaryReader): RetrievePartnerLocationReq;
}

export namespace RetrievePartnerLocationReq {
  export type AsObject = {
    id: string,
  }
}

export class RetrievePartnerLocationRes extends jspb.Message {
  getInfo(): PartnerLocationListInfo | undefined;
  setInfo(value?: PartnerLocationListInfo): RetrievePartnerLocationRes;
  hasInfo(): boolean;
  clearInfo(): RetrievePartnerLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePartnerLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePartnerLocationRes): RetrievePartnerLocationRes.AsObject;
  static serializeBinaryToWriter(message: RetrievePartnerLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePartnerLocationRes;
  static deserializeBinaryFromReader(message: RetrievePartnerLocationRes, reader: jspb.BinaryReader): RetrievePartnerLocationRes;
}

export namespace RetrievePartnerLocationRes {
  export type AsObject = {
    info?: PartnerLocationListInfo.AsObject,
  }
}

