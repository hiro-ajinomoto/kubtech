import * as jspb from 'google-protobuf'

import * as product_mobile_base_pb from '../../product/mobile/base_pb';


export class VODSimple extends jspb.Message {
  getId(): string;
  setId(value: string): VODSimple;

  getPartnershipId(): string;
  setPartnershipId(value: string): VODSimple;

  getName(): string;
  setName(value: string): VODSimple;

  getMediasList(): Array<string>;
  setMediasList(value: Array<string>): VODSimple;
  clearMediasList(): VODSimple;
  addMedias(value: string, index?: number): VODSimple;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): VODSimple;
  clearTagsList(): VODSimple;
  addTags(value: string, index?: number): VODSimple;

  getAvailableStartTime(): number;
  setAvailableStartTime(value: number): VODSimple;

  getAvailableEndTime(): number;
  setAvailableEndTime(value: number): VODSimple;

  getListedPrice(): number;
  setListedPrice(value: number): VODSimple;

  getDiscountPercent(): number;
  setDiscountPercent(value: number): VODSimple;

  getPrice(): number;
  setPrice(value: number): VODSimple;

  getBrand(): string;
  setBrand(value: string): VODSimple;

  getInBooking(): boolean;
  setInBooking(value: boolean): VODSimple;

  getPartnerShopId(): string;
  setPartnerShopId(value: string): VODSimple;

  getQuality(): string;
  setQuality(value: string): VODSimple;

  getDuration(): number;
  setDuration(value: number): VODSimple;

  getBookingStatus(): product_mobile_base_pb.BookingStatus;
  setBookingStatus(value: product_mobile_base_pb.BookingStatus): VODSimple;

  getCurrency(): string;
  setCurrency(value: string): VODSimple;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VODSimple.AsObject;
  static toObject(includeInstance: boolean, msg: VODSimple): VODSimple.AsObject;
  static serializeBinaryToWriter(message: VODSimple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VODSimple;
  static deserializeBinaryFromReader(message: VODSimple, reader: jspb.BinaryReader): VODSimple;
}

export namespace VODSimple {
  export type AsObject = {
    id: string,
    partnershipId: string,
    name: string,
    mediasList: Array<string>,
    tagsList: Array<string>,
    availableStartTime: number,
    availableEndTime: number,
    listedPrice: number,
    discountPercent: number,
    price: number,
    brand: string,
    inBooking: boolean,
    partnerShopId: string,
    quality: string,
    duration: number,
    bookingStatus: product_mobile_base_pb.BookingStatus,
    currency: string,
  }
}

export class GetVODsReq extends jspb.Message {
  getFilterStatus(): FilterStatus;
  setFilterStatus(value: FilterStatus): GetVODsReq;

  getPagination(): product_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: product_mobile_base_pb.PaginationReq): GetVODsReq;
  hasPagination(): boolean;
  clearPagination(): GetVODsReq;

  getPartnershipId(): string;
  setPartnershipId(value: string): GetVODsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVODsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetVODsReq): GetVODsReq.AsObject;
  static serializeBinaryToWriter(message: GetVODsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVODsReq;
  static deserializeBinaryFromReader(message: GetVODsReq, reader: jspb.BinaryReader): GetVODsReq;
}

export namespace GetVODsReq {
  export type AsObject = {
    filterStatus: FilterStatus,
    pagination?: product_mobile_base_pb.PaginationReq.AsObject,
    partnershipId: string,
  }
}

export class GetVODsRes extends jspb.Message {
  getVodsList(): Array<VODSimple>;
  setVodsList(value: Array<VODSimple>): GetVODsRes;
  clearVodsList(): GetVODsRes;
  addVods(value?: VODSimple, index?: number): VODSimple;

  getPagination(): product_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: product_mobile_base_pb.PaginationRes): GetVODsRes;
  hasPagination(): boolean;
  clearPagination(): GetVODsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVODsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetVODsRes): GetVODsRes.AsObject;
  static serializeBinaryToWriter(message: GetVODsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVODsRes;
  static deserializeBinaryFromReader(message: GetVODsRes, reader: jspb.BinaryReader): GetVODsRes;
}

export namespace GetVODsRes {
  export type AsObject = {
    vodsList: Array<VODSimple.AsObject>,
    pagination?: product_mobile_base_pb.PaginationRes.AsObject,
  }
}

export enum FilterStatus { 
  FILTER_STATUS_INVALID = 0,
  FILTER_STATUS_HOT = 1,
  FILTER_STATUS_NEW = 2,
}
