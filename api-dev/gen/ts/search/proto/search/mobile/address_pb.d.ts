import * as jspb from 'google-protobuf'

import * as proto_search_mobile_base_pb from '../../../proto/search/mobile/base_pb';


export class AddressInfo extends jspb.Message {
  getId(): string;
  setId(value: string): AddressInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): AddressInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): AddressInfo;

  getUnit(): string;
  setUnit(value: string): AddressInfo;

  getNumber(): string;
  setNumber(value: string): AddressInfo;

  getStreet(): string;
  setStreet(value: string): AddressInfo;

  getCity(): string;
  setCity(value: string): AddressInfo;

  getDistrict(): string;
  setDistrict(value: string): AddressInfo;

  getRegion(): string;
  setRegion(value: string): AddressInfo;

  getPostcode(): string;
  setPostcode(value: string): AddressInfo;

  getLat(): number;
  setLat(value: number): AddressInfo;

  getLong(): number;
  setLong(value: number): AddressInfo;

  getCountry(): string;
  setCountry(value: string): AddressInfo;

  getFullAddress(): string;
  setFullAddress(value: string): AddressInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AddressInfo): AddressInfo.AsObject;
  static serializeBinaryToWriter(message: AddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressInfo;
  static deserializeBinaryFromReader(message: AddressInfo, reader: jspb.BinaryReader): AddressInfo;
}

export namespace AddressInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    unit: string,
    number: string,
    street: string,
    city: string,
    district: string,
    region: string,
    postcode: string,
    lat: number,
    pb_long: number,
    country: string,
    fullAddress: string,
  }
}

export class SearchAddressReq extends jspb.Message {
  getPagination(): proto_search_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_search_mobile_base_pb.PaginationReq): SearchAddressReq;
  hasPagination(): boolean;
  clearPagination(): SearchAddressReq;

  getAddress(): string;
  setAddress(value: string): SearchAddressReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAddressReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAddressReq): SearchAddressReq.AsObject;
  static serializeBinaryToWriter(message: SearchAddressReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAddressReq;
  static deserializeBinaryFromReader(message: SearchAddressReq, reader: jspb.BinaryReader): SearchAddressReq;
}

export namespace SearchAddressReq {
  export type AsObject = {
    pagination?: proto_search_mobile_base_pb.PaginationReq.AsObject,
    address: string,
  }
}

export class SearchByPostcodeReq extends jspb.Message {
  getPagination(): proto_search_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_search_mobile_base_pb.PaginationReq): SearchByPostcodeReq;
  hasPagination(): boolean;
  clearPagination(): SearchByPostcodeReq;

  getPostcode(): string;
  setPostcode(value: string): SearchByPostcodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchByPostcodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchByPostcodeReq): SearchByPostcodeReq.AsObject;
  static serializeBinaryToWriter(message: SearchByPostcodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchByPostcodeReq;
  static deserializeBinaryFromReader(message: SearchByPostcodeReq, reader: jspb.BinaryReader): SearchByPostcodeReq;
}

export namespace SearchByPostcodeReq {
  export type AsObject = {
    pagination?: proto_search_mobile_base_pb.PaginationReq.AsObject,
    postcode: string,
  }
}

export class SearchAddressRes extends jspb.Message {
  getPagination(): proto_search_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_search_mobile_base_pb.PaginationRes): SearchAddressRes;
  hasPagination(): boolean;
  clearPagination(): SearchAddressRes;

  getResultsList(): Array<AddressInfo>;
  setResultsList(value: Array<AddressInfo>): SearchAddressRes;
  clearResultsList(): SearchAddressRes;
  addResults(value?: AddressInfo, index?: number): AddressInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAddressRes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAddressRes): SearchAddressRes.AsObject;
  static serializeBinaryToWriter(message: SearchAddressRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAddressRes;
  static deserializeBinaryFromReader(message: SearchAddressRes, reader: jspb.BinaryReader): SearchAddressRes;
}

export namespace SearchAddressRes {
  export type AsObject = {
    pagination?: proto_search_mobile_base_pb.PaginationRes.AsObject,
    resultsList: Array<AddressInfo.AsObject>,
  }
}

export class SearchByPostcodeRes extends jspb.Message {
  getResult(): AddressInfo | undefined;
  setResult(value?: AddressInfo): SearchByPostcodeRes;
  hasResult(): boolean;
  clearResult(): SearchByPostcodeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchByPostcodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: SearchByPostcodeRes): SearchByPostcodeRes.AsObject;
  static serializeBinaryToWriter(message: SearchByPostcodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchByPostcodeRes;
  static deserializeBinaryFromReader(message: SearchByPostcodeRes, reader: jspb.BinaryReader): SearchByPostcodeRes;
}

export namespace SearchByPostcodeRes {
  export type AsObject = {
    result?: AddressInfo.AsObject,
  }
}

