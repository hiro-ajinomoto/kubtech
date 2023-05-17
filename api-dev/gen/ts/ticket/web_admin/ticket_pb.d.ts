import * as jspb from 'google-protobuf'

import * as ticket_web_admin_base_pb from '../../ticket/web_admin/base_pb';


export class StreamTicketsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamTicketsReq.AsObject;
  static toObject(includeInstance: boolean, msg: StreamTicketsReq): StreamTicketsReq.AsObject;
  static serializeBinaryToWriter(message: StreamTicketsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamTicketsReq;
  static deserializeBinaryFromReader(message: StreamTicketsReq, reader: jspb.BinaryReader): StreamTicketsReq;
}

export namespace StreamTicketsReq {
  export type AsObject = {
  }
}

export class MigrationReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrationReq.AsObject;
  static toObject(includeInstance: boolean, msg: MigrationReq): MigrationReq.AsObject;
  static serializeBinaryToWriter(message: MigrationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrationReq;
  static deserializeBinaryFromReader(message: MigrationReq, reader: jspb.BinaryReader): MigrationReq;
}

export namespace MigrationReq {
  export type AsObject = {
  }
}

