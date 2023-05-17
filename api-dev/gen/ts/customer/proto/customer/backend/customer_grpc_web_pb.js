/**
 * @fileoverview gRPC-Web generated client stub for customer.backend
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/customer/backend/customer.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_customer_backend_base_pb = require('../../../proto/customer/backend/base_pb.js')
const proto = {};
proto.customer = {};
proto.customer.backend = require('./customer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.customer.backend.CustomerServiceClient =
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
proto.customer.backend.CustomerServicePromiseClient =
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
 *   !proto.customer.backend.StreamCustomersReq,
 *   !proto.customer.backend.Empty>}
 */
const methodDescriptor_CustomerService_StreamCustomers = new grpc.web.MethodDescriptor(
  '/customer.backend.CustomerService/StreamCustomers',
  grpc.web.MethodType.UNARY,
  proto.customer.backend.StreamCustomersReq,
  proto_customer_backend_base_pb.Empty,
  /**
   * @param {!proto.customer.backend.StreamCustomersReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_customer_backend_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.customer.backend.StreamCustomersReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.backend.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.backend.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.backend.CustomerServiceClient.prototype.streamCustomers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.backend.CustomerService/StreamCustomers',
      request,
      metadata || {},
      methodDescriptor_CustomerService_StreamCustomers,
      callback);
};


/**
 * @param {!proto.customer.backend.StreamCustomersReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.backend.Empty>}
 *     Promise that resolves to the response
 */
proto.customer.backend.CustomerServicePromiseClient.prototype.streamCustomers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.backend.CustomerService/StreamCustomers',
      request,
      metadata || {},
      methodDescriptor_CustomerService_StreamCustomers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.customer.backend.PushNotificationAllCustomersReq,
 *   !proto.customer.backend.Empty>}
 */
const methodDescriptor_CustomerService_PushNotificationAllCustomers = new grpc.web.MethodDescriptor(
  '/customer.backend.CustomerService/PushNotificationAllCustomers',
  grpc.web.MethodType.UNARY,
  proto.customer.backend.PushNotificationAllCustomersReq,
  proto_customer_backend_base_pb.Empty,
  /**
   * @param {!proto.customer.backend.PushNotificationAllCustomersReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_customer_backend_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.customer.backend.PushNotificationAllCustomersReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.backend.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.backend.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.backend.CustomerServiceClient.prototype.pushNotificationAllCustomers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.backend.CustomerService/PushNotificationAllCustomers',
      request,
      metadata || {},
      methodDescriptor_CustomerService_PushNotificationAllCustomers,
      callback);
};


/**
 * @param {!proto.customer.backend.PushNotificationAllCustomersReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.backend.Empty>}
 *     Promise that resolves to the response
 */
proto.customer.backend.CustomerServicePromiseClient.prototype.pushNotificationAllCustomers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.backend.CustomerService/PushNotificationAllCustomers',
      request,
      metadata || {},
      methodDescriptor_CustomerService_PushNotificationAllCustomers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.customer.backend.GetUserByIdReq,
 *   !proto.customer.backend.GetUserByIdRes>}
 */
const methodDescriptor_CustomerService_GetUserById = new grpc.web.MethodDescriptor(
  '/customer.backend.CustomerService/GetUserById',
  grpc.web.MethodType.UNARY,
  proto.customer.backend.GetUserByIdReq,
  proto.customer.backend.GetUserByIdRes,
  /**
   * @param {!proto.customer.backend.GetUserByIdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.customer.backend.GetUserByIdRes.deserializeBinary
);


/**
 * @param {!proto.customer.backend.GetUserByIdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.backend.GetUserByIdRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.backend.GetUserByIdRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.backend.CustomerServiceClient.prototype.getUserById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.backend.CustomerService/GetUserById',
      request,
      metadata || {},
      methodDescriptor_CustomerService_GetUserById,
      callback);
};


/**
 * @param {!proto.customer.backend.GetUserByIdReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.backend.GetUserByIdRes>}
 *     Promise that resolves to the response
 */
proto.customer.backend.CustomerServicePromiseClient.prototype.getUserById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.backend.CustomerService/GetUserById',
      request,
      metadata || {},
      methodDescriptor_CustomerService_GetUserById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.customer.backend.GetUserReq,
 *   !proto.customer.backend.GetUserRes>}
 */
const methodDescriptor_CustomerService_GetUser = new grpc.web.MethodDescriptor(
  '/customer.backend.CustomerService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.customer.backend.GetUserReq,
  proto.customer.backend.GetUserRes,
  /**
   * @param {!proto.customer.backend.GetUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.customer.backend.GetUserRes.deserializeBinary
);


/**
 * @param {!proto.customer.backend.GetUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.customer.backend.GetUserRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.customer.backend.GetUserRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.customer.backend.CustomerServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/customer.backend.CustomerService/GetUser',
      request,
      metadata || {},
      methodDescriptor_CustomerService_GetUser,
      callback);
};


/**
 * @param {!proto.customer.backend.GetUserReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.customer.backend.GetUserRes>}
 *     Promise that resolves to the response
 */
proto.customer.backend.CustomerServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/customer.backend.CustomerService/GetUser',
      request,
      metadata || {},
      methodDescriptor_CustomerService_GetUser);
};


module.exports = proto.customer.backend;

