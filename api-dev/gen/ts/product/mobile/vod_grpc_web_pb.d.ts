import * as grpcWeb from 'grpc-web';

import * as product_mobile_vod_pb from '../../product/mobile/vod_pb';


export class VODServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getVODs(
    request: product_mobile_vod_pb.GetVODsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_vod_pb.GetVODsRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_vod_pb.GetVODsRes>;

}

export class VODServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getVODs(
    request: product_mobile_vod_pb.GetVODsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_vod_pb.GetVODsRes>;

}

