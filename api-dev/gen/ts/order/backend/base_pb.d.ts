import * as jspb from 'google-protobuf'



export class Media extends jspb.Message {
  getName(): string;
  setName(value: string): Media;

  getMediaType(): MediaType;
  setMediaType(value: MediaType): Media;

  getSourceUrl(): string;
  setSourceUrl(value: string): Media;

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
    isCover: boolean,
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
export enum Boolean { 
  BOOLEAN_INVALID = 0,
  BOOLEAN_TRUE = 1,
  BOOLEAN_FALSE = 2,
}
