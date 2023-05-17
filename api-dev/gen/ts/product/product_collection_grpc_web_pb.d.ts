import * as grpcWeb from 'grpc-web';

import * as product_product_collection_pb from '../product/product_collection_pb';


export class ProductCollectionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMyProductCollection(
    request: product_product_collection_pb.GetMyProductCollectionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_collection_pb.GetMyProductCollectionRes) => void
  ): grpcWeb.ClientReadableStream<product_product_collection_pb.GetMyProductCollectionRes>;

  getMyProductCollectionByOrderId(
    request: product_product_collection_pb.GetMyProductCollectionByOrderIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_collection_pb.GetMyProductCollectionByOrderIdRes) => void
  ): grpcWeb.ClientReadableStream<product_product_collection_pb.GetMyProductCollectionByOrderIdRes>;

  listMyProductCollections(
    request: product_product_collection_pb.ListMyProductCollectionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_collection_pb.ListMyProductCollectionsRes) => void
  ): grpcWeb.ClientReadableStream<product_product_collection_pb.ListMyProductCollectionsRes>;

  internalCheckProductCollection(
    request: product_product_collection_pb.InternalCheckProductCollectionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_collection_pb.InternalCheckProductCollectionRes) => void
  ): grpcWeb.ClientReadableStream<product_product_collection_pb.InternalCheckProductCollectionRes>;

  internalCheckProductIsBought(
    request: product_product_collection_pb.InternalCheckProductIsBoughtReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_collection_pb.InternalCheckProductIsBoughtRes) => void
  ): grpcWeb.ClientReadableStream<product_product_collection_pb.InternalCheckProductIsBoughtRes>;

}

export class ProductCollectionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMyProductCollection(
    request: product_product_collection_pb.GetMyProductCollectionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_collection_pb.GetMyProductCollectionRes>;

  getMyProductCollectionByOrderId(
    request: product_product_collection_pb.GetMyProductCollectionByOrderIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_collection_pb.GetMyProductCollectionByOrderIdRes>;

  listMyProductCollections(
    request: product_product_collection_pb.ListMyProductCollectionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_collection_pb.ListMyProductCollectionsRes>;

  internalCheckProductCollection(
    request: product_product_collection_pb.InternalCheckProductCollectionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_collection_pb.InternalCheckProductCollectionRes>;

  internalCheckProductIsBought(
    request: product_product_collection_pb.InternalCheckProductIsBoughtReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_collection_pb.InternalCheckProductIsBoughtRes>;

}

