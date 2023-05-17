import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as event_backend_seat_map_pb from '../../event/backend/seat_map_pb';


export class SeatMapServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveSeatBlock(
    request: event_backend_seat_map_pb.RetrieveSeatBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.RetrieveSeatBlockRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.RetrieveSeatBlockRes>;

  internalListSeatMapByIds(
    request: event_backend_seat_map_pb.ListSeatMapByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.ListSeatMapByIdsRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.ListSeatMapByIdsRes>;

  retrieveSeatMap(
    request: event_backend_seat_map_pb.RetrieveSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.RetrieveSeatMapRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.RetrieveSeatMapRes>;

  internalListSeatMapDetailByIds(
    request: event_backend_seat_map_pb.InternalListSeatMapDetailByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.InternalListSeatMapDetailByIdsRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.InternalListSeatMapDetailByIdsRes>;

  associateSchedule(
    request: event_backend_seat_map_pb.AssociateScheduleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  internalListSeatMapDetailByEventId(
    request: event_backend_seat_map_pb.ListSeatMapDetailByEventIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.ListSeatMapDetailByEventIdRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.ListSeatMapDetailByEventIdRes>;

  internalListSeatBlockBySeatMapIds(
    request: event_backend_seat_map_pb.InternalListSeatBlockBySeatMapIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.InternalListSeatBlockBySeatMapIdsRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.InternalListSeatBlockBySeatMapIdsRes>;

  internalListSeatBySeatBlockIds(
    request: event_backend_seat_map_pb.InternalListSeatBySeatBlockIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.InternalListSeatBySeatBlockIdsRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.InternalListSeatBySeatBlockIdsRes>;

  acquireLock(
    request: event_backend_seat_map_pb.AcquireLockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.AcquireRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.AcquireRes>;

  acquireSell(
    request: event_backend_seat_map_pb.AcquireSellReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.AcquireRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.AcquireRes>;

  releaseLock(
    request: event_backend_seat_map_pb.ReleaseLockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_seat_map_pb.AcquireRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_seat_map_pb.AcquireRes>;

}

export class SeatMapServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveSeatBlock(
    request: event_backend_seat_map_pb.RetrieveSeatBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.RetrieveSeatBlockRes>;

  internalListSeatMapByIds(
    request: event_backend_seat_map_pb.ListSeatMapByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.ListSeatMapByIdsRes>;

  retrieveSeatMap(
    request: event_backend_seat_map_pb.RetrieveSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.RetrieveSeatMapRes>;

  internalListSeatMapDetailByIds(
    request: event_backend_seat_map_pb.InternalListSeatMapDetailByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.InternalListSeatMapDetailByIdsRes>;

  associateSchedule(
    request: event_backend_seat_map_pb.AssociateScheduleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  internalListSeatMapDetailByEventId(
    request: event_backend_seat_map_pb.ListSeatMapDetailByEventIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.ListSeatMapDetailByEventIdRes>;

  internalListSeatBlockBySeatMapIds(
    request: event_backend_seat_map_pb.InternalListSeatBlockBySeatMapIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.InternalListSeatBlockBySeatMapIdsRes>;

  internalListSeatBySeatBlockIds(
    request: event_backend_seat_map_pb.InternalListSeatBySeatBlockIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.InternalListSeatBySeatBlockIdsRes>;

  acquireLock(
    request: event_backend_seat_map_pb.AcquireLockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.AcquireRes>;

  acquireSell(
    request: event_backend_seat_map_pb.AcquireSellReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.AcquireRes>;

  releaseLock(
    request: event_backend_seat_map_pb.ReleaseLockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_seat_map_pb.AcquireRes>;

}

