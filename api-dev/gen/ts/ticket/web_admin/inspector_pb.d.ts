import * as jspb from 'google-protobuf'

import * as ticket_web_admin_base_pb from '../../ticket/web_admin/base_pb';


export class StreamCheckinLogsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCheckinLogsReq.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCheckinLogsReq): StreamCheckinLogsReq.AsObject;
  static serializeBinaryToWriter(message: StreamCheckinLogsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCheckinLogsReq;
  static deserializeBinaryFromReader(message: StreamCheckinLogsReq, reader: jspb.BinaryReader): StreamCheckinLogsReq;
}

export namespace StreamCheckinLogsReq {
  export type AsObject = {
  }
}

