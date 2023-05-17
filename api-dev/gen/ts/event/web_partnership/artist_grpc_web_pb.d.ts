import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as event_web_partnership_artist_pb from '../../event/web_partnership/artist_pb';


export class ArtistServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getArtistDetail(
    request: event_web_partnership_artist_pb.GetArtistDetailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_artist_pb.GetArtistDetailRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_artist_pb.GetArtistDetailRes>;

  listArtist(
    request: event_web_partnership_artist_pb.ListArtistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_artist_pb.ListArtistRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_artist_pb.ListArtistRes>;

  createArtist(
    request: event_web_partnership_artist_pb.CreateArtistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_artist_pb.CreateArtistRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_artist_pb.CreateArtistRes>;

  updateArtist(
    request: event_web_partnership_artist_pb.UpdateArtistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  deleteArtist(
    request: event_web_partnership_artist_pb.DeleteArtistReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

}

export class ArtistServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getArtistDetail(
    request: event_web_partnership_artist_pb.GetArtistDetailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_artist_pb.GetArtistDetailRes>;

  listArtist(
    request: event_web_partnership_artist_pb.ListArtistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_artist_pb.ListArtistRes>;

  createArtist(
    request: event_web_partnership_artist_pb.CreateArtistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_artist_pb.CreateArtistRes>;

  updateArtist(
    request: event_web_partnership_artist_pb.UpdateArtistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  deleteArtist(
    request: event_web_partnership_artist_pb.DeleteArtistReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

}

