import * as grpcWeb from 'grpc-web';

import * as product_backend_seat_pb from '../../product/backend/seat_pb';


export class SeatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkIsAbleDeleteSeatsInPriceBlockId(
    request: product_backend_seat_pb.CheckIsAbleDeleteSeatsInPriceBlockIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_seat_pb.CheckIsAbleDeleteSeatsInPriceBlockIdRes) => void
  ): grpcWeb.ClientReadableStream<product_backend_seat_pb.CheckIsAbleDeleteSeatsInPriceBlockIdRes>;

  getSeats(
    request: product_backend_seat_pb.GetSeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_seat_pb.GetSeatsRes) => void
  ): grpcWeb.ClientReadableStream<product_backend_seat_pb.GetSeatsRes>;

}

export class SeatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkIsAbleDeleteSeatsInPriceBlockId(
    request: product_backend_seat_pb.CheckIsAbleDeleteSeatsInPriceBlockIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_seat_pb.CheckIsAbleDeleteSeatsInPriceBlockIdRes>;

  getSeats(
    request: product_backend_seat_pb.GetSeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_seat_pb.GetSeatsRes>;

}

