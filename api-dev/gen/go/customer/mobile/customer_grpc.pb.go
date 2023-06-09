// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: proto/customer/mobile/customer.proto

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

// CustomerServiceClient is the client API for CustomerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CustomerServiceClient interface {
	// User APIs.
	GetMe(ctx context.Context, in *GetMeReq, opts ...grpc.CallOption) (*GetMeRes, error)
	UpdateMe(ctx context.Context, in *UpdateMeReq, opts ...grpc.CallOption) (*Empty, error)
	ChangePassword(ctx context.Context, in *ChangePasswordReq, opts ...grpc.CallOption) (*Empty, error)
	DeleteUser(ctx context.Context, in *DeleteUserReq, opts ...grpc.CallOption) (*Empty, error)
	GetUserById(ctx context.Context, in *GetUserByIdReq, opts ...grpc.CallOption) (*GetUserByIdRes, error)
	GetUser(ctx context.Context, in *GetUserReq, opts ...grpc.CallOption) (*GetUserRes, error)
	GetListUserByIds(ctx context.Context, in *GetListUserByIdsReq, opts ...grpc.CallOption) (*GetListUserByIdsRes, error)
	GetListUser(ctx context.Context, in *GetListUserReq, opts ...grpc.CallOption) (*GetListUserRes, error)
	// PUBLIC API
	CheckAlreadyExistEmail(ctx context.Context, in *CheckAlreadyExistEmailReq, opts ...grpc.CallOption) (*DefaultRes, error)
	CheckAlreadyExistPhone(ctx context.Context, in *CheckAlreadyExistPhoneReq, opts ...grpc.CallOption) (*DefaultRes, error)
}

type customerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCustomerServiceClient(cc grpc.ClientConnInterface) CustomerServiceClient {
	return &customerServiceClient{cc}
}

func (c *customerServiceClient) GetMe(ctx context.Context, in *GetMeReq, opts ...grpc.CallOption) (*GetMeRes, error) {
	out := new(GetMeRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/GetMe", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) UpdateMe(ctx context.Context, in *UpdateMeReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/UpdateMe", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) ChangePassword(ctx context.Context, in *ChangePasswordReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/ChangePassword", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) DeleteUser(ctx context.Context, in *DeleteUserReq, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/DeleteUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) GetUserById(ctx context.Context, in *GetUserByIdReq, opts ...grpc.CallOption) (*GetUserByIdRes, error) {
	out := new(GetUserByIdRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/GetUserById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) GetUser(ctx context.Context, in *GetUserReq, opts ...grpc.CallOption) (*GetUserRes, error) {
	out := new(GetUserRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/GetUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) GetListUserByIds(ctx context.Context, in *GetListUserByIdsReq, opts ...grpc.CallOption) (*GetListUserByIdsRes, error) {
	out := new(GetListUserByIdsRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/GetListUserByIds", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) GetListUser(ctx context.Context, in *GetListUserReq, opts ...grpc.CallOption) (*GetListUserRes, error) {
	out := new(GetListUserRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/GetListUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) CheckAlreadyExistEmail(ctx context.Context, in *CheckAlreadyExistEmailReq, opts ...grpc.CallOption) (*DefaultRes, error) {
	out := new(DefaultRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/CheckAlreadyExistEmail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *customerServiceClient) CheckAlreadyExistPhone(ctx context.Context, in *CheckAlreadyExistPhoneReq, opts ...grpc.CallOption) (*DefaultRes, error) {
	out := new(DefaultRes)
	err := c.cc.Invoke(ctx, "/customer.mobile.CustomerService/CheckAlreadyExistPhone", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CustomerServiceServer is the server API for CustomerService service.
// All implementations must embed UnimplementedCustomerServiceServer
// for forward compatibility
type CustomerServiceServer interface {
	// User APIs.
	GetMe(context.Context, *GetMeReq) (*GetMeRes, error)
	UpdateMe(context.Context, *UpdateMeReq) (*Empty, error)
	ChangePassword(context.Context, *ChangePasswordReq) (*Empty, error)
	DeleteUser(context.Context, *DeleteUserReq) (*Empty, error)
	GetUserById(context.Context, *GetUserByIdReq) (*GetUserByIdRes, error)
	GetUser(context.Context, *GetUserReq) (*GetUserRes, error)
	GetListUserByIds(context.Context, *GetListUserByIdsReq) (*GetListUserByIdsRes, error)
	GetListUser(context.Context, *GetListUserReq) (*GetListUserRes, error)
	// PUBLIC API
	CheckAlreadyExistEmail(context.Context, *CheckAlreadyExistEmailReq) (*DefaultRes, error)
	CheckAlreadyExistPhone(context.Context, *CheckAlreadyExistPhoneReq) (*DefaultRes, error)
	mustEmbedUnimplementedCustomerServiceServer()
}

// UnimplementedCustomerServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCustomerServiceServer struct {
}

func (UnimplementedCustomerServiceServer) GetMe(context.Context, *GetMeReq) (*GetMeRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMe not implemented")
}
func (UnimplementedCustomerServiceServer) UpdateMe(context.Context, *UpdateMeReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateMe not implemented")
}
func (UnimplementedCustomerServiceServer) ChangePassword(context.Context, *ChangePasswordReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ChangePassword not implemented")
}
func (UnimplementedCustomerServiceServer) DeleteUser(context.Context, *DeleteUserReq) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteUser not implemented")
}
func (UnimplementedCustomerServiceServer) GetUserById(context.Context, *GetUserByIdReq) (*GetUserByIdRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserById not implemented")
}
func (UnimplementedCustomerServiceServer) GetUser(context.Context, *GetUserReq) (*GetUserRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUser not implemented")
}
func (UnimplementedCustomerServiceServer) GetListUserByIds(context.Context, *GetListUserByIdsReq) (*GetListUserByIdsRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListUserByIds not implemented")
}
func (UnimplementedCustomerServiceServer) GetListUser(context.Context, *GetListUserReq) (*GetListUserRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListUser not implemented")
}
func (UnimplementedCustomerServiceServer) CheckAlreadyExistEmail(context.Context, *CheckAlreadyExistEmailReq) (*DefaultRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckAlreadyExistEmail not implemented")
}
func (UnimplementedCustomerServiceServer) CheckAlreadyExistPhone(context.Context, *CheckAlreadyExistPhoneReq) (*DefaultRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckAlreadyExistPhone not implemented")
}
func (UnimplementedCustomerServiceServer) mustEmbedUnimplementedCustomerServiceServer() {}

// UnsafeCustomerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CustomerServiceServer will
// result in compilation errors.
type UnsafeCustomerServiceServer interface {
	mustEmbedUnimplementedCustomerServiceServer()
}

func RegisterCustomerServiceServer(s grpc.ServiceRegistrar, srv CustomerServiceServer) {
	s.RegisterService(&CustomerService_ServiceDesc, srv)
}

func _CustomerService_GetMe_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMeReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).GetMe(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/GetMe",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).GetMe(ctx, req.(*GetMeReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_UpdateMe_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateMeReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).UpdateMe(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/UpdateMe",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).UpdateMe(ctx, req.(*UpdateMeReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_ChangePassword_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ChangePasswordReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).ChangePassword(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/ChangePassword",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).ChangePassword(ctx, req.(*ChangePasswordReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_DeleteUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteUserReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).DeleteUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/DeleteUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).DeleteUser(ctx, req.(*DeleteUserReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_GetUserById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserByIdReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).GetUserById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/GetUserById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).GetUserById(ctx, req.(*GetUserByIdReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_GetUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).GetUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/GetUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).GetUser(ctx, req.(*GetUserReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_GetListUserByIds_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetListUserByIdsReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).GetListUserByIds(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/GetListUserByIds",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).GetListUserByIds(ctx, req.(*GetListUserByIdsReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_GetListUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetListUserReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).GetListUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/GetListUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).GetListUser(ctx, req.(*GetListUserReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_CheckAlreadyExistEmail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckAlreadyExistEmailReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).CheckAlreadyExistEmail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/CheckAlreadyExistEmail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).CheckAlreadyExistEmail(ctx, req.(*CheckAlreadyExistEmailReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _CustomerService_CheckAlreadyExistPhone_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckAlreadyExistPhoneReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CustomerServiceServer).CheckAlreadyExistPhone(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/customer.mobile.CustomerService/CheckAlreadyExistPhone",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CustomerServiceServer).CheckAlreadyExistPhone(ctx, req.(*CheckAlreadyExistPhoneReq))
	}
	return interceptor(ctx, in, info, handler)
}

// CustomerService_ServiceDesc is the grpc.ServiceDesc for CustomerService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CustomerService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "customer.mobile.CustomerService",
	HandlerType: (*CustomerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMe",
			Handler:    _CustomerService_GetMe_Handler,
		},
		{
			MethodName: "UpdateMe",
			Handler:    _CustomerService_UpdateMe_Handler,
		},
		{
			MethodName: "ChangePassword",
			Handler:    _CustomerService_ChangePassword_Handler,
		},
		{
			MethodName: "DeleteUser",
			Handler:    _CustomerService_DeleteUser_Handler,
		},
		{
			MethodName: "GetUserById",
			Handler:    _CustomerService_GetUserById_Handler,
		},
		{
			MethodName: "GetUser",
			Handler:    _CustomerService_GetUser_Handler,
		},
		{
			MethodName: "GetListUserByIds",
			Handler:    _CustomerService_GetListUserByIds_Handler,
		},
		{
			MethodName: "GetListUser",
			Handler:    _CustomerService_GetListUser_Handler,
		},
		{
			MethodName: "CheckAlreadyExistEmail",
			Handler:    _CustomerService_CheckAlreadyExistEmail_Handler,
		},
		{
			MethodName: "CheckAlreadyExistPhone",
			Handler:    _CustomerService_CheckAlreadyExistPhone_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/customer/mobile/customer.proto",
}
