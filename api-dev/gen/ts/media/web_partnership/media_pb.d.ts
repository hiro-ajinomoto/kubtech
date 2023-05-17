import * as jspb from 'google-protobuf'

import * as media_base_media_pb from '../../media/base_media_pb';
import * as media_web_partnership_base_pb from '../../media/web_partnership/base_pb';


export class MediaBasicInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): MediaBasicInfo;

  getIntro(): string;
  setIntro(value: string): MediaBasicInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): MediaBasicInfo;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): MediaBasicInfo;

  getVideoUrl(): string;
  setVideoUrl(value: string): MediaBasicInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): MediaBasicInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): MediaBasicInfo;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): MediaBasicInfo;
  clearHashtagsList(): MediaBasicInfo;
  addHashtags(value: string, index?: number): MediaBasicInfo;

  getSlug(): string;
  setSlug(value: string): MediaBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MediaBasicInfo): MediaBasicInfo.AsObject;
  static serializeBinaryToWriter(message: MediaBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaBasicInfo;
  static deserializeBinaryFromReader(message: MediaBasicInfo, reader: jspb.BinaryReader): MediaBasicInfo;
}

export namespace MediaBasicInfo {
  export type AsObject = {
    title: string,
    intro: string,
    isPublic: boolean,
    isPremium: boolean,
    videoUrl: string,
    thumbnailUrl: string,
    partnershipId: string,
    hashtagsList: Array<string>,
    slug: string,
  }
}

export class MediaInfo extends jspb.Message {
  getId(): string;
  setId(value: string): MediaInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): MediaInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): MediaInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): MediaInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): MediaInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): MediaInfo;

  getTitle(): string;
  setTitle(value: string): MediaInfo;

  getIntro(): string;
  setIntro(value: string): MediaInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): MediaInfo;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): MediaInfo;

  getVideoUrl(): string;
  setVideoUrl(value: string): MediaInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): MediaInfo;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): MediaInfo;
  clearHashtagsList(): MediaInfo;
  addHashtags(value: string, index?: number): MediaInfo;

  getSlug(): string;
  setSlug(value: string): MediaInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MediaInfo): MediaInfo.AsObject;
  static serializeBinaryToWriter(message: MediaInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaInfo;
  static deserializeBinaryFromReader(message: MediaInfo, reader: jspb.BinaryReader): MediaInfo;
}

export namespace MediaInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    partnershipId: string,
    title: string,
    intro: string,
    isPublic: boolean,
    isPremium: boolean,
    videoUrl: string,
    thumbnailUrl: string,
    hashtagsList: Array<string>,
    slug: string,
  }
}

export class CreateMediaReq extends jspb.Message {
  getIsPublic(): boolean;
  setIsPublic(value: boolean): CreateMediaReq;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): CreateMediaReq;

  getTitle(): string;
  setTitle(value: string): CreateMediaReq;

  getVideoUrl(): string;
  setVideoUrl(value: string): CreateMediaReq;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): CreateMediaReq;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): CreateMediaReq;
  clearHashtagsList(): CreateMediaReq;
  addHashtags(value: string, index?: number): CreateMediaReq;

  getIntro(): string;
  setIntro(value: string): CreateMediaReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMediaReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMediaReq): CreateMediaReq.AsObject;
  static serializeBinaryToWriter(message: CreateMediaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMediaReq;
  static deserializeBinaryFromReader(message: CreateMediaReq, reader: jspb.BinaryReader): CreateMediaReq;
}

export namespace CreateMediaReq {
  export type AsObject = {
    isPublic: boolean,
    isPremium: boolean,
    title: string,
    videoUrl: string,
    thumbnailUrl: string,
    hashtagsList: Array<string>,
    intro: string,
  }
}

export class UpdateMediaReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMediaReq;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): UpdateMediaReq;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): UpdateMediaReq;

  getTitle(): string;
  setTitle(value: string): UpdateMediaReq;

  getVideoUrl(): string;
  setVideoUrl(value: string): UpdateMediaReq;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): UpdateMediaReq;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): UpdateMediaReq;
  clearHashtagsList(): UpdateMediaReq;
  addHashtags(value: string, index?: number): UpdateMediaReq;

  getIntro(): string;
  setIntro(value: string): UpdateMediaReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMediaReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMediaReq): UpdateMediaReq.AsObject;
  static serializeBinaryToWriter(message: UpdateMediaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMediaReq;
  static deserializeBinaryFromReader(message: UpdateMediaReq, reader: jspb.BinaryReader): UpdateMediaReq;
}

export namespace UpdateMediaReq {
  export type AsObject = {
    id: string,
    isPublic: boolean,
    isPremium: boolean,
    title: string,
    videoUrl: string,
    thumbnailUrl: string,
    hashtagsList: Array<string>,
    intro: string,
  }
}

export class DeleteMediaReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteMediaReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMediaReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMediaReq): DeleteMediaReq.AsObject;
  static serializeBinaryToWriter(message: DeleteMediaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMediaReq;
  static deserializeBinaryFromReader(message: DeleteMediaReq, reader: jspb.BinaryReader): DeleteMediaReq;
}

export namespace DeleteMediaReq {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveMediaReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveMediaReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMediaReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMediaReq): RetrieveMediaReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveMediaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMediaReq;
  static deserializeBinaryFromReader(message: RetrieveMediaReq, reader: jspb.BinaryReader): RetrieveMediaReq;
}

export namespace RetrieveMediaReq {
  export type AsObject = {
    id: string,
  }
}

export class ListMediasReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListMediasReq;

  getIsPublic(): string;
  setIsPublic(value: string): ListMediasReq;

  getIsPremium(): string;
  setIsPremium(value: string): ListMediasReq;

  getPagination(): media_web_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: media_web_partnership_base_pb.PaginationReq): ListMediasReq;
  hasPagination(): boolean;
  clearPagination(): ListMediasReq;

  getOrderByList(): Array<media_base_media_pb.OrderByItem>;
  setOrderByList(value: Array<media_base_media_pb.OrderByItem>): ListMediasReq;
  clearOrderByList(): ListMediasReq;
  addOrderBy(value?: media_base_media_pb.OrderByItem, index?: number): media_base_media_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMediasReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMediasReq): ListMediasReq.AsObject;
  static serializeBinaryToWriter(message: ListMediasReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMediasReq;
  static deserializeBinaryFromReader(message: ListMediasReq, reader: jspb.BinaryReader): ListMediasReq;
}

export namespace ListMediasReq {
  export type AsObject = {
    searchText: string,
    isPublic: string,
    isPremium: string,
    pagination?: media_web_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<media_base_media_pb.OrderByItem.AsObject>,
  }
}

export class InternalListMediaByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListMediaByIdsReq;
  clearIdsList(): InternalListMediaByIdsReq;
  addIds(value: string, index?: number): InternalListMediaByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListMediaByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListMediaByIdsReq): InternalListMediaByIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListMediaByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListMediaByIdsReq;
  static deserializeBinaryFromReader(message: InternalListMediaByIdsReq, reader: jspb.BinaryReader): InternalListMediaByIdsReq;
}

export namespace InternalListMediaByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class CreateMediaRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateMediaRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMediaRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMediaRes): CreateMediaRes.AsObject;
  static serializeBinaryToWriter(message: CreateMediaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMediaRes;
  static deserializeBinaryFromReader(message: CreateMediaRes, reader: jspb.BinaryReader): CreateMediaRes;
}

export namespace CreateMediaRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveMediaRes extends jspb.Message {
  getInfo(): MediaInfo | undefined;
  setInfo(value?: MediaInfo): RetrieveMediaRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveMediaRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMediaRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMediaRes): RetrieveMediaRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveMediaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMediaRes;
  static deserializeBinaryFromReader(message: RetrieveMediaRes, reader: jspb.BinaryReader): RetrieveMediaRes;
}

export namespace RetrieveMediaRes {
  export type AsObject = {
    info?: MediaInfo.AsObject,
  }
}

export class ListMediasRes extends jspb.Message {
  getInfoList(): Array<MediaInfo>;
  setInfoList(value: Array<MediaInfo>): ListMediasRes;
  clearInfoList(): ListMediasRes;
  addInfo(value?: MediaInfo, index?: number): MediaInfo;

  getPagination(): media_web_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: media_web_partnership_base_pb.PaginationRes): ListMediasRes;
  hasPagination(): boolean;
  clearPagination(): ListMediasRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMediasRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMediasRes): ListMediasRes.AsObject;
  static serializeBinaryToWriter(message: ListMediasRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMediasRes;
  static deserializeBinaryFromReader(message: ListMediasRes, reader: jspb.BinaryReader): ListMediasRes;
}

export namespace ListMediasRes {
  export type AsObject = {
    infoList: Array<MediaInfo.AsObject>,
    pagination?: media_web_partnership_base_pb.PaginationRes.AsObject,
  }
}

export class InternalListMediaByIdsRes extends jspb.Message {
  getInfosList(): Array<MediaInfo>;
  setInfosList(value: Array<MediaInfo>): InternalListMediaByIdsRes;
  clearInfosList(): InternalListMediaByIdsRes;
  addInfos(value?: MediaInfo, index?: number): MediaInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListMediaByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListMediaByIdsRes): InternalListMediaByIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListMediaByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListMediaByIdsRes;
  static deserializeBinaryFromReader(message: InternalListMediaByIdsRes, reader: jspb.BinaryReader): InternalListMediaByIdsRes;
}

export namespace InternalListMediaByIdsRes {
  export type AsObject = {
    infosList: Array<MediaInfo.AsObject>,
  }
}

