import * as jspb from 'google-protobuf'

import * as order_backend_base_pb from '../../order/backend/base_pb';


export class OrderInfo extends jspb.Message {
  getId(): string;
  setId(value: string): OrderInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): OrderInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): OrderInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): OrderInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): OrderInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): OrderInfo;

  getCartId(): string;
  setCartId(value: string): OrderInfo;

  getUserId(): string;
  setUserId(value: string): OrderInfo;

  getCurrency(): OrderCurrencyInfo | undefined;
  setCurrency(value?: OrderCurrencyInfo): OrderInfo;
  hasCurrency(): boolean;
  clearCurrency(): OrderInfo;

  getProductsList(): Array<OrderProductInfoItem>;
  setProductsList(value: Array<OrderProductInfoItem>): OrderInfo;
  clearProductsList(): OrderInfo;
  addProducts(value?: OrderProductInfoItem, index?: number): OrderProductInfoItem;

  getTotalProductAmount(): number;
  setTotalProductAmount(value: number): OrderInfo;

  getPaymentMethod(): OrderPaymentMethodInfo | undefined;
  setPaymentMethod(value?: OrderPaymentMethodInfo): OrderInfo;
  hasPaymentMethod(): boolean;
  clearPaymentMethod(): OrderInfo;

  getPromotionsList(): Array<OrderPromotionInfo>;
  setPromotionsList(value: Array<OrderPromotionInfo>): OrderInfo;
  clearPromotionsList(): OrderInfo;
  addPromotions(value?: OrderPromotionInfo, index?: number): OrderPromotionInfo;

  getTotalDiscountAmount(): number;
  setTotalDiscountAmount(value: number): OrderInfo;

  getStatus(): OrderStatus;
  setStatus(value: OrderStatus): OrderInfo;

  getShippingAddress(): ShippingAddressInfo | undefined;
  setShippingAddress(value?: ShippingAddressInfo): OrderInfo;
  hasShippingAddress(): boolean;
  clearShippingAddress(): OrderInfo;

  getShippingFeeAmount(): number;
  setShippingFeeAmount(value: number): OrderInfo;

  getInstallment(): InstallmentInfo | undefined;
  setInstallment(value?: InstallmentInfo): OrderInfo;
  hasInstallment(): boolean;
  clearInstallment(): OrderInfo;

  getExtraServicesList(): Array<OrderProductInfoItem>;
  setExtraServicesList(value: Array<OrderProductInfoItem>): OrderInfo;
  clearExtraServicesList(): OrderInfo;
  addExtraServices(value?: OrderProductInfoItem, index?: number): OrderProductInfoItem;

  getExtraServicesAmount(): number;
  setExtraServicesAmount(value: number): OrderInfo;

  getFeeAmount(): number;
  setFeeAmount(value: number): OrderInfo;

  getTotalAmount(): number;
  setTotalAmount(value: number): OrderInfo;

  getOrderCode(): string;
  setOrderCode(value: string): OrderInfo;

  getOrderType(): OrderType;
  setOrderType(value: OrderType): OrderInfo;

  getNote(): string;
  setNote(value: string): OrderInfo;

  getExpiredTime(): number;
  setExpiredTime(value: number): OrderInfo;

  getPaymentId(): string;
  setPaymentId(value: string): OrderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrderInfo): OrderInfo.AsObject;
  static serializeBinaryToWriter(message: OrderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderInfo;
  static deserializeBinaryFromReader(message: OrderInfo, reader: jspb.BinaryReader): OrderInfo;
}

export namespace OrderInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    partnershipId: string,
    cartId: string,
    userId: string,
    currency?: OrderCurrencyInfo.AsObject,
    productsList: Array<OrderProductInfoItem.AsObject>,
    totalProductAmount: number,
    paymentMethod?: OrderPaymentMethodInfo.AsObject,
    promotionsList: Array<OrderPromotionInfo.AsObject>,
    totalDiscountAmount: number,
    status: OrderStatus,
    shippingAddress?: ShippingAddressInfo.AsObject,
    shippingFeeAmount: number,
    installment?: InstallmentInfo.AsObject,
    extraServicesList: Array<OrderProductInfoItem.AsObject>,
    extraServicesAmount: number,
    feeAmount: number,
    totalAmount: number,
    orderCode: string,
    orderType: OrderType,
    note: string,
    expiredTime: number,
    paymentId: string,
  }
}

export class OrderProductInfo extends jspb.Message {
  getId(): string;
  setId(value: string): OrderProductInfo;

  getStatus(): ProductStatus;
  setStatus(value: ProductStatus): OrderProductInfo;

  getName(): string;
  setName(value: string): OrderProductInfo;

  getMediasList(): Array<string>;
  setMediasList(value: Array<string>): OrderProductInfo;
  clearMediasList(): OrderProductInfo;
  addMedias(value: string, index?: number): OrderProductInfo;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): OrderProductInfo;
  clearTagsList(): OrderProductInfo;
  addTags(value: string, index?: number): OrderProductInfo;

  getSku(): string;
  setSku(value: string): OrderProductInfo;

  getListedPrice(): number;
  setListedPrice(value: number): OrderProductInfo;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): OrderProductInfo;

  getPrice(): number;
  setPrice(value: number): OrderProductInfo;

  getUom(): string;
  setUom(value: string): OrderProductInfo;

  getBarcode(): string;
  setBarcode(value: string): OrderProductInfo;

  getCurrency(): OrderProductCurrencyInfo | undefined;
  setCurrency(value?: OrderProductCurrencyInfo): OrderProductInfo;
  hasCurrency(): boolean;
  clearCurrency(): OrderProductInfo;

  getBrand(): string;
  setBrand(value: string): OrderProductInfo;

  getUnlimited(): order_backend_base_pb.Boolean;
  setUnlimited(value: order_backend_base_pb.Boolean): OrderProductInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): OrderProductInfo;

  getCountry(): string;
  setCountry(value: string): OrderProductInfo;

  getLanguage(): string;
  setLanguage(value: string): OrderProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderProductInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrderProductInfo): OrderProductInfo.AsObject;
  static serializeBinaryToWriter(message: OrderProductInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderProductInfo;
  static deserializeBinaryFromReader(message: OrderProductInfo, reader: jspb.BinaryReader): OrderProductInfo;
}

export namespace OrderProductInfo {
  export type AsObject = {
    id: string,
    status: ProductStatus,
    name: string,
    mediasList: Array<string>,
    tagsList: Array<string>,
    sku: string,
    listedPrice: number,
    discountPercent: number,
    price: number,
    uom: string,
    barcode: string,
    currency?: OrderProductCurrencyInfo.AsObject,
    brand: string,
    unlimited: order_backend_base_pb.Boolean,
    partnershipId: string,
    country: string,
    language: string,
  }
}

export class OrderProductCurrencyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): OrderProductCurrencyInfo;

  getName(): string;
  setName(value: string): OrderProductCurrencyInfo;

  getCode(): string;
  setCode(value: string): OrderProductCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): OrderProductCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderProductCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrderProductCurrencyInfo): OrderProductCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: OrderProductCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderProductCurrencyInfo;
  static deserializeBinaryFromReader(message: OrderProductCurrencyInfo, reader: jspb.BinaryReader): OrderProductCurrencyInfo;
}

export namespace OrderProductCurrencyInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class OrderProductInfoItem extends jspb.Message {
  getProductInfo(): OrderProductInfo | undefined;
  setProductInfo(value?: OrderProductInfo): OrderProductInfoItem;
  hasProductInfo(): boolean;
  clearProductInfo(): OrderProductInfoItem;

  getQuantity(): number;
  setQuantity(value: number): OrderProductInfoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderProductInfoItem.AsObject;
  static toObject(includeInstance: boolean, msg: OrderProductInfoItem): OrderProductInfoItem.AsObject;
  static serializeBinaryToWriter(message: OrderProductInfoItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderProductInfoItem;
  static deserializeBinaryFromReader(message: OrderProductInfoItem, reader: jspb.BinaryReader): OrderProductInfoItem;
}

export namespace OrderProductInfoItem {
  export type AsObject = {
    productInfo?: OrderProductInfo.AsObject,
    quantity: number,
  }
}

export class OrderPaymentMethodInfo extends jspb.Message {
  getName(): string;
  setName(value: string): OrderPaymentMethodInfo;

  getCode(): string;
  setCode(value: string): OrderPaymentMethodInfo;

  getMethod(): OrderPaymentMethod;
  setMethod(value: OrderPaymentMethod): OrderPaymentMethodInfo;

  getFee(): number;
  setFee(value: number): OrderPaymentMethodInfo;

  getAdditionalFee(): number;
  setAdditionalFee(value: number): OrderPaymentMethodInfo;

  getDisplayFee(): string;
  setDisplayFee(value: string): OrderPaymentMethodInfo;

  getIcon(): string;
  setIcon(value: string): OrderPaymentMethodInfo;

  getId(): string;
  setId(value: string): OrderPaymentMethodInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderPaymentMethodInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrderPaymentMethodInfo): OrderPaymentMethodInfo.AsObject;
  static serializeBinaryToWriter(message: OrderPaymentMethodInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderPaymentMethodInfo;
  static deserializeBinaryFromReader(message: OrderPaymentMethodInfo, reader: jspb.BinaryReader): OrderPaymentMethodInfo;
}

export namespace OrderPaymentMethodInfo {
  export type AsObject = {
    name: string,
    code: string,
    method: OrderPaymentMethod,
    fee: number,
    additionalFee: number,
    displayFee: string,
    icon: string,
    id: string,
  }
}

export class OrderPromotionInfo extends jspb.Message {
  getId(): string;
  setId(value: string): OrderPromotionInfo;

  getName(): string;
  setName(value: string): OrderPromotionInfo;

  getShortDesc(): string;
  setShortDesc(value: string): OrderPromotionInfo;

  getCode(): string;
  setCode(value: string): OrderPromotionInfo;

  getCoverImage(): string;
  setCoverImage(value: string): OrderPromotionInfo;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): OrderPromotionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderPromotionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrderPromotionInfo): OrderPromotionInfo.AsObject;
  static serializeBinaryToWriter(message: OrderPromotionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderPromotionInfo;
  static deserializeBinaryFromReader(message: OrderPromotionInfo, reader: jspb.BinaryReader): OrderPromotionInfo;
}

export namespace OrderPromotionInfo {
  export type AsObject = {
    id: string,
    name: string,
    shortDesc: string,
    code: string,
    coverImage: string,
    discountPercent: number,
  }
}

export class OrderCurrencyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): OrderCurrencyInfo;

  getName(): string;
  setName(value: string): OrderCurrencyInfo;

  getCode(): string;
  setCode(value: string): OrderCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): OrderCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrderCurrencyInfo): OrderCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: OrderCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderCurrencyInfo;
  static deserializeBinaryFromReader(message: OrderCurrencyInfo, reader: jspb.BinaryReader): OrderCurrencyInfo;
}

export namespace OrderCurrencyInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class OrderProductItem extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): OrderProductItem;

  getPackageId(): string;
  setPackageId(value: string): OrderProductItem;

  getQuantity(): number;
  setQuantity(value: number): OrderProductItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderProductItem.AsObject;
  static toObject(includeInstance: boolean, msg: OrderProductItem): OrderProductItem.AsObject;
  static serializeBinaryToWriter(message: OrderProductItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderProductItem;
  static deserializeBinaryFromReader(message: OrderProductItem, reader: jspb.BinaryReader): OrderProductItem;
}

export namespace OrderProductItem {
  export type AsObject = {
    productId: string,
    packageId: string,
    quantity: number,
  }
}

export class ShippingAddressInfo extends jspb.Message {
  getType(): ShippingAddressType;
  setType(value: ShippingAddressType): ShippingAddressInfo;

  getAddress(): string;
  setAddress(value: string): ShippingAddressInfo;

  getCity(): string;
  setCity(value: string): ShippingAddressInfo;

  getDistrict(): string;
  setDistrict(value: string): ShippingAddressInfo;

  getRegion(): string;
  setRegion(value: string): ShippingAddressInfo;

  getPostcode(): string;
  setPostcode(value: string): ShippingAddressInfo;

  getCountry(): string;
  setCountry(value: string): ShippingAddressInfo;

  getLat(): number;
  setLat(value: number): ShippingAddressInfo;

  getLon(): number;
  setLon(value: number): ShippingAddressInfo;

  getName(): string;
  setName(value: string): ShippingAddressInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): ShippingAddressInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): ShippingAddressInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShippingAddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShippingAddressInfo): ShippingAddressInfo.AsObject;
  static serializeBinaryToWriter(message: ShippingAddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShippingAddressInfo;
  static deserializeBinaryFromReader(message: ShippingAddressInfo, reader: jspb.BinaryReader): ShippingAddressInfo;
}

export namespace ShippingAddressInfo {
  export type AsObject = {
    type: ShippingAddressType,
    address: string,
    city: string,
    district: string,
    region: string,
    postcode: string,
    country: string,
    lat: number,
    lon: number,
    name: string,
    phoneCode: string,
    phoneNumber: string,
  }
}

export class InstallmentInfo extends jspb.Message {
  getId(): string;
  setId(value: string): InstallmentInfo;

  getDuration(): string;
  setDuration(value: string): InstallmentInfo;

  getFee(): number;
  setFee(value: number): InstallmentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstallmentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InstallmentInfo): InstallmentInfo.AsObject;
  static serializeBinaryToWriter(message: InstallmentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstallmentInfo;
  static deserializeBinaryFromReader(message: InstallmentInfo, reader: jspb.BinaryReader): InstallmentInfo;
}

export namespace InstallmentInfo {
  export type AsObject = {
    id: string,
    duration: string,
    fee: number,
  }
}

export class OrderProductAttribute extends jspb.Message {
  getMasterDataId(): string;
  setMasterDataId(value: string): OrderProductAttribute;

  getValuesList(): Array<OrderProductAttribute.Value>;
  setValuesList(value: Array<OrderProductAttribute.Value>): OrderProductAttribute;
  clearValuesList(): OrderProductAttribute;
  addValues(value?: OrderProductAttribute.Value, index?: number): OrderProductAttribute.Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderProductAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: OrderProductAttribute): OrderProductAttribute.AsObject;
  static serializeBinaryToWriter(message: OrderProductAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderProductAttribute;
  static deserializeBinaryFromReader(message: OrderProductAttribute, reader: jspb.BinaryReader): OrderProductAttribute;
}

export namespace OrderProductAttribute {
  export type AsObject = {
    masterDataId: string,
    valuesList: Array<OrderProductAttribute.Value.AsObject>,
  }

  export class Value extends jspb.Message {
    getLanguage(): string;
    setLanguage(value: string): Value;

    getValue(): string;
    setValue(value: string): Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      language: string,
      value: string,
    }
  }

}

export class GetOrderByIdsReq extends jspb.Message {
  getOrderIdsList(): Array<string>;
  setOrderIdsList(value: Array<string>): GetOrderByIdsReq;
  clearOrderIdsList(): GetOrderByIdsReq;
  addOrderIds(value: string, index?: number): GetOrderByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderByIdsReq): GetOrderByIdsReq.AsObject;
  static serializeBinaryToWriter(message: GetOrderByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderByIdsReq;
  static deserializeBinaryFromReader(message: GetOrderByIdsReq, reader: jspb.BinaryReader): GetOrderByIdsReq;
}

export namespace GetOrderByIdsReq {
  export type AsObject = {
    orderIdsList: Array<string>,
  }
}

export class ExpireOrdersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpireOrdersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExpireOrdersReq): ExpireOrdersReq.AsObject;
  static serializeBinaryToWriter(message: ExpireOrdersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpireOrdersReq;
  static deserializeBinaryFromReader(message: ExpireOrdersReq, reader: jspb.BinaryReader): ExpireOrdersReq;
}

export namespace ExpireOrdersReq {
  export type AsObject = {
  }
}

export class GetOrderByIdsRes extends jspb.Message {
  getOrdersList(): Array<OrderInfo>;
  setOrdersList(value: Array<OrderInfo>): GetOrderByIdsRes;
  clearOrdersList(): GetOrderByIdsRes;
  addOrders(value?: OrderInfo, index?: number): OrderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderByIdsRes): GetOrderByIdsRes.AsObject;
  static serializeBinaryToWriter(message: GetOrderByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderByIdsRes;
  static deserializeBinaryFromReader(message: GetOrderByIdsRes, reader: jspb.BinaryReader): GetOrderByIdsRes;
}

export namespace GetOrderByIdsRes {
  export type AsObject = {
    ordersList: Array<OrderInfo.AsObject>,
  }
}

export class ExpireOrdersRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpireOrdersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExpireOrdersRes): ExpireOrdersRes.AsObject;
  static serializeBinaryToWriter(message: ExpireOrdersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpireOrdersRes;
  static deserializeBinaryFromReader(message: ExpireOrdersRes, reader: jspb.BinaryReader): ExpireOrdersRes;
}

export namespace ExpireOrdersRes {
  export type AsObject = {
  }
}

export enum OrderStatus { 
  ORDER_STATUS_INVALID = 0,
  ORDER_STATUS_DRAFT = 1,
  ORDER_STATUS_IN_PROGRESS = 2,
  ORDER_STATUS_PAID_SUCCESSFUL = 3,
  ORDER_STATUS_PAID_FAILED = 4,
  ORDER_STATUS_DELIVERING = 5,
  ORDER_STATUS_DELIVERED = 6,
  ORDER_STATUS_CANCELLED = 7,
  ORDER_STATUS_EXPIRED = 8,
}
export enum OrderPaymentMethod { 
  ORDER_PAYMENT_METHOD_INVALID = 0,
  ORDER_PAYMENT_METHOD_E_WALLET = 1,
}
export enum OrderType { 
  ORDER_TYPE_INVALID = 0,
  ORDER_TYPE_BUY = 1,
  ORDER_TYPE_RENT = 2,
}
export enum ShippingAddressType { 
  SHIPPING_ADDRESS_TYPE_INVALID = 0,
  SHIPPING_ADDRESS_TYPE_CENTER_ADDRESS = 1,
  SHIPPING_ADDRESS_TYPE_USER_ADDRESS = 2,
}
export enum OrderProductPurchaseType { 
  ORDER_PRODUCT_PURCHASE_TYPE_INVALID = 0,
  ORDER_PRODUCT_PURCHASE_TYPE_RENT_OR_SELL = 1,
  ORDER_PRODUCT_PURCHASE_TYPE_RENT_ONLY = 2,
  ORDER_PRODUCT_PURCHASE_TYPE_SELL_ONLY = 3,
}
export enum ProductStatus { 
  PRODUCT_STATUS_INVALID = 0,
  PRODUCT_STATUS_PUBLISHED = 1,
  PRODUCT_STATUS_UNPUBLISHED = 2,
  PRODUCT_STATUS_DRAFT = 3,
  PRODUCT_STATUS_DELETED = 4,
}
