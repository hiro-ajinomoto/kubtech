// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: media/mobile/media.proto

package mobile

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

type MediaInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Title        string   `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Intro        string   `protobuf:"bytes,3,opt,name=intro,proto3" json:"intro,omitempty"`
	IsPublic     bool     `protobuf:"varint,4,opt,name=is_public,json=isPublic,proto3" json:"is_public,omitempty"`
	IsPremium    bool     `protobuf:"varint,5,opt,name=is_premium,json=isPremium,proto3" json:"is_premium,omitempty"`
	VideoUrl     string   `protobuf:"bytes,6,opt,name=video_url,json=videoUrl,proto3" json:"video_url,omitempty"`
	ThumbnailUrl string   `protobuf:"bytes,7,opt,name=thumbnail_url,json=thumbnailUrl,proto3" json:"thumbnail_url,omitempty"`
	Hashtags     []string `protobuf:"bytes,8,rep,name=hashtags,proto3" json:"hashtags,omitempty"`
	Slug         string   `protobuf:"bytes,9,opt,name=slug,proto3" json:"slug,omitempty"`
}

func (x *MediaInfo) Reset() {
	*x = MediaInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_mobile_media_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MediaInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MediaInfo) ProtoMessage() {}

func (x *MediaInfo) ProtoReflect() protoreflect.Message {
	mi := &file_media_mobile_media_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MediaInfo.ProtoReflect.Descriptor instead.
func (*MediaInfo) Descriptor() ([]byte, []int) {
	return file_media_mobile_media_proto_rawDescGZIP(), []int{0}
}

func (x *MediaInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *MediaInfo) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *MediaInfo) GetIntro() string {
	if x != nil {
		return x.Intro
	}
	return ""
}

func (x *MediaInfo) GetIsPublic() bool {
	if x != nil {
		return x.IsPublic
	}
	return false
}

func (x *MediaInfo) GetIsPremium() bool {
	if x != nil {
		return x.IsPremium
	}
	return false
}

func (x *MediaInfo) GetVideoUrl() string {
	if x != nil {
		return x.VideoUrl
	}
	return ""
}

func (x *MediaInfo) GetThumbnailUrl() string {
	if x != nil {
		return x.ThumbnailUrl
	}
	return ""
}

func (x *MediaInfo) GetHashtags() []string {
	if x != nil {
		return x.Hashtags
	}
	return nil
}

func (x *MediaInfo) GetSlug() string {
	if x != nil {
		return x.Slug
	}
	return ""
}

type PublicMediaInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Title        string   `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Intro        string   `protobuf:"bytes,3,opt,name=intro,proto3" json:"intro,omitempty"`
	IsPublic     bool     `protobuf:"varint,4,opt,name=is_public,json=isPublic,proto3" json:"is_public,omitempty"`
	IsPremium    bool     `protobuf:"varint,5,opt,name=is_premium,json=isPremium,proto3" json:"is_premium,omitempty"`
	ThumbnailUrl string   `protobuf:"bytes,7,opt,name=thumbnail_url,json=thumbnailUrl,proto3" json:"thumbnail_url,omitempty"`
	Hashtags     []string `protobuf:"bytes,8,rep,name=hashtags,proto3" json:"hashtags,omitempty"`
	Slug         string   `protobuf:"bytes,9,opt,name=slug,proto3" json:"slug,omitempty"`
}

func (x *PublicMediaInfo) Reset() {
	*x = PublicMediaInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_mobile_media_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PublicMediaInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublicMediaInfo) ProtoMessage() {}

func (x *PublicMediaInfo) ProtoReflect() protoreflect.Message {
	mi := &file_media_mobile_media_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublicMediaInfo.ProtoReflect.Descriptor instead.
func (*PublicMediaInfo) Descriptor() ([]byte, []int) {
	return file_media_mobile_media_proto_rawDescGZIP(), []int{1}
}

func (x *PublicMediaInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PublicMediaInfo) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *PublicMediaInfo) GetIntro() string {
	if x != nil {
		return x.Intro
	}
	return ""
}

func (x *PublicMediaInfo) GetIsPublic() bool {
	if x != nil {
		return x.IsPublic
	}
	return false
}

func (x *PublicMediaInfo) GetIsPremium() bool {
	if x != nil {
		return x.IsPremium
	}
	return false
}

func (x *PublicMediaInfo) GetThumbnailUrl() string {
	if x != nil {
		return x.ThumbnailUrl
	}
	return ""
}

func (x *PublicMediaInfo) GetHashtags() []string {
	if x != nil {
		return x.Hashtags
	}
	return nil
}

func (x *PublicMediaInfo) GetSlug() string {
	if x != nil {
		return x.Slug
	}
	return ""
}

type RetrieveMediaReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *RetrieveMediaReq) Reset() {
	*x = RetrieveMediaReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_mobile_media_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RetrieveMediaReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RetrieveMediaReq) ProtoMessage() {}

func (x *RetrieveMediaReq) ProtoReflect() protoreflect.Message {
	mi := &file_media_mobile_media_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RetrieveMediaReq.ProtoReflect.Descriptor instead.
func (*RetrieveMediaReq) Descriptor() ([]byte, []int) {
	return file_media_mobile_media_proto_rawDescGZIP(), []int{2}
}

func (x *RetrieveMediaReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type PublicRetrieveMediaReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id            string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	PartnershipId string `protobuf:"bytes,2,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
}

func (x *PublicRetrieveMediaReq) Reset() {
	*x = PublicRetrieveMediaReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_mobile_media_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PublicRetrieveMediaReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublicRetrieveMediaReq) ProtoMessage() {}

func (x *PublicRetrieveMediaReq) ProtoReflect() protoreflect.Message {
	mi := &file_media_mobile_media_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublicRetrieveMediaReq.ProtoReflect.Descriptor instead.
func (*PublicRetrieveMediaReq) Descriptor() ([]byte, []int) {
	return file_media_mobile_media_proto_rawDescGZIP(), []int{3}
}

func (x *PublicRetrieveMediaReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PublicRetrieveMediaReq) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

type PublicHomepageMediaReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PartnershipId string `protobuf:"bytes,1,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
}

func (x *PublicHomepageMediaReq) Reset() {
	*x = PublicHomepageMediaReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_mobile_media_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PublicHomepageMediaReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublicHomepageMediaReq) ProtoMessage() {}

func (x *PublicHomepageMediaReq) ProtoReflect() protoreflect.Message {
	mi := &file_media_mobile_media_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublicHomepageMediaReq.ProtoReflect.Descriptor instead.
func (*PublicHomepageMediaReq) Descriptor() ([]byte, []int) {
	return file_media_mobile_media_proto_rawDescGZIP(), []int{4}
}

func (x *PublicHomepageMediaReq) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

type RetrieveMediaRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info          *MediaInfo   `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
	RelatedMedias []*MediaInfo `protobuf:"bytes,2,rep,name=related_medias,json=relatedMedias,proto3" json:"related_medias,omitempty"`
}

func (x *RetrieveMediaRes) Reset() {
	*x = RetrieveMediaRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_mobile_media_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RetrieveMediaRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RetrieveMediaRes) ProtoMessage() {}

func (x *RetrieveMediaRes) ProtoReflect() protoreflect.Message {
	mi := &file_media_mobile_media_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RetrieveMediaRes.ProtoReflect.Descriptor instead.
func (*RetrieveMediaRes) Descriptor() ([]byte, []int) {
	return file_media_mobile_media_proto_rawDescGZIP(), []int{5}
}

func (x *RetrieveMediaRes) GetInfo() *MediaInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

func (x *RetrieveMediaRes) GetRelatedMedias() []*MediaInfo {
	if x != nil {
		return x.RelatedMedias
	}
	return nil
}

type PublicHomepageMediaRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Medias []*PublicMediaInfo `protobuf:"bytes,1,rep,name=medias,proto3" json:"medias,omitempty"`
}

func (x *PublicHomepageMediaRes) Reset() {
	*x = PublicHomepageMediaRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_mobile_media_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PublicHomepageMediaRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublicHomepageMediaRes) ProtoMessage() {}

func (x *PublicHomepageMediaRes) ProtoReflect() protoreflect.Message {
	mi := &file_media_mobile_media_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublicHomepageMediaRes.ProtoReflect.Descriptor instead.
func (*PublicHomepageMediaRes) Descriptor() ([]byte, []int) {
	return file_media_mobile_media_proto_rawDescGZIP(), []int{6}
}

func (x *PublicHomepageMediaRes) GetMedias() []*PublicMediaInfo {
	if x != nil {
		return x.Medias
	}
	return nil
}

var File_media_mobile_media_proto protoreflect.FileDescriptor

var file_media_mobile_media_proto_rawDesc = []byte{
	0x0a, 0x18, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2f, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f, 0x6d,
	0x65, 0x64, 0x69, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x6d, 0x65, 0x64, 0x69,
	0x61, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x22, 0xf5, 0x01, 0x0a, 0x09, 0x4d, 0x65, 0x64,
	0x69, 0x61, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x14, 0x0a, 0x05,
	0x69, 0x6e, 0x74, 0x72, 0x6f, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6e, 0x74,
	0x72, 0x6f, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x12,
	0x1d, 0x0a, 0x0a, 0x69, 0x73, 0x5f, 0x70, 0x72, 0x65, 0x6d, 0x69, 0x75, 0x6d, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x09, 0x69, 0x73, 0x50, 0x72, 0x65, 0x6d, 0x69, 0x75, 0x6d, 0x12, 0x1b,
	0x0a, 0x09, 0x76, 0x69, 0x64, 0x65, 0x6f, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x76, 0x69, 0x64, 0x65, 0x6f, 0x55, 0x72, 0x6c, 0x12, 0x23, 0x0a, 0x0d, 0x74,
	0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0c, 0x74, 0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x55, 0x72, 0x6c,
	0x12, 0x1a, 0x0a, 0x08, 0x68, 0x61, 0x73, 0x68, 0x74, 0x61, 0x67, 0x73, 0x18, 0x08, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x08, 0x68, 0x61, 0x73, 0x68, 0x74, 0x61, 0x67, 0x73, 0x12, 0x12, 0x0a, 0x04,
	0x73, 0x6c, 0x75, 0x67, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x6c, 0x75, 0x67,
	0x22, 0xde, 0x01, 0x0a, 0x0f, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4d, 0x65, 0x64, 0x69, 0x61,
	0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x69, 0x6e,
	0x74, 0x72, 0x6f, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x69, 0x6e, 0x74, 0x72, 0x6f,
	0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x12, 0x1d, 0x0a,
	0x0a, 0x69, 0x73, 0x5f, 0x70, 0x72, 0x65, 0x6d, 0x69, 0x75, 0x6d, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x09, 0x69, 0x73, 0x50, 0x72, 0x65, 0x6d, 0x69, 0x75, 0x6d, 0x12, 0x23, 0x0a, 0x0d,
	0x74, 0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x74, 0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x55, 0x72,
	0x6c, 0x12, 0x1a, 0x0a, 0x08, 0x68, 0x61, 0x73, 0x68, 0x74, 0x61, 0x67, 0x73, 0x18, 0x08, 0x20,
	0x03, 0x28, 0x09, 0x52, 0x08, 0x68, 0x61, 0x73, 0x68, 0x74, 0x61, 0x67, 0x73, 0x12, 0x12, 0x0a,
	0x04, 0x73, 0x6c, 0x75, 0x67, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x6c, 0x75,
	0x67, 0x22, 0x22, 0x0a, 0x10, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x4d, 0x65, 0x64,
	0x69, 0x61, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x4f, 0x0a, 0x16, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x52,
	0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52, 0x65, 0x71, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x22, 0x3f, 0x0a, 0x16, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63,
	0x48, 0x6f, 0x6d, 0x65, 0x70, 0x61, 0x67, 0x65, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52, 0x65, 0x71,
	0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65,
	0x72, 0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x22, 0x7f, 0x0a, 0x10, 0x52, 0x65, 0x74, 0x72, 0x69,
	0x65, 0x76, 0x65, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52, 0x65, 0x73, 0x12, 0x2b, 0x0a, 0x04, 0x69,
	0x6e, 0x66, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x6d, 0x65, 0x64, 0x69,
	0x61, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x49, 0x6e,
	0x66, 0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x12, 0x3e, 0x0a, 0x0e, 0x72, 0x65, 0x6c, 0x61,
	0x74, 0x65, 0x64, 0x5f, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e,
	0x4d, 0x65, 0x64, 0x69, 0x61, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0d, 0x72, 0x65, 0x6c, 0x61, 0x74,
	0x65, 0x64, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x73, 0x22, 0x4f, 0x0a, 0x16, 0x50, 0x75, 0x62, 0x6c,
	0x69, 0x63, 0x48, 0x6f, 0x6d, 0x65, 0x70, 0x61, 0x67, 0x65, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52,
	0x65, 0x73, 0x12, 0x35, 0x0a, 0x06, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c,
	0x65, 0x2e, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x49, 0x6e, 0x66,
	0x6f, 0x52, 0x06, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x73, 0x32, 0xbd, 0x01, 0x0a, 0x0c, 0x4d, 0x65,
	0x64, 0x69, 0x61, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x4f, 0x0a, 0x0d, 0x52, 0x65,
	0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x12, 0x1e, 0x2e, 0x6d, 0x65,
	0x64, 0x69, 0x61, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69,
	0x65, 0x76, 0x65, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52, 0x65, 0x71, 0x1a, 0x1e, 0x2e, 0x6d, 0x65,
	0x64, 0x69, 0x61, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69,
	0x65, 0x76, 0x65, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52, 0x65, 0x73, 0x12, 0x5c, 0x0a, 0x0e, 0x50,
	0x75, 0x62, 0x6c, 0x69, 0x63, 0x48, 0x6f, 0x6d, 0x65, 0x70, 0x61, 0x67, 0x65, 0x12, 0x24, 0x2e,
	0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x50, 0x75, 0x62,
	0x6c, 0x69, 0x63, 0x48, 0x6f, 0x6d, 0x65, 0x70, 0x61, 0x67, 0x65, 0x4d, 0x65, 0x64, 0x69, 0x61,
	0x52, 0x65, 0x71, 0x1a, 0x24, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x6d, 0x6f, 0x62, 0x69,
	0x6c, 0x65, 0x2e, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x48, 0x6f, 0x6d, 0x65, 0x70, 0x61, 0x67,
	0x65, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52, 0x65, 0x73, 0x42, 0x3e, 0x5a, 0x3c, 0x67, 0x69, 0x74,
	0x6c, 0x61, 0x62, 0x2e, 0x62, 0x63, 0x61, 0x73, 0x69, 0x61, 0x2e, 0x69, 0x6f, 0x2f, 0x74, 0x68,
	0x75, 0x79, 0x6e, 0x67, 0x61, 0x2f, 0x61, 0x70, 0x70, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67,
	0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2f, 0x6d, 0x6f, 0x62, 0x69,
	0x6c, 0x65, 0x3b, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_media_mobile_media_proto_rawDescOnce sync.Once
	file_media_mobile_media_proto_rawDescData = file_media_mobile_media_proto_rawDesc
)

func file_media_mobile_media_proto_rawDescGZIP() []byte {
	file_media_mobile_media_proto_rawDescOnce.Do(func() {
		file_media_mobile_media_proto_rawDescData = protoimpl.X.CompressGZIP(file_media_mobile_media_proto_rawDescData)
	})
	return file_media_mobile_media_proto_rawDescData
}

var file_media_mobile_media_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_media_mobile_media_proto_goTypes = []interface{}{
	(*MediaInfo)(nil),              // 0: media.mobile.MediaInfo
	(*PublicMediaInfo)(nil),        // 1: media.mobile.PublicMediaInfo
	(*RetrieveMediaReq)(nil),       // 2: media.mobile.RetrieveMediaReq
	(*PublicRetrieveMediaReq)(nil), // 3: media.mobile.PublicRetrieveMediaReq
	(*PublicHomepageMediaReq)(nil), // 4: media.mobile.PublicHomepageMediaReq
	(*RetrieveMediaRes)(nil),       // 5: media.mobile.RetrieveMediaRes
	(*PublicHomepageMediaRes)(nil), // 6: media.mobile.PublicHomepageMediaRes
}
var file_media_mobile_media_proto_depIdxs = []int32{
	0, // 0: media.mobile.RetrieveMediaRes.info:type_name -> media.mobile.MediaInfo
	0, // 1: media.mobile.RetrieveMediaRes.related_medias:type_name -> media.mobile.MediaInfo
	1, // 2: media.mobile.PublicHomepageMediaRes.medias:type_name -> media.mobile.PublicMediaInfo
	2, // 3: media.mobile.MediaService.RetrieveMedia:input_type -> media.mobile.RetrieveMediaReq
	4, // 4: media.mobile.MediaService.PublicHomepage:input_type -> media.mobile.PublicHomepageMediaReq
	5, // 5: media.mobile.MediaService.RetrieveMedia:output_type -> media.mobile.RetrieveMediaRes
	6, // 6: media.mobile.MediaService.PublicHomepage:output_type -> media.mobile.PublicHomepageMediaRes
	5, // [5:7] is the sub-list for method output_type
	3, // [3:5] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_media_mobile_media_proto_init() }
func file_media_mobile_media_proto_init() {
	if File_media_mobile_media_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_media_mobile_media_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MediaInfo); i {
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
		file_media_mobile_media_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PublicMediaInfo); i {
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
		file_media_mobile_media_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RetrieveMediaReq); i {
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
		file_media_mobile_media_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PublicRetrieveMediaReq); i {
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
		file_media_mobile_media_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PublicHomepageMediaReq); i {
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
		file_media_mobile_media_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RetrieveMediaRes); i {
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
		file_media_mobile_media_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PublicHomepageMediaRes); i {
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
			RawDescriptor: file_media_mobile_media_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_media_mobile_media_proto_goTypes,
		DependencyIndexes: file_media_mobile_media_proto_depIdxs,
		MessageInfos:      file_media_mobile_media_proto_msgTypes,
	}.Build()
	File_media_mobile_media_proto = out.File
	file_media_mobile_media_proto_rawDesc = nil
	file_media_mobile_media_proto_goTypes = nil
	file_media_mobile_media_proto_depIdxs = nil
}