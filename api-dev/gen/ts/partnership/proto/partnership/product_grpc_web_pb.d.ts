import * as grpcWeb from 'grpc-web';

import * as proto_partnership_product_pb from '../../proto/partnership/product_pb';
import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class ProductServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProduct(
    request: proto_partnership_product_pb.CreateProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_product_pb.CreateProductRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_product_pb.CreateProductRes>;

  updateProduct(
    request: proto_partnership_product_pb.UpdateProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  deleteProduct(
    request: proto_partnership_product_pb.DeleteProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  retrieveProduct(
    request: proto_partnership_product_pb.RetrieveProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_product_pb.RetrieveProductRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_product_pb.RetrieveProductRes>;

  publicRetrieveProduct(
    request: proto_partnership_product_pb.PublicRetrieveProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_product_pb.PublicRetrieveProductRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_product_pb.PublicRetrieveProductRes>;

  publicListProduct(
    request: proto_partnership_product_pb.PublicListProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_product_pb.PublicListProductRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_product_pb.PublicListProductRes>;

  internalListProductByIds(
    request: proto_partnership_product_pb.InternalListProductByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_product_pb.InternalListProductByIdsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_product_pb.InternalListProductByIdsRes>;

}

export class ProductServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProduct(
    request: proto_partnership_product_pb.CreateProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_product_pb.CreateProductRes>;

  updateProduct(
    request: proto_partnership_product_pb.UpdateProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  deleteProduct(
    request: proto_partnership_product_pb.DeleteProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  retrieveProduct(
    request: proto_partnership_product_pb.RetrieveProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_product_pb.RetrieveProductRes>;

  publicRetrieveProduct(
    request: proto_partnership_product_pb.PublicRetrieveProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_product_pb.PublicRetrieveProductRes>;

  publicListProduct(
    request: proto_partnership_product_pb.PublicListProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_product_pb.PublicListProductRes>;

  internalListProductByIds(
    request: proto_partnership_product_pb.InternalListProductByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_product_pb.InternalListProductByIdsRes>;

}

