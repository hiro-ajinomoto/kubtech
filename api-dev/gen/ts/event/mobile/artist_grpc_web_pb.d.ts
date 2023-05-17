import * as grpcWeb from 'grpc-web';

import * as event_mobile_artist_pb from '../../event/mobile/artist_pb';


export class ArtistServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getArtistDetail(
    request: event_mobile_artist_pb.GetArtistDetailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_artist_pb.GetArtistDetailRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_artist_pb.GetArtistDetailRes>;

  listArtist(
    request: event_mobile_artist_pb.ListArtistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_artist_pb.ListArtistRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_artist_pb.ListArtistRes>;

}

export class ArtistServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getArtistDetail(
    request: event_mobile_artist_pb.GetArtistDetailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_artist_pb.GetArtistDetailRes>;

  listArtist(
    request: event_mobile_artist_pb.ListArtistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_artist_pb.ListArtistRes>;

}

