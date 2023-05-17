import * as jspb from 'google-protobuf'

import * as proto_wallet_mobile_base_pb from '../../../proto/wallet/mobile/base_pb';


export class Transaction extends jspb.Message {
  getId(): string;
  setId(value: string): Transaction;

  getStatus(): proto_wallet_mobile_base_pb.TransactionStatus;
  setStatus(value: proto_wallet_mobile_base_pb.TransactionStatus): Transaction;

  getType(): proto_wallet_mobile_base_pb.TransactionType;
  setType(value: proto_wallet_mobile_base_pb.TransactionType): Transaction;

  getAmount(): number;
  setAmount(value: number): Transaction;

  getFee(): number;
  setFee(value: number): Transaction;

  getTime(): number;
  setTime(value: number): Transaction;

  getFund(): string;
  setFund(value: string): Transaction;

  getLastBalance(): number;
  setLastBalance(value: number): Transaction;

  getMetadata(): TransactionMetadata | undefined;
  setMetadata(value?: TransactionMetadata): Transaction;
  hasMetadata(): boolean;
  clearMetadata(): Transaction;

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
    status: proto_wallet_mobile_base_pb.TransactionStatus,
    type: proto_wallet_mobile_base_pb.TransactionType,
    amount: number,
    fee: number,
    time: number,
    fund: string,
    lastBalance: number,
    metadata?: TransactionMetadata.AsObject,
  }
}

export class TransactionMetadata extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): TransactionMetadata;

  getServiceRefId(): string;
  setServiceRefId(value: string): TransactionMetadata;

  getDescription(): string;
  setDescription(value: string): TransactionMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionMetadata): TransactionMetadata.AsObject;
  static serializeBinaryToWriter(message: TransactionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionMetadata;
  static deserializeBinaryFromReader(message: TransactionMetadata, reader: jspb.BinaryReader): TransactionMetadata;
}

export namespace TransactionMetadata {
  export type AsObject = {
    serviceName: string,
    serviceRefId: string,
    description: string,
  }
}

export class GetTransactionsHistoryReq extends jspb.Message {
  getPagination(): proto_wallet_mobile_base_pb.PaginationReq | undefined;
  setPagination(value?: proto_wallet_mobile_base_pb.PaginationReq): GetTransactionsHistoryReq;
  hasPagination(): boolean;
  clearPagination(): GetTransactionsHistoryReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsHistoryReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsHistoryReq): GetTransactionsHistoryReq.AsObject;
  static serializeBinaryToWriter(message: GetTransactionsHistoryReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsHistoryReq;
  static deserializeBinaryFromReader(message: GetTransactionsHistoryReq, reader: jspb.BinaryReader): GetTransactionsHistoryReq;
}

export namespace GetTransactionsHistoryReq {
  export type AsObject = {
    pagination?: proto_wallet_mobile_base_pb.PaginationReq.AsObject,
  }
}

export class GetTransactionInfoReq extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): GetTransactionInfoReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionInfoReq): GetTransactionInfoReq.AsObject;
  static serializeBinaryToWriter(message: GetTransactionInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionInfoReq;
  static deserializeBinaryFromReader(message: GetTransactionInfoReq, reader: jspb.BinaryReader): GetTransactionInfoReq;
}

export namespace GetTransactionInfoReq {
  export type AsObject = {
    transactionId: string,
  }
}

export class GetTransactionsHistoryRes extends jspb.Message {
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): GetTransactionsHistoryRes;
  clearTransactionsList(): GetTransactionsHistoryRes;
  addTransactions(value?: Transaction, index?: number): Transaction;

  getPagination(): proto_wallet_mobile_base_pb.PaginationRes | undefined;
  setPagination(value?: proto_wallet_mobile_base_pb.PaginationRes): GetTransactionsHistoryRes;
  hasPagination(): boolean;
  clearPagination(): GetTransactionsHistoryRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsHistoryRes): GetTransactionsHistoryRes.AsObject;
  static serializeBinaryToWriter(message: GetTransactionsHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsHistoryRes;
  static deserializeBinaryFromReader(message: GetTransactionsHistoryRes, reader: jspb.BinaryReader): GetTransactionsHistoryRes;
}

export namespace GetTransactionsHistoryRes {
  export type AsObject = {
    transactionsList: Array<Transaction.AsObject>,
    pagination?: proto_wallet_mobile_base_pb.PaginationRes.AsObject,
  }
}

export class GetTransactionInfoRes extends jspb.Message {
  getTransaction(): Transaction | undefined;
  setTransaction(value?: Transaction): GetTransactionInfoRes;
  hasTransaction(): boolean;
  clearTransaction(): GetTransactionInfoRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionInfoRes): GetTransactionInfoRes.AsObject;
  static serializeBinaryToWriter(message: GetTransactionInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionInfoRes;
  static deserializeBinaryFromReader(message: GetTransactionInfoRes, reader: jspb.BinaryReader): GetTransactionInfoRes;
}

export namespace GetTransactionInfoRes {
  export type AsObject = {
    transaction?: Transaction.AsObject,
  }
}

