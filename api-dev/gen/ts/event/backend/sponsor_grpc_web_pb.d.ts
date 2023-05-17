import * as grpcWeb from 'grpc-web';

import * as event_backend_sponsor_pb from '../../event/backend/sponsor_pb';


export class SponsorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSponsorDetail(
    request: event_backend_sponsor_pb.GetSponsorDetailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_sponsor_pb.GetSponsorDetailRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_sponsor_pb.GetSponsorDetailRes>;

  listSponsorByIds(
    request: event_backend_sponsor_pb.ListSponsorByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_sponsor_pb.ListSponsorByIdsRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_sponsor_pb.ListSponsorByIdsRes>;

}

export class SponsorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSponsorDetail(
    request: event_backend_sponsor_pb.GetSponsorDetailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_sponsor_pb.GetSponsorDetailRes>;

  listSponsorByIds(
    request: event_backend_sponsor_pb.ListSponsorByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_sponsor_pb.ListSponsorByIdsRes>;

}

