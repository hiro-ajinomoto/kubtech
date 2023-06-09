/**
 * @fileoverview gRPC-Web generated client stub for ticket.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: ticket/mobile/transferred_ticket.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ticket = {};
proto.ticket.mobile = require('./transferred_ticket_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ticket.mobile.TransferredTicketServiceClient =
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
proto.ticket.mobile.TransferredTicketServicePromiseClient =
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
 *   !proto.ticket.mobile.GetMyTransferredTicketByOrderIdReq,
 *   !proto.ticket.mobile.GetMyTransferredTicketByOrderIdRes>}
 */
const methodDescriptor_TransferredTicketService_GetMyTransferredTicketByOrderId = new grpc.web.MethodDescriptor(
  '/ticket.mobile.TransferredTicketService/GetMyTransferredTicketByOrderId',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile.GetMyTransferredTicketByOrderIdReq,
  proto.ticket.mobile.GetMyTransferredTicketByOrderIdRes,
  /**
   * @param {!proto.ticket.mobile.GetMyTransferredTicketByOrderIdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticket.mobile.GetMyTransferredTicketByOrderIdRes.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile.GetMyTransferredTicketByOrderIdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile.GetMyTransferredTicketByOrderIdRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile.GetMyTransferredTicketByOrderIdRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile.TransferredTicketServiceClient.prototype.getMyTransferredTicketByOrderId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile.TransferredTicketService/GetMyTransferredTicketByOrderId',
      request,
      metadata || {},
      methodDescriptor_TransferredTicketService_GetMyTransferredTicketByOrderId,
      callback);
};


/**
 * @param {!proto.ticket.mobile.GetMyTransferredTicketByOrderIdReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile.GetMyTransferredTicketByOrderIdRes>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile.TransferredTicketServicePromiseClient.prototype.getMyTransferredTicketByOrderId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile.TransferredTicketService/GetMyTransferredTicketByOrderId',
      request,
      metadata || {},
      methodDescriptor_TransferredTicketService_GetMyTransferredTicketByOrderId);
};


module.exports = proto.ticket.mobile;

