import * as jspb from 'google-protobuf'



export class MediaInfo extends jspb.Message {
  getId(): string;
  setId(value: string): MediaInfo;

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

export class PublicMediaInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PublicMediaInfo;

  getTitle(): string;
  setTitle(value: string): PublicMediaInfo;

  getIntro(): string;
  setIntro(value: string): PublicMediaInfo;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): PublicMediaInfo;

  getIsPremium(): boolean;
  setIsPremium(value: boolean): PublicMediaInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): PublicMediaInfo;

  getHashtagsList(): Array<string>;
  setHashtagsList(value: Array<string>): PublicMediaInfo;
  clearHashtagsList(): PublicMediaInfo;
  addHashtags(value: string, index?: number): PublicMediaInfo;

  getSlug(): string;
  setSlug(value: string): PublicMediaInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicMediaInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PublicMediaInfo): PublicMediaInfo.AsObject;
  static serializeBinaryToWriter(message: PublicMediaInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicMediaInfo;
  static deserializeBinaryFromReader(message: PublicMediaInfo, reader: jspb.BinaryReader): PublicMediaInfo;
}

export namespace PublicMediaInfo {
  export type AsObject = {
    id: string,
    title: string,
    intro: string,
    isPublic: boolean,
    isPremium: boolean,
    thumbnailUrl: string,
    hashtagsList: Array<string>,
    slug: string,
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

export class PublicRetrieveMediaReq extends jspb.Message {
  getId(): string;
  setId(value: string): PublicRetrieveMediaReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): PublicRetrieveMediaReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrieveMediaReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrieveMediaReq): PublicRetrieveMediaReq.AsObject;
  static serializeBinaryToWriter(message: PublicRetrieveMediaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrieveMediaReq;
  static deserializeBinaryFromReader(message: PublicRetrieveMediaReq, reader: jspb.BinaryReader): PublicRetrieveMediaReq;
}

export namespace PublicRetrieveMediaReq {
  export type AsObject = {
    id: string,
    partnershipId: string,
  }
}

export class PublicHomepageMediaReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): PublicHomepageMediaReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicHomepageMediaReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicHomepageMediaReq): PublicHomepageMediaReq.AsObject;
  static serializeBinaryToWriter(message: PublicHomepageMediaReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicHomepageMediaReq;
  static deserializeBinaryFromReader(message: PublicHomepageMediaReq, reader: jspb.BinaryReader): PublicHomepageMediaReq;
}

export namespace PublicHomepageMediaReq {
  export type AsObject = {
    partnershipId: string,
  }
}

export class RetrieveMediaRes extends jspb.Message {
  getInfo(): MediaInfo | undefined;
  setInfo(value?: MediaInfo): RetrieveMediaRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveMediaRes;

  getRelatedMediasList(): Array<MediaInfo>;
  setRelatedMediasList(value: Array<MediaInfo>): RetrieveMediaRes;
  clearRelatedMediasList(): RetrieveMediaRes;
  addRelatedMedias(value?: MediaInfo, index?: number): MediaInfo;

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
    relatedMediasList: Array<MediaInfo.AsObject>,
  }
}

export class PublicHomepageMediaRes extends jspb.Message {
  getMediasList(): Array<PublicMediaInfo>;
  setMediasList(value: Array<PublicMediaInfo>): PublicHomepageMediaRes;
  clearMediasList(): PublicHomepageMediaRes;
  addMedias(value?: PublicMediaInfo, index?: number): PublicMediaInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicHomepageMediaRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicHomepageMediaRes): PublicHomepageMediaRes.AsObject;
  static serializeBinaryToWriter(message: PublicHomepageMediaRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicHomepageMediaRes;
  static deserializeBinaryFromReader(message: PublicHomepageMediaRes, reader: jspb.BinaryReader): PublicHomepageMediaRes;
}

export namespace PublicHomepageMediaRes {
  export type AsObject = {
    mediasList: Array<PublicMediaInfo.AsObject>,
  }
}

