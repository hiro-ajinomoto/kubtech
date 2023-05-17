import * as jspb from 'google-protobuf'

import * as media_base_media_pb from '../../media/base_media_pb';
import * as media_mobile_base_pb from '../../media/mobile/base_pb';
import * as media_mobile_media_pb from '../../media/mobile/media_pb';


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
  }
}

export class PublicMixInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PublicMixInfo;

  getTitle(): string;
  setTitle(value: string): PublicMixInfo;

  getType(): string;
  setType(value: string): PublicMixInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): PublicMixInfo;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): PublicMixInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicMixInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PublicMixInfo): PublicMixInfo.AsObject;
  static serializeBinaryToWriter(message: PublicMixInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicMixInfo;
  static deserializeBinaryFromReader(message: PublicMixInfo, reader: jspb.BinaryReader): PublicMixInfo;
}

export namespace PublicMixInfo {
  export type AsObject = {
    id: string,
    title: string,
    type: string,
    thumbnailUrl: string,
    isPremium: boolean,
  }
}

export class HomepagePlaylistInfo extends jspb.Message {
  getId(): string;
  setId(value: string): HomepagePlaylistInfo;

  getTitle(): string;
  setTitle(value: string): HomepagePlaylistInfo;

  getIntro(): string;
  setIntro(value: string): HomepagePlaylistInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): HomepagePlaylistInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): HomepagePlaylistInfo;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): HomepagePlaylistInfo;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): HomepagePlaylistInfo;
  clearHashtagsList(): HomepagePlaylistInfo;
  addHashtags(value: string, index?: number): HomepagePlaylistInfo;

  getMediasList(): Array<media_mobile_media_pb.PublicMediaInfo>;
  setMediasList(value: Array<media_mobile_media_pb.PublicMediaInfo>): HomepagePlaylistInfo;
  clearMediasList(): HomepagePlaylistInfo;
  addMedias(value?: media_mobile_media_pb.PublicMediaInfo, index?: number): media_mobile_media_pb.PublicMediaInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HomepagePlaylistInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HomepagePlaylistInfo): HomepagePlaylistInfo.AsObject;
  static serializeBinaryToWriter(message: HomepagePlaylistInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HomepagePlaylistInfo;
  static deserializeBinaryFromReader(message: HomepagePlaylistInfo, reader: jspb.BinaryReader): HomepagePlaylistInfo;
}

export namespace HomepagePlaylistInfo {
  export type AsObject = {
    id: string,
    title: string,
    intro: string,
    thumbnailUrl: string,
    isPublic: boolean,
    isPremium: boolean,
    hashtagsList: Array<string>,
    mediasList: Array<media_mobile_media_pb.PublicMediaInfo.AsObject>,
  }
}

export class PublicRetrievePlaylistReq extends jspb.Message {
  getId(): string;
  setId(value: string): PublicRetrievePlaylistReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): PublicRetrievePlaylistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrievePlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrievePlaylistReq): PublicRetrievePlaylistReq.AsObject;
  static serializeBinaryToWriter(message: PublicRetrievePlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrievePlaylistReq;
  static deserializeBinaryFromReader(message: PublicRetrievePlaylistReq, reader: jspb.BinaryReader): PublicRetrievePlaylistReq;
}

export namespace PublicRetrievePlaylistReq {
  export type AsObject = {
    id: string,
    partnershipId: string,
  }
}

export class PublicHomepagePlaylistReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): PublicHomepagePlaylistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicHomepagePlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicHomepagePlaylistReq): PublicHomepagePlaylistReq.AsObject;
  static serializeBinaryToWriter(message: PublicHomepagePlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicHomepagePlaylistReq;
  static deserializeBinaryFromReader(message: PublicHomepagePlaylistReq, reader: jspb.BinaryReader): PublicHomepagePlaylistReq;
}

export namespace PublicHomepagePlaylistReq {
  export type AsObject = {
    partnershipId: string,
  }
}

export class PublicListPlaylistReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): PublicListPlaylistReq;

  getSearchText(): string;
  setSearchText(value: string): PublicListPlaylistReq;

  getPagination(): media_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: media_mobile_base_pb.PaginationReq): PublicListPlaylistReq;
  hasPagination(): boolean;
  clearPagination(): PublicListPlaylistReq;

  getOrderByList(): Array<media_base_media_pb.OrderByItem>;
  setOrderByList(value: Array<media_base_media_pb.OrderByItem>): PublicListPlaylistReq;
  clearOrderByList(): PublicListPlaylistReq;
  addOrderBy(value?: media_base_media_pb.OrderByItem, index?: number): media_base_media_pb.OrderByItem;

  getHashtag(): string;
  setHashtag(value: string): PublicListPlaylistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListPlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListPlaylistReq): PublicListPlaylistReq.AsObject;
  static serializeBinaryToWriter(message: PublicListPlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListPlaylistReq;
  static deserializeBinaryFromReader(message: PublicListPlaylistReq, reader: jspb.BinaryReader): PublicListPlaylistReq;
}

export namespace PublicListPlaylistReq {
  export type AsObject = {
    partnershipId: string,
    searchText: string,
    pagination?: media_mobile_base_pb.PaginationReq.AsObject,
    orderByList: Array<media_base_media_pb.OrderByItem.AsObject>,
    hashtag: string,
  }
}

export class PublicSearchMixReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): PublicSearchMixReq;

  getSearchText(): string;
  setSearchText(value: string): PublicSearchMixReq;

  getPagination(): media_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: media_mobile_base_pb.PaginationReq): PublicSearchMixReq;
  hasPagination(): boolean;
  clearPagination(): PublicSearchMixReq;

  getOrderByList(): Array<media_base_media_pb.OrderByItem>;
  setOrderByList(value: Array<media_base_media_pb.OrderByItem>): PublicSearchMixReq;
  clearOrderByList(): PublicSearchMixReq;
  addOrderBy(value?: media_base_media_pb.OrderByItem, index?: number): media_base_media_pb.OrderByItem;

  getHashtag(): string;
  setHashtag(value: string): PublicSearchMixReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicSearchMixReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicSearchMixReq): PublicSearchMixReq.AsObject;
  static serializeBinaryToWriter(message: PublicSearchMixReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicSearchMixReq;
  static deserializeBinaryFromReader(message: PublicSearchMixReq, reader: jspb.BinaryReader): PublicSearchMixReq;
}

export namespace PublicSearchMixReq {
  export type AsObject = {
    partnershipId: string,
    searchText: string,
    pagination?: media_mobile_base_pb.PaginationReq.AsObject,
    orderByList: Array<media_base_media_pb.OrderByItem.AsObject>,
    hashtag: string,
  }
}

export class PublicListMediaByPlaylistReq extends jspb.Message {
  getPlaylistId(): string;
  setPlaylistId(value: string): PublicListMediaByPlaylistReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): PublicListMediaByPlaylistReq;

  getPagination(): media_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: media_mobile_base_pb.PaginationReq): PublicListMediaByPlaylistReq;
  hasPagination(): boolean;
  clearPagination(): PublicListMediaByPlaylistReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListMediaByPlaylistReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListMediaByPlaylistReq): PublicListMediaByPlaylistReq.AsObject;
  static serializeBinaryToWriter(message: PublicListMediaByPlaylistReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListMediaByPlaylistReq;
  static deserializeBinaryFromReader(message: PublicListMediaByPlaylistReq, reader: jspb.BinaryReader): PublicListMediaByPlaylistReq;
}

export namespace PublicListMediaByPlaylistReq {
  export type AsObject = {
    playlistId: string,
    partnershipId: string,
    pagination?: media_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class PublicListPlaylistRes extends jspb.Message {
  getInfoList(): Array<PlaylistInfo>;
  setInfoList(value: Array<PlaylistInfo>): PublicListPlaylistRes;
  clearInfoList(): PublicListPlaylistRes;
  addInfo(value?: PlaylistInfo, index?: number): PlaylistInfo;

  getPagination(): media_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: media_mobile_base_pb.PaginationRes): PublicListPlaylistRes;
  hasPagination(): boolean;
  clearPagination(): PublicListPlaylistRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListPlaylistRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListPlaylistRes): PublicListPlaylistRes.AsObject;
  static serializeBinaryToWriter(message: PublicListPlaylistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListPlaylistRes;
  static deserializeBinaryFromReader(message: PublicListPlaylistRes, reader: jspb.BinaryReader): PublicListPlaylistRes;
}

export namespace PublicListPlaylistRes {
  export type AsObject = {
    infoList: Array<PlaylistInfo.AsObject>,
    pagination?: media_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class PublicListMediaByPlaylistRes extends jspb.Message {
  getInfoList(): Array<media_mobile_media_pb.PublicMediaInfo>;
  setInfoList(value: Array<media_mobile_media_pb.PublicMediaInfo>): PublicListMediaByPlaylistRes;
  clearInfoList(): PublicListMediaByPlaylistRes;
  addInfo(value?: media_mobile_media_pb.PublicMediaInfo, index?: number): media_mobile_media_pb.PublicMediaInfo;

  getPagination(): media_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: media_mobile_base_pb.PaginationRes): PublicListMediaByPlaylistRes;
  hasPagination(): boolean;
  clearPagination(): PublicListMediaByPlaylistRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListMediaByPlaylistRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListMediaByPlaylistRes): PublicListMediaByPlaylistRes.AsObject;
  static serializeBinaryToWriter(message: PublicListMediaByPlaylistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListMediaByPlaylistRes;
  static deserializeBinaryFromReader(message: PublicListMediaByPlaylistRes, reader: jspb.BinaryReader): PublicListMediaByPlaylistRes;
}

export namespace PublicListMediaByPlaylistRes {
  export type AsObject = {
    infoList: Array<media_mobile_media_pb.PublicMediaInfo.AsObject>,
    pagination?: media_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class PublicSearchMixRes extends jspb.Message {
  getInfoList(): Array<PublicMixInfo>;
  setInfoList(value: Array<PublicMixInfo>): PublicSearchMixRes;
  clearInfoList(): PublicSearchMixRes;
  addInfo(value?: PublicMixInfo, index?: number): PublicMixInfo;

  getPagination(): media_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: media_mobile_base_pb.PaginationRes): PublicSearchMixRes;
  hasPagination(): boolean;
  clearPagination(): PublicSearchMixRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicSearchMixRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicSearchMixRes): PublicSearchMixRes.AsObject;
  static serializeBinaryToWriter(message: PublicSearchMixRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicSearchMixRes;
  static deserializeBinaryFromReader(message: PublicSearchMixRes, reader: jspb.BinaryReader): PublicSearchMixRes;
}

export namespace PublicSearchMixRes {
  export type AsObject = {
    infoList: Array<PublicMixInfo.AsObject>,
    pagination?: media_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class PublicHomepagePlaylistRes extends jspb.Message {
  getPlaylistsList(): Array<HomepagePlaylistInfo>;
  setPlaylistsList(value: Array<HomepagePlaylistInfo>): PublicHomepagePlaylistRes;
  clearPlaylistsList(): PublicHomepagePlaylistRes;
  addPlaylists(value?: HomepagePlaylistInfo, index?: number): HomepagePlaylistInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicHomepagePlaylistRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicHomepagePlaylistRes): PublicHomepagePlaylistRes.AsObject;
  static serializeBinaryToWriter(message: PublicHomepagePlaylistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicHomepagePlaylistRes;
  static deserializeBinaryFromReader(message: PublicHomepagePlaylistRes, reader: jspb.BinaryReader): PublicHomepagePlaylistRes;
}

export namespace PublicHomepagePlaylistRes {
  export type AsObject = {
    playlistsList: Array<HomepagePlaylistInfo.AsObject>,
  }
}

export class PublicRetrievePlaylistRes extends jspb.Message {
  getId(): string;
  setId(value: string): PublicRetrievePlaylistRes;

  getTitle(): string;
  setTitle(value: string): PublicRetrievePlaylistRes;

  getIntro(): string;
  setIntro(value: string): PublicRetrievePlaylistRes;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): PublicRetrievePlaylistRes;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): PublicRetrievePlaylistRes;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): PublicRetrievePlaylistRes;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): PublicRetrievePlaylistRes;
  clearHashtagsList(): PublicRetrievePlaylistRes;
  addHashtags(value: string, index?: number): PublicRetrievePlaylistRes;

  getMediasList(): Array<media_mobile_media_pb.PublicMediaInfo>;
  setMediasList(value: Array<media_mobile_media_pb.PublicMediaInfo>): PublicRetrievePlaylistRes;
  clearMediasList(): PublicRetrievePlaylistRes;
  addMedias(value?: media_mobile_media_pb.PublicMediaInfo, index?: number): media_mobile_media_pb.PublicMediaInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrievePlaylistRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrievePlaylistRes): PublicRetrievePlaylistRes.AsObject;
  static serializeBinaryToWriter(message: PublicRetrievePlaylistRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrievePlaylistRes;
  static deserializeBinaryFromReader(message: PublicRetrievePlaylistRes, reader: jspb.BinaryReader): PublicRetrievePlaylistRes;
}

export namespace PublicRetrievePlaylistRes {
  export type AsObject = {
    id: string,
    title: string,
    intro: string,
    thumbnailUrl: string,
    isPublic: boolean,
    isPremium: boolean,
    hashtagsList: Array<string>,
    mediasList: Array<media_mobile_media_pb.PublicMediaInfo.AsObject>,
  }
}

