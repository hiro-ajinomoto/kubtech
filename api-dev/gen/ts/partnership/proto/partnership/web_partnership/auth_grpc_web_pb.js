/**
 * @fileoverview gRPC-Web generated client stub for partnership.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/partnership/web_partnership/auth.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_partnership_web_partnership_base_pb = require('../../../proto/partnership/web_partnership/base_pb.js')
const proto = {};
proto.partnership = {};
proto.partnership.web_partnership = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.partnership.web_partnership.AuthServiceClient =
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
proto.partnership.web_partnership.AuthServicePromiseClient =
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
 *   !proto.partnership.web_partnership.LoginReq,
 *   !proto.partnership.web_partnership.LoginRes>}
 */
const methodDescriptor_AuthService_Login = new grpc.web.MethodDescriptor(
  '/partnership.web_partnership.AuthService/Login',
  grpc.web.MethodType.UNARY,
  proto.partnership.web_partnership.LoginReq,
  proto.partnership.web_partnership.LoginRes,
  /**
   * @param {!proto.partnership.web_partnership.LoginReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.web_partnership.LoginRes.deserializeBinary
);


/**
 * @param {!proto.partnership.web_partnership.LoginReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.web_partnership.LoginRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.web_partnership.LoginRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.web_partnership.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.web_partnership.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login,
      callback);
};


/**
 * @param {!proto.partnership.web_partnership.LoginReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.web_partnership.LoginRes>}
 *     Promise that resolves to the response
 */
proto.partnership.web_partnership.AuthServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.web_partnership.AuthService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.web_partnership.LogoutReq,
 *   !proto.partnership.web_partnership.Empty>}
 */
const methodDescriptor_AuthService_Logout = new grpc.web.MethodDescriptor(
  '/partnership.web_partnership.AuthService/Logout',
  grpc.web.MethodType.UNARY,
  proto.partnership.web_partnership.LogoutReq,
  proto_partnership_web_partnership_base_pb.Empty,
  /**
   * @param {!proto.partnership.web_partnership.LogoutReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_partnership_web_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.partnership.web_partnership.LogoutReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.web_partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.web_partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.web_partnership.AuthServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.web_partnership.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout,
      callback);
};


/**
 * @param {!proto.partnership.web_partnership.LogoutReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.web_partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.partnership.web_partnership.AuthServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.web_partnership.AuthService/Logout',
      request,
      metadata || {},
      methodDescriptor_AuthService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.web_partnership.RefreshTokenReq,
 *   !proto.partnership.web_partnership.RefreshTokenRes>}
 */
const methodDescriptor_AuthService_RefreshToken = new grpc.web.MethodDescriptor(
  '/partnership.web_partnership.AuthService/RefreshToken',
  grpc.web.MethodType.UNARY,
  proto.partnership.web_partnership.RefreshTokenReq,
  proto.partnership.web_partnership.RefreshTokenRes,
  /**
   * @param {!proto.partnership.web_partnership.RefreshTokenReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.web_partnership.RefreshTokenRes.deserializeBinary
);


/**
 * @param {!proto.partnership.web_partnership.RefreshTokenReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.web_partnership.RefreshTokenRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.web_partnership.RefreshTokenRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.web_partnership.AuthServiceClient.prototype.refreshToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.web_partnership.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken,
      callback);
};


/**
 * @param {!proto.partnership.web_partnership.RefreshTokenReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.web_partnership.RefreshTokenRes>}
 *     Promise that resolves to the response
 */
proto.partnership.web_partnership.AuthServicePromiseClient.prototype.refreshToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.web_partnership.AuthService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_RefreshToken);
};


module.exports = proto.partnership.web_partnership;

