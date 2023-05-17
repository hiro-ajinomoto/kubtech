import * as grpcWeb from 'grpc-web';

import * as event_web_admin_sponsor_level_pb from '../../event/web_admin/sponsor_level_pb';
import * as event_web_admin_base_pb from '../../event/web_admin/base_pb';


export class SponsorLevelServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSponsorLevel(
    request: event_web_admin_sponsor_level_pb.CreateSponsorLevelReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.CreateSponsorLevelRes) => void
  ): grpcWeb.ClientReadableStream<event_web_admin_sponsor_level_pb.CreateSponsorLevelRes>;

  updateSponsorLevel(
    request: event_web_admin_sponsor_level_pb.UpdateSponsorLevelReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<event_web_admin_base_pb.Empty>;

  deleteSponsorLevel(
    request: event_web_admin_sponsor_level_pb.DeleteSponsorLevelReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<event_web_admin_base_pb.Empty>;

  getSponsorLevel(
    request: event_web_admin_sponsor_level_pb.GetSponsorLevelReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.GetSponsorLevelRes) => void
  ): grpcWeb.ClientReadableStream<event_web_admin_sponsor_level_pb.GetSponsorLevelRes>;

  listSponsorLevel(
    request: event_web_admin_sponsor_level_pb.ListSponsorLevelReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: event_web_admin_sponsor_level_pb.ListSponsorLevelRes) => void
  ): grpcWeb.ClientReadableStream<event_web_admin_sponsor_level_pb.ListSponsorLevelRes>;

}

export class SponsorLevelServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSponsorLevel(
    request: event_web_admin_sponsor_level_pb.CreateSponsorLevelReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_admin_sponsor_level_pb.CreateSponsorLevelRes>;

  updateSponsorLevel(
    request: event_web_admin_sponsor_level_pb.UpdateSponsorLevelReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_admin_base_pb.Empty>;

  deleteSponsorLevel(
    request: event_web_admin_sponsor_level_pb.DeleteSponsorLevelReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_admin_base_pb.Empty>;

  getSponsorLevel(
    request: event_web_admin_sponsor_level_pb.GetSponsorLevelReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_admin_sponsor_level_pb.GetSponsorLevelRes>;

  listSponsorLevel(
    request: event_web_admin_sponsor_level_pb.ListSponsorLevelReq,
    metadata?: grpcWeb.Metadata
  ): Promise<event_web_admin_sponsor_level_pb.ListSponsorLevelRes>;

}

