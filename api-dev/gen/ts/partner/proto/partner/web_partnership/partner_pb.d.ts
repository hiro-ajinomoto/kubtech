import * as jspb from 'google-protobuf'



export class PartnerShopInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PartnerShopInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): PartnerShopInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): PartnerShopInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): PartnerShopInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): PartnerShopInfo;

  getName(): string;
  setName(value: string): PartnerShopInfo;

  getLogo(): string;
  setLogo(value: string): PartnerShopInfo;

  getBanner(): string;
  setBanner(value: string): PartnerShopInfo;

  getDocumentsList(): Array<string>;
  setDocumentsList(value: Array<string>): PartnerShopInfo;
  clearDocumentsList(): PartnerShopInfo;
  addDocuments(value: string, index?: number): PartnerShopInfo;

  getType(): PartnerType;
  setType(value: PartnerType): PartnerShopInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnerShopInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PartnerShopInfo): PartnerShopInfo.AsObject;
  static serializeBinaryToWriter(message: PartnerShopInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnerShopInfo;
  static deserializeBinaryFromReader(message: PartnerShopInfo, reader: jspb.BinaryReader): PartnerShopInfo;
}

export namespace PartnerShopInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    name: string,
    logo: string,
    banner: string,
    documentsList: Array<string>,
    type: PartnerType,
  }
}

export class CreatePartnerReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreatePartnerReq;

  getPassword(): string;
  setPassword(value: string): CreatePartnerReq;

  getName(): string;
  setName(value: string): CreatePartnerReq;

  getProfilePicture(): string;
  setProfilePicture(value: string): CreatePartnerReq;

  getPhoneCode(): string;
  setPhoneCode(value: string): CreatePartnerReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CreatePartnerReq;

  getShopName(): string;
  setShopName(value: string): CreatePartnerReq;

  getShopLogo(): string;
  setShopLogo(value: string): CreatePartnerReq;

  getShopBanner(): string;
  setShopBanner(value: string): CreatePartnerReq;

  getDocumentsList(): Array<string>;
  setDocumentsList(value: Array<string>): CreatePartnerReq;
  clearDocumentsList(): CreatePartnerReq;
  addDocuments(value: string, index?: number): CreatePartnerReq;

  getType(): PartnerType;
  setType(value: PartnerType): CreatePartnerReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnerReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnerReq): CreatePartnerReq.AsObject;
  static serializeBinaryToWriter(message: CreatePartnerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnerReq;
  static deserializeBinaryFromReader(message: CreatePartnerReq, reader: jspb.BinaryReader): CreatePartnerReq;
}

export namespace CreatePartnerReq {
  export type AsObject = {
    email: string,
    password: string,
    name: string,
    profilePicture: string,
    phoneCode: string,
    phoneNumber: string,
    shopName: string,
    shopLogo: string,
    shopBanner: string,
    documentsList: Array<string>,
    type: PartnerType,
  }
}

export class CreatePartnerRes extends jspb.Message {
  getOwnerId(): string;
  setOwnerId(value: string): CreatePartnerRes;

  getShopId(): string;
  setShopId(value: string): CreatePartnerRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnerRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnerRes): CreatePartnerRes.AsObject;
  static serializeBinaryToWriter(message: CreatePartnerRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnerRes;
  static deserializeBinaryFromReader(message: CreatePartnerRes, reader: jspb.BinaryReader): CreatePartnerRes;
}

export namespace CreatePartnerRes {
  export type AsObject = {
    ownerId: string,
    shopId: string,
  }
}

export enum PartnerType { 
  PARTNER_TYPE_INVALID = 0,
  PARTNER_TYPE_PERSONAL = 1,
  PARTNER_TYPE_ORGANIZATION = 2,
}
