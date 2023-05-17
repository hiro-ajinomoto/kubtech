import * as grpcWeb from 'grpc-web';

import * as proto_partner_backend_partner_location_pb from '../../../proto/partner/backend/partner_location_pb';


export class PartnerLocationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrievePartnerLocation(
    request: proto_partner_backend_partner_location_pb.RetrievePartnerLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_backend_partner_location_pb.RetrievePartnerLocationRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_backend_partner_location_pb.RetrievePartnerLocationRes>;

}

export class PartnerLocationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrievePartnerLocation(
    request: proto_partner_backend_partner_location_pb.RetrievePartnerLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_backend_partner_location_pb.RetrievePartnerLocationRes>;

}

