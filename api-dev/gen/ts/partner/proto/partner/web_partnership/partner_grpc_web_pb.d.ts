import * as grpcWeb from 'grpc-web';

import * as proto_partner_web_partnership_partner_pb from '../../../proto/partner/web_partnership/partner_pb';


export class PartnerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPartner(
    request: proto_partner_web_partnership_partner_pb.CreatePartnerReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_web_partnership_partner_pb.CreatePartnerRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_web_partnership_partner_pb.CreatePartnerRes>;

}

export class PartnerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPartner(
    request: proto_partner_web_partnership_partner_pb.CreatePartnerReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_web_partnership_partner_pb.CreatePartnerRes>;

}

