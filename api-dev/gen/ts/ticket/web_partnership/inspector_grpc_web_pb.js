/**
 * @fileoverview gRPC-Web generated client stub for ticket.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: ticket/web_partnership/inspector.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var ticket_web_partnership_base_pb = require('../../ticket/web_partnership/base_pb.js')
const proto = {};
proto.ticket = {};
proto.ticket.web_partnership = require('./inspector_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ticket.web_partnership.InspectorServiceClient =
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
proto.ticket.web_partnership.InspectorServicePromiseClient =
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
 *   !proto.ticket.web_partnership.AssignCheckinEventReq,
 *   !proto.ticket.web_partnership.Empty>}
 */
const methodDescriptor_InspectorService_AssignCheckinEvent = new grpc.web.MethodDescriptor(
  '/ticket.web_partnership.InspectorService/AssignCheckinEvent',
  grpc.web.MethodType.UNARY,
  proto.ticket.web_partnership.AssignCheckinEventReq,
  ticket_web_partnership_base_pb.Empty,
  /**
   * @param {!proto.ticket.web_partnership.AssignCheckinEventReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ticket_web_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ticket.web_partnership.AssignCheckinEventReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.web_partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.web_partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.web_partnership.InspectorServiceClient.prototype.assignCheckinEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.web_partnership.InspectorService/AssignCheckinEvent',
      request,
      metadata || {},
      methodDescriptor_InspectorService_AssignCheckinEvent,
      callback);
};


/**
 * @param {!proto.ticket.web_partnership.AssignCheckinEventReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.web_partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.ticket.web_partnership.InspectorServicePromiseClient.prototype.assignCheckinEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.web_partnership.InspectorService/AssignCheckinEvent',
      request,
      metadata || {},
      methodDescriptor_InspectorService_AssignCheckinEvent);
};


module.exports = proto.ticket.web_partnership;

