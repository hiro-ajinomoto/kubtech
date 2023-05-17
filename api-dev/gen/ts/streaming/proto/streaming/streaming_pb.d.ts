import * as jspb from 'google-protobuf'



export class Header extends jspb.Message {
  getKey(): string;
  setKey(value: string): Header;

  getValue(): string;
  setValue(value: string): Header;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class Source extends jspb.Message {
  getIsDefault(): boolean;
  setIsDefault(value: boolean): Source;

  getType(): SourceType;
  setType(value: SourceType): Source;

  getFile(): string;
  setFile(value: string): Source;

  getLabel(): string;
  setLabel(value: string): Source;

  getHeadersList(): Array<Header>;
  setHeadersList(value: Array<Header>): Source;
  clearHeadersList(): Source;
  addHeaders(value?: Header, index?: number): Header;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Source.AsObject;
  static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
  static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Source;
  static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
  export type AsObject = {
    isDefault: boolean,
    type: SourceType,
    file: string,
    label: string,
    headersList: Array<Header.AsObject>,
  }
}

export class Server extends jspb.Message {
  getName(): string;
  setName(value: string): Server;

  getSourcesList(): Array<Source>;
  setSourcesList(value: Array<Source>): Server;
  clearSourcesList(): Server;
  addSources(value?: Source, index?: number): Source;

  getWeight(): number;
  setWeight(value: number): Server;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Server.AsObject;
  static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
  static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Server;
  static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
}

export namespace Server {
  export type AsObject = {
    name: string,
    sourcesList: Array<Source.AsObject>,
    weight: number,
  }
}

export class Scene extends jspb.Message {
  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): Scene;

  getDisplayTime(): string;
  setDisplayTime(value: string): Scene;

  getSeekSeconds(): number;
  setSeekSeconds(value: number): Scene;

  getTitle(): string;
  setTitle(value: string): Scene;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scene.AsObject;
  static toObject(includeInstance: boolean, msg: Scene): Scene.AsObject;
  static serializeBinaryToWriter(message: Scene, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scene;
  static deserializeBinaryFromReader(message: Scene, reader: jspb.BinaryReader): Scene;
}

export namespace Scene {
  export type AsObject = {
    thumbnailUrl: string,
    displayTime: string,
    seekSeconds: number,
    title: string,
  }
}

export class Episode extends jspb.Message {
  getEpisodeId(): string;
  setEpisodeId(value: string): Episode;

  getName(): string;
  setName(value: string): Episode;

  getScenesList(): Array<Scene>;
  setScenesList(value: Array<Scene>): Episode;
  clearScenesList(): Episode;
  addScenes(value?: Scene, index?: number): Scene;

  getPoster(): string;
  setPoster(value: string): Episode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Episode.AsObject;
  static toObject(includeInstance: boolean, msg: Episode): Episode.AsObject;
  static serializeBinaryToWriter(message: Episode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Episode;
  static deserializeBinaryFromReader(message: Episode, reader: jspb.BinaryReader): Episode;
}

export namespace Episode {
  export type AsObject = {
    episodeId: string,
    name: string,
    scenesList: Array<Scene.AsObject>,
    poster: string,
  }
}

export class GetEpisodesReq extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): GetEpisodesReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEpisodesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetEpisodesReq): GetEpisodesReq.AsObject;
  static serializeBinaryToWriter(message: GetEpisodesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEpisodesReq;
  static deserializeBinaryFromReader(message: GetEpisodesReq, reader: jspb.BinaryReader): GetEpisodesReq;
}

export namespace GetEpisodesReq {
  export type AsObject = {
    productId: string,
  }
}

export class GetStreamingInfoReq extends jspb.Message {
  getEpisodeId(): string;
  setEpisodeId(value: string): GetStreamingInfoReq;

  getProductId(): string;
  setProductId(value: string): GetStreamingInfoReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamingInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamingInfoReq): GetStreamingInfoReq.AsObject;
  static serializeBinaryToWriter(message: GetStreamingInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamingInfoReq;
  static deserializeBinaryFromReader(message: GetStreamingInfoReq, reader: jspb.BinaryReader): GetStreamingInfoReq;
}

export namespace GetStreamingInfoReq {
  export type AsObject = {
    episodeId: string,
    productId: string,
  }
}

export class NewSessionReq extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): NewSessionReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: NewSessionReq): NewSessionReq.AsObject;
  static serializeBinaryToWriter(message: NewSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewSessionReq;
  static deserializeBinaryFromReader(message: NewSessionReq, reader: jspb.BinaryReader): NewSessionReq;
}

export namespace NewSessionReq {
  export type AsObject = {
    productId: string,
  }
}

export class HeartbeatSessionReq extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): HeartbeatSessionReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatSessionReq): HeartbeatSessionReq.AsObject;
  static serializeBinaryToWriter(message: HeartbeatSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatSessionReq;
  static deserializeBinaryFromReader(message: HeartbeatSessionReq, reader: jspb.BinaryReader): HeartbeatSessionReq;
}

export namespace HeartbeatSessionReq {
  export type AsObject = {
    sessionId: string,
  }
}

export class EndSessionReq extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): EndSessionReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndSessionReq.AsObject;
  static toObject(includeInstance: boolean, msg: EndSessionReq): EndSessionReq.AsObject;
  static serializeBinaryToWriter(message: EndSessionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndSessionReq;
  static deserializeBinaryFromReader(message: EndSessionReq, reader: jspb.BinaryReader): EndSessionReq;
}

export namespace EndSessionReq {
  export type AsObject = {
    sessionId: string,
  }
}

export class GetStreamingInfoRes extends jspb.Message {
  getServersList(): Array<Server>;
  setServersList(value: Array<Server>): GetStreamingInfoRes;
  clearServersList(): GetStreamingInfoRes;
  addServers(value?: Server, index?: number): Server;

  getType(): StreamingType;
  setType(value: StreamingType): GetStreamingInfoRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamingInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamingInfoRes): GetStreamingInfoRes.AsObject;
  static serializeBinaryToWriter(message: GetStreamingInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamingInfoRes;
  static deserializeBinaryFromReader(message: GetStreamingInfoRes, reader: jspb.BinaryReader): GetStreamingInfoRes;
}

export namespace GetStreamingInfoRes {
  export type AsObject = {
    serversList: Array<Server.AsObject>,
    type: StreamingType,
  }
}

export class GetEpisodesRes extends jspb.Message {
  getEpisodesList(): Array<Episode>;
  setEpisodesList(value: Array<Episode>): GetEpisodesRes;
  clearEpisodesList(): GetEpisodesRes;
  addEpisodes(value?: Episode, index?: number): Episode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEpisodesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetEpisodesRes): GetEpisodesRes.AsObject;
  static serializeBinaryToWriter(message: GetEpisodesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEpisodesRes;
  static deserializeBinaryFromReader(message: GetEpisodesRes, reader: jspb.BinaryReader): GetEpisodesRes;
}

export namespace GetEpisodesRes {
  export type AsObject = {
    episodesList: Array<Episode.AsObject>,
  }
}

export class HeartbeatSessionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatSessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatSessionRes): HeartbeatSessionRes.AsObject;
  static serializeBinaryToWriter(message: HeartbeatSessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatSessionRes;
  static deserializeBinaryFromReader(message: HeartbeatSessionRes, reader: jspb.BinaryReader): HeartbeatSessionRes;
}

export namespace HeartbeatSessionRes {
  export type AsObject = {
  }
}

export class NewSessionRes extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): NewSessionRes;

  getHeartbeatInterval(): number;
  setHeartbeatInterval(value: number): NewSessionRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewSessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: NewSessionRes): NewSessionRes.AsObject;
  static serializeBinaryToWriter(message: NewSessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewSessionRes;
  static deserializeBinaryFromReader(message: NewSessionRes, reader: jspb.BinaryReader): NewSessionRes;
}

export namespace NewSessionRes {
  export type AsObject = {
    sessionId: string,
    heartbeatInterval: number,
  }
}

export class EndSessionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndSessionRes.AsObject;
  static toObject(includeInstance: boolean, msg: EndSessionRes): EndSessionRes.AsObject;
  static serializeBinaryToWriter(message: EndSessionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndSessionRes;
  static deserializeBinaryFromReader(message: EndSessionRes, reader: jspb.BinaryReader): EndSessionRes;
}

export namespace EndSessionRes {
  export type AsObject = {
  }
}

export enum SourceType { 
  STREAMING_SOURCE_TYPE_INVALID = 0,
  STREAMING_SOURCE_TYPE_HLS = 1,
  STREAMING_SOURCE_TYPE_MP4 = 2,
}
export enum StreamingType { 
  STREAMING_TYPE_INVALID = 0,
  STREAMING_TYPE_VOD = 1,
  STREAMING_TYPE_LIVE_STREAM = 2,
}
