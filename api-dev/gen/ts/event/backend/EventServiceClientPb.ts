/**
 * @fileoverview gRPC-Web generated client stub for event.backend
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/backend/event.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as event_backend_event_pb from '../../event/backend/event_pb';


export class EventServiceClient {
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

  methodDescriptorRetrieveSimpleEvent = new grpcWeb.MethodDescriptor(
    '/event.backend.EventService/RetrieveSimpleEvent',
    grpcWeb.MethodType.UNARY,
    event_backend_event_pb.RetrieveSimpleEventReq,
    event_backend_event_pb.RetrieveSimpleEventRes,
    (request: event_backend_event_pb.RetrieveSimpleEventReq) => {
      return request.serializeBinary();
    },
    event_backend_event_pb.RetrieveSimpleEventRes.deserializeBinary
  );

  retrieveSimpleEvent(
    request: event_backend_event_pb.RetrieveSimpleEventReq,
    metadata: grpcWeb.Metadata | null): Promise<event_backend_event_pb.RetrieveSimpleEventRes>;

  retrieveSimpleEvent(
    request: event_backend_event_pb.RetrieveSimpleEventReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_backend_event_pb.RetrieveSimpleEventRes) => void): grpcWeb.ClientReadableStream<event_backend_event_pb.RetrieveSimpleEventRes>;

  retrieveSimpleEvent(
    request: event_backend_event_pb.RetrieveSimpleEventReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_backend_event_pb.RetrieveSimpleEventRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.backend.EventService/RetrieveSimpleEvent',
        request,
        metadata || {},
        this.methodDescriptorRetrieveSimpleEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.backend.EventService/RetrieveSimpleEvent',
    request,
    metadata || {},
    this.methodDescriptorRetrieveSimpleEvent);
  }

}

