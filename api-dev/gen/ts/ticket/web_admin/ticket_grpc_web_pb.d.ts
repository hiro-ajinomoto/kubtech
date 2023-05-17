import * as grpcWeb from 'grpc-web';

import * as ticket_web_admin_base_pb from '../../ticket/web_admin/base_pb';
import * as ticket_web_admin_ticket_pb from '../../ticket/web_admin/ticket_pb';


export class TicketServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamTickets(
    request: ticket_web_admin_ticket_pb.StreamTicketsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_admin_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_admin_base_pb.Empty>;

  migration(
    request: ticket_web_admin_ticket_pb.MigrationReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_web_admin_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_web_admin_base_pb.Empty>;

}

export class TicketServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamTickets(
    request: ticket_web_admin_ticket_pb.StreamTicketsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_admin_base_pb.Empty>;

  migration(
    request: ticket_web_admin_ticket_pb.MigrationReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_web_admin_base_pb.Empty>;

}

