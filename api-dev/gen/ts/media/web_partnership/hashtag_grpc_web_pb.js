/**
 * @fileoverview gRPC-Web generated client stub for media.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: media/web_partnership/hashtag.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var media_base_media_pb = require('../../media/base_media_pb.js')

var media_web_partnership_base_pb = require('../../media/web_partnership/base_pb.js')
const proto = {};
proto.media = {};
proto.media.web_partnership = require('./hashtag_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.media.web_partnership.HashtagServiceClient =
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
proto.media.web_partnership.HashtagServicePromiseClient =
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
 *   !proto.media.web_partnership.CreateHashtagReq,
 *   !proto.media.web_partnership.CreateHashtagRes>}
 */
const methodDescriptor_HashtagService_CreateHashtag = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/CreateHashtag',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.CreateHashtagReq,
  proto.media.web_partnership.CreateHashtagRes,
  /**
   * @param {!proto.media.web_partnership.CreateHashtagReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.CreateHashtagRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.CreateHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.CreateHashtagRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.CreateHashtagRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.createHashtag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/CreateHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_CreateHashtag,
      callback);
};


/**
 * @param {!proto.media.web_partnership.CreateHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.CreateHashtagRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.createHashtag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/CreateHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_CreateHashtag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.UpdateHashtagReq,
 *   !proto.media.Empty>}
 */
const methodDescriptor_HashtagService_UpdateHashtag = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/UpdateHashtag',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.UpdateHashtagReq,
  media_base_media_pb.Empty,
  /**
   * @param {!proto.media.web_partnership.UpdateHashtagReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  media_base_media_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.UpdateHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.updateHashtag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/UpdateHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_UpdateHashtag,
      callback);
};


/**
 * @param {!proto.media.web_partnership.UpdateHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.Empty>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.updateHashtag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/UpdateHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_UpdateHashtag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.DeleteHashtagReq,
 *   !proto.media.Empty>}
 */
const methodDescriptor_HashtagService_DeleteHashtag = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/DeleteHashtag',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.DeleteHashtagReq,
  media_base_media_pb.Empty,
  /**
   * @param {!proto.media.web_partnership.DeleteHashtagReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  media_base_media_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.DeleteHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.deleteHashtag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/DeleteHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_DeleteHashtag,
      callback);
};


/**
 * @param {!proto.media.web_partnership.DeleteHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.Empty>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.deleteHashtag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/DeleteHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_DeleteHashtag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.RetrieveHashtagReq,
 *   !proto.media.web_partnership.RetrieveHashtagRes>}
 */
const methodDescriptor_HashtagService_RetrieveHashtag = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/RetrieveHashtag',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.RetrieveHashtagReq,
  proto.media.web_partnership.RetrieveHashtagRes,
  /**
   * @param {!proto.media.web_partnership.RetrieveHashtagReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.RetrieveHashtagRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.RetrieveHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.RetrieveHashtagRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.RetrieveHashtagRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.retrieveHashtag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/RetrieveHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_RetrieveHashtag,
      callback);
};


/**
 * @param {!proto.media.web_partnership.RetrieveHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.RetrieveHashtagRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.retrieveHashtag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/RetrieveHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_RetrieveHashtag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.ListHashtagReq,
 *   !proto.media.web_partnership.ListHashtagRes>}
 */
const methodDescriptor_HashtagService_ListRetrieveHashtag = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/ListRetrieveHashtag',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.ListHashtagReq,
  proto.media.web_partnership.ListHashtagRes,
  /**
   * @param {!proto.media.web_partnership.ListHashtagReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.ListHashtagRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.ListHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.ListHashtagRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.ListHashtagRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.listRetrieveHashtag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/ListRetrieveHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_ListRetrieveHashtag,
      callback);
};


/**
 * @param {!proto.media.web_partnership.ListHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.ListHashtagRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.listRetrieveHashtag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/ListRetrieveHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_ListRetrieveHashtag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.PublicRetrieveHashtagReq,
 *   !proto.media.web_partnership.PublicRetrieveHashtagRes>}
 */
const methodDescriptor_HashtagService_PublicRetrieveHashtag = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/PublicRetrieveHashtag',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.PublicRetrieveHashtagReq,
  proto.media.web_partnership.PublicRetrieveHashtagRes,
  /**
   * @param {!proto.media.web_partnership.PublicRetrieveHashtagReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.PublicRetrieveHashtagRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.PublicRetrieveHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.PublicRetrieveHashtagRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.PublicRetrieveHashtagRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.publicRetrieveHashtag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/PublicRetrieveHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_PublicRetrieveHashtag,
      callback);
};


/**
 * @param {!proto.media.web_partnership.PublicRetrieveHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.PublicRetrieveHashtagRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.publicRetrieveHashtag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/PublicRetrieveHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_PublicRetrieveHashtag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.PublicListHashtagReq,
 *   !proto.media.web_partnership.PublicListHashtagRes>}
 */
const methodDescriptor_HashtagService_PublicListHashtag = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/PublicListHashtag',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.PublicListHashtagReq,
  proto.media.web_partnership.PublicListHashtagRes,
  /**
   * @param {!proto.media.web_partnership.PublicListHashtagReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.PublicListHashtagRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.PublicListHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.PublicListHashtagRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.PublicListHashtagRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.publicListHashtag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/PublicListHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_PublicListHashtag,
      callback);
};


/**
 * @param {!proto.media.web_partnership.PublicListHashtagReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.PublicListHashtagRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.publicListHashtag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/PublicListHashtag',
      request,
      metadata || {},
      methodDescriptor_HashtagService_PublicListHashtag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.InternalListHashtagByIdsReq,
 *   !proto.media.web_partnership.InternalListHashtagByIdsRes>}
 */
const methodDescriptor_HashtagService_InternalListHashtagByIds = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/InternalListHashtagByIds',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.InternalListHashtagByIdsReq,
  proto.media.web_partnership.InternalListHashtagByIdsRes,
  /**
   * @param {!proto.media.web_partnership.InternalListHashtagByIdsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.InternalListHashtagByIdsRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.InternalListHashtagByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.InternalListHashtagByIdsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.InternalListHashtagByIdsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.internalListHashtagByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/InternalListHashtagByIds',
      request,
      metadata || {},
      methodDescriptor_HashtagService_InternalListHashtagByIds,
      callback);
};


/**
 * @param {!proto.media.web_partnership.InternalListHashtagByIdsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.InternalListHashtagByIdsRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.internalListHashtagByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/InternalListHashtagByIds',
      request,
      metadata || {},
      methodDescriptor_HashtagService_InternalListHashtagByIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.media.web_partnership.InternalUpsertHashtagsReq,
 *   !proto.media.web_partnership.InternalUpsertHashtagsRes>}
 */
const methodDescriptor_HashtagService_InternalUpsertHashtags = new grpc.web.MethodDescriptor(
  '/media.web_partnership.HashtagService/InternalUpsertHashtags',
  grpc.web.MethodType.UNARY,
  proto.media.web_partnership.InternalUpsertHashtagsReq,
  proto.media.web_partnership.InternalUpsertHashtagsRes,
  /**
   * @param {!proto.media.web_partnership.InternalUpsertHashtagsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.media.web_partnership.InternalUpsertHashtagsRes.deserializeBinary
);


/**
 * @param {!proto.media.web_partnership.InternalUpsertHashtagsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.media.web_partnership.InternalUpsertHashtagsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.media.web_partnership.InternalUpsertHashtagsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.media.web_partnership.HashtagServiceClient.prototype.internalUpsertHashtags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/media.web_partnership.HashtagService/InternalUpsertHashtags',
      request,
      metadata || {},
      methodDescriptor_HashtagService_InternalUpsertHashtags,
      callback);
};


/**
 * @param {!proto.media.web_partnership.InternalUpsertHashtagsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.media.web_partnership.InternalUpsertHashtagsRes>}
 *     Promise that resolves to the response
 */
proto.media.web_partnership.HashtagServicePromiseClient.prototype.internalUpsertHashtags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/media.web_partnership.HashtagService/InternalUpsertHashtags',
      request,
      metadata || {},
      methodDescriptor_HashtagService_InternalUpsertHashtags);
};


module.exports = proto.media.web_partnership;

