// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/partnership/seat_accessory.proto

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

// SeatAccessoryServiceClient is the client API for SeatAccessoryService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SeatAccessoryServiceClient interface {
	CreateSeatAccessory(ctx context.Context, in *CreateSeatAccessoryReq, opts ...grpc.CallOption) (*CreateSeatAccessoryRes, error)
	UpdateSeatAccessory(ctx context.Context, in *UpdateSeatAccessoryReq, opts ...grpc.CallOption) (*Empty, error)
	DeleteSeatAccessory(ctx context.Context, in *DeleteSeatAccessoryReq, opts ...grpc.CallOption) (*Empty, error)
	RetrieveSeatAccessory(ctx context.Context, in *RetrieveSeatAccessoryReq, opts ...grpc.CallOption) (*RetrieveSeatAccessoryRes, error)
	ListSeatAccessory(ctx context.Context, in *ListSeatAccessoryReq, opts ...grpc.CallOption) (*ListSeatAccessoryRes, error)
}

type seatAccessoryServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSeatAccessoryServiceClient(cc grpc.ClientConnInterface) SeatAccessoryServiceClient {
	return &seatAccessoryServiceClient{cc}
}

func (c *seatAccessoryServiceClient) CreateSeatAccessory(ctx context.Context, in *CreateSeatAccessoryReq, opts ...grpc.CallOption) (*CreateSeatAccessoryRes, error) {
	out := new(CreateSeatAccessoryRes)
	err := c.cc.Invoke(ctx, "/partnership.SeatAccessoryService/CreateSeatAccessory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *seatAccessoryServiceClient) UpdateSeatAccessory(ctx context.Context, in *UpdateSeatAccessoryReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/partnership.SeatAccessoryService/UpdateSeatAccessory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *seatAccessoryServiceClient) DeleteSeatAccessory(ctx context.Context, in *DeleteSeatAccessoryReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/partnership.SeatAccessoryService/DeleteSeatAccessory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *seatAccessoryServiceClient) RetrieveSeatAccessory(ctx context.Context, in *RetrieveSeatAccessoryReq, opts ...grpc.CallOption) (*RetrieveSeatAccessoryRes, error) {
	out := new(RetrieveSeatAccessoryRes)
	err := c.cc.Invoke(ctx, "/partnership.SeatAccessoryService/RetrieveSeatAccessory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *seatAccessoryServiceClient) ListSeatAccessory(ctx context.Context, in *ListSeatAccessoryReq, opts ...grpc.CallOption) (*ListSeatAccessoryRes, error) {
	out := new(ListSeatAccessoryRes)
	err := c.cc.Invoke(ctx, "/partnership.SeatAccessoryService/ListSeatAccessory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SeatAccessoryServiceServer is the server API for SeatAccessoryService service.
// All implementations must embed UnimplementedSeatAccessoryServiceServer
// for forward compatibility
type SeatAccessoryServiceServer interface {
	CreateSeatAccessory(context.Context, *CreateSeatAccessoryReq) (*CreateSeatAccessoryRes, error)
	UpdateSeatAccessory(context.Context, *UpdateSeatAccessoryReq) (*Empty, error)
	DeleteSeatAccessory(context.Context, *DeleteSeatAccessoryReq) (*Empty, error)
	RetrieveSeatAccessory(context.Context, *RetrieveSeatAccessoryReq) (*RetrieveSeatAccessoryRes, error)
	ListSeatAccessory(context.Context, *ListSeatAccessoryReq) (*ListSeatAccessoryRes, error)
	mustEmbedUnimplementedSeatAccessoryServiceServer()
}

// UnimplementedSeatAccessoryServiceServer must be embedded to have forward compatible implementations.
type UnimplementedSeatAccessoryServiceServer struct {
}

func (UnimplementedSeatAccessoryServiceServer) CreateSeatAccessory(context.Context, *CreateSeatAccessoryReq) (*CreateSeatAccessoryRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSeatAccessory not implemented")
}
func (UnimplementedSeatAccessoryServiceServer) UpdateSeatAccessory(context.Context, *UpdateSeatAccessoryReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateSeatAccessory not implemented")
}
func (UnimplementedSeatAccessoryServiceServer) DeleteSeatAccessory(context.Context, *DeleteSeatAccessoryReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteSeatAccessory not implemented")
}
func (UnimplementedSeatAccessoryServiceServer) RetrieveSeatAccessory(context.Context, *RetrieveSeatAccessoryReq) (*RetrieveSeatAccessoryRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RetrieveSeatAccessory not implemented")
}
func (UnimplementedSeatAccessoryServiceServer) ListSeatAccessory(context.Context, *ListSeatAccessoryReq) (*ListSeatAccessoryRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSeatAccessory not implemented")
}
func (UnimplementedSeatAccessoryServiceServer) mustEmbedUnimplementedSeatAccessoryServiceServer() {}

// UnsafeSeatAccessoryServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SeatAccessoryServiceServer will
// result in compilation errors.
type UnsafeSeatAccessoryServiceServer interface {
	mustEmbedUnimplementedSeatAccessoryServiceServer()
}

func RegisterSeatAccessoryServiceServer(s grpc.ServiceRegistrar, srv SeatAccessoryServiceServer) {
	s.RegisterService(&SeatAccessoryService_ServiceDesc, srv)
}

func _SeatAccessoryService_CreateSeatAccessory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateSeatAccessoryReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SeatAccessoryServiceServer).CreateSeatAccessory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.SeatAccessoryService/CreateSeatAccessory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SeatAccessoryServiceServer).CreateSeatAccessory(ctx, req.(*CreateSeatAccessoryReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _SeatAccessoryService_UpdateSeatAccessory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateSeatAccessoryReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SeatAccessoryServiceServer).UpdateSeatAccessory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.SeatAccessoryService/UpdateSeatAccessory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SeatAccessoryServiceServer).UpdateSeatAccessory(ctx, req.(*UpdateSeatAccessoryReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _SeatAccessoryService_DeleteSeatAccessory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteSeatAccessoryReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SeatAccessoryServiceServer).DeleteSeatAccessory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.SeatAccessoryService/DeleteSeatAccessory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SeatAccessoryServiceServer).DeleteSeatAccessory(ctx, req.(*DeleteSeatAccessoryReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _SeatAccessoryService_RetrieveSeatAccessory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RetrieveSeatAccessoryReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SeatAccessoryServiceServer).RetrieveSeatAccessory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.SeatAccessoryService/RetrieveSeatAccessory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SeatAccessoryServiceServer).RetrieveSeatAccessory(ctx, req.(*RetrieveSeatAccessoryReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _SeatAccessoryService_ListSeatAccessory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSeatAccessoryReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SeatAccessoryServiceServer).ListSeatAccessory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.SeatAccessoryService/ListSeatAccessory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SeatAccessoryServiceServer).ListSeatAccessory(ctx, req.(*ListSeatAccessoryReq))
	}
	return interceptor(ctx, in, info, handler)
}

// SeatAccessoryService_ServiceDesc is the grpc.ServiceDesc for SeatAccessoryService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SeatAccessoryService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "partnership.SeatAccessoryService",
	HandlerType: (*SeatAccessoryServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateSeatAccessory",
			Handler:    _SeatAccessoryService_CreateSeatAccessory_Handler,
		},
		{
			MethodName: "UpdateSeatAccessory",
			Handler:    _SeatAccessoryService_UpdateSeatAccessory_Handler,
		},
		{
			MethodName: "DeleteSeatAccessory",
			Handler:    _SeatAccessoryService_DeleteSeatAccessory_Handler,
		},
		{
			MethodName: "RetrieveSeatAccessory",
			Handler:    _SeatAccessoryService_RetrieveSeatAccessory_Handler,
		},
		{
			MethodName: "ListSeatAccessory",
			Handler:    _SeatAccessoryService_ListSeatAccessory_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/partnership/seat_accessory.proto",
}