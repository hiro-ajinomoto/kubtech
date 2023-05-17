// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: event/mobile/artist_role.proto

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

// ArtistRoleServiceClient is the client API for ArtistRoleService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ArtistRoleServiceClient interface {
	ListRetrieveArtistRole(ctx context.Context, in *ListArtistRoleReq, opts ...grpc.CallOption) (*ListArtistRoleRes, error)
}

type artistRoleServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewArtistRoleServiceClient(cc grpc.ClientConnInterface) ArtistRoleServiceClient {
	return &artistRoleServiceClient{cc}
}

func (c *artistRoleServiceClient) ListRetrieveArtistRole(ctx context.Context, in *ListArtistRoleReq, opts ...grpc.CallOption) (*ListArtistRoleRes, error) {
	out := new(ListArtistRoleRes)
	err := c.cc.Invoke(ctx, "/event.mobile.ArtistRoleService/ListRetrieveArtistRole", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ArtistRoleServiceServer is the server API for ArtistRoleService service.
// All implementations must embed UnimplementedArtistRoleServiceServer
// for forward compatibility
type ArtistRoleServiceServer interface {
	ListRetrieveArtistRole(context.Context, *ListArtistRoleReq) (*ListArtistRoleRes, error)
	mustEmbedUnimplementedArtistRoleServiceServer()
}

// UnimplementedArtistRoleServiceServer must be embedded to have forward compatible implementations.
type UnimplementedArtistRoleServiceServer struct {
}

func (UnimplementedArtistRoleServiceServer) ListRetrieveArtistRole(context.Context, *ListArtistRoleReq) (*ListArtistRoleRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListRetrieveArtistRole not implemented")
}
func (UnimplementedArtistRoleServiceServer) mustEmbedUnimplementedArtistRoleServiceServer() {}

// UnsafeArtistRoleServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ArtistRoleServiceServer will
// result in compilation errors.
type UnsafeArtistRoleServiceServer interface {
	mustEmbedUnimplementedArtistRoleServiceServer()
}

func RegisterArtistRoleServiceServer(s grpc.ServiceRegistrar, srv ArtistRoleServiceServer) {
	s.RegisterService(&ArtistRoleService_ServiceDesc, srv)
}

func _ArtistRoleService_ListRetrieveArtistRole_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListArtistRoleReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArtistRoleServiceServer).ListRetrieveArtistRole(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/event.mobile.ArtistRoleService/ListRetrieveArtistRole",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArtistRoleServiceServer).ListRetrieveArtistRole(ctx, req.(*ListArtistRoleReq))
	}
	return interceptor(ctx, in, info, handler)
}

// ArtistRoleService_ServiceDesc is the grpc.ServiceDesc for ArtistRoleService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ArtistRoleService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "event.mobile.ArtistRoleService",
	HandlerType: (*ArtistRoleServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListRetrieveArtistRole",
			Handler:    _ArtistRoleService_ListRetrieveArtistRole_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "event/mobile/artist_role.proto",
}
