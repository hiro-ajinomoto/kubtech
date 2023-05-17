import * as grpcWeb from 'grpc-web';

import * as ticket_mobile_ticket_transferable_pb from '../../ticket/mobile/ticket_transferable_pb';
import * as ticket_mobile_base_pb from '../../ticket/mobile/base_pb';


export class TicketTransferableServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTicketTransferable(
    request: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_transferable_pb.CreateTicketTransferableRes>;

  createTicketTransferableAll(
    request: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllRes>;

  createTicketTransferableAllExclude(
    request: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllExcludeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllExcludeRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllExcludeRes>;

  mapUserInfo(
    request: ticket_mobile_ticket_transferable_pb.MapUserInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_base_pb.Empty>;

  submitTicketTransferable(
    request: ticket_mobile_ticket_transferable_pb.SubmitTicketTransferableReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_base_pb.Empty>;

  getDetailTicketTransferable(
    request: ticket_mobile_ticket_transferable_pb.GetDetailTicketTransferableReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_transferable_pb.GetDetailTicketTransferableRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_transferable_pb.GetDetailTicketTransferableRes>;

}

export class TicketTransferableServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTicketTransferable(
    request: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_transferable_pb.CreateTicketTransferableRes>;

  createTicketTransferableAll(
    request: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllRes>;

  createTicketTransferableAllExclude(
    request: ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllExcludeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_transferable_pb.CreateTicketTransferableAllExcludeRes>;

  mapUserInfo(
    request: ticket_mobile_ticket_transferable_pb.MapUserInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_base_pb.Empty>;

  submitTicketTransferable(
    request: ticket_mobile_ticket_transferable_pb.SubmitTicketTransferableReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_base_pb.Empty>;

  getDetailTicketTransferable(
    request: ticket_mobile_ticket_transferable_pb.GetDetailTicketTransferableReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_transferable_pb.GetDetailTicketTransferableRes>;

}

