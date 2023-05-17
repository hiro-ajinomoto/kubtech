import * as jspb from 'google-protobuf'

import * as order_mobile_base_pb from '../../order/mobile/base_pb';


export class CartInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CartInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): CartInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CartInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): CartInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): CartInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): CartInfo;

  getUserId(): string;
  setUserId(value: string): CartInfo;

  getProductsList(): Array<CartProductInfoItem>;
  setProductsList(value: Array<CartProductInfoItem>): CartInfo;
  clearProductsList(): CartInfo;
  addProducts(value?: CartProductInfoItem, index?: number): CartProductInfoItem;

  getTotalPrice(): number;
  setTotalPrice(value: number): CartInfo;

  getConvertedTotalPrice(): number;
  setConvertedTotalPrice(value: number): CartInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CartInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CartInfo): CartInfo.AsObject;
  static serializeBinaryToWriter(message: CartInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CartInfo;
  static deserializeBinaryFromReader(message: CartInfo, reader: jspb.BinaryReader): CartInfo;
}

export namespace CartInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    partnershipId: string,
    userId: string,
    productsList: Array<CartProductInfoItem.AsObject>,
    totalPrice: number,
    convertedTotalPrice: number,
  }
}

export class CartProductInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CartProductInfo;

  getStatus(): order_mobile_base_pb.ProductStatus;
  setStatus(value: order_mobile_base_pb.ProductStatus): CartProductInfo;

  getName(): string;
  setName(value: string): CartProductInfo;

  getMediasList(): Array<string>;
  setMediasList(value: Array<string>): CartProductInfo;
  clearMediasList(): CartProductInfo;
  addMedias(value: string, index?: number): CartProductInfo;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CartProductInfo;
  clearTagsList(): CartProductInfo;
  addTags(value: string, index?: number): CartProductInfo;

  getSku(): string;
  setSku(value: string): CartProductInfo;

  getListedPrice(): number;
  setListedPrice(value: number): CartProductInfo;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): CartProductInfo;

  getPrice(): number;
  setPrice(value: number): CartProductInfo;

  getUom(): string;
  setUom(value: string): CartProductInfo;

  getBarcode(): string;
  setBarcode(value: string): CartProductInfo;

  getCurrency(): CartProductCurrencyInfo | undefined;
  setCurrency(value?: CartProductCurrencyInfo): CartProductInfo;
  hasCurrency(): boolean;
  clearCurrency(): CartProductInfo;

  getBrand(): string;
  setBrand(value: string): CartProductInfo;

  getUnlimited(): order_mobile_base_pb.CustomBoolean;
  setUnlimited(value: order_mobile_base_pb.CustomBoolean): CartProductInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): CartProductInfo;

  getCountry(): string;
  setCountry(value: string): CartProductInfo;

  getLanguage(): string;
  setLanguage(value: string): CartProductInfo;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): CartProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CartProductInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CartProductInfo): CartProductInfo.AsObject;
  static serializeBinaryToWriter(message: CartProductInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CartProductInfo;
  static deserializeBinaryFromReader(message: CartProductInfo, reader: jspb.BinaryReader): CartProductInfo;
}

export namespace CartProductInfo {
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
    currency?: CartProductCurrencyInfo.AsObject,
    brand: string,
    unlimited: order_mobile_base_pb.CustomBoolean,
    partnershipId: string,
    country: string,
    language: string,
    additionalDataMap: Array<[string, string]>,
  }
}

export class SeatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SeatInfo;

  getSeatName(): string;
  setSeatName(value: string): SeatInfo;

  getSeatBlockId(): string;
  setSeatBlockId(value: string): SeatInfo;

  getSeatmapId(): string;
  setSeatmapId(value: string): SeatInfo;

  getScheduleId(): string;
  setScheduleId(value: string): SeatInfo;

  getEventId(): string;
  setEventId(value: string): SeatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SeatInfo): SeatInfo.AsObject;
  static serializeBinaryToWriter(message: SeatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatInfo;
  static deserializeBinaryFromReader(message: SeatInfo, reader: jspb.BinaryReader): SeatInfo;
}

export namespace SeatInfo {
  export type AsObject = {
    id: string,
    seatName: string,
    seatBlockId: string,
    seatmapId: string,
    scheduleId: string,
    eventId: string,
  }
}

export class CartProductCurrencyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CartProductCurrencyInfo;

  getName(): string;
  setName(value: string): CartProductCurrencyInfo;

  getCode(): string;
  setCode(value: string): CartProductCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): CartProductCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CartProductCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CartProductCurrencyInfo): CartProductCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: CartProductCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CartProductCurrencyInfo;
  static deserializeBinaryFromReader(message: CartProductCurrencyInfo, reader: jspb.BinaryReader): CartProductCurrencyInfo;
}

export namespace CartProductCurrencyInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class CartProductInfoItem extends jspb.Message {
  getProductInfo(): CartProductInfo | undefined;
  setProductInfo(value?: CartProductInfo): CartProductInfoItem;
  hasProductInfo(): boolean;
  clearProductInfo(): CartProductInfoItem;

  getQuantity(): number;
  setQuantity(value: number): CartProductInfoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CartProductInfoItem.AsObject;
  static toObject(includeInstance: boolean, msg: CartProductInfoItem): CartProductInfoItem.AsObject;
  static serializeBinaryToWriter(message: CartProductInfoItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CartProductInfoItem;
  static deserializeBinaryFromReader(message: CartProductInfoItem, reader: jspb.BinaryReader): CartProductInfoItem;
}

export namespace CartProductInfoItem {
  export type AsObject = {
    productInfo?: CartProductInfo.AsObject,
    quantity: number,
  }
}

export class CartProductItem extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): CartProductItem;

  getQuantity(): number;
  setQuantity(value: number): CartProductItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CartProductItem.AsObject;
  static toObject(includeInstance: boolean, msg: CartProductItem): CartProductItem.AsObject;
  static serializeBinaryToWriter(message: CartProductItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CartProductItem;
  static deserializeBinaryFromReader(message: CartProductItem, reader: jspb.BinaryReader): CartProductItem;
}

export namespace CartProductItem {
  export type AsObject = {
    productId: string,
    quantity: number,
  }
}

export class CartProductAttribute extends jspb.Message {
  getMasterDataId(): string;
  setMasterDataId(value: string): CartProductAttribute;

  getValuesList(): Array<CartProductAttribute.Value>;
  setValuesList(value: Array<CartProductAttribute.Value>): CartProductAttribute;
  clearValuesList(): CartProductAttribute;
  addValues(value?: CartProductAttribute.Value, index?: number): CartProductAttribute.Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CartProductAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: CartProductAttribute): CartProductAttribute.AsObject;
  static serializeBinaryToWriter(message: CartProductAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CartProductAttribute;
  static deserializeBinaryFromReader(message: CartProductAttribute, reader: jspb.BinaryReader): CartProductAttribute;
}

export namespace CartProductAttribute {
  export type AsObject = {
    masterDataId: string,
    valuesList: Array<CartProductAttribute.Value.AsObject>,
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

export class AddProductToCartReq extends jspb.Message {
  getProductsList(): Array<CartProductItem>;
  setProductsList(value: Array<CartProductItem>): AddProductToCartReq;
  clearProductsList(): AddProductToCartReq;
  addProducts(value?: CartProductItem, index?: number): CartProductItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProductToCartReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddProductToCartReq): AddProductToCartReq.AsObject;
  static serializeBinaryToWriter(message: AddProductToCartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProductToCartReq;
  static deserializeBinaryFromReader(message: AddProductToCartReq, reader: jspb.BinaryReader): AddProductToCartReq;
}

export namespace AddProductToCartReq {
  export type AsObject = {
    productsList: Array<CartProductItem.AsObject>,
  }
}

export class UpdateMyCartReq extends jspb.Message {
  getCartId(): string;
  setCartId(value: string): UpdateMyCartReq;

  getProductsList(): Array<CartProductItem>;
  setProductsList(value: Array<CartProductItem>): UpdateMyCartReq;
  clearProductsList(): UpdateMyCartReq;
  addProducts(value?: CartProductItem, index?: number): CartProductItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyCartReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyCartReq): UpdateMyCartReq.AsObject;
  static serializeBinaryToWriter(message: UpdateMyCartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyCartReq;
  static deserializeBinaryFromReader(message: UpdateMyCartReq, reader: jspb.BinaryReader): UpdateMyCartReq;
}

export namespace UpdateMyCartReq {
  export type AsObject = {
    cartId: string,
    productsList: Array<CartProductItem.AsObject>,
  }
}

export class RemoveProductFromCartReq extends jspb.Message {
  getProductsList(): Array<CartProductItem>;
  setProductsList(value: Array<CartProductItem>): RemoveProductFromCartReq;
  clearProductsList(): RemoveProductFromCartReq;
  addProducts(value?: CartProductItem, index?: number): CartProductItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveProductFromCartReq.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveProductFromCartReq): RemoveProductFromCartReq.AsObject;
  static serializeBinaryToWriter(message: RemoveProductFromCartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveProductFromCartReq;
  static deserializeBinaryFromReader(message: RemoveProductFromCartReq, reader: jspb.BinaryReader): RemoveProductFromCartReq;
}

export namespace RemoveProductFromCartReq {
  export type AsObject = {
    productsList: Array<CartProductItem.AsObject>,
  }
}

export class GetMyCartReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyCartReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyCartReq): GetMyCartReq.AsObject;
  static serializeBinaryToWriter(message: GetMyCartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyCartReq;
  static deserializeBinaryFromReader(message: GetMyCartReq, reader: jspb.BinaryReader): GetMyCartReq;
}

export namespace GetMyCartReq {
  export type AsObject = {
  }
}

export class AddProductToCartRes extends jspb.Message {
  getCartId(): string;
  setCartId(value: string): AddProductToCartRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddProductToCartRes.AsObject;
  static toObject(includeInstance: boolean, msg: AddProductToCartRes): AddProductToCartRes.AsObject;
  static serializeBinaryToWriter(message: AddProductToCartRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddProductToCartRes;
  static deserializeBinaryFromReader(message: AddProductToCartRes, reader: jspb.BinaryReader): AddProductToCartRes;
}

export namespace AddProductToCartRes {
  export type AsObject = {
    cartId: string,
  }
}

export class UpdateMyCartRes extends jspb.Message {
  getCartId(): string;
  setCartId(value: string): UpdateMyCartRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyCartRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyCartRes): UpdateMyCartRes.AsObject;
  static serializeBinaryToWriter(message: UpdateMyCartRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyCartRes;
  static deserializeBinaryFromReader(message: UpdateMyCartRes, reader: jspb.BinaryReader): UpdateMyCartRes;
}

export namespace UpdateMyCartRes {
  export type AsObject = {
    cartId: string,
  }
}

export class RemoveProductFromCartRes extends jspb.Message {
  getCartId(): string;
  setCartId(value: string): RemoveProductFromCartRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveProductFromCartRes.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveProductFromCartRes): RemoveProductFromCartRes.AsObject;
  static serializeBinaryToWriter(message: RemoveProductFromCartRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveProductFromCartRes;
  static deserializeBinaryFromReader(message: RemoveProductFromCartRes, reader: jspb.BinaryReader): RemoveProductFromCartRes;
}

export namespace RemoveProductFromCartRes {
  export type AsObject = {
    cartId: string,
  }
}

export class GetMyCartRes extends jspb.Message {
  getResult(): CartInfo | undefined;
  setResult(value?: CartInfo): GetMyCartRes;
  hasResult(): boolean;
  clearResult(): GetMyCartRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyCartRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyCartRes): GetMyCartRes.AsObject;
  static serializeBinaryToWriter(message: GetMyCartRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyCartRes;
  static deserializeBinaryFromReader(message: GetMyCartRes, reader: jspb.BinaryReader): GetMyCartRes;
}

export namespace GetMyCartRes {
  export type AsObject = {
    result?: CartInfo.AsObject,
  }
}

export enum CartProductPurchaseType { 
  CART_PRODUCT_PURCHASE_TYPE_INVALID = 0,
  CART_PRODUCT_PURCHASE_TYPE_RENT_OR_SELL = 1,
  CART_PRODUCT_PURCHASE_TYPE_RENT_ONLY = 2,
  CART_PRODUCT_PURCHASE_TYPE_SELL_ONLY = 3,
}
