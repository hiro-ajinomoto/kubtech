import * as grpcWeb from 'grpc-web';

import * as event_web_partnership_artist_role_pb from '../../event/web_partnership/artist_role_pb';


export class ArtistRoleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRetrieveArtistRole(
    request: event_web_partnership_artist_role_pb.ListArtistRoleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_artist_role_pb.ListArtistRoleRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_artist_role_pb.ListArtistRoleRes>;

}

export class ArtistRoleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRetrieveArtistRole(
    request: event_web_partnership_artist_role_pb.ListArtistRoleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_artist_role_pb.ListArtistRoleRes>;

}

