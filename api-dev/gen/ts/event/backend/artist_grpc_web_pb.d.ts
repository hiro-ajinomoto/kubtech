import * as grpcWeb from 'grpc-web';

import * as event_backend_artist_pb from '../../event/backend/artist_pb';


export class ArtistServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listArtistIds(
    request: event_backend_artist_pb.ListArtistIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_artist_pb.ListArtistIdsRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_artist_pb.ListArtistIdsRes>;

}

export class ArtistServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listArtistIds(
    request: event_backend_artist_pb.ListArtistIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_artist_pb.ListArtistIdsRes>;

}

