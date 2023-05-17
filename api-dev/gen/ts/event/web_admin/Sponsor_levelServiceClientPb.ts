/**
 * @fileoverview gRPC-Web generated client stub for event.web_admin
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: event/web_admin/sponsor_level.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as event_web_admin_sponsor_level_pb from '../../event/web_admin/sponsor_level_pb';
import * as event_web_admin_base_pb from '../../event/web_admin/base_pb';


export class SponsorLevelServiceClient {
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

  methodDescriptorCreateSponsorLevel = new grpcWeb.MethodDescriptor(
    '/event.web_admin.SponsorLevelService/CreateSponsorLevel',
    grpcWeb.MethodType.UNARY,
    event_web_admin_sponsor_level_pb.CreateSponsorLevelReq,
    event_web_admin_sponsor_level_pb.CreateSponsorLevelRes,
    (request: event_web_admin_sponsor_level_pb.CreateSponsorLevelReq) => {
      return request.serializeBinary();
    },
    event_web_admin_sponsor_level_pb.CreateSponsorLevelRes.deserializeBinary
  );

  createSponsorLevel(
    request: event_web_admin_sponsor_level_pb.CreateSponsorLevelReq,
    metadata: grpcWeb.Metadata | null): Promise<event_web_admin_sponsor_level_pb.CreateSponsorLevelRes>;

  createSponsorLevel(
    request: event_web_admin_sponsor_level_pb.CreateSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.CreateSponsorLevelRes) => void): grpcWeb.ClientReadableStream<event_web_admin_sponsor_level_pb.CreateSponsorLevelRes>;

  createSponsorLevel(
    request: event_web_admin_sponsor_level_pb.CreateSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.CreateSponsorLevelRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.web_admin.SponsorLevelService/CreateSponsorLevel',
        request,
        metadata || {},
        this.methodDescriptorCreateSponsorLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.web_admin.SponsorLevelService/CreateSponsorLevel',
    request,
    metadata || {},
    this.methodDescriptorCreateSponsorLevel);
  }

  methodDescriptorUpdateSponsorLevel = new grpcWeb.MethodDescriptor(
    '/event.web_admin.SponsorLevelService/UpdateSponsorLevel',
    grpcWeb.MethodType.UNARY,
    event_web_admin_sponsor_level_pb.UpdateSponsorLevelReq,
    event_web_admin_base_pb.Empty,
    (request: event_web_admin_sponsor_level_pb.UpdateSponsorLevelReq) => {
      return request.serializeBinary();
    },
    event_web_admin_base_pb.Empty.deserializeBinary
  );

  updateSponsorLevel(
    request: event_web_admin_sponsor_level_pb.UpdateSponsorLevelReq,
    metadata: grpcWeb.Metadata | null): Promise<event_web_admin_base_pb.Empty>;

  updateSponsorLevel(
    request: event_web_admin_sponsor_level_pb.UpdateSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_base_pb.Empty) => void): grpcWeb.ClientReadableStream<event_web_admin_base_pb.Empty>;

  updateSponsorLevel(
    request: event_web_admin_sponsor_level_pb.UpdateSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_web_admin_base_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.web_admin.SponsorLevelService/UpdateSponsorLevel',
        request,
        metadata || {},
        this.methodDescriptorUpdateSponsorLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.web_admin.SponsorLevelService/UpdateSponsorLevel',
    request,
    metadata || {},
    this.methodDescriptorUpdateSponsorLevel);
  }

  methodDescriptorDeleteSponsorLevel = new grpcWeb.MethodDescriptor(
    '/event.web_admin.SponsorLevelService/DeleteSponsorLevel',
    grpcWeb.MethodType.UNARY,
    event_web_admin_sponsor_level_pb.DeleteSponsorLevelReq,
    event_web_admin_base_pb.Empty,
    (request: event_web_admin_sponsor_level_pb.DeleteSponsorLevelReq) => {
      return request.serializeBinary();
    },
    event_web_admin_base_pb.Empty.deserializeBinary
  );

  deleteSponsorLevel(
    request: event_web_admin_sponsor_level_pb.DeleteSponsorLevelReq,
    metadata: grpcWeb.Metadata | null): Promise<event_web_admin_base_pb.Empty>;

  deleteSponsorLevel(
    request: event_web_admin_sponsor_level_pb.DeleteSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_base_pb.Empty) => void): grpcWeb.ClientReadableStream<event_web_admin_base_pb.Empty>;

  deleteSponsorLevel(
    request: event_web_admin_sponsor_level_pb.DeleteSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_web_admin_base_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.web_admin.SponsorLevelService/DeleteSponsorLevel',
        request,
        metadata || {},
        this.methodDescriptorDeleteSponsorLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.web_admin.SponsorLevelService/DeleteSponsorLevel',
    request,
    metadata || {},
    this.methodDescriptorDeleteSponsorLevel);
  }

  methodDescriptorGetSponsorLevel = new grpcWeb.MethodDescriptor(
    '/event.web_admin.SponsorLevelService/GetSponsorLevel',
    grpcWeb.MethodType.UNARY,
    event_web_admin_sponsor_level_pb.GetSponsorLevelReq,
    event_web_admin_sponsor_level_pb.GetSponsorLevelRes,
    (request: event_web_admin_sponsor_level_pb.GetSponsorLevelReq) => {
      return request.serializeBinary();
    },
    event_web_admin_sponsor_level_pb.GetSponsorLevelRes.deserializeBinary
  );

  getSponsorLevel(
    request: event_web_admin_sponsor_level_pb.GetSponsorLevelReq,
    metadata: grpcWeb.Metadata | null): Promise<event_web_admin_sponsor_level_pb.GetSponsorLevelRes>;

  getSponsorLevel(
    request: event_web_admin_sponsor_level_pb.GetSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.GetSponsorLevelRes) => void): grpcWeb.ClientReadableStream<event_web_admin_sponsor_level_pb.GetSponsorLevelRes>;

  getSponsorLevel(
    request: event_web_admin_sponsor_level_pb.GetSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.GetSponsorLevelRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.web_admin.SponsorLevelService/GetSponsorLevel',
        request,
        metadata || {},
        this.methodDescriptorGetSponsorLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.web_admin.SponsorLevelService/GetSponsorLevel',
    request,
    metadata || {},
    this.methodDescriptorGetSponsorLevel);
  }

  methodDescriptorListSponsorLevel = new grpcWeb.MethodDescriptor(
    '/event.web_admin.SponsorLevelService/ListSponsorLevel',
    grpcWeb.MethodType.UNARY,
    event_web_admin_sponsor_level_pb.ListSponsorLevelReq,
    event_web_admin_sponsor_level_pb.ListSponsorLevelRes,
    (request: event_web_admin_sponsor_level_pb.ListSponsorLevelReq) => {
      return request.serializeBinary();
    },
    event_web_admin_sponsor_level_pb.ListSponsorLevelRes.deserializeBinary
  );

  listSponsorLevel(
    request: event_web_admin_sponsor_level_pb.ListSponsorLevelReq,
    metadata: grpcWeb.Metadata | null): Promise<event_web_admin_sponsor_level_pb.ListSponsorLevelRes>;

  listSponsorLevel(
    request: event_web_admin_sponsor_level_pb.ListSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.ListSponsorLevelRes) => void): grpcWeb.ClientReadableStream<event_web_admin_sponsor_level_pb.ListSponsorLevelRes>;

  listSponsorLevel(
    request: event_web_admin_sponsor_level_pb.ListSponsorLevelReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.ListSponsorLevelRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.web_admin.SponsorLevelService/ListSponsorLevel',
        request,
        metadata || {},
        this.methodDescriptorListSponsorLevel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.web_admin.SponsorLevelService/ListSponsorLevel',
    request,
    metadata || {},
    this.methodDescriptorListSponsorLevel);
  }

}
