import * as jspb from 'google-protobuf'



export class CheckUserHasPermissionReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CheckUserHasPermissionReq;

  getUserType(): UserType;
  setUserType(value: UserType): CheckUserHasPermissionReq;

  getPermission(): string;
  setPermission(value: string): CheckUserHasPermissionReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): CheckUserHasPermissionReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUserHasPermissionReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUserHasPermissionReq): CheckUserHasPermissionReq.AsObject;
  static serializeBinaryToWriter(message: CheckUserHasPermissionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUserHasPermissionReq;
  static deserializeBinaryFromReader(message: CheckUserHasPermissionReq, reader: jspb.BinaryReader): CheckUserHasPermissionReq;
}

export namespace CheckUserHasPermissionReq {
  export type AsObject = {
    userId: string,
    userType: UserType,
    permission: string,
    partnershipId: string,
  }
}

export class CheckUserHasPermissionRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): CheckUserHasPermissionRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUserHasPermissionRes.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUserHasPermissionRes): CheckUserHasPermissionRes.AsObject;
  static serializeBinaryToWriter(message: CheckUserHasPermissionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUserHasPermissionRes;
  static deserializeBinaryFromReader(message: CheckUserHasPermissionRes, reader: jspb.BinaryReader): CheckUserHasPermissionRes;
}

export namespace CheckUserHasPermissionRes {
  export type AsObject = {
    result: boolean,
  }
}

export enum UserType { 
  USERTYPEADMIN = 0,
  USERTYPEINSPECTOR = 1,
  USERTYPECUSTOMER = 2,
  USERTYPEPARTNERSHIP = 3,
  USERTYPEPARTNER = 4,
}
