/**
 * @fileoverview gRPC-Web generated client stub for ticket.web_admin
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: ticket/web_admin/ticket.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var ticket_web_admin_base_pb = require('../../ticket/web_admin/base_pb.js')
const proto = {};
proto.ticket = {};
proto.ticket.web_admin = require('./ticket_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ticket.web_admin.TicketServiceClient =
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
proto.ticket.web_admin.TicketServicePromiseClient =
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
 *   !proto.ticket.web_admin.StreamTicketsReq,
 *   !proto.ticket.web_admin.Empty>}
 */
const methodDescriptor_TicketService_StreamTickets = new grpc.web.MethodDescriptor(
  '/ticket.web_admin.TicketService/StreamTickets',
  grpc.web.MethodType.UNARY,
  proto.ticket.web_admin.StreamTicketsReq,
  ticket_web_admin_base_pb.Empty,
  /**
   * @param {!proto.ticket.web_admin.StreamTicketsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ticket_web_admin_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ticket.web_admin.StreamTicketsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.web_admin.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.web_admin.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.web_admin.TicketServiceClient.prototype.streamTickets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.web_admin.TicketService/StreamTickets',
      request,
      metadata || {},
      methodDescriptor_TicketService_StreamTickets,
      callback);
};


/**
 * @param {!proto.ticket.web_admin.StreamTicketsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.web_admin.Empty>}
 *     Promise that resolves to the response
 */
proto.ticket.web_admin.TicketServicePromiseClient.prototype.streamTickets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.web_admin.TicketService/StreamTickets',
      request,
      metadata || {},
      methodDescriptor_TicketService_StreamTickets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.web_admin.MigrationReq,
 *   !proto.ticket.web_admin.Empty>}
 */
const methodDescriptor_TicketService_Migration = new grpc.web.MethodDescriptor(
  '/ticket.web_admin.TicketService/Migration',
  grpc.web.MethodType.UNARY,
  proto.ticket.web_admin.MigrationReq,
  ticket_web_admin_base_pb.Empty,
  /**
   * @param {!proto.ticket.web_admin.MigrationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ticket_web_admin_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ticket.web_admin.MigrationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.web_admin.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.web_admin.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.web_admin.TicketServiceClient.prototype.migration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.web_admin.TicketService/Migration',
      request,
      metadata || {},
      methodDescriptor_TicketService_Migration,
      callback);
};


/**
 * @param {!proto.ticket.web_admin.MigrationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.web_admin.Empty>}
 *     Promise that resolves to the response
 */
proto.ticket.web_admin.TicketServicePromiseClient.prototype.migration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.web_admin.TicketService/Migration',
      request,
      metadata || {},
      methodDescriptor_TicketService_Migration);
};


module.exports = proto.ticket.web_admin;
