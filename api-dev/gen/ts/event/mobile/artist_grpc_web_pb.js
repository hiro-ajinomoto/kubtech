/**
 * @fileoverview gRPC-Web generated client stub for event.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/mobile/artist.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var base_base_pb = require('../../base/base_pb.js')

var event_mobile_base_pb = require('../../event/mobile/base_pb.js')
const proto = {};
proto.event = {};
proto.event.mobile = require('./artist_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.event.mobile.ArtistServiceClient =
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
proto.event.mobile.ArtistServicePromiseClient =
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
 *   !proto.event.mobile.GetArtistDetailReq,
 *   !proto.event.mobile.GetArtistDetailRes>}
 */
const methodDescriptor_ArtistService_GetArtistDetail = new grpc.web.MethodDescriptor(
  '/event.mobile.ArtistService/GetArtistDetail',
  grpc.web.MethodType.UNARY,
  proto.event.mobile.GetArtistDetailReq,
  proto.event.mobile.GetArtistDetailRes,
  /**
   * @param {!proto.event.mobile.GetArtistDetailReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.mobile.GetArtistDetailRes.deserializeBinary
);


/**
 * @param {!proto.event.mobile.GetArtistDetailReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.mobile.GetArtistDetailRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.mobile.GetArtistDetailRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.mobile.ArtistServiceClient.prototype.getArtistDetail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.mobile.ArtistService/GetArtistDetail',
      request,
      metadata || {},
      methodDescriptor_ArtistService_GetArtistDetail,
      callback);
};


/**
 * @param {!proto.event.mobile.GetArtistDetailReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.mobile.GetArtistDetailRes>}
 *     Promise that resolves to the response
 */
proto.event.mobile.ArtistServicePromiseClient.prototype.getArtistDetail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.mobile.ArtistService/GetArtistDetail',
      request,
      metadata || {},
      methodDescriptor_ArtistService_GetArtistDetail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.mobile.ListArtistReq,
 *   !proto.event.mobile.ListArtistRes>}
 */
const methodDescriptor_ArtistService_ListArtist = new grpc.web.MethodDescriptor(
  '/event.mobile.ArtistService/ListArtist',
  grpc.web.MethodType.UNARY,
  proto.event.mobile.ListArtistReq,
  proto.event.mobile.ListArtistRes,
  /**
   * @param {!proto.event.mobile.ListArtistReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.mobile.ListArtistRes.deserializeBinary
);


/**
 * @param {!proto.event.mobile.ListArtistReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.mobile.ListArtistRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.mobile.ListArtistRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.mobile.ArtistServiceClient.prototype.listArtist =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.mobile.ArtistService/ListArtist',
      request,
      metadata || {},
      methodDescriptor_ArtistService_ListArtist,
      callback);
};


/**
 * @param {!proto.event.mobile.ListArtistReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.mobile.ListArtistRes>}
 *     Promise that resolves to the response
 */
proto.event.mobile.ArtistServicePromiseClient.prototype.listArtist =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.mobile.ArtistService/ListArtist',
      request,
      metadata || {},
      methodDescriptor_ArtistService_ListArtist);
};


module.exports = proto.event.mobile;

