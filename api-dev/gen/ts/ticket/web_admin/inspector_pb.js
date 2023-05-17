// source: ticket/web_admin/inspector.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var ticket_web_admin_base_pb = require('../../ticket/web_admin/base_pb.js');
goog.object.extend(proto, ticket_web_admin_base_pb);
goog.exportSymbol('proto.ticket.web_admin.StreamCheckinLogsReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ticket.web_admin.StreamCheckinLogsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ticket.web_admin.StreamCheckinLogsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ticket.web_admin.StreamCheckinLogsReq.displayName = 'proto.ticket.web_admin.StreamCheckinLogsReq';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ticket.web_admin.StreamCheckinLogsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ticket.web_admin.StreamCheckinLogsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ticket.web_admin.StreamCheckinLogsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ticket.web_admin.StreamCheckinLogsReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ticket.web_admin.StreamCheckinLogsReq}
 */
proto.ticket.web_admin.StreamCheckinLogsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ticket.web_admin.StreamCheckinLogsReq;
  return proto.ticket.web_admin.StreamCheckinLogsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ticket.web_admin.StreamCheckinLogsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ticket.web_admin.StreamCheckinLogsReq}
 */
proto.ticket.web_admin.StreamCheckinLogsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ticket.web_admin.StreamCheckinLogsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ticket.web_admin.StreamCheckinLogsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ticket.web_admin.StreamCheckinLogsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ticket.web_admin.StreamCheckinLogsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.ticket.web_admin);