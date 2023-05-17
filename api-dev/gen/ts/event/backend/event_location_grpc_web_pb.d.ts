import * as grpcWeb from 'grpc-web';

import * as event_backend_event_location_pb from '../../event/backend/event_location_pb';


export class EventLocationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveEventLocationById(
    request: event_backend_event_location_pb.RetrieveEventLocationByIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_event_location_pb.RetrieveEventLocationByIdRes) => void
  ): grpcWeb.ClientReadableStream<event_backend_event_location_pb.RetrieveEventLocationByIdRes>;

}

export class EventLocationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveEventLocationById(
    request: event_backend_event_location_pb.RetrieveEventLocationByIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_backend_event_location_pb.RetrieveEventLocationByIdRes>;

}

