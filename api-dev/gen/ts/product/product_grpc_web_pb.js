/**
 * @fileoverview gRPC-Web generated client stub for product
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: product/product.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var product_base_pb = require('../product/base_pb.js')
const proto = {};
proto.product = require('./product_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.product.ProductServiceClient =
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
proto.product.ProductServicePromiseClient =
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
 *   !proto.product.CreateProductReq,
 *   !proto.product.CreateProductRes>}
 */
const methodDescriptor_ProductService_CreateProduct = new grpc.web.MethodDescriptor(
  '/product.ProductService/CreateProduct',
  grpc.web.MethodType.UNARY,
  proto.product.CreateProductReq,
  proto.product.CreateProductRes,
  /**
   * @param {!proto.product.CreateProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.CreateProductRes.deserializeBinary
);


/**
 * @param {!proto.product.CreateProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.CreateProductRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.CreateProductRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductServiceClient.prototype.createProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductService/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_CreateProduct,
      callback);
};


/**
 * @param {!proto.product.CreateProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.CreateProductRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductServicePromiseClient.prototype.createProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductService/CreateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_CreateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.UpdateProductReq,
 *   !proto.product.Empty>}
 */
const methodDescriptor_ProductService_UpdateProduct = new grpc.web.MethodDescriptor(
  '/product.ProductService/UpdateProduct',
  grpc.web.MethodType.UNARY,
  proto.product.UpdateProductReq,
  product_base_pb.Empty,
  /**
   * @param {!proto.product.UpdateProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  product_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.product.UpdateProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductServiceClient.prototype.updateProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductService/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_UpdateProduct,
      callback);
};


/**
 * @param {!proto.product.UpdateProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.Empty>}
 *     Promise that resolves to the response
 */
proto.product.ProductServicePromiseClient.prototype.updateProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductService/UpdateProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_UpdateProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.DeleteProductReq,
 *   !proto.product.Empty>}
 */
const methodDescriptor_ProductService_DeleteProduct = new grpc.web.MethodDescriptor(
  '/product.ProductService/DeleteProduct',
  grpc.web.MethodType.UNARY,
  proto.product.DeleteProductReq,
  product_base_pb.Empty,
  /**
   * @param {!proto.product.DeleteProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  product_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.product.DeleteProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductServiceClient.prototype.deleteProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductService/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_DeleteProduct,
      callback);
};


/**
 * @param {!proto.product.DeleteProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.Empty>}
 *     Promise that resolves to the response
 */
proto.product.ProductServicePromiseClient.prototype.deleteProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductService/DeleteProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_DeleteProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.RetrieveProductReq,
 *   !proto.product.RetrieveProductRes>}
 */
const methodDescriptor_ProductService_RetrieveProduct = new grpc.web.MethodDescriptor(
  '/product.ProductService/RetrieveProduct',
  grpc.web.MethodType.UNARY,
  proto.product.RetrieveProductReq,
  proto.product.RetrieveProductRes,
  /**
   * @param {!proto.product.RetrieveProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.RetrieveProductRes.deserializeBinary
);


/**
 * @param {!proto.product.RetrieveProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.RetrieveProductRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.RetrieveProductRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductServiceClient.prototype.retrieveProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductService/RetrieveProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_RetrieveProduct,
      callback);
};


/**
 * @param {!proto.product.RetrieveProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.RetrieveProductRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductServicePromiseClient.prototype.retrieveProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductService/RetrieveProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_RetrieveProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.PublicRetrieveProductReq,
 *   !proto.product.PublicRetrieveProductRes>}
 */
const methodDescriptor_ProductService_PublicRetrieveProduct = new grpc.web.MethodDescriptor(
  '/product.ProductService/PublicRetrieveProduct',
  grpc.web.MethodType.UNARY,
  proto.product.PublicRetrieveProductReq,
  proto.product.PublicRetrieveProductRes,
  /**
   * @param {!proto.product.PublicRetrieveProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.PublicRetrieveProductRes.deserializeBinary
);


/**
 * @param {!proto.product.PublicRetrieveProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.PublicRetrieveProductRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.PublicRetrieveProductRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductServiceClient.prototype.publicRetrieveProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductService/PublicRetrieveProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_PublicRetrieveProduct,
      callback);
};


/**
 * @param {!proto.product.PublicRetrieveProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.PublicRetrieveProductRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductServicePromiseClient.prototype.publicRetrieveProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductService/PublicRetrieveProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_PublicRetrieveProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.PublicListProductReq,
 *   !proto.product.PublicListProductRes>}
 */
const methodDescriptor_ProductService_PublicListProduct = new grpc.web.MethodDescriptor(
  '/product.ProductService/PublicListProduct',
  grpc.web.MethodType.UNARY,
  proto.product.PublicListProductReq,
  proto.product.PublicListProductRes,
  /**
   * @param {!proto.product.PublicListProductReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.PublicListProductRes.deserializeBinary
);


/**
 * @param {!proto.product.PublicListProductReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.PublicListProductRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.PublicListProductRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductServiceClient.prototype.publicListProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductService/PublicListProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_PublicListProduct,
      callback);
};


/**
 * @param {!proto.product.PublicListProductReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.PublicListProductRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductServicePromiseClient.prototype.publicListProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductService/PublicListProduct',
      request,
      metadata || {},
      methodDescriptor_ProductService_PublicListProduct);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.InternalListProductByIdsReq,
 *   !proto.product.InternalListProductByIdsRes>}
 */
const methodDescriptor_ProductService_InternalListProductByIds = new grpc.web.MethodDescriptor(
  '/product.ProductService/InternalListProductByIds',
  grpc.web.MethodType.UNARY,
  proto.product.InternalListProductByIdsReq,
  proto.product.InternalListProductByIdsRes,
  /**
   * @param {!proto.product.InternalListProductByIdsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.InternalListProductByIdsRes.deserializeBinary
);


/**
 * @param {!proto.product.InternalListProductByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.InternalListProductByIdsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.InternalListProductByIdsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.ProductServiceClient.prototype.internalListProductByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.ProductService/InternalListProductByIds',
      request,
      metadata || {},
      methodDescriptor_ProductService_InternalListProductByIds,
      callback);
};


/**
 * @param {!proto.product.InternalListProductByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.InternalListProductByIdsRes>}
 *     Promise that resolves to the response
 */
proto.product.ProductServicePromiseClient.prototype.internalListProductByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.ProductService/InternalListProductByIds',
      request,
      metadata || {},
      methodDescriptor_ProductService_InternalListProductByIds);
};


module.exports = proto.product;

