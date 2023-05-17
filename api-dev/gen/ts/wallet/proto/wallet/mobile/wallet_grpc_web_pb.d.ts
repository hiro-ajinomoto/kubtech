import * as grpcWeb from 'grpc-web';

import * as proto_wallet_mobile_wallet_pb from '../../../proto/wallet/mobile/wallet_pb';


export class WalletServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  topUp(
    request: proto_wallet_mobile_wallet_pb.TopUpReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_mobile_wallet_pb.TopUpRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_mobile_wallet_pb.TopUpRes>;

  calculateTopUpAmount(
    request: proto_wallet_mobile_wallet_pb.CalculateTopUpAmountReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_mobile_wallet_pb.CalculateTopUpAmountRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_mobile_wallet_pb.CalculateTopUpAmountRes>;

  getWalletInfo(
    request: proto_wallet_mobile_wallet_pb.GetWalletInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_mobile_wallet_pb.GetWalletInfoRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_mobile_wallet_pb.GetWalletInfoRes>;

}

export class WalletServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  topUp(
    request: proto_wallet_mobile_wallet_pb.TopUpReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_mobile_wallet_pb.TopUpRes>;

  calculateTopUpAmount(
    request: proto_wallet_mobile_wallet_pb.CalculateTopUpAmountReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_mobile_wallet_pb.CalculateTopUpAmountRes>;

  getWalletInfo(
    request: proto_wallet_mobile_wallet_pb.GetWalletInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_mobile_wallet_pb.GetWalletInfoRes>;

}

