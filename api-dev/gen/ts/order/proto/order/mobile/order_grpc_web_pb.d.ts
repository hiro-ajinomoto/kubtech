import * as grpcWeb from 'grpc-web';

import * as proto_order_mobile_order_pb from '../../../proto/order/mobile/order_pb';


export class OrderServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkout(
    request: proto_order_mobile_order_pb.CheckoutReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.CheckoutRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.CheckoutRes>;

  addPaymentMethod(
    request: proto_order_mobile_order_pb.AddPaymentMethodReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.AddPaymentMethodRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.AddPaymentMethodRes>;

  addPromotions(
    request: proto_order_mobile_order_pb.AddPromotionsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.AddPromotionsRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.AddPromotionsRes>;

  addShippingAddress(
    request: proto_order_mobile_order_pb.AddShippingAddressReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.AddShippingAddressRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.AddShippingAddressRes>;

  addInstallment(
    request: proto_order_mobile_order_pb.AddInstallmentReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.AddInstallmentRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.AddInstallmentRes>;

  addExtraServices(
    request: proto_order_mobile_order_pb.AddExtraServicesReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.AddExtraServicesRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.AddExtraServicesRes>;

  placeOrder(
    request: proto_order_mobile_order_pb.PlaceOrderReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.PlaceOrderRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.PlaceOrderRes>;

  cancelOrder(
    request: proto_order_mobile_order_pb.CancelOrderReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.CancelOrderRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.CancelOrderRes>;

  getMyOrder(
    request: proto_order_mobile_order_pb.GetMyOrderReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.GetMyOrderRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.GetMyOrderRes>;

  getMyOrderHistory(
    request: proto_order_mobile_order_pb.GetMyOrderHistoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_order_mobile_order_pb.GetMyOrderHistoryRes) => void
  ): grpcWeb.ClientReadableStream<proto_order_mobile_order_pb.GetMyOrderHistoryRes>;

}

export class OrderServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkout(
    request: proto_order_mobile_order_pb.CheckoutReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.CheckoutRes>;

  addPaymentMethod(
    request: proto_order_mobile_order_pb.AddPaymentMethodReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.AddPaymentMethodRes>;

  addPromotions(
    request: proto_order_mobile_order_pb.AddPromotionsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.AddPromotionsRes>;

  addShippingAddress(
    request: proto_order_mobile_order_pb.AddShippingAddressReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.AddShippingAddressRes>;

  addInstallment(
    request: proto_order_mobile_order_pb.AddInstallmentReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.AddInstallmentRes>;

  addExtraServices(
    request: proto_order_mobile_order_pb.AddExtraServicesReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.AddExtraServicesRes>;

  placeOrder(
    request: proto_order_mobile_order_pb.PlaceOrderReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.PlaceOrderRes>;

  cancelOrder(
    request: proto_order_mobile_order_pb.CancelOrderReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.CancelOrderRes>;

  getMyOrder(
    request: proto_order_mobile_order_pb.GetMyOrderReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.GetMyOrderRes>;

  getMyOrderHistory(
    request: proto_order_mobile_order_pb.GetMyOrderHistoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_order_mobile_order_pb.GetMyOrderHistoryRes>;

}

