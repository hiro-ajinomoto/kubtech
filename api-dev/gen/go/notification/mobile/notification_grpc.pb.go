// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/notification/mobile/notification.proto

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

// NotificationSvcClient is the client API for NotificationSvc service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NotificationSvcClient interface {
	PushNotification(ctx context.Context, in *PushNotificationReq, opts ...grpc.CallOption) (*Empty, error)
	SubscribeTopic(ctx context.Context, in *SubscribeTopicReq, opts ...grpc.CallOption) (*Empty, error)
	UnsubscribeTopic(ctx context.Context, in *UnsubscribeTopicReq, opts ...grpc.CallOption) (*Empty, error)
}

type notificationSvcClient struct {
	cc grpc.ClientConnInterface
}

func NewNotificationSvcClient(cc grpc.ClientConnInterface) NotificationSvcClient {
	return &notificationSvcClient{cc}
}

func (c *notificationSvcClient) PushNotification(ctx context.Context, in *PushNotificationReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/notification.mobile.NotificationSvc/PushNotification", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSvcClient) SubscribeTopic(ctx context.Context, in *SubscribeTopicReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/notification.mobile.NotificationSvc/SubscribeTopic", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notificationSvcClient) UnsubscribeTopic(ctx context.Context, in *UnsubscribeTopicReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/notification.mobile.NotificationSvc/UnsubscribeTopic", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NotificationSvcServer is the server API for NotificationSvc service.
// All implementations must embed UnimplementedNotificationSvcServer
// for forward compatibility
type NotificationSvcServer interface {
	PushNotification(context.Context, *PushNotificationReq) (*Empty, error)
	SubscribeTopic(context.Context, *SubscribeTopicReq) (*Empty, error)
	UnsubscribeTopic(context.Context, *UnsubscribeTopicReq) (*Empty, error)
	mustEmbedUnimplementedNotificationSvcServer()
}

// UnimplementedNotificationSvcServer must be embedded to have forward compatible implementations.
type UnimplementedNotificationSvcServer struct {
}

func (UnimplementedNotificationSvcServer) PushNotification(context.Context, *PushNotificationReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushNotification not implemented")
}
func (UnimplementedNotificationSvcServer) SubscribeTopic(context.Context, *SubscribeTopicReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SubscribeTopic not implemented")
}
func (UnimplementedNotificationSvcServer) UnsubscribeTopic(context.Context, *UnsubscribeTopicReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UnsubscribeTopic not implemented")
}
func (UnimplementedNotificationSvcServer) mustEmbedUnimplementedNotificationSvcServer() {}

// UnsafeNotificationSvcServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NotificationSvcServer will
// result in compilation errors.
type UnsafeNotificationSvcServer interface {
	mustEmbedUnimplementedNotificationSvcServer()
}

func RegisterNotificationSvcServer(s grpc.ServiceRegistrar, srv NotificationSvcServer) {
	s.RegisterService(&NotificationSvc_ServiceDesc, srv)
}

func _NotificationSvc_PushNotification_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushNotificationReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSvcServer).PushNotification(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification.mobile.NotificationSvc/PushNotification",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSvcServer).PushNotification(ctx, req.(*PushNotificationReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSvc_SubscribeTopic_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SubscribeTopicReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSvcServer).SubscribeTopic(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification.mobile.NotificationSvc/SubscribeTopic",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSvcServer).SubscribeTopic(ctx, req.(*SubscribeTopicReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotificationSvc_UnsubscribeTopic_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UnsubscribeTopicReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotificationSvcServer).UnsubscribeTopic(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification.mobile.NotificationSvc/UnsubscribeTopic",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotificationSvcServer).UnsubscribeTopic(ctx, req.(*UnsubscribeTopicReq))
	}
	return interceptor(ctx, in, info, handler)
}

// NotificationSvc_ServiceDesc is the grpc.ServiceDesc for NotificationSvc service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NotificationSvc_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "notification.mobile.NotificationSvc",
	HandlerType: (*NotificationSvcServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PushNotification",
			Handler:    _NotificationSvc_PushNotification_Handler,
		},
		{
			MethodName: "SubscribeTopic",
			Handler:    _NotificationSvc_SubscribeTopic_Handler,
		},
		{
			MethodName: "UnsubscribeTopic",
			Handler:    _NotificationSvc_UnsubscribeTopic_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/notification/mobile/notification.proto",
}
