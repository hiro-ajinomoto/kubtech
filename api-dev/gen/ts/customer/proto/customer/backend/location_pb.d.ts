import * as jspb from 'google-protobuf'

import * as proto_customer_backend_base_pb from '../../../proto/customer/backend/base_pb';


export class CustomerLocationBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): CustomerLocationBasicInfo;

  getDescription(): string;
  setDescription(value: string): CustomerLocationBasicInfo;

  getCoordinates(): proto_customer_backend_base_pb.Coordinates | undefined;
  setCoordinates(value?: proto_customer_backend_base_pb.Coordinates): CustomerLocationBasicInfo;
  hasCoordinates(): boolean;
  clearCoordinates(): CustomerLocationBasicInfo;

  getUnit(): string;
  setUnit(value: string): CustomerLocationBasicInfo;

  getNumber(): string;
  setNumber(value: string): CustomerLocationBasicInfo;

  getStreet(): string;
  setStreet(value: string): CustomerLocationBasicInfo;

  getWard(): string;
  setWard(value: string): CustomerLocationBasicInfo;

  getDistrict(): string;
  setDistrict(value: string): CustomerLocationBasicInfo;

  getCity(): string;
  setCity(value: string): CustomerLocationBasicInfo;

  getRegion(): string;
  setRegion(value: string): CustomerLocationBasicInfo;

  getCountry(): string;
  setCountry(value: string): CustomerLocationBasicInfo;

  getPostalCode(): string;
  setPostalCode(value: string): CustomerLocationBasicInfo;

  getFullAddress(): string;
  setFullAddress(value: string): CustomerLocationBasicInfo;

  getSuburban(): string;
  setSuburban(value: string): CustomerLocationBasicInfo;

  getUserFullName(): string;
  setUserFullName(value: string): CustomerLocationBasicInfo;

  getUserPhoneCode(): string;
  setUserPhoneCode(value: string): CustomerLocationBasicInfo;

  getUserPhoneNumber(): string;
  setUserPhoneNumber(value: string): CustomerLocationBasicInfo;

  getCustomerId(): string;
  setCustomerId(value: string): CustomerLocationBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLocationBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLocationBasicInfo): CustomerLocationBasicInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerLocationBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLocationBasicInfo;
  static deserializeBinaryFromReader(message: CustomerLocationBasicInfo, reader: jspb.BinaryReader): CustomerLocationBasicInfo;
}

export namespace CustomerLocationBasicInfo {
  export type AsObject = {
    name: string,
    description: string,
    coordinates?: proto_customer_backend_base_pb.Coordinates.AsObject,
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
    userFullName: string,
    userPhoneCode: string,
    userPhoneNumber: string,
    customerId: string,
  }
}

export class CustomerLocationInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerLocationInfo;

  getInfo(): CustomerLocationBasicInfo | undefined;
  setInfo(value?: CustomerLocationBasicInfo): CustomerLocationInfo;
  hasInfo(): boolean;
  clearInfo(): CustomerLocationInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): CustomerLocationInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CustomerLocationInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): CustomerLocationInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): CustomerLocationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLocationInfo): CustomerLocationInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerLocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLocationInfo;
  static deserializeBinaryFromReader(message: CustomerLocationInfo, reader: jspb.BinaryReader): CustomerLocationInfo;
}

export namespace CustomerLocationInfo {
  export type AsObject = {
    id: string,
    info?: CustomerLocationBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class RetrieveCustomerLocationReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveCustomerLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveCustomerLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveCustomerLocationReq): RetrieveCustomerLocationReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveCustomerLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveCustomerLocationReq;
  static deserializeBinaryFromReader(message: RetrieveCustomerLocationReq, reader: jspb.BinaryReader): RetrieveCustomerLocationReq;
}

export namespace RetrieveCustomerLocationReq {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveCustomerLocationRes extends jspb.Message {
  getInfo(): CustomerLocationInfo | undefined;
  setInfo(value?: CustomerLocationInfo): RetrieveCustomerLocationRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveCustomerLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveCustomerLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveCustomerLocationRes): RetrieveCustomerLocationRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveCustomerLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveCustomerLocationRes;
  static deserializeBinaryFromReader(message: RetrieveCustomerLocationRes, reader: jspb.BinaryReader): RetrieveCustomerLocationRes;
}

export namespace RetrieveCustomerLocationRes {
  export type AsObject = {
    info?: CustomerLocationInfo.AsObject,
  }
}

