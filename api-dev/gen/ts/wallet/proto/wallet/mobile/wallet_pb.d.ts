import * as jspb from 'google-protobuf'

import * as proto_wallet_mobile_base_pb from '../../../proto/wallet/mobile/base_pb';


export class Wallet extends jspb.Message {
  getId(): string;
  setId(value: string): Wallet;

  getUserId(): string;
  setUserId(value: string): Wallet;

  getPartnershipId(): string;
  setPartnershipId(value: string): Wallet;

  getBalance(): number;
  setBalance(value: number): Wallet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wallet.AsObject;
  static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
  static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wallet;
  static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
  export type AsObject = {
    id: string,
    userId: string,
    partnershipId: string,
    balance: number,
  }
}

export class TopUpPaymentInfo extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): TopUpPaymentInfo;

  getTransactionStatus(): proto_wallet_mobile_base_pb.TransactionStatus;
  setTransactionStatus(value: proto_wallet_mobile_base_pb.TransactionStatus): TopUpPaymentInfo;

  getAmount(): number;
  setAmount(value: number): TopUpPaymentInfo;

  getFee(): number;
  setFee(value: number): TopUpPaymentInfo;

  getTotalPrice(): number;
  setTotalPrice(value: number): TopUpPaymentInfo;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): TopUpPaymentInfo;

  getPaymentMethod(): TopUpPaymentMethod | undefined;
  setPaymentMethod(value?: TopUpPaymentMethod): TopUpPaymentInfo;
  hasPaymentMethod(): boolean;
  clearPaymentMethod(): TopUpPaymentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopUpPaymentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TopUpPaymentInfo): TopUpPaymentInfo.AsObject;
  static serializeBinaryToWriter(message: TopUpPaymentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopUpPaymentInfo;
  static deserializeBinaryFromReader(message: TopUpPaymentInfo, reader: jspb.BinaryReader): TopUpPaymentInfo;
}

export namespace TopUpPaymentInfo {
  export type AsObject = {
    transactionId: string,
    transactionStatus: proto_wallet_mobile_base_pb.TransactionStatus,
    amount: number,
    fee: number,
    totalPrice: number,
    currencyCode: string,
    paymentMethod?: TopUpPaymentMethod.AsObject,
  }
}

export class TopUpPaymentMethod extends jspb.Message {
  getId(): string;
  setId(value: string): TopUpPaymentMethod;

  getName(): string;
  setName(value: string): TopUpPaymentMethod;

  getCode(): string;
  setCode(value: string): TopUpPaymentMethod;

  getMethod(): number;
  setMethod(value: number): TopUpPaymentMethod;

  getFee(): number;
  setFee(value: number): TopUpPaymentMethod;

  getAdditionalFee(): number;
  setAdditionalFee(value: number): TopUpPaymentMethod;

  getDisplayFee(): string;
  setDisplayFee(value: string): TopUpPaymentMethod;

  getIcon(): string;
  setIcon(value: string): TopUpPaymentMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopUpPaymentMethod.AsObject;
  static toObject(includeInstance: boolean, msg: TopUpPaymentMethod): TopUpPaymentMethod.AsObject;
  static serializeBinaryToWriter(message: TopUpPaymentMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopUpPaymentMethod;
  static deserializeBinaryFromReader(message: TopUpPaymentMethod, reader: jspb.BinaryReader): TopUpPaymentMethod;
}

export namespace TopUpPaymentMethod {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    method: number,
    fee: number,
    additionalFee: number,
    displayFee: string,
    icon: string,
  }
}

export class Payoo extends jspb.Message {
  getOrderXml(): string;
  setOrderXml(value: string): Payoo;

  getOrderChecksum(): string;
  setOrderChecksum(value: string): Payoo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payoo.AsObject;
  static toObject(includeInstance: boolean, msg: Payoo): Payoo.AsObject;
  static serializeBinaryToWriter(message: Payoo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payoo;
  static deserializeBinaryFromReader(message: Payoo, reader: jspb.BinaryReader): Payoo;
}

export namespace Payoo {
  export type AsObject = {
    orderXml: string,
    orderChecksum: string,
  }
}

export class TopUpPaymentSDK extends jspb.Message {
  getPayoo(): Payoo | undefined;
  setPayoo(value?: Payoo): TopUpPaymentSDK;
  hasPayoo(): boolean;
  clearPayoo(): TopUpPaymentSDK;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopUpPaymentSDK.AsObject;
  static toObject(includeInstance: boolean, msg: TopUpPaymentSDK): TopUpPaymentSDK.AsObject;
  static serializeBinaryToWriter(message: TopUpPaymentSDK, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopUpPaymentSDK;
  static deserializeBinaryFromReader(message: TopUpPaymentSDK, reader: jspb.BinaryReader): TopUpPaymentSDK;
}

export namespace TopUpPaymentSDK {
  export type AsObject = {
    payoo?: Payoo.AsObject,
  }
}

export class TopUpPaymentActionData extends jspb.Message {
  getWebviewUrl(): string;
  setWebviewUrl(value: string): TopUpPaymentActionData;

  getSdk(): TopUpPaymentSDK | undefined;
  setSdk(value?: TopUpPaymentSDK): TopUpPaymentActionData;
  hasSdk(): boolean;
  clearSdk(): TopUpPaymentActionData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopUpPaymentActionData.AsObject;
  static toObject(includeInstance: boolean, msg: TopUpPaymentActionData): TopUpPaymentActionData.AsObject;
  static serializeBinaryToWriter(message: TopUpPaymentActionData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopUpPaymentActionData;
  static deserializeBinaryFromReader(message: TopUpPaymentActionData, reader: jspb.BinaryReader): TopUpPaymentActionData;
}

export namespace TopUpPaymentActionData {
  export type AsObject = {
    webviewUrl: string,
    sdk?: TopUpPaymentSDK.AsObject,
  }
}

export class GetWalletInfoReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWalletInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetWalletInfoReq): GetWalletInfoReq.AsObject;
  static serializeBinaryToWriter(message: GetWalletInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWalletInfoReq;
  static deserializeBinaryFromReader(message: GetWalletInfoReq, reader: jspb.BinaryReader): GetWalletInfoReq;
}

export namespace GetWalletInfoReq {
  export type AsObject = {
  }
}

export class TopUpReq extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): TopUpReq;

  getPaymentMethodCode(): string;
  setPaymentMethodCode(value: string): TopUpReq;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): TopUpReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopUpReq.AsObject;
  static toObject(includeInstance: boolean, msg: TopUpReq): TopUpReq.AsObject;
  static serializeBinaryToWriter(message: TopUpReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopUpReq;
  static deserializeBinaryFromReader(message: TopUpReq, reader: jspb.BinaryReader): TopUpReq;
}

export namespace TopUpReq {
  export type AsObject = {
    amount: number,
    paymentMethodCode: string,
    currencyCode: string,
  }
}

export class CalculateTopUpAmountReq extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): CalculateTopUpAmountReq;

  getPaymentMethodCode(): string;
  setPaymentMethodCode(value: string): CalculateTopUpAmountReq;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): CalculateTopUpAmountReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateTopUpAmountReq.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateTopUpAmountReq): CalculateTopUpAmountReq.AsObject;
  static serializeBinaryToWriter(message: CalculateTopUpAmountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateTopUpAmountReq;
  static deserializeBinaryFromReader(message: CalculateTopUpAmountReq, reader: jspb.BinaryReader): CalculateTopUpAmountReq;
}

export namespace CalculateTopUpAmountReq {
  export type AsObject = {
    amount: number,
    paymentMethodCode: string,
    currencyCode: string,
  }
}

export class GetWalletInfoRes extends jspb.Message {
  getWallet(): Wallet | undefined;
  setWallet(value?: Wallet): GetWalletInfoRes;
  hasWallet(): boolean;
  clearWallet(): GetWalletInfoRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWalletInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetWalletInfoRes): GetWalletInfoRes.AsObject;
  static serializeBinaryToWriter(message: GetWalletInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWalletInfoRes;
  static deserializeBinaryFromReader(message: GetWalletInfoRes, reader: jspb.BinaryReader): GetWalletInfoRes;
}

export namespace GetWalletInfoRes {
  export type AsObject = {
    wallet?: Wallet.AsObject,
  }
}

export class TopUpRes extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): TopUpRes;

  getAction(): TopUpPaymentAction;
  setAction(value: TopUpPaymentAction): TopUpRes;

  getActionData(): TopUpPaymentActionData | undefined;
  setActionData(value?: TopUpPaymentActionData): TopUpRes;
  hasActionData(): boolean;
  clearActionData(): TopUpRes;

  getPayment(): TopUpPaymentInfo | undefined;
  setPayment(value?: TopUpPaymentInfo): TopUpRes;
  hasPayment(): boolean;
  clearPayment(): TopUpRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopUpRes.AsObject;
  static toObject(includeInstance: boolean, msg: TopUpRes): TopUpRes.AsObject;
  static serializeBinaryToWriter(message: TopUpRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopUpRes;
  static deserializeBinaryFromReader(message: TopUpRes, reader: jspb.BinaryReader): TopUpRes;
}

export namespace TopUpRes {
  export type AsObject = {
    success: boolean,
    action: TopUpPaymentAction,
    actionData?: TopUpPaymentActionData.AsObject,
    payment?: TopUpPaymentInfo.AsObject,
  }
}

export class CalculateTopUpAmountRes extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): CalculateTopUpAmountRes;

  getFee(): number;
  setFee(value: number): CalculateTopUpAmountRes;

  getTotalPrice(): number;
  setTotalPrice(value: number): CalculateTopUpAmountRes;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): CalculateTopUpAmountRes;

  getPaymentMethod(): TopUpPaymentMethod | undefined;
  setPaymentMethod(value?: TopUpPaymentMethod): CalculateTopUpAmountRes;
  hasPaymentMethod(): boolean;
  clearPaymentMethod(): CalculateTopUpAmountRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculateTopUpAmountRes.AsObject;
  static toObject(includeInstance: boolean, msg: CalculateTopUpAmountRes): CalculateTopUpAmountRes.AsObject;
  static serializeBinaryToWriter(message: CalculateTopUpAmountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculateTopUpAmountRes;
  static deserializeBinaryFromReader(message: CalculateTopUpAmountRes, reader: jspb.BinaryReader): CalculateTopUpAmountRes;
}

export namespace CalculateTopUpAmountRes {
  export type AsObject = {
    amount: number,
    fee: number,
    totalPrice: number,
    currencyCode: string,
    paymentMethod?: TopUpPaymentMethod.AsObject,
  }
}

export enum TopUpPaymentAction { 
  TOP_UP_PAYMENT_ACTION_WEB_VIEW = 0,
  TOP_UP_PAYMENT_ACTION_BROWSER = 1,
  TOP_UP_PAYMENT_ACTION_IN_APP_SDK = 2,
}
