import * as jspb from 'google-protobuf'



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

  getDefaultCurrency(): string;
  setDefaultCurrency(value: string): PartnershipBasicInfo;

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
    defaultCurrency: string,
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

  getUrlAboutApp(): string;
  setUrlAboutApp(value: string): PartnershipURLs;

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
    urlAboutApp: string,
  }
}

export class PublicGetPartnershipByCodeReq extends jspb.Message {
  getCodeName(): string;
  setCodeName(value: string): PublicGetPartnershipByCodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicGetPartnershipByCodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicGetPartnershipByCodeReq): PublicGetPartnershipByCodeReq.AsObject;
  static serializeBinaryToWriter(message: PublicGetPartnershipByCodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicGetPartnershipByCodeReq;
  static deserializeBinaryFromReader(message: PublicGetPartnershipByCodeReq, reader: jspb.BinaryReader): PublicGetPartnershipByCodeReq;
}

export namespace PublicGetPartnershipByCodeReq {
  export type AsObject = {
    codeName: string,
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

