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

export class GetPartnershipIdByCodesReq extends jspb.Message {
  getCodesList(): Array<string>;
  setCodesList(value: Array<string>): GetPartnershipIdByCodesReq;
  clearCodesList(): GetPartnershipIdByCodesReq;
  addCodes(value: string, index?: number): GetPartnershipIdByCodesReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPartnershipIdByCodesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPartnershipIdByCodesReq): GetPartnershipIdByCodesReq.AsObject;
  static serializeBinaryToWriter(message: GetPartnershipIdByCodesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPartnershipIdByCodesReq;
  static deserializeBinaryFromReader(message: GetPartnershipIdByCodesReq, reader: jspb.BinaryReader): GetPartnershipIdByCodesReq;
}

export namespace GetPartnershipIdByCodesReq {
  export type AsObject = {
    codesList: Array<string>,
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

export class GetPartnershipIdByCodesRes extends jspb.Message {
  getResultMap(): jspb.Map<string, string>;
  clearResultMap(): GetPartnershipIdByCodesRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPartnershipIdByCodesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPartnershipIdByCodesRes): GetPartnershipIdByCodesRes.AsObject;
  static serializeBinaryToWriter(message: GetPartnershipIdByCodesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPartnershipIdByCodesRes;
  static deserializeBinaryFromReader(message: GetPartnershipIdByCodesRes, reader: jspb.BinaryReader): GetPartnershipIdByCodesRes;
}

export namespace GetPartnershipIdByCodesRes {
  export type AsObject = {
    resultMap: Array<[string, string]>,
  }
}

