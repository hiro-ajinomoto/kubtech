// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: product/web_admin/seat.proto

package web_admin

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

// SeatServiceClient is the client API for SeatService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SeatServiceClient interface {
	MigrationSeat(ctx context.Context, in *MigrationSeatReq, opts ...grpc.CallOption) (*Empty, error)
	StreamSeats(ctx context.Context, in *StreamSeatsReq, opts ...grpc.CallOption) (*Empty, error)
}

type seatServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSeatServiceClient(cc grpc.ClientConnInterface) SeatServiceClient {
	return &seatServiceClient{cc}
}

func (c *seatServiceClient) MigrationSeat(ctx context.Context, in *MigrationSeatReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/product.web_admin.SeatService/MigrationSeat", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *seatServiceClient) StreamSeats(ctx context.Context, in *StreamSeatsReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/product.web_admin.SeatService/StreamSeats", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SeatServiceServer is the server API for SeatService service.
// All implementations must embed UnimplementedSeatServiceServer
// for forward compatibility
type SeatServiceServer interface {
	MigrationSeat(context.Context, *MigrationSeatReq) (*Empty, error)
	StreamSeats(context.Context, *StreamSeatsReq) (*Empty, error)
	mustEmbedUnimplementedSeatServiceServer()
}

// UnimplementedSeatServiceServer must be embedded to have forward compatible implementations.
type UnimplementedSeatServiceServer struct {
}

func (UnimplementedSeatServiceServer) MigrationSeat(context.Context, *MigrationSeatReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MigrationSeat not implemented")
}
func (UnimplementedSeatServiceServer) StreamSeats(context.Context, *StreamSeatsReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method StreamSeats not implemented")
}
func (UnimplementedSeatServiceServer) mustEmbedUnimplementedSeatServiceServer() {}

// UnsafeSeatServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SeatServiceServer will
// result in compilation errors.
type UnsafeSeatServiceServer interface {
	mustEmbedUnimplementedSeatServiceServer()
}

func RegisterSeatServiceServer(s grpc.ServiceRegistrar, srv SeatServiceServer) {
	s.RegisterService(&SeatService_ServiceDesc, srv)
}

func _SeatService_MigrationSeat_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MigrationSeatReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SeatServiceServer).MigrationSeat(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_admin.SeatService/MigrationSeat",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SeatServiceServer).MigrationSeat(ctx, req.(*MigrationSeatReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _SeatService_StreamSeats_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StreamSeatsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SeatServiceServer).StreamSeats(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_admin.SeatService/StreamSeats",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SeatServiceServer).StreamSeats(ctx, req.(*StreamSeatsReq))
	}
	return interceptor(ctx, in, info, handler)
}

// SeatService_ServiceDesc is the grpc.ServiceDesc for SeatService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SeatService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "product.web_admin.SeatService",
	HandlerType: (*SeatServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "MigrationSeat",
			Handler:    _SeatService_MigrationSeat_Handler,
		},
		{
			MethodName: "StreamSeats",
			Handler:    _SeatService_StreamSeats_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "product/web_admin/seat.proto",
}
