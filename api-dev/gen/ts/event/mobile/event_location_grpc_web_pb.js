/**
 * @fileoverview gRPC-Web generated client stub for event.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/mobile/event_location.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var base_base_pb = require('../../base/base_pb.js')
const proto = {};
proto.event = {};
proto.event.mobile = require('./event_location_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.event.mobile.EventLocationServiceClient =
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
proto.event.mobile.EventLocationServicePromiseClient =
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
 *   !proto.event.mobile.RetrieveEventLocationReq,
 *   !proto.event.mobile.RetrieveEventLocationRes>}
 */
const methodDescriptor_EventLocationService_RetrieveEventLocation = new grpc.web.MethodDescriptor(
  '/event.mobile.EventLocationService/RetrieveEventLocation',
  grpc.web.MethodType.UNARY,
  proto.event.mobile.RetrieveEventLocationReq,
  proto.event.mobile.RetrieveEventLocationRes,
  /**
   * @param {!proto.event.mobile.RetrieveEventLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.mobile.RetrieveEventLocationRes.deserializeBinary
);


/**
 * @param {!proto.event.mobile.RetrieveEventLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.mobile.RetrieveEventLocationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.mobile.RetrieveEventLocationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.mobile.EventLocationServiceClient.prototype.retrieveEventLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.mobile.EventLocationService/RetrieveEventLocation',
      request,
      metadata || {},
      methodDescriptor_EventLocationService_RetrieveEventLocation,
      callback);
};


/**
 * @param {!proto.event.mobile.RetrieveEventLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.mobile.RetrieveEventLocationRes>}
 *     Promise that resolves to the response
 */
proto.event.mobile.EventLocationServicePromiseClient.prototype.retrieveEventLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.mobile.EventLocationService/RetrieveEventLocation',
      request,
      metadata || {},
      methodDescriptor_EventLocationService_RetrieveEventLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.mobile.ListEventLocationReq,
 *   !proto.event.mobile.EventLocationListRes>}
 */
const methodDescriptor_EventLocationService_ListEventLocation = new grpc.web.MethodDescriptor(
  '/event.mobile.EventLocationService/ListEventLocation',
  grpc.web.MethodType.UNARY,
  proto.event.mobile.ListEventLocationReq,
  proto.event.mobile.EventLocationListRes,
  /**
   * @param {!proto.event.mobile.ListEventLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.mobile.EventLocationListRes.deserializeBinary
);


/**
 * @param {!proto.event.mobile.ListEventLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.mobile.EventLocationListRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.mobile.EventLocationListRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.mobile.EventLocationServiceClient.prototype.listEventLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.mobile.EventLocationService/ListEventLocation',
      request,
      metadata || {},
      methodDescriptor_EventLocationService_ListEventLocation,
      callback);
};


/**
 * @param {!proto.event.mobile.ListEventLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.mobile.EventLocationListRes>}
 *     Promise that resolves to the response
 */
proto.event.mobile.EventLocationServicePromiseClient.prototype.listEventLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.mobile.EventLocationService/ListEventLocation',
      request,
      metadata || {},
      methodDescriptor_EventLocationService_ListEventLocation);
};


module.exports = proto.event.mobile;

