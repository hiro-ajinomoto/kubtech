import * as grpcWeb from 'grpc-web';

import * as proto_wallet_backend_wallet_pb from '../../../proto/wallet/backend/wallet_pb';


export class WalletServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  canPay(
    request: proto_wallet_backend_wallet_pb.CanPayReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_backend_wallet_pb.CanPayRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_backend_wallet_pb.CanPayRes>;

  pay(
    request: proto_wallet_backend_wallet_pb.PayReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_backend_wallet_pb.PayRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_backend_wallet_pb.PayRes>;

  getWalletBalance(
    request: proto_wallet_backend_wallet_pb.GetWalletBalanceReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_backend_wallet_pb.GetWalletBalanceRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_backend_wallet_pb.GetWalletBalanceRes>;

}

export class WalletServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  canPay(
    request: proto_wallet_backend_wallet_pb.CanPayReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_backend_wallet_pb.CanPayRes>;

  pay(
    request: proto_wallet_backend_wallet_pb.PayReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_backend_wallet_pb.PayRes>;

  getWalletBalance(
    request: proto_wallet_backend_wallet_pb.GetWalletBalanceReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_backend_wallet_pb.GetWalletBalanceRes>;

}

