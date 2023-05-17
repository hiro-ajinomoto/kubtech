import * as jspb from 'google-protobuf'

import * as proto_partner_mobile_base_pb from '../../../proto/partner/mobile/base_pb';


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

  getCoordinates(): proto_partner_mobile_base_pb.Coordinates | undefined;
  setCoordinates(value?: proto_partner_mobile_base_pb.Coordinates): PartnerLocationBasicInfo;
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
    coordinates?: proto_partner_mobile_base_pb.Coordinates.AsObject,
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

export class CreatePartnerLocationReq extends jspb.Message {
  getInfo(): PartnerLocationBasicInfo | undefined;
  setInfo(value?: PartnerLocationBasicInfo): CreatePartnerLocationReq;
  hasInfo(): boolean;
  clearInfo(): CreatePartnerLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnerLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnerLocationReq): CreatePartnerLocationReq.AsObject;
  static serializeBinaryToWriter(message: CreatePartnerLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnerLocationReq;
  static deserializeBinaryFromReader(message: CreatePartnerLocationReq, reader: jspb.BinaryReader): CreatePartnerLocationReq;
}

export namespace CreatePartnerLocationReq {
  export type AsObject = {
    info?: PartnerLocationBasicInfo.AsObject,
  }
}

export class UpdatePartnerLocationReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdatePartnerLocationReq;

  getInfo(): PartnerLocationBasicInfo | undefined;
  setInfo(value?: PartnerLocationBasicInfo): UpdatePartnerLocationReq;
  hasInfo(): boolean;
  clearInfo(): UpdatePartnerLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePartnerLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePartnerLocationReq): UpdatePartnerLocationReq.AsObject;
  static serializeBinaryToWriter(message: UpdatePartnerLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePartnerLocationReq;
  static deserializeBinaryFromReader(message: UpdatePartnerLocationReq, reader: jspb.BinaryReader): UpdatePartnerLocationReq;
}

export namespace UpdatePartnerLocationReq {
  export type AsObject = {
    id: string,
    info?: PartnerLocationBasicInfo.AsObject,
  }
}

export class DeletePartnerLocationReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeletePartnerLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePartnerLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePartnerLocationReq): DeletePartnerLocationReq.AsObject;
  static serializeBinaryToWriter(message: DeletePartnerLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePartnerLocationReq;
  static deserializeBinaryFromReader(message: DeletePartnerLocationReq, reader: jspb.BinaryReader): DeletePartnerLocationReq;
}

export namespace DeletePartnerLocationReq {
  export type AsObject = {
    id: string,
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

export class ListPartnerFilter extends jspb.Message {
  getPartnerId(): string;
  setPartnerId(value: string): ListPartnerFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnerFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnerFilter): ListPartnerFilter.AsObject;
  static serializeBinaryToWriter(message: ListPartnerFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnerFilter;
  static deserializeBinaryFromReader(message: ListPartnerFilter, reader: jspb.BinaryReader): ListPartnerFilter;
}

export namespace ListPartnerFilter {
  export type AsObject = {
    partnerId: string,
  }
}

export class ListPartnerLocationReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListPartnerLocationReq;

  getPagination(): proto_partner_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partner_mobile_base_pb.PaginationReq): ListPartnerLocationReq;
  hasPagination(): boolean;
  clearPagination(): ListPartnerLocationReq;

  getOrderByList(): Array<proto_partner_mobile_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partner_mobile_base_pb.OrderByItem>): ListPartnerLocationReq;
  clearOrderByList(): ListPartnerLocationReq;
  addOrderBy(value?: proto_partner_mobile_base_pb.OrderByItem, index?: number): proto_partner_mobile_base_pb.OrderByItem;

  getFilter(): ListPartnerFilter | undefined;
  setFilter(value?: ListPartnerFilter): ListPartnerLocationReq;
  hasFilter(): boolean;
  clearFilter(): ListPartnerLocationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnerLocationReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnerLocationReq): ListPartnerLocationReq.AsObject;
  static serializeBinaryToWriter(message: ListPartnerLocationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnerLocationReq;
  static deserializeBinaryFromReader(message: ListPartnerLocationReq, reader: jspb.BinaryReader): ListPartnerLocationReq;
}

export namespace ListPartnerLocationReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partner_mobile_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partner_mobile_base_pb.OrderByItem.AsObject>,
    filter?: ListPartnerFilter.AsObject,
  }
}

export class CreatePartnerLocationRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreatePartnerLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnerLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnerLocationRes): CreatePartnerLocationRes.AsObject;
  static serializeBinaryToWriter(message: CreatePartnerLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnerLocationRes;
  static deserializeBinaryFromReader(message: CreatePartnerLocationRes, reader: jspb.BinaryReader): CreatePartnerLocationRes;
}

export namespace CreatePartnerLocationRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrievePartnerLocationRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrievePartnerLocationRes;

  getPartnershipId(): string;
  setPartnershipId(value: string): RetrievePartnerLocationRes;

  getInfo(): PartnerLocationBasicInfo | undefined;
  setInfo(value?: PartnerLocationBasicInfo): RetrievePartnerLocationRes;
  hasInfo(): boolean;
  clearInfo(): RetrievePartnerLocationRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrievePartnerLocationRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrievePartnerLocationRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrievePartnerLocationRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrievePartnerLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePartnerLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePartnerLocationRes): RetrievePartnerLocationRes.AsObject;
  static serializeBinaryToWriter(message: RetrievePartnerLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePartnerLocationRes;
  static deserializeBinaryFromReader(message: RetrievePartnerLocationRes, reader: jspb.BinaryReader): RetrievePartnerLocationRes;
}

export namespace RetrievePartnerLocationRes {
  export type AsObject = {
    id: string,
    partnershipId: string,
    info?: PartnerLocationBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListPartnerLocationRes extends jspb.Message {
  getInfoList(): Array<PartnerLocationListInfo>;
  setInfoList(value: Array<PartnerLocationListInfo>): ListPartnerLocationRes;
  clearInfoList(): ListPartnerLocationRes;
  addInfo(value?: PartnerLocationListInfo, index?: number): PartnerLocationListInfo;

  getPagination(): proto_partner_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partner_mobile_base_pb.PaginationRes): ListPartnerLocationRes;
  hasPagination(): boolean;
  clearPagination(): ListPartnerLocationRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnerLocationRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnerLocationRes): ListPartnerLocationRes.AsObject;
  static serializeBinaryToWriter(message: ListPartnerLocationRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnerLocationRes;
  static deserializeBinaryFromReader(message: ListPartnerLocationRes, reader: jspb.BinaryReader): ListPartnerLocationRes;
}

export namespace ListPartnerLocationRes {
  export type AsObject = {
    infoList: Array<PartnerLocationListInfo.AsObject>,
    pagination?: proto_partner_mobile_base_pb.PaginationRes.AsObject,
  }
}

