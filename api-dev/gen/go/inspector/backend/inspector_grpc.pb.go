// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/inspector/backend/inspector.proto

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

// InspectorServiceClient is the client API for InspectorService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InspectorServiceClient interface {
	GetInspectorById(ctx context.Context, in *GetInspectorByIdReq, opts ...grpc.CallOption) (*GetInspectorByIdRes, error)
}

type inspectorServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewInspectorServiceClient(cc grpc.ClientConnInterface) InspectorServiceClient {
	return &inspectorServiceClient{cc}
}

func (c *inspectorServiceClient) GetInspectorById(ctx context.Context, in *GetInspectorByIdReq, opts ...grpc.CallOption) (*GetInspectorByIdRes, error) {
	out := new(GetInspectorByIdRes)
	err := c.cc.Invoke(ctx, "/inspector.backend.InspectorService/GetInspectorById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InspectorServiceServer is the server API for InspectorService service.
// All implementations must embed UnimplementedInspectorServiceServer
// for forward compatibility
type InspectorServiceServer interface {
	GetInspectorById(context.Context, *GetInspectorByIdReq) (*GetInspectorByIdRes, error)
	mustEmbedUnimplementedInspectorServiceServer()
}

// UnimplementedInspectorServiceServer must be embedded to have forward compatible implementations.
type UnimplementedInspectorServiceServer struct {
}

func (UnimplementedInspectorServiceServer) GetInspectorById(context.Context, *GetInspectorByIdReq) (*GetInspectorByIdRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetInspectorById not implemented")
}
func (UnimplementedInspectorServiceServer) mustEmbedUnimplementedInspectorServiceServer() {}

// UnsafeInspectorServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to InspectorServiceServer will
// result in compilation errors.
type UnsafeInspectorServiceServer interface {
	mustEmbedUnimplementedInspectorServiceServer()
}

func RegisterInspectorServiceServer(s grpc.ServiceRegistrar, srv InspectorServiceServer) {
	s.RegisterService(&InspectorService_ServiceDesc, srv)
}

func _InspectorService_GetInspectorById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInspectorByIdReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InspectorServiceServer).GetInspectorById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/inspector.backend.InspectorService/GetInspectorById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InspectorServiceServer).GetInspectorById(ctx, req.(*GetInspectorByIdReq))
	}
	return interceptor(ctx, in, info, handler)
}

// InspectorService_ServiceDesc is the grpc.ServiceDesc for InspectorService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InspectorService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "inspector.backend.InspectorService",
	HandlerType: (*InspectorServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetInspectorById",
			Handler:    _InspectorService_GetInspectorById_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/inspector/backend/inspector.proto",
}
