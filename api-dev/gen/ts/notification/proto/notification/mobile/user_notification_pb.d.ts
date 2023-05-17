import * as jspb from 'google-protobuf'

import * as proto_notification_mobile_base_pb from '../../../proto/notification/mobile/base_pb';


export class UserNotification extends jspb.Message {
  getId(): string;
  setId(value: string): UserNotification;

  getAction(): number;
  setAction(value: number): UserNotification;

  getTitle(): string;
  setTitle(value: string): UserNotification;

  getMessage(): string;
  setMessage(value: string): UserNotification;

  getImage(): string;
  setImage(value: string): UserNotification;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): UserNotification;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserNotification;

  getIsRead(): boolean;
  setIsRead(value: boolean): UserNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNotification.AsObject;
  static toObject(includeInstance: boolean, msg: UserNotification): UserNotification.AsObject;
  static serializeBinaryToWriter(message: UserNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNotification;
  static deserializeBinaryFromReader(message: UserNotification, reader: jspb.BinaryReader): UserNotification;
}

export namespace UserNotification {
  export type AsObject = {
    id: string,
    action: number,
    title: string,
    message: string,
    image: string,
    dataMap: Array<[string, string]>,
    createdAt: number,
    isRead: boolean,
  }
}

export class GetUserNotificationsReq extends jspb.Message {
  getPagination(): proto_notification_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_notification_mobile_base_pb.PaginationReq): GetUserNotificationsReq;
  hasPagination(): boolean;
  clearPagination(): GetUserNotificationsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserNotificationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserNotificationsReq): GetUserNotificationsReq.AsObject;
  static serializeBinaryToWriter(message: GetUserNotificationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserNotificationsReq;
  static deserializeBinaryFromReader(message: GetUserNotificationsReq, reader: jspb.BinaryReader): GetUserNotificationsReq;
}

export namespace GetUserNotificationsReq {
  export type AsObject = {
    pagination?: proto_notification_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class MarkAsReadReq extends jspb.Message {
  getNotificationId(): string;
  setNotificationId(value: string): MarkAsReadReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAsReadReq.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAsReadReq): MarkAsReadReq.AsObject;
  static serializeBinaryToWriter(message: MarkAsReadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAsReadReq;
  static deserializeBinaryFromReader(message: MarkAsReadReq, reader: jspb.BinaryReader): MarkAsReadReq;
}

export namespace MarkAsReadReq {
  export type AsObject = {
    notificationId: string,
  }
}

export class DeleteUserNotificationReq extends jspb.Message {
  getNotificationId(): string;
  setNotificationId(value: string): DeleteUserNotificationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserNotificationReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserNotificationReq): DeleteUserNotificationReq.AsObject;
  static serializeBinaryToWriter(message: DeleteUserNotificationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserNotificationReq;
  static deserializeBinaryFromReader(message: DeleteUserNotificationReq, reader: jspb.BinaryReader): DeleteUserNotificationReq;
}

export namespace DeleteUserNotificationReq {
  export type AsObject = {
    notificationId: string,
  }
}

export class GetUserNotificationsRes extends jspb.Message {
  getUnread(): number;
  setUnread(value: number): GetUserNotificationsRes;

  getNotificationsList(): Array<UserNotification>;
  setNotificationsList(value: Array<UserNotification>): GetUserNotificationsRes;
  clearNotificationsList(): GetUserNotificationsRes;
  addNotifications(value?: UserNotification, index?: number): UserNotification;

  getPagination(): proto_notification_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_notification_mobile_base_pb.PaginationRes): GetUserNotificationsRes;
  hasPagination(): boolean;
  clearPagination(): GetUserNotificationsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserNotificationsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserNotificationsRes): GetUserNotificationsRes.AsObject;
  static serializeBinaryToWriter(message: GetUserNotificationsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserNotificationsRes;
  static deserializeBinaryFromReader(message: GetUserNotificationsRes, reader: jspb.BinaryReader): GetUserNotificationsRes;
}

export namespace GetUserNotificationsRes {
  export type AsObject = {
    unread: number,
    notificationsList: Array<UserNotification.AsObject>,
    pagination?: proto_notification_mobile_base_pb.PaginationRes.AsObject,
  }
}

