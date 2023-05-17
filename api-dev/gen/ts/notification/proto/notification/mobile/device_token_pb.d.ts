import * as jspb from 'google-protobuf'

import * as proto_notification_mobile_base_pb from '../../../proto/notification/mobile/base_pb';


export class DeviceToken extends jspb.Message {
  getId(): string;
  setId(value: string): DeviceToken;

  getUserId(): string;
  setUserId(value: string): DeviceToken;

  getDeviceId(): string;
  setDeviceId(value: string): DeviceToken;

  getToken(): string;
  setToken(value: string): DeviceToken;

  getPlatform(): DevicePlatform;
  setPlatform(value: DevicePlatform): DeviceToken;

  getStatus(): DeviceTokenStatus;
  setStatus(value: DeviceTokenStatus): DeviceToken;

  getCreatedAt(): string;
  setCreatedAt(value: string): DeviceToken;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): DeviceToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceToken.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceToken): DeviceToken.AsObject;
  static serializeBinaryToWriter(message: DeviceToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceToken;
  static deserializeBinaryFromReader(message: DeviceToken, reader: jspb.BinaryReader): DeviceToken;
}

export namespace DeviceToken {
  export type AsObject = {
    id: string,
    userId: string,
    deviceId: string,
    token: string,
    platform: DevicePlatform,
    status: DeviceTokenStatus,
    createdAt: string,
    updatedAt: string,
  }
}

export class RegisterDeviceTokenReq extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): RegisterDeviceTokenReq;

  getToken(): string;
  setToken(value: string): RegisterDeviceTokenReq;

  getPlatform(): DevicePlatform;
  setPlatform(value: DevicePlatform): RegisterDeviceTokenReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterDeviceTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterDeviceTokenReq): RegisterDeviceTokenReq.AsObject;
  static serializeBinaryToWriter(message: RegisterDeviceTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterDeviceTokenReq;
  static deserializeBinaryFromReader(message: RegisterDeviceTokenReq, reader: jspb.BinaryReader): RegisterDeviceTokenReq;
}

export namespace RegisterDeviceTokenReq {
  export type AsObject = {
    deviceId: string,
    token: string,
    platform: DevicePlatform,
  }
}

export class DeregisterDeviceTokenReq extends jspb.Message {
  getToken(): string;
  setToken(value: string): DeregisterDeviceTokenReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeregisterDeviceTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeregisterDeviceTokenReq): DeregisterDeviceTokenReq.AsObject;
  static serializeBinaryToWriter(message: DeregisterDeviceTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeregisterDeviceTokenReq;
  static deserializeBinaryFromReader(message: DeregisterDeviceTokenReq, reader: jspb.BinaryReader): DeregisterDeviceTokenReq;
}

export namespace DeregisterDeviceTokenReq {
  export type AsObject = {
    token: string,
  }
}

export enum DeviceTokenStatus { 
  DEVICE_TOKEN_STATUS_INVALID = 0,
  DEVICE_TOKEN_STATUS_ACTIVE = 1,
  DEVICE_TOKEN_STATUS_INACTIVE = 2,
}
export enum DevicePlatform { 
  DEVICE_PLATFORM_INVALID = 0,
  DEVICE_PLATFORM_ANDROID = 1,
  DEVICE_PLATFORM_IOS = 2,
  DEVICE_PLATFORM_WEB = 3,
}
