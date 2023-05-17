/**
 * @fileoverview gRPC-Web generated client stub for wallet.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/wallet/mobile/wallet.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_wallet_mobile_base_pb = require('../../../proto/wallet/mobile/base_pb.js')
const proto = {};
proto.wallet = {};
proto.wallet.mobile = require('./wallet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wallet.mobile.WalletServiceClient =
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
proto.wallet.mobile.WalletServicePromiseClient =
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
 *   !proto.wallet.mobile.TopUpReq,
 *   !proto.wallet.mobile.TopUpRes>}
 */
const methodDescriptor_WalletService_TopUp = new grpc.web.MethodDescriptor(
  '/wallet.mobile.WalletService/TopUp',
  grpc.web.MethodType.UNARY,
  proto.wallet.mobile.TopUpReq,
  proto.wallet.mobile.TopUpRes,
  /**
   * @param {!proto.wallet.mobile.TopUpReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wallet.mobile.TopUpRes.deserializeBinary
);


/**
 * @param {!proto.wallet.mobile.TopUpReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wallet.mobile.TopUpRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wallet.mobile.TopUpRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wallet.mobile.WalletServiceClient.prototype.topUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wallet.mobile.WalletService/TopUp',
      request,
      metadata || {},
      methodDescriptor_WalletService_TopUp,
      callback);
};


/**
 * @param {!proto.wallet.mobile.TopUpReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wallet.mobile.TopUpRes>}
 *     Promise that resolves to the response
 */
proto.wallet.mobile.WalletServicePromiseClient.prototype.topUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wallet.mobile.WalletService/TopUp',
      request,
      metadata || {},
      methodDescriptor_WalletService_TopUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wallet.mobile.CalculateTopUpAmountReq,
 *   !proto.wallet.mobile.CalculateTopUpAmountRes>}
 */
const methodDescriptor_WalletService_CalculateTopUpAmount = new grpc.web.MethodDescriptor(
  '/wallet.mobile.WalletService/CalculateTopUpAmount',
  grpc.web.MethodType.UNARY,
  proto.wallet.mobile.CalculateTopUpAmountReq,
  proto.wallet.mobile.CalculateTopUpAmountRes,
  /**
   * @param {!proto.wallet.mobile.CalculateTopUpAmountReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wallet.mobile.CalculateTopUpAmountRes.deserializeBinary
);


/**
 * @param {!proto.wallet.mobile.CalculateTopUpAmountReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wallet.mobile.CalculateTopUpAmountRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wallet.mobile.CalculateTopUpAmountRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wallet.mobile.WalletServiceClient.prototype.calculateTopUpAmount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wallet.mobile.WalletService/CalculateTopUpAmount',
      request,
      metadata || {},
      methodDescriptor_WalletService_CalculateTopUpAmount,
      callback);
};


/**
 * @param {!proto.wallet.mobile.CalculateTopUpAmountReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wallet.mobile.CalculateTopUpAmountRes>}
 *     Promise that resolves to the response
 */
proto.wallet.mobile.WalletServicePromiseClient.prototype.calculateTopUpAmount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wallet.mobile.WalletService/CalculateTopUpAmount',
      request,
      metadata || {},
      methodDescriptor_WalletService_CalculateTopUpAmount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wallet.mobile.GetWalletInfoReq,
 *   !proto.wallet.mobile.GetWalletInfoRes>}
 */
const methodDescriptor_WalletService_GetWalletInfo = new grpc.web.MethodDescriptor(
  '/wallet.mobile.WalletService/GetWalletInfo',
  grpc.web.MethodType.UNARY,
  proto.wallet.mobile.GetWalletInfoReq,
  proto.wallet.mobile.GetWalletInfoRes,
  /**
   * @param {!proto.wallet.mobile.GetWalletInfoReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wallet.mobile.GetWalletInfoRes.deserializeBinary
);


/**
 * @param {!proto.wallet.mobile.GetWalletInfoReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wallet.mobile.GetWalletInfoRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wallet.mobile.GetWalletInfoRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wallet.mobile.WalletServiceClient.prototype.getWalletInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wallet.mobile.WalletService/GetWalletInfo',
      request,
      metadata || {},
      methodDescriptor_WalletService_GetWalletInfo,
      callback);
};


/**
 * @param {!proto.wallet.mobile.GetWalletInfoReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wallet.mobile.GetWalletInfoRes>}
 *     Promise that resolves to the response
 */
proto.wallet.mobile.WalletServicePromiseClient.prototype.getWalletInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wallet.mobile.WalletService/GetWalletInfo',
      request,
      metadata || {},
      methodDescriptor_WalletService_GetWalletInfo);
};


module.exports = proto.wallet.mobile;
