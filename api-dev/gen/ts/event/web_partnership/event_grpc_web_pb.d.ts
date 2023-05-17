import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as event_web_partnership_event_pb from '../../event/web_partnership/event_pb';


export class EventServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createEvent(
    request: event_web_partnership_event_pb.CreateEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_event_pb.CreateEventRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_event_pb.CreateEventRes>;

  updateEvent(
    request: event_web_partnership_event_pb.UpdateEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  deleteEvent(
    request: event_web_partnership_event_pb.DeleteEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  retrieveEvent(
    request: event_web_partnership_event_pb.RetrieveEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_event_pb.RetrieveEventRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_event_pb.RetrieveEventRes>;

  listEvents(
    request: event_web_partnership_event_pb.ListEventsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_event_pb.ListEventsRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_event_pb.ListEventsRes>;

  upsertEventSchedule(
    request: event_web_partnership_event_pb.UpdateScheduleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  deleteEventSchedule(
    request: event_web_partnership_event_pb.DeleteEventScheduleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  listEventSchedules(
    request: event_web_partnership_event_pb.ListEventScheduleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_event_pb.ListEventScheduleRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_event_pb.ListEventScheduleRes>;

}

export class EventServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createEvent(
    request: event_web_partnership_event_pb.CreateEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_event_pb.CreateEventRes>;

  updateEvent(
    request: event_web_partnership_event_pb.UpdateEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  deleteEvent(
    request: event_web_partnership_event_pb.DeleteEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  retrieveEvent(
    request: event_web_partnership_event_pb.RetrieveEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_event_pb.RetrieveEventRes>;

  listEvents(
    request: event_web_partnership_event_pb.ListEventsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_event_pb.ListEventsRes>;

  upsertEventSchedule(
    request: event_web_partnership_event_pb.UpdateScheduleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  deleteEventSchedule(
    request: event_web_partnership_event_pb.DeleteEventScheduleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  listEventSchedules(
    request: event_web_partnership_event_pb.ListEventScheduleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_event_pb.ListEventScheduleRes>;

}

