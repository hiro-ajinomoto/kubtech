import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as event_backend_event_pb from '../../event/backend/event_pb';


export class EventServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  searchEventsByName(
    request: event_backend_event_pb.SearchEventsByNameReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_event_pb.SearchEventsByNameRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_event_pb.SearchEventsByNameRes>;

  retrieveSimpleEvent(
    request: event_backend_event_pb.RetrieveSimpleEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_event_pb.RetrieveSimpleEventRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_event_pb.RetrieveSimpleEventRes>;

  aggregateEvent(
    request: event_backend_event_pb.RetrieveSimpleEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  getProductEventsInfo(
    request: event_backend_event_pb.GetProductEventsInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_event_pb.GetProductEventsInfoRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_event_pb.GetProductEventsInfoRes>;

  internalListScheduleByEventID(
    request: event_backend_event_pb.ListScheduleByEventIDReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_event_pb.ListScheduleByEventIDRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_event_pb.ListScheduleByEventIDRes>;

  internalUpdateEventState(
    request: event_backend_event_pb.InternalUpdateEventStateReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

}

export class EventServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  searchEventsByName(
    request: event_backend_event_pb.SearchEventsByNameReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_event_pb.SearchEventsByNameRes>;

  retrieveSimpleEvent(
    request: event_backend_event_pb.RetrieveSimpleEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_event_pb.RetrieveSimpleEventRes>;

  aggregateEvent(
    request: event_backend_event_pb.RetrieveSimpleEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  getProductEventsInfo(
    request: event_backend_event_pb.GetProductEventsInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_event_pb.GetProductEventsInfoRes>;

  internalListScheduleByEventID(
    request: event_backend_event_pb.ListScheduleByEventIDReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_event_pb.ListScheduleByEventIDRes>;

  internalUpdateEventState(
    request: event_backend_event_pb.InternalUpdateEventStateReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

}

