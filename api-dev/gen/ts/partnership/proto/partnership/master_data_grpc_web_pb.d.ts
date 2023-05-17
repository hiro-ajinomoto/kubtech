import * as grpcWeb from 'grpc-web';

import * as proto_partnership_master_data_pb from '../../proto/partnership/master_data_pb';
import * as proto_partnership_base_pb from '../../proto/partnership/base_pb';


export class MasterDataServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createMasterData(
    request: proto_partnership_master_data_pb.CreateMasterDataReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_master_data_pb.CreateMasterDataRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_master_data_pb.CreateMasterDataRes>;

  updateMasterData(
    request: proto_partnership_master_data_pb.UpdateMasterDataReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  deleteMasterData(
    request: proto_partnership_master_data_pb.DeleteMasterDataReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_base_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_base_pb.Empty>;

  retrieveMasterData(
    request: proto_partnership_master_data_pb.RetrieveMasterDataReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_master_data_pb.RetrieveMasterDataRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_master_data_pb.RetrieveMasterDataRes>;

  listMasterData(
    request: proto_partnership_master_data_pb.ListMasterDataReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_master_data_pb.ListMasterDataRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_master_data_pb.ListMasterDataRes>;

  retrieveMasterDataPartnership(
    request: proto_partnership_master_data_pb.RetrieveMasterDataPartnershipReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_master_data_pb.RetrieveMasterDataPartnershipRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_master_data_pb.RetrieveMasterDataPartnershipRes>;

  listMasterDataPartnership(
    request: proto_partnership_master_data_pb.ListMasterDataPartnershipReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_master_data_pb.ListMasterDataPartnershipRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_master_data_pb.ListMasterDataPartnershipRes>;

  internalListMasterDataByIds(
    request: proto_partnership_master_data_pb.InternalListMasterDataByIdsReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_partnership_master_data_pb.InternalListMasterDataByIdsRes) => void
  ): grpcWeb.ClientReadableStream<proto_partnership_master_data_pb.InternalListMasterDataByIdsRes>;

}

export class MasterDataServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createMasterData(
    request: proto_partnership_master_data_pb.CreateMasterDataReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_master_data_pb.CreateMasterDataRes>;

  updateMasterData(
    request: proto_partnership_master_data_pb.UpdateMasterDataReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  deleteMasterData(
    request: proto_partnership_master_data_pb.DeleteMasterDataReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_base_pb.Empty>;

  retrieveMasterData(
    request: proto_partnership_master_data_pb.RetrieveMasterDataReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_master_data_pb.RetrieveMasterDataRes>;

  listMasterData(
    request: proto_partnership_master_data_pb.ListMasterDataReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_master_data_pb.ListMasterDataRes>;

  retrieveMasterDataPartnership(
    request: proto_partnership_master_data_pb.RetrieveMasterDataPartnershipReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_master_data_pb.RetrieveMasterDataPartnershipRes>;

  listMasterDataPartnership(
    request: proto_partnership_master_data_pb.ListMasterDataPartnershipReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_master_data_pb.ListMasterDataPartnershipRes>;

  internalListMasterDataByIds(
    request: proto_partnership_master_data_pb.InternalListMasterDataByIdsReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_partnership_master_data_pb.InternalListMasterDataByIdsRes>;

}

