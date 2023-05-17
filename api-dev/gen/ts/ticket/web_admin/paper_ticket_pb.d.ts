import * as jspb from 'google-protobuf'

import * as ticket_web_admin_base_pb from '../../ticket/web_admin/base_pb';


export class StreamPaperTicketsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPaperTicketsReq.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPaperTicketsReq): StreamPaperTicketsReq.AsObject;
  static serializeBinaryToWriter(message: StreamPaperTicketsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPaperTicketsReq;
  static deserializeBinaryFromReader(message: StreamPaperTicketsReq, reader: jspb.BinaryReader): StreamPaperTicketsReq;
}

export namespace StreamPaperTicketsReq {
  export type AsObject = {
  }
}

