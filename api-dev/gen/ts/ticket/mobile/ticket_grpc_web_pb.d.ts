import * as grpcWeb from 'grpc-web';

import * as ticket_mobile_base_pb from '../../ticket/mobile/base_pb';
import * as ticket_mobile_ticket_pb from '../../ticket/mobile/ticket_pb';


export class TicketServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateUserInfo(
    request: ticket_mobile_ticket_pb.UpdateUserInfoReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_base_pb.Empty>;

  updateStatus(
    request: ticket_mobile_ticket_pb.UpdateStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_base_pb.Empty>;

  updateEnableVerificationCode(
    request: ticket_mobile_ticket_pb.UpdateEnableVerificationCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_base_pb.Empty>;

  getMyTicket(
    request: ticket_mobile_ticket_pb.GetMyTicketReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.GetMyTicketRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.GetMyTicketRes>;

  getMyTicketByOrderId(
    request: ticket_mobile_ticket_pb.GetMyTicketByOrderIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.GetMyTicketByOrderIdRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.GetMyTicketByOrderIdRes>;

  getMyTickets(
    request: ticket_mobile_ticket_pb.ListMyTicketReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.GetMyTicketsRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.GetMyTicketsRes>;

  getMyTicketByTransferTransactionId(
    request: ticket_mobile_ticket_pb.GetMyTicketByTransferTransactionIdReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.GetMyTicketByTransferTransactionIdRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.GetMyTicketByTransferTransactionIdRes>;

  getMyTransferTransactionHistory(
    request: ticket_mobile_ticket_pb.GetMyTransferTransactionHistoryReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.GetMyTransferTransactionHistoryRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.GetMyTransferTransactionHistoryRes>;

  listMyTicketByStatus(
    request: ticket_mobile_ticket_pb.ListMyTicketByStatusReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.ListMyTicketByStatusRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.ListMyTicketByStatusRes>;

  listMyTicketByPriceBlock(
    request: ticket_mobile_ticket_pb.ListMyTicketByPriceBlockReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.ListMyTicketByPriceBlockRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.ListMyTicketByPriceBlockRes>;

  listMyTicketReadyToCheckin(
    request: ticket_mobile_ticket_pb.ListMyTicketReadyToCheckinReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.ListMyTicketReadyToCheckinRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.ListMyTicketReadyToCheckinRes>;

  markTicketOffline(
    request: ticket_mobile_ticket_pb.MarkTicketOfflineReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_base_pb.Empty>;

  getMyTicketsByDeliveryID(
    request: ticket_mobile_ticket_pb.GetMyTicketsByDeliveryIDReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_ticket_pb.GetMyTicketsByDeliveryIDRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_ticket_pb.GetMyTicketsByDeliveryIDRes>;

}

export class TicketServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  updateUserInfo(
    request: ticket_mobile_ticket_pb.UpdateUserInfoReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_base_pb.Empty>;

  updateStatus(
    request: ticket_mobile_ticket_pb.UpdateStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_base_pb.Empty>;

  updateEnableVerificationCode(
    request: ticket_mobile_ticket_pb.UpdateEnableVerificationCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_base_pb.Empty>;

  getMyTicket(
    request: ticket_mobile_ticket_pb.GetMyTicketReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.GetMyTicketRes>;

  getMyTicketByOrderId(
    request: ticket_mobile_ticket_pb.GetMyTicketByOrderIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.GetMyTicketByOrderIdRes>;

  getMyTickets(
    request: ticket_mobile_ticket_pb.ListMyTicketReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.GetMyTicketsRes>;

  getMyTicketByTransferTransactionId(
    request: ticket_mobile_ticket_pb.GetMyTicketByTransferTransactionIdReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.GetMyTicketByTransferTransactionIdRes>;

  getMyTransferTransactionHistory(
    request: ticket_mobile_ticket_pb.GetMyTransferTransactionHistoryReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.GetMyTransferTransactionHistoryRes>;

  listMyTicketByStatus(
    request: ticket_mobile_ticket_pb.ListMyTicketByStatusReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.ListMyTicketByStatusRes>;

  listMyTicketByPriceBlock(
    request: ticket_mobile_ticket_pb.ListMyTicketByPriceBlockReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.ListMyTicketByPriceBlockRes>;

  listMyTicketReadyToCheckin(
    request: ticket_mobile_ticket_pb.ListMyTicketReadyToCheckinReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.ListMyTicketReadyToCheckinRes>;

  markTicketOffline(
    request: ticket_mobile_ticket_pb.MarkTicketOfflineReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_base_pb.Empty>;

  getMyTicketsByDeliveryID(
    request: ticket_mobile_ticket_pb.GetMyTicketsByDeliveryIDReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_ticket_pb.GetMyTicketsByDeliveryIDRes>;

}

