import * as grpcWeb from 'grpc-web';

import * as proto_notification_mobile_user_notification_pb from '../../../proto/notification/mobile/user_notification_pb';
import * as proto_notification_mobile_base_pb from '../../../proto/notification/mobile/base_pb';


export class UserNotificationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getUserNotifications(
    request: proto_notification_mobile_user_notification_pb.GetUserNotificationsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_user_notification_pb.GetUserNotificationsRes) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_user_notification_pb.GetUserNotificationsRes>;

  markAsRead(
    request: proto_notification_mobile_user_notification_pb.MarkAsReadReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

  deleteUserNotification(
    request: proto_notification_mobile_user_notification_pb.DeleteUserNotificationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

}

export class UserNotificationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getUserNotifications(
    request: proto_notification_mobile_user_notification_pb.GetUserNotificationsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_user_notification_pb.GetUserNotificationsRes>;

  markAsRead(
    request: proto_notification_mobile_user_notification_pb.MarkAsReadReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

  deleteUserNotification(
    request: proto_notification_mobile_user_notification_pb.DeleteUserNotificationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

}

