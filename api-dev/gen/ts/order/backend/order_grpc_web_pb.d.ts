import * as grpcWeb from 'grpc-web';

import * as order_backend_order_pb from '../../order/backend/order_pb';


export class OrderServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOrderByIds(
    request: order_backend_order_pb.GetOrderByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_backend_order_pb.GetOrderByIdsRes) => void
  ): grpcWeb.ClientReadableStream<order_backend_order_pb.GetOrderByIdsRes>;

  expireOrders(
    request: order_backend_order_pb.ExpireOrdersReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_backend_order_pb.ExpireOrdersRes) => void
  ): grpcWeb.ClientReadableStream<order_backend_order_pb.ExpireOrdersRes>;

}

export class OrderServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOrderByIds(
    request: order_backend_order_pb.GetOrderByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_backend_order_pb.GetOrderByIdsRes>;

  expireOrders(
    request: order_backend_order_pb.ExpireOrdersReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_backend_order_pb.ExpireOrdersRes>;

}

