/**
 * @fileoverview gRPC-Web generated client stub for event.web_partnership
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/web_partnership/seat_map.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var base_base_pb = require('../../base/base_pb.js')
const proto = {};
proto.event = {};
proto.event.web_partnership = require('./seat_map_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.event.web_partnership.SeatMapServiceClient =
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
proto.event.web_partnership.SeatMapServicePromiseClient =
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
 *   !proto.event.web_partnership.CreateSeatMapReq,
 *   !proto.event.web_partnership.CreateSeatMapRes>}
 */
const methodDescriptor_SeatMapService_CreateSeatMap = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/CreateSeatMap',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.CreateSeatMapReq,
  proto.event.web_partnership.CreateSeatMapRes,
  /**
   * @param {!proto.event.web_partnership.CreateSeatMapReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.CreateSeatMapRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.CreateSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.CreateSeatMapRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.CreateSeatMapRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.createSeatMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/CreateSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_CreateSeatMap,
      callback);
};


/**
 * @param {!proto.event.web_partnership.CreateSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.CreateSeatMapRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.createSeatMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/CreateSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_CreateSeatMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.UpdateSeatMapReq,
 *   !proto.base.Empty>}
 */
const methodDescriptor_SeatMapService_UpdateSeatMap = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/UpdateSeatMap',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.UpdateSeatMapReq,
  base_base_pb.Empty,
  /**
   * @param {!proto.event.web_partnership.UpdateSeatMapReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.UpdateSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.base.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.base.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.updateSeatMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/UpdateSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_UpdateSeatMap,
      callback);
};


/**
 * @param {!proto.event.web_partnership.UpdateSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.base.Empty>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.updateSeatMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/UpdateSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_UpdateSeatMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.DeleteSeatMapReq,
 *   !proto.base.Empty>}
 */
const methodDescriptor_SeatMapService_DeleteSeatMap = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/DeleteSeatMap',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.DeleteSeatMapReq,
  base_base_pb.Empty,
  /**
   * @param {!proto.event.web_partnership.DeleteSeatMapReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.DeleteSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.base.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.base.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.deleteSeatMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/DeleteSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_DeleteSeatMap,
      callback);
};


/**
 * @param {!proto.event.web_partnership.DeleteSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.base.Empty>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.deleteSeatMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/DeleteSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_DeleteSeatMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.ListSeatMapReq,
 *   !proto.event.web_partnership.ListSeatMapRes>}
 */
const methodDescriptor_SeatMapService_ListSeatMap = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/ListSeatMap',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.ListSeatMapReq,
  proto.event.web_partnership.ListSeatMapRes,
  /**
   * @param {!proto.event.web_partnership.ListSeatMapReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.ListSeatMapRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.ListSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.ListSeatMapRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.ListSeatMapRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.listSeatMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/ListSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_ListSeatMap,
      callback);
};


/**
 * @param {!proto.event.web_partnership.ListSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.ListSeatMapRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.listSeatMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/ListSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_ListSeatMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.RetrieveSeatMapReq,
 *   !proto.event.web_partnership.RetrieveSeatMapRes>}
 */
const methodDescriptor_SeatMapService_RetrieveSeatMap = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/RetrieveSeatMap',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.RetrieveSeatMapReq,
  proto.event.web_partnership.RetrieveSeatMapRes,
  /**
   * @param {!proto.event.web_partnership.RetrieveSeatMapReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.RetrieveSeatMapRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.RetrieveSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.RetrieveSeatMapRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.RetrieveSeatMapRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.retrieveSeatMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/RetrieveSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_RetrieveSeatMap,
      callback);
};


/**
 * @param {!proto.event.web_partnership.RetrieveSeatMapReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.RetrieveSeatMapRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.retrieveSeatMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/RetrieveSeatMap',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_RetrieveSeatMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.CreateSeatBlockReq,
 *   !proto.event.web_partnership.CreateSeatBlockRes>}
 */
const methodDescriptor_SeatMapService_CreateSeatBlock = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/CreateSeatBlock',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.CreateSeatBlockReq,
  proto.event.web_partnership.CreateSeatBlockRes,
  /**
   * @param {!proto.event.web_partnership.CreateSeatBlockReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.CreateSeatBlockRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.CreateSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.CreateSeatBlockRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.CreateSeatBlockRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.createSeatBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/CreateSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_CreateSeatBlock,
      callback);
};


/**
 * @param {!proto.event.web_partnership.CreateSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.CreateSeatBlockRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.createSeatBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/CreateSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_CreateSeatBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.ListSeatBlockReq,
 *   !proto.event.web_partnership.ListSeatBlockRes>}
 */
const methodDescriptor_SeatMapService_ListSeatBlock = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/ListSeatBlock',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.ListSeatBlockReq,
  proto.event.web_partnership.ListSeatBlockRes,
  /**
   * @param {!proto.event.web_partnership.ListSeatBlockReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.ListSeatBlockRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.ListSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.ListSeatBlockRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.ListSeatBlockRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.listSeatBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/ListSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_ListSeatBlock,
      callback);
};


/**
 * @param {!proto.event.web_partnership.ListSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.ListSeatBlockRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.listSeatBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/ListSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_ListSeatBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.RetrieveSeatBlockReq,
 *   !proto.event.web_partnership.RetrieveSeatBlockRes>}
 */
const methodDescriptor_SeatMapService_RetrieveSeatBlock = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/RetrieveSeatBlock',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.RetrieveSeatBlockReq,
  proto.event.web_partnership.RetrieveSeatBlockRes,
  /**
   * @param {!proto.event.web_partnership.RetrieveSeatBlockReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.RetrieveSeatBlockRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.RetrieveSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.RetrieveSeatBlockRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.RetrieveSeatBlockRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.retrieveSeatBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/RetrieveSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_RetrieveSeatBlock,
      callback);
};


/**
 * @param {!proto.event.web_partnership.RetrieveSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.RetrieveSeatBlockRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.retrieveSeatBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/RetrieveSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_RetrieveSeatBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.UpdateSeatBlockReq,
 *   !proto.base.Empty>}
 */
const methodDescriptor_SeatMapService_UpdateSeatBlock = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/UpdateSeatBlock',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.UpdateSeatBlockReq,
  base_base_pb.Empty,
  /**
   * @param {!proto.event.web_partnership.UpdateSeatBlockReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.UpdateSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.base.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.base.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.updateSeatBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/UpdateSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_UpdateSeatBlock,
      callback);
};


/**
 * @param {!proto.event.web_partnership.UpdateSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.base.Empty>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.updateSeatBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/UpdateSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_UpdateSeatBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.DeleteSeatBlockReq,
 *   !proto.base.Empty>}
 */
const methodDescriptor_SeatMapService_DeleteSeatBlock = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/DeleteSeatBlock',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.DeleteSeatBlockReq,
  base_base_pb.Empty,
  /**
   * @param {!proto.event.web_partnership.DeleteSeatBlockReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.DeleteSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.base.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.base.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.deleteSeatBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/DeleteSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_DeleteSeatBlock,
      callback);
};


/**
 * @param {!proto.event.web_partnership.DeleteSeatBlockReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.base.Empty>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.deleteSeatBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/DeleteSeatBlock',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_DeleteSeatBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.UpsertDecorationReq,
 *   !proto.base.Empty>}
 */
const methodDescriptor_SeatMapService_UpsertDecoration = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/UpsertDecoration',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.UpsertDecorationReq,
  base_base_pb.Empty,
  /**
   * @param {!proto.event.web_partnership.UpsertDecorationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  base_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.UpsertDecorationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.base.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.base.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.upsertDecoration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/UpsertDecoration',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_UpsertDecoration,
      callback);
};


/**
 * @param {!proto.event.web_partnership.UpsertDecorationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.base.Empty>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.upsertDecoration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/UpsertDecoration',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_UpsertDecoration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.ListDecorationReq,
 *   !proto.event.web_partnership.ListSeatBlockRes>}
 */
const methodDescriptor_SeatMapService_ListDecoration = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/ListDecoration',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.ListDecorationReq,
  proto.event.web_partnership.ListSeatBlockRes,
  /**
   * @param {!proto.event.web_partnership.ListDecorationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.ListSeatBlockRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.ListDecorationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.ListSeatBlockRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.ListSeatBlockRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.listDecoration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/ListDecoration',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_ListDecoration,
      callback);
};


/**
 * @param {!proto.event.web_partnership.ListDecorationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.ListSeatBlockRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.listDecoration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/ListDecoration',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_ListDecoration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.event.web_partnership.UpdateSeatStatusReq,
 *   !proto.event.web_partnership.UpdateSeatStatusRes>}
 */
const methodDescriptor_SeatMapService_UpdateSeatStatus = new grpc.web.MethodDescriptor(
  '/event.web_partnership.SeatMapService/UpdateSeatStatus',
  grpc.web.MethodType.UNARY,
  proto.event.web_partnership.UpdateSeatStatusReq,
  proto.event.web_partnership.UpdateSeatStatusRes,
  /**
   * @param {!proto.event.web_partnership.UpdateSeatStatusReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.event.web_partnership.UpdateSeatStatusRes.deserializeBinary
);


/**
 * @param {!proto.event.web_partnership.UpdateSeatStatusReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.event.web_partnership.UpdateSeatStatusRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.event.web_partnership.UpdateSeatStatusRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.event.web_partnership.SeatMapServiceClient.prototype.updateSeatStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/UpdateSeatStatus',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_UpdateSeatStatus,
      callback);
};


/**
 * @param {!proto.event.web_partnership.UpdateSeatStatusReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.event.web_partnership.UpdateSeatStatusRes>}
 *     Promise that resolves to the response
 */
proto.event.web_partnership.SeatMapServicePromiseClient.prototype.updateSeatStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/event.web_partnership.SeatMapService/UpdateSeatStatus',
      request,
      metadata || {},
      methodDescriptor_SeatMapService_UpdateSeatStatus);
};


module.exports = proto.event.web_partnership;
