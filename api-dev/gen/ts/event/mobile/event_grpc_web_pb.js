/**
 * @fileoverview gRPC-Web generated client stub for event.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/mobile/event.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var base_base_pb = require('../../base/base_pb.js')

var event_mobile_event_location_pb = require('../../event/mobile/event_location_pb.js')

var event_mobile_artist_pb = require('../../event/mobile/artist_pb.js')

var event_mobile_sponsor_pb = require('../../event/mobile/sponsor_pb.js')
const proto = {};
proto.event = {};
proto.event.mobile = require('./event_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.event.mobile.EventServiceClient =
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
proto.event.mobile.EventServicePromiseClient =
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
 *   !proto.event.mobile.PublicRetrieveEventReq,
 *   !proto.event.mobile.PublicRetrieveEventRes>}
 */
const methodDescriptor_EventService_PublicRetrieveEvent = new grpc.web.MethodDescriptor(
  '/event.mobile.EventService/PublicRetrieveEvent',
  grpc.web.MethodType.UNARY,
  proto.event.mobile.PublicRetrieveEventReq,
  proto.event.mobile.PublicRetrieveEventRes,
  /**
   * @param {!proto.event.mobile.PublicRetrieveEventReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.mobile.PublicRetrieveEventRes.deserializeBinary
);


/**
 * @param {!proto.event.mobile.PublicRetrieveEventReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.mobile.PublicRetrieveEventRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.mobile.PublicRetrieveEventRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.mobile.EventServiceClient.prototype.publicRetrieveEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.mobile.EventService/PublicRetrieveEvent',
      request,
      metadata || {},
      methodDescriptor_EventService_PublicRetrieveEvent,
      callback);
};


/**
 * @param {!proto.event.mobile.PublicRetrieveEventReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.mobile.PublicRetrieveEventRes>}
 *     Promise that resolves to the response
 */
proto.event.mobile.EventServicePromiseClient.prototype.publicRetrieveEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.mobile.EventService/PublicRetrieveEvent',
      request,
      metadata || {},
      methodDescriptor_EventService_PublicRetrieveEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.mobile.PublicListEventsReq,
 *   !proto.event.mobile.PublicListEventsRes>}
 */
const methodDescriptor_EventService_PublicListEvents = new grpc.web.MethodDescriptor(
  '/event.mobile.EventService/PublicListEvents',
  grpc.web.MethodType.UNARY,
  proto.event.mobile.PublicListEventsReq,
  proto.event.mobile.PublicListEventsRes,
  /**
   * @param {!proto.event.mobile.PublicListEventsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.mobile.PublicListEventsRes.deserializeBinary
);


/**
 * @param {!proto.event.mobile.PublicListEventsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.mobile.PublicListEventsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.mobile.PublicListEventsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.mobile.EventServiceClient.prototype.publicListEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.mobile.EventService/PublicListEvents',
      request,
      metadata || {},
      methodDescriptor_EventService_PublicListEvents,
      callback);
};


/**
 * @param {!proto.event.mobile.PublicListEventsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.mobile.PublicListEventsRes>}
 *     Promise that resolves to the response
 */
proto.event.mobile.EventServicePromiseClient.prototype.publicListEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.mobile.EventService/PublicListEvents',
      request,
      metadata || {},
      methodDescriptor_EventService_PublicListEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.mobile.ListEventScheduleReq,
 *   !proto.event.mobile.ListEventScheduleRes>}
 */
const methodDescriptor_EventService_ListEventSchedules = new grpc.web.MethodDescriptor(
  '/event.mobile.EventService/ListEventSchedules',
  grpc.web.MethodType.UNARY,
  proto.event.mobile.ListEventScheduleReq,
  proto.event.mobile.ListEventScheduleRes,
  /**
   * @param {!proto.event.mobile.ListEventScheduleReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.mobile.ListEventScheduleRes.deserializeBinary
);


/**
 * @param {!proto.event.mobile.ListEventScheduleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.mobile.ListEventScheduleRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.mobile.ListEventScheduleRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.mobile.EventServiceClient.prototype.listEventSchedules =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.mobile.EventService/ListEventSchedules',
      request,
      metadata || {},
      methodDescriptor_EventService_ListEventSchedules,
      callback);
};


/**
 * @param {!proto.event.mobile.ListEventScheduleReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.mobile.ListEventScheduleRes>}
 *     Promise that resolves to the response
 */
proto.event.mobile.EventServicePromiseClient.prototype.listEventSchedules =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.mobile.EventService/ListEventSchedules',
      request,
      metadata || {},
      methodDescriptor_EventService_ListEventSchedules);
};


module.exports = proto.event.mobile;

