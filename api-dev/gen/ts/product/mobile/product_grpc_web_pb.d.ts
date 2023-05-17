import * as grpcWeb from 'grpc-web';

import * as product_mobile_product_pb from '../../product/mobile/product_pb';


export class ProductServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveProduct(
    request: product_mobile_product_pb.RetrieveProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_product_pb.RetrieveProductRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_product_pb.RetrieveProductRes>;

  listProduct(
    request: product_mobile_product_pb.ListProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_product_pb.ListProductRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_product_pb.ListProductRes>;

  listProductBySeats(
    request: product_mobile_product_pb.ListProductBySeatsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_product_pb.ListProductRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_product_pb.ListProductRes>;

  publicRetrieveProduct(
    request: product_mobile_product_pb.PublicRetrieveProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_product_pb.PublicRetrieveProductRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_product_pb.PublicRetrieveProductRes>;

  publicListProduct(
    request: product_mobile_product_pb.PublicListProductReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_product_pb.PublicListProductRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_product_pb.PublicListProductRes>;

}

export class ProductServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveProduct(
    request: product_mobile_product_pb.RetrieveProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_product_pb.RetrieveProductRes>;

  listProduct(
    request: product_mobile_product_pb.ListProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_product_pb.ListProductRes>;

  listProductBySeats(
    request: product_mobile_product_pb.ListProductBySeatsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_product_pb.ListProductRes>;

  publicRetrieveProduct(
    request: product_mobile_product_pb.PublicRetrieveProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_product_pb.PublicRetrieveProductRes>;

  publicListProduct(
    request: product_mobile_product_pb.PublicListProductReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_product_pb.PublicListProductRes>;

}

