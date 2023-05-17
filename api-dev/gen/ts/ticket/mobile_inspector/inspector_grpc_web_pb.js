/**
 * @fileoverview gRPC-Web generated client stub for ticket.mobile_inspector
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: ticket/mobile_inspector/inspector.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var ticket_mobile_inspector_base_pb = require('../../ticket/mobile_inspector/base_pb.js')
const proto = {};
proto.ticket = {};
proto.ticket.mobile_inspector = require('./inspector_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ticket.mobile_inspector.InspectorServiceClient =
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
proto.ticket.mobile_inspector.InspectorServicePromiseClient =
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
 *   !proto.ticket.mobile_inspector.CheckInReq,
 *   !proto.ticket.mobile_inspector.Empty>}
 */
const methodDescriptor_InspectorService_CheckIn = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/CheckIn',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.CheckInReq,
  ticket_mobile_inspector_base_pb.Empty,
  /**
   * @param {!proto.ticket.mobile_inspector.CheckInReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ticket_mobile_inspector_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.CheckInReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.checkIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/CheckIn',
      request,
      metadata || {},
      methodDescriptor_InspectorService_CheckIn,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.CheckInReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.Empty>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.checkIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/CheckIn',
      request,
      metadata || {},
      methodDescriptor_InspectorService_CheckIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.MappingUserInfoToTicketAndCheckInReq,
 *   !proto.ticket.mobile_inspector.Empty>}
 */
const methodDescriptor_InspectorService_MappingUserInfoToTicketAndCheckIn = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/MappingUserInfoToTicketAndCheckIn',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.MappingUserInfoToTicketAndCheckInReq,
  ticket_mobile_inspector_base_pb.Empty,
  /**
   * @param {!proto.ticket.mobile_inspector.MappingUserInfoToTicketAndCheckInReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ticket_mobile_inspector_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.MappingUserInfoToTicketAndCheckInReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.mappingUserInfoToTicketAndCheckIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/MappingUserInfoToTicketAndCheckIn',
      request,
      metadata || {},
      methodDescriptor_InspectorService_MappingUserInfoToTicketAndCheckIn,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.MappingUserInfoToTicketAndCheckInReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.Empty>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.mappingUserInfoToTicketAndCheckIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/MappingUserInfoToTicketAndCheckIn',
      request,
      metadata || {},
      methodDescriptor_InspectorService_MappingUserInfoToTicketAndCheckIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.ListCheckInLogsReq,
 *   !proto.ticket.mobile_inspector.ListCheckInLogsRes>}
 */
const methodDescriptor_InspectorService_ListCheckInLogs = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/ListCheckInLogs',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.ListCheckInLogsReq,
  proto.ticket.mobile_inspector.ListCheckInLogsRes,
  /**
   * @param {!proto.ticket.mobile_inspector.ListCheckInLogsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticket.mobile_inspector.ListCheckInLogsRes.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.ListCheckInLogsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.ListCheckInLogsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.ListCheckInLogsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.listCheckInLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/ListCheckInLogs',
      request,
      metadata || {},
      methodDescriptor_InspectorService_ListCheckInLogs,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.ListCheckInLogsReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.ListCheckInLogsRes>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.listCheckInLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/ListCheckInLogs',
      request,
      metadata || {},
      methodDescriptor_InspectorService_ListCheckInLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.MappingUserInfoToTicketReq,
 *   !proto.ticket.mobile_inspector.Empty>}
 */
const methodDescriptor_InspectorService_MappingUserInfoToTicket = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/MappingUserInfoToTicket',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.MappingUserInfoToTicketReq,
  ticket_mobile_inspector_base_pb.Empty,
  /**
   * @param {!proto.ticket.mobile_inspector.MappingUserInfoToTicketReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ticket_mobile_inspector_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.MappingUserInfoToTicketReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.mappingUserInfoToTicket =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/MappingUserInfoToTicket',
      request,
      metadata || {},
      methodDescriptor_InspectorService_MappingUserInfoToTicket,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.MappingUserInfoToTicketReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.Empty>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.mappingUserInfoToTicket =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/MappingUserInfoToTicket',
      request,
      metadata || {},
      methodDescriptor_InspectorService_MappingUserInfoToTicket);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.GetTicketByCodeReq,
 *   !proto.ticket.mobile_inspector.GetTicketByCodeRes>}
 */
const methodDescriptor_InspectorService_GetTicketByCode = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/GetTicketByCode',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.GetTicketByCodeReq,
  proto.ticket.mobile_inspector.GetTicketByCodeRes,
  /**
   * @param {!proto.ticket.mobile_inspector.GetTicketByCodeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticket.mobile_inspector.GetTicketByCodeRes.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.GetTicketByCodeReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.GetTicketByCodeRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.GetTicketByCodeRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.getTicketByCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetTicketByCode',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetTicketByCode,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.GetTicketByCodeReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.GetTicketByCodeRes>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.getTicketByCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetTicketByCode',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetTicketByCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.GetTicketByPhoneReq,
 *   !proto.ticket.mobile_inspector.GetTicketByPhoneRes>}
 */
const methodDescriptor_InspectorService_GetTicketByPhone = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/GetTicketByPhone',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.GetTicketByPhoneReq,
  proto.ticket.mobile_inspector.GetTicketByPhoneRes,
  /**
   * @param {!proto.ticket.mobile_inspector.GetTicketByPhoneReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticket.mobile_inspector.GetTicketByPhoneRes.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.GetTicketByPhoneReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.GetTicketByPhoneRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.GetTicketByPhoneRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.getTicketByPhone =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetTicketByPhone',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetTicketByPhone,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.GetTicketByPhoneReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.GetTicketByPhoneRes>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.getTicketByPhone =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetTicketByPhone',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetTicketByPhone);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.GetTicketByEmailReq,
 *   !proto.ticket.mobile_inspector.GetTicketByEmailRes>}
 */
const methodDescriptor_InspectorService_GetTicketByEmail = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/GetTicketByEmail',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.GetTicketByEmailReq,
  proto.ticket.mobile_inspector.GetTicketByEmailRes,
  /**
   * @param {!proto.ticket.mobile_inspector.GetTicketByEmailReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticket.mobile_inspector.GetTicketByEmailRes.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.GetTicketByEmailReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.GetTicketByEmailRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.GetTicketByEmailRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.getTicketByEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetTicketByEmail',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetTicketByEmail,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.GetTicketByEmailReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.GetTicketByEmailRes>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.getTicketByEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetTicketByEmail',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetTicketByEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.AssignCheckinEventReq,
 *   !proto.ticket.mobile_inspector.Empty>}
 */
const methodDescriptor_InspectorService_AssignCheckinEvent = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/AssignCheckinEvent',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.AssignCheckinEventReq,
  ticket_mobile_inspector_base_pb.Empty,
  /**
   * @param {!proto.ticket.mobile_inspector.AssignCheckinEventReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ticket_mobile_inspector_base_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.AssignCheckinEventReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.assignCheckinEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/AssignCheckinEvent',
      request,
      metadata || {},
      methodDescriptor_InspectorService_AssignCheckinEvent,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.AssignCheckinEventReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.Empty>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.assignCheckinEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/AssignCheckinEvent',
      request,
      metadata || {},
      methodDescriptor_InspectorService_AssignCheckinEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.GetCurrentCheckinEventReq,
 *   !proto.ticket.mobile_inspector.GetCurrentCheckinEventRes>}
 */
const methodDescriptor_InspectorService_GetCurrentCheckinEvent = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/GetCurrentCheckinEvent',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.GetCurrentCheckinEventReq,
  proto.ticket.mobile_inspector.GetCurrentCheckinEventRes,
  /**
   * @param {!proto.ticket.mobile_inspector.GetCurrentCheckinEventReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticket.mobile_inspector.GetCurrentCheckinEventRes.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.GetCurrentCheckinEventReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.GetCurrentCheckinEventRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.GetCurrentCheckinEventRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.getCurrentCheckinEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetCurrentCheckinEvent',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetCurrentCheckinEvent,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.GetCurrentCheckinEventReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.GetCurrentCheckinEventRes>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.getCurrentCheckinEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetCurrentCheckinEvent',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetCurrentCheckinEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticket.mobile_inspector.GetUpcomingCheckinEventReq,
 *   !proto.ticket.mobile_inspector.GetUpcomingCheckinEventRes>}
 */
const methodDescriptor_InspectorService_GetUpcomingCheckinEvent = new grpc.web.MethodDescriptor(
  '/ticket.mobile_inspector.InspectorService/GetUpcomingCheckinEvent',
  grpc.web.MethodType.UNARY,
  proto.ticket.mobile_inspector.GetUpcomingCheckinEventReq,
  proto.ticket.mobile_inspector.GetUpcomingCheckinEventRes,
  /**
   * @param {!proto.ticket.mobile_inspector.GetUpcomingCheckinEventReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticket.mobile_inspector.GetUpcomingCheckinEventRes.deserializeBinary
);


/**
 * @param {!proto.ticket.mobile_inspector.GetUpcomingCheckinEventReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticket.mobile_inspector.GetUpcomingCheckinEventRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticket.mobile_inspector.GetUpcomingCheckinEventRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticket.mobile_inspector.InspectorServiceClient.prototype.getUpcomingCheckinEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetUpcomingCheckinEvent',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetUpcomingCheckinEvent,
      callback);
};


/**
 * @param {!proto.ticket.mobile_inspector.GetUpcomingCheckinEventReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticket.mobile_inspector.GetUpcomingCheckinEventRes>}
 *     Promise that resolves to the response
 */
proto.ticket.mobile_inspector.InspectorServicePromiseClient.prototype.getUpcomingCheckinEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticket.mobile_inspector.InspectorService/GetUpcomingCheckinEvent',
      request,
      metadata || {},
      methodDescriptor_InspectorService_GetUpcomingCheckinEvent);
};


module.exports = proto.ticket.mobile_inspector;

