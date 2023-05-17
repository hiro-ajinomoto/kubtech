import * as grpcWeb from 'grpc-web';

import * as event_mobile_seat_map_pb from '../../event/mobile/seat_map_pb';


export class SeatMapServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listSeatMap(
    request: event_mobile_seat_map_pb.ListSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_seat_map_pb.ListSeatMapRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_seat_map_pb.ListSeatMapRes>;

  retrieveSeatMap(
    request: event_mobile_seat_map_pb.RetrieveSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_seat_map_pb.RetrieveSeatMapRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_seat_map_pb.RetrieveSeatMapRes>;

  listSeatBlock(
    request: event_mobile_seat_map_pb.ListSeatBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_seat_map_pb.ListSeatBlockRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_seat_map_pb.ListSeatBlockRes>;

  retrieveSeatBlock(
    request: event_mobile_seat_map_pb.RetrieveSeatBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_seat_map_pb.RetrieveSeatBlockRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_seat_map_pb.RetrieveSeatBlockRes>;

  listDecoration(
    request: event_mobile_seat_map_pb.ListDecorationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_seat_map_pb.ListSeatBlockRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_seat_map_pb.ListSeatBlockRes>;

  updateSeatStatus(
    request: event_mobile_seat_map_pb.UpdateSeatStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_seat_map_pb.UpdateSeatStatusRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_seat_map_pb.UpdateSeatStatusRes>;

}

export class SeatMapServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listSeatMap(
    request: event_mobile_seat_map_pb.ListSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_seat_map_pb.ListSeatMapRes>;

  retrieveSeatMap(
    request: event_mobile_seat_map_pb.RetrieveSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_seat_map_pb.RetrieveSeatMapRes>;

  listSeatBlock(
    request: event_mobile_seat_map_pb.ListSeatBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_seat_map_pb.ListSeatBlockRes>;

  retrieveSeatBlock(
    request: event_mobile_seat_map_pb.RetrieveSeatBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_seat_map_pb.RetrieveSeatBlockRes>;

  listDecoration(
    request: event_mobile_seat_map_pb.ListDecorationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_seat_map_pb.ListSeatBlockRes>;

  updateSeatStatus(
    request: event_mobile_seat_map_pb.UpdateSeatStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_seat_map_pb.UpdateSeatStatusRes>;

}

