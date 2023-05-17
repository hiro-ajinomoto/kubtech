import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as product_web_partnership_seat_pb from '../../product/web_partnership/seat_pb';


export class SeatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  bulkUpdateSeats(
    request: product_web_partnership_seat_pb.BulkUpdateSeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_partnership_seat_pb.BulkUpdateSeatsRes) => void
  ): grpcWeb.ClientReadableStream<product_web_partnership_seat_pb.BulkUpdateSeatsRes>;

  deleteSeats(
    request: product_web_partnership_seat_pb.DeleteSeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  getAvailableSeats(
    request: product_web_partnership_seat_pb.GetAvailableSeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_partnership_seat_pb.GetAvailableSeatsRes) => void
  ): grpcWeb.ClientReadableStream<product_web_partnership_seat_pb.GetAvailableSeatsRes>;

}

export class SeatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  bulkUpdateSeats(
    request: product_web_partnership_seat_pb.BulkUpdateSeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_partnership_seat_pb.BulkUpdateSeatsRes>;

  deleteSeats(
    request: product_web_partnership_seat_pb.DeleteSeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  getAvailableSeats(
    request: product_web_partnership_seat_pb.GetAvailableSeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_partnership_seat_pb.GetAvailableSeatsRes>;

}

