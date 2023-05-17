import * as grpcWeb from 'grpc-web';

import * as proto_partnership_mobile_partnership_pb from '../../../proto/partnership/mobile/partnership_pb';


export class PartnershipServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publicGetPartnershipByCode(
    request: proto_partnership_mobile_partnership_pb.PublicGetPartnershipByCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_mobile_partnership_pb.PublicGetPartnershipByCodeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_mobile_partnership_pb.PublicGetPartnershipByCodeRes>;

}

export class PartnershipServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publicGetPartnershipByCode(
    request: proto_partnership_mobile_partnership_pb.PublicGetPartnershipByCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_mobile_partnership_pb.PublicGetPartnershipByCodeRes>;

}

