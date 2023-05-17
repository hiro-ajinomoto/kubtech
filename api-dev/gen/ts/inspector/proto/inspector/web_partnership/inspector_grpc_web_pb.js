/**
 * @fileoverview gRPC-Web generated client stub for inspector.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/inspector/web_partnership/inspector.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_inspector_web_partnership_base_pb = require('../../../proto/inspector/web_partnership/base_pb.js')
const proto = {};
proto.inspector = {};
proto.inspector.web_partnership = require('./inspector_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.inspector.web_partnership.InspectorServiceClient =
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
proto.inspector.web_partnership.InspectorServicePromiseClient =
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
 *   !proto.inspector.web_partnership.CreateReq,
 *   !proto.inspector.web_partnership.Empty>}
 */
const methodDescriptor_InspectorService_Create = new grpc.web.MethodDescriptor(
  '/inspector.web_partnership.InspectorService/Create',
  grpc.web.MethodType.UNARY,
  proto.inspector.web_partnership.CreateReq,
  proto_inspector_web_partnership_base_pb.Empty,
  /**
   * @param {!proto.inspector.web_partnership.CreateReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_inspector_web_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.inspector.web_partnership.CreateReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.inspector.web_partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.inspector.web_partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.inspector.web_partnership.InspectorServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/Create',
      request,
      metadata || {},
      methodDescriptor_InspectorService_Create,
      callback);
};


/**
 * @param {!proto.inspector.web_partnership.CreateReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.inspector.web_partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.inspector.web_partnership.InspectorServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/Create',
      request,
      metadata || {},
      methodDescriptor_InspectorService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.inspector.web_partnership.GetMeReq,
 *   !proto.inspector.web_partnership.GetMeRes>}
 */
const methodDescriptor_InspectorService_GetMe = new grpc.web.MethodDescriptor(
  '/inspector.web_partnership.InspectorService/GetMe',
  grpc.web.MethodType.UNARY,
  proto.inspector.web_partnership.GetMeReq,
  proto.inspector.web_partnership.GetMeRes,
  /**
   * @param {!proto.inspector.web_partnership.GetMeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.inspector.web_partnership.GetMeRes.deserializeBinary
);


/**
 * @param {!proto.inspector.web_partnership.GetMeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.inspector.web_partnership.GetMeRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.inspector.web_partnership.GetMeRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.inspector.web_partnership.InspectorServiceClient.prototype.getMe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/GetMe',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetMe,
      callback);
};


/**
 * @param {!proto.inspector.web_partnership.GetMeReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.inspector.web_partnership.GetMeRes>}
 *     Promise that resolves to the response
 */
proto.inspector.web_partnership.InspectorServicePromiseClient.prototype.getMe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/GetMe',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetMe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.inspector.web_partnership.ChangePasswordReq,
 *   !proto.inspector.web_partnership.Empty>}
 */
const methodDescriptor_InspectorService_ChangePassword = new grpc.web.MethodDescriptor(
  '/inspector.web_partnership.InspectorService/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.inspector.web_partnership.ChangePasswordReq,
  proto_inspector_web_partnership_base_pb.Empty,
  /**
   * @param {!proto.inspector.web_partnership.ChangePasswordReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_inspector_web_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.inspector.web_partnership.ChangePasswordReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.inspector.web_partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.inspector.web_partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.inspector.web_partnership.InspectorServiceClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_InspectorService_ChangePassword,
      callback);
};


/**
 * @param {!proto.inspector.web_partnership.ChangePasswordReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.inspector.web_partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.inspector.web_partnership.InspectorServicePromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_InspectorService_ChangePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.inspector.web_partnership.GetUserReq,
 *   !proto.inspector.web_partnership.GetUserRes>}
 */
const methodDescriptor_InspectorService_GetUser = new grpc.web.MethodDescriptor(
  '/inspector.web_partnership.InspectorService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.inspector.web_partnership.GetUserReq,
  proto.inspector.web_partnership.GetUserRes,
  /**
   * @param {!proto.inspector.web_partnership.GetUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.inspector.web_partnership.GetUserRes.deserializeBinary
);


/**
 * @param {!proto.inspector.web_partnership.GetUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.inspector.web_partnership.GetUserRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.inspector.web_partnership.GetUserRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.inspector.web_partnership.InspectorServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/GetUser',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetUser,
      callback);
};


/**
 * @param {!proto.inspector.web_partnership.GetUserReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.inspector.web_partnership.GetUserRes>}
 *     Promise that resolves to the response
 */
proto.inspector.web_partnership.InspectorServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/GetUser',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.inspector.web_partnership.CheckAlreadyExistEmailReq,
 *   !proto.inspector.web_partnership.CheckAlreadyExistEmailRes>}
 */
const methodDescriptor_InspectorService_CheckAlreadyExistEmail = new grpc.web.MethodDescriptor(
  '/inspector.web_partnership.InspectorService/CheckAlreadyExistEmail',
  grpc.web.MethodType.UNARY,
  proto.inspector.web_partnership.CheckAlreadyExistEmailReq,
  proto.inspector.web_partnership.CheckAlreadyExistEmailRes,
  /**
   * @param {!proto.inspector.web_partnership.CheckAlreadyExistEmailReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.inspector.web_partnership.CheckAlreadyExistEmailRes.deserializeBinary
);


/**
 * @param {!proto.inspector.web_partnership.CheckAlreadyExistEmailReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.inspector.web_partnership.CheckAlreadyExistEmailRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.inspector.web_partnership.CheckAlreadyExistEmailRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.inspector.web_partnership.InspectorServiceClient.prototype.checkAlreadyExistEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/CheckAlreadyExistEmail',
      request,
      metadata || {},
      methodDescriptor_InspectorService_CheckAlreadyExistEmail,
      callback);
};


/**
 * @param {!proto.inspector.web_partnership.CheckAlreadyExistEmailReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.inspector.web_partnership.CheckAlreadyExistEmailRes>}
 *     Promise that resolves to the response
 */
proto.inspector.web_partnership.InspectorServicePromiseClient.prototype.checkAlreadyExistEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/inspector.web_partnership.InspectorService/CheckAlreadyExistEmail',
      request,
      metadata || {},
      methodDescriptor_InspectorService_CheckAlreadyExistEmail);
};


module.exports = proto.inspector.web_partnership;
