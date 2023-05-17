import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class DefaultRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DefaultRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefaultRes.AsObject;
  static toObject(includeInstance: boolean, msg: DefaultRes): DefaultRes.AsObject;
  static serializeBinaryToWriter(message: DefaultRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefaultRes;
  static deserializeBinaryFromReader(message: DefaultRes, reader: jspb.BinaryReader): DefaultRes;
}

export namespace DefaultRes {
  export type AsObject = {
    result: boolean,
  }
}

export enum TransactionType { 
  TRANSACTION_TYPE_INVALID = 0,
  TRANSACTION_TYPE_TOP_UP = 1,
  TRANSACTION_TYPE_PAY = 2,
  TRANSACTION_TYPE_WITHDRAW = 3,
}
export enum TransactionStatus { 
  TRANSACTION_STATUS_INVALID = 0,
  TRANSACTION_STATUS_PENDING = 1,
  TRANSACTION_STATUS_PROCESSING = 2,
  TRANSACTION_STATUS_SUCCESSFUL = 3,
  TRANSACTION_STATUS_FAILED = 4,
  TRANSACTION_STATUS_CANCELED = 5,
}
