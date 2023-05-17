import * as grpcWeb from 'grpc-web';

import * as ticket_web_partnership_inspector_pb from '../../ticket/web_partnership/inspector_pb';
import * as ticket_web_partnership_base_pb from '../../ticket/web_partnership/base_pb';


export class InspectorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  assignCheckinEvent(
    request: ticket_web_partnership_inspector_pb.AssignCheckinEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_partnership_base_pb.Empty>;

}

export class InspectorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  assignCheckinEvent(
    request: ticket_web_partnership_inspector_pb.AssignCheckinEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_partnership_base_pb.Empty>;

}

