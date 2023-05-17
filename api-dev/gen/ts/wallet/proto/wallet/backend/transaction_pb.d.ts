import * as jspb from 'google-protobuf'

import * as proto_wallet_backend_base_pb from '../../../proto/wallet/backend/base_pb';


export class Transaction extends jspb.Message {
  getId(): string;
  setId(value: string): Transaction;

  getStatus(): proto_wallet_backend_base_pb.TransactionStatus;
  setStatus(value: proto_wallet_backend_base_pb.TransactionStatus): Transaction;

  getType(): proto_wallet_backend_base_pb.TransactionType;
  setType(value: proto_wallet_backend_base_pb.TransactionType): Transaction;

  getAmount(): number;
  setAmount(value: number): Transaction;

  getFee(): number;
  setFee(value: number): Transaction;

  getTime(): number;
  setTime(value: number): Transaction;

  getFund(): string;
  setFund(value: string): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: string,
    status: proto_wallet_backend_base_pb.TransactionStatus,
    type: proto_wallet_backend_base_pb.TransactionType,
    amount: number,
    fee: number,
    time: number,
    fund: string,
  }
}

export class ExpireTransactionsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpireTransactionsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExpireTransactionsReq): ExpireTransactionsReq.AsObject;
  static serializeBinaryToWriter(message: ExpireTransactionsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpireTransactionsReq;
  static deserializeBinaryFromReader(message: ExpireTransactionsReq, reader: jspb.BinaryReader): ExpireTransactionsReq;
}

export namespace ExpireTransactionsReq {
  export type AsObject = {
  }
}

export class ExpireTransactionsRes extends jspb.Message {
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): ExpireTransactionsRes;
  clearTransactionsList(): ExpireTransactionsRes;
  addTransactions(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpireTransactionsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExpireTransactionsRes): ExpireTransactionsRes.AsObject;
  static serializeBinaryToWriter(message: ExpireTransactionsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpireTransactionsRes;
  static deserializeBinaryFromReader(message: ExpireTransactionsRes, reader: jspb.BinaryReader): ExpireTransactionsRes;
}

export namespace ExpireTransactionsRes {
  export type AsObject = {
    transactionsList: Array<Transaction.AsObject>,
  }
}

