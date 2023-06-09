/**
 * @fileoverview gRPC-Web generated client stub for ticket.mobile_inspector
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: ticket/mobile_inspector/paper_ticket.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var ticket_mobile_inspector_base_pb = require('../../ticket/mobile_inspector/base_pb.js')
const proto = {};
proto.ticket = {};
proto.ticket.mobile_inspector = require('./paper_ticket_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ticket.mobile_inspector.PaperTicketServiceClient =
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
proto.ticket.mobile_inspector.PaperTicketServicePromiseClient =
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
 *   !proto.ticket.mobile_inspector.GetPaperTicketByCodeReq,
 *   !proto.ticket.mobile_inspector.GetPaperTicketByCodeRes>}
 */
const methodDescriptor_PaperTicketService_GetPaperTicketByCode = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.PaperTicketService/GetPaperTicketByCode',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.GetPaperTicketByCodeReq,
  proto.ticket.mobile_inspector.GetPaperTicketByCodeRes,
  /**
   * @param {!proto.ticket.mobile_inspector.GetPaperTicketByCodeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticket.mobile_inspector.GetPaperTicketByCodeRes.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.GetPaperTicketByCodeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.GetPaperTicketByCodeRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.GetPaperTicketByCodeRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.PaperTicketServiceClient.prototype.getPaperTicketByCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.PaperTicketService/GetPaperTicketByCode',
      request,
      metadata || {},
      methodDescriptor_PaperTicketService_GetPaperTicketByCode,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.GetPaperTicketByCodeReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.GetPaperTicketByCodeRes>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.PaperTicketServicePromiseClient.prototype.getPaperTicketByCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.PaperTicketService/GetPaperTicketByCode',
      request,
      metadata || {},
      methodDescriptor_PaperTicketService_GetPaperTicketByCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.MapPaperTicketInfoAndCheckinReq,
 *   !proto.ticket.mobile_inspector.Empty>}
 */
const methodDescriptor_PaperTicketService_MapPaperTicketInfoAndCheckin = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.PaperTicketService/MapPaperTicketInfoAndCheckin',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.MapPaperTicketInfoAndCheckinReq,
  ticket_mobile_inspector_base_pb.Empty,
  /**
   * @param {!proto.ticket.mobile_inspector.MapPaperTicketInfoAndCheckinReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ticket_mobile_inspector_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.MapPaperTicketInfoAndCheckinReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.PaperTicketServiceClient.prototype.mapPaperTicketInfoAndCheckin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.PaperTicketService/MapPaperTicketInfoAndCheckin',
      request,
      metadata || {},
      methodDescriptor_PaperTicketService_MapPaperTicketInfoAndCheckin,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.MapPaperTicketInfoAndCheckinReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.Empty>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.PaperTicketServicePromiseClient.prototype.mapPaperTicketInfoAndCheckin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.PaperTicketService/MapPaperTicketInfoAndCheckin',
      request,
      metadata || {},
      methodDescriptor_PaperTicketService_MapPaperTicketInfoAndCheckin);
};


module.exports = proto.ticket.mobile_inspector;

