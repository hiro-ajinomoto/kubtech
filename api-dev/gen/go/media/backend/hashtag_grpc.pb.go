// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: media/backend/hashtag.proto

package backend

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

// HashtagServiceClient is the client API for HashtagService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type HashtagServiceClient interface {
	InternalUpsertHashtags(ctx context.Context, in *InternaUpsertHashtagsReq, opts ...grpc.CallOption) (*InternaUpsertHashtagsRes, error)
	InternalListHashtagByIds(ctx context.Context, in *InternalListHashtagByIdsReq, opts ...grpc.CallOption) (*InternalListHashtagByIdsRes, error)
}

type hashtagServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewHashtagServiceClient(cc grpc.ClientConnInterface) HashtagServiceClient {
	return &hashtagServiceClient{cc}
}

func (c *hashtagServiceClient) InternalUpsertHashtags(ctx context.Context, in *InternaUpsertHashtagsReq, opts ...grpc.CallOption) (*InternaUpsertHashtagsRes, error) {
	out := new(InternaUpsertHashtagsRes)
	err := c.cc.Invoke(ctx, "/media.backend.HashtagService/InternalUpsertHashtags", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *hashtagServiceClient) InternalListHashtagByIds(ctx context.Context, in *InternalListHashtagByIdsReq, opts ...grpc.CallOption) (*InternalListHashtagByIdsRes, error) {
	out := new(InternalListHashtagByIdsRes)
	err := c.cc.Invoke(ctx, "/media.backend.HashtagService/InternalListHashtagByIds", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// HashtagServiceServer is the server API for HashtagService service.
// All implementations must embed UnimplementedHashtagServiceServer
// for forward compatibility
type HashtagServiceServer interface {
	InternalUpsertHashtags(context.Context, *InternaUpsertHashtagsReq) (*InternaUpsertHashtagsRes, error)
	InternalListHashtagByIds(context.Context, *InternalListHashtagByIdsReq) (*InternalListHashtagByIdsRes, error)
	mustEmbedUnimplementedHashtagServiceServer()
}

// UnimplementedHashtagServiceServer must be embedded to have forward compatible implementations.
type UnimplementedHashtagServiceServer struct {
}

func (UnimplementedHashtagServiceServer) InternalUpsertHashtags(context.Context, *InternaUpsertHashtagsReq) (*InternaUpsertHashtagsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InternalUpsertHashtags not implemented")
}
func (UnimplementedHashtagServiceServer) InternalListHashtagByIds(context.Context, *InternalListHashtagByIdsReq) (*InternalListHashtagByIdsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InternalListHashtagByIds not implemented")
}
func (UnimplementedHashtagServiceServer) mustEmbedUnimplementedHashtagServiceServer() {}

// UnsafeHashtagServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to HashtagServiceServer will
// result in compilation errors.
type UnsafeHashtagServiceServer interface {
	mustEmbedUnimplementedHashtagServiceServer()
}

func RegisterHashtagServiceServer(s grpc.ServiceRegistrar, srv HashtagServiceServer) {
	s.RegisterService(&HashtagService_ServiceDesc, srv)
}

func _HashtagService_InternalUpsertHashtags_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InternaUpsertHashtagsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HashtagServiceServer).InternalUpsertHashtags(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/media.backend.HashtagService/InternalUpsertHashtags",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HashtagServiceServer).InternalUpsertHashtags(ctx, req.(*InternaUpsertHashtagsReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _HashtagService_InternalListHashtagByIds_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InternalListHashtagByIdsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HashtagServiceServer).InternalListHashtagByIds(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/media.backend.HashtagService/InternalListHashtagByIds",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HashtagServiceServer).InternalListHashtagByIds(ctx, req.(*InternalListHashtagByIdsReq))
	}
	return interceptor(ctx, in, info, handler)
}

// HashtagService_ServiceDesc is the grpc.ServiceDesc for HashtagService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var HashtagService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "media.backend.HashtagService",
	HandlerType: (*HashtagServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "InternalUpsertHashtags",
			Handler:    _HashtagService_InternalUpsertHashtags_Handler,
		},
		{
			MethodName: "InternalListHashtagByIds",
			Handler:    _HashtagService_InternalListHashtagByIds_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "media/backend/hashtag.proto",
}
