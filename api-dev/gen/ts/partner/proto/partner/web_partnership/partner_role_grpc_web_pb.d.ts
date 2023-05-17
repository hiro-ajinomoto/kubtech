import * as grpcWeb from 'grpc-web';

import * as proto_partner_web_partnership_partner_role_pb from '../../../proto/partner/web_partnership/partner_role_pb';
import * as proto_partner_web_partnership_base_pb from '../../../proto/partner/web_partnership/base_pb';


export class PartnerRoleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listAllRole(
    request: proto_partner_web_partnership_partner_role_pb.ListAllRoleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_partner_role_pb.ListAllRoleRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_partner_role_pb.ListAllRoleRes>;

  listAllPermission(
    request: proto_partner_web_partnership_partner_role_pb.ListPermissionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_partner_role_pb.ListPermissionRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_partner_role_pb.ListPermissionRes>;

  createRole(
    request: proto_partner_web_partnership_partner_role_pb.CreateRoleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_partner_role_pb.CreateRoleRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_partner_role_pb.CreateRoleRes>;

  updateRole(
    request: proto_partner_web_partnership_partner_role_pb.UpdateRoleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_base_pb.Empty>;

  deleteRole(
    request: proto_partner_web_partnership_partner_role_pb.DeleteRoleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_base_pb.Empty>;

  assignRole(
    request: proto_partner_web_partnership_partner_role_pb.AssignRoleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_base_pb.Empty>;

  unassignRole(
    request: proto_partner_web_partnership_partner_role_pb.UnassignRoleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_base_pb.Empty>;

}

export class PartnerRoleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listAllRole(
    request: proto_partner_web_partnership_partner_role_pb.ListAllRoleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_partner_role_pb.ListAllRoleRes>;

  listAllPermission(
    request: proto_partner_web_partnership_partner_role_pb.ListPermissionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_partner_role_pb.ListPermissionRes>;

  createRole(
    request: proto_partner_web_partnership_partner_role_pb.CreateRoleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_partner_role_pb.CreateRoleRes>;

  updateRole(
    request: proto_partner_web_partnership_partner_role_pb.UpdateRoleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_base_pb.Empty>;

  deleteRole(
    request: proto_partner_web_partnership_partner_role_pb.DeleteRoleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_base_pb.Empty>;

  assignRole(
    request: proto_partner_web_partnership_partner_role_pb.AssignRoleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_base_pb.Empty>;

  unassignRole(
    request: proto_partner_web_partnership_partner_role_pb.UnassignRoleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_base_pb.Empty>;

}

