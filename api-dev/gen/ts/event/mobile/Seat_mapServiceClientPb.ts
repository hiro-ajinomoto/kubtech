/**
 * @fileoverview gRPC-Web generated client stub for event.mobile
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/mobile/seat_map.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as event_mobile_seat_map_pb from '../../event/mobile/seat_map_pb';


export class SeatMapServiceClient {
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

  methodDescriptorRetrieveSeatMap = new grpcWeb.MethodDescriptor(
    '/event.mobile.SeatMapService/RetrieveSeatMap',
    grpcWeb.MethodType.UNARY,
    event_mobile_seat_map_pb.RetrieveSeatMapReq,
    event_mobile_seat_map_pb.RetrieveSeatMapRes,
    (request: event_mobile_seat_map_pb.RetrieveSeatMapReq) => {
      return request.serializeBinary();
    },
    event_mobile_seat_map_pb.RetrieveSeatMapRes.deserializeBinary
  );

  retrieveSeatMap(
    request: event_mobile_seat_map_pb.RetrieveSeatMapReq,
    metadata: grpcWeb.Metadata | null): Promise<event_mobile_seat_map_pb.RetrieveSeatMapRes>;

  retrieveSeatMap(
    request: event_mobile_seat_map_pb.RetrieveSeatMapReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_mobile_seat_map_pb.RetrieveSeatMapRes) => void): grpcWeb.ClientReadableStream<event_mobile_seat_map_pb.RetrieveSeatMapRes>;

  retrieveSeatMap(
    request: event_mobile_seat_map_pb.RetrieveSeatMapReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_mobile_seat_map_pb.RetrieveSeatMapRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.mobile.SeatMapService/RetrieveSeatMap',
        request,
        metadata || {},
        this.methodDescriptorRetrieveSeatMap,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.mobile.SeatMapService/RetrieveSeatMap',
    request,
    metadata || {},
    this.methodDescriptorRetrieveSeatMap);
  }

}

