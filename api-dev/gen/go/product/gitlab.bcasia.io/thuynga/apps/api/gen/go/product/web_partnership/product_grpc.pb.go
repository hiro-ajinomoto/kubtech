// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/product/web_partnership/product.proto

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

// ProductServiceClient is the client API for ProductService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProductServiceClient interface {
	CreateProduct(ctx context.Context, in *CreateProductReq, opts ...grpc.CallOption) (*CreateProductRes, error)
	UpdateProduct(ctx context.Context, in *UpdateProductReq, opts ...grpc.CallOption) (*Empty, error)
	SoftDeleteProduct(ctx context.Context, in *SoftDeleteProductReq, opts ...grpc.CallOption) (*Empty, error)
	HardDeleteProduct(ctx context.Context, in *HardDeleteProductReq, opts ...grpc.CallOption) (*Empty, error)
	RetrieveProduct(ctx context.Context, in *RetrieveProductReq, opts ...grpc.CallOption) (*RetrieveProductRes, error)
	ListProduct(ctx context.Context, in *ListProductReq, opts ...grpc.CallOption) (*ListProductRes, error)
	PublicRetrieveProduct(ctx context.Context, in *PublicRetrieveProductReq, opts ...grpc.CallOption) (*PublicRetrieveProductRes, error)
	PublicListProduct(ctx context.Context, in *PublicListProductReq, opts ...grpc.CallOption) (*PublicListProductRes, error)
}

type productServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewProductServiceClient(cc grpc.ClientConnInterface) ProductServiceClient {
	return &productServiceClient{cc}
}

func (c *productServiceClient) CreateProduct(ctx context.Context, in *CreateProductReq, opts ...grpc.CallOption) (*CreateProductRes, error) {
	out := new(CreateProductRes)
	err := c.cc.Invoke(ctx, "/product.web_partnership.ProductService/CreateProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) UpdateProduct(ctx context.Context, in *UpdateProductReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/product.web_partnership.ProductService/UpdateProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) SoftDeleteProduct(ctx context.Context, in *SoftDeleteProductReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/product.web_partnership.ProductService/SoftDeleteProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) HardDeleteProduct(ctx context.Context, in *HardDeleteProductReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/product.web_partnership.ProductService/HardDeleteProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) RetrieveProduct(ctx context.Context, in *RetrieveProductReq, opts ...grpc.CallOption) (*RetrieveProductRes, error) {
	out := new(RetrieveProductRes)
	err := c.cc.Invoke(ctx, "/product.web_partnership.ProductService/RetrieveProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) ListProduct(ctx context.Context, in *ListProductReq, opts ...grpc.CallOption) (*ListProductRes, error) {
	out := new(ListProductRes)
	err := c.cc.Invoke(ctx, "/product.web_partnership.ProductService/ListProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) PublicRetrieveProduct(ctx context.Context, in *PublicRetrieveProductReq, opts ...grpc.CallOption) (*PublicRetrieveProductRes, error) {
	out := new(PublicRetrieveProductRes)
	err := c.cc.Invoke(ctx, "/product.web_partnership.ProductService/PublicRetrieveProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) PublicListProduct(ctx context.Context, in *PublicListProductReq, opts ...grpc.CallOption) (*PublicListProductRes, error) {
	out := new(PublicListProductRes)
	err := c.cc.Invoke(ctx, "/product.web_partnership.ProductService/PublicListProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProductServiceServer is the server API for ProductService service.
// All implementations must embed UnimplementedProductServiceServer
// for forward compatibility
type ProductServiceServer interface {
	CreateProduct(context.Context, *CreateProductReq) (*CreateProductRes, error)
	UpdateProduct(context.Context, *UpdateProductReq) (*Empty, error)
	SoftDeleteProduct(context.Context, *SoftDeleteProductReq) (*Empty, error)
	HardDeleteProduct(context.Context, *HardDeleteProductReq) (*Empty, error)
	RetrieveProduct(context.Context, *RetrieveProductReq) (*RetrieveProductRes, error)
	ListProduct(context.Context, *ListProductReq) (*ListProductRes, error)
	PublicRetrieveProduct(context.Context, *PublicRetrieveProductReq) (*PublicRetrieveProductRes, error)
	PublicListProduct(context.Context, *PublicListProductReq) (*PublicListProductRes, error)
	mustEmbedUnimplementedProductServiceServer()
}

// UnimplementedProductServiceServer must be embedded to have forward compatible implementations.
type UnimplementedProductServiceServer struct {
}

func (UnimplementedProductServiceServer) CreateProduct(context.Context, *CreateProductReq) (*CreateProductRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProduct not implemented")
}
func (UnimplementedProductServiceServer) UpdateProduct(context.Context, *UpdateProductReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProduct not implemented")
}
func (UnimplementedProductServiceServer) SoftDeleteProduct(context.Context, *SoftDeleteProductReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SoftDeleteProduct not implemented")
}
func (UnimplementedProductServiceServer) HardDeleteProduct(context.Context, *HardDeleteProductReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method HardDeleteProduct not implemented")
}
func (UnimplementedProductServiceServer) RetrieveProduct(context.Context, *RetrieveProductReq) (*RetrieveProductRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RetrieveProduct not implemented")
}
func (UnimplementedProductServiceServer) ListProduct(context.Context, *ListProductReq) (*ListProductRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListProduct not implemented")
}
func (UnimplementedProductServiceServer) PublicRetrieveProduct(context.Context, *PublicRetrieveProductReq) (*PublicRetrieveProductRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PublicRetrieveProduct not implemented")
}
func (UnimplementedProductServiceServer) PublicListProduct(context.Context, *PublicListProductReq) (*PublicListProductRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PublicListProduct not implemented")
}
func (UnimplementedProductServiceServer) mustEmbedUnimplementedProductServiceServer() {}

// UnsafeProductServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProductServiceServer will
// result in compilation errors.
type UnsafeProductServiceServer interface {
	mustEmbedUnimplementedProductServiceServer()
}

func RegisterProductServiceServer(s grpc.ServiceRegistrar, srv ProductServiceServer) {
	s.RegisterService(&ProductService_ServiceDesc, srv)
}

func _ProductService_CreateProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateProductReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).CreateProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_partnership.ProductService/CreateProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).CreateProduct(ctx, req.(*CreateProductReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_UpdateProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateProductReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).UpdateProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_partnership.ProductService/UpdateProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).UpdateProduct(ctx, req.(*UpdateProductReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_SoftDeleteProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SoftDeleteProductReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).SoftDeleteProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_partnership.ProductService/SoftDeleteProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).SoftDeleteProduct(ctx, req.(*SoftDeleteProductReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_HardDeleteProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HardDeleteProductReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).HardDeleteProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_partnership.ProductService/HardDeleteProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).HardDeleteProduct(ctx, req.(*HardDeleteProductReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_RetrieveProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RetrieveProductReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).RetrieveProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_partnership.ProductService/RetrieveProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).RetrieveProduct(ctx, req.(*RetrieveProductReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_ListProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListProductReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).ListProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_partnership.ProductService/ListProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).ListProduct(ctx, req.(*ListProductReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_PublicRetrieveProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PublicRetrieveProductReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).PublicRetrieveProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_partnership.ProductService/PublicRetrieveProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).PublicRetrieveProduct(ctx, req.(*PublicRetrieveProductReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_PublicListProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PublicListProductReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).PublicListProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.web_partnership.ProductService/PublicListProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).PublicListProduct(ctx, req.(*PublicListProductReq))
	}
	return interceptor(ctx, in, info, handler)
}

// ProductService_ServiceDesc is the grpc.ServiceDesc for ProductService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ProductService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "product.web_partnership.ProductService",
	HandlerType: (*ProductServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateProduct",
			Handler:    _ProductService_CreateProduct_Handler,
		},
		{
			MethodName: "UpdateProduct",
			Handler:    _ProductService_UpdateProduct_Handler,
		},
		{
			MethodName: "SoftDeleteProduct",
			Handler:    _ProductService_SoftDeleteProduct_Handler,
		},
		{
			MethodName: "HardDeleteProduct",
			Handler:    _ProductService_HardDeleteProduct_Handler,
		},
		{
			MethodName: "RetrieveProduct",
			Handler:    _ProductService_RetrieveProduct_Handler,
		},
		{
			MethodName: "ListProduct",
			Handler:    _ProductService_ListProduct_Handler,
		},
		{
			MethodName: "PublicRetrieveProduct",
			Handler:    _ProductService_PublicRetrieveProduct_Handler,
		},
		{
			MethodName: "PublicListProduct",
			Handler:    _ProductService_PublicListProduct_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/product/web_partnership/product.proto",
}
