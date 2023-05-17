import * as grpcWeb from 'grpc-web';

import * as media_base_media_pb from '../../media/base_media_pb';
import * as media_web_partnership_playlist_pb from '../../media/web_partnership/playlist_pb';


export class PlaylistServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPlaylist(
    request: media_web_partnership_playlist_pb.CreatePlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_playlist_pb.CreatePlaylistRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_playlist_pb.CreatePlaylistRes>;

  updatePlaylist(
    request: media_web_partnership_playlist_pb.UpdatePlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_base_media_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<media_base_media_pb.Empty>;

  deletePlaylist(
    request: media_web_partnership_playlist_pb.DeletePlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_base_media_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<media_base_media_pb.Empty>;

  retrievePlaylist(
    request: media_web_partnership_playlist_pb.RetrievePlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_playlist_pb.RetrievePlaylistRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_playlist_pb.RetrievePlaylistRes>;

  listPlaylist(
    request: media_web_partnership_playlist_pb.ListPlaylistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_playlist_pb.ListPlaylistRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_playlist_pb.ListPlaylistRes>;

}

export class PlaylistServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPlaylist(
    request: media_web_partnership_playlist_pb.CreatePlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_playlist_pb.CreatePlaylistRes>;

  updatePlaylist(
    request: media_web_partnership_playlist_pb.UpdatePlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_base_media_pb.Empty>;

  deletePlaylist(
    request: media_web_partnership_playlist_pb.DeletePlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_base_media_pb.Empty>;

  retrievePlaylist(
    request: media_web_partnership_playlist_pb.RetrievePlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_playlist_pb.RetrievePlaylistRes>;

  listPlaylist(
    request: media_web_partnership_playlist_pb.ListPlaylistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_playlist_pb.ListPlaylistRes>;

}

