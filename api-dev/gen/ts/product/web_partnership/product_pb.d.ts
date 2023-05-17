import * as jspb from 'google-protobuf'

import * as base_base_pb from '../../base/base_pb';


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

  getUnlimited(): base_base_pb.Boolean;
  setUnlimited(value: base_base_pb.Boolean): ProductInfo;

  getCountry(): string;
  setCountry(value: string): ProductInfo;

  getAttributesList(): Array<DetailProductAttribute>;
  setAttributesList(value: Array<DetailProductAttribute>): ProductInfo;
  clearAttributesList(): ProductInfo;
  addAttributes(value?: DetailProductAttribute, index?: number): DetailProductAttribute;

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
    unlimited: base_base_pb.Boolean,
    country: string,
    attributesList: Array<DetailProductAttribute.AsObject>,
    purchaseType: PurchaseType,
    status: ProductStatus,
    language: string,
    inBooking: boolean,
    additionalDataMap: Array<[string, string]>,
    partnerShopId: string,
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

export class BasicProductAttribute extends jspb.Message {
  getMasterDataId(): string;
  setMasterDataId(value: string): BasicProductAttribute;

  getInputValue(): string;
  setInputValue(value: string): BasicProductAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicProductAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: BasicProductAttribute): BasicProductAttribute.AsObject;
  static serializeBinaryToWriter(message: BasicProductAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicProductAttribute;
  static deserializeBinaryFromReader(message: BasicProductAttribute, reader: jspb.BinaryReader): BasicProductAttribute;
}

export namespace BasicProductAttribute {
  export type AsObject = {
    masterDataId: string,
    inputValue: string,
  }
}

export class DetailProductAttribute extends jspb.Message {
  getMasterDataId(): string;
  setMasterDataId(value: string): DetailProductAttribute;

  getName(): string;
  setName(value: string): DetailProductAttribute;

  getValue(): string;
  setValue(value: string): DetailProductAttribute;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): DetailProductAttribute;

  getType(): string;
  setType(value: string): DetailProductAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailProductAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: DetailProductAttribute): DetailProductAttribute.AsObject;
  static serializeBinaryToWriter(message: DetailProductAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailProductAttribute;
  static deserializeBinaryFromReader(message: DetailProductAttribute, reader: jspb.BinaryReader): DetailProductAttribute;
}

export namespace DetailProductAttribute {
  export type AsObject = {
    masterDataId: string,
    name: string,
    value: string,
    additionalDataMap: Array<[string, string]>,
    type: string,
  }
}

export class CreateProductReq extends jspb.Message {
  getName(): string;
  setName(value: string): CreateProductReq;

  getMediasList(): Array<string>;
  setMediasList(value: Array<string>): CreateProductReq;
  clearMediasList(): CreateProductReq;
  addMedias(value: string, index?: number): CreateProductReq;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateProductReq;
  clearTagsList(): CreateProductReq;
  addTags(value: string, index?: number): CreateProductReq;

  getAvailableStartTime(): number;
  setAvailableStartTime(value: number): CreateProductReq;

  getAvailableEndTime(): number;
  setAvailableEndTime(value: number): CreateProductReq;

  getQuantity(): number;
  setQuantity(value: number): CreateProductReq;

  getSku(): string;
  setSku(value: string): CreateProductReq;

  getListedPrice(): number;
  setListedPrice(value: number): CreateProductReq;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): CreateProductReq;

  getUom(): string;
  setUom(value: string): CreateProductReq;

  getCurrency(): ProductCurrencyInfo | undefined;
  setCurrency(value?: ProductCurrencyInfo): CreateProductReq;
  hasCurrency(): boolean;
  clearCurrency(): CreateProductReq;

  getBrand(): string;
  setBrand(value: string): CreateProductReq;

  getDescription(): string;
  setDescription(value: string): CreateProductReq;

  getUnlimited(): base_base_pb.Boolean;
  setUnlimited(value: base_base_pb.Boolean): CreateProductReq;

  getCountry(): string;
  setCountry(value: string): CreateProductReq;

  getLanguage(): string;
  setLanguage(value: string): CreateProductReq;

  getAttributesList(): Array<BasicProductAttribute>;
  setAttributesList(value: Array<BasicProductAttribute>): CreateProductReq;
  clearAttributesList(): CreateProductReq;
  addAttributes(value?: BasicProductAttribute, index?: number): BasicProductAttribute;

  getPurchaseType(): PurchaseType;
  setPurchaseType(value: PurchaseType): CreateProductReq;

  getStatus(): ProductStatus;
  setStatus(value: ProductStatus): CreateProductReq;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): CreateProductReq;

  getPartnerShopId(): string;
  setPartnerShopId(value: string): CreateProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductReq): CreateProductReq.AsObject;
  static serializeBinaryToWriter(message: CreateProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductReq;
  static deserializeBinaryFromReader(message: CreateProductReq, reader: jspb.BinaryReader): CreateProductReq;
}

export namespace CreateProductReq {
  export type AsObject = {
    name: string,
    mediasList: Array<string>,
    tagsList: Array<string>,
    availableStartTime: number,
    availableEndTime: number,
    quantity: number,
    sku: string,
    listedPrice: number,
    discountPercent: number,
    uom: string,
    currency?: ProductCurrencyInfo.AsObject,
    brand: string,
    description: string,
    unlimited: base_base_pb.Boolean,
    country: string,
    language: string,
    attributesList: Array<BasicProductAttribute.AsObject>,
    purchaseType: PurchaseType,
    status: ProductStatus,
    additionalDataMap: Array<[string, string]>,
    partnerShopId: string,
  }
}

export class UpdateProductReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateProductReq;

  getName(): string;
  setName(value: string): UpdateProductReq;

  getMediasList(): Array<string>;
  setMediasList(value: Array<string>): UpdateProductReq;
  clearMediasList(): UpdateProductReq;
  addMedias(value: string, index?: number): UpdateProductReq;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): UpdateProductReq;
  clearTagsList(): UpdateProductReq;
  addTags(value: string, index?: number): UpdateProductReq;

  getAvailableStartTime(): number;
  setAvailableStartTime(value: number): UpdateProductReq;

  getAvailableEndTime(): number;
  setAvailableEndTime(value: number): UpdateProductReq;

  getQuantity(): number;
  setQuantity(value: number): UpdateProductReq;

  getSku(): string;
  setSku(value: string): UpdateProductReq;

  getListedPrice(): number;
  setListedPrice(value: number): UpdateProductReq;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): UpdateProductReq;

  getUom(): string;
  setUom(value: string): UpdateProductReq;

  getCurrency(): ProductCurrencyInfo | undefined;
  setCurrency(value?: ProductCurrencyInfo): UpdateProductReq;
  hasCurrency(): boolean;
  clearCurrency(): UpdateProductReq;

  getBrand(): string;
  setBrand(value: string): UpdateProductReq;

  getDescription(): string;
  setDescription(value: string): UpdateProductReq;

  getUnlimited(): base_base_pb.Boolean;
  setUnlimited(value: base_base_pb.Boolean): UpdateProductReq;

  getCountry(): string;
  setCountry(value: string): UpdateProductReq;

  getLanguage(): string;
  setLanguage(value: string): UpdateProductReq;

  getAttributesList(): Array<BasicProductAttribute>;
  setAttributesList(value: Array<BasicProductAttribute>): UpdateProductReq;
  clearAttributesList(): UpdateProductReq;
  addAttributes(value?: BasicProductAttribute, index?: number): BasicProductAttribute;

  getPurchaseType(): PurchaseType;
  setPurchaseType(value: PurchaseType): UpdateProductReq;

  getStatus(): ProductStatus;
  setStatus(value: ProductStatus): UpdateProductReq;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): UpdateProductReq;

  getPartnerShopId(): string;
  setPartnerShopId(value: string): UpdateProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProductReq): UpdateProductReq.AsObject;
  static serializeBinaryToWriter(message: UpdateProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProductReq;
  static deserializeBinaryFromReader(message: UpdateProductReq, reader: jspb.BinaryReader): UpdateProductReq;
}

export namespace UpdateProductReq {
  export type AsObject = {
    id: string,
    name: string,
    mediasList: Array<string>,
    tagsList: Array<string>,
    availableStartTime: number,
    availableEndTime: number,
    quantity: number,
    sku: string,
    listedPrice: number,
    discountPercent: number,
    uom: string,
    currency?: ProductCurrencyInfo.AsObject,
    brand: string,
    description: string,
    unlimited: base_base_pb.Boolean,
    country: string,
    language: string,
    attributesList: Array<BasicProductAttribute.AsObject>,
    purchaseType: PurchaseType,
    status: ProductStatus,
    additionalDataMap: Array<[string, string]>,
    partnerShopId: string,
  }
}

export class SoftDeleteProductReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): SoftDeleteProductReq;
  clearIdsList(): SoftDeleteProductReq;
  addIds(value: string, index?: number): SoftDeleteProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoftDeleteProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: SoftDeleteProductReq): SoftDeleteProductReq.AsObject;
  static serializeBinaryToWriter(message: SoftDeleteProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoftDeleteProductReq;
  static deserializeBinaryFromReader(message: SoftDeleteProductReq, reader: jspb.BinaryReader): SoftDeleteProductReq;
}

export namespace SoftDeleteProductReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class HardDeleteProductReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): HardDeleteProductReq;
  clearIdsList(): HardDeleteProductReq;
  addIds(value: string, index?: number): HardDeleteProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HardDeleteProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: HardDeleteProductReq): HardDeleteProductReq.AsObject;
  static serializeBinaryToWriter(message: HardDeleteProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HardDeleteProductReq;
  static deserializeBinaryFromReader(message: HardDeleteProductReq, reader: jspb.BinaryReader): HardDeleteProductReq;
}

export namespace HardDeleteProductReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class PublicListProductReq extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): PublicListProductReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): PublicListProductReq;
  hasPagination(): boolean;
  clearPagination(): PublicListProductReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): PublicListProductReq;
  clearOrderByList(): PublicListProductReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

  getPartnershipId(): string;
  setPartnershipId(value: string): PublicListProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListProductReq): PublicListProductReq.AsObject;
  static serializeBinaryToWriter(message: PublicListProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListProductReq;
  static deserializeBinaryFromReader(message: PublicListProductReq, reader: jspb.BinaryReader): PublicListProductReq;
}

export namespace PublicListProductReq {
  export type AsObject = {
    search: string,
    pagination?: base_base_pb.PaginationReq.AsObject,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
    partnershipId: string,
  }
}

export class RetrieveProductReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveProductReq): RetrieveProductReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveProductReq;
  static deserializeBinaryFromReader(message: RetrieveProductReq, reader: jspb.BinaryReader): RetrieveProductReq;
}

export namespace RetrieveProductReq {
  export type AsObject = {
    id: string,
  }
}

export class ListProductReq extends jspb.Message {
  getName(): string;
  setName(value: string): ListProductReq;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): ListProductReq;

  getPriceFrom(): number;
  setPriceFrom(value: number): ListProductReq;

  getPriceTo(): number;
  setPriceTo(value: number): ListProductReq;

  getStatusList(): Array<ProductStatus>;
  setStatusList(value: Array<ProductStatus>): ListProductReq;
  clearStatusList(): ListProductReq;
  addStatus(value: ProductStatus, index?: number): ListProductReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListProductReq;
  hasPagination(): boolean;
  clearPagination(): ListProductReq;

  getOrderByList(): Array<base_base_pb.OrderByItem>;
  setOrderByList(value: Array<base_base_pb.OrderByItem>): ListProductReq;
  clearOrderByList(): ListProductReq;
  addOrderBy(value?: base_base_pb.OrderByItem, index?: number): base_base_pb.OrderByItem;

  getSearchText(): string;
  setSearchText(value: string): ListProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductReq): ListProductReq.AsObject;
  static serializeBinaryToWriter(message: ListProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductReq;
  static deserializeBinaryFromReader(message: ListProductReq, reader: jspb.BinaryReader): ListProductReq;
}

export namespace ListProductReq {
  export type AsObject = {
    name: string,
    attributesMap: Array<[string, string]>,
    priceFrom: number,
    priceTo: number,
    statusList: Array<ProductStatus>,
    pagination?: base_base_pb.PaginationReq.AsObject,
    orderByList: Array<base_base_pb.OrderByItem.AsObject>,
    searchText: string,
  }
}

export class PublicRetrieveProductReq extends jspb.Message {
  getId(): string;
  setId(value: string): PublicRetrieveProductReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): PublicRetrieveProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrieveProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrieveProductReq): PublicRetrieveProductReq.AsObject;
  static serializeBinaryToWriter(message: PublicRetrieveProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrieveProductReq;
  static deserializeBinaryFromReader(message: PublicRetrieveProductReq, reader: jspb.BinaryReader): PublicRetrieveProductReq;
}

export namespace PublicRetrieveProductReq {
  export type AsObject = {
    id: string,
    partnershipId: string,
  }
}

export class CreateProductRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateProductRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProductRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProductRes): CreateProductRes.AsObject;
  static serializeBinaryToWriter(message: CreateProductRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProductRes;
  static deserializeBinaryFromReader(message: CreateProductRes, reader: jspb.BinaryReader): CreateProductRes;
}

export namespace CreateProductRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveProductRes extends jspb.Message {
  getInfo(): ProductInfo | undefined;
  setInfo(value?: ProductInfo): RetrieveProductRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveProductRes;

  getBought(): boolean;
  setBought(value: boolean): RetrieveProductRes;

  getRent(): boolean;
  setRent(value: boolean): RetrieveProductRes;

  getRemainingTime(): number;
  setRemainingTime(value: number): RetrieveProductRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveProductRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveProductRes): RetrieveProductRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveProductRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveProductRes;
  static deserializeBinaryFromReader(message: RetrieveProductRes, reader: jspb.BinaryReader): RetrieveProductRes;
}

export namespace RetrieveProductRes {
  export type AsObject = {
    info?: ProductInfo.AsObject,
    bought: boolean,
    rent: boolean,
    remainingTime: number,
  }
}

export class ListProductRes extends jspb.Message {
  getInfoList(): Array<ProductInfo>;
  setInfoList(value: Array<ProductInfo>): ListProductRes;
  clearInfoList(): ListProductRes;
  addInfo(value?: ProductInfo, index?: number): ProductInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): ListProductRes;
  hasPagination(): boolean;
  clearPagination(): ListProductRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductRes): ListProductRes.AsObject;
  static serializeBinaryToWriter(message: ListProductRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductRes;
  static deserializeBinaryFromReader(message: ListProductRes, reader: jspb.BinaryReader): ListProductRes;
}

export namespace ListProductRes {
  export type AsObject = {
    infoList: Array<ProductInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

export class PublicRetrieveProductRes extends jspb.Message {
  getInfo(): ProductInfo | undefined;
  setInfo(value?: ProductInfo): PublicRetrieveProductRes;
  hasInfo(): boolean;
  clearInfo(): PublicRetrieveProductRes;

  getBought(): boolean;
  setBought(value: boolean): PublicRetrieveProductRes;

  getRent(): boolean;
  setRent(value: boolean): PublicRetrieveProductRes;

  getRemainingTime(): number;
  setRemainingTime(value: number): PublicRetrieveProductRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicRetrieveProductRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicRetrieveProductRes): PublicRetrieveProductRes.AsObject;
  static serializeBinaryToWriter(message: PublicRetrieveProductRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicRetrieveProductRes;
  static deserializeBinaryFromReader(message: PublicRetrieveProductRes, reader: jspb.BinaryReader): PublicRetrieveProductRes;
}

export namespace PublicRetrieveProductRes {
  export type AsObject = {
    info?: ProductInfo.AsObject,
    bought: boolean,
    rent: boolean,
    remainingTime: number,
  }
}

export class PublicListProductRes extends jspb.Message {
  getInfoList(): Array<ProductInfo>;
  setInfoList(value: Array<ProductInfo>): PublicListProductRes;
  clearInfoList(): PublicListProductRes;
  addInfo(value?: ProductInfo, index?: number): ProductInfo;

  getPagination(): base_base_pb.PaginationRes | undefined;
  setPagination(value?: base_base_pb.PaginationRes): PublicListProductRes;
  hasPagination(): boolean;
  clearPagination(): PublicListProductRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicListProductRes.AsObject;
  static toObject(includeInstance: boolean, msg: PublicListProductRes): PublicListProductRes.AsObject;
  static serializeBinaryToWriter(message: PublicListProductRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicListProductRes;
  static deserializeBinaryFromReader(message: PublicListProductRes, reader: jspb.BinaryReader): PublicListProductRes;
}

export namespace PublicListProductRes {
  export type AsObject = {
    infoList: Array<ProductInfo.AsObject>,
    pagination?: base_base_pb.PaginationRes.AsObject,
  }
}

export class ListProductBySeatsReq extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): ListProductBySeatsReq;

  getSeatBlockIdsList(): Array<string>;
  setSeatBlockIdsList(value: Array<string>): ListProductBySeatsReq;
  clearSeatBlockIdsList(): ListProductBySeatsReq;
  addSeatBlockIds(value: string, index?: number): ListProductBySeatsReq;

  getSeatIdsList(): Array<string>;
  setSeatIdsList(value: Array<string>): ListProductBySeatsReq;
  clearSeatIdsList(): ListProductBySeatsReq;
  addSeatIds(value: string, index?: number): ListProductBySeatsReq;

  getPagination(): base_base_pb.PaginationReq | undefined;
  setPagination(value?: base_base_pb.PaginationReq): ListProductBySeatsReq;
  hasPagination(): boolean;
  clearPagination(): ListProductBySeatsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductBySeatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductBySeatsReq): ListProductBySeatsReq.AsObject;
  static serializeBinaryToWriter(message: ListProductBySeatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductBySeatsReq;
  static deserializeBinaryFromReader(message: ListProductBySeatsReq, reader: jspb.BinaryReader): ListProductBySeatsReq;
}

export namespace ListProductBySeatsReq {
  export type AsObject = {
    eventId: string,
    seatBlockIdsList: Array<string>,
    seatIdsList: Array<string>,
    pagination?: base_base_pb.PaginationReq.AsObject,
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
