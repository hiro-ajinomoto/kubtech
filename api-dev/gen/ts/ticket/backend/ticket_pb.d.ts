import * as jspb from 'google-protobuf'

import * as ticket_backend_base_pb from '../../ticket/backend/base_pb';


export class DeleteTicketByOrderIdReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): DeleteTicketByOrderIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTicketByOrderIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTicketByOrderIdReq): DeleteTicketByOrderIdReq.AsObject;
  static serializeBinaryToWriter(message: DeleteTicketByOrderIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTicketByOrderIdReq;
  static deserializeBinaryFromReader(message: DeleteTicketByOrderIdReq, reader: jspb.BinaryReader): DeleteTicketByOrderIdReq;
}

export namespace DeleteTicketByOrderIdReq {
  export type AsObject = {
    orderId: string,
  }
}

export class GetTicketSeatIdByOrderIdReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): GetTicketSeatIdByOrderIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketSeatIdByOrderIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketSeatIdByOrderIdReq): GetTicketSeatIdByOrderIdReq.AsObject;
  static serializeBinaryToWriter(message: GetTicketSeatIdByOrderIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketSeatIdByOrderIdReq;
  static deserializeBinaryFromReader(message: GetTicketSeatIdByOrderIdReq, reader: jspb.BinaryReader): GetTicketSeatIdByOrderIdReq;
}

export namespace GetTicketSeatIdByOrderIdReq {
  export type AsObject = {
    orderId: string,
  }
}

export class GetTicketSeatIdByOrderIdRes extends jspb.Message {
  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): GetTicketSeatIdByOrderIdRes;
  clearSeatIdsList(): GetTicketSeatIdByOrderIdRes;
  addSeatIds(value: string, index?: number): GetTicketSeatIdByOrderIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTicketSeatIdByOrderIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTicketSeatIdByOrderIdRes): GetTicketSeatIdByOrderIdRes.AsObject;
  static serializeBinaryToWriter(message: GetTicketSeatIdByOrderIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTicketSeatIdByOrderIdRes;
  static deserializeBinaryFromReader(message: GetTicketSeatIdByOrderIdRes, reader: jspb.BinaryReader): GetTicketSeatIdByOrderIdRes;
}

export namespace GetTicketSeatIdByOrderIdRes {
  export type AsObject = {
    seatIdsList: Array<string>,
  }
}

