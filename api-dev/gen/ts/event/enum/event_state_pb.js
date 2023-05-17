// source: event/enum/event_state.proto
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

goog.exportSymbol('proto.event.enum.EventState', null, global);
/**
 * @enum {number}
 */
proto.event.enum.EventState = {
  EVENT_STATE_NONE: 0,
  EVENT_STATE_UNPUBLISHED: 1,
  EVENT_STATE_INPROCESS: 2,
  EVENT_STATE_ERROR: 3,
  EVENT_STATE_PUBLISHED: 4
};

goog.object.extend(exports, proto.event.enum);
