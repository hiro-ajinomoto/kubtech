import * as grpcWeb from 'grpc-web';

import * as media_base_media_pb from '../../media/base_media_pb';
import * as media_web_partnership_hashtag_pb from '../../media/web_partnership/hashtag_pb';


export class HashtagServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createHashtag(
    request: media_web_partnership_hashtag_pb.CreateHashtagReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_hashtag_pb.CreateHashtagRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_hashtag_pb.CreateHashtagRes>;

  updateHashtag(
    request: media_web_partnership_hashtag_pb.UpdateHashtagReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_base_media_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<media_base_media_pb.Empty>;

  deleteHashtag(
    request: media_web_partnership_hashtag_pb.DeleteHashtagReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_base_media_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<media_base_media_pb.Empty>;

  retrieveHashtag(
    request: media_web_partnership_hashtag_pb.RetrieveHashtagReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_hashtag_pb.RetrieveHashtagRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_hashtag_pb.RetrieveHashtagRes>;

  listRetrieveHashtag(
    request: media_web_partnership_hashtag_pb.ListHashtagReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_hashtag_pb.ListHashtagRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_hashtag_pb.ListHashtagRes>;

  publicRetrieveHashtag(
    request: media_web_partnership_hashtag_pb.PublicRetrieveHashtagReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_hashtag_pb.PublicRetrieveHashtagRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_hashtag_pb.PublicRetrieveHashtagRes>;

  publicListHashtag(
    request: media_web_partnership_hashtag_pb.PublicListHashtagReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_hashtag_pb.PublicListHashtagRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_hashtag_pb.PublicListHashtagRes>;

  internalListHashtagByIds(
    request: media_web_partnership_hashtag_pb.InternalListHashtagByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_hashtag_pb.InternalListHashtagByIdsRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_hashtag_pb.InternalListHashtagByIdsRes>;

  internalUpsertHashtags(
    request: media_web_partnership_hashtag_pb.InternalUpsertHashtagsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_web_partnership_hashtag_pb.InternalUpsertHashtagsRes) => void
  ): grpcWeb.ClientReadableStream<media_web_partnership_hashtag_pb.InternalUpsertHashtagsRes>;

}

export class HashtagServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createHashtag(
    request: media_web_partnership_hashtag_pb.CreateHashtagReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_hashtag_pb.CreateHashtagRes>;

  updateHashtag(
    request: media_web_partnership_hashtag_pb.UpdateHashtagReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_base_media_pb.Empty>;

  deleteHashtag(
    request: media_web_partnership_hashtag_pb.DeleteHashtagReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_base_media_pb.Empty>;

  retrieveHashtag(
    request: media_web_partnership_hashtag_pb.RetrieveHashtagReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_hashtag_pb.RetrieveHashtagRes>;

  listRetrieveHashtag(
    request: media_web_partnership_hashtag_pb.ListHashtagReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_hashtag_pb.ListHashtagRes>;

  publicRetrieveHashtag(
    request: media_web_partnership_hashtag_pb.PublicRetrieveHashtagReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_hashtag_pb.PublicRetrieveHashtagRes>;

  publicListHashtag(
    request: media_web_partnership_hashtag_pb.PublicListHashtagReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_hashtag_pb.PublicListHashtagRes>;

  internalListHashtagByIds(
    request: media_web_partnership_hashtag_pb.InternalListHashtagByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_hashtag_pb.InternalListHashtagByIdsRes>;

  internalUpsertHashtags(
    request: media_web_partnership_hashtag_pb.InternalUpsertHashtagsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_web_partnership_hashtag_pb.InternalUpsertHashtagsRes>;

}

