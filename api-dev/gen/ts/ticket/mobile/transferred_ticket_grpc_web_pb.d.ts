import * as grpcWeb from 'grpc-web';

import * as ticket_mobile_transferred_ticket_pb from '../../ticket/mobile/transferred_ticket_pb';


export class TransferredTicketServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMyTransferredTicketByOrderId(
    request: ticket_mobile_transferred_ticket_pb.GetMyTransferredTicketByOrderIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_transferred_ticket_pb.GetMyTransferredTicketByOrderIdRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_transferred_ticket_pb.GetMyTransferredTicketByOrderIdRes>;

}

export class TransferredTicketServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMyTransferredTicketByOrderId(
    request: ticket_mobile_transferred_ticket_pb.GetMyTransferredTicketByOrderIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_transferred_ticket_pb.GetMyTransferredTicketByOrderIdRes>;

}

