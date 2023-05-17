import * as grpcWeb from 'grpc-web';

import * as product_mobile_product_delivery_pb from '../../product/mobile/product_delivery_pb';


export class ProductDeliveryServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMyProductDelivery(
    request: product_mobile_product_delivery_pb.GetMyProductDeliveryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_product_delivery_pb.GetMyProductDeliveryRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_product_delivery_pb.GetMyProductDeliveryRes>;

  getMyProductDeliveryByOrderId(
    request: product_mobile_product_delivery_pb.GetMyProductDeliveryByOrderIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_product_delivery_pb.GetMyProductDeliveryByOrderIdRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_product_delivery_pb.GetMyProductDeliveryByOrderIdRes>;

  listMyProductDeliveries(
    request: product_mobile_product_delivery_pb.ListMyProductDeliveriesReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_mobile_product_delivery_pb.ListMyProductDeliveriesRes) => void
  ): grpcWeb.ClientReadableStream<product_mobile_product_delivery_pb.ListMyProductDeliveriesRes>;

}

export class ProductDeliveryServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMyProductDelivery(
    request: product_mobile_product_delivery_pb.GetMyProductDeliveryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_product_delivery_pb.GetMyProductDeliveryRes>;

  getMyProductDeliveryByOrderId(
    request: product_mobile_product_delivery_pb.GetMyProductDeliveryByOrderIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_product_delivery_pb.GetMyProductDeliveryByOrderIdRes>;

  listMyProductDeliveries(
    request: product_mobile_product_delivery_pb.ListMyProductDeliveriesReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_mobile_product_delivery_pb.ListMyProductDeliveriesRes>;

}

