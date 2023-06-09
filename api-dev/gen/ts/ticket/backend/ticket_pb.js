// source: ticket/backend/ticket.proto
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

var ticket_backend_base_pb = require('../../ticket/backend/base_pb.js');
goog.object.extend(proto, ticket_backend_base_pb);
goog.exportSymbol('proto.ticket.backend.DeleteTicketByOrderIdReq', null, global);
goog.exportSymbol('proto.ticket.backend.GetTicketSeatIdByOrderIdReq', null, global);
goog.exportSymbol('proto.ticket.backend.GetTicketSeatIdByOrderIdRes', null, global);
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
proto.ticket.backend.DeleteTicketByOrderIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ticket.backend.DeleteTicketByOrderIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ticket.backend.DeleteTicketByOrderIdReq.displayName = 'proto.ticket.backend.DeleteTicketByOrderIdReq';
}
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
proto.ticket.backend.GetTicketSeatIdByOrderIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ticket.backend.GetTicketSeatIdByOrderIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ticket.backend.GetTicketSeatIdByOrderIdReq.displayName = 'proto.ticket.backend.GetTicketSeatIdByOrderIdReq';
}
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
proto.ticket.backend.GetTicketSeatIdByOrderIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ticket.backend.GetTicketSeatIdByOrderIdRes.repeatedFields_, null);
};
goog.inherits(proto.ticket.backend.GetTicketSeatIdByOrderIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ticket.backend.GetTicketSeatIdByOrderIdRes.displayName = 'proto.ticket.backend.GetTicketSeatIdByOrderIdRes';
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
proto.ticket.backend.DeleteTicketByOrderIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ticket.backend.DeleteTicketByOrderIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ticket.backend.DeleteTicketByOrderIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ticket.backend.DeleteTicketByOrderIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ticket.backend.DeleteTicketByOrderIdReq}
 */
proto.ticket.backend.DeleteTicketByOrderIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ticket.backend.DeleteTicketByOrderIdReq;
  return proto.ticket.backend.DeleteTicketByOrderIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ticket.backend.DeleteTicketByOrderIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ticket.backend.DeleteTicketByOrderIdReq}
 */
proto.ticket.backend.DeleteTicketByOrderIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
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
proto.ticket.backend.DeleteTicketByOrderIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ticket.backend.DeleteTicketByOrderIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ticket.backend.DeleteTicketByOrderIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ticket.backend.DeleteTicketByOrderIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.ticket.backend.DeleteTicketByOrderIdReq.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ticket.backend.DeleteTicketByOrderIdReq} returns this
 */
proto.ticket.backend.DeleteTicketByOrderIdReq.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





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
proto.ticket.backend.GetTicketSeatIdByOrderIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ticket.backend.GetTicketSeatIdByOrderIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ticket.backend.GetTicketSeatIdByOrderIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ticket.backend.GetTicketSeatIdByOrderIdReq}
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ticket.backend.GetTicketSeatIdByOrderIdReq;
  return proto.ticket.backend.GetTicketSeatIdByOrderIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ticket.backend.GetTicketSeatIdByOrderIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ticket.backend.GetTicketSeatIdByOrderIdReq}
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
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
proto.ticket.backend.GetTicketSeatIdByOrderIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ticket.backend.GetTicketSeatIdByOrderIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ticket.backend.GetTicketSeatIdByOrderIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdReq.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ticket.backend.GetTicketSeatIdByOrderIdReq} returns this
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdReq.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.repeatedFields_ = [1];



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
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ticket.backend.GetTicketSeatIdByOrderIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ticket.backend.GetTicketSeatIdByOrderIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    seatIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ticket.backend.GetTicketSeatIdByOrderIdRes}
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ticket.backend.GetTicketSeatIdByOrderIdRes;
  return proto.ticket.backend.GetTicketSeatIdByOrderIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ticket.backend.GetTicketSeatIdByOrderIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ticket.backend.GetTicketSeatIdByOrderIdRes}
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSeatIds(value);
      break;
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
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ticket.backend.GetTicketSeatIdByOrderIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ticket.backend.GetTicketSeatIdByOrderIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeatIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string seat_ids = 1;
 * @return {!Array<string>}
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.prototype.getSeatIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ticket.backend.GetTicketSeatIdByOrderIdRes} returns this
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.prototype.setSeatIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ticket.backend.GetTicketSeatIdByOrderIdRes} returns this
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.prototype.addSeatIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ticket.backend.GetTicketSeatIdByOrderIdRes} returns this
 */
proto.ticket.backend.GetTicketSeatIdByOrderIdRes.prototype.clearSeatIdsList = function() {
  return this.setSeatIdsList([]);
};


goog.object.extend(exports, proto.ticket.backend);
