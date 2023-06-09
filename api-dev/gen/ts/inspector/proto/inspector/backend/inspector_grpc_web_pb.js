/**
 * @fileoverview gRPC-Web generated client stub for inspector.backend
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/inspector/backend/inspector.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.inspector = {};
proto.inspector.backend = require('./inspector_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.inspector.backend.InspectorServiceClient =
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
proto.inspector.backend.InspectorServicePromiseClient =
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
 *   !proto.inspector.backend.GetInspectorByIdReq,
 *   !proto.inspector.backend.GetInspectorByIdRes>}
 */
const methodDescriptor_InspectorService_GetInspectorById = new grpc.web.MethodDescriptor(
  '/inspector.backend.InspectorService/GetInspectorById',
  grpc.web.MethodType.UNARY,
  proto.inspector.backend.GetInspectorByIdReq,
  proto.inspector.backend.GetInspectorByIdRes,
  /**
   * @param {!proto.inspector.backend.GetInspectorByIdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.inspector.backend.GetInspectorByIdRes.deserializeBinary
);


/**
 * @param {!proto.inspector.backend.GetInspectorByIdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.inspector.backend.GetInspectorByIdRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.inspector.backend.GetInspectorByIdRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.inspector.backend.InspectorServiceClient.prototype.getInspectorById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/inspector.backend.InspectorService/GetInspectorById',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetInspectorById,
      callback);
};


/**
 * @param {!proto.inspector.backend.GetInspectorByIdReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.inspector.backend.GetInspectorByIdRes>}
 *     Promise that resolves to the response
 */
proto.inspector.backend.InspectorServicePromiseClient.prototype.getInspectorById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/inspector.backend.InspectorService/GetInspectorById',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetInspectorById);
};


module.exports = proto.inspector.backend;

