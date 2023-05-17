import * as grpcWeb from 'grpc-web';

import * as proto_notification_mobile_device_token_pb from '../../../proto/notification/mobile/device_token_pb';
import * as proto_notification_mobile_base_pb from '../../../proto/notification/mobile/base_pb';


export class DeviceTokenSvcClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  registerDeviceToken(
    request: proto_notification_mobile_device_token_pb.RegisterDeviceTokenReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

  deregisterDeviceToken(
    request: proto_notification_mobile_device_token_pb.DeregisterDeviceTokenReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

}

export class DeviceTokenSvcPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  registerDeviceToken(
    request: proto_notification_mobile_device_token_pb.RegisterDeviceTokenReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

  deregisterDeviceToken(
    request: proto_notification_mobile_device_token_pb.DeregisterDeviceTokenReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

}

