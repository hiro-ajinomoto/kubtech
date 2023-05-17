// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/search/mobile/address.proto

package mobile

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// AddressServiceClient is the client API for AddressService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AddressServiceClient interface {
	SearchAddress(ctx context.Context, in *SearchAddressReq, opts ...grpc.CallOption) (*SearchAddressRes, error)
	SearchByPostcode(ctx context.Context, in *SearchByPostcodeReq, opts ...grpc.CallOption) (*SearchByPostcodeRes, error)
}

type addressServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAddressServiceClient(cc grpc.ClientConnInterface) AddressServiceClient {
	return &addressServiceClient{cc}
}

func (c *addressServiceClient) SearchAddress(ctx context.Context, in *SearchAddressReq, opts ...grpc.CallOption) (*SearchAddressRes, error) {
	out := new(SearchAddressRes)
	err := c.cc.Invoke(ctx, "/search.mobile.AddressService/SearchAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *addressServiceClient) SearchByPostcode(ctx context.Context, in *SearchByPostcodeReq, opts ...grpc.CallOption) (*SearchByPostcodeRes, error) {
	out := new(SearchByPostcodeRes)
	err := c.cc.Invoke(ctx, "/search.mobile.AddressService/SearchByPostcode", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AddressServiceServer is the server API for AddressService service.
// All implementations must embed UnimplementedAddressServiceServer
// for forward compatibility
type AddressServiceServer interface {
	SearchAddress(context.Context, *SearchAddressReq) (*SearchAddressRes, error)
	SearchByPostcode(context.Context, *SearchByPostcodeReq) (*SearchByPostcodeRes, error)
	mustEmbedUnimplementedAddressServiceServer()
}

// UnimplementedAddressServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAddressServiceServer struct {
}

func (UnimplementedAddressServiceServer) SearchAddress(context.Context, *SearchAddressReq) (*SearchAddressRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SearchAddress not implemented")
}
func (UnimplementedAddressServiceServer) SearchByPostcode(context.Context, *SearchByPostcodeReq) (*SearchByPostcodeRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SearchByPostcode not implemented")
}
func (UnimplementedAddressServiceServer) mustEmbedUnimplementedAddressServiceServer() {}

// UnsafeAddressServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AddressServiceServer will
// result in compilation errors.
type UnsafeAddressServiceServer interface {
	mustEmbedUnimplementedAddressServiceServer()
}

func RegisterAddressServiceServer(s grpc.ServiceRegistrar, srv AddressServiceServer) {
	s.RegisterService(&AddressService_ServiceDesc, srv)
}

func _AddressService_SearchAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SearchAddressReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressServiceServer).SearchAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/search.mobile.AddressService/SearchAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressServiceServer).SearchAddress(ctx, req.(*SearchAddressReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _AddressService_SearchByPostcode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SearchByPostcodeReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AddressServiceServer).SearchByPostcode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/search.mobile.AddressService/SearchByPostcode",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AddressServiceServer).SearchByPostcode(ctx, req.(*SearchByPostcodeReq))
	}
	return interceptor(ctx, in, info, handler)
}

// AddressService_ServiceDesc is the grpc.ServiceDesc for AddressService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AddressService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "search.mobile.AddressService",
	HandlerType: (*AddressServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SearchAddress",
			Handler:    _AddressService_SearchAddress_Handler,
		},
		{
			MethodName: "SearchByPostcode",
			Handler:    _AddressService_SearchByPostcode_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/search/mobile/address.proto",
}