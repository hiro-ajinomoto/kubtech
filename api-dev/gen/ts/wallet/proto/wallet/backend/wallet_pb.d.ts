import * as jspb from 'google-protobuf'



export class CanPayReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CanPayReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): CanPayReq;

  getAmount(): number;
  setAmount(value: number): CanPayReq;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): CanPayReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanPayReq.AsObject;
  static toObject(includeInstance: boolean, msg: CanPayReq): CanPayReq.AsObject;
  static serializeBinaryToWriter(message: CanPayReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanPayReq;
  static deserializeBinaryFromReader(message: CanPayReq, reader: jspb.BinaryReader): CanPayReq;
}

export namespace CanPayReq {
  export type AsObject = {
    userId: string,
    partnershipId: string,
    amount: number,
    currencyCode: string,
  }
}

export class PayReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): PayReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): PayReq;

  getAmount(): number;
  setAmount(value: number): PayReq;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): PayReq;

  getServiceName(): string;
  setServiceName(value: string): PayReq;

  getServiceRefId(): string;
  setServiceRefId(value: string): PayReq;

  getDescription(): string;
  setDescription(value: string): PayReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayReq.AsObject;
  static toObject(includeInstance: boolean, msg: PayReq): PayReq.AsObject;
  static serializeBinaryToWriter(message: PayReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayReq;
  static deserializeBinaryFromReader(message: PayReq, reader: jspb.BinaryReader): PayReq;
}

export namespace PayReq {
  export type AsObject = {
    userId: string,
    partnershipId: string,
    amount: number,
    currencyCode: string,
    serviceName: string,
    serviceRefId: string,
    description: string,
  }
}

export class GetWalletBalanceReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetWalletBalanceReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetWalletBalanceReq;

  getConvertToCurrencyCode(): string;
  setConvertToCurrencyCode(value: string): GetWalletBalanceReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWalletBalanceReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetWalletBalanceReq): GetWalletBalanceReq.AsObject;
  static serializeBinaryToWriter(message: GetWalletBalanceReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWalletBalanceReq;
  static deserializeBinaryFromReader(message: GetWalletBalanceReq, reader: jspb.BinaryReader): GetWalletBalanceReq;
}

export namespace GetWalletBalanceReq {
  export type AsObject = {
    userId: string,
    partnershipId: string,
    convertToCurrencyCode: string,
  }
}

export class CanPayRes extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): CanPayRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanPayRes.AsObject;
  static toObject(includeInstance: boolean, msg: CanPayRes): CanPayRes.AsObject;
  static serializeBinaryToWriter(message: CanPayRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanPayRes;
  static deserializeBinaryFromReader(message: CanPayRes, reader: jspb.BinaryReader): CanPayRes;
}

export namespace CanPayRes {
  export type AsObject = {
    success: boolean,
  }
}

export class PayRes extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): PayRes;

  getTransactionId(): string;
  setTransactionId(value: string): PayRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayRes.AsObject;
  static toObject(includeInstance: boolean, msg: PayRes): PayRes.AsObject;
  static serializeBinaryToWriter(message: PayRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayRes;
  static deserializeBinaryFromReader(message: PayRes, reader: jspb.BinaryReader): PayRes;
}

export namespace PayRes {
  export type AsObject = {
    success: boolean,
    transactionId: string,
  }
}

export class GetWalletBalanceRes extends jspb.Message {
  getBalance(): number;
  setBalance(value: number): GetWalletBalanceRes;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): GetWalletBalanceRes;

  getCurrencyName(): string;
  setCurrencyName(value: string): GetWalletBalanceRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWalletBalanceRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetWalletBalanceRes): GetWalletBalanceRes.AsObject;
  static serializeBinaryToWriter(message: GetWalletBalanceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWalletBalanceRes;
  static deserializeBinaryFromReader(message: GetWalletBalanceRes, reader: jspb.BinaryReader): GetWalletBalanceRes;
}

export namespace GetWalletBalanceRes {
  export type AsObject = {
    balance: number,
    currencyCode: string,
    currencyName: string,
  }
}

