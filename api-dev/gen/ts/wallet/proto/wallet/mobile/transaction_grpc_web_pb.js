/**
 * @fileoverview gRPC-Web generated client stub for wallet.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/wallet/mobile/transaction.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_wallet_mobile_base_pb = require('../../../proto/wallet/mobile/base_pb.js')
const proto = {};
proto.wallet = {};
proto.wallet.mobile = require('./transaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wallet.mobile.TransactionServiceClient =
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
proto.wallet.mobile.TransactionServicePromiseClient =
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
 *   !proto.wallet.mobile.GetTransactionsHistoryReq,
 *   !proto.wallet.mobile.GetTransactionsHistoryRes>}
 */
const methodDescriptor_TransactionService_GetTransactionsHistory = new grpc.web.MethodDescriptor(
  '/wallet.mobile.TransactionService/GetTransactionsHistory',
  grpc.web.MethodType.UNARY,
  proto.wallet.mobile.GetTransactionsHistoryReq,
  proto.wallet.mobile.GetTransactionsHistoryRes,
  /**
   * @param {!proto.wallet.mobile.GetTransactionsHistoryReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wallet.mobile.GetTransactionsHistoryRes.deserializeBinary
);


/**
 * @param {!proto.wallet.mobile.GetTransactionsHistoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wallet.mobile.GetTransactionsHistoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wallet.mobile.GetTransactionsHistoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wallet.mobile.TransactionServiceClient.prototype.getTransactionsHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wallet.mobile.TransactionService/GetTransactionsHistory',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransactionsHistory,
      callback);
};


/**
 * @param {!proto.wallet.mobile.GetTransactionsHistoryReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wallet.mobile.GetTransactionsHistoryRes>}
 *     Promise that resolves to the response
 */
proto.wallet.mobile.TransactionServicePromiseClient.prototype.getTransactionsHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wallet.mobile.TransactionService/GetTransactionsHistory',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransactionsHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wallet.mobile.GetTransactionInfoReq,
 *   !proto.wallet.mobile.GetTransactionInfoRes>}
 */
const methodDescriptor_TransactionService_GetTransactionInfo = new grpc.web.MethodDescriptor(
  '/wallet.mobile.TransactionService/GetTransactionInfo',
  grpc.web.MethodType.UNARY,
  proto.wallet.mobile.GetTransactionInfoReq,
  proto.wallet.mobile.GetTransactionInfoRes,
  /**
   * @param {!proto.wallet.mobile.GetTransactionInfoReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wallet.mobile.GetTransactionInfoRes.deserializeBinary
);


/**
 * @param {!proto.wallet.mobile.GetTransactionInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wallet.mobile.GetTransactionInfoRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wallet.mobile.GetTransactionInfoRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wallet.mobile.TransactionServiceClient.prototype.getTransactionInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wallet.mobile.TransactionService/GetTransactionInfo',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransactionInfo,
      callback);
};


/**
 * @param {!proto.wallet.mobile.GetTransactionInfoReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wallet.mobile.GetTransactionInfoRes>}
 *     Promise that resolves to the response
 */
proto.wallet.mobile.TransactionServicePromiseClient.prototype.getTransactionInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wallet.mobile.TransactionService/GetTransactionInfo',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransactionInfo);
};


module.exports = proto.wallet.mobile;

