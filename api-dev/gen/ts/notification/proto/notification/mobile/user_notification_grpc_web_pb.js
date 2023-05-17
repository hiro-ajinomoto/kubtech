/**
 * @fileoverview gRPC-Web generated client stub for notification.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: proto/notification/mobile/user_notification.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_notification_mobile_base_pb = require('../../../proto/notification/mobile/base_pb.js')
const proto = {};
proto.notification = {};
proto.notification.mobile = require('./user_notification_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.notification.mobile.UserNotificationServiceClient =
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
proto.notification.mobile.UserNotificationServicePromiseClient =
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
 *   !proto.notification.mobile.GetUserNotificationsReq,
 *   !proto.notification.mobile.GetUserNotificationsRes>}
 */
const methodDescriptor_UserNotificationService_GetUserNotifications = new grpc.web.MethodDescriptor(
  '/notification.mobile.UserNotificationService/GetUserNotifications',
  grpc.web.MethodType.UNARY,
  proto.notification.mobile.GetUserNotificationsReq,
  proto.notification.mobile.GetUserNotificationsRes,
  /**
   * @param {!proto.notification.mobile.GetUserNotificationsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.notification.mobile.GetUserNotificationsRes.deserializeBinary
);


/**
 * @param {!proto.notification.mobile.GetUserNotificationsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.notification.mobile.GetUserNotificationsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.notification.mobile.GetUserNotificationsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.notification.mobile.UserNotificationServiceClient.prototype.getUserNotifications =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/notification.mobile.UserNotificationService/GetUserNotifications',
      request,
      metadata || {},
      methodDescriptor_UserNotificationService_GetUserNotifications,
      callback);
};


/**
 * @param {!proto.notification.mobile.GetUserNotificationsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.notification.mobile.GetUserNotificationsRes>}
 *     Promise that resolves to the response
 */
proto.notification.mobile.UserNotificationServicePromiseClient.prototype.getUserNotifications =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/notification.mobile.UserNotificationService/GetUserNotifications',
      request,
      metadata || {},
      methodDescriptor_UserNotificationService_GetUserNotifications);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.notification.mobile.MarkAsReadReq,
 *   !proto.notification.mobile.Empty>}
 */
const methodDescriptor_UserNotificationService_MarkAsRead = new grpc.web.MethodDescriptor(
  '/notification.mobile.UserNotificationService/MarkAsRead',
  grpc.web.MethodType.UNARY,
  proto.notification.mobile.MarkAsReadReq,
  proto_notification_mobile_base_pb.Empty,
  /**
   * @param {!proto.notification.mobile.MarkAsReadReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_notification_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.notification.mobile.MarkAsReadReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.notification.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.notification.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.notification.mobile.UserNotificationServiceClient.prototype.markAsRead =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/notification.mobile.UserNotificationService/MarkAsRead',
      request,
      metadata || {},
      methodDescriptor_UserNotificationService_MarkAsRead,
      callback);
};


/**
 * @param {!proto.notification.mobile.MarkAsReadReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.notification.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.notification.mobile.UserNotificationServicePromiseClient.prototype.markAsRead =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/notification.mobile.UserNotificationService/MarkAsRead',
      request,
      metadata || {},
      methodDescriptor_UserNotificationService_MarkAsRead);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.notification.mobile.DeleteUserNotificationReq,
 *   !proto.notification.mobile.Empty>}
 */
const methodDescriptor_UserNotificationService_DeleteUserNotification = new grpc.web.MethodDescriptor(
  '/notification.mobile.UserNotificationService/DeleteUserNotification',
  grpc.web.MethodType.UNARY,
  proto.notification.mobile.DeleteUserNotificationReq,
  proto_notification_mobile_base_pb.Empty,
  /**
   * @param {!proto.notification.mobile.DeleteUserNotificationReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_notification_mobile_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.notification.mobile.DeleteUserNotificationReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.notification.mobile.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.notification.mobile.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.notification.mobile.UserNotificationServiceClient.prototype.deleteUserNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/notification.mobile.UserNotificationService/DeleteUserNotification',
      request,
      metadata || {},
      methodDescriptor_UserNotificationService_DeleteUserNotification,
      callback);
};


/**
 * @param {!proto.notification.mobile.DeleteUserNotificationReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.notification.mobile.Empty>}
 *     Promise that resolves to the response
 */
proto.notification.mobile.UserNotificationServicePromiseClient.prototype.deleteUserNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/notification.mobile.UserNotificationService/DeleteUserNotification',
      request,
      metadata || {},
      methodDescriptor_UserNotificationService_DeleteUserNotification);
};


module.exports = proto.notification.mobile;

