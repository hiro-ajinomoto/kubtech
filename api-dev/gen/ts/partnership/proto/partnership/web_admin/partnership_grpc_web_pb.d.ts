import * as grpcWeb from 'grpc-web';

import * as proto_partnership_web_admin_partnership_pb from '../../../proto/partnership/web_admin/partnership_pb';


export class PartnershipServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPartnership(
    request: proto_partnership_web_admin_partnership_pb.CreatePartnershipReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_admin_partnership_pb.CreatePartnershipRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_admin_partnership_pb.CreatePartnershipRes>;

  retrievePartnership(
    request: proto_partnership_web_admin_partnership_pb.RetrievePartnershipReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_admin_partnership_pb.RetrievePartnershipRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_admin_partnership_pb.RetrievePartnershipRes>;

  listPartnership(
    request: proto_partnership_web_admin_partnership_pb.ListPartnershipReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_admin_partnership_pb.ListPartnershipRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_admin_partnership_pb.ListPartnershipRes>;

}

export class PartnershipServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPartnership(
    request: proto_partnership_web_admin_partnership_pb.CreatePartnershipReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_admin_partnership_pb.CreatePartnershipRes>;

  retrievePartnership(
    request: proto_partnership_web_admin_partnership_pb.RetrievePartnershipReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_admin_partnership_pb.RetrievePartnershipRes>;

  listPartnership(
    request: proto_partnership_web_admin_partnership_pb.ListPartnershipReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_admin_partnership_pb.ListPartnershipRes>;

}

