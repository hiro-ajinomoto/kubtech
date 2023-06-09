/**
 * @fileoverview gRPC-Web generated client stub for partnership.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/partnership/web_partnership/partnership.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_partnership_web_partnership_base_pb = require('../../../proto/partnership/web_partnership/base_pb.js')
const proto = {};
proto.partnership = {};
proto.partnership.web_partnership = require('./partnership_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.partnership.web_partnership.PartnershipServiceClient =
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
proto.partnership.web_partnership.PartnershipServicePromiseClient =
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
 *   !proto.partnership.web_partnership.UpdatePartnershipReq,
 *   !proto.partnership.web_partnership.Empty>}
 */
const methodDescriptor_PartnershipService_UpdatePartnership = new grpc.web.MethodDescriptor(
  '/partnership.web_partnership.PartnershipService/UpdatePartnership',
  grpc.web.MethodType.UNARY,
  proto.partnership.web_partnership.UpdatePartnershipReq,
  proto_partnership_web_partnership_base_pb.Empty,
  /**
   * @param {!proto.partnership.web_partnership.UpdatePartnershipReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_partnership_web_partnership_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.partnership.web_partnership.UpdatePartnershipReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.web_partnership.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.web_partnership.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.web_partnership.PartnershipServiceClient.prototype.updatePartnership =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.web_partnership.PartnershipService/UpdatePartnership',
      request,
      metadata || {},
      methodDescriptor_PartnershipService_UpdatePartnership,
      callback);
};


/**
 * @param {!proto.partnership.web_partnership.UpdatePartnershipReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.web_partnership.Empty>}
 *     Promise that resolves to the response
 */
proto.partnership.web_partnership.PartnershipServicePromiseClient.prototype.updatePartnership =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.web_partnership.PartnershipService/UpdatePartnership',
      request,
      metadata || {},
      methodDescriptor_PartnershipService_UpdatePartnership);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partnership.web_partnership.PublicGetPartnershipByCodeReq,
 *   !proto.partnership.web_partnership.PublicGetPartnershipByCodeRes>}
 */
const methodDescriptor_PartnershipService_PublicGetPartnershipByCode = new grpc.web.MethodDescriptor(
  '/partnership.web_partnership.PartnershipService/PublicGetPartnershipByCode',
  grpc.web.MethodType.UNARY,
  proto.partnership.web_partnership.PublicGetPartnershipByCodeReq,
  proto.partnership.web_partnership.PublicGetPartnershipByCodeRes,
  /**
   * @param {!proto.partnership.web_partnership.PublicGetPartnershipByCodeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partnership.web_partnership.PublicGetPartnershipByCodeRes.deserializeBinary
);


/**
 * @param {!proto.partnership.web_partnership.PublicGetPartnershipByCodeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partnership.web_partnership.PublicGetPartnershipByCodeRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partnership.web_partnership.PublicGetPartnershipByCodeRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partnership.web_partnership.PartnershipServiceClient.prototype.publicGetPartnershipByCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partnership.web_partnership.PartnershipService/PublicGetPartnershipByCode',
      request,
      metadata || {},
      methodDescriptor_PartnershipService_PublicGetPartnershipByCode,
      callback);
};


/**
 * @param {!proto.partnership.web_partnership.PublicGetPartnershipByCodeReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partnership.web_partnership.PublicGetPartnershipByCodeRes>}
 *     Promise that resolves to the response
 */
proto.partnership.web_partnership.PartnershipServicePromiseClient.prototype.publicGetPartnershipByCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partnership.web_partnership.PartnershipService/PublicGetPartnershipByCode',
      request,
      metadata || {},
      methodDescriptor_PartnershipService_PublicGetPartnershipByCode);
};


module.exports = proto.partnership.web_partnership;

