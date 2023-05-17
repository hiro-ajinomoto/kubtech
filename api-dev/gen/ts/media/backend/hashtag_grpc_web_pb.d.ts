import * as grpcWeb from 'grpc-web';

import * as media_backend_hashtag_pb from '../../media/backend/hashtag_pb';


export class HashtagServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  internalUpsertHashtags(
    request: media_backend_hashtag_pb.InternaUpsertHashtagsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_backend_hashtag_pb.InternaUpsertHashtagsRes) => void
  ): grpcWeb.ClientReadableStream<media_backend_hashtag_pb.InternaUpsertHashtagsRes>;

  internalListHashtagByIds(
    request: media_backend_hashtag_pb.InternalListHashtagByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_backend_hashtag_pb.InternalListHashtagByIdsRes) => void
  ): grpcWeb.ClientReadableStream<media_backend_hashtag_pb.InternalListHashtagByIdsRes>;

}

export class HashtagServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  internalUpsertHashtags(
    request: media_backend_hashtag_pb.InternaUpsertHashtagsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_backend_hashtag_pb.InternaUpsertHashtagsRes>;

  internalListHashtagByIds(
    request: media_backend_hashtag_pb.InternalListHashtagByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_backend_hashtag_pb.InternalListHashtagByIdsRes>;

}

