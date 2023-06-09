// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/partnership/voucher.proto

package partnership

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

// VoucherServiceClient is the client API for VoucherService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type VoucherServiceClient interface {
	CreateVoucher(ctx context.Context, in *CreateVoucherReq, opts ...grpc.CallOption) (*CreateVoucherRes, error)
	UpdateVoucher(ctx context.Context, in *UpdateVoucherReq, opts ...grpc.CallOption) (*Empty, error)
	DeleteVoucher(ctx context.Context, in *DeleteVoucherReq, opts ...grpc.CallOption) (*Empty, error)
	RetrieveVoucher(ctx context.Context, in *RetrieveVoucherReq, opts ...grpc.CallOption) (*RetrieveVoucherRes, error)
	ListVoucher(ctx context.Context, in *ListVoucherReq, opts ...grpc.CallOption) (*ListVoucherRes, error)
	InternalListVoucherByIds(ctx context.Context, in *InternalListVoucherByIdsReq, opts ...grpc.CallOption) (*InternalListVoucherByIdsRes, error)
}

type voucherServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewVoucherServiceClient(cc grpc.ClientConnInterface) VoucherServiceClient {
	return &voucherServiceClient{cc}
}

func (c *voucherServiceClient) CreateVoucher(ctx context.Context, in *CreateVoucherReq, opts ...grpc.CallOption) (*CreateVoucherRes, error) {
	out := new(CreateVoucherRes)
	err := c.cc.Invoke(ctx, "/partnership.VoucherService/CreateVoucher", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *voucherServiceClient) UpdateVoucher(ctx context.Context, in *UpdateVoucherReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/partnership.VoucherService/UpdateVoucher", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *voucherServiceClient) DeleteVoucher(ctx context.Context, in *DeleteVoucherReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/partnership.VoucherService/DeleteVoucher", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *voucherServiceClient) RetrieveVoucher(ctx context.Context, in *RetrieveVoucherReq, opts ...grpc.CallOption) (*RetrieveVoucherRes, error) {
	out := new(RetrieveVoucherRes)
	err := c.cc.Invoke(ctx, "/partnership.VoucherService/RetrieveVoucher", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *voucherServiceClient) ListVoucher(ctx context.Context, in *ListVoucherReq, opts ...grpc.CallOption) (*ListVoucherRes, error) {
	out := new(ListVoucherRes)
	err := c.cc.Invoke(ctx, "/partnership.VoucherService/ListVoucher", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *voucherServiceClient) InternalListVoucherByIds(ctx context.Context, in *InternalListVoucherByIdsReq, opts ...grpc.CallOption) (*InternalListVoucherByIdsRes, error) {
	out := new(InternalListVoucherByIdsRes)
	err := c.cc.Invoke(ctx, "/partnership.VoucherService/InternalListVoucherByIds", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// VoucherServiceServer is the server API for VoucherService service.
// All implementations must embed UnimplementedVoucherServiceServer
// for forward compatibility
type VoucherServiceServer interface {
	CreateVoucher(context.Context, *CreateVoucherReq) (*CreateVoucherRes, error)
	UpdateVoucher(context.Context, *UpdateVoucherReq) (*Empty, error)
	DeleteVoucher(context.Context, *DeleteVoucherReq) (*Empty, error)
	RetrieveVoucher(context.Context, *RetrieveVoucherReq) (*RetrieveVoucherRes, error)
	ListVoucher(context.Context, *ListVoucherReq) (*ListVoucherRes, error)
	InternalListVoucherByIds(context.Context, *InternalListVoucherByIdsReq) (*InternalListVoucherByIdsRes, error)
	mustEmbedUnimplementedVoucherServiceServer()
}

// UnimplementedVoucherServiceServer must be embedded to have forward compatible implementations.
type UnimplementedVoucherServiceServer struct {
}

func (UnimplementedVoucherServiceServer) CreateVoucher(context.Context, *CreateVoucherReq) (*CreateVoucherRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateVoucher not implemented")
}
func (UnimplementedVoucherServiceServer) UpdateVoucher(context.Context, *UpdateVoucherReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateVoucher not implemented")
}
func (UnimplementedVoucherServiceServer) DeleteVoucher(context.Context, *DeleteVoucherReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteVoucher not implemented")
}
func (UnimplementedVoucherServiceServer) RetrieveVoucher(context.Context, *RetrieveVoucherReq) (*RetrieveVoucherRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RetrieveVoucher not implemented")
}
func (UnimplementedVoucherServiceServer) ListVoucher(context.Context, *ListVoucherReq) (*ListVoucherRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListVoucher not implemented")
}
func (UnimplementedVoucherServiceServer) InternalListVoucherByIds(context.Context, *InternalListVoucherByIdsReq) (*InternalListVoucherByIdsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InternalListVoucherByIds not implemented")
}
func (UnimplementedVoucherServiceServer) mustEmbedUnimplementedVoucherServiceServer() {}

// UnsafeVoucherServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to VoucherServiceServer will
// result in compilation errors.
type UnsafeVoucherServiceServer interface {
	mustEmbedUnimplementedVoucherServiceServer()
}

func RegisterVoucherServiceServer(s grpc.ServiceRegistrar, srv VoucherServiceServer) {
	s.RegisterService(&VoucherService_ServiceDesc, srv)
}

func _VoucherService_CreateVoucher_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateVoucherReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VoucherServiceServer).CreateVoucher(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.VoucherService/CreateVoucher",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VoucherServiceServer).CreateVoucher(ctx, req.(*CreateVoucherReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _VoucherService_UpdateVoucher_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateVoucherReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VoucherServiceServer).UpdateVoucher(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.VoucherService/UpdateVoucher",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VoucherServiceServer).UpdateVoucher(ctx, req.(*UpdateVoucherReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _VoucherService_DeleteVoucher_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteVoucherReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VoucherServiceServer).DeleteVoucher(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.VoucherService/DeleteVoucher",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VoucherServiceServer).DeleteVoucher(ctx, req.(*DeleteVoucherReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _VoucherService_RetrieveVoucher_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RetrieveVoucherReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VoucherServiceServer).RetrieveVoucher(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.VoucherService/RetrieveVoucher",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VoucherServiceServer).RetrieveVoucher(ctx, req.(*RetrieveVoucherReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _VoucherService_ListVoucher_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListVoucherReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VoucherServiceServer).ListVoucher(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.VoucherService/ListVoucher",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VoucherServiceServer).ListVoucher(ctx, req.(*ListVoucherReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _VoucherService_InternalListVoucherByIds_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InternalListVoucherByIdsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VoucherServiceServer).InternalListVoucherByIds(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.VoucherService/InternalListVoucherByIds",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VoucherServiceServer).InternalListVoucherByIds(ctx, req.(*InternalListVoucherByIdsReq))
	}
	return interceptor(ctx, in, info, handler)
}

// VoucherService_ServiceDesc is the grpc.ServiceDesc for VoucherService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var VoucherService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "partnership.VoucherService",
	HandlerType: (*VoucherServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateVoucher",
			Handler:    _VoucherService_CreateVoucher_Handler,
		},
		{
			MethodName: "UpdateVoucher",
			Handler:    _VoucherService_UpdateVoucher_Handler,
		},
		{
			MethodName: "DeleteVoucher",
			Handler:    _VoucherService_DeleteVoucher_Handler,
		},
		{
			MethodName: "RetrieveVoucher",
			Handler:    _VoucherService_RetrieveVoucher_Handler,
		},
		{
			MethodName: "ListVoucher",
			Handler:    _VoucherService_ListVoucher_Handler,
		},
		{
			MethodName: "InternalListVoucherByIds",
			Handler:    _VoucherService_InternalListVoucherByIds_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/partnership/voucher.proto",
}
