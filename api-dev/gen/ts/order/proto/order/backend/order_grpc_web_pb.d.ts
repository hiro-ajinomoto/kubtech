import * as grpcWeb from 'grpc-web';

import * as proto_order_backend_order_pb from '../../../proto/order/backend/order_pb';


export class OrderServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOrderByIds(
    request: proto_order_backend_order_pb.GetOrderByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_backend_order_pb.GetOrderByIdsRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_backend_order_pb.GetOrderByIdsRes>;

  expireOrders(
    request: proto_order_backend_order_pb.ExpireOrdersReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_backend_order_pb.ExpireOrdersRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_backend_order_pb.ExpireOrdersRes>;

}

export class OrderServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOrderByIds(
    request: proto_order_backend_order_pb.GetOrderByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_backend_order_pb.GetOrderByIdsRes>;

  expireOrders(
    request: proto_order_backend_order_pb.ExpireOrdersReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_backend_order_pb.ExpireOrdersRes>;

}

