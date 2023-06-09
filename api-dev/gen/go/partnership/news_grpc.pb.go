// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/partnership/news.proto

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

// NewsServiceClient is the client API for NewsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NewsServiceClient interface {
	CreateNews(ctx context.Context, in *CreateNewsReq, opts ...grpc.CallOption) (*CreateNewsRes, error)
	UpdateNews(ctx context.Context, in *UpdateNewsReq, opts ...grpc.CallOption) (*Empty, error)
	DeleteNews(ctx context.Context, in *DeleteNewsReq, opts ...grpc.CallOption) (*Empty, error)
	RetrieveNews(ctx context.Context, in *RetrieveNewsReq, opts ...grpc.CallOption) (*RetrieveNewsRes, error)
	ListNews(ctx context.Context, in *ListNewsReq, opts ...grpc.CallOption) (*ListNewsRes, error)
	PublicRetrieveNews(ctx context.Context, in *PublicRetrieveNewsReq, opts ...grpc.CallOption) (*RetrieveNewsRes, error)
	PublicListNews(ctx context.Context, in *PublicListNewsReq, opts ...grpc.CallOption) (*PublicListNewsRes, error)
}

type newsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewNewsServiceClient(cc grpc.ClientConnInterface) NewsServiceClient {
	return &newsServiceClient{cc}
}

func (c *newsServiceClient) CreateNews(ctx context.Context, in *CreateNewsReq, opts ...grpc.CallOption) (*CreateNewsRes, error) {
	out := new(CreateNewsRes)
	err := c.cc.Invoke(ctx, "/partnership.NewsService/CreateNews", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *newsServiceClient) UpdateNews(ctx context.Context, in *UpdateNewsReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/partnership.NewsService/UpdateNews", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *newsServiceClient) DeleteNews(ctx context.Context, in *DeleteNewsReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/partnership.NewsService/DeleteNews", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *newsServiceClient) RetrieveNews(ctx context.Context, in *RetrieveNewsReq, opts ...grpc.CallOption) (*RetrieveNewsRes, error) {
	out := new(RetrieveNewsRes)
	err := c.cc.Invoke(ctx, "/partnership.NewsService/RetrieveNews", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *newsServiceClient) ListNews(ctx context.Context, in *ListNewsReq, opts ...grpc.CallOption) (*ListNewsRes, error) {
	out := new(ListNewsRes)
	err := c.cc.Invoke(ctx, "/partnership.NewsService/ListNews", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *newsServiceClient) PublicRetrieveNews(ctx context.Context, in *PublicRetrieveNewsReq, opts ...grpc.CallOption) (*RetrieveNewsRes, error) {
	out := new(RetrieveNewsRes)
	err := c.cc.Invoke(ctx, "/partnership.NewsService/PublicRetrieveNews", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *newsServiceClient) PublicListNews(ctx context.Context, in *PublicListNewsReq, opts ...grpc.CallOption) (*PublicListNewsRes, error) {
	out := new(PublicListNewsRes)
	err := c.cc.Invoke(ctx, "/partnership.NewsService/PublicListNews", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NewsServiceServer is the server API for NewsService service.
// All implementations must embed UnimplementedNewsServiceServer
// for forward compatibility
type NewsServiceServer interface {
	CreateNews(context.Context, *CreateNewsReq) (*CreateNewsRes, error)
	UpdateNews(context.Context, *UpdateNewsReq) (*Empty, error)
	DeleteNews(context.Context, *DeleteNewsReq) (*Empty, error)
	RetrieveNews(context.Context, *RetrieveNewsReq) (*RetrieveNewsRes, error)
	ListNews(context.Context, *ListNewsReq) (*ListNewsRes, error)
	PublicRetrieveNews(context.Context, *PublicRetrieveNewsReq) (*RetrieveNewsRes, error)
	PublicListNews(context.Context, *PublicListNewsReq) (*PublicListNewsRes, error)
	mustEmbedUnimplementedNewsServiceServer()
}

// UnimplementedNewsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedNewsServiceServer struct {
}

func (UnimplementedNewsServiceServer) CreateNews(context.Context, *CreateNewsReq) (*CreateNewsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateNews not implemented")
}
func (UnimplementedNewsServiceServer) UpdateNews(context.Context, *UpdateNewsReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateNews not implemented")
}
func (UnimplementedNewsServiceServer) DeleteNews(context.Context, *DeleteNewsReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteNews not implemented")
}
func (UnimplementedNewsServiceServer) RetrieveNews(context.Context, *RetrieveNewsReq) (*RetrieveNewsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RetrieveNews not implemented")
}
func (UnimplementedNewsServiceServer) ListNews(context.Context, *ListNewsReq) (*ListNewsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListNews not implemented")
}
func (UnimplementedNewsServiceServer) PublicRetrieveNews(context.Context, *PublicRetrieveNewsReq) (*RetrieveNewsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PublicRetrieveNews not implemented")
}
func (UnimplementedNewsServiceServer) PublicListNews(context.Context, *PublicListNewsReq) (*PublicListNewsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PublicListNews not implemented")
}
func (UnimplementedNewsServiceServer) mustEmbedUnimplementedNewsServiceServer() {}

// UnsafeNewsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NewsServiceServer will
// result in compilation errors.
type UnsafeNewsServiceServer interface {
	mustEmbedUnimplementedNewsServiceServer()
}

func RegisterNewsServiceServer(s grpc.ServiceRegistrar, srv NewsServiceServer) {
	s.RegisterService(&NewsService_ServiceDesc, srv)
}

func _NewsService_CreateNews_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateNewsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NewsServiceServer).CreateNews(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.NewsService/CreateNews",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NewsServiceServer).CreateNews(ctx, req.(*CreateNewsReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _NewsService_UpdateNews_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateNewsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NewsServiceServer).UpdateNews(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.NewsService/UpdateNews",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NewsServiceServer).UpdateNews(ctx, req.(*UpdateNewsReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _NewsService_DeleteNews_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteNewsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NewsServiceServer).DeleteNews(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.NewsService/DeleteNews",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NewsServiceServer).DeleteNews(ctx, req.(*DeleteNewsReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _NewsService_RetrieveNews_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RetrieveNewsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NewsServiceServer).RetrieveNews(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.NewsService/RetrieveNews",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NewsServiceServer).RetrieveNews(ctx, req.(*RetrieveNewsReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _NewsService_ListNews_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListNewsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NewsServiceServer).ListNews(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.NewsService/ListNews",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NewsServiceServer).ListNews(ctx, req.(*ListNewsReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _NewsService_PublicRetrieveNews_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PublicRetrieveNewsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NewsServiceServer).PublicRetrieveNews(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.NewsService/PublicRetrieveNews",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NewsServiceServer).PublicRetrieveNews(ctx, req.(*PublicRetrieveNewsReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _NewsService_PublicListNews_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PublicListNewsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NewsServiceServer).PublicListNews(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/partnership.NewsService/PublicListNews",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NewsServiceServer).PublicListNews(ctx, req.(*PublicListNewsReq))
	}
	return interceptor(ctx, in, info, handler)
}

// NewsService_ServiceDesc is the grpc.ServiceDesc for NewsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NewsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "partnership.NewsService",
	HandlerType: (*NewsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateNews",
			Handler:    _NewsService_CreateNews_Handler,
		},
		{
			MethodName: "UpdateNews",
			Handler:    _NewsService_UpdateNews_Handler,
		},
		{
			MethodName: "DeleteNews",
			Handler:    _NewsService_DeleteNews_Handler,
		},
		{
			MethodName: "RetrieveNews",
			Handler:    _NewsService_RetrieveNews_Handler,
		},
		{
			MethodName: "ListNews",
			Handler:    _NewsService_ListNews_Handler,
		},
		{
			MethodName: "PublicRetrieveNews",
			Handler:    _NewsService_PublicRetrieveNews_Handler,
		},
		{
			MethodName: "PublicListNews",
			Handler:    _NewsService_PublicListNews_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/partnership/news.proto",
}
