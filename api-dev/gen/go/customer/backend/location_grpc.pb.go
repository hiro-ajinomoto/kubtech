// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/customer/backend/location.proto

package backend

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

// CustomerLocationServiceClient is the client API for CustomerLocationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CustomerLocationServiceClient interface {
	RetrieveCustomerLocation(ctx context.Context, in *RetrieveCustomerLocationReq, opts ...grpc.CallOption) (*RetrieveCustomerLocationRes, error)
}

type customerLocationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCustomerLocationServiceClient(cc grpc.ClientConnInterface) CustomerLocationServiceClient {
	return &customerLocationServiceClient{cc}
}

func (c *customerLocationServiceClient) RetrieveCustomerLocation(ctx context.Context, in *RetrieveCustomerLocationReq, opts ...grpc.CallOption) (*RetrieveCustomerLocationRes, error) {
	out := new(RetrieveCustomerLocationRes)
	err := c.cc.Invoke(ctx, "/customer.backend.CustomerLocationService/RetrieveCustomerLocation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CustomerLocationServiceServer is the server API for CustomerLocationService service.
// All implementations must embed UnimplementedCustomerLocationServiceServer
// for forward compatibility
type CustomerLocationServiceServer interface {
	RetrieveCustomerLocation(context.Context, *RetrieveCustomerLocationReq) (*RetrieveCustomerLocationRes, error)
	mustEmbedUnimplementedCustomerLocationServiceServer()
}

// UnimplementedCustomerLocationServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCustomerLocationServiceServer struct {
}

func (UnimplementedCustomerLocationServiceServer) RetrieveCustomerLocation(context.Context, *RetrieveCustomerLocationReq) (*RetrieveCustomerLocationRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RetrieveCustomerLocation not implemented")
}
func (UnimplementedCustomerLocationServiceServer) mustEmbedUnimplementedCustomerLocationServiceServer() {
}

// UnsafeCustomerLocationServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CustomerLocationServiceServer will
// result in compilation errors.
type UnsafeCustomerLocationServiceServer interface {
	mustEmbedUnimplementedCustomerLocationServiceServer()
}

func RegisterCustomerLocationServiceServer(s grpc.ServiceRegistrar, srv CustomerLocationServiceServer) {
	s.RegisterService(&CustomerLocationService_ServiceDesc, srv)
}

func _CustomerLocationService_RetrieveCustomerLocation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RetrieveCustomerLocationReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerLocationServiceServer).RetrieveCustomerLocation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.backend.CustomerLocationService/RetrieveCustomerLocation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerLocationServiceServer).RetrieveCustomerLocation(ctx, req.(*RetrieveCustomerLocationReq))
	}
	return interceptor(ctx, in, info, handler)
}

// CustomerLocationService_ServiceDesc is the grpc.ServiceDesc for CustomerLocationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CustomerLocationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "customer.backend.CustomerLocationService",
	HandlerType: (*CustomerLocationServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "RetrieveCustomerLocation",
			Handler:    _CustomerLocationService_RetrieveCustomerLocation_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/customer/backend/location.proto",
}
