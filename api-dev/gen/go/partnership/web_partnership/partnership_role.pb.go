// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/partnership/web_partnership/partnership_role.proto

package web_partnership

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// ================================= REQUESTS ===================================
type Permission struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Key   string   `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	Paths []string `protobuf:"bytes,2,rep,name=paths,proto3" json:"paths,omitempty"`
	Tags  []string `protobuf:"bytes,3,rep,name=tags,proto3" json:"tags,omitempty"`
}

func (x *Permission) Reset() {
	*x = Permission{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Permission) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Permission) ProtoMessage() {}

func (x *Permission) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Permission.ProtoReflect.Descriptor instead.
func (*Permission) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{0}
}

func (x *Permission) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *Permission) GetPaths() []string {
	if x != nil {
		return x.Paths
	}
	return nil
}

func (x *Permission) GetTags() []string {
	if x != nil {
		return x.Tags
	}
	return nil
}

type Role struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Permissions []string `protobuf:"bytes,3,rep,name=permissions,proto3" json:"permissions,omitempty"`
	Code        string   `protobuf:"bytes,4,opt,name=code,proto3" json:"code,omitempty"`
}

func (x *Role) Reset() {
	*x = Role{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Role) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Role) ProtoMessage() {}

func (x *Role) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Role.ProtoReflect.Descriptor instead.
func (*Role) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{1}
}

func (x *Role) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Role) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Role) GetPermissions() []string {
	if x != nil {
		return x.Permissions
	}
	return nil
}

func (x *Role) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

type ListAllRoleReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ListAllRoleReq) Reset() {
	*x = ListAllRoleReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListAllRoleReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListAllRoleReq) ProtoMessage() {}

func (x *ListAllRoleReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListAllRoleReq.ProtoReflect.Descriptor instead.
func (*ListAllRoleReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{2}
}

type ListPermissionReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ListPermissionReq) Reset() {
	*x = ListPermissionReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListPermissionReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListPermissionReq) ProtoMessage() {}

func (x *ListPermissionReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListPermissionReq.ProtoReflect.Descriptor instead.
func (*ListPermissionReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{3}
}

type CreateRoleReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Permissions []string `protobuf:"bytes,2,rep,name=permissions,proto3" json:"permissions,omitempty"`
}

func (x *CreateRoleReq) Reset() {
	*x = CreateRoleReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateRoleReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateRoleReq) ProtoMessage() {}

func (x *CreateRoleReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateRoleReq.ProtoReflect.Descriptor instead.
func (*CreateRoleReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{4}
}

func (x *CreateRoleReq) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateRoleReq) GetPermissions() []string {
	if x != nil {
		return x.Permissions
	}
	return nil
}

type AssignRoleReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PartnershipUserId string `protobuf:"bytes,1,opt,name=partnership_user_id,json=partnershipUserId,proto3" json:"partnership_user_id,omitempty"`
	RoleCode          string `protobuf:"bytes,2,opt,name=role_code,json=roleCode,proto3" json:"role_code,omitempty"`
}

func (x *AssignRoleReq) Reset() {
	*x = AssignRoleReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AssignRoleReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AssignRoleReq) ProtoMessage() {}

func (x *AssignRoleReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AssignRoleReq.ProtoReflect.Descriptor instead.
func (*AssignRoleReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{5}
}

func (x *AssignRoleReq) GetPartnershipUserId() string {
	if x != nil {
		return x.PartnershipUserId
	}
	return ""
}

func (x *AssignRoleReq) GetRoleCode() string {
	if x != nil {
		return x.RoleCode
	}
	return ""
}

type UnassignRoleReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PartnershipUserId string `protobuf:"bytes,1,opt,name=partnership_user_id,json=partnershipUserId,proto3" json:"partnership_user_id,omitempty"`
	RoleCode          string `protobuf:"bytes,2,opt,name=role_code,json=roleCode,proto3" json:"role_code,omitempty"`
}

func (x *UnassignRoleReq) Reset() {
	*x = UnassignRoleReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UnassignRoleReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UnassignRoleReq) ProtoMessage() {}

func (x *UnassignRoleReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UnassignRoleReq.ProtoReflect.Descriptor instead.
func (*UnassignRoleReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{6}
}

func (x *UnassignRoleReq) GetPartnershipUserId() string {
	if x != nil {
		return x.PartnershipUserId
	}
	return ""
}

func (x *UnassignRoleReq) GetRoleCode() string {
	if x != nil {
		return x.RoleCode
	}
	return ""
}

type UpdateRoleReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Permissions []string `protobuf:"bytes,3,rep,name=permissions,proto3" json:"permissions,omitempty"`
}

func (x *UpdateRoleReq) Reset() {
	*x = UpdateRoleReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateRoleReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateRoleReq) ProtoMessage() {}

func (x *UpdateRoleReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateRoleReq.ProtoReflect.Descriptor instead.
func (*UpdateRoleReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateRoleReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UpdateRoleReq) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateRoleReq) GetPermissions() []string {
	if x != nil {
		return x.Permissions
	}
	return nil
}

type DeleteRoleReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *DeleteRoleReq) Reset() {
	*x = DeleteRoleReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteRoleReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteRoleReq) ProtoMessage() {}

func (x *DeleteRoleReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteRoleReq.ProtoReflect.Descriptor instead.
func (*DeleteRoleReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{8}
}

func (x *DeleteRoleReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type ListAllRoleRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Roles []*Role `protobuf:"bytes,1,rep,name=roles,proto3" json:"roles,omitempty"`
}

func (x *ListAllRoleRes) Reset() {
	*x = ListAllRoleRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListAllRoleRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListAllRoleRes) ProtoMessage() {}

func (x *ListAllRoleRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListAllRoleRes.ProtoReflect.Descriptor instead.
func (*ListAllRoleRes) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{9}
}

func (x *ListAllRoleRes) GetRoles() []*Role {
	if x != nil {
		return x.Roles
	}
	return nil
}

type ListPermissionRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Permission []*Permission `protobuf:"bytes,1,rep,name=permission,proto3" json:"permission,omitempty"`
}

func (x *ListPermissionRes) Reset() {
	*x = ListPermissionRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListPermissionRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListPermissionRes) ProtoMessage() {}

func (x *ListPermissionRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListPermissionRes.ProtoReflect.Descriptor instead.
func (*ListPermissionRes) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{10}
}

func (x *ListPermissionRes) GetPermission() []*Permission {
	if x != nil {
		return x.Permission
	}
	return nil
}

type CreateRoleRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateRoleRes) Reset() {
	*x = CreateRoleRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateRoleRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateRoleRes) ProtoMessage() {}

func (x *CreateRoleRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateRoleRes.ProtoReflect.Descriptor instead.
func (*CreateRoleRes) Descriptor() ([]byte, []int) {
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP(), []int{11}
}

func (x *CreateRoleRes) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_proto_partnership_web_partnership_partnership_role_proto protoreflect.FileDescriptor

var file_proto_partnership_web_partnership_partnership_role_proto_rawDesc = []byte{
	0x0a, 0x38, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73,
	0x68, 0x69, 0x70, 0x2f, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73,
	0x68, 0x69, 0x70, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f,
	0x72, 0x6f, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1b, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x1a, 0x2c, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2f, 0x77, 0x65, 0x62, 0x5f, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x48, 0x0a, 0x0a, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x61, 0x74, 0x68, 0x73, 0x18, 0x02,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x70, 0x61, 0x74, 0x68, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x74,
	0x61, 0x67, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x04, 0x74, 0x61, 0x67, 0x73, 0x22,
	0x60, 0x0a, 0x04, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x70,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x12, 0x0a,
	0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64,
	0x65, 0x22, 0x10, 0x0a, 0x0e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x6f, 0x6c, 0x65,
	0x52, 0x65, 0x71, 0x22, 0x13, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x65, 0x72, 0x6d, 0x69,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x22, 0x45, 0x0a, 0x0d, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a,
	0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x22,
	0x5c, 0x0a, 0x0d, 0x41, 0x73, 0x73, 0x69, 0x67, 0x6e, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71,
	0x12, 0x2e, 0x0a, 0x13, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f,
	0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x55, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x1b, 0x0a, 0x09, 0x72, 0x6f, 0x6c, 0x65, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x72, 0x6f, 0x6c, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x22, 0x5e, 0x0a,
	0x0f, 0x55, 0x6e, 0x61, 0x73, 0x73, 0x69, 0x67, 0x6e, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71,
	0x12, 0x2e, 0x0a, 0x13, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f,
	0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x55, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x1b, 0x0a, 0x09, 0x72, 0x6f, 0x6c, 0x65, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x72, 0x6f, 0x6c, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x22, 0x55, 0x0a,
	0x0d, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x73, 0x22, 0x1f, 0x0a, 0x0d, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x6f,
	0x6c, 0x65, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x49, 0x0a, 0x0e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x6c, 0x6c,
	0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x12, 0x37, 0x0a, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73,
	0x22, 0x5c, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x73, 0x12, 0x47, 0x0a, 0x0a, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x52, 0x0a, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x22, 0x1f,
	0x0a, 0x0d, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x32,
	0xd8, 0x05, 0x0a, 0x16, 0x50, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x52,
	0x6f, 0x6c, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x67, 0x0a, 0x0b, 0x4c, 0x69,
	0x73, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2b, 0x2e, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x6c, 0x6c, 0x52,
	0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x1a, 0x2b, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x6f, 0x6c, 0x65,
	0x52, 0x65, 0x73, 0x12, 0x73, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x6c, 0x6c, 0x50, 0x65,
	0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x2e, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x65, 0x72, 0x6d, 0x69,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x1a, 0x2e, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x50, 0x65, 0x72, 0x6d, 0x69,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x12, 0x64, 0x0a, 0x0a, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2a, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52,
	0x65, 0x71, 0x1a, 0x2a, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70,
	0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70,
	0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x12, 0x5c,
	0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2a, 0x2e, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x52, 0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x1a, 0x22, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x12, 0x5c, 0x0a, 0x0a,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2a, 0x2e, 0x70, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52,
	0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x1a, 0x22, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x12, 0x5c, 0x0a, 0x0a, 0x41, 0x73,
	0x73, 0x69, 0x67, 0x6e, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2a, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x41, 0x73, 0x73, 0x69, 0x67, 0x6e, 0x52, 0x6f, 0x6c,
	0x65, 0x52, 0x65, 0x71, 0x1a, 0x22, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68,
	0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68,
	0x69, 0x70, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x12, 0x60, 0x0a, 0x0c, 0x55, 0x6e, 0x61, 0x73,
	0x73, 0x69, 0x67, 0x6e, 0x52, 0x6f, 0x6c, 0x65, 0x12, 0x2c, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x55, 0x6e, 0x61, 0x73, 0x73, 0x69, 0x67, 0x6e, 0x52,
	0x6f, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x1a, 0x22, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x42, 0x23, 0x5a, 0x21, 0x2e, 0x2f,
	0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x3b,
	0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_partnership_web_partnership_partnership_role_proto_rawDescOnce sync.Once
	file_proto_partnership_web_partnership_partnership_role_proto_rawDescData = file_proto_partnership_web_partnership_partnership_role_proto_rawDesc
)

func file_proto_partnership_web_partnership_partnership_role_proto_rawDescGZIP() []byte {
	file_proto_partnership_web_partnership_partnership_role_proto_rawDescOnce.Do(func() {
		file_proto_partnership_web_partnership_partnership_role_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_partnership_web_partnership_partnership_role_proto_rawDescData)
	})
	return file_proto_partnership_web_partnership_partnership_role_proto_rawDescData
}

var file_proto_partnership_web_partnership_partnership_role_proto_msgTypes = make([]protoimpl.MessageInfo, 12)
var file_proto_partnership_web_partnership_partnership_role_proto_goTypes = []interface{}{
	(*Permission)(nil),        // 0: partnership.web_partnership.Permission
	(*Role)(nil),              // 1: partnership.web_partnership.Role
	(*ListAllRoleReq)(nil),    // 2: partnership.web_partnership.ListAllRoleReq
	(*ListPermissionReq)(nil), // 3: partnership.web_partnership.ListPermissionReq
	(*CreateRoleReq)(nil),     // 4: partnership.web_partnership.CreateRoleReq
	(*AssignRoleReq)(nil),     // 5: partnership.web_partnership.AssignRoleReq
	(*UnassignRoleReq)(nil),   // 6: partnership.web_partnership.UnassignRoleReq
	(*UpdateRoleReq)(nil),     // 7: partnership.web_partnership.UpdateRoleReq
	(*DeleteRoleReq)(nil),     // 8: partnership.web_partnership.DeleteRoleReq
	(*ListAllRoleRes)(nil),    // 9: partnership.web_partnership.ListAllRoleRes
	(*ListPermissionRes)(nil), // 10: partnership.web_partnership.ListPermissionRes
	(*CreateRoleRes)(nil),     // 11: partnership.web_partnership.CreateRoleRes
	(*Empty)(nil),             // 12: partnership.web_partnership.Empty
}
var file_proto_partnership_web_partnership_partnership_role_proto_depIdxs = []int32{
	1,  // 0: partnership.web_partnership.ListAllRoleRes.roles:type_name -> partnership.web_partnership.Role
	0,  // 1: partnership.web_partnership.ListPermissionRes.permission:type_name -> partnership.web_partnership.Permission
	2,  // 2: partnership.web_partnership.PartnershipRoleService.ListAllRole:input_type -> partnership.web_partnership.ListAllRoleReq
	3,  // 3: partnership.web_partnership.PartnershipRoleService.ListAllPermission:input_type -> partnership.web_partnership.ListPermissionReq
	4,  // 4: partnership.web_partnership.PartnershipRoleService.CreateRole:input_type -> partnership.web_partnership.CreateRoleReq
	7,  // 5: partnership.web_partnership.PartnershipRoleService.UpdateRole:input_type -> partnership.web_partnership.UpdateRoleReq
	8,  // 6: partnership.web_partnership.PartnershipRoleService.DeleteRole:input_type -> partnership.web_partnership.DeleteRoleReq
	5,  // 7: partnership.web_partnership.PartnershipRoleService.AssignRole:input_type -> partnership.web_partnership.AssignRoleReq
	6,  // 8: partnership.web_partnership.PartnershipRoleService.UnassignRole:input_type -> partnership.web_partnership.UnassignRoleReq
	9,  // 9: partnership.web_partnership.PartnershipRoleService.ListAllRole:output_type -> partnership.web_partnership.ListAllRoleRes
	10, // 10: partnership.web_partnership.PartnershipRoleService.ListAllPermission:output_type -> partnership.web_partnership.ListPermissionRes
	11, // 11: partnership.web_partnership.PartnershipRoleService.CreateRole:output_type -> partnership.web_partnership.CreateRoleRes
	12, // 12: partnership.web_partnership.PartnershipRoleService.UpdateRole:output_type -> partnership.web_partnership.Empty
	12, // 13: partnership.web_partnership.PartnershipRoleService.DeleteRole:output_type -> partnership.web_partnership.Empty
	12, // 14: partnership.web_partnership.PartnershipRoleService.AssignRole:output_type -> partnership.web_partnership.Empty
	12, // 15: partnership.web_partnership.PartnershipRoleService.UnassignRole:output_type -> partnership.web_partnership.Empty
	9,  // [9:16] is the sub-list for method output_type
	2,  // [2:9] is the sub-list for method input_type
	2,  // [2:2] is the sub-list for extension type_name
	2,  // [2:2] is the sub-list for extension extendee
	0,  // [0:2] is the sub-list for field type_name
}

func init() { file_proto_partnership_web_partnership_partnership_role_proto_init() }
func file_proto_partnership_web_partnership_partnership_role_proto_init() {
	if File_proto_partnership_web_partnership_partnership_role_proto != nil {
		return
	}
	file_proto_partnership_web_partnership_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Permission); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Role); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListAllRoleReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListPermissionReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateRoleReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AssignRoleReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UnassignRoleReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateRoleReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteRoleReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListAllRoleRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListPermissionRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_partnership_web_partnership_partnership_role_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateRoleRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_partnership_web_partnership_partnership_role_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   12,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_partnership_web_partnership_partnership_role_proto_goTypes,
		DependencyIndexes: file_proto_partnership_web_partnership_partnership_role_proto_depIdxs,
		MessageInfos:      file_proto_partnership_web_partnership_partnership_role_proto_msgTypes,
	}.Build()
	File_proto_partnership_web_partnership_partnership_role_proto = out.File
	file_proto_partnership_web_partnership_partnership_role_proto_rawDesc = nil
	file_proto_partnership_web_partnership_partnership_role_proto_goTypes = nil
	file_proto_partnership_web_partnership_partnership_role_proto_depIdxs = nil
}
