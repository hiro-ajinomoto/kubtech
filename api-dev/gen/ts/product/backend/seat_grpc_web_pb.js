/**
 * @fileoverview gRPC-Web generated client stub for product.backend
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: product/backend/seat.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.product = {};
proto.product.backend = require('./seat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.product.backend.SeatServiceClient =
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
proto.product.backend.SeatServicePromiseClient =
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
 *   !proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdReq,
 *   !proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdRes>}
 */
const methodDescriptor_SeatService_CheckIsAbleDeleteSeatsInPriceBlockId = new grpc.web.MethodDescriptor(
  '/product.backend.SeatService/CheckIsAbleDeleteSeatsInPriceBlockId',
  grpc.web.MethodType.UNARY,
  proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdReq,
  proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdRes,
  /**
   * @param {!proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdRes.deserializeBinary
);


/**
 * @param {!proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.SeatServiceClient.prototype.checkIsAbleDeleteSeatsInPriceBlockId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.SeatService/CheckIsAbleDeleteSeatsInPriceBlockId',
      request,
      metadata || {},
      methodDescriptor_SeatService_CheckIsAbleDeleteSeatsInPriceBlockId,
      callback);
};


/**
 * @param {!proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdRes>}
 *     Promise that resolves to the response
 */
proto.product.backend.SeatServicePromiseClient.prototype.checkIsAbleDeleteSeatsInPriceBlockId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.SeatService/CheckIsAbleDeleteSeatsInPriceBlockId',
      request,
      metadata || {},
      methodDescriptor_SeatService_CheckIsAbleDeleteSeatsInPriceBlockId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.product.backend.GetSeatsReq,
 *   !proto.product.backend.GetSeatsRes>}
 */
const methodDescriptor_SeatService_GetSeats = new grpc.web.MethodDescriptor(
  '/product.backend.SeatService/GetSeats',
  grpc.web.MethodType.UNARY,
  proto.product.backend.GetSeatsReq,
  proto.product.backend.GetSeatsRes,
  /**
   * @param {!proto.product.backend.GetSeatsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.product.backend.GetSeatsRes.deserializeBinary
);


/**
 * @param {!proto.product.backend.GetSeatsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.product.backend.GetSeatsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.product.backend.GetSeatsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.product.backend.SeatServiceClient.prototype.getSeats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/product.backend.SeatService/GetSeats',
      request,
      metadata || {},
      methodDescriptor_SeatService_GetSeats,
      callback);
};


/**
 * @param {!proto.product.backend.GetSeatsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.product.backend.GetSeatsRes>}
 *     Promise that resolves to the response
 */
proto.product.backend.SeatServicePromiseClient.prototype.getSeats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/product.backend.SeatService/GetSeats',
      request,
      metadata || {},
      methodDescriptor_SeatService_GetSeats);
};


module.exports = proto.product.backend;

