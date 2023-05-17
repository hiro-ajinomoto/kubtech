import * as jspb from 'google-protobuf'

import * as event_web_admin_base_pb from '../../event/web_admin/base_pb';


export class SponsorLevelBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): SponsorLevelBasicInfo;

  getIcon(): string;
  setIcon(value: string): SponsorLevelBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorLevelBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorLevelBasicInfo): SponsorLevelBasicInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorLevelBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorLevelBasicInfo;
  static deserializeBinaryFromReader(message: SponsorLevelBasicInfo, reader: jspb.BinaryReader): SponsorLevelBasicInfo;
}

export namespace SponsorLevelBasicInfo {
  export type AsObject = {
    name: string,
    icon: string,
  }
}

export class SponsorLevelListInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SponsorLevelListInfo;

  getInfo(): SponsorLevelBasicInfo | undefined;
  setInfo(value?: SponsorLevelBasicInfo): SponsorLevelListInfo;
  hasInfo(): boolean;
  clearInfo(): SponsorLevelListInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): SponsorLevelListInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SponsorLevelListInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): SponsorLevelListInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): SponsorLevelListInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorLevelListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorLevelListInfo): SponsorLevelListInfo.AsObject;
  static serializeBinaryToWriter(message: SponsorLevelListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorLevelListInfo;
  static deserializeBinaryFromReader(message: SponsorLevelListInfo, reader: jspb.BinaryReader): SponsorLevelListInfo;
}

export namespace SponsorLevelListInfo {
  export type AsObject = {
    id: string,
    info?: SponsorLevelBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class CreateSponsorLevelReq extends jspb.Message {
  getInfo(): SponsorLevelBasicInfo | undefined;
  setInfo(value?: SponsorLevelBasicInfo): CreateSponsorLevelReq;
  hasInfo(): boolean;
  clearInfo(): CreateSponsorLevelReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSponsorLevelReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSponsorLevelReq): CreateSponsorLevelReq.AsObject;
  static serializeBinaryToWriter(message: CreateSponsorLevelReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSponsorLevelReq;
  static deserializeBinaryFromReader(message: CreateSponsorLevelReq, reader: jspb.BinaryReader): CreateSponsorLevelReq;
}

export namespace CreateSponsorLevelReq {
  export type AsObject = {
    info?: SponsorLevelBasicInfo.AsObject,
  }
}

export class UpdateSponsorLevelReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSponsorLevelReq;

  getInfo(): SponsorLevelBasicInfo | undefined;
  setInfo(value?: SponsorLevelBasicInfo): UpdateSponsorLevelReq;
  hasInfo(): boolean;
  clearInfo(): UpdateSponsorLevelReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSponsorLevelReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSponsorLevelReq): UpdateSponsorLevelReq.AsObject;
  static serializeBinaryToWriter(message: UpdateSponsorLevelReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSponsorLevelReq;
  static deserializeBinaryFromReader(message: UpdateSponsorLevelReq, reader: jspb.BinaryReader): UpdateSponsorLevelReq;
}

export namespace UpdateSponsorLevelReq {
  export type AsObject = {
    id: string,
    info?: SponsorLevelBasicInfo.AsObject,
  }
}

export class DeleteSponsorLevelReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSponsorLevelReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSponsorLevelReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSponsorLevelReq): DeleteSponsorLevelReq.AsObject;
  static serializeBinaryToWriter(message: DeleteSponsorLevelReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSponsorLevelReq;
  static deserializeBinaryFromReader(message: DeleteSponsorLevelReq, reader: jspb.BinaryReader): DeleteSponsorLevelReq;
}

export namespace DeleteSponsorLevelReq {
  export type AsObject = {
    id: string,
  }
}

export class ListSponsorLevelReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListSponsorLevelReq;

  getPagination(): event_web_admin_base_pb.PaginationReq | undefined;
  setPagination(value?: event_web_admin_base_pb.PaginationReq): ListSponsorLevelReq;
  hasPagination(): boolean;
  clearPagination(): ListSponsorLevelReq;

  getOrderByList(): Array<event_web_admin_base_pb.OrderByItem>;
  setOrderByList(value: Array<event_web_admin_base_pb.OrderByItem>): ListSponsorLevelReq;
  clearOrderByList(): ListSponsorLevelReq;
  addOrderBy(value?: event_web_admin_base_pb.OrderByItem, index?: number): event_web_admin_base_pb.OrderByItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSponsorLevelReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListSponsorLevelReq): ListSponsorLevelReq.AsObject;
  static serializeBinaryToWriter(message: ListSponsorLevelReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSponsorLevelReq;
  static deserializeBinaryFromReader(message: ListSponsorLevelReq, reader: jspb.BinaryReader): ListSponsorLevelReq;
}

export namespace ListSponsorLevelReq {
  export type AsObject = {
    searchText: string,
    pagination?: event_web_admin_base_pb.PaginationReq.AsObject,
    orderByList: Array<event_web_admin_base_pb.OrderByItem.AsObject>,
  }
}

export class GetSponsorLevelReq extends jspb.Message {
  getId(): string;
  setId(value: string): GetSponsorLevelReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSponsorLevelReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSponsorLevelReq): GetSponsorLevelReq.AsObject;
  static serializeBinaryToWriter(message: GetSponsorLevelReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSponsorLevelReq;
  static deserializeBinaryFromReader(message: GetSponsorLevelReq, reader: jspb.BinaryReader): GetSponsorLevelReq;
}

export namespace GetSponsorLevelReq {
  export type AsObject = {
    id: string,
  }
}

export class CreateSponsorLevelRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSponsorLevelRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSponsorLevelRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSponsorLevelRes): CreateSponsorLevelRes.AsObject;
  static serializeBinaryToWriter(message: CreateSponsorLevelRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSponsorLevelRes;
  static deserializeBinaryFromReader(message: CreateSponsorLevelRes, reader: jspb.BinaryReader): CreateSponsorLevelRes;
}

export namespace CreateSponsorLevelRes {
  export type AsObject = {
    id: string,
  }
}

export class GetSponsorLevelRes extends jspb.Message {
  getId(): string;
  setId(value: string): GetSponsorLevelRes;

  getInfo(): SponsorLevelBasicInfo | undefined;
  setInfo(value?: SponsorLevelBasicInfo): GetSponsorLevelRes;
  hasInfo(): boolean;
  clearInfo(): GetSponsorLevelRes;

  getCreatedAt(): number;
  setCreatedAt(value: number): GetSponsorLevelRes;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): GetSponsorLevelRes;

  getCreatedBy(): string;
  setCreatedBy(value: string): GetSponsorLevelRes;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): GetSponsorLevelRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSponsorLevelRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetSponsorLevelRes): GetSponsorLevelRes.AsObject;
  static serializeBinaryToWriter(message: GetSponsorLevelRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSponsorLevelRes;
  static deserializeBinaryFromReader(message: GetSponsorLevelRes, reader: jspb.BinaryReader): GetSponsorLevelRes;
}

export namespace GetSponsorLevelRes {
  export type AsObject = {
    id: string,
    info?: SponsorLevelBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class ListSponsorLevelRes extends jspb.Message {
  getInfoList(): Array<SponsorLevelListInfo>;
  setInfoList(value: Array<SponsorLevelListInfo>): ListSponsorLevelRes;
  clearInfoList(): ListSponsorLevelRes;
  addInfo(value?: SponsorLevelListInfo, index?: number): SponsorLevelListInfo;

  getPagination(): event_web_admin_base_pb.PaginationRes | undefined;
  setPagination(value?: event_web_admin_base_pb.PaginationRes): ListSponsorLevelRes;
  hasPagination(): boolean;
  clearPagination(): ListSponsorLevelRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSponsorLevelRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListSponsorLevelRes): ListSponsorLevelRes.AsObject;
  static serializeBinaryToWriter(message: ListSponsorLevelRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSponsorLevelRes;
  static deserializeBinaryFromReader(message: ListSponsorLevelRes, reader: jspb.BinaryReader): ListSponsorLevelRes;
}

export namespace ListSponsorLevelRes {
  export type AsObject = {
    infoList: Array<SponsorLevelListInfo.AsObject>,
    pagination?: event_web_admin_base_pb.PaginationRes.AsObject,
  }
}

