import * as grpcWeb from 'grpc-web';

import * as product_web_admin_base_pb from '../../product/web_admin/base_pb';
import * as product_web_admin_seat_pb from '../../product/web_admin/seat_pb';


export class SeatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  migrationSeat(
    request: product_web_admin_seat_pb.MigrationSeatReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_admin_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_web_admin_base_pb.Empty>;

  streamSeats(
    request: product_web_admin_seat_pb.StreamSeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_admin_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_web_admin_base_pb.Empty>;

}

export class SeatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  migrationSeat(
    request: product_web_admin_seat_pb.MigrationSeatReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_admin_base_pb.Empty>;

  streamSeats(
    request: product_web_admin_seat_pb.StreamSeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_admin_base_pb.Empty>;

}

