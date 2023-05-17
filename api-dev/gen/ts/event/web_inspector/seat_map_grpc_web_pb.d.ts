import * as grpcWeb from 'grpc-web';

import * as event_web_inspector_seat_map_pb from '../../event/web_inspector/seat_map_pb';


export class SeatMapServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveSeatMap(
    request: event_web_inspector_seat_map_pb.RetrieveSeatMapReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_inspector_seat_map_pb.RetrieveSeatMapRes) => void
  ): grpcWeb.ClientReadableStream<event_web_inspector_seat_map_pb.RetrieveSeatMapRes>;

}

export class SeatMapServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveSeatMap(
    request: event_web_inspector_seat_map_pb.RetrieveSeatMapReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_inspector_seat_map_pb.RetrieveSeatMapRes>;

}

