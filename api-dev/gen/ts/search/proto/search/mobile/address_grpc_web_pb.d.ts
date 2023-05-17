import * as grpcWeb from 'grpc-web';

import * as proto_search_mobile_address_pb from '../../../proto/search/mobile/address_pb';


export class AddressServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  searchAddress(
    request: proto_search_mobile_address_pb.SearchAddressReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_search_mobile_address_pb.SearchAddressRes) => void
  ): grpcWeb.ClientReadableStream<proto_search_mobile_address_pb.SearchAddressRes>;

  searchByPostcode(
    request: proto_search_mobile_address_pb.SearchByPostcodeReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_search_mobile_address_pb.SearchByPostcodeRes) => void
  ): grpcWeb.ClientReadableStream<proto_search_mobile_address_pb.SearchByPostcodeRes>;

}

export class AddressServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  searchAddress(
    request: proto_search_mobile_address_pb.SearchAddressReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_search_mobile_address_pb.SearchAddressRes>;

  searchByPostcode(
    request: proto_search_mobile_address_pb.SearchByPostcodeReq,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_search_mobile_address_pb.SearchByPostcodeRes>;

}

