import * as grpcWeb from 'grpc-web';

import * as proto_partnership_news_pb from '../../proto/partnership/news_pb';
import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class NewsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createNews(
    request: proto_partnership_news_pb.CreateNewsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_news_pb.CreateNewsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_news_pb.CreateNewsRes>;

  updateNews(
    request: proto_partnership_news_pb.UpdateNewsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  deleteNews(
    request: proto_partnership_news_pb.DeleteNewsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  retrieveNews(
    request: proto_partnership_news_pb.RetrieveNewsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_news_pb.RetrieveNewsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_news_pb.RetrieveNewsRes>;

  listNews(
    request: proto_partnership_news_pb.ListNewsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_news_pb.ListNewsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_news_pb.ListNewsRes>;

  publicRetrieveNews(
    request: proto_partnership_news_pb.PublicRetrieveNewsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_news_pb.RetrieveNewsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_news_pb.RetrieveNewsRes>;

  publicListNews(
    request: proto_partnership_news_pb.PublicListNewsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_news_pb.PublicListNewsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_news_pb.PublicListNewsRes>;

}

export class NewsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createNews(
    request: proto_partnership_news_pb.CreateNewsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_news_pb.CreateNewsRes>;

  updateNews(
    request: proto_partnership_news_pb.UpdateNewsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  deleteNews(
    request: proto_partnership_news_pb.DeleteNewsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  retrieveNews(
    request: proto_partnership_news_pb.RetrieveNewsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_news_pb.RetrieveNewsRes>;

  listNews(
    request: proto_partnership_news_pb.ListNewsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_news_pb.ListNewsRes>;

  publicRetrieveNews(
    request: proto_partnership_news_pb.PublicRetrieveNewsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_news_pb.RetrieveNewsRes>;

  publicListNews(
    request: proto_partnership_news_pb.PublicListNewsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_news_pb.PublicListNewsRes>;

}

