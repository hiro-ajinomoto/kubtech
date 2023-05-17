import * as jspb from 'google-protobuf'

import * as product_base_pb from '../product/base_pb';


export class ProductCollectionInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductCollectionInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ProductCollectionInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ProductCollectionInfo;

  getProductInfo(): ProductCollectionProductInfo | undefined;
  setProductInfo(value?: ProductCollectionProductInfo): ProductCollectionInfo;
  hasProductInfo(): boolean;
  clearProductInfo(): ProductCollectionInfo;

  getUserInfo(): ProductCollectionUserInfo | undefined;
  setUserInfo(value?: ProductCollectionUserInfo): ProductCollectionInfo;
  hasUserInfo(): boolean;
  clearUserInfo(): ProductCollectionInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): ProductCollectionInfo;

  getOrderInfo(): ProductCollectionOrderSimpleInfo | undefined;
  setOrderInfo(value?: ProductCollectionOrderSimpleInfo): ProductCollectionInfo;
  hasOrderInfo(): boolean;
  clearOrderInfo(): ProductCollectionInfo;

  getQuantity(): number;
  setQuantity(value: number): ProductCollectionInfo;

  getExpiredTime(): number;
  setExpiredTime(value: number): ProductCollectionInfo;

  getRemainingTime(): number;
  setRemainingTime(value: number): ProductCollectionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCollectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCollectionInfo): ProductCollectionInfo.AsObject;
  static serializeBinaryToWriter(message: ProductCollectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCollectionInfo;
  static deserializeBinaryFromReader(message: ProductCollectionInfo, reader: jspb.BinaryReader): ProductCollectionInfo;
}

export namespace ProductCollectionInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    productInfo?: ProductCollectionProductInfo.AsObject,
    userInfo?: ProductCollectionUserInfo.AsObject,
    partnershipId: string,
    orderInfo?: ProductCollectionOrderSimpleInfo.AsObject,
    quantity: number,
    expiredTime: number,
    remainingTime: number,
  }
}

export class ProductCollectionProductInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductCollectionProductInfo;

  getActive(): boolean;
  setActive(value: boolean): ProductCollectionProductInfo;

  getName(): string;
  setName(value: string): ProductCollectionProductInfo;

  getTrailerUrl(): string;
  setTrailerUrl(value: string): ProductCollectionProductInfo;

  getMediasList(): Array<product_base_pb.Media>;
  setMediasList(value: Array<product_base_pb.Media>): ProductCollectionProductInfo;
  clearMediasList(): ProductCollectionProductInfo;
  addMedias(value?: product_base_pb.Media, index?: number): product_base_pb.Media;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ProductCollectionProductInfo;
  clearTagsList(): ProductCollectionProductInfo;
  addTags(value: string, index?: number): ProductCollectionProductInfo;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): ProductCollectionProductInfo;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): ProductCollectionProductInfo;

  getDuration(): number;
  setDuration(value: number): ProductCollectionProductInfo;

  getQuantity(): number;
  setQuantity(value: number): ProductCollectionProductInfo;

  getSku(): string;
  setSku(value: string): ProductCollectionProductInfo;

  getListedPrice(): number;
  setListedPrice(value: number): ProductCollectionProductInfo;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): ProductCollectionProductInfo;

  getPrice(): number;
  setPrice(value: number): ProductCollectionProductInfo;

  getRental(): boolean;
  setRental(value: boolean): ProductCollectionProductInfo;

  getUom(): string;
  setUom(value: string): ProductCollectionProductInfo;

  getBarcode(): string;
  setBarcode(value: string): ProductCollectionProductInfo;

  getWeight(): number;
  setWeight(value: number): ProductCollectionProductInfo;

  getVolume(): number;
  setVolume(value: number): ProductCollectionProductInfo;

  getRatingValue(): number;
  setRatingValue(value: number): ProductCollectionProductInfo;

  getRatingCount(): number;
  setRatingCount(value: number): ProductCollectionProductInfo;

  getCurrency(): ProductCollectionProductCurrencyInfo | undefined;
  setCurrency(value?: ProductCollectionProductCurrencyInfo): ProductCollectionProductInfo;
  hasCurrency(): boolean;
  clearCurrency(): ProductCollectionProductInfo;

  getBrand(): string;
  setBrand(value: string): ProductCollectionProductInfo;

  getDescription(): string;
  setDescription(value: string): ProductCollectionProductInfo;

  getLimited(): boolean;
  setLimited(value: boolean): ProductCollectionProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCollectionProductInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCollectionProductInfo): ProductCollectionProductInfo.AsObject;
  static serializeBinaryToWriter(message: ProductCollectionProductInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCollectionProductInfo;
  static deserializeBinaryFromReader(message: ProductCollectionProductInfo, reader: jspb.BinaryReader): ProductCollectionProductInfo;
}

export namespace ProductCollectionProductInfo {
  export type AsObject = {
    id: string,
    active: boolean,
    name: string,
    trailerUrl: string,
    mediasList: Array<product_base_pb.Media.AsObject>,
    tagsList: Array<string>,
    bookingStartTime: number,
    bookingEndTime: number,
    duration: number,
    quantity: number,
    sku: string,
    listedPrice: number,
    discountPercent: number,
    price: number,
    rental: boolean,
    uom: string,
    barcode: string,
    weight: number,
    volume: number,
    ratingValue: number,
    ratingCount: number,
    currency?: ProductCollectionProductCurrencyInfo.AsObject,
    brand: string,
    description: string,
    limited: boolean,
  }
}

export class ProductCollectionUserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductCollectionUserInfo;

  getEmail(): string;
  setEmail(value: string): ProductCollectionUserInfo;

  getName(): string;
  setName(value: string): ProductCollectionUserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): ProductCollectionUserInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): ProductCollectionUserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): ProductCollectionUserInfo;

  getAddr(): string;
  setAddr(value: string): ProductCollectionUserInfo;

  getCity(): string;
  setCity(value: string): ProductCollectionUserInfo;

  getDistrict(): string;
  setDistrict(value: string): ProductCollectionUserInfo;

  getWard(): string;
  setWard(value: string): ProductCollectionUserInfo;

  getDescription(): string;
  setDescription(value: string): ProductCollectionUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCollectionUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCollectionUserInfo): ProductCollectionUserInfo.AsObject;
  static serializeBinaryToWriter(message: ProductCollectionUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCollectionUserInfo;
  static deserializeBinaryFromReader(message: ProductCollectionUserInfo, reader: jspb.BinaryReader): ProductCollectionUserInfo;
}

export namespace ProductCollectionUserInfo {
  export type AsObject = {
    id: string,
    email: string,
    name: string,
    phoneNumber: string,
    phoneCode: string,
    profilePicture: string,
    addr: string,
    city: string,
    district: string,
    ward: string,
    description: string,
  }
}

export class ProductCollectionOrderSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductCollectionOrderSimpleInfo;

  getCartId(): string;
  setCartId(value: string): ProductCollectionOrderSimpleInfo;

  getPaymentMethod(): ProductOrderPaymentMethodInfo | undefined;
  setPaymentMethod(value?: ProductOrderPaymentMethodInfo): ProductCollectionOrderSimpleInfo;
  hasPaymentMethod(): boolean;
  clearPaymentMethod(): ProductCollectionOrderSimpleInfo;

  getOrderCode(): string;
  setOrderCode(value: string): ProductCollectionOrderSimpleInfo;

  getPaymentId(): string;
  setPaymentId(value: string): ProductCollectionOrderSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCollectionOrderSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCollectionOrderSimpleInfo): ProductCollectionOrderSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: ProductCollectionOrderSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCollectionOrderSimpleInfo;
  static deserializeBinaryFromReader(message: ProductCollectionOrderSimpleInfo, reader: jspb.BinaryReader): ProductCollectionOrderSimpleInfo;
}

export namespace ProductCollectionOrderSimpleInfo {
  export type AsObject = {
    id: string,
    cartId: string,
    paymentMethod?: ProductOrderPaymentMethodInfo.AsObject,
    orderCode: string,
    paymentId: string,
  }
}

export class ProductOrderPaymentMethodInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ProductOrderPaymentMethodInfo;

  getCode(): string;
  setCode(value: string): ProductOrderPaymentMethodInfo;

  getMethod(): ProductOrderPaymentMethod;
  setMethod(value: ProductOrderPaymentMethod): ProductOrderPaymentMethodInfo;

  getFee(): number;
  setFee(value: number): ProductOrderPaymentMethodInfo;

  getAdditionalFee(): number;
  setAdditionalFee(value: number): ProductOrderPaymentMethodInfo;

  getDisplayFee(): string;
  setDisplayFee(value: string): ProductOrderPaymentMethodInfo;

  getIcon(): string;
  setIcon(value: string): ProductOrderPaymentMethodInfo;

  getId(): string;
  setId(value: string): ProductOrderPaymentMethodInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductOrderPaymentMethodInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductOrderPaymentMethodInfo): ProductOrderPaymentMethodInfo.AsObject;
  static serializeBinaryToWriter(message: ProductOrderPaymentMethodInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductOrderPaymentMethodInfo;
  static deserializeBinaryFromReader(message: ProductOrderPaymentMethodInfo, reader: jspb.BinaryReader): ProductOrderPaymentMethodInfo;
}

export namespace ProductOrderPaymentMethodInfo {
  export type AsObject = {
    name: string,
    code: string,
    method: ProductOrderPaymentMethod,
    fee: number,
    additionalFee: number,
    displayFee: string,
    icon: string,
    id: string,
  }
}

export class ProductCollectionProductCurrencyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductCollectionProductCurrencyInfo;

  getName(): string;
  setName(value: string): ProductCollectionProductCurrencyInfo;

  getCode(): string;
  setCode(value: string): ProductCollectionProductCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): ProductCollectionProductCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCollectionProductCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCollectionProductCurrencyInfo): ProductCollectionProductCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: ProductCollectionProductCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCollectionProductCurrencyInfo;
  static deserializeBinaryFromReader(message: ProductCollectionProductCurrencyInfo, reader: jspb.BinaryReader): ProductCollectionProductCurrencyInfo;
}

export namespace ProductCollectionProductCurrencyInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class GetMyProductCollectionReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetMyProductCollectionReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyProductCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyProductCollectionReq): GetMyProductCollectionReq.AsObject;
  static serializeBinaryToWriter(message: GetMyProductCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyProductCollectionReq;
  static deserializeBinaryFromReader(message: GetMyProductCollectionReq, reader: jspb.BinaryReader): GetMyProductCollectionReq;
}

export namespace GetMyProductCollectionReq {
  export type AsObject = {
    id: string,
  }
}

export class GetMyProductCollectionByOrderIdReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): GetMyProductCollectionByOrderIdReq;

  getPagination(): product_base_pb.PaginationReq | undefined;
  setPagination(value?: product_base_pb.PaginationReq): GetMyProductCollectionByOrderIdReq;
  hasPagination(): boolean;
  clearPagination(): GetMyProductCollectionByOrderIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyProductCollectionByOrderIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyProductCollectionByOrderIdReq): GetMyProductCollectionByOrderIdReq.AsObject;
  static serializeBinaryToWriter(message: GetMyProductCollectionByOrderIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyProductCollectionByOrderIdReq;
  static deserializeBinaryFromReader(message: GetMyProductCollectionByOrderIdReq, reader: jspb.BinaryReader): GetMyProductCollectionByOrderIdReq;
}

export namespace GetMyProductCollectionByOrderIdReq {
  export type AsObject = {
    orderId: string,
    pagination?: product_base_pb.PaginationReq.AsObject,
  }
}

export class ListMyProductCollectionReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyProductCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyProductCollectionReq): ListMyProductCollectionReq.AsObject;
  static serializeBinaryToWriter(message: ListMyProductCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyProductCollectionReq;
  static deserializeBinaryFromReader(message: ListMyProductCollectionReq, reader: jspb.BinaryReader): ListMyProductCollectionReq;
}

export namespace ListMyProductCollectionReq {
  export type AsObject = {
  }
}

export class InternalCheckProductCollectionReq extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): InternalCheckProductCollectionReq;

  getUserId(): string;
  setUserId(value: string): InternalCheckProductCollectionReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalCheckProductCollectionReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalCheckProductCollectionReq): InternalCheckProductCollectionReq.AsObject;
  static serializeBinaryToWriter(message: InternalCheckProductCollectionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalCheckProductCollectionReq;
  static deserializeBinaryFromReader(message: InternalCheckProductCollectionReq, reader: jspb.BinaryReader): InternalCheckProductCollectionReq;
}

export namespace InternalCheckProductCollectionReq {
  export type AsObject = {
    productId: string,
    userId: string,
  }
}

export class InternalCheckProductIsBoughtReq extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): InternalCheckProductIsBoughtReq;

  getUserId(): string;
  setUserId(value: string): InternalCheckProductIsBoughtReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalCheckProductIsBoughtReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalCheckProductIsBoughtReq): InternalCheckProductIsBoughtReq.AsObject;
  static serializeBinaryToWriter(message: InternalCheckProductIsBoughtReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalCheckProductIsBoughtReq;
  static deserializeBinaryFromReader(message: InternalCheckProductIsBoughtReq, reader: jspb.BinaryReader): InternalCheckProductIsBoughtReq;
}

export namespace InternalCheckProductIsBoughtReq {
  export type AsObject = {
    productId: string,
    userId: string,
  }
}

export class GetMyProductCollectionRes extends jspb.Message {
  getInfo(): ProductCollectionInfo | undefined;
  setInfo(value?: ProductCollectionInfo): GetMyProductCollectionRes;
  hasInfo(): boolean;
  clearInfo(): GetMyProductCollectionRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyProductCollectionRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyProductCollectionRes): GetMyProductCollectionRes.AsObject;
  static serializeBinaryToWriter(message: GetMyProductCollectionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyProductCollectionRes;
  static deserializeBinaryFromReader(message: GetMyProductCollectionRes, reader: jspb.BinaryReader): GetMyProductCollectionRes;
}

export namespace GetMyProductCollectionRes {
  export type AsObject = {
    info?: ProductCollectionInfo.AsObject,
  }
}

export class GetMyProductCollectionByOrderIdRes extends jspb.Message {
  getInfoList(): Array<ProductCollectionInfo>;
  setInfoList(value: Array<ProductCollectionInfo>): GetMyProductCollectionByOrderIdRes;
  clearInfoList(): GetMyProductCollectionByOrderIdRes;
  addInfo(value?: ProductCollectionInfo, index?: number): ProductCollectionInfo;

  getPagination(): product_base_pb.PaginationRes | undefined;
  setPagination(value?: product_base_pb.PaginationRes): GetMyProductCollectionByOrderIdRes;
  hasPagination(): boolean;
  clearPagination(): GetMyProductCollectionByOrderIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyProductCollectionByOrderIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyProductCollectionByOrderIdRes): GetMyProductCollectionByOrderIdRes.AsObject;
  static serializeBinaryToWriter(message: GetMyProductCollectionByOrderIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyProductCollectionByOrderIdRes;
  static deserializeBinaryFromReader(message: GetMyProductCollectionByOrderIdRes, reader: jspb.BinaryReader): GetMyProductCollectionByOrderIdRes;
}

export namespace GetMyProductCollectionByOrderIdRes {
  export type AsObject = {
    infoList: Array<ProductCollectionInfo.AsObject>,
    pagination?: product_base_pb.PaginationRes.AsObject,
  }
}

export class ListMyProductCollectionsRes extends jspb.Message {
  getInfoList(): Array<ProductCollectionInfo>;
  setInfoList(value: Array<ProductCollectionInfo>): ListMyProductCollectionsRes;
  clearInfoList(): ListMyProductCollectionsRes;
  addInfo(value?: ProductCollectionInfo, index?: number): ProductCollectionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyProductCollectionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyProductCollectionsRes): ListMyProductCollectionsRes.AsObject;
  static serializeBinaryToWriter(message: ListMyProductCollectionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyProductCollectionsRes;
  static deserializeBinaryFromReader(message: ListMyProductCollectionsRes, reader: jspb.BinaryReader): ListMyProductCollectionsRes;
}

export namespace ListMyProductCollectionsRes {
  export type AsObject = {
    infoList: Array<ProductCollectionInfo.AsObject>,
  }
}

export class InternalCheckProductCollectionRes extends jspb.Message {
  getBought(): boolean;
  setBought(value: boolean): InternalCheckProductCollectionRes;

  getExpiredTime(): number;
  setExpiredTime(value: number): InternalCheckProductCollectionRes;

  getRemainingTime(): number;
  setRemainingTime(value: number): InternalCheckProductCollectionRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalCheckProductCollectionRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalCheckProductCollectionRes): InternalCheckProductCollectionRes.AsObject;
  static serializeBinaryToWriter(message: InternalCheckProductCollectionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalCheckProductCollectionRes;
  static deserializeBinaryFromReader(message: InternalCheckProductCollectionRes, reader: jspb.BinaryReader): InternalCheckProductCollectionRes;
}

export namespace InternalCheckProductCollectionRes {
  export type AsObject = {
    bought: boolean,
    expiredTime: number,
    remainingTime: number,
  }
}

export class InternalCheckProductIsBoughtRes extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): InternalCheckProductIsBoughtRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalCheckProductIsBoughtRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalCheckProductIsBoughtRes): InternalCheckProductIsBoughtRes.AsObject;
  static serializeBinaryToWriter(message: InternalCheckProductIsBoughtRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalCheckProductIsBoughtRes;
  static deserializeBinaryFromReader(message: InternalCheckProductIsBoughtRes, reader: jspb.BinaryReader): InternalCheckProductIsBoughtRes;
}

export namespace InternalCheckProductIsBoughtRes {
  export type AsObject = {
    result: boolean,
  }
}

export enum ProductOrderPaymentMethod { 
  PRODUCT_ORDER_PAYMENT_METHOD_INVALID = 0,
  PRODUCT_ORDER_PAYMENT_METHOD_PAYPAL = 1,
  PRODUCT_ORDER_PAYMENT_METHOD_VNPAY_EWALLET = 2,
  PRODUCT_ORDER_PAYMENT_METHOD_VNPAY_CREDITCARD = 3,
  PRODUCT_ORDER_PAYMENT_METHOD_VNPAY_BANKTRANSFER = 4,
  PRODUCT_ORDER_PAYMENT_METHOD_VNPAY_QRCODE = 5,
  PRODUCT_ORDER_PAYMENT_METHOD_MANUAL_BANKTRANSFER = 6,
  PRODUCT_ORDER_PAYMENT_METHOD_MOMO = 7,
  PRODUCT_ORDER_PAYMENT_METHOD_TWO_CHECKOUT = 8,
  PRODUCT_ORDER_PAYMENT_METHOD_PAYOO_CREDITCARD = 9,
  PRODUCT_ORDER_PAYMENT_METHOD_PAYOO_DOMESTIC_CARD = 10,
  PRODUCT_ORDER_PAYMENT_METHOD_PAYOO_QRCODE = 11,
  PRODUCT_ORDER_PAYMENT_METHOD_ONE_PAY_CREDITCARD = 12,
  PRODUCT_ORDER_PAYMENT_METHOD_ONE_PAY_CREDITCARD_DOMESTIC_ISSUE = 13,
  PRODUCT_ORDER_PAYMENT_METHOD_ONE_PAY_DOMESTIC_CARD = 14,
  PRODUCT_ORDER_PAYMENT_METHOD_ONE_PAY_QRCODE = 15,
}
