import * as grpcWeb from 'grpc-web';

import * as proto_partner_mobile_partner_pb from '../../../proto/partner/mobile/partner_pb';


export class PartnerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDocuments(
    request: proto_partner_mobile_partner_pb.GetDocumentsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_mobile_partner_pb.GetDocumentsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_mobile_partner_pb.GetDocumentsRes>;

}

export class PartnerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDocuments(
    request: proto_partner_mobile_partner_pb.GetDocumentsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_mobile_partner_pb.GetDocumentsRes>;

}

