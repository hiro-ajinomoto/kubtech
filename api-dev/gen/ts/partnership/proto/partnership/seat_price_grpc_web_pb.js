/**
 * @fileoverview gRPC-Web generated client stub for partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/partnership/seat_price.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_partnership_base_pb = require('../../proto/partnership/base_pb.js')
const proto = {};
proto.partnership = require('./seat_price_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.partnership.SeatPriceServiceClient =
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
proto.partnership.SeatPriceServicePromiseClient =
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
 *   !proto.partnership.RetrieveSeatPriceReq,
 *   !proto.partnership.RetrieveSeatPriceRes>}
 */
const methodDescriptor_SeatPriceService_RetrieveSeatPrice = new grpc.web.MethodDescriptor(
  '/partnership.SeatPriceService/RetrieveSeatPrice',
  grpc.web.MethodType.UNARY,
  proto.partnership.RetrieveSeatPriceReq,
  proto.partnership.RetrieveSeatPriceRes,
  /**
   * @param {!proto.partnership.RetrieveSeatPriceReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.RetrieveSeatPriceRes.deserializeBinary
);


/**
 * @param {!proto.partnership.RetrieveSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.RetrieveSeatPriceRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.RetrieveSeatPriceRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.SeatPriceServiceClient.prototype.retrieveSeatPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.SeatPriceService/RetrieveSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_RetrieveSeatPrice,
      callback);
};


/**
 * @param {!proto.partnership.RetrieveSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.RetrieveSeatPriceRes>}
 *     Promise that resolves to the response
 */
proto.partnership.SeatPriceServicePromiseClient.prototype.retrieveSeatPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.SeatPriceService/RetrieveSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_RetrieveSeatPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.ListSeatPriceReq,
 *   !proto.partnership.ListSeatPriceRes>}
 */
const methodDescriptor_SeatPriceService_ListSeatPrice = new grpc.web.MethodDescriptor(
  '/partnership.SeatPriceService/ListSeatPrice',
  grpc.web.MethodType.UNARY,
  proto.partnership.ListSeatPriceReq,
  proto.partnership.ListSeatPriceRes,
  /**
   * @param {!proto.partnership.ListSeatPriceReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.ListSeatPriceRes.deserializeBinary
);


/**
 * @param {!proto.partnership.ListSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.ListSeatPriceRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.ListSeatPriceRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.SeatPriceServiceClient.prototype.listSeatPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.SeatPriceService/ListSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_ListSeatPrice,
      callback);
};


/**
 * @param {!proto.partnership.ListSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.ListSeatPriceRes>}
 *     Promise that resolves to the response
 */
proto.partnership.SeatPriceServicePromiseClient.prototype.listSeatPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.SeatPriceService/ListSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_ListSeatPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.CreateSeatPriceReq,
 *   !proto.partnership.CreateSeatPriceRes>}
 */
const methodDescriptor_SeatPriceService_CreateSeatPrice = new grpc.web.MethodDescriptor(
  '/partnership.SeatPriceService/CreateSeatPrice',
  grpc.web.MethodType.UNARY,
  proto.partnership.CreateSeatPriceReq,
  proto.partnership.CreateSeatPriceRes,
  /**
   * @param {!proto.partnership.CreateSeatPriceReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.CreateSeatPriceRes.deserializeBinary
);


/**
 * @param {!proto.partnership.CreateSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.CreateSeatPriceRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.CreateSeatPriceRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.SeatPriceServiceClient.prototype.createSeatPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.SeatPriceService/CreateSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_CreateSeatPrice,
      callback);
};


/**
 * @param {!proto.partnership.CreateSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.CreateSeatPriceRes>}
 *     Promise that resolves to the response
 */
proto.partnership.SeatPriceServicePromiseClient.prototype.createSeatPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.SeatPriceService/CreateSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_CreateSeatPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.UpdateSeatPriceReq,
 *   !proto.partnership.Empty>}
 */
const methodDescriptor_SeatPriceService_UpdateSeatPrice = new grpc.web.MethodDescriptor(
  '/partnership.SeatPriceService/UpdateSeatPrice',
  grpc.web.MethodType.UNARY,
  proto.partnership.UpdateSeatPriceReq,
  proto_partnership_base_pb.Empty,
  /**
   * @param {!proto.partnership.UpdateSeatPriceReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.partnership.UpdateSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.SeatPriceServiceClient.prototype.updateSeatPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.SeatPriceService/UpdateSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_UpdateSeatPrice,
      callback);
};


/**
 * @param {!proto.partnership.UpdateSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.partnership.SeatPriceServicePromiseClient.prototype.updateSeatPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.SeatPriceService/UpdateSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_UpdateSeatPrice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.DeleteSeatPriceReq,
 *   !proto.partnership.Empty>}
 */
const methodDescriptor_SeatPriceService_DeleteSeatPrice = new grpc.web.MethodDescriptor(
  '/partnership.SeatPriceService/DeleteSeatPrice',
  grpc.web.MethodType.UNARY,
  proto.partnership.DeleteSeatPriceReq,
  proto_partnership_base_pb.Empty,
  /**
   * @param {!proto.partnership.DeleteSeatPriceReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.partnership.DeleteSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.SeatPriceServiceClient.prototype.deleteSeatPrice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.SeatPriceService/DeleteSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_DeleteSeatPrice,
      callback);
};


/**
 * @param {!proto.partnership.DeleteSeatPriceReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.partnership.SeatPriceServicePromiseClient.prototype.deleteSeatPrice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.SeatPriceService/DeleteSeatPrice',
      request,
      metadata || {},
      methodDescriptor_SeatPriceService_DeleteSeatPrice);
};


module.exports = proto.partnership;

