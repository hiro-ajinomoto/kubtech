/**
 * @fileoverview gRPC-Web generated client stub for event.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/web_partnership/artist_role.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var base_base_pb = require('../../base/base_pb.js')
const proto = {};
proto.event = {};
proto.event.web_partnership = require('./artist_role_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.event.web_partnership.ArtistRoleServiceClient =
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
proto.event.web_partnership.ArtistRoleServicePromiseClient =
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
 *   !proto.event.web_partnership.ListArtistRoleReq,
 *   !proto.event.web_partnership.ListArtistRoleRes>}
 */
const methodDescriptor_ArtistRoleService_ListRetrieveArtistRole = new grpc.web.MethodDescriptor(
  '/event.web_partnership.ArtistRoleService/ListRetrieveArtistRole',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.ListArtistRoleReq,
  proto.event.web_partnership.ListArtistRoleRes,
  /**
   * @param {!proto.event.web_partnership.ListArtistRoleReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.ListArtistRoleRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.ListArtistRoleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.ListArtistRoleRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.ListArtistRoleRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.ArtistRoleServiceClient.prototype.listRetrieveArtistRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.ArtistRoleService/ListRetrieveArtistRole',
      request,
      metadata || {},
      methodDescriptor_ArtistRoleService_ListRetrieveArtistRole,
      callback);
};


/**
 * @param {!proto.event.web_partnership.ListArtistRoleReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.ListArtistRoleRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.ArtistRoleServicePromiseClient.prototype.listRetrieveArtistRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.ArtistRoleService/ListRetrieveArtistRole',
      request,
      metadata || {},
      methodDescriptor_ArtistRoleService_ListRetrieveArtistRole);
};


module.exports = proto.event.web_partnership;

