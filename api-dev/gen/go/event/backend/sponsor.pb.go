// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: event/backend/sponsor.proto

package backend

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

type SponsorBasicInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Cover       string `protobuf:"bytes,2,opt,name=cover,proto3" json:"cover,omitempty"`
	Avatar      string `protobuf:"bytes,3,opt,name=avatar,proto3" json:"avatar,omitempty"`
	Intro       string `protobuf:"bytes,4,opt,name=intro,proto3" json:"intro,omitempty"`
	ContactUrls []*Url `protobuf:"bytes,5,rep,name=contact_urls,json=contactUrls,proto3" json:"contact_urls,omitempty"`
}

func (x *SponsorBasicInfo) Reset() {
	*x = SponsorBasicInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_sponsor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SponsorBasicInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SponsorBasicInfo) ProtoMessage() {}

func (x *SponsorBasicInfo) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_sponsor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SponsorBasicInfo.ProtoReflect.Descriptor instead.
func (*SponsorBasicInfo) Descriptor() ([]byte, []int) {
	return file_event_backend_sponsor_proto_rawDescGZIP(), []int{0}
}

func (x *SponsorBasicInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SponsorBasicInfo) GetCover() string {
	if x != nil {
		return x.Cover
	}
	return ""
}

func (x *SponsorBasicInfo) GetAvatar() string {
	if x != nil {
		return x.Avatar
	}
	return ""
}

func (x *SponsorBasicInfo) GetIntro() string {
	if x != nil {
		return x.Intro
	}
	return ""
}

func (x *SponsorBasicInfo) GetContactUrls() []*Url {
	if x != nil {
		return x.ContactUrls
	}
	return nil
}

type SponsorInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Cover       string `protobuf:"bytes,3,opt,name=cover,proto3" json:"cover,omitempty"`
	Avatar      string `protobuf:"bytes,4,opt,name=avatar,proto3" json:"avatar,omitempty"`
	Intro       string `protobuf:"bytes,5,opt,name=intro,proto3" json:"intro,omitempty"`
	ContactUrls []*Url `protobuf:"bytes,6,rep,name=contact_urls,json=contactUrls,proto3" json:"contact_urls,omitempty"`
	CreatedAt   int64  `protobuf:"varint,7,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt   int64  `protobuf:"varint,8,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	CreatedBy   string `protobuf:"bytes,9,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedBy   string `protobuf:"bytes,10,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
}

func (x *SponsorInfo) Reset() {
	*x = SponsorInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_sponsor_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SponsorInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SponsorInfo) ProtoMessage() {}

func (x *SponsorInfo) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_sponsor_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SponsorInfo.ProtoReflect.Descriptor instead.
func (*SponsorInfo) Descriptor() ([]byte, []int) {
	return file_event_backend_sponsor_proto_rawDescGZIP(), []int{1}
}

func (x *SponsorInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SponsorInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SponsorInfo) GetCover() string {
	if x != nil {
		return x.Cover
	}
	return ""
}

func (x *SponsorInfo) GetAvatar() string {
	if x != nil {
		return x.Avatar
	}
	return ""
}

func (x *SponsorInfo) GetIntro() string {
	if x != nil {
		return x.Intro
	}
	return ""
}

func (x *SponsorInfo) GetContactUrls() []*Url {
	if x != nil {
		return x.ContactUrls
	}
	return nil
}

func (x *SponsorInfo) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *SponsorInfo) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *SponsorInfo) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *SponsorInfo) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

type SponsorLevel struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Icon string `protobuf:"bytes,2,opt,name=icon,proto3" json:"icon,omitempty"`
}

func (x *SponsorLevel) Reset() {
	*x = SponsorLevel{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_sponsor_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SponsorLevel) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SponsorLevel) ProtoMessage() {}

func (x *SponsorLevel) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_sponsor_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SponsorLevel.ProtoReflect.Descriptor instead.
func (*SponsorLevel) Descriptor() ([]byte, []int) {
	return file_event_backend_sponsor_proto_rawDescGZIP(), []int{2}
}

func (x *SponsorLevel) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SponsorLevel) GetIcon() string {
	if x != nil {
		return x.Icon
	}
	return ""
}

type GetSponsorDetailReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetSponsorDetailReq) Reset() {
	*x = GetSponsorDetailReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_sponsor_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetSponsorDetailReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSponsorDetailReq) ProtoMessage() {}

func (x *GetSponsorDetailReq) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_sponsor_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSponsorDetailReq.ProtoReflect.Descriptor instead.
func (*GetSponsorDetailReq) Descriptor() ([]byte, []int) {
	return file_event_backend_sponsor_proto_rawDescGZIP(), []int{3}
}

func (x *GetSponsorDetailReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type ListSponsorByIdsReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ids []string `protobuf:"bytes,1,rep,name=ids,proto3" json:"ids,omitempty"`
}

func (x *ListSponsorByIdsReq) Reset() {
	*x = ListSponsorByIdsReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_sponsor_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListSponsorByIdsReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSponsorByIdsReq) ProtoMessage() {}

func (x *ListSponsorByIdsReq) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_sponsor_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSponsorByIdsReq.ProtoReflect.Descriptor instead.
func (*ListSponsorByIdsReq) Descriptor() ([]byte, []int) {
	return file_event_backend_sponsor_proto_rawDescGZIP(), []int{4}
}

func (x *ListSponsorByIdsReq) GetIds() []string {
	if x != nil {
		return x.Ids
	}
	return nil
}

type GetSponsorDetailRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string            `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Info      *SponsorBasicInfo `protobuf:"bytes,2,opt,name=info,proto3" json:"info,omitempty"`
	CreatedAt int64             `protobuf:"varint,3,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt int64             `protobuf:"varint,4,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	CreatedBy string            `protobuf:"bytes,5,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedBy string            `protobuf:"bytes,6,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
}

func (x *GetSponsorDetailRes) Reset() {
	*x = GetSponsorDetailRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_sponsor_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetSponsorDetailRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSponsorDetailRes) ProtoMessage() {}

func (x *GetSponsorDetailRes) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_sponsor_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSponsorDetailRes.ProtoReflect.Descriptor instead.
func (*GetSponsorDetailRes) Descriptor() ([]byte, []int) {
	return file_event_backend_sponsor_proto_rawDescGZIP(), []int{5}
}

func (x *GetSponsorDetailRes) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GetSponsorDetailRes) GetInfo() *SponsorBasicInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

func (x *GetSponsorDetailRes) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *GetSponsorDetailRes) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *GetSponsorDetailRes) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *GetSponsorDetailRes) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

type ListSponsorByIdsRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Items []*SponsorInfo `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty"`
}

func (x *ListSponsorByIdsRes) Reset() {
	*x = ListSponsorByIdsRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_sponsor_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListSponsorByIdsRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSponsorByIdsRes) ProtoMessage() {}

func (x *ListSponsorByIdsRes) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_sponsor_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSponsorByIdsRes.ProtoReflect.Descriptor instead.
func (*ListSponsorByIdsRes) Descriptor() ([]byte, []int) {
	return file_event_backend_sponsor_proto_rawDescGZIP(), []int{6}
}

func (x *ListSponsorByIdsRes) GetItems() []*SponsorInfo {
	if x != nil {
		return x.Items
	}
	return nil
}

var File_event_backend_sponsor_proto protoreflect.FileDescriptor

var file_event_backend_sponsor_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x1a, 0x18, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x62, 0x61, 0x73, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa1, 0x01, 0x0a, 0x10, 0x53, 0x70, 0x6f, 0x6e, 0x73,
	0x6f, 0x72, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x14, 0x0a, 0x05, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x63, 0x6f, 0x76, 0x65, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x12, 0x14, 0x0a,
	0x05, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6e,
	0x74, 0x72, 0x6f, 0x12, 0x35, 0x0a, 0x0c, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x5f, 0x75,
	0x72, 0x6c, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x65, 0x76, 0x65, 0x6e,
	0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x55, 0x72, 0x6c, 0x52, 0x0b, 0x63,
	0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x55, 0x72, 0x6c, 0x73, 0x22, 0xa8, 0x02, 0x0a, 0x0b, 0x53,
	0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x63,
	0x6f, 0x76, 0x65, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x12, 0x14, 0x0a, 0x05,
	0x69, 0x6e, 0x74, 0x72, 0x6f, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6e, 0x74,
	0x72, 0x6f, 0x12, 0x35, 0x0a, 0x0c, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x5f, 0x75, 0x72,
	0x6c, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74,
	0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x55, 0x72, 0x6c, 0x52, 0x0b, 0x63, 0x6f,
	0x6e, 0x74, 0x61, 0x63, 0x74, 0x55, 0x72, 0x6c, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x5f, 0x62, 0x79, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x64, 0x42, 0x79, 0x22, 0x36, 0x0a, 0x0c, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72,
	0x4c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x69, 0x63, 0x6f,
	0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x22, 0x25, 0x0a,
	0x13, 0x47, 0x65, 0x74, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x44, 0x65, 0x74, 0x61, 0x69,
	0x6c, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x22, 0x27, 0x0a, 0x13, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x70, 0x6f, 0x6e,
	0x73, 0x6f, 0x72, 0x42, 0x79, 0x49, 0x64, 0x73, 0x52, 0x65, 0x71, 0x12, 0x10, 0x0a, 0x03, 0x69,
	0x64, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x03, 0x69, 0x64, 0x73, 0x22, 0xd6, 0x01,
	0x0a, 0x13, 0x47, 0x65, 0x74, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x44, 0x65, 0x74, 0x61,
	0x69, 0x6c, 0x52, 0x65, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x33, 0x0a, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b,
	0x65, 0x6e, 0x64, 0x2e, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x42, 0x61, 0x73, 0x69, 0x63,
	0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x22, 0x47, 0x0a, 0x13, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x70,
	0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x42, 0x79, 0x49, 0x64, 0x73, 0x52, 0x65, 0x73, 0x12, 0x30, 0x0a,
	0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x70, 0x6f,
	0x6e, 0x73, 0x6f, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x32,
	0xc8, 0x01, 0x0a, 0x0e, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0x5a, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72,
	0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x22, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62,
	0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f,
	0x72, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x71, 0x1a, 0x22, 0x2e, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x70,
	0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x73, 0x12, 0x5a,
	0x0a, 0x10, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x42, 0x79, 0x49,
	0x64, 0x73, 0x12, 0x22, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65,
	0x6e, 0x64, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x70, 0x6f, 0x6e, 0x73, 0x6f, 0x72, 0x42, 0x79,
	0x49, 0x64, 0x73, 0x52, 0x65, 0x71, 0x1a, 0x22, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62,
	0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x70, 0x6f, 0x6e, 0x73,
	0x6f, 0x72, 0x42, 0x79, 0x49, 0x64, 0x73, 0x52, 0x65, 0x73, 0x42, 0x40, 0x5a, 0x3e, 0x67, 0x69,
	0x74, 0x6c, 0x61, 0x62, 0x2e, 0x62, 0x63, 0x61, 0x73, 0x69, 0x61, 0x2e, 0x69, 0x6f, 0x2f, 0x74,
	0x68, 0x75, 0x79, 0x6e, 0x67, 0x61, 0x2f, 0x61, 0x70, 0x70, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2f, 0x62, 0x61, 0x63,
	0x6b, 0x65, 0x6e, 0x64, 0x3b, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_event_backend_sponsor_proto_rawDescOnce sync.Once
	file_event_backend_sponsor_proto_rawDescData = file_event_backend_sponsor_proto_rawDesc
)

func file_event_backend_sponsor_proto_rawDescGZIP() []byte {
	file_event_backend_sponsor_proto_rawDescOnce.Do(func() {
		file_event_backend_sponsor_proto_rawDescData = protoimpl.X.CompressGZIP(file_event_backend_sponsor_proto_rawDescData)
	})
	return file_event_backend_sponsor_proto_rawDescData
}

var file_event_backend_sponsor_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_event_backend_sponsor_proto_goTypes = []interface{}{
	(*SponsorBasicInfo)(nil),    // 0: event.backend.SponsorBasicInfo
	(*SponsorInfo)(nil),         // 1: event.backend.SponsorInfo
	(*SponsorLevel)(nil),        // 2: event.backend.SponsorLevel
	(*GetSponsorDetailReq)(nil), // 3: event.backend.GetSponsorDetailReq
	(*ListSponsorByIdsReq)(nil), // 4: event.backend.ListSponsorByIdsReq
	(*GetSponsorDetailRes)(nil), // 5: event.backend.GetSponsorDetailRes
	(*ListSponsorByIdsRes)(nil), // 6: event.backend.ListSponsorByIdsRes
	(*Url)(nil),                 // 7: event.backend.Url
}
var file_event_backend_sponsor_proto_depIdxs = []int32{
	7, // 0: event.backend.SponsorBasicInfo.contact_urls:type_name -> event.backend.Url
	7, // 1: event.backend.SponsorInfo.contact_urls:type_name -> event.backend.Url
	0, // 2: event.backend.GetSponsorDetailRes.info:type_name -> event.backend.SponsorBasicInfo
	1, // 3: event.backend.ListSponsorByIdsRes.items:type_name -> event.backend.SponsorInfo
	3, // 4: event.backend.SponsorService.GetSponsorDetail:input_type -> event.backend.GetSponsorDetailReq
	4, // 5: event.backend.SponsorService.ListSponsorByIds:input_type -> event.backend.ListSponsorByIdsReq
	5, // 6: event.backend.SponsorService.GetSponsorDetail:output_type -> event.backend.GetSponsorDetailRes
	6, // 7: event.backend.SponsorService.ListSponsorByIds:output_type -> event.backend.ListSponsorByIdsRes
	6, // [6:8] is the sub-list for method output_type
	4, // [4:6] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_event_backend_sponsor_proto_init() }
func file_event_backend_sponsor_proto_init() {
	if File_event_backend_sponsor_proto != nil {
		return
	}
	file_event_backend_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_event_backend_sponsor_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SponsorBasicInfo); i {
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
		file_event_backend_sponsor_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SponsorInfo); i {
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
		file_event_backend_sponsor_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SponsorLevel); i {
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
		file_event_backend_sponsor_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetSponsorDetailReq); i {
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
		file_event_backend_sponsor_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListSponsorByIdsReq); i {
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
		file_event_backend_sponsor_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetSponsorDetailRes); i {
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
		file_event_backend_sponsor_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListSponsorByIdsRes); i {
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
			RawDescriptor: file_event_backend_sponsor_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_event_backend_sponsor_proto_goTypes,
		DependencyIndexes: file_event_backend_sponsor_proto_depIdxs,
		MessageInfos:      file_event_backend_sponsor_proto_msgTypes,
	}.Build()
	File_event_backend_sponsor_proto = out.File
	file_event_backend_sponsor_proto_rawDesc = nil
	file_event_backend_sponsor_proto_goTypes = nil
	file_event_backend_sponsor_proto_depIdxs = nil
}