import * as grpcWeb from 'grpc-web';

import * as media_mobile_playlist_pb from '../../media/mobile/playlist_pb';


export class PlaylistServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publicRetrievePlaylist(
    request: media_mobile_playlist_pb.PublicRetrievePlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_playlist_pb.PublicRetrievePlaylistRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_playlist_pb.PublicRetrievePlaylistRes>;

  publicListPlaylist(
    request: media_mobile_playlist_pb.PublicListPlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_playlist_pb.PublicListPlaylistRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_playlist_pb.PublicListPlaylistRes>;

  publicListMediaByPlaylist(
    request: media_mobile_playlist_pb.PublicListMediaByPlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_playlist_pb.PublicListMediaByPlaylistRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_playlist_pb.PublicListMediaByPlaylistRes>;

  publicSearchMix(
    request: media_mobile_playlist_pb.PublicSearchMixReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_playlist_pb.PublicSearchMixRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_playlist_pb.PublicSearchMixRes>;

  publicHomepage(
    request: media_mobile_playlist_pb.PublicHomepagePlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_playlist_pb.PublicHomepagePlaylistRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_playlist_pb.PublicHomepagePlaylistRes>;

}

export class PlaylistServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publicRetrievePlaylist(
    request: media_mobile_playlist_pb.PublicRetrievePlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_playlist_pb.PublicRetrievePlaylistRes>;

  publicListPlaylist(
    request: media_mobile_playlist_pb.PublicListPlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_playlist_pb.PublicListPlaylistRes>;

  publicListMediaByPlaylist(
    request: media_mobile_playlist_pb.PublicListMediaByPlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_playlist_pb.PublicListMediaByPlaylistRes>;

  publicSearchMix(
    request: media_mobile_playlist_pb.PublicSearchMixReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_playlist_pb.PublicSearchMixRes>;

  publicHomepage(
    request: media_mobile_playlist_pb.PublicHomepagePlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_playlist_pb.PublicHomepagePlaylistRes>;

}

