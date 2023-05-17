/**
 * @fileoverview gRPC-Web generated client stub for customer.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/customer/web_partnership/location.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_customer_web_partnership_base_pb = require('../../../proto/customer/web_partnership/base_pb.js')
const proto = {};
proto.customer = {};
proto.customer.web_partnership = require('./location_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.customer.web_partnership.CustomerLocationServiceClient =
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
proto.customer.web_partnership.CustomerLocationServicePromiseClient =
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
 *   !proto.customer.web_partnership.CreateMyLocationReq,
 *   !proto.customer.web_partnership.CreateMyLocationRes>}
 */
const methodDescriptor_CustomerLocationService_CreateMyLocation = new grpc.web.MethodDescriptor(
  '/customer.web_partnership.CustomerLocationService/CreateMyLocation',
  grpc.web.MethodType.UNARY,
  proto.customer.web_partnership.CreateMyLocationReq,
  proto.customer.web_partnership.CreateMyLocationRes,
  /**
   * @param {!proto.customer.web_partnership.CreateMyLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.customer.web_partnership.CreateMyLocationRes.deserializeBinary
);


/**
 * @param {!proto.customer.web_partnership.CreateMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.web_partnership.CreateMyLocationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.web_partnership.CreateMyLocationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.web_partnership.CustomerLocationServiceClient.prototype.createMyLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/CreateMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_CreateMyLocation,
      callback);
};


/**
 * @param {!proto.customer.web_partnership.CreateMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.web_partnership.CreateMyLocationRes>}
 *     Promise that resolves to the response
 */
proto.customer.web_partnership.CustomerLocationServicePromiseClient.prototype.createMyLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/CreateMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_CreateMyLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.customer.web_partnership.UpdateMyLocationReq,
 *   !proto.customer.web_partnership.Empty>}
 */
const methodDescriptor_CustomerLocationService_UpdateMyLocation = new grpc.web.MethodDescriptor(
  '/customer.web_partnership.CustomerLocationService/UpdateMyLocation',
  grpc.web.MethodType.UNARY,
  proto.customer.web_partnership.UpdateMyLocationReq,
  proto_customer_web_partnership_base_pb.Empty,
  /**
   * @param {!proto.customer.web_partnership.UpdateMyLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_customer_web_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.customer.web_partnership.UpdateMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.web_partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.web_partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.web_partnership.CustomerLocationServiceClient.prototype.updateMyLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/UpdateMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_UpdateMyLocation,
      callback);
};


/**
 * @param {!proto.customer.web_partnership.UpdateMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.web_partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.customer.web_partnership.CustomerLocationServicePromiseClient.prototype.updateMyLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/UpdateMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_UpdateMyLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.customer.web_partnership.DeleteMyLocationReq,
 *   !proto.customer.web_partnership.Empty>}
 */
const methodDescriptor_CustomerLocationService_DeleteMyLocation = new grpc.web.MethodDescriptor(
  '/customer.web_partnership.CustomerLocationService/DeleteMyLocation',
  grpc.web.MethodType.UNARY,
  proto.customer.web_partnership.DeleteMyLocationReq,
  proto_customer_web_partnership_base_pb.Empty,
  /**
   * @param {!proto.customer.web_partnership.DeleteMyLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_customer_web_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.customer.web_partnership.DeleteMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.web_partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.web_partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.web_partnership.CustomerLocationServiceClient.prototype.deleteMyLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/DeleteMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_DeleteMyLocation,
      callback);
};


/**
 * @param {!proto.customer.web_partnership.DeleteMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.web_partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.customer.web_partnership.CustomerLocationServicePromiseClient.prototype.deleteMyLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/DeleteMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_DeleteMyLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.customer.web_partnership.RetrieveMyLocationReq,
 *   !proto.customer.web_partnership.RetrieveMyLocationRes>}
 */
const methodDescriptor_CustomerLocationService_RetrieveMyLocation = new grpc.web.MethodDescriptor(
  '/customer.web_partnership.CustomerLocationService/RetrieveMyLocation',
  grpc.web.MethodType.UNARY,
  proto.customer.web_partnership.RetrieveMyLocationReq,
  proto.customer.web_partnership.RetrieveMyLocationRes,
  /**
   * @param {!proto.customer.web_partnership.RetrieveMyLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.customer.web_partnership.RetrieveMyLocationRes.deserializeBinary
);


/**
 * @param {!proto.customer.web_partnership.RetrieveMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.web_partnership.RetrieveMyLocationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.web_partnership.RetrieveMyLocationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.web_partnership.CustomerLocationServiceClient.prototype.retrieveMyLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/RetrieveMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_RetrieveMyLocation,
      callback);
};


/**
 * @param {!proto.customer.web_partnership.RetrieveMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.web_partnership.RetrieveMyLocationRes>}
 *     Promise that resolves to the response
 */
proto.customer.web_partnership.CustomerLocationServicePromiseClient.prototype.retrieveMyLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/RetrieveMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_RetrieveMyLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.customer.web_partnership.ListMyLocationReq,
 *   !proto.customer.web_partnership.ListMyLocationRes>}
 */
const methodDescriptor_CustomerLocationService_ListMyLocation = new grpc.web.MethodDescriptor(
  '/customer.web_partnership.CustomerLocationService/ListMyLocation',
  grpc.web.MethodType.UNARY,
  proto.customer.web_partnership.ListMyLocationReq,
  proto.customer.web_partnership.ListMyLocationRes,
  /**
   * @param {!proto.customer.web_partnership.ListMyLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.customer.web_partnership.ListMyLocationRes.deserializeBinary
);


/**
 * @param {!proto.customer.web_partnership.ListMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.web_partnership.ListMyLocationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.web_partnership.ListMyLocationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.web_partnership.CustomerLocationServiceClient.prototype.listMyLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/ListMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_ListMyLocation,
      callback);
};


/**
 * @param {!proto.customer.web_partnership.ListMyLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.web_partnership.ListMyLocationRes>}
 *     Promise that resolves to the response
 */
proto.customer.web_partnership.CustomerLocationServicePromiseClient.prototype.listMyLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.web_partnership.CustomerLocationService/ListMyLocation',
      request,
      metadata || {},
      methodDescriptor_CustomerLocationService_ListMyLocation);
};


module.exports = proto.customer.web_partnership;

