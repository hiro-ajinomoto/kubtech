import * as grpcWeb from 'grpc-web';

import * as ticket_web_admin_base_pb from '../../ticket/web_admin/base_pb';
import * as ticket_web_admin_paper_ticket_pb from '../../ticket/web_admin/paper_ticket_pb';


export class PaperTicketServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamPaperTickets(
    request: ticket_web_admin_paper_ticket_pb.StreamPaperTicketsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_admin_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_admin_base_pb.Empty>;

}

export class PaperTicketServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamPaperTickets(
    request: ticket_web_admin_paper_ticket_pb.StreamPaperTicketsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_admin_base_pb.Empty>;

}

