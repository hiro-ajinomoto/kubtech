import * as grpcWeb from 'grpc-web';

import * as event_mobile_event_location_pb from '../../event/mobile/event_location_pb';


export class EventLocationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveEventLocation(
    request: event_mobile_event_location_pb.RetrieveEventLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_event_location_pb.RetrieveEventLocationRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_event_location_pb.RetrieveEventLocationRes>;

  listEventLocation(
    request: event_mobile_event_location_pb.ListEventLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_event_location_pb.EventLocationListRes) => void
  ): grpcWeb.ClientReadableStream<event_mobile_event_location_pb.EventLocationListRes>;

}

export class EventLocationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveEventLocation(
    request: event_mobile_event_location_pb.RetrieveEventLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_event_location_pb.RetrieveEventLocationRes>;

  listEventLocation(
    request: event_mobile_event_location_pb.ListEventLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_mobile_event_location_pb.EventLocationListRes>;

}

