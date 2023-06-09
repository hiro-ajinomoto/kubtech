// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/notification/mobile/email.proto

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

// EmailSvcClient is the client API for EmailSvc service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EmailSvcClient interface {
	AddEmailTemplate(ctx context.Context, in *AddEmailTemplateReq, opts ...grpc.CallOption) (*Empty, error)
	UpdateEmailTemplate(ctx context.Context, in *UpdateEmailTemplateReq, opts ...grpc.CallOption) (*Empty, error)
}

type emailSvcClient struct {
	cc grpc.ClientConnInterface
}

func NewEmailSvcClient(cc grpc.ClientConnInterface) EmailSvcClient {
	return &emailSvcClient{cc}
}

func (c *emailSvcClient) AddEmailTemplate(ctx context.Context, in *AddEmailTemplateReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/notification.mobile.EmailSvc/AddEmailTemplate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *emailSvcClient) UpdateEmailTemplate(ctx context.Context, in *UpdateEmailTemplateReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/notification.mobile.EmailSvc/UpdateEmailTemplate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EmailSvcServer is the server API for EmailSvc service.
// All implementations must embed UnimplementedEmailSvcServer
// for forward compatibility
type EmailSvcServer interface {
	AddEmailTemplate(context.Context, *AddEmailTemplateReq) (*Empty, error)
	UpdateEmailTemplate(context.Context, *UpdateEmailTemplateReq) (*Empty, error)
	mustEmbedUnimplementedEmailSvcServer()
}

// UnimplementedEmailSvcServer must be embedded to have forward compatible implementations.
type UnimplementedEmailSvcServer struct {
}

func (UnimplementedEmailSvcServer) AddEmailTemplate(context.Context, *AddEmailTemplateReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddEmailTemplate not implemented")
}
func (UnimplementedEmailSvcServer) UpdateEmailTemplate(context.Context, *UpdateEmailTemplateReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateEmailTemplate not implemented")
}
func (UnimplementedEmailSvcServer) mustEmbedUnimplementedEmailSvcServer() {}

// UnsafeEmailSvcServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EmailSvcServer will
// result in compilation errors.
type UnsafeEmailSvcServer interface {
	mustEmbedUnimplementedEmailSvcServer()
}

func RegisterEmailSvcServer(s grpc.ServiceRegistrar, srv EmailSvcServer) {
	s.RegisterService(&EmailSvc_ServiceDesc, srv)
}

func _EmailSvc_AddEmailTemplate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddEmailTemplateReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmailSvcServer).AddEmailTemplate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification.mobile.EmailSvc/AddEmailTemplate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmailSvcServer).AddEmailTemplate(ctx, req.(*AddEmailTemplateReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _EmailSvc_UpdateEmailTemplate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateEmailTemplateReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EmailSvcServer).UpdateEmailTemplate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/notification.mobile.EmailSvc/UpdateEmailTemplate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EmailSvcServer).UpdateEmailTemplate(ctx, req.(*UpdateEmailTemplateReq))
	}
	return interceptor(ctx, in, info, handler)
}

// EmailSvc_ServiceDesc is the grpc.ServiceDesc for EmailSvc service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EmailSvc_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "notification.mobile.EmailSvc",
	HandlerType: (*EmailSvcServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AddEmailTemplate",
			Handler:    _EmailSvc_AddEmailTemplate_Handler,
		},
		{
			MethodName: "UpdateEmailTemplate",
			Handler:    _EmailSvc_UpdateEmailTemplate_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/notification/mobile/email.proto",
}
