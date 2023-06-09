/**
 * @fileoverview gRPC-Web generated client stub for product
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: product/product_collection.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var product_base_pb = require('../product/base_pb.js')
const proto = {};
proto.product = require('./product_collection_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.product.ProductCollectionServiceClient =
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
proto.product.ProductCollectionServicePromiseClient =
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
 *   !proto.product.GetMyProductCollectionReq,
 *   !proto.product.GetMyProductCollectionRes>}
 */
const methodDescriptor_ProductCollectionService_GetMyProductCollection = new grpc.web.MethodDescriptor(
  '/product.ProductCollectionService/GetMyProductCollection',
  grpc.web.MethodType.UNARY,
  proto.product.GetMyProductCollectionReq,
  proto.product.GetMyProductCollectionRes,
  /**
   * @param {!proto.product.GetMyProductCollectionReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.GetMyProductCollectionRes.deserializeBinary
);


/**
 * @param {!proto.product.GetMyProductCollectionReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.GetMyProductCollectionRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.GetMyProductCollectionRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductCollectionServiceClient.prototype.getMyProductCollection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductCollectionService/GetMyProductCollection',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_GetMyProductCollection,
      callback);
};


/**
 * @param {!proto.product.GetMyProductCollectionReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.GetMyProductCollectionRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductCollectionServicePromiseClient.prototype.getMyProductCollection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductCollectionService/GetMyProductCollection',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_GetMyProductCollection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.GetMyProductCollectionByOrderIdReq,
 *   !proto.product.GetMyProductCollectionByOrderIdRes>}
 */
const methodDescriptor_ProductCollectionService_GetMyProductCollectionByOrderId = new grpc.web.MethodDescriptor(
  '/product.ProductCollectionService/GetMyProductCollectionByOrderId',
  grpc.web.MethodType.UNARY,
  proto.product.GetMyProductCollectionByOrderIdReq,
  proto.product.GetMyProductCollectionByOrderIdRes,
  /**
   * @param {!proto.product.GetMyProductCollectionByOrderIdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.GetMyProductCollectionByOrderIdRes.deserializeBinary
);


/**
 * @param {!proto.product.GetMyProductCollectionByOrderIdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.GetMyProductCollectionByOrderIdRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.GetMyProductCollectionByOrderIdRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductCollectionServiceClient.prototype.getMyProductCollectionByOrderId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductCollectionService/GetMyProductCollectionByOrderId',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_GetMyProductCollectionByOrderId,
      callback);
};


/**
 * @param {!proto.product.GetMyProductCollectionByOrderIdReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.GetMyProductCollectionByOrderIdRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductCollectionServicePromiseClient.prototype.getMyProductCollectionByOrderId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductCollectionService/GetMyProductCollectionByOrderId',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_GetMyProductCollectionByOrderId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.ListMyProductCollectionReq,
 *   !proto.product.ListMyProductCollectionsRes>}
 */
const methodDescriptor_ProductCollectionService_ListMyProductCollections = new grpc.web.MethodDescriptor(
  '/product.ProductCollectionService/ListMyProductCollections',
  grpc.web.MethodType.UNARY,
  proto.product.ListMyProductCollectionReq,
  proto.product.ListMyProductCollectionsRes,
  /**
   * @param {!proto.product.ListMyProductCollectionReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.ListMyProductCollectionsRes.deserializeBinary
);


/**
 * @param {!proto.product.ListMyProductCollectionReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.ListMyProductCollectionsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.ListMyProductCollectionsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductCollectionServiceClient.prototype.listMyProductCollections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductCollectionService/ListMyProductCollections',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_ListMyProductCollections,
      callback);
};


/**
 * @param {!proto.product.ListMyProductCollectionReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.ListMyProductCollectionsRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductCollectionServicePromiseClient.prototype.listMyProductCollections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductCollectionService/ListMyProductCollections',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_ListMyProductCollections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.InternalCheckProductCollectionReq,
 *   !proto.product.InternalCheckProductCollectionRes>}
 */
const methodDescriptor_ProductCollectionService_InternalCheckProductCollection = new grpc.web.MethodDescriptor(
  '/product.ProductCollectionService/InternalCheckProductCollection',
  grpc.web.MethodType.UNARY,
  proto.product.InternalCheckProductCollectionReq,
  proto.product.InternalCheckProductCollectionRes,
  /**
   * @param {!proto.product.InternalCheckProductCollectionReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.InternalCheckProductCollectionRes.deserializeBinary
);


/**
 * @param {!proto.product.InternalCheckProductCollectionReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.InternalCheckProductCollectionRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.InternalCheckProductCollectionRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductCollectionServiceClient.prototype.internalCheckProductCollection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductCollectionService/InternalCheckProductCollection',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_InternalCheckProductCollection,
      callback);
};


/**
 * @param {!proto.product.InternalCheckProductCollectionReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.InternalCheckProductCollectionRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductCollectionServicePromiseClient.prototype.internalCheckProductCollection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductCollectionService/InternalCheckProductCollection',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_InternalCheckProductCollection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.InternalCheckProductIsBoughtReq,
 *   !proto.product.InternalCheckProductIsBoughtRes>}
 */
const methodDescriptor_ProductCollectionService_InternalCheckProductIsBought = new grpc.web.MethodDescriptor(
  '/product.ProductCollectionService/InternalCheckProductIsBought',
  grpc.web.MethodType.UNARY,
  proto.product.InternalCheckProductIsBoughtReq,
  proto.product.InternalCheckProductIsBoughtRes,
  /**
   * @param {!proto.product.InternalCheckProductIsBoughtReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.InternalCheckProductIsBoughtRes.deserializeBinary
);


/**
 * @param {!proto.product.InternalCheckProductIsBoughtReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.InternalCheckProductIsBoughtRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.InternalCheckProductIsBoughtRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductCollectionServiceClient.prototype.internalCheckProductIsBought =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductCollectionService/InternalCheckProductIsBought',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_InternalCheckProductIsBought,
      callback);
};


/**
 * @param {!proto.product.InternalCheckProductIsBoughtReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.InternalCheckProductIsBoughtRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductCollectionServicePromiseClient.prototype.internalCheckProductIsBought =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductCollectionService/InternalCheckProductIsBought',
      request,
      metadata || {},
      methodDescriptor_ProductCollectionService_InternalCheckProductIsBought);
};


module.exports = proto.product;

