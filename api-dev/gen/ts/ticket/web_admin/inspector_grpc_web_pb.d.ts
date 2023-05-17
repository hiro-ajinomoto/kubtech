import * as grpcWeb from 'grpc-web';

import * as ticket_web_admin_base_pb from '../../ticket/web_admin/base_pb';
import * as ticket_web_admin_inspector_pb from '../../ticket/web_admin/inspector_pb';


export class InspectorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamCheckinLogs(
    request: ticket_web_admin_inspector_pb.StreamCheckinLogsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_admin_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_admin_base_pb.Empty>;

}

export class InspectorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamCheckinLogs(
    request: ticket_web_admin_inspector_pb.StreamCheckinLogsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_admin_base_pb.Empty>;

}

