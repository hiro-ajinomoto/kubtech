import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as product_web_partnership_product_pb from '../../product/web_partnership/product_pb';


export class ProductServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProduct(
    request: product_web_partnership_product_pb.CreateProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_partnership_product_pb.CreateProductRes) => void
  ): grpcWeb.ClientReadableStream<product_web_partnership_product_pb.CreateProductRes>;

  updateProduct(
    request: product_web_partnership_product_pb.UpdateProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  softDeleteProduct(
    request: product_web_partnership_product_pb.SoftDeleteProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  hardDeleteProduct(
    request: product_web_partnership_product_pb.HardDeleteProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  retrieveProduct(
    request: product_web_partnership_product_pb.RetrieveProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_partnership_product_pb.RetrieveProductRes) => void
  ): grpcWeb.ClientReadableStream<product_web_partnership_product_pb.RetrieveProductRes>;

  listProduct(
    request: product_web_partnership_product_pb.ListProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_partnership_product_pb.ListProductRes) => void
  ): grpcWeb.ClientReadableStream<product_web_partnership_product_pb.ListProductRes>;

  publicRetrieveProduct(
    request: product_web_partnership_product_pb.PublicRetrieveProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_partnership_product_pb.PublicRetrieveProductRes) => void
  ): grpcWeb.ClientReadableStream<product_web_partnership_product_pb.PublicRetrieveProductRes>;

  publicListProduct(
    request: product_web_partnership_product_pb.PublicListProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_partnership_product_pb.PublicListProductRes) => void
  ): grpcWeb.ClientReadableStream<product_web_partnership_product_pb.PublicListProductRes>;

  listProductBySeats(
    request: product_web_partnership_product_pb.ListProductBySeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_web_partnership_product_pb.ListProductRes) => void
  ): grpcWeb.ClientReadableStream<product_web_partnership_product_pb.ListProductRes>;

}

export class ProductServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProduct(
    request: product_web_partnership_product_pb.CreateProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_partnership_product_pb.CreateProductRes>;

  updateProduct(
    request: product_web_partnership_product_pb.UpdateProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  softDeleteProduct(
    request: product_web_partnership_product_pb.SoftDeleteProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  hardDeleteProduct(
    request: product_web_partnership_product_pb.HardDeleteProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  retrieveProduct(
    request: product_web_partnership_product_pb.RetrieveProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_partnership_product_pb.RetrieveProductRes>;

  listProduct(
    request: product_web_partnership_product_pb.ListProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_partnership_product_pb.ListProductRes>;

  publicRetrieveProduct(
    request: product_web_partnership_product_pb.PublicRetrieveProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_partnership_product_pb.PublicRetrieveProductRes>;

  publicListProduct(
    request: product_web_partnership_product_pb.PublicListProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_partnership_product_pb.PublicListProductRes>;

  listProductBySeats(
    request: product_web_partnership_product_pb.ListProductBySeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_web_partnership_product_pb.ListProductRes>;

}

