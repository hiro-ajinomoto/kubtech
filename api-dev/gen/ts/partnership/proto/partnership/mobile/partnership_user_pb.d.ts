import * as jspb from 'google-protobuf'

import * as proto_partnership_mobile_base_pb from '../../../proto/partnership/mobile/base_pb';


export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getPassword(): string;
  setPassword(value: string): UserInfo;

  getName(): string;
  setName(value: string): UserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserInfo;

  getDescription(): string;
  setDescription(value: string): UserInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): UserInfo;

  getIsOwner(): proto_partnership_mobile_base_pb.Boolean;
  setIsOwner(value: proto_partnership_mobile_base_pb.Boolean): UserInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): UserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    email: string,
    password: string,
    name: string,
    profilePicture: string,
    description: string,
    partnershipId: string,
    isOwner: proto_partnership_mobile_base_pb.Boolean,
    phoneCode: string,
    phoneNumber: string,
  }
}

export class UpdateMeReq extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateMeReq;

  getProfilePicture(): string;
  setProfilePicture(value: string): UpdateMeReq;

  getDescription(): string;
  setDescription(value: string): UpdateMeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMeReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMeReq): UpdateMeReq.AsObject;
  static serializeBinaryToWriter(message: UpdateMeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMeReq;
  static deserializeBinaryFromReader(message: UpdateMeReq, reader: jspb.BinaryReader): UpdateMeReq;
}

export namespace UpdateMeReq {
  export type AsObject = {
    name: string,
    profilePicture: string,
    description: string,
  }
}

export class ChangePasswordReq extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): ChangePasswordReq;

  getPassword(): string;
  setPassword(value: string): ChangePasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordReq): ChangePasswordReq.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordReq;
  static deserializeBinaryFromReader(message: ChangePasswordReq, reader: jspb.BinaryReader): ChangePasswordReq;
}

export namespace ChangePasswordReq {
  export type AsObject = {
    oldPassword: string,
    password: string,
  }
}

export class GetMeReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeReq): GetMeReq.AsObject;
  static serializeBinaryToWriter(message: GetMeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeReq;
  static deserializeBinaryFromReader(message: GetMeReq, reader: jspb.BinaryReader): GetMeReq;
}

export namespace GetMeReq {
  export type AsObject = {
  }
}

export class SendOtpToResetPasswordReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): SendOtpToResetPasswordReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): SendOtpToResetPasswordReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): SendOtpToResetPasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToResetPasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToResetPasswordReq): SendOtpToResetPasswordReq.AsObject;
  static serializeBinaryToWriter(message: SendOtpToResetPasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToResetPasswordReq;
  static deserializeBinaryFromReader(message: SendOtpToResetPasswordReq, reader: jspb.BinaryReader): SendOtpToResetPasswordReq;
}

export namespace SendOtpToResetPasswordReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    partnershipId: string,
  }
}

export class VerifyOtpToResetPasswordReq extends jspb.Message {
  getPhoneCode(): string;
  setPhoneCode(value: string): VerifyOtpToResetPasswordReq;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyOtpToResetPasswordReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): VerifyOtpToResetPasswordReq;

  getOtp(): string;
  setOtp(value: string): VerifyOtpToResetPasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordReq): VerifyOtpToResetPasswordReq.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordReq;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordReq, reader: jspb.BinaryReader): VerifyOtpToResetPasswordReq;
}

export namespace VerifyOtpToResetPasswordReq {
  export type AsObject = {
    phoneCode: string,
    phoneNumber: string,
    partnershipId: string,
    otp: string,
  }
}

export class ResetPasswordReq extends jspb.Message {
  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordReq): ResetPasswordReq.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordReq;
  static deserializeBinaryFromReader(message: ResetPasswordReq, reader: jspb.BinaryReader): ResetPasswordReq;
}

export namespace ResetPasswordReq {
  export type AsObject = {
    newPassword: string,
  }
}

export class GetMeRes extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): GetMeRes;
  hasUserInfo(): boolean;
  clearUserInfo(): GetMeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeRes): GetMeRes.AsObject;
  static serializeBinaryToWriter(message: GetMeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeRes;
  static deserializeBinaryFromReader(message: GetMeRes, reader: jspb.BinaryReader): GetMeRes;
}

export namespace GetMeRes {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

export class SendOtpToResetPasswordRes extends jspb.Message {
  getTimeRemaining(): number;
  setTimeRemaining(value: number): SendOtpToResetPasswordRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOtpToResetPasswordRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendOtpToResetPasswordRes): SendOtpToResetPasswordRes.AsObject;
  static serializeBinaryToWriter(message: SendOtpToResetPasswordRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOtpToResetPasswordRes;
  static deserializeBinaryFromReader(message: SendOtpToResetPasswordRes, reader: jspb.BinaryReader): SendOtpToResetPasswordRes;
}

export namespace SendOtpToResetPasswordRes {
  export type AsObject = {
    timeRemaining: number,
  }
}

export class VerifyOtpToResetPasswordRes extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): VerifyOtpToResetPasswordRes;

  getExpireTime(): number;
  setExpireTime(value: number): VerifyOtpToResetPasswordRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpToResetPasswordRes.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpToResetPasswordRes): VerifyOtpToResetPasswordRes.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpToResetPasswordRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpToResetPasswordRes;
  static deserializeBinaryFromReader(message: VerifyOtpToResetPasswordRes, reader: jspb.BinaryReader): VerifyOtpToResetPasswordRes;
}

export namespace VerifyOtpToResetPasswordRes {
  export type AsObject = {
    accessToken: string,
    expireTime: number,
  }
}

