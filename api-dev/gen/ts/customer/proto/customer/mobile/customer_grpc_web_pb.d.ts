import * as grpcWeb from 'grpc-web';

import * as proto_customer_mobile_customer_pb from '../../../proto/customer/mobile/customer_pb';
import * as proto_customer_mobile_base_pb from '../../../proto/customer/mobile/base_pb';


export class CustomerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_customer_mobile_customer_pb.GetMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_customer_pb.GetMeRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_customer_pb.GetMeRes>;

  updateMe(
    request: proto_customer_mobile_customer_pb.UpdateMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  changePassword(
    request: proto_customer_mobile_customer_pb.ChangePasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  deleteUser(
    request: proto_customer_mobile_customer_pb.DeleteUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.Empty>;

  getUserById(
    request: proto_customer_mobile_customer_pb.GetUserByIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_customer_pb.GetUserByIdRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_customer_pb.GetUserByIdRes>;

  getUser(
    request: proto_customer_mobile_customer_pb.GetUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_customer_pb.GetUserRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_customer_pb.GetUserRes>;

  getListUserByIds(
    request: proto_customer_mobile_customer_pb.GetListUserByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_customer_pb.GetListUserByIdsRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_customer_pb.GetListUserByIdsRes>;

  getListUser(
    request: proto_customer_mobile_customer_pb.GetListUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_customer_pb.GetListUserRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_customer_pb.GetListUserRes>;

  checkAlreadyExistEmail(
    request: proto_customer_mobile_customer_pb.CheckAlreadyExistEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.DefaultRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.DefaultRes>;

  checkAlreadyExistPhone(
    request: proto_customer_mobile_customer_pb.CheckAlreadyExistPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_customer_mobile_base_pb.DefaultRes) => void
  ): grpcWeb.ClientReadableStream<proto_customer_mobile_base_pb.DefaultRes>;

}

export class CustomerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_customer_mobile_customer_pb.GetMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_customer_pb.GetMeRes>;

  updateMe(
    request: proto_customer_mobile_customer_pb.UpdateMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  changePassword(
    request: proto_customer_mobile_customer_pb.ChangePasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  deleteUser(
    request: proto_customer_mobile_customer_pb.DeleteUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.Empty>;

  getUserById(
    request: proto_customer_mobile_customer_pb.GetUserByIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_customer_pb.GetUserByIdRes>;

  getUser(
    request: proto_customer_mobile_customer_pb.GetUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_customer_pb.GetUserRes>;

  getListUserByIds(
    request: proto_customer_mobile_customer_pb.GetListUserByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_customer_pb.GetListUserByIdsRes>;

  getListUser(
    request: proto_customer_mobile_customer_pb.GetListUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_customer_pb.GetListUserRes>;

  checkAlreadyExistEmail(
    request: proto_customer_mobile_customer_pb.CheckAlreadyExistEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.DefaultRes>;

  checkAlreadyExistPhone(
    request: proto_customer_mobile_customer_pb.CheckAlreadyExistPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_customer_mobile_base_pb.DefaultRes>;

}

