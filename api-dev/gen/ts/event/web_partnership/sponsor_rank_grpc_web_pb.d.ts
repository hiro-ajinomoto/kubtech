import * as grpcWeb from 'grpc-web';

import * as event_web_partnership_sponsor_rank_pb from '../../event/web_partnership/sponsor_rank_pb';


export class SponsorRankServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRetrieveSponsorRank(
    request: event_web_partnership_sponsor_rank_pb.ListSponsorRankReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_sponsor_rank_pb.ListSponsorRankRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_sponsor_rank_pb.ListSponsorRankRes>;

}

export class SponsorRankServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRetrieveSponsorRank(
    request: event_web_partnership_sponsor_rank_pb.ListSponsorRankReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_sponsor_rank_pb.ListSponsorRankRes>;

}

