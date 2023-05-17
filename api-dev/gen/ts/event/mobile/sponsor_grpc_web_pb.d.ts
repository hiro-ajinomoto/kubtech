import * as grpcWeb from 'grpc-web';

import * as event_mobile_sponsor_pb from '../../event/mobile/sponsor_pb';


export class SponsorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSponsorDetail(
    request: event_mobile_sponsor_pb.GetSponsorDetailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_sponsor_pb.GetSponsorDetailRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_sponsor_pb.GetSponsorDetailRes>;

  listSponsor(
    request: event_mobile_sponsor_pb.ListSponsorReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_sponsor_pb.ListSponsorRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_sponsor_pb.ListSponsorRes>;

}

export class SponsorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSponsorDetail(
    request: event_mobile_sponsor_pb.GetSponsorDetailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_sponsor_pb.GetSponsorDetailRes>;

  listSponsor(
    request: event_mobile_sponsor_pb.ListSponsorReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_sponsor_pb.ListSponsorRes>;

}

