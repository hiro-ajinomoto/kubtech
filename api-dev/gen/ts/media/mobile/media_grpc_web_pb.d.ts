import * as grpcWeb from 'grpc-web';

import * as media_mobile_media_pb from '../../media/mobile/media_pb';


export class MediaServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveMedia(
    request: media_mobile_media_pb.RetrieveMediaReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_media_pb.RetrieveMediaRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_media_pb.RetrieveMediaRes>;

  publicHomepage(
    request: media_mobile_media_pb.PublicHomepageMediaReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: media_mobile_media_pb.PublicHomepageMediaRes) => void
  ): grpcWeb.ClientReadableStream<media_mobile_media_pb.PublicHomepageMediaRes>;

}

export class MediaServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveMedia(
    request: media_mobile_media_pb.RetrieveMediaReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_media_pb.RetrieveMediaRes>;

  publicHomepage(
    request: media_mobile_media_pb.PublicHomepageMediaReq,
    metadata?: grpcWeb.Metadata
  ): Promise<media_mobile_media_pb.PublicHomepageMediaRes>;

}

