import * as grpcWeb from 'grpc-web';

import * as order_mobile_cart_pb from '../../order/mobile/cart_pb';


export class CartServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addProductToCart(
    request: order_mobile_cart_pb.AddProductToCartReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_cart_pb.AddProductToCartRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_cart_pb.AddProductToCartRes>;

  updateMyCart(
    request: order_mobile_cart_pb.UpdateMyCartReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_cart_pb.UpdateMyCartRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_cart_pb.UpdateMyCartRes>;

  removeProductFromCart(
    request: order_mobile_cart_pb.RemoveProductFromCartReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_cart_pb.RemoveProductFromCartRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_cart_pb.RemoveProductFromCartRes>;

  getMyCart(
    request: order_mobile_cart_pb.GetMyCartReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_cart_pb.GetMyCartRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_cart_pb.GetMyCartRes>;

}

export class CartServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addProductToCart(
    request: order_mobile_cart_pb.AddProductToCartReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_cart_pb.AddProductToCartRes>;

  updateMyCart(
    request: order_mobile_cart_pb.UpdateMyCartReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_cart_pb.UpdateMyCartRes>;

  removeProductFromCart(
    request: order_mobile_cart_pb.RemoveProductFromCartReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_cart_pb.RemoveProductFromCartRes>;

  getMyCart(
    request: order_mobile_cart_pb.GetMyCartReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_cart_pb.GetMyCartRes>;

}

