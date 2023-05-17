/**
 * @fileoverview gRPC-Web generated client stub for media.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: media/web_partnership/media.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var media_base_media_pb = require('../../media/base_media_pb.js')

var media_web_partnership_base_pb = require('../../media/web_partnership/base_pb.js')
const proto = {};
proto.media = {};
proto.media.web_partnership = require('./media_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.media.web_partnership.MediaServiceClient =
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
proto.media.web_partnership.MediaServicePromiseClient =
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
 *   !proto.media.web_partnership.CreateMediaReq,
 *   !proto.media.web_partnership.CreateMediaRes>}
 */
const methodDescriptor_MediaService_CreateMedia = new grpc.web.MethodDescriptor(
  '/media.web_partnership.MediaService/CreateMedia',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.CreateMediaReq,
  proto.media.web_partnership.CreateMediaRes,
  /**
   * @param {!proto.media.web_partnership.CreateMediaReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.CreateMediaRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.CreateMediaReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.CreateMediaRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.CreateMediaRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.MediaServiceClient.prototype.createMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.MediaService/CreateMedia',
      request,
      metadata || {},
      methodDescriptor_MediaService_CreateMedia,
      callback);
};


/**
 * @param {!proto.media.web_partnership.CreateMediaReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.CreateMediaRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.MediaServicePromiseClient.prototype.createMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.MediaService/CreateMedia',
      request,
      metadata || {},
      methodDescriptor_MediaService_CreateMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.RetrieveMediaReq,
 *   !proto.media.web_partnership.RetrieveMediaRes>}
 */
const methodDescriptor_MediaService_RetrieveMedia = new grpc.web.MethodDescriptor(
  '/media.web_partnership.MediaService/RetrieveMedia',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.RetrieveMediaReq,
  proto.media.web_partnership.RetrieveMediaRes,
  /**
   * @param {!proto.media.web_partnership.RetrieveMediaReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.RetrieveMediaRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.RetrieveMediaReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.RetrieveMediaRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.RetrieveMediaRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.MediaServiceClient.prototype.retrieveMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.MediaService/RetrieveMedia',
      request,
      metadata || {},
      methodDescriptor_MediaService_RetrieveMedia,
      callback);
};


/**
 * @param {!proto.media.web_partnership.RetrieveMediaReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.RetrieveMediaRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.MediaServicePromiseClient.prototype.retrieveMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.MediaService/RetrieveMedia',
      request,
      metadata || {},
      methodDescriptor_MediaService_RetrieveMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.UpdateMediaReq,
 *   !proto.media.Empty>}
 */
const methodDescriptor_MediaService_UpdateMedia = new grpc.web.MethodDescriptor(
  '/media.web_partnership.MediaService/UpdateMedia',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.UpdateMediaReq,
  media_base_media_pb.Empty,
  /**
   * @param {!proto.media.web_partnership.UpdateMediaReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  media_base_media_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.UpdateMediaReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.MediaServiceClient.prototype.updateMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.MediaService/UpdateMedia',
      request,
      metadata || {},
      methodDescriptor_MediaService_UpdateMedia,
      callback);
};


/**
 * @param {!proto.media.web_partnership.UpdateMediaReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.Empty>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.MediaServicePromiseClient.prototype.updateMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.MediaService/UpdateMedia',
      request,
      metadata || {},
      methodDescriptor_MediaService_UpdateMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.DeleteMediaReq,
 *   !proto.media.Empty>}
 */
const methodDescriptor_MediaService_DeleteMedia = new grpc.web.MethodDescriptor(
  '/media.web_partnership.MediaService/DeleteMedia',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.DeleteMediaReq,
  media_base_media_pb.Empty,
  /**
   * @param {!proto.media.web_partnership.DeleteMediaReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  media_base_media_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.DeleteMediaReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.MediaServiceClient.prototype.deleteMedia =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.MediaService/DeleteMedia',
      request,
      metadata || {},
      methodDescriptor_MediaService_DeleteMedia,
      callback);
};


/**
 * @param {!proto.media.web_partnership.DeleteMediaReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.Empty>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.MediaServicePromiseClient.prototype.deleteMedia =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.MediaService/DeleteMedia',
      request,
      metadata || {},
      methodDescriptor_MediaService_DeleteMedia);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.ListMediasReq,
 *   !proto.media.web_partnership.ListMediasRes>}
 */
const methodDescriptor_MediaService_ListMedias = new grpc.web.MethodDescriptor(
  '/media.web_partnership.MediaService/ListMedias',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.ListMediasReq,
  proto.media.web_partnership.ListMediasRes,
  /**
   * @param {!proto.media.web_partnership.ListMediasReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.ListMediasRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.ListMediasReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.ListMediasRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.ListMediasRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.MediaServiceClient.prototype.listMedias =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.MediaService/ListMedias',
      request,
      metadata || {},
      methodDescriptor_MediaService_ListMedias,
      callback);
};


/**
 * @param {!proto.media.web_partnership.ListMediasReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.ListMediasRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.MediaServicePromiseClient.prototype.listMedias =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.MediaService/ListMedias',
      request,
      metadata || {},
      methodDescriptor_MediaService_ListMedias);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.InternalListMediaByIdsReq,
 *   !proto.media.web_partnership.InternalListMediaByIdsRes>}
 */
const methodDescriptor_MediaService_InternalListMediaByIds = new grpc.web.MethodDescriptor(
  '/media.web_partnership.MediaService/InternalListMediaByIds',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.InternalListMediaByIdsReq,
  proto.media.web_partnership.InternalListMediaByIdsRes,
  /**
   * @param {!proto.media.web_partnership.InternalListMediaByIdsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.InternalListMediaByIdsRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.InternalListMediaByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.InternalListMediaByIdsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.InternalListMediaByIdsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.MediaServiceClient.prototype.internalListMediaByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.MediaService/InternalListMediaByIds',
      request,
      metadata || {},
      methodDescriptor_MediaService_InternalListMediaByIds,
      callback);
};


/**
 * @param {!proto.media.web_partnership.InternalListMediaByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.InternalListMediaByIdsRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.MediaServicePromiseClient.prototype.internalListMediaByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.MediaService/InternalListMediaByIds',
      request,
      metadata || {},
      methodDescriptor_MediaService_InternalListMediaByIds);
};


module.exports = proto.media.web_partnership;

