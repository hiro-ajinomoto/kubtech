import * as grpcWeb from 'grpc-web';

import * as media_base_media_pb from '../../media/base_media_pb';
import * as media_web_partnership_media_pb from '../../media/web_partnership/media_pb';


export class MediaServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createMedia(
    request: media_web_partnership_media_pb.CreateMediaReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_media_pb.CreateMediaRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_media_pb.CreateMediaRes>;

  retrieveMedia(
    request: media_web_partnership_media_pb.RetrieveMediaReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_media_pb.RetrieveMediaRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_media_pb.RetrieveMediaRes>;

  updateMedia(
    request: media_web_partnership_media_pb.UpdateMediaReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_base_media_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<media_base_media_pb.Empty>;

  deleteMedia(
    request: media_web_partnership_media_pb.DeleteMediaReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_base_media_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<media_base_media_pb.Empty>;

  listMedias(
    request: media_web_partnership_media_pb.ListMediasReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_media_pb.ListMediasRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_media_pb.ListMediasRes>;

  internalListMediaByIds(
    request: media_web_partnership_media_pb.InternalListMediaByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_media_pb.InternalListMediaByIdsRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_media_pb.InternalListMediaByIdsRes>;

}

export class MediaServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createMedia(
    request: media_web_partnership_media_pb.CreateMediaReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_media_pb.CreateMediaRes>;

  retrieveMedia(
    request: media_web_partnership_media_pb.RetrieveMediaReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_media_pb.RetrieveMediaRes>;

  updateMedia(
    request: media_web_partnership_media_pb.UpdateMediaReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_base_media_pb.Empty>;

  deleteMedia(
    request: media_web_partnership_media_pb.DeleteMediaReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_base_media_pb.Empty>;

  listMedias(
    request: media_web_partnership_media_pb.ListMediasReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_media_pb.ListMediasRes>;

  internalListMediaByIds(
    request: media_web_partnership_media_pb.InternalListMediaByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_media_pb.InternalListMediaByIdsRes>;

}

