import * as jspb from 'google-protobuf'

import * as proto_partnership_web_admin_base_pb from '../../../proto/partnership/web_admin/base_pb';


export class PartnershipBasicInfo extends jspb.Message {
  getCodeName(): string;
  setCodeName(value: string): PartnershipBasicInfo;

  getFullName(): string;
  setFullName(value: string): PartnershipBasicInfo;

  getColor(): string;
  setColor(value: string): PartnershipBasicInfo;

  getSlogan(): string;
  setSlogan(value: string): PartnershipBasicInfo;

  getLogo(): string;
  setLogo(value: string): PartnershipBasicInfo;

  getIsMaintenance(): boolean;
  setIsMaintenance(value: boolean): PartnershipBasicInfo;

  getAppIosVersion(): string;
  setAppIosVersion(value: string): PartnershipBasicInfo;

  getAppAndroidVersion(): string;
  setAppAndroidVersion(value: string): PartnershipBasicInfo;

  getIsForceUpdate(): boolean;
  setIsForceUpdate(value: boolean): PartnershipBasicInfo;

  getUrls(): PartnershipURLs | undefined;
  setUrls(value?: PartnershipURLs): PartnershipBasicInfo;
  hasUrls(): boolean;
  clearUrls(): PartnershipBasicInfo;

  getShowPaymentTerms(): boolean;
  setShowPaymentTerms(value: boolean): PartnershipBasicInfo;

  getAndroidTvVersion(): string;
  setAndroidTvVersion(value: string): PartnershipBasicInfo;

  getAppleTvVersion(): string;
  setAppleTvVersion(value: string): PartnershipBasicInfo;

  getTvIsForceUpdate(): boolean;
  setTvIsForceUpdate(value: boolean): PartnershipBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnershipBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PartnershipBasicInfo): PartnershipBasicInfo.AsObject;
  static serializeBinaryToWriter(message: PartnershipBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnershipBasicInfo;
  static deserializeBinaryFromReader(message: PartnershipBasicInfo, reader: jspb.BinaryReader): PartnershipBasicInfo;
}

export namespace PartnershipBasicInfo {
  export type AsObject = {
    codeName: string,
    fullName: string,
    color: string,
    slogan: string,
    logo: string,
    isMaintenance: boolean,
    appIosVersion: string,
    appAndroidVersion: string,
    isForceUpdate: boolean,
    urls?: PartnershipURLs.AsObject,
    showPaymentTerms: boolean,
    androidTvVersion: string,
    appleTvVersion: string,
    tvIsForceUpdate: boolean,
  }
}

export class PartnershipListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PartnershipListInfo;

  getCodeName(): string;
  setCodeName(value: string): PartnershipListInfo;

  getFullName(): string;
  setFullName(value: string): PartnershipListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): PartnershipListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): PartnershipListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): PartnershipListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): PartnershipListInfo;

  getIsMaintenance(): boolean;
  setIsMaintenance(value: boolean): PartnershipListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnershipListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PartnershipListInfo): PartnershipListInfo.AsObject;
  static serializeBinaryToWriter(message: PartnershipListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnershipListInfo;
  static deserializeBinaryFromReader(message: PartnershipListInfo, reader: jspb.BinaryReader): PartnershipListInfo;
}

export namespace PartnershipListInfo {
  export type AsObject = {
    id: string,
    codeName: string,
    fullName: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    isMaintenance: boolean,
  }
}

export class PartnershipURLs extends jspb.Message {
  getUrlContact(): string;
  setUrlContact(value: string): PartnershipURLs;

  getUrlInstruction(): string;
  setUrlInstruction(value: string): PartnershipURLs;

  getUrlTerm(): string;
  setUrlTerm(value: string): PartnershipURLs;

  getUrlPolicy(): string;
  setUrlPolicy(value: string): PartnershipURLs;

  getUrlSupport(): string;
  setUrlSupport(value: string): PartnershipURLs;

  getUrlSafetyForm(): string;
  setUrlSafetyForm(value: string): PartnershipURLs;

  getUrlRegulations(): string;
  setUrlRegulations(value: string): PartnershipURLs;

  getUrlInspectorSeatMap(): string;
  setUrlInspectorSeatMap(value: string): PartnershipURLs;

  getUrlInspectorInstruction(): string;
  setUrlInspectorInstruction(value: string): PartnershipURLs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnershipURLs.AsObject;
  static toObject(includeInstance: boolean, msg: PartnershipURLs): PartnershipURLs.AsObject;
  static serializeBinaryToWriter(message: PartnershipURLs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnershipURLs;
  static deserializeBinaryFromReader(message: PartnershipURLs, reader: jspb.BinaryReader): PartnershipURLs;
}

export namespace PartnershipURLs {
  export type AsObject = {
    urlContact: string,
    urlInstruction: string,
    urlTerm: string,
    urlPolicy: string,
    urlSupport: string,
    urlSafetyForm: string,
    urlRegulations: string,
    urlInspectorSeatMap: string,
    urlInspectorInstruction: string,
  }
}

export class CreatePartnershipReq extends jspb.Message {
  getCodeName(): string;
  setCodeName(value: string): CreatePartnershipReq;

  getFullName(): string;
  setFullName(value: string): CreatePartnershipReq;

  getColor(): string;
  setColor(value: string): CreatePartnershipReq;

  getSlogan(): string;
  setSlogan(value: string): CreatePartnershipReq;

  getLogo(): string;
  setLogo(value: string): CreatePartnershipReq;

  getOwnerName(): string;
  setOwnerName(value: string): CreatePartnershipReq;

  getOwnerPhoneCode(): string;
  setOwnerPhoneCode(value: string): CreatePartnershipReq;

  getOwnerPhoneNumber(): string;
  setOwnerPhoneNumber(value: string): CreatePartnershipReq;

  getOwnerEmail(): string;
  setOwnerEmail(value: string): CreatePartnershipReq;

  getOwnerPassword(): string;
  setOwnerPassword(value: string): CreatePartnershipReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnershipReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnershipReq): CreatePartnershipReq.AsObject;
  static serializeBinaryToWriter(message: CreatePartnershipReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnershipReq;
  static deserializeBinaryFromReader(message: CreatePartnershipReq, reader: jspb.BinaryReader): CreatePartnershipReq;
}

export namespace CreatePartnershipReq {
  export type AsObject = {
    codeName: string,
    fullName: string,
    color: string,
    slogan: string,
    logo: string,
    ownerName: string,
    ownerPhoneCode: string,
    ownerPhoneNumber: string,
    ownerEmail: string,
    ownerPassword: string,
  }
}

export class ListPartnershipReq extends jspb.Message {
  getName(): string;
  setName(value: string): ListPartnershipReq;

  getPagination(): proto_partnership_web_admin_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_web_admin_base_pb.PaginationReq): ListPartnershipReq;
  hasPagination(): boolean;
  clearPagination(): ListPartnershipReq;

  getOrderByList(): Array<proto_partnership_web_admin_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_web_admin_base_pb.OrderByItem>): ListPartnershipReq;
  clearOrderByList(): ListPartnershipReq;
  addOrderBy(value?: proto_partnership_web_admin_base_pb.OrderByItem, index?: number): proto_partnership_web_admin_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnershipReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnershipReq): ListPartnershipReq.AsObject;
  static serializeBinaryToWriter(message: ListPartnershipReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnershipReq;
  static deserializeBinaryFromReader(message: ListPartnershipReq, reader: jspb.BinaryReader): ListPartnershipReq;
}

export namespace ListPartnershipReq {
  export type AsObject = {
    name: string,
    pagination?: proto_partnership_web_admin_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_web_admin_base_pb.OrderByItem.AsObject>,
  }
}

export class RetrievePartnershipReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrievePartnershipReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePartnershipReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePartnershipReq): RetrievePartnershipReq.AsObject;
  static serializeBinaryToWriter(message: RetrievePartnershipReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePartnershipReq;
  static deserializeBinaryFromReader(message: RetrievePartnershipReq, reader: jspb.BinaryReader): RetrievePartnershipReq;
}

export namespace RetrievePartnershipReq {
  export type AsObject = {
    id: string,
  }
}

export class CreatePartnershipRes extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): CreatePartnershipRes;

  getPartnershipOwnerId(): string;
  setPartnershipOwnerId(value: string): CreatePartnershipRes;

  getShopId(): string;
  setShopId(value: string): CreatePartnershipRes;

  getShopOwnerId(): string;
  setShopOwnerId(value: string): CreatePartnershipRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnershipRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnershipRes): CreatePartnershipRes.AsObject;
  static serializeBinaryToWriter(message: CreatePartnershipRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnershipRes;
  static deserializeBinaryFromReader(message: CreatePartnershipRes, reader: jspb.BinaryReader): CreatePartnershipRes;
}

export namespace CreatePartnershipRes {
  export type AsObject = {
    partnershipId: string,
    partnershipOwnerId: string,
    shopId: string,
    shopOwnerId: string,
  }
}

export class RetrievePartnershipRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrievePartnershipRes;

  getInfo(): PartnershipBasicInfo | undefined;
  setInfo(value?: PartnershipBasicInfo): RetrievePartnershipRes;
  hasInfo(): boolean;
  clearInfo(): RetrievePartnershipRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrievePartnershipRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrievePartnershipRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrievePartnershipRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrievePartnershipRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePartnershipRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePartnershipRes): RetrievePartnershipRes.AsObject;
  static serializeBinaryToWriter(message: RetrievePartnershipRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePartnershipRes;
  static deserializeBinaryFromReader(message: RetrievePartnershipRes, reader: jspb.BinaryReader): RetrievePartnershipRes;
}

export namespace RetrievePartnershipRes {
  export type AsObject = {
    id: string,
    info?: PartnershipBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListPartnershipRes extends jspb.Message {
  getInfoList(): Array<PartnershipListInfo>;
  setInfoList(value: Array<PartnershipListInfo>): ListPartnershipRes;
  clearInfoList(): ListPartnershipRes;
  addInfo(value?: PartnershipListInfo, index?: number): PartnershipListInfo;

  getPagination(): proto_partnership_web_admin_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_web_admin_base_pb.PaginationRes): ListPartnershipRes;
  hasPagination(): boolean;
  clearPagination(): ListPartnershipRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnershipRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnershipRes): ListPartnershipRes.AsObject;
  static serializeBinaryToWriter(message: ListPartnershipRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnershipRes;
  static deserializeBinaryFromReader(message: ListPartnershipRes, reader: jspb.BinaryReader): ListPartnershipRes;
}

export namespace ListPartnershipRes {
  export type AsObject = {
    infoList: Array<PartnershipListInfo.AsObject>,
    pagination?: proto_partnership_web_admin_base_pb.PaginationRes.AsObject,
  }
}

export class PublicGetPartnershipByCodeRes extends jspb.Message {
  getId(): string;
  setId(value: string): PublicGetPartnershipByCodeRes;

  getInfo(): PartnershipBasicInfo | undefined;
  setInfo(value?: PartnershipBasicInfo): PublicGetPartnershipByCodeRes;
  hasInfo(): boolean;
  clearInfo(): PublicGetPartnershipByCodeRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): PublicGetPartnershipByCodeRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): PublicGetPartnershipByCodeRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): PublicGetPartnershipByCodeRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): PublicGetPartnershipByCodeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicGetPartnershipByCodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicGetPartnershipByCodeRes): PublicGetPartnershipByCodeRes.AsObject;
  static serializeBinaryToWriter(message: PublicGetPartnershipByCodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicGetPartnershipByCodeRes;
  static deserializeBinaryFromReader(message: PublicGetPartnershipByCodeRes, reader: jspb.BinaryReader): PublicGetPartnershipByCodeRes;
}

export namespace PublicGetPartnershipByCodeRes {
  export type AsObject = {
    id: string,
    info?: PartnershipBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

