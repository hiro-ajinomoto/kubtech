import * as grpcWeb from 'grpc-web';

import * as ticket_mobile_ticket_delivery_pb from '../../ticket/mobile/ticket_delivery_pb';


export class TicketDeliveryServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listTicketDeliveries(
    request: ticket_mobile_ticket_delivery_pb.ListTicketDeliveriesReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_delivery_pb.ListTicketDeliveriesRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_delivery_pb.ListTicketDeliveriesRes>;

}

export class TicketDeliveryServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listTicketDeliveries(
    request: ticket_mobile_ticket_delivery_pb.ListTicketDeliveriesReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_delivery_pb.ListTicketDeliveriesRes>;

}

