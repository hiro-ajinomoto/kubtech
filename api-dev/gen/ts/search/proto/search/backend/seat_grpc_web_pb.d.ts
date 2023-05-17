import * as grpcWeb from 'grpc-web';

import * as proto_search_backend_seat_pb from '../../../proto/search/backend/seat_pb';


export class SeatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  internalCheckModifyPriceBlock(
    request: proto_search_backend_seat_pb.InternalCheckModifyPriceBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_search_backend_seat_pb.InternalCheckModifyPriceBlockRes) => void
  ): grpcWeb.ClientReadableStream<proto_search_backend_seat_pb.InternalCheckModifyPriceBlockRes>;

}

export class SeatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  internalCheckModifyPriceBlock(
    request: proto_search_backend_seat_pb.InternalCheckModifyPriceBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_search_backend_seat_pb.InternalCheckModifyPriceBlockRes>;

}

