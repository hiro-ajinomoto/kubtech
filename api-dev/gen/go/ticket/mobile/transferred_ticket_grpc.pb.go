// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: ticket/mobile/transferred_ticket.proto

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

// TransferredTicketServiceClient is the client API for TransferredTicketService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TransferredTicketServiceClient interface {
	GetMyTransferredTicketByOrderId(ctx context.Context, in *GetMyTransferredTicketByOrderIdReq, opts ...grpc.CallOption) (*GetMyTransferredTicketByOrderIdRes, error)
}

type transferredTicketServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTransferredTicketServiceClient(cc grpc.ClientConnInterface) TransferredTicketServiceClient {
	return &transferredTicketServiceClient{cc}
}

func (c *transferredTicketServiceClient) GetMyTransferredTicketByOrderId(ctx context.Context, in *GetMyTransferredTicketByOrderIdReq, opts ...grpc.CallOption) (*GetMyTransferredTicketByOrderIdRes, error) {
	out := new(GetMyTransferredTicketByOrderIdRes)
	err := c.cc.Invoke(ctx, "/ticket.mobile.TransferredTicketService/GetMyTransferredTicketByOrderId", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TransferredTicketServiceServer is the server API for TransferredTicketService service.
// All implementations must embed UnimplementedTransferredTicketServiceServer
// for forward compatibility
type TransferredTicketServiceServer interface {
	GetMyTransferredTicketByOrderId(context.Context, *GetMyTransferredTicketByOrderIdReq) (*GetMyTransferredTicketByOrderIdRes, error)
	mustEmbedUnimplementedTransferredTicketServiceServer()
}

// UnimplementedTransferredTicketServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTransferredTicketServiceServer struct {
}

func (UnimplementedTransferredTicketServiceServer) GetMyTransferredTicketByOrderId(context.Context, *GetMyTransferredTicketByOrderIdReq) (*GetMyTransferredTicketByOrderIdRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMyTransferredTicketByOrderId not implemented")
}
func (UnimplementedTransferredTicketServiceServer) mustEmbedUnimplementedTransferredTicketServiceServer() {
}

// UnsafeTransferredTicketServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TransferredTicketServiceServer will
// result in compilation errors.
type UnsafeTransferredTicketServiceServer interface {
	mustEmbedUnimplementedTransferredTicketServiceServer()
}

func RegisterTransferredTicketServiceServer(s grpc.ServiceRegistrar, srv TransferredTicketServiceServer) {
	s.RegisterService(&TransferredTicketService_ServiceDesc, srv)
}

func _TransferredTicketService_GetMyTransferredTicketByOrderId_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMyTransferredTicketByOrderIdReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransferredTicketServiceServer).GetMyTransferredTicketByOrderId(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.mobile.TransferredTicketService/GetMyTransferredTicketByOrderId",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransferredTicketServiceServer).GetMyTransferredTicketByOrderId(ctx, req.(*GetMyTransferredTicketByOrderIdReq))
	}
	return interceptor(ctx, in, info, handler)
}

// TransferredTicketService_ServiceDesc is the grpc.ServiceDesc for TransferredTicketService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TransferredTicketService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ticket.mobile.TransferredTicketService",
	HandlerType: (*TransferredTicketServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMyTransferredTicketByOrderId",
			Handler:    _TransferredTicketService_GetMyTransferredTicketByOrderId_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ticket/mobile/transferred_ticket.proto",
}
