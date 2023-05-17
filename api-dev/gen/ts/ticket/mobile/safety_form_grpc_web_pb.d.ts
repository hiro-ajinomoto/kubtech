import * as grpcWeb from 'grpc-web';

import * as ticket_mobile_safety_form_pb from '../../ticket/mobile/safety_form_pb';
import * as ticket_mobile_base_pb from '../../ticket/mobile/base_pb';


export class SafetyFormServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  declareSafetyForm(
    request: ticket_mobile_safety_form_pb.DeclareSafetyFormReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_base_pb.Empty>;

  getSafetyFormDetail(
    request: ticket_mobile_safety_form_pb.GetSafetyFormDetailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_safety_form_pb.GetSafetyFormDetailRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_safety_form_pb.GetSafetyFormDetailRes>;

}

export class SafetyFormServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  declareSafetyForm(
    request: ticket_mobile_safety_form_pb.DeclareSafetyFormReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_base_pb.Empty>;

  getSafetyFormDetail(
    request: ticket_mobile_safety_form_pb.GetSafetyFormDetailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_safety_form_pb.GetSafetyFormDetailRes>;

}

