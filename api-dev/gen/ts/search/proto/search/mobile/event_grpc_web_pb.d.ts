import * as grpcWeb from 'grpc-web';

import * as proto_search_mobile_event_pb from '../../../proto/search/mobile/event_pb';


export class SearchEventServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEventDetail(
    request: proto_search_mobile_event_pb.GetEventDetailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_search_mobile_event_pb.GetEventDetailRes) => void
  ): grpcWeb.ClientReadableStream<proto_search_mobile_event_pb.GetEventDetailRes>;

  searchTopEvents(
    request: proto_search_mobile_event_pb.SearchTopEventsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_search_mobile_event_pb.SearchTopEventsRes) => void
  ): grpcWeb.ClientReadableStream<proto_search_mobile_event_pb.SearchTopEventsRes>;

  searchListEvents(
    request: proto_search_mobile_event_pb.SearchListEventsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_search_mobile_event_pb.SearchListEventsRes) => void
  ): grpcWeb.ClientReadableStream<proto_search_mobile_event_pb.SearchListEventsRes>;

}

export class SearchEventServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEventDetail(
    request: proto_search_mobile_event_pb.GetEventDetailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_search_mobile_event_pb.GetEventDetailRes>;

  searchTopEvents(
    request: proto_search_mobile_event_pb.SearchTopEventsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_search_mobile_event_pb.SearchTopEventsRes>;

  searchListEvents(
    request: proto_search_mobile_event_pb.SearchListEventsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_search_mobile_event_pb.SearchListEventsRes>;

}

