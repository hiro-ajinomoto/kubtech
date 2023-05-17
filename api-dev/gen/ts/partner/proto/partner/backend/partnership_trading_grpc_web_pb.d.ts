import * as grpcWeb from 'grpc-web';

import * as proto_partner_backend_partnership_trading_pb from '../../../proto/partner/backend/partnership_trading_pb';


export class PartnershipTradingServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPartnershipTrading(
    request: proto_partner_backend_partnership_trading_pb.CreatePartnershipTradingReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_backend_partnership_trading_pb.CreatePartnershipTradingRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_backend_partnership_trading_pb.CreatePartnershipTradingRes>;

}

export class PartnershipTradingServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPartnershipTrading(
    request: proto_partner_backend_partnership_trading_pb.CreatePartnershipTradingReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_backend_partnership_trading_pb.CreatePartnershipTradingRes>;

}

