import * as jspb from 'google-protobuf'

import * as product_mobile_base_pb from '../../product/mobile/base_pb';


export class ProductDeliveryInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductDeliveryInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ProductDeliveryInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ProductDeliveryInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): ProductDeliveryInfo;

  getProductInfo(): ProductDeliveryProductInfo | undefined;
  setProductInfo(value?: ProductDeliveryProductInfo): ProductDeliveryInfo;
  hasProductInfo(): boolean;
  clearProductInfo(): ProductDeliveryInfo;

  getUserInfo(): ProductDeliveryUserInfo | undefined;
  setUserInfo(value?: ProductDeliveryUserInfo): ProductDeliveryInfo;
  hasUserInfo(): boolean;
  clearUserInfo(): ProductDeliveryInfo;

  getOrderInfo(): ProductDeliveryOrderSimpleInfo | undefined;
  setOrderInfo(value?: ProductDeliveryOrderSimpleInfo): ProductDeliveryInfo;
  hasOrderInfo(): boolean;
  clearOrderInfo(): ProductDeliveryInfo;

  getExpiredTime(): number;
  setExpiredTime(value: number): ProductDeliveryInfo;

  getQuantityDuration(): QuantityDuration;
  setQuantityDuration(value: QuantityDuration): ProductDeliveryInfo;

  getAvailableQuantity(): number;
  setAvailableQuantity(value: number): ProductDeliveryInfo;

  getUsedQuantity(): number;
  setUsedQuantity(value: number): ProductDeliveryInfo;

  getRemainingTime(): number;
  setRemainingTime(value: number): ProductDeliveryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDeliveryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDeliveryInfo): ProductDeliveryInfo.AsObject;
  static serializeBinaryToWriter(message: ProductDeliveryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDeliveryInfo;
  static deserializeBinaryFromReader(message: ProductDeliveryInfo, reader: jspb.BinaryReader): ProductDeliveryInfo;
}

export namespace ProductDeliveryInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    partnershipId: string,
    productInfo?: ProductDeliveryProductInfo.AsObject,
    userInfo?: ProductDeliveryUserInfo.AsObject,
    orderInfo?: ProductDeliveryOrderSimpleInfo.AsObject,
    expiredTime: number,
    quantityDuration: QuantityDuration,
    availableQuantity: number,
    usedQuantity: number,
    remainingTime: number,
  }
}

export class ProductDeliveryProductInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductDeliveryProductInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ProductDeliveryProductInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ProductDeliveryProductInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): ProductDeliveryProductInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): ProductDeliveryProductInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): ProductDeliveryProductInfo;

  getName(): string;
  setName(value: string): ProductDeliveryProductInfo;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ProductDeliveryProductInfo;
  clearTagsList(): ProductDeliveryProductInfo;
  addTags(value: string, index?: number): ProductDeliveryProductInfo;

  getAvailableStartTime(): number;
  setAvailableStartTime(value: number): ProductDeliveryProductInfo;

  getAvailableEndTime(): number;
  setAvailableEndTime(value: number): ProductDeliveryProductInfo;

  getQuantity(): number;
  setQuantity(value: number): ProductDeliveryProductInfo;

  getSku(): string;
  setSku(value: string): ProductDeliveryProductInfo;

  getListedPrice(): number;
  setListedPrice(value: number): ProductDeliveryProductInfo;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): ProductDeliveryProductInfo;

  getPrice(): number;
  setPrice(value: number): ProductDeliveryProductInfo;

  getBarcode(): string;
  setBarcode(value: string): ProductDeliveryProductInfo;

  getUom(): string;
  setUom(value: string): ProductDeliveryProductInfo;

  getCurrency(): ProductDeliveryCurrencyInfo | undefined;
  setCurrency(value?: ProductDeliveryCurrencyInfo): ProductDeliveryProductInfo;
  hasCurrency(): boolean;
  clearCurrency(): ProductDeliveryProductInfo;

  getBrand(): string;
  setBrand(value: string): ProductDeliveryProductInfo;

  getUnlimited(): product_mobile_base_pb.Boolean;
  setUnlimited(value: product_mobile_base_pb.Boolean): ProductDeliveryProductInfo;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): ProductDeliveryProductInfo;

  getPartnerShopId(): string;
  setPartnerShopId(value: string): ProductDeliveryProductInfo;

  getMediasList(): Array<string>;
  setMediasList(value: Array<string>): ProductDeliveryProductInfo;
  clearMediasList(): ProductDeliveryProductInfo;
  addMedias(value: string, index?: number): ProductDeliveryProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDeliveryProductInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDeliveryProductInfo): ProductDeliveryProductInfo.AsObject;
  static serializeBinaryToWriter(message: ProductDeliveryProductInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDeliveryProductInfo;
  static deserializeBinaryFromReader(message: ProductDeliveryProductInfo, reader: jspb.BinaryReader): ProductDeliveryProductInfo;
}

export namespace ProductDeliveryProductInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    partnershipId: string,
    name: string,
    tagsList: Array<string>,
    availableStartTime: number,
    availableEndTime: number,
    quantity: number,
    sku: string,
    listedPrice: number,
    discountPercent: number,
    price: number,
    barcode: string,
    uom: string,
    currency?: ProductDeliveryCurrencyInfo.AsObject,
    brand: string,
    unlimited: product_mobile_base_pb.Boolean,
    additionalDataMap: Array<[string, string]>,
    partnerShopId: string,
    mediasList: Array<string>,
  }
}

export class ProductDeliveryUserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductDeliveryUserInfo;

  getEmail(): string;
  setEmail(value: string): ProductDeliveryUserInfo;

  getName(): string;
  setName(value: string): ProductDeliveryUserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): ProductDeliveryUserInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): ProductDeliveryUserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): ProductDeliveryUserInfo;

  getAddr(): string;
  setAddr(value: string): ProductDeliveryUserInfo;

  getCity(): string;
  setCity(value: string): ProductDeliveryUserInfo;

  getDistrict(): string;
  setDistrict(value: string): ProductDeliveryUserInfo;

  getWard(): string;
  setWard(value: string): ProductDeliveryUserInfo;

  getDescription(): string;
  setDescription(value: string): ProductDeliveryUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDeliveryUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDeliveryUserInfo): ProductDeliveryUserInfo.AsObject;
  static serializeBinaryToWriter(message: ProductDeliveryUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDeliveryUserInfo;
  static deserializeBinaryFromReader(message: ProductDeliveryUserInfo, reader: jspb.BinaryReader): ProductDeliveryUserInfo;
}

export namespace ProductDeliveryUserInfo {
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

export class ProductDeliveryOrderSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductDeliveryOrderSimpleInfo;

  getCartId(): string;
  setCartId(value: string): ProductDeliveryOrderSimpleInfo;

  getPaymentMethod(): ProductOrderPaymentMethodInfo | undefined;
  setPaymentMethod(value?: ProductOrderPaymentMethodInfo): ProductDeliveryOrderSimpleInfo;
  hasPaymentMethod(): boolean;
  clearPaymentMethod(): ProductDeliveryOrderSimpleInfo;

  getOrderCode(): string;
  setOrderCode(value: string): ProductDeliveryOrderSimpleInfo;

  getPaymentId(): string;
  setPaymentId(value: string): ProductDeliveryOrderSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDeliveryOrderSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDeliveryOrderSimpleInfo): ProductDeliveryOrderSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: ProductDeliveryOrderSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDeliveryOrderSimpleInfo;
  static deserializeBinaryFromReader(message: ProductDeliveryOrderSimpleInfo, reader: jspb.BinaryReader): ProductDeliveryOrderSimpleInfo;
}

export namespace ProductDeliveryOrderSimpleInfo {
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

  getMethod(): number;
  setMethod(value: number): ProductOrderPaymentMethodInfo;

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
    method: number,
    fee: number,
    additionalFee: number,
    displayFee: string,
    icon: string,
    id: string,
  }
}

export class ProductDeliveryCurrencyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductDeliveryCurrencyInfo;

  getName(): string;
  setName(value: string): ProductDeliveryCurrencyInfo;

  getCode(): string;
  setCode(value: string): ProductDeliveryCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): ProductDeliveryCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDeliveryCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDeliveryCurrencyInfo): ProductDeliveryCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: ProductDeliveryCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDeliveryCurrencyInfo;
  static deserializeBinaryFromReader(message: ProductDeliveryCurrencyInfo, reader: jspb.BinaryReader): ProductDeliveryCurrencyInfo;
}

export namespace ProductDeliveryCurrencyInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class GetMyProductDeliveryReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetMyProductDeliveryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyProductDeliveryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyProductDeliveryReq): GetMyProductDeliveryReq.AsObject;
  static serializeBinaryToWriter(message: GetMyProductDeliveryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyProductDeliveryReq;
  static deserializeBinaryFromReader(message: GetMyProductDeliveryReq, reader: jspb.BinaryReader): GetMyProductDeliveryReq;
}

export namespace GetMyProductDeliveryReq {
  export type AsObject = {
    id: string,
  }
}

export class GetMyProductDeliveryByOrderIdReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): GetMyProductDeliveryByOrderIdReq;

  getPagination(): product_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: product_mobile_base_pb.PaginationReq): GetMyProductDeliveryByOrderIdReq;
  hasPagination(): boolean;
  clearPagination(): GetMyProductDeliveryByOrderIdReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyProductDeliveryByOrderIdReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyProductDeliveryByOrderIdReq): GetMyProductDeliveryByOrderIdReq.AsObject;
  static serializeBinaryToWriter(message: GetMyProductDeliveryByOrderIdReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyProductDeliveryByOrderIdReq;
  static deserializeBinaryFromReader(message: GetMyProductDeliveryByOrderIdReq, reader: jspb.BinaryReader): GetMyProductDeliveryByOrderIdReq;
}

export namespace GetMyProductDeliveryByOrderIdReq {
  export type AsObject = {
    orderId: string,
    pagination?: product_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class ListMyProductDeliveriesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyProductDeliveriesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyProductDeliveriesReq): ListMyProductDeliveriesReq.AsObject;
  static serializeBinaryToWriter(message: ListMyProductDeliveriesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyProductDeliveriesReq;
  static deserializeBinaryFromReader(message: ListMyProductDeliveriesReq, reader: jspb.BinaryReader): ListMyProductDeliveriesReq;
}

export namespace ListMyProductDeliveriesReq {
  export type AsObject = {
  }
}

export class GetMyProductDeliveryRes extends jspb.Message {
  getInfo(): ProductDeliveryInfo | undefined;
  setInfo(value?: ProductDeliveryInfo): GetMyProductDeliveryRes;
  hasInfo(): boolean;
  clearInfo(): GetMyProductDeliveryRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyProductDeliveryRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyProductDeliveryRes): GetMyProductDeliveryRes.AsObject;
  static serializeBinaryToWriter(message: GetMyProductDeliveryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyProductDeliveryRes;
  static deserializeBinaryFromReader(message: GetMyProductDeliveryRes, reader: jspb.BinaryReader): GetMyProductDeliveryRes;
}

export namespace GetMyProductDeliveryRes {
  export type AsObject = {
    info?: ProductDeliveryInfo.AsObject,
  }
}

export class GetMyProductDeliveryByOrderIdRes extends jspb.Message {
  getInfoList(): Array<ProductDeliveryInfo>;
  setInfoList(value: Array<ProductDeliveryInfo>): GetMyProductDeliveryByOrderIdRes;
  clearInfoList(): GetMyProductDeliveryByOrderIdRes;
  addInfo(value?: ProductDeliveryInfo, index?: number): ProductDeliveryInfo;

  getPagination(): product_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: product_mobile_base_pb.PaginationRes): GetMyProductDeliveryByOrderIdRes;
  hasPagination(): boolean;
  clearPagination(): GetMyProductDeliveryByOrderIdRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyProductDeliveryByOrderIdRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyProductDeliveryByOrderIdRes): GetMyProductDeliveryByOrderIdRes.AsObject;
  static serializeBinaryToWriter(message: GetMyProductDeliveryByOrderIdRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyProductDeliveryByOrderIdRes;
  static deserializeBinaryFromReader(message: GetMyProductDeliveryByOrderIdRes, reader: jspb.BinaryReader): GetMyProductDeliveryByOrderIdRes;
}

export namespace GetMyProductDeliveryByOrderIdRes {
  export type AsObject = {
    infoList: Array<ProductDeliveryInfo.AsObject>,
    pagination?: product_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class ListMyProductDeliveriesRes extends jspb.Message {
  getInfoList(): Array<ProductDeliveryInfo>;
  setInfoList(value: Array<ProductDeliveryInfo>): ListMyProductDeliveriesRes;
  clearInfoList(): ListMyProductDeliveriesRes;
  addInfo(value?: ProductDeliveryInfo, index?: number): ProductDeliveryInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyProductDeliveriesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyProductDeliveriesRes): ListMyProductDeliveriesRes.AsObject;
  static serializeBinaryToWriter(message: ListMyProductDeliveriesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyProductDeliveriesRes;
  static deserializeBinaryFromReader(message: ListMyProductDeliveriesRes, reader: jspb.BinaryReader): ListMyProductDeliveriesRes;
}

export namespace ListMyProductDeliveriesRes {
  export type AsObject = {
    infoList: Array<ProductDeliveryInfo.AsObject>,
  }
}

export enum QuantityDuration { 
  QUANTITY_DURATION_INVALID = 0,
  QUANTITY_DURATION_MONTH = 1,
  QUANTITY_DURATION_QUATER = 2,
  QUANTITY_DURATION_YEAR = 3,
}
