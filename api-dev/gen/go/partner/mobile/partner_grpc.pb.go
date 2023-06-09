// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/partner/mobile/partner.proto

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

// PartnerServiceClient is the client API for PartnerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PartnerServiceClient interface {
	GetDocuments(ctx context.Context, in *GetDocumentsReq, opts ...grpc.CallOption) (*GetDocumentsRes, error)
}

type partnerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPartnerServiceClient(cc grpc.ClientConnInterface) PartnerServiceClient {
	return &partnerServiceClient{cc}
}

func (c *partnerServiceClient) GetDocuments(ctx context.Context, in *GetDocumentsReq, opts ...grpc.CallOption) (*GetDocumentsRes, error) {
	out := new(GetDocumentsRes)
	err := c.cc.Invoke(ctx, "/partner.mobile.PartnerService/GetDocuments", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PartnerServiceServer is the server API for PartnerService service.
// All implementations must embed UnimplementedPartnerServiceServer
// for forward compatibility
type PartnerServiceServer interface {
	GetDocuments(context.Context, *GetDocumentsReq) (*GetDocumentsRes, error)
	mustEmbedUnimplementedPartnerServiceServer()
}

// UnimplementedPartnerServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPartnerServiceServer struct {
}

func (UnimplementedPartnerServiceServer) GetDocuments(context.Context, *GetDocumentsReq) (*GetDocumentsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDocuments not implemented")
}
func (UnimplementedPartnerServiceServer) mustEmbedUnimplementedPartnerServiceServer() {}

// UnsafePartnerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PartnerServiceServer will
// result in compilation errors.
type UnsafePartnerServiceServer interface {
	mustEmbedUnimplementedPartnerServiceServer()
}

func RegisterPartnerServiceServer(s grpc.ServiceRegistrar, srv PartnerServiceServer) {
	s.RegisterService(&PartnerService_ServiceDesc, srv)
}

func _PartnerService_GetDocuments_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDocumentsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PartnerServiceServer).GetDocuments(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partner.mobile.PartnerService/GetDocuments",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PartnerServiceServer).GetDocuments(ctx, req.(*GetDocumentsReq))
	}
	return interceptor(ctx, in, info, handler)
}

// PartnerService_ServiceDesc is the grpc.ServiceDesc for PartnerService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PartnerService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "partner.mobile.PartnerService",
	HandlerType: (*PartnerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetDocuments",
			Handler:    _PartnerService_GetDocuments_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/partner/mobile/partner.proto",
}
