import * as grpcWeb from 'grpc-web';

import * as ticket_mobile_inspector_base_pb from '../../ticket/mobile_inspector/base_pb';
import * as ticket_mobile_inspector_paper_ticket_pb from '../../ticket/mobile_inspector/paper_ticket_pb';


export class PaperTicketServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPaperTicketByCode(
    request: ticket_mobile_inspector_paper_ticket_pb.GetPaperTicketByCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_paper_ticket_pb.GetPaperTicketByCodeRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_paper_ticket_pb.GetPaperTicketByCodeRes>;

  mapPaperTicketInfoAndCheckin(
    request: ticket_mobile_inspector_paper_ticket_pb.MapPaperTicketInfoAndCheckinReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_base_pb.Empty>;

}

export class PaperTicketServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPaperTicketByCode(
    request: ticket_mobile_inspector_paper_ticket_pb.GetPaperTicketByCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_paper_ticket_pb.GetPaperTicketByCodeRes>;

  mapPaperTicketInfoAndCheckin(
    request: ticket_mobile_inspector_paper_ticket_pb.MapPaperTicketInfoAndCheckinReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_base_pb.Empty>;

}

