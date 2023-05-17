import * as grpcWeb from 'grpc-web';

import * as product_mobile_seat_pb from '../../product/mobile/seat_pb';


export class SeatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSeats(
    request: product_mobile_seat_pb.GetSeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_seat_pb.GetSeatsRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_seat_pb.GetSeatsRes>;

  getAvailableSeats(
    request: product_mobile_seat_pb.GetAvailableSeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_seat_pb.GetAvailableSeatsRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_seat_pb.GetAvailableSeatsRes>;

}

export class SeatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSeats(
    request: product_mobile_seat_pb.GetSeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_seat_pb.GetSeatsRes>;

  getAvailableSeats(
    request: product_mobile_seat_pb.GetAvailableSeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_seat_pb.GetAvailableSeatsRes>;

}

