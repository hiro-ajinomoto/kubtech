import * as grpcWeb from 'grpc-web';

import * as ticket_mobile_inspector_inspector_pb from '../../ticket/mobile_inspector/inspector_pb';
import * as ticket_mobile_inspector_base_pb from '../../ticket/mobile_inspector/base_pb';


export class InspectorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkIn(
    request: ticket_mobile_inspector_inspector_pb.CheckInReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_base_pb.Empty>;

  mappingUserInfoToTicketAndCheckIn(
    request: ticket_mobile_inspector_inspector_pb.MappingUserInfoToTicketAndCheckInReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_base_pb.Empty>;

  listCheckInLogs(
    request: ticket_mobile_inspector_inspector_pb.ListCheckInLogsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_inspector_pb.ListCheckInLogsRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_inspector_pb.ListCheckInLogsRes>;

  mappingUserInfoToTicket(
    request: ticket_mobile_inspector_inspector_pb.MappingUserInfoToTicketReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_base_pb.Empty>;

  getTicketByCode(
    request: ticket_mobile_inspector_inspector_pb.GetTicketByCodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_inspector_pb.GetTicketByCodeRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_inspector_pb.GetTicketByCodeRes>;

  getTicketByPhone(
    request: ticket_mobile_inspector_inspector_pb.GetTicketByPhoneReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_inspector_pb.GetTicketByPhoneRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_inspector_pb.GetTicketByPhoneRes>;

  getTicketByEmail(
    request: ticket_mobile_inspector_inspector_pb.GetTicketByEmailReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_inspector_pb.GetTicketByEmailRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_inspector_pb.GetTicketByEmailRes>;

  assignCheckinEvent(
    request: ticket_mobile_inspector_inspector_pb.AssignCheckinEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_base_pb.Empty>;

  getCurrentCheckinEvent(
    request: ticket_mobile_inspector_inspector_pb.GetCurrentCheckinEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_inspector_pb.GetCurrentCheckinEventRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_inspector_pb.GetCurrentCheckinEventRes>;

  getUpcomingCheckinEvent(
    request: ticket_mobile_inspector_inspector_pb.GetUpcomingCheckinEventReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ticket_mobile_inspector_inspector_pb.GetUpcomingCheckinEventRes) => void
  ): grpcWeb.ClientReadableStream<ticket_mobile_inspector_inspector_pb.GetUpcomingCheckinEventRes>;

}

export class InspectorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkIn(
    request: ticket_mobile_inspector_inspector_pb.CheckInReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_base_pb.Empty>;

  mappingUserInfoToTicketAndCheckIn(
    request: ticket_mobile_inspector_inspector_pb.MappingUserInfoToTicketAndCheckInReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_base_pb.Empty>;

  listCheckInLogs(
    request: ticket_mobile_inspector_inspector_pb.ListCheckInLogsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_inspector_pb.ListCheckInLogsRes>;

  mappingUserInfoToTicket(
    request: ticket_mobile_inspector_inspector_pb.MappingUserInfoToTicketReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_base_pb.Empty>;

  getTicketByCode(
    request: ticket_mobile_inspector_inspector_pb.GetTicketByCodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_inspector_pb.GetTicketByCodeRes>;

  getTicketByPhone(
    request: ticket_mobile_inspector_inspector_pb.GetTicketByPhoneReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_inspector_pb.GetTicketByPhoneRes>;

  getTicketByEmail(
    request: ticket_mobile_inspector_inspector_pb.GetTicketByEmailReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_inspector_pb.GetTicketByEmailRes>;

  assignCheckinEvent(
    request: ticket_mobile_inspector_inspector_pb.AssignCheckinEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_base_pb.Empty>;

  getCurrentCheckinEvent(
    request: ticket_mobile_inspector_inspector_pb.GetCurrentCheckinEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_inspector_pb.GetCurrentCheckinEventRes>;

  getUpcomingCheckinEvent(
    request: ticket_mobile_inspector_inspector_pb.GetUpcomingCheckinEventReq,
    metadata?: grpcWeb.Metadata
  ): Promise<ticket_mobile_inspector_inspector_pb.GetUpcomingCheckinEventRes>;

}

