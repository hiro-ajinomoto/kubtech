// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: product/backend/product_delivery.proto

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

// ProductDeliveryServiceClient is the client API for ProductDeliveryService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProductDeliveryServiceClient interface {
	CheckProductDelivery(ctx context.Context, in *CheckProductDeliveryReq, opts ...grpc.CallOption) (*CheckProductDeliveryRes, error)
}

type productDeliveryServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewProductDeliveryServiceClient(cc grpc.ClientConnInterface) ProductDeliveryServiceClient {
	return &productDeliveryServiceClient{cc}
}

func (c *productDeliveryServiceClient) CheckProductDelivery(ctx context.Context, in *CheckProductDeliveryReq, opts ...grpc.CallOption) (*CheckProductDeliveryRes, error) {
	out := new(CheckProductDeliveryRes)
	err := c.cc.Invoke(ctx, "/product.backend.ProductDeliveryService/CheckProductDelivery", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProductDeliveryServiceServer is the server API for ProductDeliveryService service.
// All implementations must embed UnimplementedProductDeliveryServiceServer
// for forward compatibility
type ProductDeliveryServiceServer interface {
	CheckProductDelivery(context.Context, *CheckProductDeliveryReq) (*CheckProductDeliveryRes, error)
	mustEmbedUnimplementedProductDeliveryServiceServer()
}

// UnimplementedProductDeliveryServiceServer must be embedded to have forward compatible implementations.
type UnimplementedProductDeliveryServiceServer struct {
}

func (UnimplementedProductDeliveryServiceServer) CheckProductDelivery(context.Context, *CheckProductDeliveryReq) (*CheckProductDeliveryRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckProductDelivery not implemented")
}
func (UnimplementedProductDeliveryServiceServer) mustEmbedUnimplementedProductDeliveryServiceServer() {
}

// UnsafeProductDeliveryServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProductDeliveryServiceServer will
// result in compilation errors.
type UnsafeProductDeliveryServiceServer interface {
	mustEmbedUnimplementedProductDeliveryServiceServer()
}

func RegisterProductDeliveryServiceServer(s grpc.ServiceRegistrar, srv ProductDeliveryServiceServer) {
	s.RegisterService(&ProductDeliveryService_ServiceDesc, srv)
}

func _ProductDeliveryService_CheckProductDelivery_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckProductDeliveryReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductDeliveryServiceServer).CheckProductDelivery(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.backend.ProductDeliveryService/CheckProductDelivery",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductDeliveryServiceServer).CheckProductDelivery(ctx, req.(*CheckProductDeliveryReq))
	}
	return interceptor(ctx, in, info, handler)
}

// ProductDeliveryService_ServiceDesc is the grpc.ServiceDesc for ProductDeliveryService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ProductDeliveryService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "product.backend.ProductDeliveryService",
	HandlerType: (*ProductDeliveryServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CheckProductDelivery",
			Handler:    _ProductDeliveryService_CheckProductDelivery_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "product/backend/product_delivery.proto",
}
