import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as event_web_partnership_seat_map_pb from '../../event/web_partnership/seat_map_pb';


export class SeatMapServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSeatMap(
    request: event_web_partnership_seat_map_pb.CreateSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_seat_map_pb.CreateSeatMapRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_seat_map_pb.CreateSeatMapRes>;

  updateSeatMap(
    request: event_web_partnership_seat_map_pb.UpdateSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  deleteSeatMap(
    request: event_web_partnership_seat_map_pb.DeleteSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  listSeatMap(
    request: event_web_partnership_seat_map_pb.ListSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_seat_map_pb.ListSeatMapRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_seat_map_pb.ListSeatMapRes>;

  retrieveSeatMap(
    request: event_web_partnership_seat_map_pb.RetrieveSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_seat_map_pb.RetrieveSeatMapRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_seat_map_pb.RetrieveSeatMapRes>;

  createSeatBlock(
    request: event_web_partnership_seat_map_pb.CreateSeatBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_seat_map_pb.CreateSeatBlockRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_seat_map_pb.CreateSeatBlockRes>;

  listSeatBlock(
    request: event_web_partnership_seat_map_pb.ListSeatBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_seat_map_pb.ListSeatBlockRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_seat_map_pb.ListSeatBlockRes>;

  retrieveSeatBlock(
    request: event_web_partnership_seat_map_pb.RetrieveSeatBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_seat_map_pb.RetrieveSeatBlockRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_seat_map_pb.RetrieveSeatBlockRes>;

  updateSeatBlock(
    request: event_web_partnership_seat_map_pb.UpdateSeatBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  deleteSeatBlock(
    request: event_web_partnership_seat_map_pb.DeleteSeatBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  upsertDecoration(
    request: event_web_partnership_seat_map_pb.UpsertDecorationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  listDecoration(
    request: event_web_partnership_seat_map_pb.ListDecorationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_seat_map_pb.ListSeatBlockRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_seat_map_pb.ListSeatBlockRes>;

  updateSeatStatus(
    request: event_web_partnership_seat_map_pb.UpdateSeatStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_seat_map_pb.UpdateSeatStatusRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_seat_map_pb.UpdateSeatStatusRes>;

}

export class SeatMapServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSeatMap(
    request: event_web_partnership_seat_map_pb.CreateSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_seat_map_pb.CreateSeatMapRes>;

  updateSeatMap(
    request: event_web_partnership_seat_map_pb.UpdateSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  deleteSeatMap(
    request: event_web_partnership_seat_map_pb.DeleteSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  listSeatMap(
    request: event_web_partnership_seat_map_pb.ListSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_seat_map_pb.ListSeatMapRes>;

  retrieveSeatMap(
    request: event_web_partnership_seat_map_pb.RetrieveSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_seat_map_pb.RetrieveSeatMapRes>;

  createSeatBlock(
    request: event_web_partnership_seat_map_pb.CreateSeatBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_seat_map_pb.CreateSeatBlockRes>;

  listSeatBlock(
    request: event_web_partnership_seat_map_pb.ListSeatBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_seat_map_pb.ListSeatBlockRes>;

  retrieveSeatBlock(
    request: event_web_partnership_seat_map_pb.RetrieveSeatBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_seat_map_pb.RetrieveSeatBlockRes>;

  updateSeatBlock(
    request: event_web_partnership_seat_map_pb.UpdateSeatBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  deleteSeatBlock(
    request: event_web_partnership_seat_map_pb.DeleteSeatBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  upsertDecoration(
    request: event_web_partnership_seat_map_pb.UpsertDecorationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  listDecoration(
    request: event_web_partnership_seat_map_pb.ListDecorationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_seat_map_pb.ListSeatBlockRes>;

  updateSeatStatus(
    request: event_web_partnership_seat_map_pb.UpdateSeatStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_seat_map_pb.UpdateSeatStatusRes>;

}

