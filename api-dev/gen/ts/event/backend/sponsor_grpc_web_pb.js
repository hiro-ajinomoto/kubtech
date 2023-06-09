/**
 * @fileoverview gRPC-Web generated client stub for event.backend
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/backend/sponsor.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var event_backend_base_pb = require('../../event/backend/base_pb.js')
const proto = {};
proto.event = {};
proto.event.backend = require('./sponsor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.event.backend.SponsorServiceClient =
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
proto.event.backend.SponsorServicePromiseClient =
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
 *   !proto.event.backend.GetSponsorDetailReq,
 *   !proto.event.backend.GetSponsorDetailRes>}
 */
const methodDescriptor_SponsorService_GetSponsorDetail = new grpc.web.MethodDescriptor(
  '/event.backend.SponsorService/GetSponsorDetail',
  grpc.web.MethodType.UNARY,
  proto.event.backend.GetSponsorDetailReq,
  proto.event.backend.GetSponsorDetailRes,
  /**
   * @param {!proto.event.backend.GetSponsorDetailReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.backend.GetSponsorDetailRes.deserializeBinary
);


/**
 * @param {!proto.event.backend.GetSponsorDetailReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.backend.GetSponsorDetailRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.backend.GetSponsorDetailRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.backend.SponsorServiceClient.prototype.getSponsorDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.backend.SponsorService/GetSponsorDetail',
      request,
      metadata || {},
      methodDescriptor_SponsorService_GetSponsorDetail,
      callback);
};


/**
 * @param {!proto.event.backend.GetSponsorDetailReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.backend.GetSponsorDetailRes>}
 *     Promise that resolves to the response
 */
proto.event.backend.SponsorServicePromiseClient.prototype.getSponsorDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.backend.SponsorService/GetSponsorDetail',
      request,
      metadata || {},
      methodDescriptor_SponsorService_GetSponsorDetail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.backend.ListSponsorByIdsReq,
 *   !proto.event.backend.ListSponsorByIdsRes>}
 */
const methodDescriptor_SponsorService_ListSponsorByIds = new grpc.web.MethodDescriptor(
  '/event.backend.SponsorService/ListSponsorByIds',
  grpc.web.MethodType.UNARY,
  proto.event.backend.ListSponsorByIdsReq,
  proto.event.backend.ListSponsorByIdsRes,
  /**
   * @param {!proto.event.backend.ListSponsorByIdsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.backend.ListSponsorByIdsRes.deserializeBinary
);


/**
 * @param {!proto.event.backend.ListSponsorByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.backend.ListSponsorByIdsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.backend.ListSponsorByIdsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.backend.SponsorServiceClient.prototype.listSponsorByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.backend.SponsorService/ListSponsorByIds',
      request,
      metadata || {},
      methodDescriptor_SponsorService_ListSponsorByIds,
      callback);
};


/**
 * @param {!proto.event.backend.ListSponsorByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.backend.ListSponsorByIdsRes>}
 *     Promise that resolves to the response
 */
proto.event.backend.SponsorServicePromiseClient.prototype.listSponsorByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.backend.SponsorService/ListSponsorByIds',
      request,
      metadata || {},
      methodDescriptor_SponsorService_ListSponsorByIds);
};


module.exports = proto.event.backend;

