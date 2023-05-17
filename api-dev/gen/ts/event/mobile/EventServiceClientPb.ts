/**
 * @fileoverview gRPC-Web generated client stub for event.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/mobile/event.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as event_mobile_event_pb from '../../event/mobile/event_pb';


export class SearchEventServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetEventDetail = new grpcWeb.MethodDescriptor(
    '/event.mobile.SearchEventService/GetEventDetail',
    grpcWeb.MethodType.UNARY,
    event_mobile_event_pb.GetEventDetailReq,
    event_mobile_event_pb.GetEventDetailRes,
    (request: event_mobile_event_pb.GetEventDetailReq) => {
      return request.serializeBinary();
    },
    event_mobile_event_pb.GetEventDetailRes.deserializeBinary
  );

  getEventDetail(
    request: event_mobile_event_pb.GetEventDetailReq,
    metadata: grpcWeb.Metadata | null): Promise<event_mobile_event_pb.GetEventDetailRes>;

  getEventDetail(
    request: event_mobile_event_pb.GetEventDetailReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.GetEventDetailRes) => void): grpcWeb.ClientReadableStream<event_mobile_event_pb.GetEventDetailRes>;

  getEventDetail(
    request: event_mobile_event_pb.GetEventDetailReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.GetEventDetailRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.mobile.SearchEventService/GetEventDetail',
        request,
        metadata || {},
        this.methodDescriptorGetEventDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.mobile.SearchEventService/GetEventDetail',
    request,
    metadata || {},
    this.methodDescriptorGetEventDetail);
  }

  methodDescriptorSearchTopEvents = new grpcWeb.MethodDescriptor(
    '/event.mobile.SearchEventService/SearchTopEvents',
    grpcWeb.MethodType.UNARY,
    event_mobile_event_pb.SearchTopEventsReq,
    event_mobile_event_pb.SearchTopEventsRes,
    (request: event_mobile_event_pb.SearchTopEventsReq) => {
      return request.serializeBinary();
    },
    event_mobile_event_pb.SearchTopEventsRes.deserializeBinary
  );

  searchTopEvents(
    request: event_mobile_event_pb.SearchTopEventsReq,
    metadata: grpcWeb.Metadata | null): Promise<event_mobile_event_pb.SearchTopEventsRes>;

  searchTopEvents(
    request: event_mobile_event_pb.SearchTopEventsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.SearchTopEventsRes) => void): grpcWeb.ClientReadableStream<event_mobile_event_pb.SearchTopEventsRes>;

  searchTopEvents(
    request: event_mobile_event_pb.SearchTopEventsReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.SearchTopEventsRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.mobile.SearchEventService/SearchTopEvents',
        request,
        metadata || {},
        this.methodDescriptorSearchTopEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.mobile.SearchEventService/SearchTopEvents',
    request,
    metadata || {},
    this.methodDescriptorSearchTopEvents);
  }

  methodDescriptorSearchListEvents = new grpcWeb.MethodDescriptor(
    '/event.mobile.SearchEventService/SearchListEvents',
    grpcWeb.MethodType.UNARY,
    event_mobile_event_pb.SearchListEventsReq,
    event_mobile_event_pb.SearchListEventsRes,
    (request: event_mobile_event_pb.SearchListEventsReq) => {
      return request.serializeBinary();
    },
    event_mobile_event_pb.SearchListEventsRes.deserializeBinary
  );

  searchListEvents(
    request: event_mobile_event_pb.SearchListEventsReq,
    metadata: grpcWeb.Metadata | null): Promise<event_mobile_event_pb.SearchListEventsRes>;

  searchListEvents(
    request: event_mobile_event_pb.SearchListEventsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.SearchListEventsRes) => void): grpcWeb.ClientReadableStream<event_mobile_event_pb.SearchListEventsRes>;

  searchListEvents(
    request: event_mobile_event_pb.SearchListEventsReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_mobile_event_pb.SearchListEventsRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.mobile.SearchEventService/SearchListEvents',
        request,
        metadata || {},
        this.methodDescriptorSearchListEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.mobile.SearchEventService/SearchListEvents',
    request,
    metadata || {},
    this.methodDescriptorSearchListEvents);
  }

}
