import * as grpcWeb from 'grpc-web';

import * as proto_inspector_mobile_inspector_pb from '../../../proto/inspector/mobile/inspector_pb';
import * as proto_inspector_mobile_base_pb from '../../../proto/inspector/mobile/base_pb';


export class InspectorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: proto_inspector_mobile_inspector_pb.CreateReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_mobile_base_pb.Empty>;

  getMe(
    request: proto_inspector_mobile_inspector_pb.GetMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_mobile_inspector_pb.GetMeRes) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_mobile_inspector_pb.GetMeRes>;

  changePassword(
    request: proto_inspector_mobile_inspector_pb.ChangePasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_mobile_base_pb.Empty>;

  getUser(
    request: proto_inspector_mobile_inspector_pb.GetUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_mobile_inspector_pb.GetUserRes) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_mobile_inspector_pb.GetUserRes>;

  checkAlreadyExistEmail(
    request: proto_inspector_mobile_inspector_pb.CheckAlreadyExistEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_mobile_inspector_pb.CheckAlreadyExistEmailRes) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_mobile_inspector_pb.CheckAlreadyExistEmailRes>;

}

export class InspectorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: proto_inspector_mobile_inspector_pb.CreateReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_mobile_base_pb.Empty>;

  getMe(
    request: proto_inspector_mobile_inspector_pb.GetMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_mobile_inspector_pb.GetMeRes>;

  changePassword(
    request: proto_inspector_mobile_inspector_pb.ChangePasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_mobile_base_pb.Empty>;

  getUser(
    request: proto_inspector_mobile_inspector_pb.GetUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_mobile_inspector_pb.GetUserRes>;

  checkAlreadyExistEmail(
    request: proto_inspector_mobile_inspector_pb.CheckAlreadyExistEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_mobile_inspector_pb.CheckAlreadyExistEmailRes>;

}

