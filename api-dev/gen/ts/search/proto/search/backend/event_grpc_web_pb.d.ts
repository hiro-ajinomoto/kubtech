import * as grpcWeb from 'grpc-web';

import * as proto_search_backend_event_pb from '../../../proto/search/backend/event_pb';


export class SearchEventServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  internalGetEvent(
    request: proto_search_backend_event_pb.InternalGetEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_search_backend_event_pb.InternalGetEventRes) => void
  ): grpcWeb.ClientReadableStream<proto_search_backend_event_pb.InternalGetEventRes>;

}

export class SearchEventServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  internalGetEvent(
    request: proto_search_backend_event_pb.InternalGetEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_search_backend_event_pb.InternalGetEventRes>;

}

