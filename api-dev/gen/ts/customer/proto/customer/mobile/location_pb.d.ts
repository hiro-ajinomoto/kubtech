import * as jspb from 'google-protobuf'

import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';


export class CustomerLocationBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): CustomerLocationBasicInfo;

  getDescription(): string;
  setDescription(value: string): CustomerLocationBasicInfo;

  getCoordinates(): proto_customer_mobile_base_pb.Coordinates | undefined;
  setCoordinates(value?: proto_customer_mobile_base_pb.Coordinates): CustomerLocationBasicInfo;
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
    coordinates?: proto_customer_mobile_base_pb.Coordinates.AsObject,
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

export class CreateMyLocationReq extends jspb.Message {
  getInfo(): CustomerLocationBasicInfo | undefined;
  setInfo(value?: CustomerLocationBasicInfo): CreateMyLocationReq;
  hasInfo(): boolean;
  clearInfo(): CreateMyLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMyLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMyLocationReq): CreateMyLocationReq.AsObject;
  static serializeBinaryToWriter(message: CreateMyLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMyLocationReq;
  static deserializeBinaryFromReader(message: CreateMyLocationReq, reader: jspb.BinaryReader): CreateMyLocationReq;
}

export namespace CreateMyLocationReq {
  export type AsObject = {
    info?: CustomerLocationBasicInfo.AsObject,
  }
}

export class UpdateMyLocationReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMyLocationReq;

  getInfo(): CustomerLocationBasicInfo | undefined;
  setInfo(value?: CustomerLocationBasicInfo): UpdateMyLocationReq;
  hasInfo(): boolean;
  clearInfo(): UpdateMyLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyLocationReq): UpdateMyLocationReq.AsObject;
  static serializeBinaryToWriter(message: UpdateMyLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyLocationReq;
  static deserializeBinaryFromReader(message: UpdateMyLocationReq, reader: jspb.BinaryReader): UpdateMyLocationReq;
}

export namespace UpdateMyLocationReq {
  export type AsObject = {
    id: string,
    info?: CustomerLocationBasicInfo.AsObject,
  }
}

export class DeleteMyLocationReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteMyLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMyLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMyLocationReq): DeleteMyLocationReq.AsObject;
  static serializeBinaryToWriter(message: DeleteMyLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMyLocationReq;
  static deserializeBinaryFromReader(message: DeleteMyLocationReq, reader: jspb.BinaryReader): DeleteMyLocationReq;
}

export namespace DeleteMyLocationReq {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveMyLocationReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveMyLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMyLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMyLocationReq): RetrieveMyLocationReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveMyLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMyLocationReq;
  static deserializeBinaryFromReader(message: RetrieveMyLocationReq, reader: jspb.BinaryReader): RetrieveMyLocationReq;
}

export namespace RetrieveMyLocationReq {
  export type AsObject = {
    id: string,
  }
}

export class ListMyLocationReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListMyLocationReq;

  getPagination(): proto_customer_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_customer_mobile_base_pb.PaginationReq): ListMyLocationReq;
  hasPagination(): boolean;
  clearPagination(): ListMyLocationReq;

  getOrderByList(): Array<proto_customer_mobile_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_customer_mobile_base_pb.OrderByItem>): ListMyLocationReq;
  clearOrderByList(): ListMyLocationReq;
  addOrderBy(value?: proto_customer_mobile_base_pb.OrderByItem, index?: number): proto_customer_mobile_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyLocationReq): ListMyLocationReq.AsObject;
  static serializeBinaryToWriter(message: ListMyLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyLocationReq;
  static deserializeBinaryFromReader(message: ListMyLocationReq, reader: jspb.BinaryReader): ListMyLocationReq;
}

export namespace ListMyLocationReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_customer_mobile_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_customer_mobile_base_pb.OrderByItem.AsObject>,
  }
}

export class CreateMyLocationRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateMyLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMyLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMyLocationRes): CreateMyLocationRes.AsObject;
  static serializeBinaryToWriter(message: CreateMyLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMyLocationRes;
  static deserializeBinaryFromReader(message: CreateMyLocationRes, reader: jspb.BinaryReader): CreateMyLocationRes;
}

export namespace CreateMyLocationRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveMyLocationRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveMyLocationRes;

  getParnershipId(): string;
  setParnershipId(value: string): RetrieveMyLocationRes;

  getInfo(): CustomerLocationBasicInfo | undefined;
  setInfo(value?: CustomerLocationBasicInfo): RetrieveMyLocationRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveMyLocationRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrieveMyLocationRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrieveMyLocationRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrieveMyLocationRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrieveMyLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMyLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMyLocationRes): RetrieveMyLocationRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveMyLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMyLocationRes;
  static deserializeBinaryFromReader(message: RetrieveMyLocationRes, reader: jspb.BinaryReader): RetrieveMyLocationRes;
}

export namespace RetrieveMyLocationRes {
  export type AsObject = {
    id: string,
    parnershipId: string,
    info?: CustomerLocationBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListMyLocationRes extends jspb.Message {
  getInfoList(): Array<CustomerLocationInfo>;
  setInfoList(value: Array<CustomerLocationInfo>): ListMyLocationRes;
  clearInfoList(): ListMyLocationRes;
  addInfo(value?: CustomerLocationInfo, index?: number): CustomerLocationInfo;

  getPagination(): proto_customer_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_customer_mobile_base_pb.PaginationRes): ListMyLocationRes;
  hasPagination(): boolean;
  clearPagination(): ListMyLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyLocationRes): ListMyLocationRes.AsObject;
  static serializeBinaryToWriter(message: ListMyLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyLocationRes;
  static deserializeBinaryFromReader(message: ListMyLocationRes, reader: jspb.BinaryReader): ListMyLocationRes;
}

export namespace ListMyLocationRes {
  export type AsObject = {
    infoList: Array<CustomerLocationInfo.AsObject>,
    pagination?: proto_customer_mobile_base_pb.PaginationRes.AsObject,
  }
}

