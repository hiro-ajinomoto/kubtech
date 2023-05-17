/**
 * @fileoverview gRPC-Web generated client stub for partner.backend
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/partner/backend/partnership_trading.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.partner = {};
proto.partner.backend = require('./partnership_trading_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.partner.backend.PartnershipTradingServiceClient =
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
proto.partner.backend.PartnershipTradingServicePromiseClient =
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
 *   !proto.partner.backend.CreatePartnershipTradingReq,
 *   !proto.partner.backend.CreatePartnershipTradingRes>}
 */
const methodDescriptor_PartnershipTradingService_CreatePartnershipTrading = new grpc.web.MethodDescriptor(
  '/partner.backend.PartnershipTradingService/CreatePartnershipTrading',
  grpc.web.MethodType.UNARY,
  proto.partner.backend.CreatePartnershipTradingReq,
  proto.partner.backend.CreatePartnershipTradingRes,
  /**
   * @param {!proto.partner.backend.CreatePartnershipTradingReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partner.backend.CreatePartnershipTradingRes.deserializeBinary
);


/**
 * @param {!proto.partner.backend.CreatePartnershipTradingReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partner.backend.CreatePartnershipTradingRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partner.backend.CreatePartnershipTradingRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partner.backend.PartnershipTradingServiceClient.prototype.createPartnershipTrading =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partner.backend.PartnershipTradingService/CreatePartnershipTrading',
      request,
      metadata || {},
      methodDescriptor_PartnershipTradingService_CreatePartnershipTrading,
      callback);
};


/**
 * @param {!proto.partner.backend.CreatePartnershipTradingReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partner.backend.CreatePartnershipTradingRes>}
 *     Promise that resolves to the response
 */
proto.partner.backend.PartnershipTradingServicePromiseClient.prototype.createPartnershipTrading =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partner.backend.PartnershipTradingService/CreatePartnershipTrading',
      request,
      metadata || {},
      methodDescriptor_PartnershipTradingService_CreatePartnershipTrading);
};


module.exports = proto.partner.backend;
