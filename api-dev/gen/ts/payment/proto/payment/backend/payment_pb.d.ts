import * as jspb from 'google-protobuf'



export class PaymentMethodInfo extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): PaymentMethodInfo;

  getName(): string;
  setName(value: string): PaymentMethodInfo;

  getCode(): string;
  setCode(value: string): PaymentMethodInfo;

  getMethod(): PaymentMethod;
  setMethod(value: PaymentMethod): PaymentMethodInfo;

  getFee(): number;
  setFee(value: number): PaymentMethodInfo;

  getAdditionalFee(): number;
  setAdditionalFee(value: number): PaymentMethodInfo;

  getDisplayFee(): string;
  setDisplayFee(value: string): PaymentMethodInfo;

  getIcon(): string;
  setIcon(value: string): PaymentMethodInfo;

  getId(): string;
  setId(value: string): PaymentMethodInfo;

  getTag(): string;
  setTag(value: string): PaymentMethodInfo;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): PaymentMethodInfo;

  getIncludeFee(): boolean;
  setIncludeFee(value: boolean): PaymentMethodInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentMethodInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentMethodInfo): PaymentMethodInfo.AsObject;
  static serializeBinaryToWriter(message: PaymentMethodInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentMethodInfo;
  static deserializeBinaryFromReader(message: PaymentMethodInfo, reader: jspb.BinaryReader): PaymentMethodInfo;
}

export namespace PaymentMethodInfo {
  export type AsObject = {
    partnershipId: string,
    name: string,
    code: string,
    method: PaymentMethod,
    fee: number,
    additionalFee: number,
    displayFee: string,
    icon: string,
    id: string,
    tag: string,
    isEnable: boolean,
    includeFee: boolean,
  }
}

export class CreatePaymentMethodReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): CreatePaymentMethodReq;

  getName(): string;
  setName(value: string): CreatePaymentMethodReq;

  getCode(): string;
  setCode(value: string): CreatePaymentMethodReq;

  getMethod(): PaymentMethod;
  setMethod(value: PaymentMethod): CreatePaymentMethodReq;

  getFee(): number;
  setFee(value: number): CreatePaymentMethodReq;

  getAdditionalFee(): number;
  setAdditionalFee(value: number): CreatePaymentMethodReq;

  getDisplayFee(): string;
  setDisplayFee(value: string): CreatePaymentMethodReq;

  getIcon(): string;
  setIcon(value: string): CreatePaymentMethodReq;

  getTag(): string;
  setTag(value: string): CreatePaymentMethodReq;

  getIsEnable(): boolean;
  setIsEnable(value: boolean): CreatePaymentMethodReq;

  getIncludeFee(): boolean;
  setIncludeFee(value: boolean): CreatePaymentMethodReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentMethodReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentMethodReq): CreatePaymentMethodReq.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentMethodReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentMethodReq;
  static deserializeBinaryFromReader(message: CreatePaymentMethodReq, reader: jspb.BinaryReader): CreatePaymentMethodReq;
}

export namespace CreatePaymentMethodReq {
  export type AsObject = {
    partnershipId: string,
    name: string,
    code: string,
    method: PaymentMethod,
    fee: number,
    additionalFee: number,
    displayFee: string,
    icon: string,
    tag: string,
    isEnable: boolean,
    includeFee: boolean,
  }
}

export class GetPaymentMethodByIdReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): GetPaymentMethodByIdReq;

  getId(): string;
  setId(value: string): GetPaymentMethodByIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodByIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodByIdReq): GetPaymentMethodByIdReq.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodByIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodByIdReq;
  static deserializeBinaryFromReader(message: GetPaymentMethodByIdReq, reader: jspb.BinaryReader): GetPaymentMethodByIdReq;
}

export namespace GetPaymentMethodByIdReq {
  export type AsObject = {
    partnershipId: string,
    id: string,
  }
}

export class GetPaymentMethodByCodeReq extends jspb.Message {
  getPartnershipId(): string;
  setPartnershipId(value: string): GetPaymentMethodByCodeReq;

  getCode(): string;
  setCode(value: string): GetPaymentMethodByCodeReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodByCodeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodByCodeReq): GetPaymentMethodByCodeReq.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodByCodeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodByCodeReq;
  static deserializeBinaryFromReader(message: GetPaymentMethodByCodeReq, reader: jspb.BinaryReader): GetPaymentMethodByCodeReq;
}

export namespace GetPaymentMethodByCodeReq {
  export type AsObject = {
    partnershipId: string,
    code: string,
  }
}

export class CreatePaymentMethodRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePaymentMethodRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePaymentMethodRes): CreatePaymentMethodRes.AsObject;
  static serializeBinaryToWriter(message: CreatePaymentMethodRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePaymentMethodRes;
  static deserializeBinaryFromReader(message: CreatePaymentMethodRes, reader: jspb.BinaryReader): CreatePaymentMethodRes;
}

export namespace CreatePaymentMethodRes {
  export type AsObject = {
  }
}

export class GetPaymentMethodByIdRes extends jspb.Message {
  getPaymentMethod(): PaymentMethodInfo | undefined;
  setPaymentMethod(value?: PaymentMethodInfo): GetPaymentMethodByIdRes;
  hasPaymentMethod(): boolean;
  clearPaymentMethod(): GetPaymentMethodByIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodByIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodByIdRes): GetPaymentMethodByIdRes.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodByIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodByIdRes;
  static deserializeBinaryFromReader(message: GetPaymentMethodByIdRes, reader: jspb.BinaryReader): GetPaymentMethodByIdRes;
}

export namespace GetPaymentMethodByIdRes {
  export type AsObject = {
    paymentMethod?: PaymentMethodInfo.AsObject,
  }
}

export class GetPaymentMethodByCodeRes extends jspb.Message {
  getPaymentMethod(): PaymentMethodInfo | undefined;
  setPaymentMethod(value?: PaymentMethodInfo): GetPaymentMethodByCodeRes;
  hasPaymentMethod(): boolean;
  clearPaymentMethod(): GetPaymentMethodByCodeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodByCodeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodByCodeRes): GetPaymentMethodByCodeRes.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodByCodeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodByCodeRes;
  static deserializeBinaryFromReader(message: GetPaymentMethodByCodeRes, reader: jspb.BinaryReader): GetPaymentMethodByCodeRes;
}

export namespace GetPaymentMethodByCodeRes {
  export type AsObject = {
    paymentMethod?: PaymentMethodInfo.AsObject,
  }
}

export enum PaymentMethod { 
  PAYMENT_METHOD_INVALID = 0,
  PAYMENT_METHOD_PAYPAL = 1,
  PAYMENT_METHOD_VNPAY_EWALLET = 2,
  PAYMENT_METHOD_VNPAY_CREDITCARD = 3,
  PAYMENT_METHOD_VNPAY_BANKTRANSFER = 4,
  PAYMENT_METHOD_VNPAY_QRCODE = 5,
  PAYMENT_METHOD_MANUAL_BANKTRANSFER = 6,
  PAYMENT_METHOD_MOMO = 7,
  PAYMENT_METHOD_TWO_CHECKOUT = 8,
  PAYMENT_METHOD_PAYOO_CREDITCARD = 9,
  PAYMENT_METHOD_PAYOO_DOMESTIC_CARD = 10,
  PAYMENT_METHOD_PAYOO_QRCODE = 11,
  PAYMENT_METHOD_ONE_PAY_CREDITCARD = 12,
  PAYMENT_METHOD_ONE_PAY_CREDITCARD_DOMESTIC_ISSUE = 13,
  PAYMENT_METHOD_ONE_PAY_DOMESTIC_CARD = 14,
  PAYMENT_METHOD_ONE_PAY_QRCODE = 15,
}
