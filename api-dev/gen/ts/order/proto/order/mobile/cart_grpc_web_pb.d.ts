import * as grpcWeb from 'grpc-web';

import * as proto_order_mobile_cart_pb from '../../../proto/order/mobile/cart_pb';


export class CartServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addProductToCart(
    request: proto_order_mobile_cart_pb.AddProductToCartReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_cart_pb.AddProductToCartRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_cart_pb.AddProductToCartRes>;

  removeProductFromCart(
    request: proto_order_mobile_cart_pb.RemoveProductFromCartReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_cart_pb.RemoveProductFromCartRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_cart_pb.RemoveProductFromCartRes>;

  getMyCart(
    request: proto_order_mobile_cart_pb.GetMyCartReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_cart_pb.GetMyCartRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_cart_pb.GetMyCartRes>;

}

export class CartServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addProductToCart(
    request: proto_order_mobile_cart_pb.AddProductToCartReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_cart_pb.AddProductToCartRes>;

  removeProductFromCart(
    request: proto_order_mobile_cart_pb.RemoveProductFromCartReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_cart_pb.RemoveProductFromCartRes>;

  getMyCart(
    request: proto_order_mobile_cart_pb.GetMyCartReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_cart_pb.GetMyCartRes>;

}

