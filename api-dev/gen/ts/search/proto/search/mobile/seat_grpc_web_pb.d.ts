import * as grpcWeb from 'grpc-web';

import * as proto_search_mobile_seat_pb from '../../../proto/search/mobile/seat_pb';


export class SeatServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSeats(
    request: proto_search_mobile_seat_pb.GetSeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_search_mobile_seat_pb.GetSeatsRes) => void
  ): grpcWeb.ClientReadableStream<proto_search_mobile_seat_pb.GetSeatsRes>;

}

export class SeatServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSeats(
    request: proto_search_mobile_seat_pb.GetSeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_search_mobile_seat_pb.GetSeatsRes>;

}

