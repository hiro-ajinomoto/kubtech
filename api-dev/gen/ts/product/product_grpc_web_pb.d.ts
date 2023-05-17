import * as grpcWeb from 'grpc-web';

import * as product_product_pb from '../product/product_pb';
import * as product_base_pb from '../product/base_pb';


export class ProductServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProduct(
    request: product_product_pb.CreateProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_pb.CreateProductRes) => void
  ): grpcWeb.ClientReadableStream<product_product_pb.CreateProductRes>;

  updateProduct(
    request: product_product_pb.UpdateProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_base_pb.Empty>;

  deleteProduct(
    request: product_product_pb.DeleteProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_base_pb.Empty>;

  retrieveProduct(
    request: product_product_pb.RetrieveProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_pb.RetrieveProductRes) => void
  ): grpcWeb.ClientReadableStream<product_product_pb.RetrieveProductRes>;

  publicRetrieveProduct(
    request: product_product_pb.PublicRetrieveProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_pb.PublicRetrieveProductRes) => void
  ): grpcWeb.ClientReadableStream<product_product_pb.PublicRetrieveProductRes>;

  publicListProduct(
    request: product_product_pb.PublicListProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_pb.PublicListProductRes) => void
  ): grpcWeb.ClientReadableStream<product_product_pb.PublicListProductRes>;

  internalListProductByIds(
    request: product_product_pb.InternalListProductByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_product_pb.InternalListProductByIdsRes) => void
  ): grpcWeb.ClientReadableStream<product_product_pb.InternalListProductByIdsRes>;

}

export class ProductServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProduct(
    request: product_product_pb.CreateProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_pb.CreateProductRes>;

  updateProduct(
    request: product_product_pb.UpdateProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_base_pb.Empty>;

  deleteProduct(
    request: product_product_pb.DeleteProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_base_pb.Empty>;

  retrieveProduct(
    request: product_product_pb.RetrieveProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_pb.RetrieveProductRes>;

  publicRetrieveProduct(
    request: product_product_pb.PublicRetrieveProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_pb.PublicRetrieveProductRes>;

  publicListProduct(
    request: product_product_pb.PublicListProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_pb.PublicListProductRes>;

  internalListProductByIds(
    request: product_product_pb.InternalListProductByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_product_pb.InternalListProductByIdsRes>;

}

