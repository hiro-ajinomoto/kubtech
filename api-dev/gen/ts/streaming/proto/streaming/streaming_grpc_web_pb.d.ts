import * as grpcWeb from 'grpc-web';

import * as proto_streaming_streaming_pb from '../../proto/streaming/streaming_pb';


export class StreamingServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEpisodes(
    request: proto_streaming_streaming_pb.GetEpisodesReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_streaming_streaming_pb.GetEpisodesRes) => void
  ): grpcWeb.ClientReadableStream<proto_streaming_streaming_pb.GetEpisodesRes>;

  getStreamingInfo(
    request: proto_streaming_streaming_pb.GetStreamingInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_streaming_streaming_pb.GetStreamingInfoRes) => void
  ): grpcWeb.ClientReadableStream<proto_streaming_streaming_pb.GetStreamingInfoRes>;

  newSession(
    request: proto_streaming_streaming_pb.NewSessionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_streaming_streaming_pb.NewSessionRes) => void
  ): grpcWeb.ClientReadableStream<proto_streaming_streaming_pb.NewSessionRes>;

  heartbeatSession(
    request: proto_streaming_streaming_pb.HeartbeatSessionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_streaming_streaming_pb.HeartbeatSessionRes) => void
  ): grpcWeb.ClientReadableStream<proto_streaming_streaming_pb.HeartbeatSessionRes>;

  endSession(
    request: proto_streaming_streaming_pb.EndSessionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_streaming_streaming_pb.EndSessionRes) => void
  ): grpcWeb.ClientReadableStream<proto_streaming_streaming_pb.EndSessionRes>;

}

export class StreamingServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEpisodes(
    request: proto_streaming_streaming_pb.GetEpisodesReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_streaming_streaming_pb.GetEpisodesRes>;

  getStreamingInfo(
    request: proto_streaming_streaming_pb.GetStreamingInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_streaming_streaming_pb.GetStreamingInfoRes>;

  newSession(
    request: proto_streaming_streaming_pb.NewSessionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_streaming_streaming_pb.NewSessionRes>;

  heartbeatSession(
    request: proto_streaming_streaming_pb.HeartbeatSessionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_streaming_streaming_pb.HeartbeatSessionRes>;

  endSession(
    request: proto_streaming_streaming_pb.EndSessionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_streaming_streaming_pb.EndSessionRes>;

}

