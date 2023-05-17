import * as grpcWeb from 'grpc-web';

import * as ticket_web_partnership_base_pb from '../../ticket/web_partnership/base_pb';
import * as ticket_web_partnership_ticket_pb from '../../ticket/web_partnership/ticket_pb';


export class TicketServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  pushNotificationUpdateInfo(
    request: ticket_web_partnership_ticket_pb.PushNotificationUpdateInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_partnership_base_pb.Empty>;

  pushNotificationRemindUpdateUserInfo(
    request: ticket_web_partnership_ticket_pb.PushNotificationRemindUpdateUserInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_partnership_base_pb.Empty>;

  pushNotificationRemindCheckinTimeHasCome(
    request: ticket_web_partnership_ticket_pb.PushNotificationRemindCheckinTimeHasComeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_partnership_base_pb.Empty>;

  pushNotificationSupportOffline(
    request: ticket_web_partnership_ticket_pb.PushNotificationSupportOfflineReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_partnership_base_pb.Empty>;

  pushNotificationThank(
    request: ticket_web_partnership_ticket_pb.PushNotificationThankReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_partnership_base_pb.Empty>;

}

export class TicketServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  pushNotificationUpdateInfo(
    request: ticket_web_partnership_ticket_pb.PushNotificationUpdateInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_partnership_base_pb.Empty>;

  pushNotificationRemindUpdateUserInfo(
    request: ticket_web_partnership_ticket_pb.PushNotificationRemindUpdateUserInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_partnership_base_pb.Empty>;

  pushNotificationRemindCheckinTimeHasCome(
    request: ticket_web_partnership_ticket_pb.PushNotificationRemindCheckinTimeHasComeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_partnership_base_pb.Empty>;

  pushNotificationSupportOffline(
    request: ticket_web_partnership_ticket_pb.PushNotificationSupportOfflineReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_partnership_base_pb.Empty>;

  pushNotificationThank(
    request: ticket_web_partnership_ticket_pb.PushNotificationThankReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_partnership_base_pb.Empty>;

}

