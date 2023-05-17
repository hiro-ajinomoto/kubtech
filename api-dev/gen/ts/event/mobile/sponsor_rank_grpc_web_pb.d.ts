import * as grpcWeb from 'grpc-web';

import * as event_mobile_sponsor_rank_pb from '../../event/mobile/sponsor_rank_pb';


export class SponsorRankServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRetrieveSponsorRank(
    request: event_mobile_sponsor_rank_pb.ListSponsorRankReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_sponsor_rank_pb.ListSponsorRankRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_sponsor_rank_pb.ListSponsorRankRes>;

}

export class SponsorRankServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRetrieveSponsorRank(
    request: event_mobile_sponsor_rank_pb.ListSponsorRankReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_sponsor_rank_pb.ListSponsorRankRes>;

}

