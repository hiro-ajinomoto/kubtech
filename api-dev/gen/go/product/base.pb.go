// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: product/base.proto

package product

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

type MediaType int32

const (
	MediaType_INVALID MediaType = 0
	MediaType_IMAGE   MediaType = 1
	MediaType_VIDEO   MediaType = 2
	MediaType_AUDIO   MediaType = 3
	MediaType_URL     MediaType = 4
	MediaType_PDF     MediaType = 5
	MediaType_DOC     MediaType = 6
	MediaType_OTHER   MediaType = 7
)

// Enum value maps for MediaType.
var (
	MediaType_name = map[int32]string{
		0: "INVALID",
		1: "IMAGE",
		2: "VIDEO",
		3: "AUDIO",
		4: "URL",
		5: "PDF",
		6: "DOC",
		7: "OTHER",
	}
	MediaType_value = map[string]int32{
		"INVALID": 0,
		"IMAGE":   1,
		"VIDEO":   2,
		"AUDIO":   3,
		"URL":     4,
		"PDF":     5,
		"DOC":     6,
		"OTHER":   7,
	}
)

func (x MediaType) Enum() *MediaType {
	p := new(MediaType)
	*p = x
	return p
}

func (x MediaType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MediaType) Descriptor() protoreflect.EnumDescriptor {
	return file_product_base_proto_enumTypes[0].Descriptor()
}

func (MediaType) Type() protoreflect.EnumType {
	return &file_product_base_proto_enumTypes[0]
}

func (x MediaType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MediaType.Descriptor instead.
func (MediaType) EnumDescriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{0}
}

type SeatInfoType int32

const (
	SeatInfoType_SeatInfoTypeNone      SeatInfoType = 0
	SeatInfoType_SeatInfoTypeSeat      SeatInfoType = 1
	SeatInfoType_SeatInfoTypeSeatBlock SeatInfoType = 2
)

// Enum value maps for SeatInfoType.
var (
	SeatInfoType_name = map[int32]string{
		0: "SeatInfoTypeNone",
		1: "SeatInfoTypeSeat",
		2: "SeatInfoTypeSeatBlock",
	}
	SeatInfoType_value = map[string]int32{
		"SeatInfoTypeNone":      0,
		"SeatInfoTypeSeat":      1,
		"SeatInfoTypeSeatBlock": 2,
	}
)

func (x SeatInfoType) Enum() *SeatInfoType {
	p := new(SeatInfoType)
	*p = x
	return p
}

func (x SeatInfoType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SeatInfoType) Descriptor() protoreflect.EnumDescriptor {
	return file_product_base_proto_enumTypes[1].Descriptor()
}

func (SeatInfoType) Type() protoreflect.EnumType {
	return &file_product_base_proto_enumTypes[1]
}

func (x SeatInfoType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SeatInfoType.Descriptor instead.
func (SeatInfoType) EnumDescriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{1}
}

type ProductType int32

const (
	ProductType_ProductTypeNone   ProductType = 0
	ProductType_ProductTypeVOD    ProductType = 1
	ProductType_ProductTypeTicket ProductType = 2
)

// Enum value maps for ProductType.
var (
	ProductType_name = map[int32]string{
		0: "ProductTypeNone",
		1: "ProductTypeVOD",
		2: "ProductTypeTicket",
	}
	ProductType_value = map[string]int32{
		"ProductTypeNone":   0,
		"ProductTypeVOD":    1,
		"ProductTypeTicket": 2,
	}
)

func (x ProductType) Enum() *ProductType {
	p := new(ProductType)
	*p = x
	return p
}

func (x ProductType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ProductType) Descriptor() protoreflect.EnumDescriptor {
	return file_product_base_proto_enumTypes[2].Descriptor()
}

func (ProductType) Type() protoreflect.EnumType {
	return &file_product_base_proto_enumTypes[2]
}

func (x ProductType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ProductType.Descriptor instead.
func (ProductType) EnumDescriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{2}
}

// ================================= TYPES ===================================
type Empty struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Empty) Reset() {
	*x = Empty{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_base_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Empty) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Empty) ProtoMessage() {}

func (x *Empty) ProtoReflect() protoreflect.Message {
	mi := &file_product_base_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Empty.ProtoReflect.Descriptor instead.
func (*Empty) Descriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{0}
}

type PaginationReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PageNumber uint32 `protobuf:"varint,1,opt,name=page_number,json=pageNumber,proto3" json:"page_number,omitempty"`
	PageLimit  uint32 `protobuf:"varint,2,opt,name=page_limit,json=pageLimit,proto3" json:"page_limit,omitempty"`
}

func (x *PaginationReq) Reset() {
	*x = PaginationReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_base_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PaginationReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaginationReq) ProtoMessage() {}

func (x *PaginationReq) ProtoReflect() protoreflect.Message {
	mi := &file_product_base_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaginationReq.ProtoReflect.Descriptor instead.
func (*PaginationReq) Descriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{1}
}

func (x *PaginationReq) GetPageNumber() uint32 {
	if x != nil {
		return x.PageNumber
	}
	return 0
}

func (x *PaginationReq) GetPageLimit() uint32 {
	if x != nil {
		return x.PageLimit
	}
	return 0
}

type PaginationRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PageCurrent uint32 `protobuf:"varint,1,opt,name=page_current,json=pageCurrent,proto3" json:"page_current,omitempty"`
	PageLimit   uint32 `protobuf:"varint,2,opt,name=page_limit,json=pageLimit,proto3" json:"page_limit,omitempty"`
	TotalPage   uint32 `protobuf:"varint,3,opt,name=total_page,json=totalPage,proto3" json:"total_page,omitempty"`
	TotalRecord int64  `protobuf:"varint,4,opt,name=total_record,json=totalRecord,proto3" json:"total_record,omitempty"`
}

func (x *PaginationRes) Reset() {
	*x = PaginationRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_base_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PaginationRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PaginationRes) ProtoMessage() {}

func (x *PaginationRes) ProtoReflect() protoreflect.Message {
	mi := &file_product_base_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PaginationRes.ProtoReflect.Descriptor instead.
func (*PaginationRes) Descriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{2}
}

func (x *PaginationRes) GetPageCurrent() uint32 {
	if x != nil {
		return x.PageCurrent
	}
	return 0
}

func (x *PaginationRes) GetPageLimit() uint32 {
	if x != nil {
		return x.PageLimit
	}
	return 0
}

func (x *PaginationRes) GetTotalPage() uint32 {
	if x != nil {
		return x.TotalPage
	}
	return 0
}

func (x *PaginationRes) GetTotalRecord() int64 {
	if x != nil {
		return x.TotalRecord
	}
	return 0
}

type Media struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name      string    `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	MediaType MediaType `protobuf:"varint,2,opt,name=media_type,json=mediaType,proto3,enum=product.MediaType" json:"media_type,omitempty"`
	SourceUrl string    `protobuf:"bytes,3,opt,name=source_url,json=sourceUrl,proto3" json:"source_url,omitempty"`
	Thumbnail string    `protobuf:"bytes,4,opt,name=thumbnail,proto3" json:"thumbnail,omitempty"`
	IsCover   bool      `protobuf:"varint,5,opt,name=is_cover,json=isCover,proto3" json:"is_cover,omitempty"`
}

func (x *Media) Reset() {
	*x = Media{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_base_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Media) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Media) ProtoMessage() {}

func (x *Media) ProtoReflect() protoreflect.Message {
	mi := &file_product_base_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Media.ProtoReflect.Descriptor instead.
func (*Media) Descriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{3}
}

func (x *Media) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Media) GetMediaType() MediaType {
	if x != nil {
		return x.MediaType
	}
	return MediaType_INVALID
}

func (x *Media) GetSourceUrl() string {
	if x != nil {
		return x.SourceUrl
	}
	return ""
}

func (x *Media) GetThumbnail() string {
	if x != nil {
		return x.Thumbnail
	}
	return ""
}

func (x *Media) GetIsCover() bool {
	if x != nil {
		return x.IsCover
	}
	return false
}

type OrderByItem struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Desc  bool   `protobuf:"varint,1,opt,name=desc,proto3" json:"desc,omitempty"`
	Field string `protobuf:"bytes,2,opt,name=field,proto3" json:"field,omitempty"`
}

func (x *OrderByItem) Reset() {
	*x = OrderByItem{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_base_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OrderByItem) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OrderByItem) ProtoMessage() {}

func (x *OrderByItem) ProtoReflect() protoreflect.Message {
	mi := &file_product_base_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OrderByItem.ProtoReflect.Descriptor instead.
func (*OrderByItem) Descriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{4}
}

func (x *OrderByItem) GetDesc() bool {
	if x != nil {
		return x.Desc
	}
	return false
}

func (x *OrderByItem) GetField() string {
	if x != nil {
		return x.Field
	}
	return ""
}

type SeatInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id            string       `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type          SeatInfoType `protobuf:"varint,2,opt,name=type,proto3,enum=product.SeatInfoType" json:"type,omitempty"`
	SeatName      string       `protobuf:"bytes,3,opt,name=seat_name,json=seatName,proto3" json:"seat_name,omitempty"`
	SeatId        string       `protobuf:"bytes,4,opt,name=seat_id,json=seatId,proto3" json:"seat_id,omitempty"`
	SeatBlockId   string       `protobuf:"bytes,5,opt,name=seat_block_id,json=seatBlockId,proto3" json:"seat_block_id,omitempty"`
	SeatBlockName string       `protobuf:"bytes,6,opt,name=seat_block_name,json=seatBlockName,proto3" json:"seat_block_name,omitempty"`
	SeatMapId     string       `protobuf:"bytes,7,opt,name=seat_map_id,json=seatMapId,proto3" json:"seat_map_id,omitempty"`
	ScheduleId    string       `protobuf:"bytes,8,opt,name=schedule_id,json=scheduleId,proto3" json:"schedule_id,omitempty"`
	EventId       string       `protobuf:"bytes,9,opt,name=event_id,json=eventId,proto3" json:"event_id,omitempty"`
}

func (x *SeatInfo) Reset() {
	*x = SeatInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_base_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatInfo) ProtoMessage() {}

func (x *SeatInfo) ProtoReflect() protoreflect.Message {
	mi := &file_product_base_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatInfo.ProtoReflect.Descriptor instead.
func (*SeatInfo) Descriptor() ([]byte, []int) {
	return file_product_base_proto_rawDescGZIP(), []int{5}
}

func (x *SeatInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatInfo) GetType() SeatInfoType {
	if x != nil {
		return x.Type
	}
	return SeatInfoType_SeatInfoTypeNone
}

func (x *SeatInfo) GetSeatName() string {
	if x != nil {
		return x.SeatName
	}
	return ""
}

func (x *SeatInfo) GetSeatId() string {
	if x != nil {
		return x.SeatId
	}
	return ""
}

func (x *SeatInfo) GetSeatBlockId() string {
	if x != nil {
		return x.SeatBlockId
	}
	return ""
}

func (x *SeatInfo) GetSeatBlockName() string {
	if x != nil {
		return x.SeatBlockName
	}
	return ""
}

func (x *SeatInfo) GetSeatMapId() string {
	if x != nil {
		return x.SeatMapId
	}
	return ""
}

func (x *SeatInfo) GetScheduleId() string {
	if x != nil {
		return x.ScheduleId
	}
	return ""
}

func (x *SeatInfo) GetEventId() string {
	if x != nil {
		return x.EventId
	}
	return ""
}

var File_product_base_proto protoreflect.FileDescriptor

var file_product_base_proto_rawDesc = []byte{
	0x0a, 0x12, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x22, 0x07, 0x0a,
	0x05, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x4f, 0x0a, 0x0d, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x12, 0x1f, 0x0a, 0x0b, 0x70, 0x61, 0x67, 0x65, 0x5f,
	0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0a, 0x70, 0x61,
	0x67, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x65,
	0x5f, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x70, 0x61,
	0x67, 0x65, 0x4c, 0x69, 0x6d, 0x69, 0x74, 0x22, 0x93, 0x01, 0x0a, 0x0d, 0x50, 0x61, 0x67, 0x69,
	0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x61, 0x67,
	0x65, 0x5f, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x0b, 0x70, 0x61, 0x67, 0x65, 0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x12, 0x1d, 0x0a, 0x0a,
	0x70, 0x61, 0x67, 0x65, 0x5f, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x09, 0x70, 0x61, 0x67, 0x65, 0x4c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x74,
	0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x09, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x50, 0x61, 0x67, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x5f, 0x72, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x0b, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x52, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x22, 0xa6, 0x01,
	0x0a, 0x05, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x31, 0x0a, 0x0a, 0x6d,
	0x65, 0x64, 0x69, 0x61, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x12, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x54,
	0x79, 0x70, 0x65, 0x52, 0x09, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1d,
	0x0a, 0x0a, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x55, 0x72, 0x6c, 0x12, 0x1c, 0x0a,
	0x09, 0x74, 0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x74, 0x68, 0x75, 0x6d, 0x62, 0x6e, 0x61, 0x69, 0x6c, 0x12, 0x19, 0x0a, 0x08, 0x69,
	0x73, 0x5f, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x69,
	0x73, 0x43, 0x6f, 0x76, 0x65, 0x72, 0x22, 0x37, 0x0a, 0x0b, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x42,
	0x79, 0x49, 0x74, 0x65, 0x6d, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x65, 0x73, 0x63, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x04, 0x64, 0x65, 0x73, 0x63, 0x12, 0x14, 0x0a, 0x05, 0x66, 0x69, 0x65,
	0x6c, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x22,
	0xa3, 0x02, 0x0a, 0x08, 0x53, 0x65, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x29, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x15, 0x2e, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x73, 0x65, 0x61, 0x74, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x73, 0x65, 0x61, 0x74,
	0x4e, 0x61, 0x6d, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x69, 0x64, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x65, 0x61, 0x74, 0x49, 0x64, 0x12, 0x22, 0x0a,
	0x0d, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x73, 0x65, 0x61, 0x74, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49,
	0x64, 0x12, 0x26, 0x0a, 0x0f, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x73, 0x65, 0x61, 0x74,
	0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1e, 0x0a, 0x0b, 0x73, 0x65, 0x61,
	0x74, 0x5f, 0x6d, 0x61, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x73, 0x65, 0x61, 0x74, 0x4d, 0x61, 0x70, 0x49, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x63, 0x68,
	0x65, 0x64, 0x75, 0x6c, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a,
	0x73, 0x63, 0x68, 0x65, 0x64, 0x75, 0x6c, 0x65, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x65, 0x76,
	0x65, 0x6e, 0x74, 0x49, 0x64, 0x2a, 0x5f, 0x0a, 0x09, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x0b, 0x0a, 0x07, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x10, 0x00, 0x12,
	0x09, 0x0a, 0x05, 0x49, 0x4d, 0x41, 0x47, 0x45, 0x10, 0x01, 0x12, 0x09, 0x0a, 0x05, 0x56, 0x49,
	0x44, 0x45, 0x4f, 0x10, 0x02, 0x12, 0x09, 0x0a, 0x05, 0x41, 0x55, 0x44, 0x49, 0x4f, 0x10, 0x03,
	0x12, 0x07, 0x0a, 0x03, 0x55, 0x52, 0x4c, 0x10, 0x04, 0x12, 0x07, 0x0a, 0x03, 0x50, 0x44, 0x46,
	0x10, 0x05, 0x12, 0x07, 0x0a, 0x03, 0x44, 0x4f, 0x43, 0x10, 0x06, 0x12, 0x09, 0x0a, 0x05, 0x4f,
	0x54, 0x48, 0x45, 0x52, 0x10, 0x07, 0x2a, 0x55, 0x0a, 0x0c, 0x53, 0x65, 0x61, 0x74, 0x49, 0x6e,
	0x66, 0x6f, 0x54, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x10, 0x53, 0x65, 0x61, 0x74, 0x49, 0x6e,
	0x66, 0x6f, 0x54, 0x79, 0x70, 0x65, 0x4e, 0x6f, 0x6e, 0x65, 0x10, 0x00, 0x12, 0x14, 0x0a, 0x10,
	0x53, 0x65, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x54, 0x79, 0x70, 0x65, 0x53, 0x65, 0x61, 0x74,
	0x10, 0x01, 0x12, 0x19, 0x0a, 0x15, 0x53, 0x65, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x54, 0x79,
	0x70, 0x65, 0x53, 0x65, 0x61, 0x74, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x10, 0x02, 0x2a, 0x4d, 0x0a,
	0x0b, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x13, 0x0a, 0x0f,
	0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x54, 0x79, 0x70, 0x65, 0x4e, 0x6f, 0x6e, 0x65, 0x10,
	0x00, 0x12, 0x12, 0x0a, 0x0e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x54, 0x79, 0x70, 0x65,
	0x56, 0x4f, 0x44, 0x10, 0x01, 0x12, 0x15, 0x0a, 0x11, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x54, 0x79, 0x70, 0x65, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x10, 0x02, 0x42, 0x3a, 0x5a, 0x38,
	0x67, 0x69, 0x74, 0x6c, 0x61, 0x62, 0x2e, 0x62, 0x63, 0x61, 0x73, 0x69, 0x61, 0x2e, 0x69, 0x6f,
	0x2f, 0x74, 0x68, 0x75, 0x79, 0x6e, 0x67, 0x61, 0x2f, 0x61, 0x70, 0x70, 0x73, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x3b, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_product_base_proto_rawDescOnce sync.Once
	file_product_base_proto_rawDescData = file_product_base_proto_rawDesc
)

func file_product_base_proto_rawDescGZIP() []byte {
	file_product_base_proto_rawDescOnce.Do(func() {
		file_product_base_proto_rawDescData = protoimpl.X.CompressGZIP(file_product_base_proto_rawDescData)
	})
	return file_product_base_proto_rawDescData
}

var file_product_base_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_product_base_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_product_base_proto_goTypes = []interface{}{
	(MediaType)(0),        // 0: product.MediaType
	(SeatInfoType)(0),     // 1: product.SeatInfoType
	(ProductType)(0),      // 2: product.ProductType
	(*Empty)(nil),         // 3: product.Empty
	(*PaginationReq)(nil), // 4: product.PaginationReq
	(*PaginationRes)(nil), // 5: product.PaginationRes
	(*Media)(nil),         // 6: product.Media
	(*OrderByItem)(nil),   // 7: product.OrderByItem
	(*SeatInfo)(nil),      // 8: product.SeatInfo
}
var file_product_base_proto_depIdxs = []int32{
	0, // 0: product.Media.media_type:type_name -> product.MediaType
	1, // 1: product.SeatInfo.type:type_name -> product.SeatInfoType
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_product_base_proto_init() }
func file_product_base_proto_init() {
	if File_product_base_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_product_base_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Empty); i {
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
		file_product_base_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PaginationReq); i {
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
		file_product_base_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PaginationRes); i {
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
		file_product_base_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Media); i {
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
		file_product_base_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OrderByItem); i {
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
		file_product_base_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatInfo); i {
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
			RawDescriptor: file_product_base_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_product_base_proto_goTypes,
		DependencyIndexes: file_product_base_proto_depIdxs,
		EnumInfos:         file_product_base_proto_enumTypes,
		MessageInfos:      file_product_base_proto_msgTypes,
	}.Build()
	File_product_base_proto = out.File
	file_product_base_proto_rawDesc = nil
	file_product_base_proto_goTypes = nil
	file_product_base_proto_depIdxs = nil
}
