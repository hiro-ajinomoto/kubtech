// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: event/web_admin/artist.proto

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

// ArtistServiceClient is the client API for ArtistService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ArtistServiceClient interface {
	GetArtistDetail(ctx context.Context, in *GetArtistDetailReq, opts ...grpc.CallOption) (*GetArtistDetailRes, error)
	ListArtist(ctx context.Context, in *ListArtistReq, opts ...grpc.CallOption) (*ListArtistRes, error)
	CreateArtist(ctx context.Context, in *CreateArtistReq, opts ...grpc.CallOption) (*CreateArtistRes, error)
	UpdateArtist(ctx context.Context, in *UpdateArtistReq, opts ...grpc.CallOption) (*Empty, error)
	DeleteArtist(ctx context.Context, in *DeleteArtistReq, opts ...grpc.CallOption) (*Empty, error)
}

type artistServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewArtistServiceClient(cc grpc.ClientConnInterface) ArtistServiceClient {
	return &artistServiceClient{cc}
}

func (c *artistServiceClient) GetArtistDetail(ctx context.Context, in *GetArtistDetailReq, opts ...grpc.CallOption) (*GetArtistDetailRes, error) {
	out := new(GetArtistDetailRes)
	err := c.cc.Invoke(ctx, "/event.web_admin.ArtistService/GetArtistDetail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistServiceClient) ListArtist(ctx context.Context, in *ListArtistReq, opts ...grpc.CallOption) (*ListArtistRes, error) {
	out := new(ListArtistRes)
	err := c.cc.Invoke(ctx, "/event.web_admin.ArtistService/ListArtist", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistServiceClient) CreateArtist(ctx context.Context, in *CreateArtistReq, opts ...grpc.CallOption) (*CreateArtistRes, error) {
	out := new(CreateArtistRes)
	err := c.cc.Invoke(ctx, "/event.web_admin.ArtistService/CreateArtist", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistServiceClient) UpdateArtist(ctx context.Context, in *UpdateArtistReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/event.web_admin.ArtistService/UpdateArtist", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *artistServiceClient) DeleteArtist(ctx context.Context, in *DeleteArtistReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/event.web_admin.ArtistService/DeleteArtist", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ArtistServiceServer is the server API for ArtistService service.
// All implementations must embed UnimplementedArtistServiceServer
// for forward compatibility
type ArtistServiceServer interface {
	GetArtistDetail(context.Context, *GetArtistDetailReq) (*GetArtistDetailRes, error)
	ListArtist(context.Context, *ListArtistReq) (*ListArtistRes, error)
	CreateArtist(context.Context, *CreateArtistReq) (*CreateArtistRes, error)
	UpdateArtist(context.Context, *UpdateArtistReq) (*Empty, error)
	DeleteArtist(context.Context, *DeleteArtistReq) (*Empty, error)
	mustEmbedUnimplementedArtistServiceServer()
}

// UnimplementedArtistServiceServer must be embedded to have forward compatible implementations.
type UnimplementedArtistServiceServer struct {
}

func (UnimplementedArtistServiceServer) GetArtistDetail(context.Context, *GetArtistDetailReq) (*GetArtistDetailRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetArtistDetail not implemented")
}
func (UnimplementedArtistServiceServer) ListArtist(context.Context, *ListArtistReq) (*ListArtistRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListArtist not implemented")
}
func (UnimplementedArtistServiceServer) CreateArtist(context.Context, *CreateArtistReq) (*CreateArtistRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateArtist not implemented")
}
func (UnimplementedArtistServiceServer) UpdateArtist(context.Context, *UpdateArtistReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateArtist not implemented")
}
func (UnimplementedArtistServiceServer) DeleteArtist(context.Context, *DeleteArtistReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteArtist not implemented")
}
func (UnimplementedArtistServiceServer) mustEmbedUnimplementedArtistServiceServer() {}

// UnsafeArtistServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ArtistServiceServer will
// result in compilation errors.
type UnsafeArtistServiceServer interface {
	mustEmbedUnimplementedArtistServiceServer()
}

func RegisterArtistServiceServer(s grpc.ServiceRegistrar, srv ArtistServiceServer) {
	s.RegisterService(&ArtistService_ServiceDesc, srv)
}

func _ArtistService_GetArtistDetail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetArtistDetailReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistServiceServer).GetArtistDetail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/event.web_admin.ArtistService/GetArtistDetail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistServiceServer).GetArtistDetail(ctx, req.(*GetArtistDetailReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistService_ListArtist_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListArtistReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistServiceServer).ListArtist(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/event.web_admin.ArtistService/ListArtist",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistServiceServer).ListArtist(ctx, req.(*ListArtistReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistService_CreateArtist_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateArtistReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistServiceServer).CreateArtist(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/event.web_admin.ArtistService/CreateArtist",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistServiceServer).CreateArtist(ctx, req.(*CreateArtistReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistService_UpdateArtist_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateArtistReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistServiceServer).UpdateArtist(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/event.web_admin.ArtistService/UpdateArtist",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistServiceServer).UpdateArtist(ctx, req.(*UpdateArtistReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArtistService_DeleteArtist_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteArtistReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistServiceServer).DeleteArtist(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/event.web_admin.ArtistService/DeleteArtist",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistServiceServer).DeleteArtist(ctx, req.(*DeleteArtistReq))
	}
	return interceptor(ctx, in, info, handler)
}

// ArtistService_ServiceDesc is the grpc.ServiceDesc for ArtistService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ArtistService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "event.web_admin.ArtistService",
	HandlerType: (*ArtistServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetArtistDetail",
			Handler:    _ArtistService_GetArtistDetail_Handler,
		},
		{
			MethodName: "ListArtist",
			Handler:    _ArtistService_ListArtist_Handler,
		},
		{
			MethodName: "CreateArtist",
			Handler:    _ArtistService_CreateArtist_Handler,
		},
		{
			MethodName: "UpdateArtist",
			Handler:    _ArtistService_UpdateArtist_Handler,
		},
		{
			MethodName: "DeleteArtist",
			Handler:    _ArtistService_DeleteArtist_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "event/web_admin/artist.proto",
}
