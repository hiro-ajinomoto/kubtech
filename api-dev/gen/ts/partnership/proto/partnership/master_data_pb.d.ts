import * as jspb from 'google-protobuf'

import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class MasterDataBasicInfo extends jspb.Message {
  getName(): string;
  setName(value: string): MasterDataBasicInfo;

  getValue(): string;
  setValue(value: string): MasterDataBasicInfo;

  getParentId(): string;
  setParentId(value: string): MasterDataBasicInfo;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): MasterDataBasicInfo;

  getType(): string;
  setType(value: string): MasterDataBasicInfo;

  getValueType(): ValueType;
  setValueType(value: ValueType): MasterDataBasicInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterDataBasicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MasterDataBasicInfo): MasterDataBasicInfo.AsObject;
  static serializeBinaryToWriter(message: MasterDataBasicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterDataBasicInfo;
  static deserializeBinaryFromReader(message: MasterDataBasicInfo, reader: jspb.BinaryReader): MasterDataBasicInfo;
}

export namespace MasterDataBasicInfo {
  export type AsObject = {
    name: string,
    value: string,
    parentId: string,
    additionalDataMap: Array<[string, string]>,
    type: string,
    valueType: ValueType,
  }
}

export class MasterDataInfo extends jspb.Message {
  getId(): string;
  setId(value: string): MasterDataInfo;

  getInfo(): MasterDataBasicInfo | undefined;
  setInfo(value?: MasterDataBasicInfo): MasterDataInfo;
  hasInfo(): boolean;
  clearInfo(): MasterDataInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): MasterDataInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): MasterDataInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): MasterDataInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): MasterDataInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterDataInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MasterDataInfo): MasterDataInfo.AsObject;
  static serializeBinaryToWriter(message: MasterDataInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterDataInfo;
  static deserializeBinaryFromReader(message: MasterDataInfo, reader: jspb.BinaryReader): MasterDataInfo;
}

export namespace MasterDataInfo {
  export type AsObject = {
    id: string,
    info?: MasterDataBasicInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class MasterDataBasicFullInfo extends jspb.Message {
  getNameList(): Array<proto_partnership_base_pb.I18N>;
  setNameList(value: Array<proto_partnership_base_pb.I18N>): MasterDataBasicFullInfo;
  clearNameList(): MasterDataBasicFullInfo;
  addName(value?: proto_partnership_base_pb.I18N, index?: number): proto_partnership_base_pb.I18N;

  getValueList(): Array<proto_partnership_base_pb.I18N>;
  setValueList(value: Array<proto_partnership_base_pb.I18N>): MasterDataBasicFullInfo;
  clearValueList(): MasterDataBasicFullInfo;
  addValue(value?: proto_partnership_base_pb.I18N, index?: number): proto_partnership_base_pb.I18N;

  getParentId(): string;
  setParentId(value: string): MasterDataBasicFullInfo;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): MasterDataBasicFullInfo;

  getType(): string;
  setType(value: string): MasterDataBasicFullInfo;

  getValueType(): ValueType;
  setValueType(value: ValueType): MasterDataBasicFullInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterDataBasicFullInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MasterDataBasicFullInfo): MasterDataBasicFullInfo.AsObject;
  static serializeBinaryToWriter(message: MasterDataBasicFullInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterDataBasicFullInfo;
  static deserializeBinaryFromReader(message: MasterDataBasicFullInfo, reader: jspb.BinaryReader): MasterDataBasicFullInfo;
}

export namespace MasterDataBasicFullInfo {
  export type AsObject = {
    nameList: Array<proto_partnership_base_pb.I18N.AsObject>,
    valueList: Array<proto_partnership_base_pb.I18N.AsObject>,
    parentId: string,
    additionalDataMap: Array<[string, string]>,
    type: string,
    valueType: ValueType,
  }
}

export class MasterDataFullInfo extends jspb.Message {
  getId(): string;
  setId(value: string): MasterDataFullInfo;

  getInfo(): MasterDataBasicFullInfo | undefined;
  setInfo(value?: MasterDataBasicFullInfo): MasterDataFullInfo;
  hasInfo(): boolean;
  clearInfo(): MasterDataFullInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): MasterDataFullInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): MasterDataFullInfo;

  getCreatedBy(): string;
  setCreatedBy(value: string): MasterDataFullInfo;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): MasterDataFullInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MasterDataFullInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MasterDataFullInfo): MasterDataFullInfo.AsObject;
  static serializeBinaryToWriter(message: MasterDataFullInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MasterDataFullInfo;
  static deserializeBinaryFromReader(message: MasterDataFullInfo, reader: jspb.BinaryReader): MasterDataFullInfo;
}

export namespace MasterDataFullInfo {
  export type AsObject = {
    id: string,
    info?: MasterDataBasicFullInfo.AsObject,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class CreateMasterDataReq extends jspb.Message {
  getNameList(): Array<proto_partnership_base_pb.I18N>;
  setNameList(value: Array<proto_partnership_base_pb.I18N>): CreateMasterDataReq;
  clearNameList(): CreateMasterDataReq;
  addName(value?: proto_partnership_base_pb.I18N, index?: number): proto_partnership_base_pb.I18N;

  getValueList(): Array<proto_partnership_base_pb.I18N>;
  setValueList(value: Array<proto_partnership_base_pb.I18N>): CreateMasterDataReq;
  clearValueList(): CreateMasterDataReq;
  addValue(value?: proto_partnership_base_pb.I18N, index?: number): proto_partnership_base_pb.I18N;

  getParentId(): string;
  setParentId(value: string): CreateMasterDataReq;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): CreateMasterDataReq;

  getType(): string;
  setType(value: string): CreateMasterDataReq;

  getValueType(): ValueType;
  setValueType(value: ValueType): CreateMasterDataReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMasterDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMasterDataReq): CreateMasterDataReq.AsObject;
  static serializeBinaryToWriter(message: CreateMasterDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMasterDataReq;
  static deserializeBinaryFromReader(message: CreateMasterDataReq, reader: jspb.BinaryReader): CreateMasterDataReq;
}

export namespace CreateMasterDataReq {
  export type AsObject = {
    nameList: Array<proto_partnership_base_pb.I18N.AsObject>,
    valueList: Array<proto_partnership_base_pb.I18N.AsObject>,
    parentId: string,
    additionalDataMap: Array<[string, string]>,
    type: string,
    valueType: ValueType,
  }
}

export class UpdateMasterDataReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMasterDataReq;

  getNameList(): Array<proto_partnership_base_pb.I18N>;
  setNameList(value: Array<proto_partnership_base_pb.I18N>): UpdateMasterDataReq;
  clearNameList(): UpdateMasterDataReq;
  addName(value?: proto_partnership_base_pb.I18N, index?: number): proto_partnership_base_pb.I18N;

  getValueList(): Array<proto_partnership_base_pb.I18N>;
  setValueList(value: Array<proto_partnership_base_pb.I18N>): UpdateMasterDataReq;
  clearValueList(): UpdateMasterDataReq;
  addValue(value?: proto_partnership_base_pb.I18N, index?: number): proto_partnership_base_pb.I18N;

  getParentId(): string;
  setParentId(value: string): UpdateMasterDataReq;

  getAdditionalDataMap(): jspb.Map<string, string>;
  clearAdditionalDataMap(): UpdateMasterDataReq;

  getType(): string;
  setType(value: string): UpdateMasterDataReq;

  getValueType(): ValueType;
  setValueType(value: ValueType): UpdateMasterDataReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMasterDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMasterDataReq): UpdateMasterDataReq.AsObject;
  static serializeBinaryToWriter(message: UpdateMasterDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMasterDataReq;
  static deserializeBinaryFromReader(message: UpdateMasterDataReq, reader: jspb.BinaryReader): UpdateMasterDataReq;
}

export namespace UpdateMasterDataReq {
  export type AsObject = {
    id: string,
    nameList: Array<proto_partnership_base_pb.I18N.AsObject>,
    valueList: Array<proto_partnership_base_pb.I18N.AsObject>,
    parentId: string,
    additionalDataMap: Array<[string, string]>,
    type: string,
    valueType: ValueType,
  }
}

export class DeleteMasterDataReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteMasterDataReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMasterDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMasterDataReq): DeleteMasterDataReq.AsObject;
  static serializeBinaryToWriter(message: DeleteMasterDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMasterDataReq;
  static deserializeBinaryFromReader(message: DeleteMasterDataReq, reader: jspb.BinaryReader): DeleteMasterDataReq;
}

export namespace DeleteMasterDataReq {
  export type AsObject = {
    id: string,
  }
}

export class ListMasterDataReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListMasterDataReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): ListMasterDataReq;
  hasPagination(): boolean;
  clearPagination(): ListMasterDataReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): ListMasterDataReq;
  clearOrderByList(): ListMasterDataReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  getType(): string;
  setType(value: string): ListMasterDataReq;

  getParentId(): string;
  setParentId(value: string): ListMasterDataReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMasterDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMasterDataReq): ListMasterDataReq.AsObject;
  static serializeBinaryToWriter(message: ListMasterDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMasterDataReq;
  static deserializeBinaryFromReader(message: ListMasterDataReq, reader: jspb.BinaryReader): ListMasterDataReq;
}

export namespace ListMasterDataReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
    type: string,
    parentId: string,
  }
}

export class RetrieveMasterDataReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveMasterDataReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMasterDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMasterDataReq): RetrieveMasterDataReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveMasterDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMasterDataReq;
  static deserializeBinaryFromReader(message: RetrieveMasterDataReq, reader: jspb.BinaryReader): RetrieveMasterDataReq;
}

export namespace RetrieveMasterDataReq {
  export type AsObject = {
    id: string,
  }
}

export class ListMasterDataPartnershipReq extends jspb.Message {
  getSearchText(): string;
  setSearchText(value: string): ListMasterDataPartnershipReq;

  getPagination(): proto_partnership_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationReq): ListMasterDataPartnershipReq;
  hasPagination(): boolean;
  clearPagination(): ListMasterDataPartnershipReq;

  getOrderByList(): Array<proto_partnership_base_pb.OrderByItem>;
  setOrderByList(value: Array<proto_partnership_base_pb.OrderByItem>): ListMasterDataPartnershipReq;
  clearOrderByList(): ListMasterDataPartnershipReq;
  addOrderBy(value?: proto_partnership_base_pb.OrderByItem, index?: number): proto_partnership_base_pb.OrderByItem;

  getType(): string;
  setType(value: string): ListMasterDataPartnershipReq;

  getParentId(): string;
  setParentId(value: string): ListMasterDataPartnershipReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMasterDataPartnershipReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListMasterDataPartnershipReq): ListMasterDataPartnershipReq.AsObject;
  static serializeBinaryToWriter(message: ListMasterDataPartnershipReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMasterDataPartnershipReq;
  static deserializeBinaryFromReader(message: ListMasterDataPartnershipReq, reader: jspb.BinaryReader): ListMasterDataPartnershipReq;
}

export namespace ListMasterDataPartnershipReq {
  export type AsObject = {
    searchText: string,
    pagination?: proto_partnership_base_pb.PaginationReq.AsObject,
    orderByList: Array<proto_partnership_base_pb.OrderByItem.AsObject>,
    type: string,
    parentId: string,
  }
}

export class RetrieveMasterDataPartnershipReq extends jspb.Message {
  getId(): string;
  setId(value: string): RetrieveMasterDataPartnershipReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMasterDataPartnershipReq.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMasterDataPartnershipReq): RetrieveMasterDataPartnershipReq.AsObject;
  static serializeBinaryToWriter(message: RetrieveMasterDataPartnershipReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMasterDataPartnershipReq;
  static deserializeBinaryFromReader(message: RetrieveMasterDataPartnershipReq, reader: jspb.BinaryReader): RetrieveMasterDataPartnershipReq;
}

export namespace RetrieveMasterDataPartnershipReq {
  export type AsObject = {
    id: string,
  }
}

export class InternalListMasterDataByIdsReq extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): InternalListMasterDataByIdsReq;
  clearIdsList(): InternalListMasterDataByIdsReq;
  addIds(value: string, index?: number): InternalListMasterDataByIdsReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListMasterDataByIdsReq.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListMasterDataByIdsReq): InternalListMasterDataByIdsReq.AsObject;
  static serializeBinaryToWriter(message: InternalListMasterDataByIdsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListMasterDataByIdsReq;
  static deserializeBinaryFromReader(message: InternalListMasterDataByIdsReq, reader: jspb.BinaryReader): InternalListMasterDataByIdsReq;
}

export namespace InternalListMasterDataByIdsReq {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class CreateMasterDataRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateMasterDataRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMasterDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMasterDataRes): CreateMasterDataRes.AsObject;
  static serializeBinaryToWriter(message: CreateMasterDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMasterDataRes;
  static deserializeBinaryFromReader(message: CreateMasterDataRes, reader: jspb.BinaryReader): CreateMasterDataRes;
}

export namespace CreateMasterDataRes {
  export type AsObject = {
    id: string,
  }
}

export class RetrieveMasterDataRes extends jspb.Message {
  getInfo(): MasterDataInfo | undefined;
  setInfo(value?: MasterDataInfo): RetrieveMasterDataRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveMasterDataRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMasterDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMasterDataRes): RetrieveMasterDataRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveMasterDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMasterDataRes;
  static deserializeBinaryFromReader(message: RetrieveMasterDataRes, reader: jspb.BinaryReader): RetrieveMasterDataRes;
}

export namespace RetrieveMasterDataRes {
  export type AsObject = {
    info?: MasterDataInfo.AsObject,
  }
}

export class ListMasterDataRes extends jspb.Message {
  getInfosList(): Array<MasterDataInfo>;
  setInfosList(value: Array<MasterDataInfo>): ListMasterDataRes;
  clearInfosList(): ListMasterDataRes;
  addInfos(value?: MasterDataInfo, index?: number): MasterDataInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): ListMasterDataRes;
  hasPagination(): boolean;
  clearPagination(): ListMasterDataRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMasterDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMasterDataRes): ListMasterDataRes.AsObject;
  static serializeBinaryToWriter(message: ListMasterDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMasterDataRes;
  static deserializeBinaryFromReader(message: ListMasterDataRes, reader: jspb.BinaryReader): ListMasterDataRes;
}

export namespace ListMasterDataRes {
  export type AsObject = {
    infosList: Array<MasterDataInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

export class RetrieveMasterDataPartnershipRes extends jspb.Message {
  getInfo(): MasterDataFullInfo | undefined;
  setInfo(value?: MasterDataFullInfo): RetrieveMasterDataPartnershipRes;
  hasInfo(): boolean;
  clearInfo(): RetrieveMasterDataPartnershipRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMasterDataPartnershipRes.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMasterDataPartnershipRes): RetrieveMasterDataPartnershipRes.AsObject;
  static serializeBinaryToWriter(message: RetrieveMasterDataPartnershipRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMasterDataPartnershipRes;
  static deserializeBinaryFromReader(message: RetrieveMasterDataPartnershipRes, reader: jspb.BinaryReader): RetrieveMasterDataPartnershipRes;
}

export namespace RetrieveMasterDataPartnershipRes {
  export type AsObject = {
    info?: MasterDataFullInfo.AsObject,
  }
}

export class ListMasterDataPartnershipRes extends jspb.Message {
  getInfosList(): Array<MasterDataFullInfo>;
  setInfosList(value: Array<MasterDataFullInfo>): ListMasterDataPartnershipRes;
  clearInfosList(): ListMasterDataPartnershipRes;
  addInfos(value?: MasterDataFullInfo, index?: number): MasterDataFullInfo;

  getPagination(): proto_partnership_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_partnership_base_pb.PaginationRes): ListMasterDataPartnershipRes;
  hasPagination(): boolean;
  clearPagination(): ListMasterDataPartnershipRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMasterDataPartnershipRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListMasterDataPartnershipRes): ListMasterDataPartnershipRes.AsObject;
  static serializeBinaryToWriter(message: ListMasterDataPartnershipRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMasterDataPartnershipRes;
  static deserializeBinaryFromReader(message: ListMasterDataPartnershipRes, reader: jspb.BinaryReader): ListMasterDataPartnershipRes;
}

export namespace ListMasterDataPartnershipRes {
  export type AsObject = {
    infosList: Array<MasterDataFullInfo.AsObject>,
    pagination?: proto_partnership_base_pb.PaginationRes.AsObject,
  }
}

export class InternalListMasterDataByIdsRes extends jspb.Message {
  getInfosList(): Array<MasterDataFullInfo>;
  setInfosList(value: Array<MasterDataFullInfo>): InternalListMasterDataByIdsRes;
  clearInfosList(): InternalListMasterDataByIdsRes;
  addInfos(value?: MasterDataFullInfo, index?: number): MasterDataFullInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalListMasterDataByIdsRes.AsObject;
  static toObject(includeInstance: boolean, msg: InternalListMasterDataByIdsRes): InternalListMasterDataByIdsRes.AsObject;
  static serializeBinaryToWriter(message: InternalListMasterDataByIdsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalListMasterDataByIdsRes;
  static deserializeBinaryFromReader(message: InternalListMasterDataByIdsRes, reader: jspb.BinaryReader): InternalListMasterDataByIdsRes;
}

export namespace InternalListMasterDataByIdsRes {
  export type AsObject = {
    infosList: Array<MasterDataFullInfo.AsObject>,
  }
}

export enum ValueType { 
  VALUE_TYPE_INVALID = 0,
  VALUE_TYPE_STRING = 1,
  VALUE_TYPE_INTEGER = 2,
  VALUE_TYPE_FLOAT = 3,
  VALUE_TYPE_BOOLEAN = 4,
}
