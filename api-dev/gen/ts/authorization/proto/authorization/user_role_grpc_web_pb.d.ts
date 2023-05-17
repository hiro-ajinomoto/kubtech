import * as grpcWeb from 'grpc-web';

import * as proto_authorization_user_role_pb from '../../proto/authorization/user_role_pb';


export class UserRoleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkUserHasPermission(
    request: proto_authorization_user_role_pb.CheckUserHasPermissionReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_authorization_user_role_pb.CheckUserHasPermissionRes) => void
  ): grpcWeb.ClientReadableStream<proto_authorization_user_role_pb.CheckUserHasPermissionRes>;

}

export class UserRoleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  checkUserHasPermission(
    request: proto_authorization_user_role_pb.CheckUserHasPermissionReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_authorization_user_role_pb.CheckUserHasPermissionRes>;

}

