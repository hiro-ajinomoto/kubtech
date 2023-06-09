// source: proto/wallet/backend/transaction.proto
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

var proto_wallet_backend_base_pb = require('../../../proto/wallet/backend/base_pb.js');
goog.object.extend(proto, proto_wallet_backend_base_pb);
goog.exportSymbol('proto.wallet.backend.ExpireTransactionsReq', null, global);
goog.exportSymbol('proto.wallet.backend.ExpireTransactionsRes', null, global);
goog.exportSymbol('proto.wallet.backend.Transaction', null, global);
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
proto.wallet.backend.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wallet.backend.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wallet.backend.Transaction.displayName = 'proto.wallet.backend.Transaction';
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
proto.wallet.backend.ExpireTransactionsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wallet.backend.ExpireTransactionsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wallet.backend.ExpireTransactionsReq.displayName = 'proto.wallet.backend.ExpireTransactionsReq';
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
proto.wallet.backend.ExpireTransactionsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wallet.backend.ExpireTransactionsRes.repeatedFields_, null);
};
goog.inherits(proto.wallet.backend.ExpireTransactionsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wallet.backend.ExpireTransactionsRes.displayName = 'proto.wallet.backend.ExpireTransactionsRes';
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
proto.wallet.backend.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.wallet.backend.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wallet.backend.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.backend.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    fee: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    time: jspb.Message.getFieldWithDefault(msg, 6, 0),
    fund: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.wallet.backend.Transaction}
 */
proto.wallet.backend.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wallet.backend.Transaction;
  return proto.wallet.backend.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wallet.backend.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wallet.backend.Transaction}
 */
proto.wallet.backend.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.wallet.backend.TransactionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!proto.wallet.backend.TransactionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFee(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFund(value);
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
proto.wallet.backend.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wallet.backend.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wallet.backend.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.backend.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getFee();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getFund();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.wallet.backend.Transaction.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wallet.backend.Transaction} returns this
 */
proto.wallet.backend.Transaction.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransactionStatus status = 2;
 * @return {!proto.wallet.backend.TransactionStatus}
 */
proto.wallet.backend.Transaction.prototype.getStatus = function() {
  return /** @type {!proto.wallet.backend.TransactionStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.wallet.backend.TransactionStatus} value
 * @return {!proto.wallet.backend.Transaction} returns this
 */
proto.wallet.backend.Transaction.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TransactionType type = 3;
 * @return {!proto.wallet.backend.TransactionType}
 */
proto.wallet.backend.Transaction.prototype.getType = function() {
  return /** @type {!proto.wallet.backend.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.wallet.backend.TransactionType} value
 * @return {!proto.wallet.backend.Transaction} returns this
 */
proto.wallet.backend.Transaction.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional double amount = 4;
 * @return {number}
 */
proto.wallet.backend.Transaction.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wallet.backend.Transaction} returns this
 */
proto.wallet.backend.Transaction.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double fee = 5;
 * @return {number}
 */
proto.wallet.backend.Transaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.wallet.backend.Transaction} returns this
 */
proto.wallet.backend.Transaction.prototype.setFee = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 time = 6;
 * @return {number}
 */
proto.wallet.backend.Transaction.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wallet.backend.Transaction} returns this
 */
proto.wallet.backend.Transaction.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string fund = 7;
 * @return {string}
 */
proto.wallet.backend.Transaction.prototype.getFund = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.wallet.backend.Transaction} returns this
 */
proto.wallet.backend.Transaction.prototype.setFund = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.wallet.backend.ExpireTransactionsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.wallet.backend.ExpireTransactionsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wallet.backend.ExpireTransactionsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.backend.ExpireTransactionsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.wallet.backend.ExpireTransactionsReq}
 */
proto.wallet.backend.ExpireTransactionsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wallet.backend.ExpireTransactionsReq;
  return proto.wallet.backend.ExpireTransactionsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wallet.backend.ExpireTransactionsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wallet.backend.ExpireTransactionsReq}
 */
proto.wallet.backend.ExpireTransactionsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.wallet.backend.ExpireTransactionsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wallet.backend.ExpireTransactionsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wallet.backend.ExpireTransactionsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.backend.ExpireTransactionsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wallet.backend.ExpireTransactionsRes.repeatedFields_ = [1];



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
proto.wallet.backend.ExpireTransactionsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.wallet.backend.ExpireTransactionsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wallet.backend.ExpireTransactionsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.backend.ExpireTransactionsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.wallet.backend.Transaction.toObject, includeInstance)
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
 * @return {!proto.wallet.backend.ExpireTransactionsRes}
 */
proto.wallet.backend.ExpireTransactionsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wallet.backend.ExpireTransactionsRes;
  return proto.wallet.backend.ExpireTransactionsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wallet.backend.ExpireTransactionsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wallet.backend.ExpireTransactionsRes}
 */
proto.wallet.backend.ExpireTransactionsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.wallet.backend.Transaction;
      reader.readMessage(value,proto.wallet.backend.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
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
proto.wallet.backend.ExpireTransactionsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wallet.backend.ExpireTransactionsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wallet.backend.ExpireTransactionsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.backend.ExpireTransactionsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.wallet.backend.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Transaction transactions = 1;
 * @return {!Array<!proto.wallet.backend.Transaction>}
 */
proto.wallet.backend.ExpireTransactionsRes.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.wallet.backend.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.wallet.backend.Transaction, 1));
};


/**
 * @param {!Array<!proto.wallet.backend.Transaction>} value
 * @return {!proto.wallet.backend.ExpireTransactionsRes} returns this
*/
proto.wallet.backend.ExpireTransactionsRes.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.wallet.backend.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wallet.backend.Transaction}
 */
proto.wallet.backend.ExpireTransactionsRes.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.wallet.backend.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wallet.backend.ExpireTransactionsRes} returns this
 */
proto.wallet.backend.ExpireTransactionsRes.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


goog.object.extend(exports, proto.wallet.backend);
