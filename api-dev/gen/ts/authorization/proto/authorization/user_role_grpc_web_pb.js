/**
 * @fileoverview gRPC-Web generated client stub for authorization
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/authorization/user_role.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.authorization = require('./user_role_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.authorization.UserRoleServiceClient =
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
proto.authorization.UserRoleServicePromiseClient =
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
 *   !proto.authorization.CheckUserHasPermissionReq,
 *   !proto.authorization.CheckUserHasPermissionRes>}
 */
const methodDescriptor_UserRoleService_CheckUserHasPermission = new grpc.web.MethodDescriptor(
  '/authorization.UserRoleService/CheckUserHasPermission',
  grpc.web.MethodType.UNARY,
  proto.authorization.CheckUserHasPermissionReq,
  proto.authorization.CheckUserHasPermissionRes,
  /**
   * @param {!proto.authorization.CheckUserHasPermissionReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authorization.CheckUserHasPermissionRes.deserializeBinary
);


/**
 * @param {!proto.authorization.CheckUserHasPermissionReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.authorization.CheckUserHasPermissionRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authorization.CheckUserHasPermissionRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authorization.UserRoleServiceClient.prototype.checkUserHasPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authorization.UserRoleService/CheckUserHasPermission',
      request,
      metadata || {},
      methodDescriptor_UserRoleService_CheckUserHasPermission,
      callback);
};


/**
 * @param {!proto.authorization.CheckUserHasPermissionReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authorization.CheckUserHasPermissionRes>}
 *     Promise that resolves to the response
 */
proto.authorization.UserRoleServicePromiseClient.prototype.checkUserHasPermission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authorization.UserRoleService/CheckUserHasPermission',
      request,
      metadata || {},
      methodDescriptor_UserRoleService_CheckUserHasPermission);
};


module.exports = proto.authorization;

