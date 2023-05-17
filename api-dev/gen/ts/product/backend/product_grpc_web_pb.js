/**
 * @fileoverview gRPC-Web generated client stub for product.backend
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: product/backend/product.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var product_backend_base_pb = require('../../product/backend/base_pb.js')

var product_base_pb = require('../../product/base_pb.js')
const proto = {};
proto.product = {};
proto.product.backend = require('./product_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.product.backend.ProductServiceClient =
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
proto.product.backend.ProductServicePromiseClient =
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
 *   !proto.product.backend.ListProductByIdsReq,
 *   !proto.product.backend.ListProductByIdsRes>}
 */
const methodDescriptor_ProductService_ListProductByIds = new grpc.web.MethodDescriptor(
  '/product.backend.ProductService/ListProductByIds',
  grpc.web.MethodType.UNARY,
  proto.product.backend.ListProductByIdsReq,
  proto.product.backend.ListProductByIdsRes,
  /**
   * @param {!proto.product.backend.ListProductByIdsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.backend.ListProductByIdsRes.deserializeBinary
);


/**
 * @param {!proto.product.backend.ListProductByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.ListProductByIdsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.ListProductByIdsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.ProductServiceClient.prototype.listProductByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.ProductService/ListProductByIds',
      request,
      metadata || {},
      methodDescriptor_ProductService_ListProductByIds,
      callback);
};


/**
 * @param {!proto.product.backend.ListProductByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.ListProductByIdsRes>}
 *     Promise that resolves to the response
 */
proto.product.backend.ProductServicePromiseClient.prototype.listProductByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.ProductService/ListProductByIds',
      request,
      metadata || {},
      methodDescriptor_ProductService_ListProductByIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.backend.CheckQuantityReq,
 *   !proto.product.backend.Empty>}
 */
const methodDescriptor_ProductService_CheckQuantity = new grpc.web.MethodDescriptor(
  '/product.backend.ProductService/CheckQuantity',
  grpc.web.MethodType.UNARY,
  proto.product.backend.CheckQuantityReq,
  product_backend_base_pb.Empty,
  /**
   * @param {!proto.product.backend.CheckQuantityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  product_backend_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.product.backend.CheckQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.ProductServiceClient.prototype.checkQuantity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.ProductService/CheckQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_CheckQuantity,
      callback);
};


/**
 * @param {!proto.product.backend.CheckQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.Empty>}
 *     Promise that resolves to the response
 */
proto.product.backend.ProductServicePromiseClient.prototype.checkQuantity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.ProductService/CheckQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_CheckQuantity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.backend.GetAvailableQuantityReq,
 *   !proto.product.backend.GetAvailableQuantityRes>}
 */
const methodDescriptor_ProductService_GetAvailableQuantity = new grpc.web.MethodDescriptor(
  '/product.backend.ProductService/GetAvailableQuantity',
  grpc.web.MethodType.UNARY,
  proto.product.backend.GetAvailableQuantityReq,
  proto.product.backend.GetAvailableQuantityRes,
  /**
   * @param {!proto.product.backend.GetAvailableQuantityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.backend.GetAvailableQuantityRes.deserializeBinary
);


/**
 * @param {!proto.product.backend.GetAvailableQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.GetAvailableQuantityRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.GetAvailableQuantityRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.ProductServiceClient.prototype.getAvailableQuantity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.ProductService/GetAvailableQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetAvailableQuantity,
      callback);
};


/**
 * @param {!proto.product.backend.GetAvailableQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.GetAvailableQuantityRes>}
 *     Promise that resolves to the response
 */
proto.product.backend.ProductServicePromiseClient.prototype.getAvailableQuantity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.ProductService/GetAvailableQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetAvailableQuantity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.backend.CheckAndLockQuantityReq,
 *   !proto.product.backend.Empty>}
 */
const methodDescriptor_ProductService_CheckAndLockQuantity = new grpc.web.MethodDescriptor(
  '/product.backend.ProductService/CheckAndLockQuantity',
  grpc.web.MethodType.UNARY,
  proto.product.backend.CheckAndLockQuantityReq,
  product_backend_base_pb.Empty,
  /**
   * @param {!proto.product.backend.CheckAndLockQuantityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  product_backend_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.product.backend.CheckAndLockQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.ProductServiceClient.prototype.checkAndLockQuantity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.ProductService/CheckAndLockQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_CheckAndLockQuantity,
      callback);
};


/**
 * @param {!proto.product.backend.CheckAndLockQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.Empty>}
 *     Promise that resolves to the response
 */
proto.product.backend.ProductServicePromiseClient.prototype.checkAndLockQuantity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.ProductService/CheckAndLockQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_CheckAndLockQuantity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.backend.UnlockQuantityReq,
 *   !proto.product.backend.Empty>}
 */
const methodDescriptor_ProductService_UnlockQuantity = new grpc.web.MethodDescriptor(
  '/product.backend.ProductService/UnlockQuantity',
  grpc.web.MethodType.UNARY,
  proto.product.backend.UnlockQuantityReq,
  product_backend_base_pb.Empty,
  /**
   * @param {!proto.product.backend.UnlockQuantityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  product_backend_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.product.backend.UnlockQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.ProductServiceClient.prototype.unlockQuantity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.ProductService/UnlockQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_UnlockQuantity,
      callback);
};


/**
 * @param {!proto.product.backend.UnlockQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.Empty>}
 *     Promise that resolves to the response
 */
proto.product.backend.ProductServicePromiseClient.prototype.unlockQuantity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.ProductService/UnlockQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_UnlockQuantity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.backend.UnlockAndUpdateQuantityReq,
 *   !proto.product.backend.Empty>}
 */
const methodDescriptor_ProductService_UnlockAndUpdateQuantity = new grpc.web.MethodDescriptor(
  '/product.backend.ProductService/UnlockAndUpdateQuantity',
  grpc.web.MethodType.UNARY,
  proto.product.backend.UnlockAndUpdateQuantityReq,
  product_backend_base_pb.Empty,
  /**
   * @param {!proto.product.backend.UnlockAndUpdateQuantityReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  product_backend_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.product.backend.UnlockAndUpdateQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.ProductServiceClient.prototype.unlockAndUpdateQuantity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.ProductService/UnlockAndUpdateQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_UnlockAndUpdateQuantity,
      callback);
};


/**
 * @param {!proto.product.backend.UnlockAndUpdateQuantityReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.Empty>}
 *     Promise that resolves to the response
 */
proto.product.backend.ProductServicePromiseClient.prototype.unlockAndUpdateQuantity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.ProductService/UnlockAndUpdateQuantity',
      request,
      metadata || {},
      methodDescriptor_ProductService_UnlockAndUpdateQuantity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.backend.GenerateProductByEventSeatReq,
 *   !proto.product.backend.Empty>}
 */
const methodDescriptor_ProductService_InternalGenerateProductByEventSeat = new grpc.web.MethodDescriptor(
  '/product.backend.ProductService/InternalGenerateProductByEventSeat',
  grpc.web.MethodType.UNARY,
  proto.product.backend.GenerateProductByEventSeatReq,
  product_backend_base_pb.Empty,
  /**
   * @param {!proto.product.backend.GenerateProductByEventSeatReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  product_backend_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.product.backend.GenerateProductByEventSeatReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.ProductServiceClient.prototype.internalGenerateProductByEventSeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.ProductService/InternalGenerateProductByEventSeat',
      request,
      metadata || {},
      methodDescriptor_ProductService_InternalGenerateProductByEventSeat,
      callback);
};


/**
 * @param {!proto.product.backend.GenerateProductByEventSeatReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.Empty>}
 *     Promise that resolves to the response
 */
proto.product.backend.ProductServicePromiseClient.prototype.internalGenerateProductByEventSeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.ProductService/InternalGenerateProductByEventSeat',
      request,
      metadata || {},
      methodDescriptor_ProductService_InternalGenerateProductByEventSeat);
};


module.exports = proto.product.backend;

