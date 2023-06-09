// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: ticket/mobile/safety_form.proto

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

// SafetyFormServiceClient is the client API for SafetyFormService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SafetyFormServiceClient interface {
	DeclareSafetyForm(ctx context.Context, in *DeclareSafetyFormReq, opts ...grpc.CallOption) (*Empty, error)
	GetSafetyFormDetail(ctx context.Context, in *GetSafetyFormDetailReq, opts ...grpc.CallOption) (*GetSafetyFormDetailRes, error)
}

type safetyFormServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSafetyFormServiceClient(cc grpc.ClientConnInterface) SafetyFormServiceClient {
	return &safetyFormServiceClient{cc}
}

func (c *safetyFormServiceClient) DeclareSafetyForm(ctx context.Context, in *DeclareSafetyFormReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/ticket.mobile.SafetyFormService/DeclareSafetyForm", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *safetyFormServiceClient) GetSafetyFormDetail(ctx context.Context, in *GetSafetyFormDetailReq, opts ...grpc.CallOption) (*GetSafetyFormDetailRes, error) {
	out := new(GetSafetyFormDetailRes)
	err := c.cc.Invoke(ctx, "/ticket.mobile.SafetyFormService/GetSafetyFormDetail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SafetyFormServiceServer is the server API for SafetyFormService service.
// All implementations must embed UnimplementedSafetyFormServiceServer
// for forward compatibility
type SafetyFormServiceServer interface {
	DeclareSafetyForm(context.Context, *DeclareSafetyFormReq) (*Empty, error)
	GetSafetyFormDetail(context.Context, *GetSafetyFormDetailReq) (*GetSafetyFormDetailRes, error)
	mustEmbedUnimplementedSafetyFormServiceServer()
}

// UnimplementedSafetyFormServiceServer must be embedded to have forward compatible implementations.
type UnimplementedSafetyFormServiceServer struct {
}

func (UnimplementedSafetyFormServiceServer) DeclareSafetyForm(context.Context, *DeclareSafetyFormReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeclareSafetyForm not implemented")
}
func (UnimplementedSafetyFormServiceServer) GetSafetyFormDetail(context.Context, *GetSafetyFormDetailReq) (*GetSafetyFormDetailRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSafetyFormDetail not implemented")
}
func (UnimplementedSafetyFormServiceServer) mustEmbedUnimplementedSafetyFormServiceServer() {}

// UnsafeSafetyFormServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SafetyFormServiceServer will
// result in compilation errors.
type UnsafeSafetyFormServiceServer interface {
	mustEmbedUnimplementedSafetyFormServiceServer()
}

func RegisterSafetyFormServiceServer(s grpc.ServiceRegistrar, srv SafetyFormServiceServer) {
	s.RegisterService(&SafetyFormService_ServiceDesc, srv)
}

func _SafetyFormService_DeclareSafetyForm_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeclareSafetyFormReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SafetyFormServiceServer).DeclareSafetyForm(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.mobile.SafetyFormService/DeclareSafetyForm",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SafetyFormServiceServer).DeclareSafetyForm(ctx, req.(*DeclareSafetyFormReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _SafetyFormService_GetSafetyFormDetail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSafetyFormDetailReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SafetyFormServiceServer).GetSafetyFormDetail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.mobile.SafetyFormService/GetSafetyFormDetail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SafetyFormServiceServer).GetSafetyFormDetail(ctx, req.(*GetSafetyFormDetailReq))
	}
	return interceptor(ctx, in, info, handler)
}

// SafetyFormService_ServiceDesc is the grpc.ServiceDesc for SafetyFormService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SafetyFormService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ticket.mobile.SafetyFormService",
	HandlerType: (*SafetyFormServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DeclareSafetyForm",
			Handler:    _SafetyFormService_DeclareSafetyForm_Handler,
		},
		{
			MethodName: "GetSafetyFormDetail",
			Handler:    _SafetyFormService_GetSafetyFormDetail_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ticket/mobile/safety_form.proto",
}
