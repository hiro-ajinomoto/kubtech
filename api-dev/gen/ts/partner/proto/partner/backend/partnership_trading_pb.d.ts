import * as jspb from 'google-protobuf'



export class CreatePartnershipTradingReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreatePartnershipTradingReq;

  getPassword(): string;
  setPassword(value: string): CreatePartnershipTradingReq;

  getName(): string;
  setName(value: string): CreatePartnershipTradingReq;

  getProfilePicture(): string;
  setProfilePicture(value: string): CreatePartnershipTradingReq;

  getPhoneCode(): string;
  setPhoneCode(value: string): CreatePartnershipTradingReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CreatePartnershipTradingReq;

  getShopName(): string;
  setShopName(value: string): CreatePartnershipTradingReq;

  getShopLogo(): string;
  setShopLogo(value: string): CreatePartnershipTradingReq;

  getShopBanner(): string;
  setShopBanner(value: string): CreatePartnershipTradingReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnershipTradingReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnershipTradingReq): CreatePartnershipTradingReq.AsObject;
  static serializeBinaryToWriter(message: CreatePartnershipTradingReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnershipTradingReq;
  static deserializeBinaryFromReader(message: CreatePartnershipTradingReq, reader: jspb.BinaryReader): CreatePartnershipTradingReq;
}

export namespace CreatePartnershipTradingReq {
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
  }
}

export class CreatePartnershipTradingRes extends jspb.Message {
  getShopId(): string;
  setShopId(value: string): CreatePartnershipTradingRes;

  getShopOwnerId(): string;
  setShopOwnerId(value: string): CreatePartnershipTradingRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnershipTradingRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnershipTradingRes): CreatePartnershipTradingRes.AsObject;
  static serializeBinaryToWriter(message: CreatePartnershipTradingRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnershipTradingRes;
  static deserializeBinaryFromReader(message: CreatePartnershipTradingRes, reader: jspb.BinaryReader): CreatePartnershipTradingRes;
}

export namespace CreatePartnershipTradingRes {
  export type AsObject = {
    shopId: string,
    shopOwnerId: string,
  }
}

