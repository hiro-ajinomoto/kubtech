import * as jspb from 'google-protobuf'

import * as proto_notification_mobile_base_pb from '../../../proto/notification/mobile/base_pb';


export class Notification extends jspb.Message {
  getId(): string;
  setId(value: string): Notification;

  getType(): NotificationType;
  setType(value: NotificationType): Notification;

  getTitle(): string;
  setTitle(value: string): Notification;

  getMessage(): string;
  setMessage(value: string): Notification;

  getStatus(): NotificationStatus;
  setStatus(value: NotificationStatus): Notification;

  getRecipientsList(): Array<string>;
  setRecipientsList(value: Array<string>): Notification;
  clearRecipientsList(): Notification;
  addRecipients(value: string, index?: number): Notification;

  getCreatedAt(): string;
  setCreatedAt(value: string): Notification;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: string,
    type: NotificationType,
    title: string,
    message: string,
    status: NotificationStatus,
    recipientsList: Array<string>,
    createdAt: string,
    updatedAt: string,
  }
}

export class PushNotificationReq extends jspb.Message {
  getType(): NotificationType;
  setType(value: NotificationType): PushNotificationReq;

  getTitle(): string;
  setTitle(value: string): PushNotificationReq;

  getMessage(): string;
  setMessage(value: string): PushNotificationReq;

  getStatus(): NotificationStatus;
  setStatus(value: NotificationStatus): PushNotificationReq;

  getRecipientsList(): Array<string>;
  setRecipientsList(value: Array<string>): PushNotificationReq;
  clearRecipientsList(): PushNotificationReq;
  addRecipients(value: string, index?: number): PushNotificationReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushNotificationReq.AsObject;
  static toObject(includeInstance: boolean, msg: PushNotificationReq): PushNotificationReq.AsObject;
  static serializeBinaryToWriter(message: PushNotificationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushNotificationReq;
  static deserializeBinaryFromReader(message: PushNotificationReq, reader: jspb.BinaryReader): PushNotificationReq;
}

export namespace PushNotificationReq {
  export type AsObject = {
    type: NotificationType,
    title: string,
    message: string,
    status: NotificationStatus,
    recipientsList: Array<string>,
  }
}

export class SubscribeTopicReq extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): SubscribeTopicReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTopicReq.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTopicReq): SubscribeTopicReq.AsObject;
  static serializeBinaryToWriter(message: SubscribeTopicReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTopicReq;
  static deserializeBinaryFromReader(message: SubscribeTopicReq, reader: jspb.BinaryReader): SubscribeTopicReq;
}

export namespace SubscribeTopicReq {
  export type AsObject = {
    topic: string,
  }
}

export class UnsubscribeTopicReq extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): UnsubscribeTopicReq;

  getUserId(): string;
  setUserId(value: string): UnsubscribeTopicReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeTopicReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeTopicReq): UnsubscribeTopicReq.AsObject;
  static serializeBinaryToWriter(message: UnsubscribeTopicReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeTopicReq;
  static deserializeBinaryFromReader(message: UnsubscribeTopicReq, reader: jspb.BinaryReader): UnsubscribeTopicReq;
}

export namespace UnsubscribeTopicReq {
  export type AsObject = {
    topic: string,
    userId: string,
  }
}

export enum NotificationStatus { 
  NOTIFICATION_STATUS_INVALID = 0,
  NOTIFICATION_STATUS_CREATED = 1,
  NOTIFICATION_STATUS_SENT = 2,
}
export enum NotificationType { 
  NOTIFICATION_TYPE_INVALID = 0,
  NOTIFICATION_TYPE_PUSH = 1,
  NOTIFICATION_TYPE_BACKGROUND = 2,
}
