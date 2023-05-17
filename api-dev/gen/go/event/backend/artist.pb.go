// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: event/backend/artist.proto

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

// ================================= TYPES ===================================
type ArtistBasicInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Avatar      string   `protobuf:"bytes,2,opt,name=avatar,proto3" json:"avatar,omitempty"`
	Roles       []string `protobuf:"bytes,3,rep,name=roles,proto3" json:"roles,omitempty"`
	Cover       string   `protobuf:"bytes,4,opt,name=cover,proto3" json:"cover,omitempty"`
	ContactUrls []*Url   `protobuf:"bytes,5,rep,name=contact_urls,json=contactUrls,proto3" json:"contact_urls,omitempty"`
	Intro       string   `protobuf:"bytes,6,opt,name=intro,proto3" json:"intro,omitempty"`
}

func (x *ArtistBasicInfo) Reset() {
	*x = ArtistBasicInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_artist_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ArtistBasicInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ArtistBasicInfo) ProtoMessage() {}

func (x *ArtistBasicInfo) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_artist_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ArtistBasicInfo.ProtoReflect.Descriptor instead.
func (*ArtistBasicInfo) Descriptor() ([]byte, []int) {
	return file_event_backend_artist_proto_rawDescGZIP(), []int{0}
}

func (x *ArtistBasicInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ArtistBasicInfo) GetAvatar() string {
	if x != nil {
		return x.Avatar
	}
	return ""
}

func (x *ArtistBasicInfo) GetRoles() []string {
	if x != nil {
		return x.Roles
	}
	return nil
}

func (x *ArtistBasicInfo) GetCover() string {
	if x != nil {
		return x.Cover
	}
	return ""
}

func (x *ArtistBasicInfo) GetContactUrls() []*Url {
	if x != nil {
		return x.ContactUrls
	}
	return nil
}

func (x *ArtistBasicInfo) GetIntro() string {
	if x != nil {
		return x.Intro
	}
	return ""
}

type ArtistListInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Avatar      string   `protobuf:"bytes,3,opt,name=avatar,proto3" json:"avatar,omitempty"`
	Roles       []string `protobuf:"bytes,4,rep,name=roles,proto3" json:"roles,omitempty"`
	CreatedAt   int64    `protobuf:"varint,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt   int64    `protobuf:"varint,6,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	CreatedBy   string   `protobuf:"bytes,7,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedBy   string   `protobuf:"bytes,8,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
	Intro       string   `protobuf:"bytes,9,opt,name=intro,proto3" json:"intro,omitempty"`
	Cover       string   `protobuf:"bytes,10,opt,name=cover,proto3" json:"cover,omitempty"`
	ContactUrls []*Url   `protobuf:"bytes,11,rep,name=contact_urls,json=contactUrls,proto3" json:"contact_urls,omitempty"`
}

func (x *ArtistListInfo) Reset() {
	*x = ArtistListInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_artist_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ArtistListInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ArtistListInfo) ProtoMessage() {}

func (x *ArtistListInfo) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_artist_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ArtistListInfo.ProtoReflect.Descriptor instead.
func (*ArtistListInfo) Descriptor() ([]byte, []int) {
	return file_event_backend_artist_proto_rawDescGZIP(), []int{1}
}

func (x *ArtistListInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ArtistListInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ArtistListInfo) GetAvatar() string {
	if x != nil {
		return x.Avatar
	}
	return ""
}

func (x *ArtistListInfo) GetRoles() []string {
	if x != nil {
		return x.Roles
	}
	return nil
}

func (x *ArtistListInfo) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *ArtistListInfo) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *ArtistListInfo) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *ArtistListInfo) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

func (x *ArtistListInfo) GetIntro() string {
	if x != nil {
		return x.Intro
	}
	return ""
}

func (x *ArtistListInfo) GetCover() string {
	if x != nil {
		return x.Cover
	}
	return ""
}

func (x *ArtistListInfo) GetContactUrls() []*Url {
	if x != nil {
		return x.ContactUrls
	}
	return nil
}

type ListArtistIdsReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ids []string `protobuf:"bytes,1,rep,name=ids,proto3" json:"ids,omitempty"`
}

func (x *ListArtistIdsReq) Reset() {
	*x = ListArtistIdsReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_artist_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListArtistIdsReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListArtistIdsReq) ProtoMessage() {}

func (x *ListArtistIdsReq) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_artist_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListArtistIdsReq.ProtoReflect.Descriptor instead.
func (*ListArtistIdsReq) Descriptor() ([]byte, []int) {
	return file_event_backend_artist_proto_rawDescGZIP(), []int{2}
}

func (x *ListArtistIdsReq) GetIds() []string {
	if x != nil {
		return x.Ids
	}
	return nil
}

type ListArtistIdsRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info []*ArtistListInfo `protobuf:"bytes,1,rep,name=info,proto3" json:"info,omitempty"`
}

func (x *ListArtistIdsRes) Reset() {
	*x = ListArtistIdsRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_event_backend_artist_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListArtistIdsRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListArtistIdsRes) ProtoMessage() {}

func (x *ListArtistIdsRes) ProtoReflect() protoreflect.Message {
	mi := &file_event_backend_artist_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListArtistIdsRes.ProtoReflect.Descriptor instead.
func (*ListArtistIdsRes) Descriptor() ([]byte, []int) {
	return file_event_backend_artist_proto_rawDescGZIP(), []int{3}
}

func (x *ListArtistIdsRes) GetInfo() []*ArtistListInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

var File_event_backend_artist_proto protoreflect.FileDescriptor

var file_event_backend_artist_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f,
	0x61, 0x72, 0x74, 0x69, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x1a, 0x18, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xb6, 0x01, 0x0a, 0x0f, 0x41, 0x72, 0x74, 0x69, 0x73, 0x74,
	0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61,
	0x76, 0x61, 0x74, 0x61, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x18, 0x03,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x63,
	0x6f, 0x76, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x63, 0x6f, 0x76, 0x65,
	0x72, 0x12, 0x35, 0x0a, 0x0c, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x5f, 0x75, 0x72, 0x6c,
	0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e,
	0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x55, 0x72, 0x6c, 0x52, 0x0b, 0x63, 0x6f, 0x6e,
	0x74, 0x61, 0x63, 0x74, 0x55, 0x72, 0x6c, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x6e, 0x74, 0x72,
	0x6f, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x22, 0xc1,
	0x02, 0x0a, 0x0e, 0x41, 0x72, 0x74, 0x69, 0x73, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x49, 0x6e, 0x66,
	0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x12, 0x14, 0x0a,
	0x05, 0x72, 0x6f, 0x6c, 0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x72, 0x6f,
	0x6c, 0x65, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61,
	0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79,
	0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x08,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x12,
	0x14, 0x0a, 0x05, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x69, 0x6e, 0x74, 0x72, 0x6f, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x18, 0x0a,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x12, 0x35, 0x0a, 0x0c, 0x63,
	0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x5f, 0x75, 0x72, 0x6c, 0x73, 0x18, 0x0b, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x12, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x2e, 0x55, 0x72, 0x6c, 0x52, 0x0b, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x55, 0x72,
	0x6c, 0x73, 0x22, 0x24, 0x0a, 0x10, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x72, 0x74, 0x69, 0x73, 0x74,
	0x49, 0x64, 0x73, 0x52, 0x65, 0x71, 0x12, 0x10, 0x0a, 0x03, 0x69, 0x64, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x09, 0x52, 0x03, 0x69, 0x64, 0x73, 0x22, 0x45, 0x0a, 0x10, 0x4c, 0x69, 0x73, 0x74,
	0x41, 0x72, 0x74, 0x69, 0x73, 0x74, 0x49, 0x64, 0x73, 0x52, 0x65, 0x73, 0x12, 0x31, 0x0a, 0x04,
	0x69, 0x6e, 0x66, 0x6f, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x41, 0x72, 0x74, 0x69, 0x73,
	0x74, 0x4c, 0x69, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x32,
	0x62, 0x0a, 0x0d, 0x41, 0x72, 0x74, 0x69, 0x73, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x51, 0x0a, 0x0d, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x72, 0x74, 0x69, 0x73, 0x74, 0x49, 0x64,
	0x73, 0x12, 0x1f, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x72, 0x74, 0x69, 0x73, 0x74, 0x49, 0x64, 0x73, 0x52,
	0x65, 0x71, 0x1a, 0x1f, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65,
	0x6e, 0x64, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x72, 0x74, 0x69, 0x73, 0x74, 0x49, 0x64, 0x73,
	0x52, 0x65, 0x73, 0x42, 0x40, 0x5a, 0x3e, 0x67, 0x69, 0x74, 0x6c, 0x61, 0x62, 0x2e, 0x62, 0x63,
	0x61, 0x73, 0x69, 0x61, 0x2e, 0x69, 0x6f, 0x2f, 0x74, 0x68, 0x75, 0x79, 0x6e, 0x67, 0x61, 0x2f,
	0x61, 0x70, 0x70, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x3b, 0x62, 0x61,
	0x63, 0x6b, 0x65, 0x6e, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_event_backend_artist_proto_rawDescOnce sync.Once
	file_event_backend_artist_proto_rawDescData = file_event_backend_artist_proto_rawDesc
)

func file_event_backend_artist_proto_rawDescGZIP() []byte {
	file_event_backend_artist_proto_rawDescOnce.Do(func() {
		file_event_backend_artist_proto_rawDescData = protoimpl.X.CompressGZIP(file_event_backend_artist_proto_rawDescData)
	})
	return file_event_backend_artist_proto_rawDescData
}

var file_event_backend_artist_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_event_backend_artist_proto_goTypes = []interface{}{
	(*ArtistBasicInfo)(nil),  // 0: event.backend.ArtistBasicInfo
	(*ArtistListInfo)(nil),   // 1: event.backend.ArtistListInfo
	(*ListArtistIdsReq)(nil), // 2: event.backend.ListArtistIdsReq
	(*ListArtistIdsRes)(nil), // 3: event.backend.ListArtistIdsRes
	(*Url)(nil),              // 4: event.backend.Url
}
var file_event_backend_artist_proto_depIdxs = []int32{
	4, // 0: event.backend.ArtistBasicInfo.contact_urls:type_name -> event.backend.Url
	4, // 1: event.backend.ArtistListInfo.contact_urls:type_name -> event.backend.Url
	1, // 2: event.backend.ListArtistIdsRes.info:type_name -> event.backend.ArtistListInfo
	2, // 3: event.backend.ArtistService.ListArtistIds:input_type -> event.backend.ListArtistIdsReq
	3, // 4: event.backend.ArtistService.ListArtistIds:output_type -> event.backend.ListArtistIdsRes
	4, // [4:5] is the sub-list for method output_type
	3, // [3:4] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_event_backend_artist_proto_init() }
func file_event_backend_artist_proto_init() {
	if File_event_backend_artist_proto != nil {
		return
	}
	file_event_backend_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_event_backend_artist_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ArtistBasicInfo); i {
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
		file_event_backend_artist_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ArtistListInfo); i {
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
		file_event_backend_artist_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListArtistIdsReq); i {
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
		file_event_backend_artist_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListArtistIdsRes); i {
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
			RawDescriptor: file_event_backend_artist_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_event_backend_artist_proto_goTypes,
		DependencyIndexes: file_event_backend_artist_proto_depIdxs,
		MessageInfos:      file_event_backend_artist_proto_msgTypes,
	}.Build()
	File_event_backend_artist_proto = out.File
	file_event_backend_artist_proto_rawDesc = nil
	file_event_backend_artist_proto_goTypes = nil
	file_event_backend_artist_proto_depIdxs = nil
}
