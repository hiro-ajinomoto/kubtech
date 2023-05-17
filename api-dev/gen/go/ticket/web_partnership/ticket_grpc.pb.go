// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: ticket/web_partnership/ticket.proto

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

// TicketServiceClient is the client API for TicketService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TicketServiceClient interface {
	PushNotificationUpdateInfo(ctx context.Context, in *PushNotificationUpdateInfoReq, opts ...grpc.CallOption) (*Empty, error)
	PushNotificationRemindUpdateUserInfo(ctx context.Context, in *PushNotificationRemindUpdateUserInfoReq, opts ...grpc.CallOption) (*Empty, error)
	PushNotificationRemindCheckinTimeHasCome(ctx context.Context, in *PushNotificationRemindCheckinTimeHasComeReq, opts ...grpc.CallOption) (*Empty, error)
	PushNotificationSupportOffline(ctx context.Context, in *PushNotificationSupportOfflineReq, opts ...grpc.CallOption) (*Empty, error)
	PushNotificationThank(ctx context.Context, in *PushNotificationThankReq, opts ...grpc.CallOption) (*Empty, error)
}

type ticketServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTicketServiceClient(cc grpc.ClientConnInterface) TicketServiceClient {
	return &ticketServiceClient{cc}
}

func (c *ticketServiceClient) PushNotificationUpdateInfo(ctx context.Context, in *PushNotificationUpdateInfoReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/ticket.web_partnership.TicketService/PushNotificationUpdateInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketServiceClient) PushNotificationRemindUpdateUserInfo(ctx context.Context, in *PushNotificationRemindUpdateUserInfoReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/ticket.web_partnership.TicketService/PushNotificationRemindUpdateUserInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketServiceClient) PushNotificationRemindCheckinTimeHasCome(ctx context.Context, in *PushNotificationRemindCheckinTimeHasComeReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/ticket.web_partnership.TicketService/PushNotificationRemindCheckinTimeHasCome", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketServiceClient) PushNotificationSupportOffline(ctx context.Context, in *PushNotificationSupportOfflineReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/ticket.web_partnership.TicketService/PushNotificationSupportOffline", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketServiceClient) PushNotificationThank(ctx context.Context, in *PushNotificationThankReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/ticket.web_partnership.TicketService/PushNotificationThank", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TicketServiceServer is the server API for TicketService service.
// All implementations must embed UnimplementedTicketServiceServer
// for forward compatibility
type TicketServiceServer interface {
	PushNotificationUpdateInfo(context.Context, *PushNotificationUpdateInfoReq) (*Empty, error)
	PushNotificationRemindUpdateUserInfo(context.Context, *PushNotificationRemindUpdateUserInfoReq) (*Empty, error)
	PushNotificationRemindCheckinTimeHasCome(context.Context, *PushNotificationRemindCheckinTimeHasComeReq) (*Empty, error)
	PushNotificationSupportOffline(context.Context, *PushNotificationSupportOfflineReq) (*Empty, error)
	PushNotificationThank(context.Context, *PushNotificationThankReq) (*Empty, error)
	mustEmbedUnimplementedTicketServiceServer()
}

// UnimplementedTicketServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTicketServiceServer struct {
}

func (UnimplementedTicketServiceServer) PushNotificationUpdateInfo(context.Context, *PushNotificationUpdateInfoReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushNotificationUpdateInfo not implemented")
}
func (UnimplementedTicketServiceServer) PushNotificationRemindUpdateUserInfo(context.Context, *PushNotificationRemindUpdateUserInfoReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushNotificationRemindUpdateUserInfo not implemented")
}
func (UnimplementedTicketServiceServer) PushNotificationRemindCheckinTimeHasCome(context.Context, *PushNotificationRemindCheckinTimeHasComeReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushNotificationRemindCheckinTimeHasCome not implemented")
}
func (UnimplementedTicketServiceServer) PushNotificationSupportOffline(context.Context, *PushNotificationSupportOfflineReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushNotificationSupportOffline not implemented")
}
func (UnimplementedTicketServiceServer) PushNotificationThank(context.Context, *PushNotificationThankReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushNotificationThank not implemented")
}
func (UnimplementedTicketServiceServer) mustEmbedUnimplementedTicketServiceServer() {}

// UnsafeTicketServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TicketServiceServer will
// result in compilation errors.
type UnsafeTicketServiceServer interface {
	mustEmbedUnimplementedTicketServiceServer()
}

func RegisterTicketServiceServer(s grpc.ServiceRegistrar, srv TicketServiceServer) {
	s.RegisterService(&TicketService_ServiceDesc, srv)
}

func _TicketService_PushNotificationUpdateInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushNotificationUpdateInfoReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketServiceServer).PushNotificationUpdateInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.web_partnership.TicketService/PushNotificationUpdateInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketServiceServer).PushNotificationUpdateInfo(ctx, req.(*PushNotificationUpdateInfoReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketService_PushNotificationRemindUpdateUserInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushNotificationRemindUpdateUserInfoReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketServiceServer).PushNotificationRemindUpdateUserInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.web_partnership.TicketService/PushNotificationRemindUpdateUserInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketServiceServer).PushNotificationRemindUpdateUserInfo(ctx, req.(*PushNotificationRemindUpdateUserInfoReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketService_PushNotificationRemindCheckinTimeHasCome_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushNotificationRemindCheckinTimeHasComeReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketServiceServer).PushNotificationRemindCheckinTimeHasCome(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.web_partnership.TicketService/PushNotificationRemindCheckinTimeHasCome",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketServiceServer).PushNotificationRemindCheckinTimeHasCome(ctx, req.(*PushNotificationRemindCheckinTimeHasComeReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketService_PushNotificationSupportOffline_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushNotificationSupportOfflineReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketServiceServer).PushNotificationSupportOffline(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.web_partnership.TicketService/PushNotificationSupportOffline",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketServiceServer).PushNotificationSupportOffline(ctx, req.(*PushNotificationSupportOfflineReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketService_PushNotificationThank_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushNotificationThankReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketServiceServer).PushNotificationThank(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.web_partnership.TicketService/PushNotificationThank",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketServiceServer).PushNotificationThank(ctx, req.(*PushNotificationThankReq))
	}
	return interceptor(ctx, in, info, handler)
}

// TicketService_ServiceDesc is the grpc.ServiceDesc for TicketService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TicketService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ticket.web_partnership.TicketService",
	HandlerType: (*TicketServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PushNotificationUpdateInfo",
			Handler:    _TicketService_PushNotificationUpdateInfo_Handler,
		},
		{
			MethodName: "PushNotificationRemindUpdateUserInfo",
			Handler:    _TicketService_PushNotificationRemindUpdateUserInfo_Handler,
		},
		{
			MethodName: "PushNotificationRemindCheckinTimeHasCome",
			Handler:    _TicketService_PushNotificationRemindCheckinTimeHasCome_Handler,
		},
		{
			MethodName: "PushNotificationSupportOffline",
			Handler:    _TicketService_PushNotificationSupportOffline_Handler,
		},
		{
			MethodName: "PushNotificationThank",
			Handler:    _TicketService_PushNotificationThank_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ticket/web_partnership/ticket.proto",
}
