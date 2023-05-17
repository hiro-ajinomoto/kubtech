import * as jspb from 'google-protobuf'

import * as ticket_mobile_base_pb from '../../ticket/mobile/base_pb';


export class SafetyFormInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SafetyFormInfo;

  getTicketId(): string;
  setTicketId(value: string): SafetyFormInfo;

  getUserId(): string;
  setUserId(value: string): SafetyFormInfo;

  getIsUnsafe(): boolean;
  setIsUnsafe(value: boolean): SafetyFormInfo;

  getIsSymptomatic(): boolean;
  setIsSymptomatic(value: boolean): SafetyFormInfo;

  getIsInjected(): boolean;
  setIsInjected(value: boolean): SafetyFormInfo;

  getInjectionsList(): Array<InjectionInfo>;
  setInjectionsList(value: Array<InjectionInfo>): SafetyFormInfo;
  clearInjectionsList(): SafetyFormInfo;
  addInjections(value?: InjectionInfo, index?: number): InjectionInfo;

  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): SafetyFormInfo;
  clearAttachmentsList(): SafetyFormInfo;
  addAttachments(value: string, index?: number): SafetyFormInfo;

  getUserInfo(): SafetyFormUserInfo | undefined;
  setUserInfo(value?: SafetyFormUserInfo): SafetyFormInfo;
  hasUserInfo(): boolean;
  clearUserInfo(): SafetyFormInfo;

  getDeclaredAt(): string;
  setDeclaredAt(value: string): SafetyFormInfo;

  getFactorTest(): FactorTestInfo | undefined;
  setFactorTest(value?: FactorTestInfo): SafetyFormInfo;
  hasFactorTest(): boolean;
  clearFactorTest(): SafetyFormInfo;

  getInjectionNumber(): number;
  setInjectionNumber(value: number): SafetyFormInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): SafetyFormInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SafetyFormInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SafetyFormInfo): SafetyFormInfo.AsObject;
  static serializeBinaryToWriter(message: SafetyFormInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SafetyFormInfo;
  static deserializeBinaryFromReader(message: SafetyFormInfo, reader: jspb.BinaryReader): SafetyFormInfo;
}

export namespace SafetyFormInfo {
  export type AsObject = {
    id: string,
    ticketId: string,
    userId: string,
    isUnsafe: boolean,
    isSymptomatic: boolean,
    isInjected: boolean,
    injectionsList: Array<InjectionInfo.AsObject>,
    attachmentsList: Array<string>,
    userInfo?: SafetyFormUserInfo.AsObject,
    declaredAt: string,
    factorTest?: FactorTestInfo.AsObject,
    injectionNumber: number,
    partnershipId: string,
  }
}

export class InjectionInfo extends jspb.Message {
  getInjectedAt(): string;
  setInjectedAt(value: string): InjectionInfo;

  getVaccineType(): string;
  setVaccineType(value: string): InjectionInfo;

  getOtherVaccineType(): string;
  setOtherVaccineType(value: string): InjectionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InjectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InjectionInfo): InjectionInfo.AsObject;
  static serializeBinaryToWriter(message: InjectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InjectionInfo;
  static deserializeBinaryFromReader(message: InjectionInfo, reader: jspb.BinaryReader): InjectionInfo;
}

export namespace InjectionInfo {
  export type AsObject = {
    injectedAt: string,
    vaccineType: string,
    otherVaccineType: string,
  }
}

export class SafetyFormUserInfo extends jspb.Message {
  getUserFullName(): string;
  setUserFullName(value: string): SafetyFormUserInfo;

  getContact(): string;
  setContact(value: string): SafetyFormUserInfo;

  getCompanyName(): string;
  setCompanyName(value: string): SafetyFormUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SafetyFormUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SafetyFormUserInfo): SafetyFormUserInfo.AsObject;
  static serializeBinaryToWriter(message: SafetyFormUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SafetyFormUserInfo;
  static deserializeBinaryFromReader(message: SafetyFormUserInfo, reader: jspb.BinaryReader): SafetyFormUserInfo;
}

export namespace SafetyFormUserInfo {
  export type AsObject = {
    userFullName: string,
    contact: string,
    companyName: string,
  }
}

export class FactorTestInfo extends jspb.Message {
  getTestDate(): string;
  setTestDate(value: string): FactorTestInfo;

  getIsPositive(): boolean;
  setIsPositive(value: boolean): FactorTestInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactorTestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FactorTestInfo): FactorTestInfo.AsObject;
  static serializeBinaryToWriter(message: FactorTestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactorTestInfo;
  static deserializeBinaryFromReader(message: FactorTestInfo, reader: jspb.BinaryReader): FactorTestInfo;
}

export namespace FactorTestInfo {
  export type AsObject = {
    testDate: string,
    isPositive: boolean,
  }
}

export class DeclareSafetyFormReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): DeclareSafetyFormReq;

  getIsUnsafe(): boolean;
  setIsUnsafe(value: boolean): DeclareSafetyFormReq;

  getIsSymptomatic(): boolean;
  setIsSymptomatic(value: boolean): DeclareSafetyFormReq;

  getIsInjected(): boolean;
  setIsInjected(value: boolean): DeclareSafetyFormReq;

  getInjectionsList(): Array<InjectionInfo>;
  setInjectionsList(value: Array<InjectionInfo>): DeclareSafetyFormReq;
  clearInjectionsList(): DeclareSafetyFormReq;
  addInjections(value?: InjectionInfo, index?: number): InjectionInfo;

  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): DeclareSafetyFormReq;
  clearAttachmentsList(): DeclareSafetyFormReq;
  addAttachments(value: string, index?: number): DeclareSafetyFormReq;

  getUserInfo(): SafetyFormUserInfo | undefined;
  setUserInfo(value?: SafetyFormUserInfo): DeclareSafetyFormReq;
  hasUserInfo(): boolean;
  clearUserInfo(): DeclareSafetyFormReq;

  getFactorTest(): FactorTestInfo | undefined;
  setFactorTest(value?: FactorTestInfo): DeclareSafetyFormReq;
  hasFactorTest(): boolean;
  clearFactorTest(): DeclareSafetyFormReq;

  getInjectionNumber(): number;
  setInjectionNumber(value: number): DeclareSafetyFormReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): DeclareSafetyFormReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclareSafetyFormReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeclareSafetyFormReq): DeclareSafetyFormReq.AsObject;
  static serializeBinaryToWriter(message: DeclareSafetyFormReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclareSafetyFormReq;
  static deserializeBinaryFromReader(message: DeclareSafetyFormReq, reader: jspb.BinaryReader): DeclareSafetyFormReq;
}

export namespace DeclareSafetyFormReq {
  export type AsObject = {
    ticketId: string,
    isUnsafe: boolean,
    isSymptomatic: boolean,
    isInjected: boolean,
    injectionsList: Array<InjectionInfo.AsObject>,
    attachmentsList: Array<string>,
    userInfo?: SafetyFormUserInfo.AsObject,
    factorTest?: FactorTestInfo.AsObject,
    injectionNumber: number,
    partnershipId: string,
  }
}

export class GetSafetyFormDetailReq extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): GetSafetyFormDetailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSafetyFormDetailReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSafetyFormDetailReq): GetSafetyFormDetailReq.AsObject;
  static serializeBinaryToWriter(message: GetSafetyFormDetailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSafetyFormDetailReq;
  static deserializeBinaryFromReader(message: GetSafetyFormDetailReq, reader: jspb.BinaryReader): GetSafetyFormDetailReq;
}

export namespace GetSafetyFormDetailReq {
  export type AsObject = {
    ticketId: string,
  }
}

export class DeclareSafetyFormRes extends jspb.Message {
  getInfo(): SafetyFormInfo | undefined;
  setInfo(value?: SafetyFormInfo): DeclareSafetyFormRes;
  hasInfo(): boolean;
  clearInfo(): DeclareSafetyFormRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclareSafetyFormRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeclareSafetyFormRes): DeclareSafetyFormRes.AsObject;
  static serializeBinaryToWriter(message: DeclareSafetyFormRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclareSafetyFormRes;
  static deserializeBinaryFromReader(message: DeclareSafetyFormRes, reader: jspb.BinaryReader): DeclareSafetyFormRes;
}

export namespace DeclareSafetyFormRes {
  export type AsObject = {
    info?: SafetyFormInfo.AsObject,
  }
}

export class GetSafetyFormDetailRes extends jspb.Message {
  getInfo(): SafetyFormInfo | undefined;
  setInfo(value?: SafetyFormInfo): GetSafetyFormDetailRes;
  hasInfo(): boolean;
  clearInfo(): GetSafetyFormDetailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSafetyFormDetailRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSafetyFormDetailRes): GetSafetyFormDetailRes.AsObject;
  static serializeBinaryToWriter(message: GetSafetyFormDetailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSafetyFormDetailRes;
  static deserializeBinaryFromReader(message: GetSafetyFormDetailRes, reader: jspb.BinaryReader): GetSafetyFormDetailRes;
}

export namespace GetSafetyFormDetailRes {
  export type AsObject = {
    info?: SafetyFormInfo.AsObject,
  }
}

