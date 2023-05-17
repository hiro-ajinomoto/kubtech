/**
 * @fileoverview gRPC-Web generated client stub for customer
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/customer/customer.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.customer = require('./customer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.customer.CustomerServiceClient =
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
proto.customer.CustomerServicePromiseClient =
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
 *   !proto.customer.GetMeReq,
 *   !proto.customer.GetMeRes>}
 */
const methodDescriptor_CustomerService_GetMe = new grpc.web.MethodDescriptor(
  '/customer.CustomerService/GetMe',
  grpc.web.MethodType.UNARY,
  proto.customer.GetMeReq,
  proto.customer.GetMeRes,
  /**
   * @param {!proto.customer.GetMeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.customer.GetMeRes.deserializeBinary
);


/**
 * @param {!proto.customer.GetMeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.GetMeRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.GetMeRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.CustomerServiceClient.prototype.getMe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.CustomerService/GetMe',
      request,
      metadata || {},
      methodDescriptor_CustomerService_GetMe,
      callback);
};


/**
 * @param {!proto.customer.GetMeReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.GetMeRes>}
 *     Promise that resolves to the response
 */
proto.customer.CustomerServicePromiseClient.prototype.getMe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.CustomerService/GetMe',
      request,
      metadata || {},
      methodDescriptor_CustomerService_GetMe);
};


module.exports = proto.customer;

