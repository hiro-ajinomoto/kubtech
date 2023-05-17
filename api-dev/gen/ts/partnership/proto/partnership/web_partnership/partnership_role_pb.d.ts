import * as jspb from 'google-protobuf'

import * as proto_partnership_web_partnership_base_pb from '../../../proto/partnership/web_partnership/base_pb';


export class Permission extends jspb.Message {
  getKey(): string;
  setKey(value: string): Permission;

  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): Permission;
  clearPathsList(): Permission;
  addPaths(value: string, index?: number): Permission;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Permission;
  clearTagsList(): Permission;
  addTags(value: string, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    key: string,
    pathsList: Array<string>,
    tagsList: Array<string>,
  }
}

export class Role extends jspb.Message {
  getId(): string;
  setId(value: string): Role;

  getName(): string;
  setName(value: string): Role;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): Role;
  clearPermissionsList(): Role;
  addPermissions(value: string, index?: number): Role;

  getCode(): string;
  setCode(value: string): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    id: string,
    name: string,
    permissionsList: Array<string>,
    code: string,
  }
}

export class ListAllRoleReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllRoleReq): ListAllRoleReq.AsObject;
  static serializeBinaryToWriter(message: ListAllRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllRoleReq;
  static deserializeBinaryFromReader(message: ListAllRoleReq, reader: jspb.BinaryReader): ListAllRoleReq;
}

export namespace ListAllRoleReq {
  export type AsObject = {
  }
}

export class ListPermissionReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionReq): ListPermissionReq.AsObject;
  static serializeBinaryToWriter(message: ListPermissionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionReq;
  static deserializeBinaryFromReader(message: ListPermissionReq, reader: jspb.BinaryReader): ListPermissionReq;
}

export namespace ListPermissionReq {
  export type AsObject = {
  }
}

export class CreateRoleReq extends jspb.Message {
  getName(): string;
  setName(value: string): CreateRoleReq;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): CreateRoleReq;
  clearPermissionsList(): CreateRoleReq;
  addPermissions(value: string, index?: number): CreateRoleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleReq): CreateRoleReq.AsObject;
  static serializeBinaryToWriter(message: CreateRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleReq;
  static deserializeBinaryFromReader(message: CreateRoleReq, reader: jspb.BinaryReader): CreateRoleReq;
}

export namespace CreateRoleReq {
  export type AsObject = {
    name: string,
    permissionsList: Array<string>,
  }
}

export class AssignRoleReq extends jspb.Message {
  getPartnershipUserId(): string;
  setPartnershipUserId(value: string): AssignRoleReq;

  getRoleCode(): string;
  setRoleCode(value: string): AssignRoleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssignRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: AssignRoleReq): AssignRoleReq.AsObject;
  static serializeBinaryToWriter(message: AssignRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssignRoleReq;
  static deserializeBinaryFromReader(message: AssignRoleReq, reader: jspb.BinaryReader): AssignRoleReq;
}

export namespace AssignRoleReq {
  export type AsObject = {
    partnershipUserId: string,
    roleCode: string,
  }
}

export class UnassignRoleReq extends jspb.Message {
  getPartnershipUserId(): string;
  setPartnershipUserId(value: string): UnassignRoleReq;

  getRoleCode(): string;
  setRoleCode(value: string): UnassignRoleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnassignRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnassignRoleReq): UnassignRoleReq.AsObject;
  static serializeBinaryToWriter(message: UnassignRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnassignRoleReq;
  static deserializeBinaryFromReader(message: UnassignRoleReq, reader: jspb.BinaryReader): UnassignRoleReq;
}

export namespace UnassignRoleReq {
  export type AsObject = {
    partnershipUserId: string,
    roleCode: string,
  }
}

export class UpdateRoleReq extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoleReq;

  getName(): string;
  setName(value: string): UpdateRoleReq;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): UpdateRoleReq;
  clearPermissionsList(): UpdateRoleReq;
  addPermissions(value: string, index?: number): UpdateRoleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoleReq): UpdateRoleReq.AsObject;
  static serializeBinaryToWriter(message: UpdateRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoleReq;
  static deserializeBinaryFromReader(message: UpdateRoleReq, reader: jspb.BinaryReader): UpdateRoleReq;
}

export namespace UpdateRoleReq {
  export type AsObject = {
    id: string,
    name: string,
    permissionsList: Array<string>,
  }
}

export class DeleteRoleReq extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRoleReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleReq): DeleteRoleReq.AsObject;
  static serializeBinaryToWriter(message: DeleteRoleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleReq;
  static deserializeBinaryFromReader(message: DeleteRoleReq, reader: jspb.BinaryReader): DeleteRoleReq;
}

export namespace DeleteRoleReq {
  export type AsObject = {
    id: string,
  }
}

export class ListAllRoleRes extends jspb.Message {
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): ListAllRoleRes;
  clearRolesList(): ListAllRoleRes;
  addRoles(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllRoleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllRoleRes): ListAllRoleRes.AsObject;
  static serializeBinaryToWriter(message: ListAllRoleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllRoleRes;
  static deserializeBinaryFromReader(message: ListAllRoleRes, reader: jspb.BinaryReader): ListAllRoleRes;
}

export namespace ListAllRoleRes {
  export type AsObject = {
    rolesList: Array<Role.AsObject>,
  }
}

export class ListPermissionRes extends jspb.Message {
  getPermissionList(): Array<Permission>;
  setPermissionList(value: Array<Permission>): ListPermissionRes;
  clearPermissionList(): ListPermissionRes;
  addPermission(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPermissionRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPermissionRes): ListPermissionRes.AsObject;
  static serializeBinaryToWriter(message: ListPermissionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPermissionRes;
  static deserializeBinaryFromReader(message: ListPermissionRes, reader: jspb.BinaryReader): ListPermissionRes;
}

export namespace ListPermissionRes {
  export type AsObject = {
    permissionList: Array<Permission.AsObject>,
  }
}

export class CreateRoleRes extends jspb.Message {
  getId(): string;
  setId(value: string): CreateRoleRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleRes): CreateRoleRes.AsObject;
  static serializeBinaryToWriter(message: CreateRoleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleRes;
  static deserializeBinaryFromReader(message: CreateRoleRes, reader: jspb.BinaryReader): CreateRoleRes;
}

export namespace CreateRoleRes {
  export type AsObject = {
    id: string,
  }
}

