/**
 * @fileoverview gRPC-Web generated client stub for search.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/search/mobile/event.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_search_mobile_base_pb = require('../../../proto/search/mobile/base_pb.js')
const proto = {};
proto.search = {};
proto.search.mobile = require('./event_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.search.mobile.SearchEventServiceClient =
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
proto.search.mobile.SearchEventServicePromiseClient =
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
 *   !proto.search.mobile.GetEventDetailReq,
 *   !proto.search.mobile.GetEventDetailRes>}
 */
const methodDescriptor_SearchEventService_GetEventDetail = new grpc.web.MethodDescriptor(
  '/search.mobile.SearchEventService/GetEventDetail',
  grpc.web.MethodType.UNARY,
  proto.search.mobile.GetEventDetailReq,
  proto.search.mobile.GetEventDetailRes,
  /**
   * @param {!proto.search.mobile.GetEventDetailReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.search.mobile.GetEventDetailRes.deserializeBinary
);


/**
 * @param {!proto.search.mobile.GetEventDetailReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.search.mobile.GetEventDetailRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.search.mobile.GetEventDetailRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.search.mobile.SearchEventServiceClient.prototype.getEventDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/search.mobile.SearchEventService/GetEventDetail',
      request,
      metadata || {},
      methodDescriptor_SearchEventService_GetEventDetail,
      callback);
};


/**
 * @param {!proto.search.mobile.GetEventDetailReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.search.mobile.GetEventDetailRes>}
 *     Promise that resolves to the response
 */
proto.search.mobile.SearchEventServicePromiseClient.prototype.getEventDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/search.mobile.SearchEventService/GetEventDetail',
      request,
      metadata || {},
      methodDescriptor_SearchEventService_GetEventDetail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.search.mobile.SearchTopEventsReq,
 *   !proto.search.mobile.SearchTopEventsRes>}
 */
const methodDescriptor_SearchEventService_SearchTopEvents = new grpc.web.MethodDescriptor(
  '/search.mobile.SearchEventService/SearchTopEvents',
  grpc.web.MethodType.UNARY,
  proto.search.mobile.SearchTopEventsReq,
  proto.search.mobile.SearchTopEventsRes,
  /**
   * @param {!proto.search.mobile.SearchTopEventsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.search.mobile.SearchTopEventsRes.deserializeBinary
);


/**
 * @param {!proto.search.mobile.SearchTopEventsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.search.mobile.SearchTopEventsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.search.mobile.SearchTopEventsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.search.mobile.SearchEventServiceClient.prototype.searchTopEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/search.mobile.SearchEventService/SearchTopEvents',
      request,
      metadata || {},
      methodDescriptor_SearchEventService_SearchTopEvents,
      callback);
};


/**
 * @param {!proto.search.mobile.SearchTopEventsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.search.mobile.SearchTopEventsRes>}
 *     Promise that resolves to the response
 */
proto.search.mobile.SearchEventServicePromiseClient.prototype.searchTopEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/search.mobile.SearchEventService/SearchTopEvents',
      request,
      metadata || {},
      methodDescriptor_SearchEventService_SearchTopEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.search.mobile.SearchListEventsReq,
 *   !proto.search.mobile.SearchListEventsRes>}
 */
const methodDescriptor_SearchEventService_SearchListEvents = new grpc.web.MethodDescriptor(
  '/search.mobile.SearchEventService/SearchListEvents',
  grpc.web.MethodType.UNARY,
  proto.search.mobile.SearchListEventsReq,
  proto.search.mobile.SearchListEventsRes,
  /**
   * @param {!proto.search.mobile.SearchListEventsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.search.mobile.SearchListEventsRes.deserializeBinary
);


/**
 * @param {!proto.search.mobile.SearchListEventsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.search.mobile.SearchListEventsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.search.mobile.SearchListEventsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.search.mobile.SearchEventServiceClient.prototype.searchListEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/search.mobile.SearchEventService/SearchListEvents',
      request,
      metadata || {},
      methodDescriptor_SearchEventService_SearchListEvents,
      callback);
};


/**
 * @param {!proto.search.mobile.SearchListEventsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.search.mobile.SearchListEventsRes>}
 *     Promise that resolves to the response
 */
proto.search.mobile.SearchEventServicePromiseClient.prototype.searchListEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/search.mobile.SearchEventService/SearchListEvents',
      request,
      metadata || {},
      methodDescriptor_SearchEventService_SearchListEvents);
};


module.exports = proto.search.mobile;
