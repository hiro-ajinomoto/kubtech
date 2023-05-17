import * as grpcWeb from 'grpc-web';

import * as proto_notification_mobile_base_pb from '../../../proto/notification/mobile/base_pb';
import * as proto_notification_mobile_notification_pb from '../../../proto/notification/mobile/notification_pb';


export class NotificationSvcClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  pushNotification(
    request: proto_notification_mobile_notification_pb.PushNotificationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

  subscribeTopic(
    request: proto_notification_mobile_notification_pb.SubscribeTopicReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

  unsubscribeTopic(
    request: proto_notification_mobile_notification_pb.UnsubscribeTopicReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

}

export class NotificationSvcPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  pushNotification(
    request: proto_notification_mobile_notification_pb.PushNotificationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

  subscribeTopic(
    request: proto_notification_mobile_notification_pb.SubscribeTopicReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

  unsubscribeTopic(
    request: proto_notification_mobile_notification_pb.UnsubscribeTopicReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

}

