import * as grpcWeb from 'grpc-web';

import * as proto_partner_mobile_partner_location_pb from '../../../proto/partner/mobile/partner_location_pb';
import * as proto_partner_mobile_base_pb from '../../../proto/partner/mobile/base_pb';


export class PartnerLocationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPartnerLocation(
    request: proto_partner_mobile_partner_location_pb.CreatePartnerLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_mobile_partner_location_pb.CreatePartnerLocationRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_mobile_partner_location_pb.CreatePartnerLocationRes>;

  updatePartnerLocation(
    request: proto_partner_mobile_partner_location_pb.UpdatePartnerLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_mobile_base_pb.Empty>;

  deletePartnerLocation(
    request: proto_partner_mobile_partner_location_pb.DeletePartnerLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_mobile_base_pb.Empty>;

  retrievePartnerLocation(
    request: proto_partner_mobile_partner_location_pb.RetrievePartnerLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_mobile_partner_location_pb.RetrievePartnerLocationRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_mobile_partner_location_pb.RetrievePartnerLocationRes>;

  listPartnerLocation(
    request: proto_partner_mobile_partner_location_pb.ListPartnerLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_mobile_partner_location_pb.ListPartnerLocationRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_mobile_partner_location_pb.ListPartnerLocationRes>;

}

export class PartnerLocationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPartnerLocation(
    request: proto_partner_mobile_partner_location_pb.CreatePartnerLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_mobile_partner_location_pb.CreatePartnerLocationRes>;

  updatePartnerLocation(
    request: proto_partner_mobile_partner_location_pb.UpdatePartnerLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_mobile_base_pb.Empty>;

  deletePartnerLocation(
    request: proto_partner_mobile_partner_location_pb.DeletePartnerLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_mobile_base_pb.Empty>;

  retrievePartnerLocation(
    request: proto_partner_mobile_partner_location_pb.RetrievePartnerLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_mobile_partner_location_pb.RetrievePartnerLocationRes>;

  listPartnerLocation(
    request: proto_partner_mobile_partner_location_pb.ListPartnerLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_mobile_partner_location_pb.ListPartnerLocationRes>;

}

