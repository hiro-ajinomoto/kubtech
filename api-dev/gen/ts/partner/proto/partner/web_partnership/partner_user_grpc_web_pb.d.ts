import * as grpcWeb from 'grpc-web';

import * as proto_partner_web_partnership_partner_user_pb from '../../../proto/partner/web_partnership/partner_user_pb';
import * as proto_partner_web_partnership_base_pb from '../../../proto/partner/web_partnership/base_pb';


export class PartnerUserServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_partner_web_partnership_partner_user_pb.GetMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_partner_user_pb.GetMeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_partner_user_pb.GetMeRes>;

  changePassword(
    request: proto_partner_web_partnership_partner_user_pb.ChangePasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_base_pb.Empty>;

  createPartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.CreatePartnerUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_partner_user_pb.CreatePartnerUserRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_partner_user_pb.CreatePartnerUserRes>;

  retrievePartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.RetrievePartnerUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_partner_user_pb.RetrievePartnerUserRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_partner_user_pb.RetrievePartnerUserRes>;

  listPartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.ListPartnerUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_partner_user_pb.ListPartnerUserRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_partner_user_pb.ListPartnerUserRes>;

  disablePartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.DisablePartnerUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_base_pb.Empty>;

  deletePartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.DeletePartnerUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_base_pb.Empty>;

}

export class PartnerUserServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_partner_web_partnership_partner_user_pb.GetMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_partner_user_pb.GetMeRes>;

  changePassword(
    request: proto_partner_web_partnership_partner_user_pb.ChangePasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_base_pb.Empty>;

  createPartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.CreatePartnerUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_partner_user_pb.CreatePartnerUserRes>;

  retrievePartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.RetrievePartnerUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_partner_user_pb.RetrievePartnerUserRes>;

  listPartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.ListPartnerUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_partner_user_pb.ListPartnerUserRes>;

  disablePartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.DisablePartnerUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_base_pb.Empty>;

  deletePartnerUser(
    request: proto_partner_web_partnership_partner_user_pb.DeletePartnerUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_base_pb.Empty>;

}

