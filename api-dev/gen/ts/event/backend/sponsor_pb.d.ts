import * as jspb from 'google-protobuf'

import * as event_backend_base_pb from '../../event/backend/base_pb';


export class SponsorBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SponsorBasicInfo;

  getCover(): string;
  setCover(value: string): SponsorBasicInfo;

  getAvatar(): string;
  setAvatar(value: string): SponsorBasicInfo;

  getIntro(): string;
  setIntro(value: string): SponsorBasicInfo;

  getContactUrlsList(): Array<event_backend_base_pb.Url>;
  setContactUrlsList(value: Array<event_backend_base_pb.Url>): SponsorBasicInfo;
  clearContactUrlsList(): SponsorBasicInfo;
  addContactUrls(value?: event_backend_base_pb.Url, index?: number): event_backend_base_pb.Url;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorBasicInfo): SponsorBasicInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorBasicInfo;
  static deserializeBinaryFromReader(message: SponsorBasicInfo, reader: jspb.BinaryReader): SponsorBasicInfo;
}

export namespace SponsorBasicInfo {
  export type AsObject = {
    name: string,
    cover: string,
    avatar: string,
    intro: string,
    contactUrlsList: Array<event_backend_base_pb.Url.AsObject>,
  }
}

export class SponsorInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SponsorInfo;

  getName(): string;
  setName(value: string): SponsorInfo;

  getCover(): string;
  setCover(value: string): SponsorInfo;

  getAvatar(): string;
  setAvatar(value: string): SponsorInfo;

  getIntro(): string;
  setIntro(value: string): SponsorInfo;

  getContactUrlsList(): Array<event_backend_base_pb.Url>;
  setContactUrlsList(value: Array<event_backend_base_pb.Url>): SponsorInfo;
  clearContactUrlsList(): SponsorInfo;
  addContactUrls(value?: event_backend_base_pb.Url, index?: number): event_backend_base_pb.Url;

  getCreatedAt(): number;
  setCreatedAt(value: number): SponsorInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SponsorInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SponsorInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SponsorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorInfo): SponsorInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorInfo;
  static deserializeBinaryFromReader(message: SponsorInfo, reader: jspb.BinaryReader): SponsorInfo;
}

export namespace SponsorInfo {
  export type AsObject = {
    id: string,
    name: string,
    cover: string,
    avatar: string,
    intro: string,
    contactUrlsList: Array<event_backend_base_pb.Url.AsObject>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class SponsorLevel extends jspb.Message {
  getName(): string;
  setName(value: string): SponsorLevel;

  getIcon(): string;
  setIcon(value: string): SponsorLevel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorLevel.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorLevel): SponsorLevel.AsObject;
  static serializeBinaryToWriter(message: SponsorLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorLevel;
  static deserializeBinaryFromReader(message: SponsorLevel, reader: jspb.BinaryReader): SponsorLevel;
}

export namespace SponsorLevel {
  export type AsObject = {
    name: string,
    icon: string,
  }
}

export class GetSponsorDetailReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetSponsorDetailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSponsorDetailReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSponsorDetailReq): GetSponsorDetailReq.AsObject;
  static serializeBinaryToWriter(message: GetSponsorDetailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSponsorDetailReq;
  static deserializeBinaryFromReader(message: GetSponsorDetailReq, reader: jspb.BinaryReader): GetSponsorDetailReq;
}

export namespace GetSponsorDetailReq {
  export type AsObject = {
    id: string,
  }
}

export class ListSponsorByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListSponsorByIdsReq;
  clearIdsList(): ListSponsorByIdsReq;
  addIds(value: string, index?: number): ListSponsorByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSponsorByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSponsorByIdsReq): ListSponsorByIdsReq.AsObject;
  static serializeBinaryToWriter(message: ListSponsorByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSponsorByIdsReq;
  static deserializeBinaryFromReader(message: ListSponsorByIdsReq, reader: jspb.BinaryReader): ListSponsorByIdsReq;
}

export namespace ListSponsorByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class GetSponsorDetailRes extends jspb.Message {
  getId(): string;
  setId(value: string): GetSponsorDetailRes;

  getInfo(): SponsorBasicInfo | undefined;
  setInfo(value?: SponsorBasicInfo): GetSponsorDetailRes;
  hasInfo(): boolean;
  clearInfo(): GetSponsorDetailRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): GetSponsorDetailRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): GetSponsorDetailRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): GetSponsorDetailRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): GetSponsorDetailRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSponsorDetailRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSponsorDetailRes): GetSponsorDetailRes.AsObject;
  static serializeBinaryToWriter(message: GetSponsorDetailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSponsorDetailRes;
  static deserializeBinaryFromReader(message: GetSponsorDetailRes, reader: jspb.BinaryReader): GetSponsorDetailRes;
}

export namespace GetSponsorDetailRes {
  export type AsObject = {
    id: string,
    info?: SponsorBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListSponsorByIdsRes extends jspb.Message {
  getItemsList(): Array<SponsorInfo>;
  setItemsList(value: Array<SponsorInfo>): ListSponsorByIdsRes;
  clearItemsList(): ListSponsorByIdsRes;
  addItems(value?: SponsorInfo, index?: number): SponsorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSponsorByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSponsorByIdsRes): ListSponsorByIdsRes.AsObject;
  static serializeBinaryToWriter(message: ListSponsorByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSponsorByIdsRes;
  static deserializeBinaryFromReader(message: ListSponsorByIdsRes, reader: jspb.BinaryReader): ListSponsorByIdsRes;
}

export namespace ListSponsorByIdsRes {
  export type AsObject = {
    itemsList: Array<SponsorInfo.AsObject>,
  }
}

