// source: proto/partner/mobile/partner_user.proto
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

var proto_partner_mobile_base_pb = require('../../../proto/partner/mobile/base_pb.js');
goog.object.extend(proto, proto_partner_mobile_base_pb);
goog.exportSymbol('proto.partner.mobile.ChangePasswordReq', null, global);
goog.exportSymbol('proto.partner.mobile.GetMeReq', null, global);
goog.exportSymbol('proto.partner.mobile.GetMeRes', null, global);
goog.exportSymbol('proto.partner.mobile.UserInfo', null, global);
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
proto.partner.mobile.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.partner.mobile.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.partner.mobile.UserInfo.displayName = 'proto.partner.mobile.UserInfo';
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
proto.partner.mobile.GetMeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.partner.mobile.GetMeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.partner.mobile.GetMeReq.displayName = 'proto.partner.mobile.GetMeReq';
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
proto.partner.mobile.ChangePasswordReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.partner.mobile.ChangePasswordReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.partner.mobile.ChangePasswordReq.displayName = 'proto.partner.mobile.ChangePasswordReq';
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
proto.partner.mobile.GetMeRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.partner.mobile.GetMeRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.partner.mobile.GetMeRes.displayName = 'proto.partner.mobile.GetMeRes';
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
proto.partner.mobile.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.partner.mobile.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.partner.mobile.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.partner.mobile.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdBy: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updatedBy: jspb.Message.getFieldWithDefault(msg, 5, ""),
    email: jspb.Message.getFieldWithDefault(msg, 6, ""),
    password: jspb.Message.getFieldWithDefault(msg, 7, ""),
    name: jspb.Message.getFieldWithDefault(msg, 8, ""),
    profilePicture: jspb.Message.getFieldWithDefault(msg, 9, ""),
    partnershipId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    phoneCode: jspb.Message.getFieldWithDefault(msg, 11, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 12, ""),
    partnerShopId: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.partner.mobile.UserInfo}
 */
proto.partner.mobile.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.partner.mobile.UserInfo;
  return proto.partner.mobile.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.partner.mobile.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.partner.mobile.UserInfo}
 */
proto.partner.mobile.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedBy(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilePicture(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnershipId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneCode(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerShopId(value);
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
proto.partner.mobile.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.partner.mobile.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.partner.mobile.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.partner.mobile.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdatedBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProfilePicture();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPartnershipId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPhoneCode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPartnerShopId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 created_at = 2;
 * @return {number}
 */
proto.partner.mobile.UserInfo.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 updated_at = 3;
 * @return {number}
 */
proto.partner.mobile.UserInfo.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string created_by = 4;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string updated_by = 5;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getUpdatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setUpdatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string email = 6;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string password = 7;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string name = 8;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string profile_picture = 9;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getProfilePicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setProfilePicture = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string partnership_id = 10;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getPartnershipId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setPartnershipId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string phone_code = 11;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getPhoneCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setPhoneCode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string phone_number = 12;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string partner_shop_id = 13;
 * @return {string}
 */
proto.partner.mobile.UserInfo.prototype.getPartnerShopId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.UserInfo} returns this
 */
proto.partner.mobile.UserInfo.prototype.setPartnerShopId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
proto.partner.mobile.GetMeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.partner.mobile.GetMeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.partner.mobile.GetMeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.partner.mobile.GetMeReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.partner.mobile.GetMeReq}
 */
proto.partner.mobile.GetMeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.partner.mobile.GetMeReq;
  return proto.partner.mobile.GetMeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.partner.mobile.GetMeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.partner.mobile.GetMeReq}
 */
proto.partner.mobile.GetMeReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.partner.mobile.GetMeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.partner.mobile.GetMeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.partner.mobile.GetMeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.partner.mobile.GetMeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.partner.mobile.ChangePasswordReq.prototype.toObject = function(opt_includeInstance) {
  return proto.partner.mobile.ChangePasswordReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.partner.mobile.ChangePasswordReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.partner.mobile.ChangePasswordReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    oldPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.partner.mobile.ChangePasswordReq}
 */
proto.partner.mobile.ChangePasswordReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.partner.mobile.ChangePasswordReq;
  return proto.partner.mobile.ChangePasswordReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.partner.mobile.ChangePasswordReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.partner.mobile.ChangePasswordReq}
 */
proto.partner.mobile.ChangePasswordReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.partner.mobile.ChangePasswordReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.partner.mobile.ChangePasswordReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.partner.mobile.ChangePasswordReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.partner.mobile.ChangePasswordReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string old_password = 1;
 * @return {string}
 */
proto.partner.mobile.ChangePasswordReq.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.ChangePasswordReq} returns this
 */
proto.partner.mobile.ChangePasswordReq.prototype.setOldPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.partner.mobile.ChangePasswordReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.partner.mobile.ChangePasswordReq} returns this
 */
proto.partner.mobile.ChangePasswordReq.prototype.setPassword = function(value) {
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
proto.partner.mobile.GetMeRes.prototype.toObject = function(opt_includeInstance) {
  return proto.partner.mobile.GetMeRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.partner.mobile.GetMeRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.partner.mobile.GetMeRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    userInfo: (f = msg.getUserInfo()) && proto.partner.mobile.UserInfo.toObject(includeInstance, f)
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
 * @return {!proto.partner.mobile.GetMeRes}
 */
proto.partner.mobile.GetMeRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.partner.mobile.GetMeRes;
  return proto.partner.mobile.GetMeRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.partner.mobile.GetMeRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.partner.mobile.GetMeRes}
 */
proto.partner.mobile.GetMeRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.partner.mobile.UserInfo;
      reader.readMessage(value,proto.partner.mobile.UserInfo.deserializeBinaryFromReader);
      msg.setUserInfo(value);
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
proto.partner.mobile.GetMeRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.partner.mobile.GetMeRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.partner.mobile.GetMeRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.partner.mobile.GetMeRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.partner.mobile.UserInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserInfo user_info = 1;
 * @return {?proto.partner.mobile.UserInfo}
 */
proto.partner.mobile.GetMeRes.prototype.getUserInfo = function() {
  return /** @type{?proto.partner.mobile.UserInfo} */ (
    jspb.Message.getWrapperField(this, proto.partner.mobile.UserInfo, 1));
};


/**
 * @param {?proto.partner.mobile.UserInfo|undefined} value
 * @return {!proto.partner.mobile.GetMeRes} returns this
*/
proto.partner.mobile.GetMeRes.prototype.setUserInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.partner.mobile.GetMeRes} returns this
 */
proto.partner.mobile.GetMeRes.prototype.clearUserInfo = function() {
  return this.setUserInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.partner.mobile.GetMeRes.prototype.hasUserInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.partner.mobile);
