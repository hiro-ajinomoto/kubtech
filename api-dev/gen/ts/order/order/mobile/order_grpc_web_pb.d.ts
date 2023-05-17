import * as grpcWeb from 'grpc-web';

import * as order_mobile_order_pb from '../../order/mobile/order_pb';


export class OrderServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkout(
    request: order_mobile_order_pb.CheckoutReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.CheckoutRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.CheckoutRes>;

  addPaymentMethod(
    request: order_mobile_order_pb.AddPaymentMethodReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.AddPaymentMethodRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.AddPaymentMethodRes>;

  addPromotions(
    request: order_mobile_order_pb.AddPromotionsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.AddPromotionsRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.AddPromotionsRes>;

  addShippingAddress(
    request: order_mobile_order_pb.AddShippingAddressReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.AddShippingAddressRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.AddShippingAddressRes>;

  addInstallment(
    request: order_mobile_order_pb.AddInstallmentReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.AddInstallmentRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.AddInstallmentRes>;

  addExtraServices(
    request: order_mobile_order_pb.AddExtraServicesReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.AddExtraServicesRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.AddExtraServicesRes>;

  placeOrder(
    request: order_mobile_order_pb.PlaceOrderReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.PlaceOrderRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.PlaceOrderRes>;

  cancelOrder(
    request: order_mobile_order_pb.CancelOrderReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.CancelOrderRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.CancelOrderRes>;

  getMyOrder(
    request: order_mobile_order_pb.GetMyOrderReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.GetMyOrderRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.GetMyOrderRes>;

  getMyOrderHistory(
    request: order_mobile_order_pb.GetMyOrderHistoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.GetMyOrderHistoryRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.GetMyOrderHistoryRes>;

  getMyOrderTickets(
    request: order_mobile_order_pb.GetMyOrderTicketsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: order_mobile_order_pb.GetMyOrderTicketsRes) => void
  ): grpcWeb.ClientReadableStream<order_mobile_order_pb.GetMyOrderTicketsRes>;

}

export class OrderServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkout(
    request: order_mobile_order_pb.CheckoutReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.CheckoutRes>;

  addPaymentMethod(
    request: order_mobile_order_pb.AddPaymentMethodReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.AddPaymentMethodRes>;

  addPromotions(
    request: order_mobile_order_pb.AddPromotionsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.AddPromotionsRes>;

  addShippingAddress(
    request: order_mobile_order_pb.AddShippingAddressReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.AddShippingAddressRes>;

  addInstallment(
    request: order_mobile_order_pb.AddInstallmentReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.AddInstallmentRes>;

  addExtraServices(
    request: order_mobile_order_pb.AddExtraServicesReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.AddExtraServicesRes>;

  placeOrder(
    request: order_mobile_order_pb.PlaceOrderReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.PlaceOrderRes>;

  cancelOrder(
    request: order_mobile_order_pb.CancelOrderReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.CancelOrderRes>;

  getMyOrder(
    request: order_mobile_order_pb.GetMyOrderReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.GetMyOrderRes>;

  getMyOrderHistory(
    request: order_mobile_order_pb.GetMyOrderHistoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.GetMyOrderHistoryRes>;

  getMyOrderTickets(
    request: order_mobile_order_pb.GetMyOrderTicketsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<order_mobile_order_pb.GetMyOrderTicketsRes>;

}

