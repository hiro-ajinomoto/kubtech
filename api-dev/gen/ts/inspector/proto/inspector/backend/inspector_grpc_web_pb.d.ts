import * as grpcWeb from 'grpc-web';

import * as proto_inspector_backend_inspector_pb from '../../../proto/inspector/backend/inspector_pb';


export class InspectorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getInspectorById(
    request: proto_inspector_backend_inspector_pb.GetInspectorByIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_inspector_backend_inspector_pb.GetInspectorByIdRes) => void
  ): grpcWeb.ClientReadableStream<proto_inspector_backend_inspector_pb.GetInspectorByIdRes>;

}

export class InspectorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getInspectorById(
    request: proto_inspector_backend_inspector_pb.GetInspectorByIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_inspector_backend_inspector_pb.GetInspectorByIdRes>;

}

