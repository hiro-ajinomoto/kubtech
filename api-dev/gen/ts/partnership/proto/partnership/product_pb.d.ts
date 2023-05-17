import * as jspb from 'google-protobuf'

import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


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

  getActive(): boolean;
  setActive(value: boolean): ProductInfo;

  getName(): string;
  setName(value: string): ProductInfo;

  getTrailerUrl(): string;
  setTrailerUrl(value: string): ProductInfo;

  getMediasList(): Array<proto_partnership_base_pb.Media>;
  setMediasList(value: Array<proto_partnership_base_pb.Media>): ProductInfo;
  clearMediasList(): ProductInfo;
  addMedias(value?: proto_partnership_base_pb.Media, index?: number): proto_partnership_base_pb.Media;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ProductInfo;
  clearTagsList(): ProductInfo;
  addTags(value: string, index?: number): ProductInfo;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): ProductInfo;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): ProductInfo;

  getDuration(): number;
  setDuration(value: number): ProductInfo;

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

  getRental(): boolean;
  setRental(value: boolean): ProductInfo;

  getUom(): string;
  setUom(value: string): ProductInfo;

  getBarcode(): string;
  setBarcode(value: string): ProductInfo;

  getWeight(): number;
  setWeight(value: number): ProductInfo;

  getVolume(): number;
  setVolume(value: number): ProductInfo;

  getRatingValue(): number;
  setRatingValue(value: number): ProductInfo;

  getRatingCount(): number;
  setRatingCount(value: number): ProductInfo;

  getCurrency(): ProductCurrencyInfo | undefined;
  setCurrency(value?: ProductCurrencyInfo): ProductInfo;
  hasCurrency(): boolean;
  clearCurrency(): ProductInfo;

  getBrand(): string;
  setBrand(value: string): ProductInfo;

  getDescription(): string;
  setDescription(value: string): ProductInfo;

  getLimited(): boolean;
  setLimited(value: boolean): ProductInfo;

  getInBooking(): boolean;
  setInBooking(value: boolean): ProductInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): ProductInfo;

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
    active: boolean,
    name: string,
    trailerUrl: string,
    mediasList: Array<proto_partnership_base_pb.Media.AsObject>,
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
    currency?: ProductCurrencyInfo.AsObject,
    brand: string,
    description: string,
    limited: boolean,
    inBooking: boolean,
    partnershipId: string,
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

export class CreateProductReq extends jspb.Message {
  getName(): string;
  setName(value: string): CreateProductReq;

  getTrailerUrl(): string;
  setTrailerUrl(value: string): CreateProductReq;

  getMediasList(): Array<proto_partnership_base_pb.Media>;
  setMediasList(value: Array<proto_partnership_base_pb.Media>): CreateProductReq;
  clearMediasList(): CreateProductReq;
  addMedias(value?: proto_partnership_base_pb.Media, index?: number): proto_partnership_base_pb.Media;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateProductReq;
  clearTagsList(): CreateProductReq;
  addTags(value: string, index?: number): CreateProductReq;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): CreateProductReq;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): CreateProductReq;

  getDuration(): number;
  setDuration(value: number): CreateProductReq;

  getQuantity(): number;
  setQuantity(value: number): CreateProductReq;

  getSku(): string;
  setSku(value: string): CreateProductReq;

  getListedPrice(): number;
  setListedPrice(value: number): CreateProductReq;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): CreateProductReq;

  getRental(): boolean;
  setRental(value: boolean): CreateProductReq;

  getUom(): string;
  setUom(value: string): CreateProductReq;

  getWeight(): number;
  setWeight(value: number): CreateProductReq;

  getVolume(): number;
  setVolume(value: number): CreateProductReq;

  getCurrency(): ProductCurrencyInfo | undefined;
  setCurrency(value?: ProductCurrencyInfo): CreateProductReq;
  hasCurrency(): boolean;
  clearCurrency(): CreateProductReq;

  getBrand(): string;
  setBrand(value: string): CreateProductReq;

  getDescription(): string;
  setDescription(value: string): CreateProductReq;

  getLimited(): boolean;
  setLimited(value: boolean): CreateProductReq;

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
    trailerUrl: string,
    mediasList: Array<proto_partnership_base_pb.Media.AsObject>,
    tagsList: Array<string>,
    bookingStartTime: number,
    bookingEndTime: number,
    duration: number,
    quantity: number,
    sku: string,
    listedPrice: number,
    discountPercent: number,
    rental: boolean,
    uom: string,
    weight: number,
    volume: number,
    currency?: ProductCurrencyInfo.AsObject,
    brand: string,
    description: string,
    limited: boolean,
  }
}

export class UpdateProductReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateProductReq;

  getName(): string;
  setName(value: string): UpdateProductReq;

  getTrailerUrl(): string;
  setTrailerUrl(value: string): UpdateProductReq;

  getMediasList(): Array<proto_partnership_base_pb.Media>;
  setMediasList(value: Array<proto_partnership_base_pb.Media>): UpdateProductReq;
  clearMediasList(): UpdateProductReq;
  addMedias(value?: proto_partnership_base_pb.Media, index?: number): proto_partnership_base_pb.Media;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): UpdateProductReq;
  clearTagsList(): UpdateProductReq;
  addTags(value: string, index?: number): UpdateProductReq;

  getBookingStartTime(): number;
  setBookingStartTime(value: number): UpdateProductReq;

  getBookingEndTime(): number;
  setBookingEndTime(value: number): UpdateProductReq;

  getDuration(): number;
  setDuration(value: number): UpdateProductReq;

  getQuantity(): number;
  setQuantity(value: number): UpdateProductReq;

  getSku(): string;
  setSku(value: string): UpdateProductReq;

  getListedPrice(): number;
  setListedPrice(value: number): UpdateProductReq;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): UpdateProductReq;

  getRental(): boolean;
  setRental(value: boolean): UpdateProductReq;

  getUom(): string;
  setUom(value: string): UpdateProductReq;

  getWeight(): number;
  setWeight(value: number): UpdateProductReq;

  getVolume(): number;
  setVolume(value: number): UpdateProductReq;

  getCurrency(): ProductCurrencyInfo | undefined;
  setCurrency(value?: ProductCurrencyInfo): UpdateProductReq;
  hasCurrency(): boolean;
  clearCurrency(): UpdateProductReq;

  getBrand(): string;
  setBrand(value: string): UpdateProductReq;

  getDescription(): string;
  setDescription(value: string): UpdateProductReq;

  getLimited(): boolean;
  setLimited(value: boolean): UpdateProductReq;

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
    trailerUrl: string,
    mediasList: Array<proto_partnership_base_pb.Media.AsObject>,
    tagsList: Array<string>,
    bookingStartTime: number,
    bookingEndTime: number,
    duration: number,
    quantity: number,
    sku: string,
    listedPrice: number,
    discountPercent: number,
    rental: boolean,
    uom: string,
    weight: number,
    volume: number,
    currency?: ProductCurrencyInfo.AsObject,
    brand: string,
    description: string,
    limited: boolean,
  }
}

export class DeleteProductReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteProductReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProductReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProductReq): DeleteProductReq.AsObject;
  static serializeBinaryToWriter(message: DeleteProductReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProductReq;
  static deserializeBinaryFromReader(message: DeleteProductReq, reader: jspb.BinaryReader): DeleteProductReq;
}

export namespace DeleteProductReq {
  export type AsObject = {
    id: string,
  }
}

export class PublicListProductReq extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): PublicListProductReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): PublicListProductReq;
  hasPagination(): boolean;
  clearPagination(): PublicListProductReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): PublicListProductReq;
  clearOrderByList(): PublicListProductReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

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
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
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

export class InternalListProductByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListProductByIdsReq;
  clearIdsList(): InternalListProductByIdsReq;
  addIds(value: string, index?: number): InternalListProductByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListProductByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListProductByIdsReq): InternalListProductByIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListProductByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListProductByIdsReq;
  static deserializeBinaryFromReader(message: InternalListProductByIdsReq, reader: jspb.BinaryReader): InternalListProductByIdsReq;
}

export namespace InternalListProductByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
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
  }
}

export class PublicRetrieveProductRes extends jspb.Message {
  getInfo(): ProductInfo | undefined;
  setInfo(value?: ProductInfo): PublicRetrieveProductRes;
  hasInfo(): boolean;
  clearInfo(): PublicRetrieveProductRes;

  getBought(): boolean;
  setBought(value: boolean): PublicRetrieveProductRes;

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
  }
}

export class InternalListProductByIdsRes extends jspb.Message {
  getInfosList(): Array<ProductInfo>;
  setInfosList(value: Array<ProductInfo>): InternalListProductByIdsRes;
  clearInfosList(): InternalListProductByIdsRes;
  addInfos(value?: ProductInfo, index?: number): ProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListProductByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListProductByIdsRes): InternalListProductByIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListProductByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListProductByIdsRes;
  static deserializeBinaryFromReader(message: InternalListProductByIdsRes, reader: jspb.BinaryReader): InternalListProductByIdsRes;
}

export namespace InternalListProductByIdsRes {
  export type AsObject = {
    infosList: Array<ProductInfo.AsObject>,
  }
}

export class PublicListProductRes extends jspb.Message {
  getInfoList(): Array<ProductInfo>;
  setInfoList(value: Array<ProductInfo>): PublicListProductRes;
  clearInfoList(): PublicListProductRes;
  addInfo(value?: ProductInfo, index?: number): ProductInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): PublicListProductRes;
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
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

