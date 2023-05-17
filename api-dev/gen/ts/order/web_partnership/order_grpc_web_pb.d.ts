import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as order_web_partnership_order_pb from '../../order/web_partnership/order_pb';


export class OrderServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  exportTickets(
    request: order_web_partnership_order_pb.ExportTicketsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

}

export class OrderServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  exportTickets(
    request: order_web_partnership_order_pb.ExportTicketsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

}

