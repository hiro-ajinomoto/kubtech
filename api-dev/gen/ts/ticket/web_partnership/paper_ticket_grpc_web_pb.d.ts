import * as grpcWeb from 'grpc-web';

import * as ticket_web_partnership_base_pb from '../../ticket/web_partnership/base_pb';
import * as ticket_web_partnership_paper_ticket_pb from '../../ticket/web_partnership/paper_ticket_pb';


export class PaperTicketServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  genPaperTicketInfo(
    request: ticket_web_partnership_paper_ticket_pb.GenPaperTicketInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_partnership_base_pb.Empty>;

}

export class PaperTicketServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  genPaperTicketInfo(
    request: ticket_web_partnership_paper_ticket_pb.GenPaperTicketInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_partnership_base_pb.Empty>;

}

