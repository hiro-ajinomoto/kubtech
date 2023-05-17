import * as jspb from 'google-protobuf'

import * as media_base_media_pb from '../../media/base_media_pb';
import * as media_web_partnership_base_pb from '../../media/web_partnership/base_pb';
import * as media_web_partnership_media_pb from '../../media/web_partnership/media_pb';


export class PlaylistBasicInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): PlaylistBasicInfo;

  getIntro(): string;
  setIntro(value: string): PlaylistBasicInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): PlaylistBasicInfo;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): PlaylistBasicInfo;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): PlaylistBasicInfo;
  clearHashtagsList(): PlaylistBasicInfo;
  addHashtags(value: string, index?: number): PlaylistBasicInfo;

  getMediasList(): Array<string>;
  setMediasList(value: Array<string>): PlaylistBasicInfo;
  clearMediasList(): PlaylistBasicInfo;
  addMedias(value: string, index?: number): PlaylistBasicInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): PlaylistBasicInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): PlaylistBasicInfo;

  getSlug(): string;
  setSlug(value: string): PlaylistBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaylistBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlaylistBasicInfo): PlaylistBasicInfo.AsObject;
  static serializeBinaryToWriter(message: PlaylistBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaylistBasicInfo;
  static deserializeBinaryFromReader(message: PlaylistBasicInfo, reader: jspb.BinaryReader): PlaylistBasicInfo;
}

export namespace PlaylistBasicInfo {
  export type AsObject = {
    title: string,
    intro: string,
    isPublic: boolean,
    isPremium: boolean,
    hashtagsList: Array<string>,
    mediasList: Array<string>,
    thumbnailUrl: string,
    partnershipId: string,
    slug: string,
  }
}

export class PlaylistInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PlaylistInfo;

  getTitle(): string;
  setTitle(value: string): PlaylistInfo;

  getIntro(): string;
  setIntro(value: string): PlaylistInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): PlaylistInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): PlaylistInfo;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): PlaylistInfo;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): PlaylistInfo;
  clearHashtagsList(): PlaylistInfo;
  addHashtags(value: string, index?: number): PlaylistInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): PlaylistInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): PlaylistInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): PlaylistInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): PlaylistInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): PlaylistInfo;

  getSlug(): string;
  setSlug(value: string): PlaylistInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaylistInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlaylistInfo): PlaylistInfo.AsObject;
  static serializeBinaryToWriter(message: PlaylistInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaylistInfo;
  static deserializeBinaryFromReader(message: PlaylistInfo, reader: jspb.BinaryReader): PlaylistInfo;
}

export namespace PlaylistInfo {
  export type AsObject = {
    id: string,
    title: string,
    intro: string,
    thumbnailUrl: string,
    isPublic: boolean,
    isPremium: boolean,
    hashtagsList: Array<string>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    partnershipId: string,
    slug: string,
  }
}

export class CreatePlaylistReq extends jspb.Message {
  getInfo(): PlaylistBasicInfo | undefined;
  setInfo(value?: PlaylistBasicInfo): CreatePlaylistReq;
  hasInfo(): boolean;
  clearInfo(): CreatePlaylistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlaylistReq): CreatePlaylistReq.AsObject;
  static serializeBinaryToWriter(message: CreatePlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlaylistReq;
  static deserializeBinaryFromReader(message: CreatePlaylistReq, reader: jspb.BinaryReader): CreatePlaylistReq;
}

export namespace CreatePlaylistReq {
  export type AsObject = {
    info?: PlaylistBasicInfo.AsObject,
  }
}

export class UpdatePlaylistReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdatePlaylistReq;

  getInfo(): PlaylistBasicInfo | undefined;
  setInfo(value?: PlaylistBasicInfo): UpdatePlaylistReq;
  hasInfo(): boolean;
  clearInfo(): UpdatePlaylistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlaylistReq): UpdatePlaylistReq.AsObject;
  static serializeBinaryToWriter(message: UpdatePlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlaylistReq;
  static deserializeBinaryFromReader(message: UpdatePlaylistReq, reader: jspb.BinaryReader): UpdatePlaylistReq;
}

export namespace UpdatePlaylistReq {
  export type AsObject = {
    id: string,
    info?: PlaylistBasicInfo.AsObject,
  }
}

export class DeletePlaylistReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeletePlaylistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlaylistReq): DeletePlaylistReq.AsObject;
  static serializeBinaryToWriter(message: DeletePlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlaylistReq;
  static deserializeBinaryFromReader(message: DeletePlaylistReq, reader: jspb.BinaryReader): DeletePlaylistReq;
}

export namespace DeletePlaylistReq {
  export type AsObject = {
    id: string,
  }
}

export class ListPlaylistReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListPlaylistReq;

  getIsPublic(): string;
  setIsPublic(value: string): ListPlaylistReq;

  getIsPremium(): string;
  setIsPremium(value: string): ListPlaylistReq;

  getPagination(): media_web_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: media_web_partnership_base_pb.PaginationReq): ListPlaylistReq;
  hasPagination(): boolean;
  clearPagination(): ListPlaylistReq;

  getOrderByList(): Array<media_base_media_pb.OrderByItem>;
  setOrderByList(value: Array<media_base_media_pb.OrderByItem>): ListPlaylistReq;
  clearOrderByList(): ListPlaylistReq;
  addOrderBy(value?: media_base_media_pb.OrderByItem, index?: number): media_base_media_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlaylistReq): ListPlaylistReq.AsObject;
  static serializeBinaryToWriter(message: ListPlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlaylistReq;
  static deserializeBinaryFromReader(message: ListPlaylistReq, reader: jspb.BinaryReader): ListPlaylistReq;
}

export namespace ListPlaylistReq {
  export type AsObject = {
    searchText: string,
    isPublic: string,
    isPremium: string,
    pagination?: media_web_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<media_base_media_pb.OrderByItem.AsObject>,
  }
}

export class RetrievePlaylistReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrievePlaylistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePlaylistReq): RetrievePlaylistReq.AsObject;
  static serializeBinaryToWriter(message: RetrievePlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePlaylistReq;
  static deserializeBinaryFromReader(message: RetrievePlaylistReq, reader: jspb.BinaryReader): RetrievePlaylistReq;
}

export namespace RetrievePlaylistReq {
  export type AsObject = {
    id: string,
  }
}

export class CreatePlaylistRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreatePlaylistRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlaylistRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlaylistRes): CreatePlaylistRes.AsObject;
  static serializeBinaryToWriter(message: CreatePlaylistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlaylistRes;
  static deserializeBinaryFromReader(message: CreatePlaylistRes, reader: jspb.BinaryReader): CreatePlaylistRes;
}

export namespace CreatePlaylistRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrievePlaylistRes extends jspb.Message {
  getId(): string;
  setId(value: string): RetrievePlaylistRes;

  getTitle(): string;
  setTitle(value: string): RetrievePlaylistRes;

  getIntro(): string;
  setIntro(value: string): RetrievePlaylistRes;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): RetrievePlaylistRes;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): RetrievePlaylistRes;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): RetrievePlaylistRes;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): RetrievePlaylistRes;
  clearHashtagsList(): RetrievePlaylistRes;
  addHashtags(value: string, index?: number): RetrievePlaylistRes;

  getMediasList(): Array<media_web_partnership_media_pb.MediaInfo>;
  setMediasList(value: Array<media_web_partnership_media_pb.MediaInfo>): RetrievePlaylistRes;
  clearMediasList(): RetrievePlaylistRes;
  addMedias(value?: media_web_partnership_media_pb.MediaInfo, index?: number): media_web_partnership_media_pb.MediaInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): RetrievePlaylistRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RetrievePlaylistRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): RetrievePlaylistRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): RetrievePlaylistRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrievePlaylistRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrievePlaylistRes): RetrievePlaylistRes.AsObject;
  static serializeBinaryToWriter(message: RetrievePlaylistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrievePlaylistRes;
  static deserializeBinaryFromReader(message: RetrievePlaylistRes, reader: jspb.BinaryReader): RetrievePlaylistRes;
}

export namespace RetrievePlaylistRes {
  export type AsObject = {
    id: string,
    title: string,
    intro: string,
    thumbnailUrl: string,
    isPublic: boolean,
    isPremium: boolean,
    hashtagsList: Array<string>,
    mediasList: Array<media_web_partnership_media_pb.MediaInfo.AsObject>,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListPlaylistRes extends jspb.Message {
  getInfoList(): Array<PlaylistInfo>;
  setInfoList(value: Array<PlaylistInfo>): ListPlaylistRes;
  clearInfoList(): ListPlaylistRes;
  addInfo(value?: PlaylistInfo, index?: number): PlaylistInfo;

  getPagination(): media_web_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: media_web_partnership_base_pb.PaginationRes): ListPlaylistRes;
  hasPagination(): boolean;
  clearPagination(): ListPlaylistRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlaylistRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlaylistRes): ListPlaylistRes.AsObject;
  static serializeBinaryToWriter(message: ListPlaylistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlaylistRes;
  static deserializeBinaryFromReader(message: ListPlaylistRes, reader: jspb.BinaryReader): ListPlaylistRes;
}

export namespace ListPlaylistRes {
  export type AsObject = {
    infoList: Array<PlaylistInfo.AsObject>,
    pagination?: media_web_partnership_base_pb.PaginationRes.AsObject,
  }
}

