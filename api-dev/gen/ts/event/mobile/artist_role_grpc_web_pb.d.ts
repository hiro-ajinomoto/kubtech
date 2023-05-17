import * as grpcWeb from 'grpc-web';

import * as event_mobile_artist_role_pb from '../../event/mobile/artist_role_pb';


export class ArtistRoleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRetrieveArtistRole(
    request: event_mobile_artist_role_pb.ListArtistRoleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_artist_role_pb.ListArtistRoleRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_artist_role_pb.ListArtistRoleRes>;

}

export class ArtistRoleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRetrieveArtistRole(
    request: event_mobile_artist_role_pb.ListArtistRoleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_artist_role_pb.ListArtistRoleRes>;

}

