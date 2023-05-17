import * as jspb from 'google-protobuf'

import * as product_web_admin_base_pb from '../../product/web_admin/base_pb';


export class MigrationSeatReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrationSeatReq.AsObject;
  static toObject(includeInstance: boolean, msg: MigrationSeatReq): MigrationSeatReq.AsObject;
  static serializeBinaryToWriter(message: MigrationSeatReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrationSeatReq;
  static deserializeBinaryFromReader(message: MigrationSeatReq, reader: jspb.BinaryReader): MigrationSeatReq;
}

export namespace MigrationSeatReq {
  export type AsObject = {
  }
}

export class StreamSeatsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSeatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSeatsReq): StreamSeatsReq.AsObject;
  static serializeBinaryToWriter(message: StreamSeatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSeatsReq;
  static deserializeBinaryFromReader(message: StreamSeatsReq, reader: jspb.BinaryReader): StreamSeatsReq;
}

export namespace StreamSeatsReq {
  export type AsObject = {
  }
}

