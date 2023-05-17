import * as grpcWeb from 'grpc-web';

import * as proto_partnership_voucher_pb from '../../proto/partnership/voucher_pb';
import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class VoucherServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createVoucher(
    request: proto_partnership_voucher_pb.CreateVoucherReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_voucher_pb.CreateVoucherRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_voucher_pb.CreateVoucherRes>;

  updateVoucher(
    request: proto_partnership_voucher_pb.UpdateVoucherReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  deleteVoucher(
    request: proto_partnership_voucher_pb.DeleteVoucherReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  retrieveVoucher(
    request: proto_partnership_voucher_pb.RetrieveVoucherReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_voucher_pb.RetrieveVoucherRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_voucher_pb.RetrieveVoucherRes>;

  listVoucher(
    request: proto_partnership_voucher_pb.ListVoucherReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_voucher_pb.ListVoucherRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_voucher_pb.ListVoucherRes>;

  internalListVoucherByIds(
    request: proto_partnership_voucher_pb.InternalListVoucherByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_voucher_pb.InternalListVoucherByIdsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_voucher_pb.InternalListVoucherByIdsRes>;

}

export class VoucherServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createVoucher(
    request: proto_partnership_voucher_pb.CreateVoucherReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_voucher_pb.CreateVoucherRes>;

  updateVoucher(
    request: proto_partnership_voucher_pb.UpdateVoucherReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  deleteVoucher(
    request: proto_partnership_voucher_pb.DeleteVoucherReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  retrieveVoucher(
    request: proto_partnership_voucher_pb.RetrieveVoucherReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_voucher_pb.RetrieveVoucherRes>;

  listVoucher(
    request: proto_partnership_voucher_pb.ListVoucherReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_voucher_pb.ListVoucherRes>;

  internalListVoucherByIds(
    request: proto_partnership_voucher_pb.InternalListVoucherByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_voucher_pb.InternalListVoucherByIdsRes>;

}

