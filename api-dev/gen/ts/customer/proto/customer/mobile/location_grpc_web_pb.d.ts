import * as grpcWeb from 'grpc-web';

import * as proto_customer_mobile_location_pb from '../../../proto/customer/mobile/location_pb';
import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';


export class CustomerLocationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createMyLocation(
    request: proto_customer_mobile_location_pb.CreateMyLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_location_pb.CreateMyLocationRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_location_pb.CreateMyLocationRes>;

  updateMyLocation(
    request: proto_customer_mobile_location_pb.UpdateMyLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  deleteMyLocation(
    request: proto_customer_mobile_location_pb.DeleteMyLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  retrieveMyLocation(
    request: proto_customer_mobile_location_pb.RetrieveMyLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_location_pb.RetrieveMyLocationRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_location_pb.RetrieveMyLocationRes>;

  listMyLocation(
    request: proto_customer_mobile_location_pb.ListMyLocationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_location_pb.ListMyLocationRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_location_pb.ListMyLocationRes>;

}

export class CustomerLocationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createMyLocation(
    request: proto_customer_mobile_location_pb.CreateMyLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_location_pb.CreateMyLocationRes>;

  updateMyLocation(
    request: proto_customer_mobile_location_pb.UpdateMyLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  deleteMyLocation(
    request: proto_customer_mobile_location_pb.DeleteMyLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  retrieveMyLocation(
    request: proto_customer_mobile_location_pb.RetrieveMyLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_location_pb.RetrieveMyLocationRes>;

  listMyLocation(
    request: proto_customer_mobile_location_pb.ListMyLocationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_location_pb.ListMyLocationRes>;

}

