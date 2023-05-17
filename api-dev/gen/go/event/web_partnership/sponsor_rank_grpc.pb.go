// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: event/web_partnership/sponsor_rank.proto

package web_partnership

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

// SponsorRankServiceClient is the client API for SponsorRankService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SponsorRankServiceClient interface {
	ListRetrieveSponsorRank(ctx context.Context, in *ListSponsorRankReq, opts ...grpc.CallOption) (*ListSponsorRankRes, error)
}

type sponsorRankServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSponsorRankServiceClient(cc grpc.ClientConnInterface) SponsorRankServiceClient {
	return &sponsorRankServiceClient{cc}
}

func (c *sponsorRankServiceClient) ListRetrieveSponsorRank(ctx context.Context, in *ListSponsorRankReq, opts ...grpc.CallOption) (*ListSponsorRankRes, error) {
	out := new(ListSponsorRankRes)
	err := c.cc.Invoke(ctx, "/event.web_partnership.SponsorRankService/ListRetrieveSponsorRank", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SponsorRankServiceServer is the server API for SponsorRankService service.
// All implementations must embed UnimplementedSponsorRankServiceServer
// for forward compatibility
type SponsorRankServiceServer interface {
	ListRetrieveSponsorRank(context.Context, *ListSponsorRankReq) (*ListSponsorRankRes, error)
	mustEmbedUnimplementedSponsorRankServiceServer()
}

// UnimplementedSponsorRankServiceServer must be embedded to have forward compatible implementations.
type UnimplementedSponsorRankServiceServer struct {
}

func (UnimplementedSponsorRankServiceServer) ListRetrieveSponsorRank(context.Context, *ListSponsorRankReq) (*ListSponsorRankRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListRetrieveSponsorRank not implemented")
}
func (UnimplementedSponsorRankServiceServer) mustEmbedUnimplementedSponsorRankServiceServer() {}

// UnsafeSponsorRankServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SponsorRankServiceServer will
// result in compilation errors.
type UnsafeSponsorRankServiceServer interface {
	mustEmbedUnimplementedSponsorRankServiceServer()
}

func RegisterSponsorRankServiceServer(s grpc.ServiceRegistrar, srv SponsorRankServiceServer) {
	s.RegisterService(&SponsorRankService_ServiceDesc, srv)
}

func _SponsorRankService_ListRetrieveSponsorRank_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSponsorRankReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SponsorRankServiceServer).ListRetrieveSponsorRank(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/event.web_partnership.SponsorRankService/ListRetrieveSponsorRank",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SponsorRankServiceServer).ListRetrieveSponsorRank(ctx, req.(*ListSponsorRankReq))
	}
	return interceptor(ctx, in, info, handler)
}

// SponsorRankService_ServiceDesc is the grpc.ServiceDesc for SponsorRankService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SponsorRankService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "event.web_partnership.SponsorRankService",
	HandlerType: (*SponsorRankServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListRetrieveSponsorRank",
			Handler:    _SponsorRankService_ListRetrieveSponsorRank_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "event/web_partnership/sponsor_rank.proto",
}
