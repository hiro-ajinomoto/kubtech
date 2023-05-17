/**
 * @fileoverview gRPC-Web generated client stub for order.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: order/mobile/order.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var order_mobile_base_pb = require('../../order/mobile/base_pb.js')

var base_base_pb = require('../../base/base_pb.js')
const proto = {};
proto.order = {};
proto.order.mobile = require('./order_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.order.mobile.OrderServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.order.mobile.OrderServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.CheckoutReq,
 *   !proto.order.mobile.CheckoutRes>}
 */
const methodDescriptor_OrderService_Checkout = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/Checkout',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.CheckoutReq,
  proto.order.mobile.CheckoutRes,
  /**
   * @param {!proto.order.mobile.CheckoutReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.CheckoutRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.CheckoutReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.CheckoutRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.CheckoutRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.checkout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/Checkout',
      request,
      metadata || {},
      methodDescriptor_OrderService_Checkout,
      callback);
};


/**
 * @param {!proto.order.mobile.CheckoutReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.CheckoutRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.checkout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/Checkout',
      request,
      metadata || {},
      methodDescriptor_OrderService_Checkout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.AddPaymentMethodReq,
 *   !proto.order.mobile.AddPaymentMethodRes>}
 */
const methodDescriptor_OrderService_AddPaymentMethod = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/AddPaymentMethod',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.AddPaymentMethodReq,
  proto.order.mobile.AddPaymentMethodRes,
  /**
   * @param {!proto.order.mobile.AddPaymentMethodReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.AddPaymentMethodRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.AddPaymentMethodReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.AddPaymentMethodRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.AddPaymentMethodRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.addPaymentMethod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/AddPaymentMethod',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddPaymentMethod,
      callback);
};


/**
 * @param {!proto.order.mobile.AddPaymentMethodReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.AddPaymentMethodRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.addPaymentMethod =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/AddPaymentMethod',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddPaymentMethod);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.AddPromotionsReq,
 *   !proto.order.mobile.AddPromotionsRes>}
 */
const methodDescriptor_OrderService_AddPromotions = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/AddPromotions',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.AddPromotionsReq,
  proto.order.mobile.AddPromotionsRes,
  /**
   * @param {!proto.order.mobile.AddPromotionsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.AddPromotionsRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.AddPromotionsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.AddPromotionsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.AddPromotionsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.addPromotions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/AddPromotions',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddPromotions,
      callback);
};


/**
 * @param {!proto.order.mobile.AddPromotionsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.AddPromotionsRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.addPromotions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/AddPromotions',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddPromotions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.AddShippingAddressReq,
 *   !proto.order.mobile.AddShippingAddressRes>}
 */
const methodDescriptor_OrderService_AddShippingAddress = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/AddShippingAddress',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.AddShippingAddressReq,
  proto.order.mobile.AddShippingAddressRes,
  /**
   * @param {!proto.order.mobile.AddShippingAddressReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.AddShippingAddressRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.AddShippingAddressReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.AddShippingAddressRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.AddShippingAddressRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.addShippingAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/AddShippingAddress',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddShippingAddress,
      callback);
};


/**
 * @param {!proto.order.mobile.AddShippingAddressReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.AddShippingAddressRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.addShippingAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/AddShippingAddress',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddShippingAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.AddInstallmentReq,
 *   !proto.order.mobile.AddInstallmentRes>}
 */
const methodDescriptor_OrderService_AddInstallment = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/AddInstallment',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.AddInstallmentReq,
  proto.order.mobile.AddInstallmentRes,
  /**
   * @param {!proto.order.mobile.AddInstallmentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.AddInstallmentRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.AddInstallmentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.AddInstallmentRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.AddInstallmentRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.addInstallment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/AddInstallment',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddInstallment,
      callback);
};


/**
 * @param {!proto.order.mobile.AddInstallmentReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.AddInstallmentRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.addInstallment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/AddInstallment',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddInstallment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.AddExtraServicesReq,
 *   !proto.order.mobile.AddExtraServicesRes>}
 */
const methodDescriptor_OrderService_AddExtraServices = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/AddExtraServices',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.AddExtraServicesReq,
  proto.order.mobile.AddExtraServicesRes,
  /**
   * @param {!proto.order.mobile.AddExtraServicesReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.AddExtraServicesRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.AddExtraServicesReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.AddExtraServicesRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.AddExtraServicesRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.addExtraServices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/AddExtraServices',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddExtraServices,
      callback);
};


/**
 * @param {!proto.order.mobile.AddExtraServicesReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.AddExtraServicesRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.addExtraServices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/AddExtraServices',
      request,
      metadata || {},
      methodDescriptor_OrderService_AddExtraServices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.PlaceOrderReq,
 *   !proto.order.mobile.PlaceOrderRes>}
 */
const methodDescriptor_OrderService_PlaceOrder = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/PlaceOrder',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.PlaceOrderReq,
  proto.order.mobile.PlaceOrderRes,
  /**
   * @param {!proto.order.mobile.PlaceOrderReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.PlaceOrderRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.PlaceOrderReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.PlaceOrderRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.PlaceOrderRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.placeOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/PlaceOrder',
      request,
      metadata || {},
      methodDescriptor_OrderService_PlaceOrder,
      callback);
};


/**
 * @param {!proto.order.mobile.PlaceOrderReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.PlaceOrderRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.placeOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/PlaceOrder',
      request,
      metadata || {},
      methodDescriptor_OrderService_PlaceOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.CancelOrderReq,
 *   !proto.order.mobile.CancelOrderRes>}
 */
const methodDescriptor_OrderService_CancelOrder = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/CancelOrder',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.CancelOrderReq,
  proto.order.mobile.CancelOrderRes,
  /**
   * @param {!proto.order.mobile.CancelOrderReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.CancelOrderRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.CancelOrderReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.CancelOrderRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.CancelOrderRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.cancelOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/CancelOrder',
      request,
      metadata || {},
      methodDescriptor_OrderService_CancelOrder,
      callback);
};


/**
 * @param {!proto.order.mobile.CancelOrderReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.CancelOrderRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.cancelOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/CancelOrder',
      request,
      metadata || {},
      methodDescriptor_OrderService_CancelOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.GetMyOrderReq,
 *   !proto.order.mobile.GetMyOrderRes>}
 */
const methodDescriptor_OrderService_GetMyOrder = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/GetMyOrder',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.GetMyOrderReq,
  proto.order.mobile.GetMyOrderRes,
  /**
   * @param {!proto.order.mobile.GetMyOrderReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.GetMyOrderRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.GetMyOrderReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.GetMyOrderRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.GetMyOrderRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.getMyOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/GetMyOrder',
      request,
      metadata || {},
      methodDescriptor_OrderService_GetMyOrder,
      callback);
};


/**
 * @param {!proto.order.mobile.GetMyOrderReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.GetMyOrderRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.getMyOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/GetMyOrder',
      request,
      metadata || {},
      methodDescriptor_OrderService_GetMyOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.GetMyOrderHistoryReq,
 *   !proto.order.mobile.GetMyOrderHistoryRes>}
 */
const methodDescriptor_OrderService_GetMyOrderHistory = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/GetMyOrderHistory',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.GetMyOrderHistoryReq,
  proto.order.mobile.GetMyOrderHistoryRes,
  /**
   * @param {!proto.order.mobile.GetMyOrderHistoryReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.GetMyOrderHistoryRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.GetMyOrderHistoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.GetMyOrderHistoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.GetMyOrderHistoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.getMyOrderHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/GetMyOrderHistory',
      request,
      metadata || {},
      methodDescriptor_OrderService_GetMyOrderHistory,
      callback);
};


/**
 * @param {!proto.order.mobile.GetMyOrderHistoryReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.GetMyOrderHistoryRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.getMyOrderHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/GetMyOrderHistory',
      request,
      metadata || {},
      methodDescriptor_OrderService_GetMyOrderHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.order.mobile.GetMyOrderTicketsReq,
 *   !proto.order.mobile.GetMyOrderTicketsRes>}
 */
const methodDescriptor_OrderService_GetMyOrderTickets = new grpc.web.MethodDescriptor(
  '/order.mobile.OrderService/GetMyOrderTickets',
  grpc.web.MethodType.UNARY,
  proto.order.mobile.GetMyOrderTicketsReq,
  proto.order.mobile.GetMyOrderTicketsRes,
  /**
   * @param {!proto.order.mobile.GetMyOrderTicketsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.order.mobile.GetMyOrderTicketsRes.deserializeBinary
);


/**
 * @param {!proto.order.mobile.GetMyOrderTicketsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.order.mobile.GetMyOrderTicketsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.order.mobile.GetMyOrderTicketsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.order.mobile.OrderServiceClient.prototype.getMyOrderTickets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/order.mobile.OrderService/GetMyOrderTickets',
      request,
      metadata || {},
      methodDescriptor_OrderService_GetMyOrderTickets,
      callback);
};


/**
 * @param {!proto.order.mobile.GetMyOrderTicketsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.order.mobile.GetMyOrderTicketsRes>}
 *     Promise that resolves to the response
 */
proto.order.mobile.OrderServicePromiseClient.prototype.getMyOrderTickets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/order.mobile.OrderService/GetMyOrderTickets',
      request,
      metadata || {},
      methodDescriptor_OrderService_GetMyOrderTickets);
};


module.exports = proto.order.mobile;

