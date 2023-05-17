import * as jspb from 'google-protobuf'

import * as ticket_web_partnership_base_pb from '../../ticket/web_partnership/base_pb';


export class AssignCheckinEventReq extends jspb.Message {
  getInspectorId(): string;
  setInspectorId(value: string): AssignCheckinEventReq;

  getEventId(): string;
  setEventId(value: string): AssignCheckinEventReq;

  getScheduleId(): string;
  setScheduleId(value: string): AssignCheckinEventReq;

  getTimeId(): string;
  setTimeId(value: string): AssignCheckinEventReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignCheckinEventReq.AsObject;
  static toObject(includeInstance: boolean, msg: AssignCheckinEventReq): AssignCheckinEventReq.AsObject;
  static serializeBinaryToWriter(message: AssignCheckinEventReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignCheckinEventReq;
  static deserializeBinaryFromReader(message: AssignCheckinEventReq, reader: jspb.BinaryReader): AssignCheckinEventReq;
}

export namespace AssignCheckinEventReq {
  export type AsObject = {
    inspectorId: string,
    eventId: string,
    scheduleId: string,
    timeId: string,
  }
}

