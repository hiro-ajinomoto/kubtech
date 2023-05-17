import * as jspb from 'google-protobuf'



export class CheckProductDeliveryReq extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): CheckProductDeliveryReq;

  getUserId(): string;
  setUserId(value: string): CheckProductDeliveryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckProductDeliveryReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckProductDeliveryReq): CheckProductDeliveryReq.AsObject;
  static serializeBinaryToWriter(message: CheckProductDeliveryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckProductDeliveryReq;
  static deserializeBinaryFromReader(message: CheckProductDeliveryReq, reader: jspb.BinaryReader): CheckProductDeliveryReq;
}

export namespace CheckProductDeliveryReq {
  export type AsObject = {
    productId: string,
    userId: string,
  }
}

export class CheckProductDeliveryRes extends jspb.Message {
  getBought(): boolean;
  setBought(value: boolean): CheckProductDeliveryRes;

  getExpiredTime(): number;
  setExpiredTime(value: number): CheckProductDeliveryRes;

  getRemainingTime(): number;
  setRemainingTime(value: number): CheckProductDeliveryRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckProductDeliveryRes.AsObject;
  static toObject(includeInstance: boolean, msg: CheckProductDeliveryRes): CheckProductDeliveryRes.AsObject;
  static serializeBinaryToWriter(message: CheckProductDeliveryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckProductDeliveryRes;
  static deserializeBinaryFromReader(message: CheckProductDeliveryRes, reader: jspb.BinaryReader): CheckProductDeliveryRes;
}

export namespace CheckProductDeliveryRes {
  export type AsObject = {
    bought: boolean,
    expiredTime: number,
    remainingTime: number,
  }
}

