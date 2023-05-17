import * as jspb from 'google-protobuf'



export class DefaultRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DefaultRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultRes.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultRes): DefaultRes.AsObject;
  static serializeBinaryToWriter(message: DefaultRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultRes;
  static deserializeBinaryFromReader(message: DefaultRes, reader: jspb.BinaryReader): DefaultRes;
}

export namespace DefaultRes {
  export type AsObject = {
    result: boolean,
  }
}

export class Coordinates extends jspb.Message {
  getLat(): number;
  setLat(value: number): Coordinates;

  getLong(): number;
  setLong(value: number): Coordinates;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coordinates.AsObject;
  static toObject(includeInstance: boolean, msg: Coordinates): Coordinates.AsObject;
  static serializeBinaryToWriter(message: Coordinates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coordinates;
  static deserializeBinaryFromReader(message: Coordinates, reader: jspb.BinaryReader): Coordinates;
}

export namespace Coordinates {
  export type AsObject = {
    lat: number,
    pb_long: number,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export enum Boolean { 
  BOOLEAN_INVALID = 0,
  BOOLEAN_TRUE = 1,
  BOOLEAN_FALSE = 2,
}
