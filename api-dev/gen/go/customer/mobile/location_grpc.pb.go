// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/customer/mobile/location.proto

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

// CustomerLocationServiceClient is the client API for CustomerLocationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CustomerLocationServiceClient interface {
	CreateMyLocation(ctx context.Context, in *CreateMyLocationReq, opts ...grpc.CallOption) (*CreateMyLocationRes, error)
	UpdateMyLocation(ctx context.Context, in *UpdateMyLocationReq, opts ...grpc.CallOption) (*Empty, error)
	DeleteMyLocation(ctx context.Context, in *DeleteMyLocationReq, opts ...grpc.CallOption) (*Empty, error)
	RetrieveMyLocation(ctx context.Context, in *RetrieveMyLocationReq, opts ...grpc.CallOption) (*RetrieveMyLocationRes, error)
	ListMyLocation(ctx context.Context, in *ListMyLocationReq, opts ...grpc.CallOption) (*ListMyLocationRes, error)
}

type customerLocationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCustomerLocationServiceClient(cc grpc.ClientConnInterface) CustomerLocationServiceClient {
	return &customerLocationServiceClient{cc}
}

func (c *customerLocationServiceClient) CreateMyLocation(ctx context.Context, in *CreateMyLocationReq, opts ...grpc.CallOption) (*CreateMyLocationRes, error) {
	out := new(CreateMyLocationRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerLocationService/CreateMyLocation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerLocationServiceClient) UpdateMyLocation(ctx context.Context, in *UpdateMyLocationReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerLocationService/UpdateMyLocation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerLocationServiceClient) DeleteMyLocation(ctx context.Context, in *DeleteMyLocationReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerLocationService/DeleteMyLocation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerLocationServiceClient) RetrieveMyLocation(ctx context.Context, in *RetrieveMyLocationReq, opts ...grpc.CallOption) (*RetrieveMyLocationRes, error) {
	out := new(RetrieveMyLocationRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerLocationService/RetrieveMyLocation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerLocationServiceClient) ListMyLocation(ctx context.Context, in *ListMyLocationReq, opts ...grpc.CallOption) (*ListMyLocationRes, error) {
	out := new(ListMyLocationRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerLocationService/ListMyLocation", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CustomerLocationServiceServer is the server API for CustomerLocationService service.
// All implementations must embed UnimplementedCustomerLocationServiceServer
// for forward compatibility
type CustomerLocationServiceServer interface {
	CreateMyLocation(context.Context, *CreateMyLocationReq) (*CreateMyLocationRes, error)
	UpdateMyLocation(context.Context, *UpdateMyLocationReq) (*Empty, error)
	DeleteMyLocation(context.Context, *DeleteMyLocationReq) (*Empty, error)
	RetrieveMyLocation(context.Context, *RetrieveMyLocationReq) (*RetrieveMyLocationRes, error)
	ListMyLocation(context.Context, *ListMyLocationReq) (*ListMyLocationRes, error)
	mustEmbedUnimplementedCustomerLocationServiceServer()
}

// UnimplementedCustomerLocationServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCustomerLocationServiceServer struct {
}

func (UnimplementedCustomerLocationServiceServer) CreateMyLocation(context.Context, *CreateMyLocationReq) (*CreateMyLocationRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateMyLocation not implemented")
}
func (UnimplementedCustomerLocationServiceServer) UpdateMyLocation(context.Context, *UpdateMyLocationReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateMyLocation not implemented")
}
func (UnimplementedCustomerLocationServiceServer) DeleteMyLocation(context.Context, *DeleteMyLocationReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteMyLocation not implemented")
}
func (UnimplementedCustomerLocationServiceServer) RetrieveMyLocation(context.Context, *RetrieveMyLocationReq) (*RetrieveMyLocationRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RetrieveMyLocation not implemented")
}
func (UnimplementedCustomerLocationServiceServer) ListMyLocation(context.Context, *ListMyLocationReq) (*ListMyLocationRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListMyLocation not implemented")
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

func _CustomerLocationService_CreateMyLocation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateMyLocationReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerLocationServiceServer).CreateMyLocation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerLocationService/CreateMyLocation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerLocationServiceServer).CreateMyLocation(ctx, req.(*CreateMyLocationReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerLocationService_UpdateMyLocation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateMyLocationReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerLocationServiceServer).UpdateMyLocation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerLocationService/UpdateMyLocation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerLocationServiceServer).UpdateMyLocation(ctx, req.(*UpdateMyLocationReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerLocationService_DeleteMyLocation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteMyLocationReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerLocationServiceServer).DeleteMyLocation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerLocationService/DeleteMyLocation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerLocationServiceServer).DeleteMyLocation(ctx, req.(*DeleteMyLocationReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerLocationService_RetrieveMyLocation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RetrieveMyLocationReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerLocationServiceServer).RetrieveMyLocation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerLocationService/RetrieveMyLocation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerLocationServiceServer).RetrieveMyLocation(ctx, req.(*RetrieveMyLocationReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerLocationService_ListMyLocation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListMyLocationReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerLocationServiceServer).ListMyLocation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerLocationService/ListMyLocation",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerLocationServiceServer).ListMyLocation(ctx, req.(*ListMyLocationReq))
	}
	return interceptor(ctx, in, info, handler)
}

// CustomerLocationService_ServiceDesc is the grpc.ServiceDesc for CustomerLocationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CustomerLocationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "customer.mobile.CustomerLocationService",
	HandlerType: (*CustomerLocationServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateMyLocation",
			Handler:    _CustomerLocationService_CreateMyLocation_Handler,
		},
		{
			MethodName: "UpdateMyLocation",
			Handler:    _CustomerLocationService_UpdateMyLocation_Handler,
		},
		{
			MethodName: "DeleteMyLocation",
			Handler:    _CustomerLocationService_DeleteMyLocation_Handler,
		},
		{
			MethodName: "RetrieveMyLocation",
			Handler:    _CustomerLocationService_RetrieveMyLocation_Handler,
		},
		{
			MethodName: "ListMyLocation",
			Handler:    _CustomerLocationService_ListMyLocation_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/customer/mobile/location.proto",
}
