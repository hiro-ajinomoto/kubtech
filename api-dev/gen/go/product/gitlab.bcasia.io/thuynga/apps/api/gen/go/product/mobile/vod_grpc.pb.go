// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/product/mobile/vod.proto

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

// VODServiceClient is the client API for VODService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type VODServiceClient interface {
	GetVODs(ctx context.Context, in *GetVODsReq, opts ...grpc.CallOption) (*GetVODsRes, error)
}

type vODServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewVODServiceClient(cc grpc.ClientConnInterface) VODServiceClient {
	return &vODServiceClient{cc}
}

func (c *vODServiceClient) GetVODs(ctx context.Context, in *GetVODsReq, opts ...grpc.CallOption) (*GetVODsRes, error) {
	out := new(GetVODsRes)
	err := c.cc.Invoke(ctx, "/product.mobile.VODService/GetVODs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// VODServiceServer is the server API for VODService service.
// All implementations must embed UnimplementedVODServiceServer
// for forward compatibility
type VODServiceServer interface {
	GetVODs(context.Context, *GetVODsReq) (*GetVODsRes, error)
	mustEmbedUnimplementedVODServiceServer()
}

// UnimplementedVODServiceServer must be embedded to have forward compatible implementations.
type UnimplementedVODServiceServer struct {
}

func (UnimplementedVODServiceServer) GetVODs(context.Context, *GetVODsReq) (*GetVODsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetVODs not implemented")
}
func (UnimplementedVODServiceServer) mustEmbedUnimplementedVODServiceServer() {}

// UnsafeVODServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to VODServiceServer will
// result in compilation errors.
type UnsafeVODServiceServer interface {
	mustEmbedUnimplementedVODServiceServer()
}

func RegisterVODServiceServer(s grpc.ServiceRegistrar, srv VODServiceServer) {
	s.RegisterService(&VODService_ServiceDesc, srv)
}

func _VODService_GetVODs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetVODsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VODServiceServer).GetVODs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.mobile.VODService/GetVODs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VODServiceServer).GetVODs(ctx, req.(*GetVODsReq))
	}
	return interceptor(ctx, in, info, handler)
}

// VODService_ServiceDesc is the grpc.ServiceDesc for VODService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var VODService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "product.mobile.VODService",
	HandlerType: (*VODServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetVODs",
			Handler:    _VODService_GetVODs_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/product/mobile/vod.proto",
}
