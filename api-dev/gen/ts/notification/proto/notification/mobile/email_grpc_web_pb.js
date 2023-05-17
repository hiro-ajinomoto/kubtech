/**
 * @fileoverview gRPC-Web generated client stub for notification.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/notification/mobile/email.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_notification_mobile_base_pb = require('../../../proto/notification/mobile/base_pb.js')
const proto = {};
proto.notification = {};
proto.notification.mobile = require('./email_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.notification.mobile.EmailSvcClient =
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
proto.notification.mobile.EmailSvcPromiseClient =
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
 *   !proto.notification.mobile.AddEmailTemplateReq,
 *   !proto.notification.mobile.Empty>}
 */
const methodDescriptor_EmailSvc_AddEmailTemplate = new grpc.web.MethodDescriptor(
  '/notification.mobile.EmailSvc/AddEmailTemplate',
  grpc.web.MethodType.UNARY,
  proto.notification.mobile.AddEmailTemplateReq,
  proto_notification_mobile_base_pb.Empty,
  /**
   * @param {!proto.notification.mobile.AddEmailTemplateReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_notification_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.notification.mobile.AddEmailTemplateReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.notification.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.notification.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.notification.mobile.EmailSvcClient.prototype.addEmailTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/notification.mobile.EmailSvc/AddEmailTemplate',
      request,
      metadata || {},
      methodDescriptor_EmailSvc_AddEmailTemplate,
      callback);
};


/**
 * @param {!proto.notification.mobile.AddEmailTemplateReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.notification.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.notification.mobile.EmailSvcPromiseClient.prototype.addEmailTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/notification.mobile.EmailSvc/AddEmailTemplate',
      request,
      metadata || {},
      methodDescriptor_EmailSvc_AddEmailTemplate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.notification.mobile.UpdateEmailTemplateReq,
 *   !proto.notification.mobile.Empty>}
 */
const methodDescriptor_EmailSvc_UpdateEmailTemplate = new grpc.web.MethodDescriptor(
  '/notification.mobile.EmailSvc/UpdateEmailTemplate',
  grpc.web.MethodType.UNARY,
  proto.notification.mobile.UpdateEmailTemplateReq,
  proto_notification_mobile_base_pb.Empty,
  /**
   * @param {!proto.notification.mobile.UpdateEmailTemplateReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_notification_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.notification.mobile.UpdateEmailTemplateReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.notification.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.notification.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.notification.mobile.EmailSvcClient.prototype.updateEmailTemplate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/notification.mobile.EmailSvc/UpdateEmailTemplate',
      request,
      metadata || {},
      methodDescriptor_EmailSvc_UpdateEmailTemplate,
      callback);
};


/**
 * @param {!proto.notification.mobile.UpdateEmailTemplateReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.notification.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.notification.mobile.EmailSvcPromiseClient.prototype.updateEmailTemplate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/notification.mobile.EmailSvc/UpdateEmailTemplate',
      request,
      metadata || {},
      methodDescriptor_EmailSvc_UpdateEmailTemplate);
};


module.exports = proto.notification.mobile;
