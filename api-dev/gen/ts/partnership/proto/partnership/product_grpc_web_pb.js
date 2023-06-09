/**
 * @fileoverview gRPC-Web generated client stub for partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/partnership/product.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_partnership_base_pb = require('../../proto/partnership/base_pb.js')
const proto = {};
proto.partnership = require('./product_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.partnership.ProductServiceClient =
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
proto.partnership.ProductServicePromiseClient =
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
 *   !proto.partnership.CreateProductReq,
 *   !proto.partnership.CreateProductRes>}
 */
const methodDescriptor_ProductService_CreateProduct = new grpc.web.MethodDescriptor(
  '/partnership.ProductService/CreateProduct',
  grpc.web.MethodType.UNARY,
  proto.partnership.CreateProductReq,
  proto.partnership.CreateProductRes,
  /**
   * @param {!proto.partnership.CreateProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.CreateProductRes.deserializeBinary
);


/**
 * @param {!proto.partnership.CreateProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.CreateProductRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.CreateProductRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.ProductServiceClient.prototype.createProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.ProductService/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_CreateProduct,
      callback);
};


/**
 * @param {!proto.partnership.CreateProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.CreateProductRes>}
 *     Promise that resolves to the response
 */
proto.partnership.ProductServicePromiseClient.prototype.createProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.ProductService/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_CreateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.UpdateProductReq,
 *   !proto.partnership.Empty>}
 */
const methodDescriptor_ProductService_UpdateProduct = new grpc.web.MethodDescriptor(
  '/partnership.ProductService/UpdateProduct',
  grpc.web.MethodType.UNARY,
  proto.partnership.UpdateProductReq,
  proto_partnership_base_pb.Empty,
  /**
   * @param {!proto.partnership.UpdateProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.partnership.UpdateProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.ProductServiceClient.prototype.updateProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.ProductService/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_UpdateProduct,
      callback);
};


/**
 * @param {!proto.partnership.UpdateProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.partnership.ProductServicePromiseClient.prototype.updateProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.ProductService/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_UpdateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.DeleteProductReq,
 *   !proto.partnership.Empty>}
 */
const methodDescriptor_ProductService_DeleteProduct = new grpc.web.MethodDescriptor(
  '/partnership.ProductService/DeleteProduct',
  grpc.web.MethodType.UNARY,
  proto.partnership.DeleteProductReq,
  proto_partnership_base_pb.Empty,
  /**
   * @param {!proto.partnership.DeleteProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.partnership.DeleteProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.ProductServiceClient.prototype.deleteProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.ProductService/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_DeleteProduct,
      callback);
};


/**
 * @param {!proto.partnership.DeleteProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.partnership.ProductServicePromiseClient.prototype.deleteProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.ProductService/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_DeleteProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.RetrieveProductReq,
 *   !proto.partnership.RetrieveProductRes>}
 */
const methodDescriptor_ProductService_RetrieveProduct = new grpc.web.MethodDescriptor(
  '/partnership.ProductService/RetrieveProduct',
  grpc.web.MethodType.UNARY,
  proto.partnership.RetrieveProductReq,
  proto.partnership.RetrieveProductRes,
  /**
   * @param {!proto.partnership.RetrieveProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.RetrieveProductRes.deserializeBinary
);


/**
 * @param {!proto.partnership.RetrieveProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.RetrieveProductRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.RetrieveProductRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.ProductServiceClient.prototype.retrieveProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.ProductService/RetrieveProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_RetrieveProduct,
      callback);
};


/**
 * @param {!proto.partnership.RetrieveProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.RetrieveProductRes>}
 *     Promise that resolves to the response
 */
proto.partnership.ProductServicePromiseClient.prototype.retrieveProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.ProductService/RetrieveProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_RetrieveProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.PublicRetrieveProductReq,
 *   !proto.partnership.PublicRetrieveProductRes>}
 */
const methodDescriptor_ProductService_PublicRetrieveProduct = new grpc.web.MethodDescriptor(
  '/partnership.ProductService/PublicRetrieveProduct',
  grpc.web.MethodType.UNARY,
  proto.partnership.PublicRetrieveProductReq,
  proto.partnership.PublicRetrieveProductRes,
  /**
   * @param {!proto.partnership.PublicRetrieveProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.PublicRetrieveProductRes.deserializeBinary
);


/**
 * @param {!proto.partnership.PublicRetrieveProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.PublicRetrieveProductRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.PublicRetrieveProductRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.ProductServiceClient.prototype.publicRetrieveProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.ProductService/PublicRetrieveProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_PublicRetrieveProduct,
      callback);
};


/**
 * @param {!proto.partnership.PublicRetrieveProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.PublicRetrieveProductRes>}
 *     Promise that resolves to the response
 */
proto.partnership.ProductServicePromiseClient.prototype.publicRetrieveProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.ProductService/PublicRetrieveProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_PublicRetrieveProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.PublicListProductReq,
 *   !proto.partnership.PublicListProductRes>}
 */
const methodDescriptor_ProductService_PublicListProduct = new grpc.web.MethodDescriptor(
  '/partnership.ProductService/PublicListProduct',
  grpc.web.MethodType.UNARY,
  proto.partnership.PublicListProductReq,
  proto.partnership.PublicListProductRes,
  /**
   * @param {!proto.partnership.PublicListProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.PublicListProductRes.deserializeBinary
);


/**
 * @param {!proto.partnership.PublicListProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.PublicListProductRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.PublicListProductRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.ProductServiceClient.prototype.publicListProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.ProductService/PublicListProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_PublicListProduct,
      callback);
};


/**
 * @param {!proto.partnership.PublicListProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.PublicListProductRes>}
 *     Promise that resolves to the response
 */
proto.partnership.ProductServicePromiseClient.prototype.publicListProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.ProductService/PublicListProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_PublicListProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.InternalListProductByIdsReq,
 *   !proto.partnership.InternalListProductByIdsRes>}
 */
const methodDescriptor_ProductService_InternalListProductByIds = new grpc.web.MethodDescriptor(
  '/partnership.ProductService/InternalListProductByIds',
  grpc.web.MethodType.UNARY,
  proto.partnership.InternalListProductByIdsReq,
  proto.partnership.InternalListProductByIdsRes,
  /**
   * @param {!proto.partnership.InternalListProductByIdsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.InternalListProductByIdsRes.deserializeBinary
);


/**
 * @param {!proto.partnership.InternalListProductByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.InternalListProductByIdsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.InternalListProductByIdsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.ProductServiceClient.prototype.internalListProductByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.ProductService/InternalListProductByIds',
      request,
      metadata || {},
      methodDescriptor_ProductService_InternalListProductByIds,
      callback);
};


/**
 * @param {!proto.partnership.InternalListProductByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.InternalListProductByIdsRes>}
 *     Promise that resolves to the response
 */
proto.partnership.ProductServicePromiseClient.prototype.internalListProductByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.ProductService/InternalListProductByIds',
      request,
      metadata || {},
      methodDescriptor_ProductService_InternalListProductByIds);
};


module.exports = proto.partnership;

