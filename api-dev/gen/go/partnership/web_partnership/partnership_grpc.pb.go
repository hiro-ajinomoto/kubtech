// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/partnership/web_partnership/partnership.proto

package web_partnership

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
	UpdatePartnership(ctx context.Context, in *UpdatePartnershipReq, opts ...grpc.CallOption) (*Empty, error)
	PublicGetPartnershipByCode(ctx context.Context, in *PublicGetPartnershipByCodeReq, opts ...grpc.CallOption) (*PublicGetPartnershipByCodeRes, error)
}

type partnershipServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPartnershipServiceClient(cc grpc.ClientConnInterface) PartnershipServiceClient {
	return &partnershipServiceClient{cc}
}

func (c *partnershipServiceClient) UpdatePartnership(ctx context.Context, in *UpdatePartnershipReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/partnership.web_partnership.PartnershipService/UpdatePartnership", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *partnershipServiceClient) PublicGetPartnershipByCode(ctx context.Context, in *PublicGetPartnershipByCodeReq, opts ...grpc.CallOption) (*PublicGetPartnershipByCodeRes, error) {
	out := new(PublicGetPartnershipByCodeRes)
	err := c.cc.Invoke(ctx, "/partnership.web_partnership.PartnershipService/PublicGetPartnershipByCode", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PartnershipServiceServer is the server API for PartnershipService service.
// All implementations must embed UnimplementedPartnershipServiceServer
// for forward compatibility
type PartnershipServiceServer interface {
	UpdatePartnership(context.Context, *UpdatePartnershipReq) (*Empty, error)
	PublicGetPartnershipByCode(context.Context, *PublicGetPartnershipByCodeReq) (*PublicGetPartnershipByCodeRes, error)
	mustEmbedUnimplementedPartnershipServiceServer()
}

// UnimplementedPartnershipServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPartnershipServiceServer struct {
}

func (UnimplementedPartnershipServiceServer) UpdatePartnership(context.Context, *UpdatePartnershipReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePartnership not implemented")
}
func (UnimplementedPartnershipServiceServer) PublicGetPartnershipByCode(context.Context, *PublicGetPartnershipByCodeReq) (*PublicGetPartnershipByCodeRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PublicGetPartnershipByCode not implemented")
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

func _PartnershipService_UpdatePartnership_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePartnershipReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PartnershipServiceServer).UpdatePartnership(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.web_partnership.PartnershipService/UpdatePartnership",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PartnershipServiceServer).UpdatePartnership(ctx, req.(*UpdatePartnershipReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _PartnershipService_PublicGetPartnershipByCode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PublicGetPartnershipByCodeReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PartnershipServiceServer).PublicGetPartnershipByCode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.web_partnership.PartnershipService/PublicGetPartnershipByCode",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PartnershipServiceServer).PublicGetPartnershipByCode(ctx, req.(*PublicGetPartnershipByCodeReq))
	}
	return interceptor(ctx, in, info, handler)
}

// PartnershipService_ServiceDesc is the grpc.ServiceDesc for PartnershipService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PartnershipService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "partnership.web_partnership.PartnershipService",
	HandlerType: (*PartnershipServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "UpdatePartnership",
			Handler:    _PartnershipService_UpdatePartnership_Handler,
		},
		{
			MethodName: "PublicGetPartnershipByCode",
			Handler:    _PartnershipService_PublicGetPartnershipByCode_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/partnership/web_partnership/partnership.proto",
}
