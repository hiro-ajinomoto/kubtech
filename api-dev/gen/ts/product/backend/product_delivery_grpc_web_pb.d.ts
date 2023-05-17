import * as grpcWeb from 'grpc-web';

import * as product_backend_product_delivery_pb from '../../product/backend/product_delivery_pb';


export class ProductDeliveryServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkProductDelivery(
    request: product_backend_product_delivery_pb.CheckProductDeliveryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: product_backend_product_delivery_pb.CheckProductDeliveryRes) => void
  ): grpcWeb.ClientReadableStream<product_backend_product_delivery_pb.CheckProductDeliveryRes>;

}

export class ProductDeliveryServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkProductDelivery(
    request: product_backend_product_delivery_pb.CheckProductDeliveryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<product_backend_product_delivery_pb.CheckProductDeliveryRes>;

}

