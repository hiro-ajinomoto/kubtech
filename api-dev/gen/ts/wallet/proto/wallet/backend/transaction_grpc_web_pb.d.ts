import * as grpcWeb from 'grpc-web';

import * as proto_wallet_backend_transaction_pb from '../../../proto/wallet/backend/transaction_pb';


export class TransactionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  expireTransactions(
    request: proto_wallet_backend_transaction_pb.ExpireTransactionsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_wallet_backend_transaction_pb.ExpireTransactionsRes) => void
  ): grpcWeb.ClientReadableStream<proto_wallet_backend_transaction_pb.ExpireTransactionsRes>;

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  expireTransactions(
    request: proto_wallet_backend_transaction_pb.ExpireTransactionsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_wallet_backend_transaction_pb.ExpireTransactionsRes>;

}

