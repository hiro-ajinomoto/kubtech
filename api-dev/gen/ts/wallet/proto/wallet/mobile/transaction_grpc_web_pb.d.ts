import * as grpcWeb from 'grpc-web';

import * as proto_wallet_mobile_transaction_pb from '../../../proto/wallet/mobile/transaction_pb';


export class TransactionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTransactionsHistory(
    request: proto_wallet_mobile_transaction_pb.GetTransactionsHistoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_mobile_transaction_pb.GetTransactionsHistoryRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_mobile_transaction_pb.GetTransactionsHistoryRes>;

  getTransactionInfo(
    request: proto_wallet_mobile_transaction_pb.GetTransactionInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_mobile_transaction_pb.GetTransactionInfoRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_mobile_transaction_pb.GetTransactionInfoRes>;

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTransactionsHistory(
    request: proto_wallet_mobile_transaction_pb.GetTransactionsHistoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_mobile_transaction_pb.GetTransactionsHistoryRes>;

  getTransactionInfo(
    request: proto_wallet_mobile_transaction_pb.GetTransactionInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_mobile_transaction_pb.GetTransactionInfoRes>;

}

