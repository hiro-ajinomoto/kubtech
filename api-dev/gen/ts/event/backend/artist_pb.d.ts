import * as jspb from 'google-protobuf'

import * as event_backend_base_pb from '../../event/backend/base_pb';


export class ArtistBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ArtistBasicInfo;

  getAvatar(): string;
  setAvatar(value: string): ArtistBasicInfo;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): ArtistBasicInfo;
  clearRolesList(): ArtistBasicInfo;
  addRoles(value: string, index?: number): ArtistBasicInfo;

  getCover(): string;
  setCover(value: string): ArtistBasicInfo;

  getContactUrlsList(): Array<event_backend_base_pb.Url>;
  setContactUrlsList(value: Array<event_backend_base_pb.Url>): ArtistBasicInfo;
  clearContactUrlsList(): ArtistBasicInfo;
  addContactUrls(value?: event_backend_base_pb.Url, index?: number): event_backend_base_pb.Url;

  getIntro(): string;
  setIntro(value: string): ArtistBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtistBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ArtistBasicInfo): ArtistBasicInfo.AsObject;
  static serializeBinaryToWriter(message: ArtistBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtistBasicInfo;
  static deserializeBinaryFromReader(message: ArtistBasicInfo, reader: jspb.BinaryReader): ArtistBasicInfo;
}

export namespace ArtistBasicInfo {
  export type AsObject = {
    name: string,
    avatar: string,
    rolesList: Array<string>,
    cover: string,
    contactUrlsList: Array<event_backend_base_pb.Url.AsObject>,
    intro: string,
  }
}

export class ArtistListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ArtistListInfo;

  getName(): string;
  setName(value: string): ArtistListInfo;

  getAvatar(): string;
  setAvatar(value: string): ArtistListInfo;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): ArtistListInfo;
  clearRolesList(): ArtistListInfo;
  addRoles(value: string, index?: number): ArtistListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ArtistListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ArtistListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): ArtistListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): ArtistListInfo;

  getIntro(): string;
  setIntro(value: string): ArtistListInfo;

  getCover(): string;
  setCover(value: string): ArtistListInfo;

  getContactUrlsList(): Array<event_backend_base_pb.Url>;
  setContactUrlsList(value: Array<event_backend_base_pb.Url>): ArtistListInfo;
  clearContactUrlsList(): ArtistListInfo;
  addContactUrls(value?: event_backend_base_pb.Url, index?: number): event_backend_base_pb.Url;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtistListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ArtistListInfo): ArtistListInfo.AsObject;
  static serializeBinaryToWriter(message: ArtistListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtistListInfo;
  static deserializeBinaryFromReader(message: ArtistListInfo, reader: jspb.BinaryReader): ArtistListInfo;
}

export namespace ArtistListInfo {
  export type AsObject = {
    id: string,
    name: string,
    avatar: string,
    rolesList: Array<string>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    intro: string,
    cover: string,
    contactUrlsList: Array<event_backend_base_pb.Url.AsObject>,
  }
}

export class ListArtistIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListArtistIdsReq;
  clearIdsList(): ListArtistIdsReq;
  addIds(value: string, index?: number): ListArtistIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArtistIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListArtistIdsReq): ListArtistIdsReq.AsObject;
  static serializeBinaryToWriter(message: ListArtistIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArtistIdsReq;
  static deserializeBinaryFromReader(message: ListArtistIdsReq, reader: jspb.BinaryReader): ListArtistIdsReq;
}

export namespace ListArtistIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class ListArtistIdsRes extends jspb.Message {
  getInfoList(): Array<ArtistListInfo>;
  setInfoList(value: Array<ArtistListInfo>): ListArtistIdsRes;
  clearInfoList(): ListArtistIdsRes;
  addInfo(value?: ArtistListInfo, index?: number): ArtistListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArtistIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListArtistIdsRes): ListArtistIdsRes.AsObject;
  static serializeBinaryToWriter(message: ListArtistIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArtistIdsRes;
  static deserializeBinaryFromReader(message: ListArtistIdsRes, reader: jspb.BinaryReader): ListArtistIdsRes;
}

export namespace ListArtistIdsRes {
  export type AsObject = {
    infoList: Array<ArtistListInfo.AsObject>,
  }
}

