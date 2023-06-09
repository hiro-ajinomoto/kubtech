// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/partnership/web_admin/partnership.proto

package web_admin

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

// PartnershipServiceClient is the client API for PartnershipService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PartnershipServiceClient interface {
	CreatePartnership(ctx context.Context, in *CreatePartnershipReq, opts ...grpc.CallOption) (*CreatePartnershipRes, error)
	RetrievePartnership(ctx context.Context, in *RetrievePartnershipReq, opts ...grpc.CallOption) (*RetrievePartnershipRes, error)
	ListPartnership(ctx context.Context, in *ListPartnershipReq, opts ...grpc.CallOption) (*ListPartnershipRes, error)
}

type partnershipServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPartnershipServiceClient(cc grpc.ClientConnInterface) PartnershipServiceClient {
	return &partnershipServiceClient{cc}
}

func (c *partnershipServiceClient) CreatePartnership(ctx context.Context, in *CreatePartnershipReq, opts ...grpc.CallOption) (*CreatePartnershipRes, error) {
	out := new(CreatePartnershipRes)
	err := c.cc.Invoke(ctx, "/partnership.web_admin.PartnershipService/CreatePartnership", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *partnershipServiceClient) RetrievePartnership(ctx context.Context, in *RetrievePartnershipReq, opts ...grpc.CallOption) (*RetrievePartnershipRes, error) {
	out := new(RetrievePartnershipRes)
	err := c.cc.Invoke(ctx, "/partnership.web_admin.PartnershipService/RetrievePartnership", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *partnershipServiceClient) ListPartnership(ctx context.Context, in *ListPartnershipReq, opts ...grpc.CallOption) (*ListPartnershipRes, error) {
	out := new(ListPartnershipRes)
	err := c.cc.Invoke(ctx, "/partnership.web_admin.PartnershipService/ListPartnership", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PartnershipServiceServer is the server API for PartnershipService service.
// All implementations must embed UnimplementedPartnershipServiceServer
// for forward compatibility
type PartnershipServiceServer interface {
	CreatePartnership(context.Context, *CreatePartnershipReq) (*CreatePartnershipRes, error)
	RetrievePartnership(context.Context, *RetrievePartnershipReq) (*RetrievePartnershipRes, error)
	ListPartnership(context.Context, *ListPartnershipReq) (*ListPartnershipRes, error)
	mustEmbedUnimplementedPartnershipServiceServer()
}

// UnimplementedPartnershipServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPartnershipServiceServer struct {
}

func (UnimplementedPartnershipServiceServer) CreatePartnership(context.Context, *CreatePartnershipReq) (*CreatePartnershipRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePartnership not implemented")
}
func (UnimplementedPartnershipServiceServer) RetrievePartnership(context.Context, *RetrievePartnershipReq) (*RetrievePartnershipRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RetrievePartnership not implemented")
}
func (UnimplementedPartnershipServiceServer) ListPartnership(context.Context, *ListPartnershipReq) (*ListPartnershipRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPartnership not implemented")
}
func (UnimplementedPartnershipServiceServer) mustEmbedUnimplementedPartnershipServiceServer() {}

// UnsafePartnershipServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PartnershipServiceServer will
// result in compilation errors.
type UnsafePartnershipServiceServer interface {
	mustEmbedUnimplementedPartnershipServiceServer()
}

func RegisterPartnershipServiceServer(s grpc.ServiceRegistrar, srv PartnershipServiceServer) {
	s.RegisterService(&PartnershipService_ServiceDesc, srv)
}

func _PartnershipService_CreatePartnership_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePartnershipReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PartnershipServiceServer).CreatePartnership(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.web_admin.PartnershipService/CreatePartnership",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PartnershipServiceServer).CreatePartnership(ctx, req.(*CreatePartnershipReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _PartnershipService_RetrievePartnership_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RetrievePartnershipReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PartnershipServiceServer).RetrievePartnership(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.web_admin.PartnershipService/RetrievePartnership",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PartnershipServiceServer).RetrievePartnership(ctx, req.(*RetrievePartnershipReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _PartnershipService_ListPartnership_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPartnershipReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PartnershipServiceServer).ListPartnership(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.web_admin.PartnershipService/ListPartnership",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PartnershipServiceServer).ListPartnership(ctx, req.(*ListPartnershipReq))
	}
	return interceptor(ctx, in, info, handler)
}

// PartnershipService_ServiceDesc is the grpc.ServiceDesc for PartnershipService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PartnershipService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "partnership.web_admin.PartnershipService",
	HandlerType: (*PartnershipServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePartnership",
			Handler:    _PartnershipService_CreatePartnership_Handler,
		},
		{
			MethodName: "RetrievePartnership",
			Handler:    _PartnershipService_RetrievePartnership_Handler,
		},
		{
			MethodName: "ListPartnership",
			Handler:    _PartnershipService_ListPartnership_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/partnership/web_admin/partnership.proto",
}
