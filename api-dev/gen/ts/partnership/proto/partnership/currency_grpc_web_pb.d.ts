import * as grpcWeb from 'grpc-web';

import * as proto_partnership_currency_pb from '../../proto/partnership/currency_pb';
import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class CurrencyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createCurrency(
    request: proto_partnership_currency_pb.CreateCurrencyReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_currency_pb.CreateCurrencyRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_currency_pb.CreateCurrencyRes>;

  updateCurrency(
    request: proto_partnership_currency_pb.UpdateCurrencyReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  deleteCurrency(
    request: proto_partnership_currency_pb.DeleteCurrencyReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  retrieveCurrency(
    request: proto_partnership_currency_pb.RetrieveCurrencyReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_currency_pb.RetrieveCurrencyRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_currency_pb.RetrieveCurrencyRes>;

  listCurrency(
    request: proto_partnership_currency_pb.ListCurrencyReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_currency_pb.ListCurrencyRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_currency_pb.ListCurrencyRes>;

  internalRetrieveCurrency(
    request: proto_partnership_currency_pb.InternalRetrieveCurrencyReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_currency_pb.InternalRetrieveCurrencyRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_currency_pb.InternalRetrieveCurrencyRes>;

}

export class CurrencyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createCurrency(
    request: proto_partnership_currency_pb.CreateCurrencyReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_currency_pb.CreateCurrencyRes>;

  updateCurrency(
    request: proto_partnership_currency_pb.UpdateCurrencyReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  deleteCurrency(
    request: proto_partnership_currency_pb.DeleteCurrencyReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  retrieveCurrency(
    request: proto_partnership_currency_pb.RetrieveCurrencyReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_currency_pb.RetrieveCurrencyRes>;

  listCurrency(
    request: proto_partnership_currency_pb.ListCurrencyReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_currency_pb.ListCurrencyRes>;

  internalRetrieveCurrency(
    request: proto_partnership_currency_pb.InternalRetrieveCurrencyReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_currency_pb.InternalRetrieveCurrencyRes>;

}

