import * as grpcWeb from 'grpc-web';

import * as product_backend_product_pb from '../../product/backend/product_pb';
import * as product_backend_base_pb from '../../product/backend/base_pb';


export class ProductServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listProductByIds(
    request: product_backend_product_pb.ListProductByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_product_pb.ListProductByIdsRes) => void
  ): grpcWeb.ClientReadableStream<product_backend_product_pb.ListProductByIdsRes>;

  checkQuantity(
    request: product_backend_product_pb.CheckQuantityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_backend_base_pb.Empty>;

  getAvailableQuantity(
    request: product_backend_product_pb.GetAvailableQuantityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_product_pb.GetAvailableQuantityRes) => void
  ): grpcWeb.ClientReadableStream<product_backend_product_pb.GetAvailableQuantityRes>;

  checkAndLockQuantity(
    request: product_backend_product_pb.CheckAndLockQuantityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_backend_base_pb.Empty>;

  unlockQuantity(
    request: product_backend_product_pb.UnlockQuantityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_backend_base_pb.Empty>;

  unlockAndUpdateQuantity(
    request: product_backend_product_pb.UnlockAndUpdateQuantityReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_backend_base_pb.Empty>;

  internalGenerateProductByEventSeat(
    request: product_backend_product_pb.GenerateProductByEventSeatReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<product_backend_base_pb.Empty>;

}

export class ProductServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listProductByIds(
    request: product_backend_product_pb.ListProductByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_product_pb.ListProductByIdsRes>;

  checkQuantity(
    request: product_backend_product_pb.CheckQuantityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_base_pb.Empty>;

  getAvailableQuantity(
    request: product_backend_product_pb.GetAvailableQuantityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_product_pb.GetAvailableQuantityRes>;

  checkAndLockQuantity(
    request: product_backend_product_pb.CheckAndLockQuantityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_base_pb.Empty>;

  unlockQuantity(
    request: product_backend_product_pb.UnlockQuantityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_base_pb.Empty>;

  unlockAndUpdateQuantity(
    request: product_backend_product_pb.UnlockAndUpdateQuantityReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_base_pb.Empty>;

  internalGenerateProductByEventSeat(
    request: product_backend_product_pb.GenerateProductByEventSeatReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_base_pb.Empty>;

}

