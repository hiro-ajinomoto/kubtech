import * as grpcWeb from 'grpc-web';

import * as event_mobile_event_pb from '../../event/mobile/event_pb';


export class EventServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publicRetrieveEvent(
    request: event_mobile_event_pb.PublicRetrieveEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.PublicRetrieveEventRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_event_pb.PublicRetrieveEventRes>;

  publicListEvents(
    request: event_mobile_event_pb.PublicListEventsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.PublicListEventsRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_event_pb.PublicListEventsRes>;

  listEventSchedules(
    request: event_mobile_event_pb.ListEventScheduleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.ListEventScheduleRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_event_pb.ListEventScheduleRes>;

}

export class EventServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publicRetrieveEvent(
    request: event_mobile_event_pb.PublicRetrieveEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_event_pb.PublicRetrieveEventRes>;

  publicListEvents(
    request: event_mobile_event_pb.PublicListEventsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_event_pb.PublicListEventsRes>;

  listEventSchedules(
    request: event_mobile_event_pb.ListEventScheduleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_event_pb.ListEventScheduleRes>;

}

