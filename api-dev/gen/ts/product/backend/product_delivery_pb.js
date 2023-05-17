// source: product/backend/product_delivery.proto
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

goog.exportSymbol('proto.product.backend.CheckProductDeliveryReq', null, global);
goog.exportSymbol('proto.product.backend.CheckProductDeliveryRes', null, global);
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
proto.product.backend.CheckProductDeliveryReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.product.backend.CheckProductDeliveryReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.product.backend.CheckProductDeliveryReq.displayName = 'proto.product.backend.CheckProductDeliveryReq';
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
proto.product.backend.CheckProductDeliveryRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.product.backend.CheckProductDeliveryRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.product.backend.CheckProductDeliveryRes.displayName = 'proto.product.backend.CheckProductDeliveryRes';
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
proto.product.backend.CheckProductDeliveryReq.prototype.toObject = function(opt_includeInstance) {
  return proto.product.backend.CheckProductDeliveryReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.product.backend.CheckProductDeliveryReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.product.backend.CheckProductDeliveryReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.product.backend.CheckProductDeliveryReq}
 */
proto.product.backend.CheckProductDeliveryReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.product.backend.CheckProductDeliveryReq;
  return proto.product.backend.CheckProductDeliveryReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.product.backend.CheckProductDeliveryReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.product.backend.CheckProductDeliveryReq}
 */
proto.product.backend.CheckProductDeliveryReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.product.backend.CheckProductDeliveryReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.product.backend.CheckProductDeliveryReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.product.backend.CheckProductDeliveryReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.product.backend.CheckProductDeliveryReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.product.backend.CheckProductDeliveryReq.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.backend.CheckProductDeliveryReq} returns this
 */
proto.product.backend.CheckProductDeliveryReq.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.product.backend.CheckProductDeliveryReq.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.backend.CheckProductDeliveryReq} returns this
 */
proto.product.backend.CheckProductDeliveryReq.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.product.backend.CheckProductDeliveryRes.prototype.toObject = function(opt_includeInstance) {
  return proto.product.backend.CheckProductDeliveryRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.product.backend.CheckProductDeliveryRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.product.backend.CheckProductDeliveryRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    bought: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    expiredTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    remainingTime: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.product.backend.CheckProductDeliveryRes}
 */
proto.product.backend.CheckProductDeliveryRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.product.backend.CheckProductDeliveryRes;
  return proto.product.backend.CheckProductDeliveryRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.product.backend.CheckProductDeliveryRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.product.backend.CheckProductDeliveryRes}
 */
proto.product.backend.CheckProductDeliveryRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBought(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiredTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRemainingTime(value);
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
proto.product.backend.CheckProductDeliveryRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.product.backend.CheckProductDeliveryRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.product.backend.CheckProductDeliveryRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.product.backend.CheckProductDeliveryRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBought();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getExpiredTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRemainingTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bool bought = 1;
 * @return {boolean}
 */
proto.product.backend.CheckProductDeliveryRes.prototype.getBought = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.product.backend.CheckProductDeliveryRes} returns this
 */
proto.product.backend.CheckProductDeliveryRes.prototype.setBought = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 expired_time = 2;
 * @return {number}
 */
proto.product.backend.CheckProductDeliveryRes.prototype.getExpiredTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.product.backend.CheckProductDeliveryRes} returns this
 */
proto.product.backend.CheckProductDeliveryRes.prototype.setExpiredTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 remaining_time = 3;
 * @return {number}
 */
proto.product.backend.CheckProductDeliveryRes.prototype.getRemainingTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.product.backend.CheckProductDeliveryRes} returns this
 */
proto.product.backend.CheckProductDeliveryRes.prototype.setRemainingTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.product.backend);
