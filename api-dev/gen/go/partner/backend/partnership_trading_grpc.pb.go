// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/partner/backend/partnership_trading.proto

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

// PartnershipTradingServiceClient is the client API for PartnershipTradingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PartnershipTradingServiceClient interface {
	CreatePartnershipTrading(ctx context.Context, in *CreatePartnershipTradingReq, opts ...grpc.CallOption) (*CreatePartnershipTradingRes, error)
}

type partnershipTradingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPartnershipTradingServiceClient(cc grpc.ClientConnInterface) PartnershipTradingServiceClient {
	return &partnershipTradingServiceClient{cc}
}

func (c *partnershipTradingServiceClient) CreatePartnershipTrading(ctx context.Context, in *CreatePartnershipTradingReq, opts ...grpc.CallOption) (*CreatePartnershipTradingRes, error) {
	out := new(CreatePartnershipTradingRes)
	err := c.cc.Invoke(ctx, "/partner.backend.PartnershipTradingService/CreatePartnershipTrading", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PartnershipTradingServiceServer is the server API for PartnershipTradingService service.
// All implementations must embed UnimplementedPartnershipTradingServiceServer
// for forward compatibility
type PartnershipTradingServiceServer interface {
	CreatePartnershipTrading(context.Context, *CreatePartnershipTradingReq) (*CreatePartnershipTradingRes, error)
	mustEmbedUnimplementedPartnershipTradingServiceServer()
}

// UnimplementedPartnershipTradingServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPartnershipTradingServiceServer struct {
}

func (UnimplementedPartnershipTradingServiceServer) CreatePartnershipTrading(context.Context, *CreatePartnershipTradingReq) (*CreatePartnershipTradingRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePartnershipTrading not implemented")
}
func (UnimplementedPartnershipTradingServiceServer) mustEmbedUnimplementedPartnershipTradingServiceServer() {
}

// UnsafePartnershipTradingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PartnershipTradingServiceServer will
// result in compilation errors.
type UnsafePartnershipTradingServiceServer interface {
	mustEmbedUnimplementedPartnershipTradingServiceServer()
}

func RegisterPartnershipTradingServiceServer(s grpc.ServiceRegistrar, srv PartnershipTradingServiceServer) {
	s.RegisterService(&PartnershipTradingService_ServiceDesc, srv)
}

func _PartnershipTradingService_CreatePartnershipTrading_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePartnershipTradingReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PartnershipTradingServiceServer).CreatePartnershipTrading(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partner.backend.PartnershipTradingService/CreatePartnershipTrading",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PartnershipTradingServiceServer).CreatePartnershipTrading(ctx, req.(*CreatePartnershipTradingReq))
	}
	return interceptor(ctx, in, info, handler)
}

// PartnershipTradingService_ServiceDesc is the grpc.ServiceDesc for PartnershipTradingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PartnershipTradingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "partner.backend.PartnershipTradingService",
	HandlerType: (*PartnershipTradingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreatePartnershipTrading",
			Handler:    _PartnershipTradingService_CreatePartnershipTrading_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/partner/backend/partnership_trading.proto",
}