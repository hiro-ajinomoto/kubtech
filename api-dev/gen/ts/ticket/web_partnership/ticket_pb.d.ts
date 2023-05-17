import * as jspb from 'google-protobuf'

import * as ticket_web_partnership_base_pb from '../../ticket/web_partnership/base_pb';


export class PushNotificationUpdateInfoReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotificationUpdateInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotificationUpdateInfoReq): PushNotificationUpdateInfoReq.AsObject;
  static serializeBinaryToWriter(message: PushNotificationUpdateInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotificationUpdateInfoReq;
  static deserializeBinaryFromReader(message: PushNotificationUpdateInfoReq, reader: jspb.BinaryReader): PushNotificationUpdateInfoReq;
}

export namespace PushNotificationUpdateInfoReq {
  export type AsObject = {
  }
}

export class PushNotificationRemindUpdateUserInfoReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotificationRemindUpdateUserInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotificationRemindUpdateUserInfoReq): PushNotificationRemindUpdateUserInfoReq.AsObject;
  static serializeBinaryToWriter(message: PushNotificationRemindUpdateUserInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotificationRemindUpdateUserInfoReq;
  static deserializeBinaryFromReader(message: PushNotificationRemindUpdateUserInfoReq, reader: jspb.BinaryReader): PushNotificationRemindUpdateUserInfoReq;
}

export namespace PushNotificationRemindUpdateUserInfoReq {
  export type AsObject = {
  }
}

export class PushNotificationRemindCheckinTimeHasComeReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotificationRemindCheckinTimeHasComeReq.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotificationRemindCheckinTimeHasComeReq): PushNotificationRemindCheckinTimeHasComeReq.AsObject;
  static serializeBinaryToWriter(message: PushNotificationRemindCheckinTimeHasComeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotificationRemindCheckinTimeHasComeReq;
  static deserializeBinaryFromReader(message: PushNotificationRemindCheckinTimeHasComeReq, reader: jspb.BinaryReader): PushNotificationRemindCheckinTimeHasComeReq;
}

export namespace PushNotificationRemindCheckinTimeHasComeReq {
  export type AsObject = {
  }
}

export class PushNotificationSupportOfflineReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotificationSupportOfflineReq.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotificationSupportOfflineReq): PushNotificationSupportOfflineReq.AsObject;
  static serializeBinaryToWriter(message: PushNotificationSupportOfflineReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotificationSupportOfflineReq;
  static deserializeBinaryFromReader(message: PushNotificationSupportOfflineReq, reader: jspb.BinaryReader): PushNotificationSupportOfflineReq;
}

export namespace PushNotificationSupportOfflineReq {
  export type AsObject = {
  }
}

export class PushNotificationThankReq extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): PushNotificationThankReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotificationThankReq.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotificationThankReq): PushNotificationThankReq.AsObject;
  static serializeBinaryToWriter(message: PushNotificationThankReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotificationThankReq;
  static deserializeBinaryFromReader(message: PushNotificationThankReq, reader: jspb.BinaryReader): PushNotificationThankReq;
}

export namespace PushNotificationThankReq {
  export type AsObject = {
    eventId: string,
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

