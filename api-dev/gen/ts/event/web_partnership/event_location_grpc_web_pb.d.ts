import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as event_web_partnership_event_location_pb from '../../event/web_partnership/event_location_pb';


export class EventLocationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createEventLocation(
    request: event_web_partnership_event_location_pb.CreateEventLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_event_location_pb.CreateEventLocationRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_event_location_pb.CreateEventLocationRes>;

  updateEventLocation(
    request: event_web_partnership_event_location_pb.UpdateEventLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  deleteEventLocation(
    request: event_web_partnership_event_location_pb.DeleteEventLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  retrieveEventLocation(
    request: event_web_partnership_event_location_pb.RetrieveEventLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_event_location_pb.RetrieveEventLocationRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_event_location_pb.RetrieveEventLocationRes>;

  listEventLocation(
    request: event_web_partnership_event_location_pb.ListEventLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_event_location_pb.EventLocationListRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_event_location_pb.EventLocationListRes>;

}

export class EventLocationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createEventLocation(
    request: event_web_partnership_event_location_pb.CreateEventLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_event_location_pb.CreateEventLocationRes>;

  updateEventLocation(
    request: event_web_partnership_event_location_pb.UpdateEventLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  deleteEventLocation(
    request: event_web_partnership_event_location_pb.DeleteEventLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  retrieveEventLocation(
    request: event_web_partnership_event_location_pb.RetrieveEventLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_event_location_pb.RetrieveEventLocationRes>;

  listEventLocation(
    request: event_web_partnership_event_location_pb.ListEventLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_event_location_pb.EventLocationListRes>;

}

