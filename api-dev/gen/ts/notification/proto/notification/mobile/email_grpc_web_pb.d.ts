import * as grpcWeb from 'grpc-web';

import * as proto_notification_mobile_email_pb from '../../../proto/notification/mobile/email_pb';
import * as proto_notification_mobile_base_pb from '../../../proto/notification/mobile/base_pb';


export class EmailSvcClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addEmailTemplate(
    request: proto_notification_mobile_email_pb.AddEmailTemplateReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

  updateEmailTemplate(
    request: proto_notification_mobile_email_pb.UpdateEmailTemplateReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_notification_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_notification_mobile_base_pb.Empty>;

}

export class EmailSvcPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addEmailTemplate(
    request: proto_notification_mobile_email_pb.AddEmailTemplateReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

  updateEmailTemplate(
    request: proto_notification_mobile_email_pb.UpdateEmailTemplateReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_notification_mobile_base_pb.Empty>;

}

