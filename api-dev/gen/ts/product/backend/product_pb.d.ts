import * as jspb from 'google-protobuf'

import * as product_backend_base_pb from '../../product/backend/base_pb';
import * as product_base_pb from '../../product/base_pb';


export class ProductInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ProductInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ProductInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): ProductInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): ProductInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): ProductInfo;

  getName(): string;
  setName(value: string): ProductInfo;

  getMediasList(): Array<string>;
  setMediasList(value: Array<string>): ProductInfo;
  clearMediasList(): ProductInfo;
  addMedias(value: string, index?: number): ProductInfo;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ProductInfo;
  clearTagsList(): ProductInfo;
  addTags(value: string, index?: number): ProductInfo;

  getAvailableStartTime(): number;
  setAvailableStartTime(value: number): ProductInfo;

  getAvailableEndTime(): number;
  setAvailableEndTime(value: number): ProductInfo;

  getQuantity(): number;
  setQuantity(value: number): ProductInfo;

  getSku(): string;
  setSku(value: string): ProductInfo;

  getListedPrice(): number;
  setListedPrice(value: number): ProductInfo;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): ProductInfo;

  getPrice(): number;
  setPrice(value: number): ProductInfo;

  getBarcode(): string;
  setBarcode(value: string): ProductInfo;

  getUom(): string;
  setUom(value: string): ProductInfo;

  getCurrency(): ProductCurrencyInfo | undefined;
  setCurrency(value?: ProductCurrencyInfo): ProductInfo;
  hasCurrency(): boolean;
  clearCurrency(): ProductInfo;

  getBrand(): string;
  setBrand(value: string): ProductInfo;

  getDescription(): string;
  setDescription(value: string): ProductInfo;

  getUnlimited(): product_backend_base_pb.Boolean;
  setUnlimited(value: product_backend_base_pb.Boolean): ProductInfo;

  getCountry(): string;
  setCountry(value: string): ProductInfo;

  getAttributesList(): Array<ProductAttribute>;
  setAttributesList(value: Array<ProductAttribute>): ProductInfo;
  clearAttributesList(): ProductInfo;
  addAttributes(value?: ProductAttribute, index?: number): ProductAttribute;

  getPurchaseType(): PurchaseType;
  setPurchaseType(value: PurchaseType): ProductInfo;

  getStatus(): ProductStatus;
  setStatus(value: ProductStatus): ProductInfo;

  getLanguage(): string;
  setLanguage(value: string): ProductInfo;

  getInBooking(): boolean;
  setInBooking(value: boolean): ProductInfo;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): ProductInfo;

  getPartnerShopId(): string;
  setPartnerShopId(value: string): ProductInfo;

  getSeatInfo(): product_base_pb.SeatInfo | undefined;
  setSeatInfo(value?: product_base_pb.SeatInfo): ProductInfo;
  hasSeatInfo(): boolean;
  clearSeatInfo(): ProductInfo;

  getType(): product_base_pb.ProductType;
  setType(value: product_base_pb.ProductType): ProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductInfo): ProductInfo.AsObject;
  static serializeBinaryToWriter(message: ProductInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductInfo;
  static deserializeBinaryFromReader(message: ProductInfo, reader: jspb.BinaryReader): ProductInfo;
}

export namespace ProductInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
    partnershipId: string,
    name: string,
    mediasList: Array<string>,
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
    currency?: ProductCurrencyInfo.AsObject,
    brand: string,
    description: string,
    unlimited: product_backend_base_pb.Boolean,
    country: string,
    attributesList: Array<ProductAttribute.AsObject>,
    purchaseType: PurchaseType,
    status: ProductStatus,
    language: string,
    inBooking: boolean,
    additionalDataMap: Array<[string, string]>,
    partnerShopId: string,
    seatInfo?: product_base_pb.SeatInfo.AsObject,
    type: product_base_pb.ProductType,
  }

  export enum SeatInfoCase { 
    _SEAT_INFO_NOT_SET = 0,
    SEAT_INFO = 31,
  }
}

export class ProductCurrencyInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ProductCurrencyInfo;

  getName(): string;
  setName(value: string): ProductCurrencyInfo;

  getCode(): string;
  setCode(value: string): ProductCurrencyInfo;

  getIcon(): string;
  setIcon(value: string): ProductCurrencyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCurrencyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCurrencyInfo): ProductCurrencyInfo.AsObject;
  static serializeBinaryToWriter(message: ProductCurrencyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCurrencyInfo;
  static deserializeBinaryFromReader(message: ProductCurrencyInfo, reader: jspb.BinaryReader): ProductCurrencyInfo;
}

export namespace ProductCurrencyInfo {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    icon: string,
  }
}

export class ProductAttribute extends jspb.Message {
  getMasterDataId(): string;
  setMasterDataId(value: string): ProductAttribute;

  getName(): string;
  setName(value: string): ProductAttribute;

  getValue(): string;
  setValue(value: string): ProductAttribute;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): ProductAttribute;

  getType(): string;
  setType(value: string): ProductAttribute;

  getValueType(): ValueType;
  setValueType(value: ValueType): ProductAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: ProductAttribute): ProductAttribute.AsObject;
  static serializeBinaryToWriter(message: ProductAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductAttribute;
  static deserializeBinaryFromReader(message: ProductAttribute, reader: jspb.BinaryReader): ProductAttribute;
}

export namespace ProductAttribute {
  export type AsObject = {
    masterDataId: string,
    name: string,
    value: string,
    additionalDataMap: Array<[string, string]>,
    type: string,
    valueType: ValueType,
  }
}

export class ProductQuantity extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): ProductQuantity;

  getOrderId(): string;
  setOrderId(value: string): ProductQuantity;

  getQuantity(): number;
  setQuantity(value: number): ProductQuantity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductQuantity.AsObject;
  static toObject(includeInstance: boolean, msg: ProductQuantity): ProductQuantity.AsObject;
  static serializeBinaryToWriter(message: ProductQuantity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductQuantity;
  static deserializeBinaryFromReader(message: ProductQuantity, reader: jspb.BinaryReader): ProductQuantity;
}

export namespace ProductQuantity {
  export type AsObject = {
    productId: string,
    orderId: string,
    quantity: number,
  }
}

export class AvailableQuantity extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): AvailableQuantity;

  getAvailable(): number;
  setAvailable(value: number): AvailableQuantity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableQuantity.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableQuantity): AvailableQuantity.AsObject;
  static serializeBinaryToWriter(message: AvailableQuantity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableQuantity;
  static deserializeBinaryFromReader(message: AvailableQuantity, reader: jspb.BinaryReader): AvailableQuantity;
}

export namespace AvailableQuantity {
  export type AsObject = {
    productId: string,
    available: number,
  }
}

export class ListProductByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListProductByIdsReq;
  clearIdsList(): ListProductByIdsReq;
  addIds(value: string, index?: number): ListProductByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductByIdsReq): ListProductByIdsReq.AsObject;
  static serializeBinaryToWriter(message: ListProductByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductByIdsReq;
  static deserializeBinaryFromReader(message: ListProductByIdsReq, reader: jspb.BinaryReader): ListProductByIdsReq;
}

export namespace ListProductByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class CheckQuantityReq extends jspb.Message {
  getProductQuantityList(): Array<ProductQuantity>;
  setProductQuantityList(value: Array<ProductQuantity>): CheckQuantityReq;
  clearProductQuantityList(): CheckQuantityReq;
  addProductQuantity(value?: ProductQuantity, index?: number): ProductQuantity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckQuantityReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckQuantityReq): CheckQuantityReq.AsObject;
  static serializeBinaryToWriter(message: CheckQuantityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckQuantityReq;
  static deserializeBinaryFromReader(message: CheckQuantityReq, reader: jspb.BinaryReader): CheckQuantityReq;
}

export namespace CheckQuantityReq {
  export type AsObject = {
    productQuantityList: Array<ProductQuantity.AsObject>,
  }
}

export class GetAvailableQuantityReq extends jspb.Message {
  getProductIdsList(): Array<string>;
  setProductIdsList(value: Array<string>): GetAvailableQuantityReq;
  clearProductIdsList(): GetAvailableQuantityReq;
  addProductIds(value: string, index?: number): GetAvailableQuantityReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableQuantityReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableQuantityReq): GetAvailableQuantityReq.AsObject;
  static serializeBinaryToWriter(message: GetAvailableQuantityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableQuantityReq;
  static deserializeBinaryFromReader(message: GetAvailableQuantityReq, reader: jspb.BinaryReader): GetAvailableQuantityReq;
}

export namespace GetAvailableQuantityReq {
  export type AsObject = {
    productIdsList: Array<string>,
  }
}

export class CheckAndLockQuantityReq extends jspb.Message {
  getProductQuantityList(): Array<ProductQuantity>;
  setProductQuantityList(value: Array<ProductQuantity>): CheckAndLockQuantityReq;
  clearProductQuantityList(): CheckAndLockQuantityReq;
  addProductQuantity(value?: ProductQuantity, index?: number): ProductQuantity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckAndLockQuantityReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckAndLockQuantityReq): CheckAndLockQuantityReq.AsObject;
  static serializeBinaryToWriter(message: CheckAndLockQuantityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckAndLockQuantityReq;
  static deserializeBinaryFromReader(message: CheckAndLockQuantityReq, reader: jspb.BinaryReader): CheckAndLockQuantityReq;
}

export namespace CheckAndLockQuantityReq {
  export type AsObject = {
    productQuantityList: Array<ProductQuantity.AsObject>,
  }
}

export class UnlockQuantityReq extends jspb.Message {
  getProductQuantityList(): Array<ProductQuantity>;
  setProductQuantityList(value: Array<ProductQuantity>): UnlockQuantityReq;
  clearProductQuantityList(): UnlockQuantityReq;
  addProductQuantity(value?: ProductQuantity, index?: number): ProductQuantity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockQuantityReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockQuantityReq): UnlockQuantityReq.AsObject;
  static serializeBinaryToWriter(message: UnlockQuantityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockQuantityReq;
  static deserializeBinaryFromReader(message: UnlockQuantityReq, reader: jspb.BinaryReader): UnlockQuantityReq;
}

export namespace UnlockQuantityReq {
  export type AsObject = {
    productQuantityList: Array<ProductQuantity.AsObject>,
  }
}

export class UnlockAndUpdateQuantityReq extends jspb.Message {
  getProductQuantityList(): Array<ProductQuantity>;
  setProductQuantityList(value: Array<ProductQuantity>): UnlockAndUpdateQuantityReq;
  clearProductQuantityList(): UnlockAndUpdateQuantityReq;
  addProductQuantity(value?: ProductQuantity, index?: number): ProductQuantity;

  getUpdateAction(): UnlockAndUpdateQuantityAction;
  setUpdateAction(value: UnlockAndUpdateQuantityAction): UnlockAndUpdateQuantityReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockAndUpdateQuantityReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockAndUpdateQuantityReq): UnlockAndUpdateQuantityReq.AsObject;
  static serializeBinaryToWriter(message: UnlockAndUpdateQuantityReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockAndUpdateQuantityReq;
  static deserializeBinaryFromReader(message: UnlockAndUpdateQuantityReq, reader: jspb.BinaryReader): UnlockAndUpdateQuantityReq;
}

export namespace UnlockAndUpdateQuantityReq {
  export type AsObject = {
    productQuantityList: Array<ProductQuantity.AsObject>,
    updateAction: UnlockAndUpdateQuantityAction,
  }
}

export class ListProductByIdsRes extends jspb.Message {
  getInfosList(): Array<ProductInfo>;
  setInfosList(value: Array<ProductInfo>): ListProductByIdsRes;
  clearInfosList(): ListProductByIdsRes;
  addInfos(value?: ProductInfo, index?: number): ProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductByIdsRes): ListProductByIdsRes.AsObject;
  static serializeBinaryToWriter(message: ListProductByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductByIdsRes;
  static deserializeBinaryFromReader(message: ListProductByIdsRes, reader: jspb.BinaryReader): ListProductByIdsRes;
}

export namespace ListProductByIdsRes {
  export type AsObject = {
    infosList: Array<ProductInfo.AsObject>,
  }
}

export class GetAvailableQuantityRes extends jspb.Message {
  getAvailableQuantitiesList(): Array<AvailableQuantity>;
  setAvailableQuantitiesList(value: Array<AvailableQuantity>): GetAvailableQuantityRes;
  clearAvailableQuantitiesList(): GetAvailableQuantityRes;
  addAvailableQuantities(value?: AvailableQuantity, index?: number): AvailableQuantity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableQuantityRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableQuantityRes): GetAvailableQuantityRes.AsObject;
  static serializeBinaryToWriter(message: GetAvailableQuantityRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableQuantityRes;
  static deserializeBinaryFromReader(message: GetAvailableQuantityRes, reader: jspb.BinaryReader): GetAvailableQuantityRes;
}

export namespace GetAvailableQuantityRes {
  export type AsObject = {
    availableQuantitiesList: Array<AvailableQuantity.AsObject>,
  }
}

export class GenerateProductByEventSeatReq extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): GenerateProductByEventSeatReq;

  getEventCode(): string;
  setEventCode(value: string): GenerateProductByEventSeatReq;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): GenerateProductByEventSeatReq;

  getUserId(): string;
  setUserId(value: string): GenerateProductByEventSeatReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateProductByEventSeatReq.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateProductByEventSeatReq): GenerateProductByEventSeatReq.AsObject;
  static serializeBinaryToWriter(message: GenerateProductByEventSeatReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateProductByEventSeatReq;
  static deserializeBinaryFromReader(message: GenerateProductByEventSeatReq, reader: jspb.BinaryReader): GenerateProductByEventSeatReq;
}

export namespace GenerateProductByEventSeatReq {
  export type AsObject = {
    eventId: string,
    eventCode: string,
    bookingStartTime: number,
    userId: string,
  }
}

export enum ValueType { 
  VALUE_TYPE_INVALID = 0,
  VALUE_TYPE_STRING = 1,
  VALUE_TYPE_INTEGER = 2,
  VALUE_TYPE_FLOAT = 3,
  VALUE_TYPE_BOOLEAN = 4,
}
export enum PurchaseType { 
  PURCHASE_TYPE_INVALID = 0,
  PURCHASE_TYPE_RENT_OR_SELL = 1,
  PURCHASE_TYPE_RENT_ONLY = 2,
  PURCHASE_TYPE_SELL_ONLY = 3,
}
export enum ProductStatus { 
  PRODUCT_STATUS_INVALID = 0,
  PRODUCT_STATUS_PUBLISHED = 1,
  PRODUCT_STATUS_UNPUBLISHED = 2,
  PRODUCT_STATUS_DRAFT = 3,
  PRODUCT_STATUS_DELETED = 4,
}
export enum UnlockAndUpdateQuantityAction { 
  UNLOCK_AND_UPDATE_QUANTITY_ACTION_INVALID = 0,
  UNLOCK_AND_UPDATE_QUANTITY_ACTION_INCREASE = 1,
  UNLOCK_AND_UPDATE_QUANTITY_ACTION_DECREASE = 2,
}
