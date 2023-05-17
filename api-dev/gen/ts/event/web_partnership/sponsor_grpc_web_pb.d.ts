import * as grpcWeb from 'grpc-web';

import * as base_base_pb from '../../base/base_pb';
import * as event_web_partnership_sponsor_pb from '../../event/web_partnership/sponsor_pb';


export class SponsorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSponsor(
    request: event_web_partnership_sponsor_pb.CreateSponsorReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_sponsor_pb.CreateSponsorRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_sponsor_pb.CreateSponsorRes>;

  updateSponsor(
    request: event_web_partnership_sponsor_pb.UpdateSponsorReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  deleteSponsor(
    request: event_web_partnership_sponsor_pb.DeleteSponsorReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: base_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<base_base_pb.Empty>;

  getSponsorDetail(
    request: event_web_partnership_sponsor_pb.GetSponsorDetailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_sponsor_pb.GetSponsorDetailRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_sponsor_pb.GetSponsorDetailRes>;

  listSponsor(
    request: event_web_partnership_sponsor_pb.ListSponsorReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_partnership_sponsor_pb.ListSponsorRes) => void
  ): grpcWeb.ClientReadableStream<event_web_partnership_sponsor_pb.ListSponsorRes>;

}

export class SponsorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSponsor(
    request: event_web_partnership_sponsor_pb.CreateSponsorReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_sponsor_pb.CreateSponsorRes>;

  updateSponsor(
    request: event_web_partnership_sponsor_pb.UpdateSponsorReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  deleteSponsor(
    request: event_web_partnership_sponsor_pb.DeleteSponsorReq,
    metadata?: grpcWeb.Metadata
  ): Promise<base_base_pb.Empty>;

  getSponsorDetail(
    request: event_web_partnership_sponsor_pb.GetSponsorDetailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_sponsor_pb.GetSponsorDetailRes>;

  listSponsor(
    request: event_web_partnership_sponsor_pb.ListSponsorReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_partnership_sponsor_pb.ListSponsorRes>;

}

