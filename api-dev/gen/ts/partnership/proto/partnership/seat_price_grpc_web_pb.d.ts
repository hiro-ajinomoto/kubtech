import * as grpcWeb from 'grpc-web';

import * as proto_partnership_seat_price_pb from '../../proto/partnership/seat_price_pb';
import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class SeatPriceServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveSeatPrice(
    request: proto_partnership_seat_price_pb.RetrieveSeatPriceReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_price_pb.RetrieveSeatPriceRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_price_pb.RetrieveSeatPriceRes>;

  listSeatPrice(
    request: proto_partnership_seat_price_pb.ListSeatPriceReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_price_pb.ListSeatPriceRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_price_pb.ListSeatPriceRes>;

  createSeatPrice(
    request: proto_partnership_seat_price_pb.CreateSeatPriceReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_price_pb.CreateSeatPriceRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_price_pb.CreateSeatPriceRes>;

  updateSeatPrice(
    request: proto_partnership_seat_price_pb.UpdateSeatPriceReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  deleteSeatPrice(
    request: proto_partnership_seat_price_pb.DeleteSeatPriceReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

}

export class SeatPriceServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveSeatPrice(
    request: proto_partnership_seat_price_pb.RetrieveSeatPriceReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_price_pb.RetrieveSeatPriceRes>;

  listSeatPrice(
    request: proto_partnership_seat_price_pb.ListSeatPriceReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_price_pb.ListSeatPriceRes>;

  createSeatPrice(
    request: proto_partnership_seat_price_pb.CreateSeatPriceReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_price_pb.CreateSeatPriceRes>;

  updateSeatPrice(
    request: proto_partnership_seat_price_pb.UpdateSeatPriceReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  deleteSeatPrice(
    request: proto_partnership_seat_price_pb.DeleteSeatPriceReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

}

