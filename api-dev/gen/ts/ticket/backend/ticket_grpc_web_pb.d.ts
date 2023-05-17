import * as grpcWeb from 'grpc-web';

import * as ticket_backend_ticket_pb from '../../ticket/backend/ticket_pb';
import * as ticket_backend_base_pb from '../../ticket/backend/base_pb';


export class TicketServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTicketSeatIdByOrderId(
    request: ticket_backend_ticket_pb.GetTicketSeatIdByOrderIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_backend_ticket_pb.GetTicketSeatIdByOrderIdRes) => void
  ): grpcWeb.ClientReadableStream<ticket_backend_ticket_pb.GetTicketSeatIdByOrderIdRes>;

  deleteTicketByOrderId(
    request: ticket_backend_ticket_pb.DeleteTicketByOrderIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_backend_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_backend_base_pb.Empty>;

}

export class TicketServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTicketSeatIdByOrderId(
    request: ticket_backend_ticket_pb.GetTicketSeatIdByOrderIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_backend_ticket_pb.GetTicketSeatIdByOrderIdRes>;

  deleteTicketByOrderId(
    request: ticket_backend_ticket_pb.DeleteTicketByOrderIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_backend_base_pb.Empty>;

}

