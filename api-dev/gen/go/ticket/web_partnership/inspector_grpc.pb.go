// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: ticket/web_partnership/inspector.proto

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

// InspectorServiceClient is the client API for InspectorService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type InspectorServiceClient interface {
	AssignCheckinEvent(ctx context.Context, in *AssignCheckinEventReq, opts ...grpc.CallOption) (*Empty, error)
}

type inspectorServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewInspectorServiceClient(cc grpc.ClientConnInterface) InspectorServiceClient {
	return &inspectorServiceClient{cc}
}

func (c *inspectorServiceClient) AssignCheckinEvent(ctx context.Context, in *AssignCheckinEventReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/ticket.web_partnership.InspectorService/AssignCheckinEvent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// InspectorServiceServer is the server API for InspectorService service.
// All implementations must embed UnimplementedInspectorServiceServer
// for forward compatibility
type InspectorServiceServer interface {
	AssignCheckinEvent(context.Context, *AssignCheckinEventReq) (*Empty, error)
	mustEmbedUnimplementedInspectorServiceServer()
}

// UnimplementedInspectorServiceServer must be embedded to have forward compatible implementations.
type UnimplementedInspectorServiceServer struct {
}

func (UnimplementedInspectorServiceServer) AssignCheckinEvent(context.Context, *AssignCheckinEventReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AssignCheckinEvent not implemented")
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

func _InspectorService_AssignCheckinEvent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AssignCheckinEventReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InspectorServiceServer).AssignCheckinEvent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.web_partnership.InspectorService/AssignCheckinEvent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InspectorServiceServer).AssignCheckinEvent(ctx, req.(*AssignCheckinEventReq))
	}
	return interceptor(ctx, in, info, handler)
}

// InspectorService_ServiceDesc is the grpc.ServiceDesc for InspectorService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var InspectorService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ticket.web_partnership.InspectorService",
	HandlerType: (*InspectorServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AssignCheckinEvent",
			Handler:    _InspectorService_AssignCheckinEvent_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ticket/web_partnership/inspector.proto",
}
