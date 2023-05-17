import * as grpcWeb from 'grpc-web';

import * as proto_partner_mobile_partner_user_pb from '../../../proto/partner/mobile/partner_user_pb';
import * as proto_partner_mobile_base_pb from '../../../proto/partner/mobile/base_pb';


export class PartnerUserServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_partner_mobile_partner_user_pb.GetMeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_mobile_partner_user_pb.GetMeRes) => void
  ): grpcWeb.ClientReadableStream<proto_partner_mobile_partner_user_pb.GetMeRes>;

  changePassword(
    request: proto_partner_mobile_partner_user_pb.ChangePasswordReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partner_mobile_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partner_mobile_base_pb.Empty>;

}

export class PartnerUserServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getMe(
    request: proto_partner_mobile_partner_user_pb.GetMeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_mobile_partner_user_pb.GetMeRes>;

  changePassword(
    request: proto_partner_mobile_partner_user_pb.ChangePasswordReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partner_mobile_base_pb.Empty>;

}

