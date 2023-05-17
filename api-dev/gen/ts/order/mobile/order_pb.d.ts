import * as jspb from 'google-protobuf'

import * as order_mobile_base_pb from '../../order/mobile/base_pb';


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

  getConvertedCurrency(): OrderCurrencyInfo | undefined;
  setConvertedCurrency(value?: OrderCurrencyInfo): OrderInfo;
  hasConvertedCurrency(): boolean;
  clearConvertedCurrency(): OrderInfo;

  getConvertedTotalProductAmount(): number;
  setConvertedTotalProductAmount(value: number): OrderInfo;

  getConvertedTotalDiscountAmount(): number;
  setConvertedTotalDiscountAmount(value: number): OrderInfo;

  getConvertedShippingFeeAmount(): number;
  setConvertedShippingFeeAmount(value: number): OrderInfo;

  getConvertedFeeAmount(): number;
  setConvertedFeeAmount(value: number): OrderInfo;

  getConvertedTotalAmount(): number;
  setConvertedTotalAmount(value: number): OrderInfo;

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
    convertedCurrency?: OrderCurrencyInfo.AsObject,
    convertedTotalProductAmount: number,
    convertedTotalDiscountAmount: number,
    convertedShippingFeeAmount: number,
    convertedFeeAmount: number,
    convertedTotalAmount: number,
  }
}

export class OrderProductInfo extends jspb.Message {
  getId(): string;
  setId(value: string): OrderProductInfo;

  getStatus(): order_mobile_base_pb.ProductStatus;
  setStatus(value: order_mobile_base_pb.ProductStatus): OrderProductInfo;

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

  getUnlimited(): order_mobile_base_pb.CustomBoolean;
  setUnlimited(value: order_mobile_base_pb.CustomBoolean): OrderProductInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): OrderProductInfo;

  getCountry(): string;
  setCountry(value: string): OrderProductInfo;

  getLanguage(): string;
  setLanguage(value: string): OrderProductInfo;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): OrderProductInfo;

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
    status: order_mobile_base_pb.ProductStatus,
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
    unlimited: order_mobile_base_pb.CustomBoolean,
    partnershipId: string,
    country: string,
    language: string,
    additionalDataMap: Array<[string, string]>,
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

export class CheckoutReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckoutReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckoutReq): CheckoutReq.AsObject;
  static serializeBinaryToWriter(message: CheckoutReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckoutReq;
  static deserializeBinaryFromReader(message: CheckoutReq, reader: jspb.BinaryReader): CheckoutReq;
}

export namespace CheckoutReq {
  export type AsObject = {
  }
}

export class RentProductReq extends jspb.Message {
  getCartId(): string;
  setCartId(value: string): RentProductReq;

  getProductsList(): Array<RentProductReq.OrderProductItemRentProductReq>;
  setProductsList(value: Array<RentProductReq.OrderProductItemRentProductReq>): RentProductReq;
  clearProductsList(): RentProductReq;
  addProducts(value?: RentProductReq.OrderProductItemRentProductReq, index?: number): RentProductReq.OrderProductItemRentProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RentProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: RentProductReq): RentProductReq.AsObject;
  static serializeBinaryToWriter(message: RentProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RentProductReq;
  static deserializeBinaryFromReader(message: RentProductReq, reader: jspb.BinaryReader): RentProductReq;
}

export namespace RentProductReq {
  export type AsObject = {
    cartId: string,
    productsList: Array<RentProductReq.OrderProductItemRentProductReq.AsObject>,
  }

  export class OrderProductItemRentProductReq extends jspb.Message {
    getProductId(): string;
    setProductId(value: string): OrderProductItemRentProductReq;

    getPackageId(): string;
    setPackageId(value: string): OrderProductItemRentProductReq;

    getQuantity(): number;
    setQuantity(value: number): OrderProductItemRentProductReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderProductItemRentProductReq.AsObject;
    static toObject(includeInstance: boolean, msg: OrderProductItemRentProductReq): OrderProductItemRentProductReq.AsObject;
    static serializeBinaryToWriter(message: OrderProductItemRentProductReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderProductItemRentProductReq;
    static deserializeBinaryFromReader(message: OrderProductItemRentProductReq, reader: jspb.BinaryReader): OrderProductItemRentProductReq;
  }

  export namespace OrderProductItemRentProductReq {
    export type AsObject = {
      productId: string,
      packageId: string,
      quantity: number,
    }
  }

}

export class AddPaymentMethodReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): AddPaymentMethodReq;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): AddPaymentMethodReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPaymentMethodReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddPaymentMethodReq): AddPaymentMethodReq.AsObject;
  static serializeBinaryToWriter(message: AddPaymentMethodReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPaymentMethodReq;
  static deserializeBinaryFromReader(message: AddPaymentMethodReq, reader: jspb.BinaryReader): AddPaymentMethodReq;
}

export namespace AddPaymentMethodReq {
  export type AsObject = {
    orderId: string,
    paymentMethodId: string,
  }
}

export class AddPromotionsReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): AddPromotionsReq;

  getPromotionIdsList(): Array<string>;
  setPromotionIdsList(value: Array<string>): AddPromotionsReq;
  clearPromotionIdsList(): AddPromotionsReq;
  addPromotionIds(value: string, index?: number): AddPromotionsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPromotionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddPromotionsReq): AddPromotionsReq.AsObject;
  static serializeBinaryToWriter(message: AddPromotionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPromotionsReq;
  static deserializeBinaryFromReader(message: AddPromotionsReq, reader: jspb.BinaryReader): AddPromotionsReq;
}

export namespace AddPromotionsReq {
  export type AsObject = {
    orderId: string,
    promotionIdsList: Array<string>,
  }
}

export class AddShippingAddressReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): AddShippingAddressReq;

  getShippingAddress(): ShippingAddressInfo | undefined;
  setShippingAddress(value?: ShippingAddressInfo): AddShippingAddressReq;
  hasShippingAddress(): boolean;
  clearShippingAddress(): AddShippingAddressReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddShippingAddressReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddShippingAddressReq): AddShippingAddressReq.AsObject;
  static serializeBinaryToWriter(message: AddShippingAddressReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddShippingAddressReq;
  static deserializeBinaryFromReader(message: AddShippingAddressReq, reader: jspb.BinaryReader): AddShippingAddressReq;
}

export namespace AddShippingAddressReq {
  export type AsObject = {
    orderId: string,
    shippingAddress?: ShippingAddressInfo.AsObject,
  }
}

export class AddInstallmentReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): AddInstallmentReq;

  getInstallmentId(): string;
  setInstallmentId(value: string): AddInstallmentReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddInstallmentReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddInstallmentReq): AddInstallmentReq.AsObject;
  static serializeBinaryToWriter(message: AddInstallmentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddInstallmentReq;
  static deserializeBinaryFromReader(message: AddInstallmentReq, reader: jspb.BinaryReader): AddInstallmentReq;
}

export namespace AddInstallmentReq {
  export type AsObject = {
    orderId: string,
    installmentId: string,
  }
}

export class AddExtraServicesReq extends jspb.Message {
  getProductsList(): Array<AddExtraServicesReq.OrderProductItemPlaceOrderReq>;
  setProductsList(value: Array<AddExtraServicesReq.OrderProductItemPlaceOrderReq>): AddExtraServicesReq;
  clearProductsList(): AddExtraServicesReq;
  addProducts(value?: AddExtraServicesReq.OrderProductItemPlaceOrderReq, index?: number): AddExtraServicesReq.OrderProductItemPlaceOrderReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddExtraServicesReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddExtraServicesReq): AddExtraServicesReq.AsObject;
  static serializeBinaryToWriter(message: AddExtraServicesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddExtraServicesReq;
  static deserializeBinaryFromReader(message: AddExtraServicesReq, reader: jspb.BinaryReader): AddExtraServicesReq;
}

export namespace AddExtraServicesReq {
  export type AsObject = {
    productsList: Array<AddExtraServicesReq.OrderProductItemPlaceOrderReq.AsObject>,
  }

  export class OrderProductItemPlaceOrderReq extends jspb.Message {
    getProductId(): string;
    setProductId(value: string): OrderProductItemPlaceOrderReq;

    getQuantity(): number;
    setQuantity(value: number): OrderProductItemPlaceOrderReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderProductItemPlaceOrderReq.AsObject;
    static toObject(includeInstance: boolean, msg: OrderProductItemPlaceOrderReq): OrderProductItemPlaceOrderReq.AsObject;
    static serializeBinaryToWriter(message: OrderProductItemPlaceOrderReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderProductItemPlaceOrderReq;
    static deserializeBinaryFromReader(message: OrderProductItemPlaceOrderReq, reader: jspb.BinaryReader): OrderProductItemPlaceOrderReq;
  }

  export namespace OrderProductItemPlaceOrderReq {
    export type AsObject = {
      productId: string,
      quantity: number,
    }
  }

}

export class PlaceOrderReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): PlaceOrderReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaceOrderReq.AsObject;
  static toObject(includeInstance: boolean, msg: PlaceOrderReq): PlaceOrderReq.AsObject;
  static serializeBinaryToWriter(message: PlaceOrderReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaceOrderReq;
  static deserializeBinaryFromReader(message: PlaceOrderReq, reader: jspb.BinaryReader): PlaceOrderReq;
}

export namespace PlaceOrderReq {
  export type AsObject = {
    orderId: string,
  }
}

export class CancelOrderReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): CancelOrderReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderReq.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderReq): CancelOrderReq.AsObject;
  static serializeBinaryToWriter(message: CancelOrderReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderReq;
  static deserializeBinaryFromReader(message: CancelOrderReq, reader: jspb.BinaryReader): CancelOrderReq;
}

export namespace CancelOrderReq {
  export type AsObject = {
    orderId: string,
  }
}

export class GetMyOrderReq extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): GetMyOrderReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyOrderReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyOrderReq): GetMyOrderReq.AsObject;
  static serializeBinaryToWriter(message: GetMyOrderReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyOrderReq;
  static deserializeBinaryFromReader(message: GetMyOrderReq, reader: jspb.BinaryReader): GetMyOrderReq;
}

export namespace GetMyOrderReq {
  export type AsObject = {
    orderId: string,
  }
}

export class GetMyOrderHistoryReq extends jspb.Message {
  getStatus(): OrderStatus;
  setStatus(value: OrderStatus): GetMyOrderHistoryReq;

  getPagination(): order_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: order_mobile_base_pb.PaginationReq): GetMyOrderHistoryReq;
  hasPagination(): boolean;
  clearPagination(): GetMyOrderHistoryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyOrderHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyOrderHistoryReq): GetMyOrderHistoryReq.AsObject;
  static serializeBinaryToWriter(message: GetMyOrderHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyOrderHistoryReq;
  static deserializeBinaryFromReader(message: GetMyOrderHistoryReq, reader: jspb.BinaryReader): GetMyOrderHistoryReq;
}

export namespace GetMyOrderHistoryReq {
  export type AsObject = {
    status: OrderStatus,
    pagination?: order_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class CheckoutRes extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): CheckoutRes;

  getExpiredTime(): number;
  setExpiredTime(value: number): CheckoutRes;

  getErrorProductIdsList(): Array<string>;
  setErrorProductIdsList(value: Array<string>): CheckoutRes;
  clearErrorProductIdsList(): CheckoutRes;
  addErrorProductIds(value: string, index?: number): CheckoutRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckoutRes.AsObject;
  static toObject(includeInstance: boolean, msg: CheckoutRes): CheckoutRes.AsObject;
  static serializeBinaryToWriter(message: CheckoutRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckoutRes;
  static deserializeBinaryFromReader(message: CheckoutRes, reader: jspb.BinaryReader): CheckoutRes;
}

export namespace CheckoutRes {
  export type AsObject = {
    orderId: string,
    expiredTime: number,
    errorProductIdsList: Array<string>,
  }
}

export class AddPaymentMethodRes extends jspb.Message {
  getResult(): OrderInfo | undefined;
  setResult(value?: OrderInfo): AddPaymentMethodRes;
  hasResult(): boolean;
  clearResult(): AddPaymentMethodRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPaymentMethodRes.AsObject;
  static toObject(includeInstance: boolean, msg: AddPaymentMethodRes): AddPaymentMethodRes.AsObject;
  static serializeBinaryToWriter(message: AddPaymentMethodRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPaymentMethodRes;
  static deserializeBinaryFromReader(message: AddPaymentMethodRes, reader: jspb.BinaryReader): AddPaymentMethodRes;
}

export namespace AddPaymentMethodRes {
  export type AsObject = {
    result?: OrderInfo.AsObject,
  }
}

export class AddPromotionsRes extends jspb.Message {
  getResult(): OrderInfo | undefined;
  setResult(value?: OrderInfo): AddPromotionsRes;
  hasResult(): boolean;
  clearResult(): AddPromotionsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPromotionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: AddPromotionsRes): AddPromotionsRes.AsObject;
  static serializeBinaryToWriter(message: AddPromotionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPromotionsRes;
  static deserializeBinaryFromReader(message: AddPromotionsRes, reader: jspb.BinaryReader): AddPromotionsRes;
}

export namespace AddPromotionsRes {
  export type AsObject = {
    result?: OrderInfo.AsObject,
  }
}

export class AddShippingAddressRes extends jspb.Message {
  getResult(): OrderInfo | undefined;
  setResult(value?: OrderInfo): AddShippingAddressRes;
  hasResult(): boolean;
  clearResult(): AddShippingAddressRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddShippingAddressRes.AsObject;
  static toObject(includeInstance: boolean, msg: AddShippingAddressRes): AddShippingAddressRes.AsObject;
  static serializeBinaryToWriter(message: AddShippingAddressRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddShippingAddressRes;
  static deserializeBinaryFromReader(message: AddShippingAddressRes, reader: jspb.BinaryReader): AddShippingAddressRes;
}

export namespace AddShippingAddressRes {
  export type AsObject = {
    result?: OrderInfo.AsObject,
  }
}

export class AddInstallmentRes extends jspb.Message {
  getResult(): OrderInfo | undefined;
  setResult(value?: OrderInfo): AddInstallmentRes;
  hasResult(): boolean;
  clearResult(): AddInstallmentRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddInstallmentRes.AsObject;
  static toObject(includeInstance: boolean, msg: AddInstallmentRes): AddInstallmentRes.AsObject;
  static serializeBinaryToWriter(message: AddInstallmentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddInstallmentRes;
  static deserializeBinaryFromReader(message: AddInstallmentRes, reader: jspb.BinaryReader): AddInstallmentRes;
}

export namespace AddInstallmentRes {
  export type AsObject = {
    result?: OrderInfo.AsObject,
  }
}

export class AddExtraServicesRes extends jspb.Message {
  getResult(): OrderInfo | undefined;
  setResult(value?: OrderInfo): AddExtraServicesRes;
  hasResult(): boolean;
  clearResult(): AddExtraServicesRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddExtraServicesRes.AsObject;
  static toObject(includeInstance: boolean, msg: AddExtraServicesRes): AddExtraServicesRes.AsObject;
  static serializeBinaryToWriter(message: AddExtraServicesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddExtraServicesRes;
  static deserializeBinaryFromReader(message: AddExtraServicesRes, reader: jspb.BinaryReader): AddExtraServicesRes;
}

export namespace AddExtraServicesRes {
  export type AsObject = {
    result?: OrderInfo.AsObject,
  }
}

export class PlaceOrderRes extends jspb.Message {
  getResult(): OrderInfo | undefined;
  setResult(value?: OrderInfo): PlaceOrderRes;
  hasResult(): boolean;
  clearResult(): PlaceOrderRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaceOrderRes.AsObject;
  static toObject(includeInstance: boolean, msg: PlaceOrderRes): PlaceOrderRes.AsObject;
  static serializeBinaryToWriter(message: PlaceOrderRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaceOrderRes;
  static deserializeBinaryFromReader(message: PlaceOrderRes, reader: jspb.BinaryReader): PlaceOrderRes;
}

export namespace PlaceOrderRes {
  export type AsObject = {
    result?: OrderInfo.AsObject,
  }
}

export class CancelOrderRes extends jspb.Message {
  getResult(): OrderInfo | undefined;
  setResult(value?: OrderInfo): CancelOrderRes;
  hasResult(): boolean;
  clearResult(): CancelOrderRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderRes.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderRes): CancelOrderRes.AsObject;
  static serializeBinaryToWriter(message: CancelOrderRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderRes;
  static deserializeBinaryFromReader(message: CancelOrderRes, reader: jspb.BinaryReader): CancelOrderRes;
}

export namespace CancelOrderRes {
  export type AsObject = {
    result?: OrderInfo.AsObject,
  }
}

export class GetMyOrderRes extends jspb.Message {
  getResult(): OrderInfo | undefined;
  setResult(value?: OrderInfo): GetMyOrderRes;
  hasResult(): boolean;
  clearResult(): GetMyOrderRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyOrderRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyOrderRes): GetMyOrderRes.AsObject;
  static serializeBinaryToWriter(message: GetMyOrderRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyOrderRes;
  static deserializeBinaryFromReader(message: GetMyOrderRes, reader: jspb.BinaryReader): GetMyOrderRes;
}

export namespace GetMyOrderRes {
  export type AsObject = {
    result?: OrderInfo.AsObject,
  }
}

export class GetMyOrderHistoryRes extends jspb.Message {
  getOrdersList(): Array<OrderInfo>;
  setOrdersList(value: Array<OrderInfo>): GetMyOrderHistoryRes;
  clearOrdersList(): GetMyOrderHistoryRes;
  addOrders(value?: OrderInfo, index?: number): OrderInfo;

  getPagination(): order_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: order_mobile_base_pb.PaginationRes): GetMyOrderHistoryRes;
  hasPagination(): boolean;
  clearPagination(): GetMyOrderHistoryRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyOrderHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyOrderHistoryRes): GetMyOrderHistoryRes.AsObject;
  static serializeBinaryToWriter(message: GetMyOrderHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyOrderHistoryRes;
  static deserializeBinaryFromReader(message: GetMyOrderHistoryRes, reader: jspb.BinaryReader): GetMyOrderHistoryRes;
}

export namespace GetMyOrderHistoryRes {
  export type AsObject = {
    ordersList: Array<OrderInfo.AsObject>,
    pagination?: order_mobile_base_pb.PaginationRes.AsObject,
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
