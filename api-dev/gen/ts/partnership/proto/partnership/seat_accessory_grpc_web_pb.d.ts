import * as grpcWeb from 'grpc-web';

import * as proto_partnership_seat_accessory_pb from '../../proto/partnership/seat_accessory_pb';
import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class SeatAccessoryServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSeatAccessory(
    request: proto_partnership_seat_accessory_pb.CreateSeatAccessoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_accessory_pb.CreateSeatAccessoryRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_accessory_pb.CreateSeatAccessoryRes>;

  updateSeatAccessory(
    request: proto_partnership_seat_accessory_pb.UpdateSeatAccessoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  deleteSeatAccessory(
    request: proto_partnership_seat_accessory_pb.DeleteSeatAccessoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  retrieveSeatAccessory(
    request: proto_partnership_seat_accessory_pb.RetrieveSeatAccessoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_accessory_pb.RetrieveSeatAccessoryRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_accessory_pb.RetrieveSeatAccessoryRes>;

  listSeatAccessory(
    request: proto_partnership_seat_accessory_pb.ListSeatAccessoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_seat_accessory_pb.ListSeatAccessoryRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_seat_accessory_pb.ListSeatAccessoryRes>;

}

export class SeatAccessoryServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSeatAccessory(
    request: proto_partnership_seat_accessory_pb.CreateSeatAccessoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_accessory_pb.CreateSeatAccessoryRes>;

  updateSeatAccessory(
    request: proto_partnership_seat_accessory_pb.UpdateSeatAccessoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  deleteSeatAccessory(
    request: proto_partnership_seat_accessory_pb.DeleteSeatAccessoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  retrieveSeatAccessory(
    request: proto_partnership_seat_accessory_pb.RetrieveSeatAccessoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_accessory_pb.RetrieveSeatAccessoryRes>;

  listSeatAccessory(
    request: proto_partnership_seat_accessory_pb.ListSeatAccessoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_seat_accessory_pb.ListSeatAccessoryRes>;

}

