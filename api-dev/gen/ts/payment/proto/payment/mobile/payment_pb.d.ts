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
  }
}

export class GetPaymentMethodsReq extends jspb.Message {
  getCartId(): string;
  setCartId(value: string): GetPaymentMethodsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodsReq): GetPaymentMethodsReq.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodsReq;
  static deserializeBinaryFromReader(message: GetPaymentMethodsReq, reader: jspb.BinaryReader): GetPaymentMethodsReq;
}

export namespace GetPaymentMethodsReq {
  export type AsObject = {
    cartId: string,
  }
}

export class GetPaymentMethodsRes extends jspb.Message {
  getPaymentMethodsList(): Array<PaymentMethodInfo>;
  setPaymentMethodsList(value: Array<PaymentMethodInfo>): GetPaymentMethodsRes;
  clearPaymentMethodsList(): GetPaymentMethodsRes;
  addPaymentMethods(value?: PaymentMethodInfo, index?: number): PaymentMethodInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentMethodsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentMethodsRes): GetPaymentMethodsRes.AsObject;
  static serializeBinaryToWriter(message: GetPaymentMethodsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentMethodsRes;
  static deserializeBinaryFromReader(message: GetPaymentMethodsRes, reader: jspb.BinaryReader): GetPaymentMethodsRes;
}

export namespace GetPaymentMethodsRes {
  export type AsObject = {
    paymentMethodsList: Array<PaymentMethodInfo.AsObject>,
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
  PAYMENT_METHOD_APPLE_PAY = 16,
}
