import * as jspb from 'google-protobuf'

import * as ticket_web_partnership_base_pb from '../../ticket/web_partnership/base_pb';


export class GenPaperTicketInfoReq extends jspb.Message {
  getTotalTicket(): number;
  setTotalTicket(value: number): GenPaperTicketInfoReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenPaperTicketInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GenPaperTicketInfoReq): GenPaperTicketInfoReq.AsObject;
  static serializeBinaryToWriter(message: GenPaperTicketInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenPaperTicketInfoReq;
  static deserializeBinaryFromReader(message: GenPaperTicketInfoReq, reader: jspb.BinaryReader): GenPaperTicketInfoReq;
}

export namespace GenPaperTicketInfoReq {
  export type AsObject = {
    totalTicket: number,
  }
}

