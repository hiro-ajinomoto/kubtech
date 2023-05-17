/**
 * @fileoverview gRPC-Web generated client stub for partner.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/partner/mobile/partner_location.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_partner_mobile_base_pb = require('../../../proto/partner/mobile/base_pb.js')
const proto = {};
proto.partner = {};
proto.partner.mobile = require('./partner_location_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.partner.mobile.PartnerLocationServiceClient =
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
proto.partner.mobile.PartnerLocationServicePromiseClient =
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
 *   !proto.partner.mobile.CreatePartnerLocationReq,
 *   !proto.partner.mobile.CreatePartnerLocationRes>}
 */
const methodDescriptor_PartnerLocationService_CreatePartnerLocation = new grpc.web.MethodDescriptor(
  '/partner.mobile.PartnerLocationService/CreatePartnerLocation',
  grpc.web.MethodType.UNARY,
  proto.partner.mobile.CreatePartnerLocationReq,
  proto.partner.mobile.CreatePartnerLocationRes,
  /**
   * @param {!proto.partner.mobile.CreatePartnerLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partner.mobile.CreatePartnerLocationRes.deserializeBinary
);


/**
 * @param {!proto.partner.mobile.CreatePartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partner.mobile.CreatePartnerLocationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partner.mobile.CreatePartnerLocationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partner.mobile.PartnerLocationServiceClient.prototype.createPartnerLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/CreatePartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_CreatePartnerLocation,
      callback);
};


/**
 * @param {!proto.partner.mobile.CreatePartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partner.mobile.CreatePartnerLocationRes>}
 *     Promise that resolves to the response
 */
proto.partner.mobile.PartnerLocationServicePromiseClient.prototype.createPartnerLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/CreatePartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_CreatePartnerLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partner.mobile.UpdatePartnerLocationReq,
 *   !proto.partner.mobile.Empty>}
 */
const methodDescriptor_PartnerLocationService_UpdatePartnerLocation = new grpc.web.MethodDescriptor(
  '/partner.mobile.PartnerLocationService/UpdatePartnerLocation',
  grpc.web.MethodType.UNARY,
  proto.partner.mobile.UpdatePartnerLocationReq,
  proto_partner_mobile_base_pb.Empty,
  /**
   * @param {!proto.partner.mobile.UpdatePartnerLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_partner_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.partner.mobile.UpdatePartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partner.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partner.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partner.mobile.PartnerLocationServiceClient.prototype.updatePartnerLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/UpdatePartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_UpdatePartnerLocation,
      callback);
};


/**
 * @param {!proto.partner.mobile.UpdatePartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partner.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.partner.mobile.PartnerLocationServicePromiseClient.prototype.updatePartnerLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/UpdatePartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_UpdatePartnerLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partner.mobile.DeletePartnerLocationReq,
 *   !proto.partner.mobile.Empty>}
 */
const methodDescriptor_PartnerLocationService_DeletePartnerLocation = new grpc.web.MethodDescriptor(
  '/partner.mobile.PartnerLocationService/DeletePartnerLocation',
  grpc.web.MethodType.UNARY,
  proto.partner.mobile.DeletePartnerLocationReq,
  proto_partner_mobile_base_pb.Empty,
  /**
   * @param {!proto.partner.mobile.DeletePartnerLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_partner_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.partner.mobile.DeletePartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partner.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partner.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partner.mobile.PartnerLocationServiceClient.prototype.deletePartnerLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/DeletePartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_DeletePartnerLocation,
      callback);
};


/**
 * @param {!proto.partner.mobile.DeletePartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partner.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.partner.mobile.PartnerLocationServicePromiseClient.prototype.deletePartnerLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/DeletePartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_DeletePartnerLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partner.mobile.RetrievePartnerLocationReq,
 *   !proto.partner.mobile.RetrievePartnerLocationRes>}
 */
const methodDescriptor_PartnerLocationService_RetrievePartnerLocation = new grpc.web.MethodDescriptor(
  '/partner.mobile.PartnerLocationService/RetrievePartnerLocation',
  grpc.web.MethodType.UNARY,
  proto.partner.mobile.RetrievePartnerLocationReq,
  proto.partner.mobile.RetrievePartnerLocationRes,
  /**
   * @param {!proto.partner.mobile.RetrievePartnerLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partner.mobile.RetrievePartnerLocationRes.deserializeBinary
);


/**
 * @param {!proto.partner.mobile.RetrievePartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partner.mobile.RetrievePartnerLocationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partner.mobile.RetrievePartnerLocationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partner.mobile.PartnerLocationServiceClient.prototype.retrievePartnerLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/RetrievePartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_RetrievePartnerLocation,
      callback);
};


/**
 * @param {!proto.partner.mobile.RetrievePartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partner.mobile.RetrievePartnerLocationRes>}
 *     Promise that resolves to the response
 */
proto.partner.mobile.PartnerLocationServicePromiseClient.prototype.retrievePartnerLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/RetrievePartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_RetrievePartnerLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.partner.mobile.ListPartnerLocationReq,
 *   !proto.partner.mobile.ListPartnerLocationRes>}
 */
const methodDescriptor_PartnerLocationService_ListPartnerLocation = new grpc.web.MethodDescriptor(
  '/partner.mobile.PartnerLocationService/ListPartnerLocation',
  grpc.web.MethodType.UNARY,
  proto.partner.mobile.ListPartnerLocationReq,
  proto.partner.mobile.ListPartnerLocationRes,
  /**
   * @param {!proto.partner.mobile.ListPartnerLocationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.partner.mobile.ListPartnerLocationRes.deserializeBinary
);


/**
 * @param {!proto.partner.mobile.ListPartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.partner.mobile.ListPartnerLocationRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.partner.mobile.ListPartnerLocationRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.partner.mobile.PartnerLocationServiceClient.prototype.listPartnerLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/ListPartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_ListPartnerLocation,
      callback);
};


/**
 * @param {!proto.partner.mobile.ListPartnerLocationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.partner.mobile.ListPartnerLocationRes>}
 *     Promise that resolves to the response
 */
proto.partner.mobile.PartnerLocationServicePromiseClient.prototype.listPartnerLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/partner.mobile.PartnerLocationService/ListPartnerLocation',
      request,
      metadata || {},
      methodDescriptor_PartnerLocationService_ListPartnerLocation);
};


module.exports = proto.partner.mobile;
