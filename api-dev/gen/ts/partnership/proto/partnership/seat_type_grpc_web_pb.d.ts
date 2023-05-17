import * as grpcWeb from 'grpc-web';

import * as proto_partnership_seat_type_pb from '../../proto/partnership/seat_type_pb';
import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class SeatTypeServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveSeatType(
    request: proto_partnership_seat_type_pb.RetrieveSeatTypeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_type_pb.RetrieveSeatTypeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_type_pb.RetrieveSeatTypeRes>;

  listSeatType(
    request: proto_partnership_seat_type_pb.ListSeatTypeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_type_pb.ListSeatTypeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_type_pb.ListSeatTypeRes>;

  createSeatType(
    request: proto_partnership_seat_type_pb.CreateSeatTypeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_type_pb.CreateSeatTypeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_type_pb.CreateSeatTypeRes>;

  updateSeatType(
    request: proto_partnership_seat_type_pb.UpdateSeatTypeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  deleteSeatType(
    request: proto_partnership_seat_type_pb.DeleteSeatTypeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

}

export class SeatTypeServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveSeatType(
    request: proto_partnership_seat_type_pb.RetrieveSeatTypeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_type_pb.RetrieveSeatTypeRes>;

  listSeatType(
    request: proto_partnership_seat_type_pb.ListSeatTypeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_type_pb.ListSeatTypeRes>;

  createSeatType(
    request: proto_partnership_seat_type_pb.CreateSeatTypeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_type_pb.CreateSeatTypeRes>;

  updateSeatType(
    request: proto_partnership_seat_type_pb.UpdateSeatTypeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  deleteSeatType(
    request: proto_partnership_seat_type_pb.DeleteSeatTypeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

}

