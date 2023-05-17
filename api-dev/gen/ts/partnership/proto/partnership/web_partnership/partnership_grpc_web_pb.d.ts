import * as grpcWeb from 'grpc-web';

import * as proto_partnership_web_partnership_base_pb from '../../../proto/partnership/web_partnership/base_pb';
import * as proto_partnership_web_partnership_partnership_pb from '../../../proto/partnership/web_partnership/partnership_pb';


export class PartnershipServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updatePartnership(
    request: proto_partnership_web_partnership_partnership_pb.UpdatePartnershipReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_base_pb.Empty>;

  publicGetPartnershipByCode(
    request: proto_partnership_web_partnership_partnership_pb.PublicGetPartnershipByCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_web_partnership_partnership_pb.PublicGetPartnershipByCodeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_web_partnership_partnership_pb.PublicGetPartnershipByCodeRes>;

}

export class PartnershipServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updatePartnership(
    request: proto_partnership_web_partnership_partnership_pb.UpdatePartnershipReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_base_pb.Empty>;

  publicGetPartnershipByCode(
    request: proto_partnership_web_partnership_partnership_pb.PublicGetPartnershipByCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_web_partnership_partnership_pb.PublicGetPartnershipByCodeRes>;

}

