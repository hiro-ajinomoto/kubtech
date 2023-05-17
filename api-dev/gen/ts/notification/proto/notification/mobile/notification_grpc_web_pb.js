/**
 * @fileoverview gRPC-Web generated client stub for notification.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/notification/mobile/notification.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_notification_mobile_base_pb = require('../../../proto/notification/mobile/base_pb.js')
const proto = {};
proto.notification = {};
proto.notification.mobile = require('./notification_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.notification.mobile.NotificationSvcClient =
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
proto.notification.mobile.NotificationSvcPromiseClient =
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
 *   !proto.notification.mobile.PushNotificationReq,
 *   !proto.notification.mobile.Empty>}
 */
const methodDescriptor_NotificationSvc_PushNotification = new grpc.web.MethodDescriptor(
  '/notification.mobile.NotificationSvc/PushNotification',
  grpc.web.MethodType.UNARY,
  proto.notification.mobile.PushNotificationReq,
  proto_notification_mobile_base_pb.Empty,
  /**
   * @param {!proto.notification.mobile.PushNotificationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_notification_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.notification.mobile.PushNotificationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.notification.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.notification.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.notification.mobile.NotificationSvcClient.prototype.pushNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/notification.mobile.NotificationSvc/PushNotification',
      request,
      metadata || {},
      methodDescriptor_NotificationSvc_PushNotification,
      callback);
};


/**
 * @param {!proto.notification.mobile.PushNotificationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.notification.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.notification.mobile.NotificationSvcPromiseClient.prototype.pushNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/notification.mobile.NotificationSvc/PushNotification',
      request,
      metadata || {},
      methodDescriptor_NotificationSvc_PushNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.notification.mobile.SubscribeTopicReq,
 *   !proto.notification.mobile.Empty>}
 */
const methodDescriptor_NotificationSvc_SubscribeTopic = new grpc.web.MethodDescriptor(
  '/notification.mobile.NotificationSvc/SubscribeTopic',
  grpc.web.MethodType.UNARY,
  proto.notification.mobile.SubscribeTopicReq,
  proto_notification_mobile_base_pb.Empty,
  /**
   * @param {!proto.notification.mobile.SubscribeTopicReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_notification_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.notification.mobile.SubscribeTopicReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.notification.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.notification.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.notification.mobile.NotificationSvcClient.prototype.subscribeTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/notification.mobile.NotificationSvc/SubscribeTopic',
      request,
      metadata || {},
      methodDescriptor_NotificationSvc_SubscribeTopic,
      callback);
};


/**
 * @param {!proto.notification.mobile.SubscribeTopicReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.notification.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.notification.mobile.NotificationSvcPromiseClient.prototype.subscribeTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/notification.mobile.NotificationSvc/SubscribeTopic',
      request,
      metadata || {},
      methodDescriptor_NotificationSvc_SubscribeTopic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.notification.mobile.UnsubscribeTopicReq,
 *   !proto.notification.mobile.Empty>}
 */
const methodDescriptor_NotificationSvc_UnsubscribeTopic = new grpc.web.MethodDescriptor(
  '/notification.mobile.NotificationSvc/UnsubscribeTopic',
  grpc.web.MethodType.UNARY,
  proto.notification.mobile.UnsubscribeTopicReq,
  proto_notification_mobile_base_pb.Empty,
  /**
   * @param {!proto.notification.mobile.UnsubscribeTopicReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_notification_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.notification.mobile.UnsubscribeTopicReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.notification.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.notification.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.notification.mobile.NotificationSvcClient.prototype.unsubscribeTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/notification.mobile.NotificationSvc/UnsubscribeTopic',
      request,
      metadata || {},
      methodDescriptor_NotificationSvc_UnsubscribeTopic,
      callback);
};


/**
 * @param {!proto.notification.mobile.UnsubscribeTopicReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.notification.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.notification.mobile.NotificationSvcPromiseClient.prototype.unsubscribeTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/notification.mobile.NotificationSvc/UnsubscribeTopic',
      request,
      metadata || {},
      methodDescriptor_NotificationSvc_UnsubscribeTopic);
};


module.exports = proto.notification.mobile;
