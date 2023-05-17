import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';


export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): Product;

  getQuantity(): string;
  setQuantity(value: string): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: string,
    quantity: string,
  }
}

export class UserInfo extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): UserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getType(): base_base_pb.AuthenticationType;
  setType(value: base_base_pb.AuthenticationType): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    email: string,
    type: base_base_pb.AuthenticationType,
  }
}

export class ExportTicketsReq extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): ExportTicketsReq;

  getScheduleId(): string;
  setScheduleId(value: string): ExportTicketsReq;

  getItemsList(): Array<Product>;
  setItemsList(value: Array<Product>): ExportTicketsReq;
  clearItemsList(): ExportTicketsReq;
  addItems(value?: Product, index?: number): Product;

  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): ExportTicketsReq;
  hasUserInfo(): boolean;
  clearUserInfo(): ExportTicketsReq;

  getDescription(): string;
  setDescription(value: string): ExportTicketsReq;

  getIsPiublish(): boolean;
  setIsPiublish(value: boolean): ExportTicketsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportTicketsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExportTicketsReq): ExportTicketsReq.AsObject;
  static serializeBinaryToWriter(message: ExportTicketsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportTicketsReq;
  static deserializeBinaryFromReader(message: ExportTicketsReq, reader: jspb.BinaryReader): ExportTicketsReq;
}

export namespace ExportTicketsReq {
  export type AsObject = {
    eventId: string,
    scheduleId: string,
    itemsList: Array<Product.AsObject>,
    userInfo?: UserInfo.AsObject,
    description: string,
    isPiublish: boolean,
  }
}

export enum UserInfoType { 
  USERINFOTYPENONE = 0,
  USERINFOTYPEPHONE = 1,
  USERINFOTYPEEMAIL = 2,
}
