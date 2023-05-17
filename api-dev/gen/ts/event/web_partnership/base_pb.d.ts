import * as jspb from 'google-protobuf'



export class Url extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): Url;

  getUrl(): string;
  setUrl(value: string): Url;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Url.AsObject;
  static toObject(includeInstance: boolean, msg: Url): Url.AsObject;
  static serializeBinaryToWriter(message: Url, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Url;
  static deserializeBinaryFromReader(message: Url, reader: jspb.BinaryReader): Url;
}

export namespace Url {
  export type AsObject = {
    label: string,
    url: string,
  }
}

export class Media extends jspb.Message {
  getName(): string;
  setName(value: string): Media;

  getMediaType(): MediaType;
  setMediaType(value: MediaType): Media;

  getSourceUrl(): string;
  setSourceUrl(value: string): Media;

  getThumbnail(): string;
  setThumbnail(value: string): Media;

  getIsCover(): boolean;
  setIsCover(value: boolean): Media;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Media.AsObject;
  static toObject(includeInstance: boolean, msg: Media): Media.AsObject;
  static serializeBinaryToWriter(message: Media, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Media;
  static deserializeBinaryFromReader(message: Media, reader: jspb.BinaryReader): Media;
}

export namespace Media {
  export type AsObject = {
    name: string,
    mediaType: MediaType,
    sourceUrl: string,
    thumbnail: string,
    isCover: boolean,
  }
}

export class I18N extends jspb.Message {
  getLangCode(): string;
  setLangCode(value: string): I18N;

  getText(): string;
  setText(value: string): I18N;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): I18N.AsObject;
  static toObject(includeInstance: boolean, msg: I18N): I18N.AsObject;
  static serializeBinaryToWriter(message: I18N, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): I18N;
  static deserializeBinaryFromReader(message: I18N, reader: jspb.BinaryReader): I18N;
}

export namespace I18N {
  export type AsObject = {
    langCode: string,
    text: string,
  }
}

export enum MediaType { 
  INVALID = 0,
  IMAGE = 1,
  VIDEO = 2,
  AUDIO = 3,
  URL = 4,
  PDF = 5,
  DOC = 6,
  OTHER = 7,
}
