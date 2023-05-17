import * as grpcWeb from 'grpc-web';

import * as media_mobile_hashtag_pb from '../../media/mobile/hashtag_pb';


export class HashtagServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publicListHashtag(
    request: media_mobile_hashtag_pb.PublicListHashtagReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_hashtag_pb.PublicListHashtagRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_hashtag_pb.PublicListHashtagRes>;

  internalListHashtagByIds(
    request: media_mobile_hashtag_pb.InternalListHashtagByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_hashtag_pb.InternalListHashtagByIdsRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_hashtag_pb.InternalListHashtagByIdsRes>;

}

export class HashtagServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publicListHashtag(
    request: media_mobile_hashtag_pb.PublicListHashtagReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_hashtag_pb.PublicListHashtagRes>;

  internalListHashtagByIds(
    request: media_mobile_hashtag_pb.InternalListHashtagByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_hashtag_pb.InternalListHashtagByIdsRes>;

}

