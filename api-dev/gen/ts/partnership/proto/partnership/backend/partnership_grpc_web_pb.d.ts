import * as grpcWeb from 'grpc-web';

import * as proto_partnership_backend_partnership_pb from '../../../proto/partnership/backend/partnership_pb';


export class PartnershipServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrievePartnership(
    request: proto_partnership_backend_partnership_pb.RetrievePartnershipReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_backend_partnership_pb.RetrievePartnershipRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_backend_partnership_pb.RetrievePartnershipRes>;

  getPartnershipIdByCodes(
    request: proto_partnership_backend_partnership_pb.GetPartnershipIdByCodesReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_backend_partnership_pb.GetPartnershipIdByCodesRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_backend_partnership_pb.GetPartnershipIdByCodesRes>;

}

export class PartnershipServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrievePartnership(
    request: proto_partnership_backend_partnership_pb.RetrievePartnershipReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_backend_partnership_pb.RetrievePartnershipRes>;

  getPartnershipIdByCodes(
    request: proto_partnership_backend_partnership_pb.GetPartnershipIdByCodesReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_backend_partnership_pb.GetPartnershipIdByCodesRes>;

}

