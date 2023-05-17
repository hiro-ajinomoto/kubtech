// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/product/mobile/vod.proto

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

type FilterStatus int32

const (
	FilterStatus_FILTER_STATUS_INVALID FilterStatus = 0
	FilterStatus_FILTER_STATUS_HOT     FilterStatus = 1
	FilterStatus_FILTER_STATUS_NEW     FilterStatus = 2
)

// Enum value maps for FilterStatus.
var (
	FilterStatus_name = map[int32]string{
		0: "FILTER_STATUS_INVALID",
		1: "FILTER_STATUS_HOT",
		2: "FILTER_STATUS_NEW",
	}
	FilterStatus_value = map[string]int32{
		"FILTER_STATUS_INVALID": 0,
		"FILTER_STATUS_HOT":     1,
		"FILTER_STATUS_NEW":     2,
	}
)

func (x FilterStatus) Enum() *FilterStatus {
	p := new(FilterStatus)
	*p = x
	return p
}

func (x FilterStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (FilterStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_product_mobile_vod_proto_enumTypes[0].Descriptor()
}

func (FilterStatus) Type() protoreflect.EnumType {
	return &file_proto_product_mobile_vod_proto_enumTypes[0]
}

func (x FilterStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use FilterStatus.Descriptor instead.
func (FilterStatus) EnumDescriptor() ([]byte, []int) {
	return file_proto_product_mobile_vod_proto_rawDescGZIP(), []int{0}
}

type VODSimple struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                 string        `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	PartnershipId      string        `protobuf:"bytes,2,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
	Name               string        `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Medias             []string      `protobuf:"bytes,4,rep,name=medias,proto3" json:"medias,omitempty"`
	Tags               []string      `protobuf:"bytes,5,rep,name=tags,proto3" json:"tags,omitempty"`
	AvailableStartTime int64         `protobuf:"varint,6,opt,name=available_start_time,json=availableStartTime,proto3" json:"available_start_time,omitempty"`
	AvailableEndTime   int64         `protobuf:"varint,7,opt,name=available_end_time,json=availableEndTime,proto3" json:"available_end_time,omitempty"`
	ListedPrice        float64       `protobuf:"fixed64,8,opt,name=listed_price,json=listedPrice,proto3" json:"listed_price,omitempty"`
	DiscountPercent    float64       `protobuf:"fixed64,9,opt,name=discount_percent,json=discountPercent,proto3" json:"discount_percent,omitempty"`
	Price              float64       `protobuf:"fixed64,10,opt,name=price,proto3" json:"price,omitempty"`
	Brand              string        `protobuf:"bytes,11,opt,name=brand,proto3" json:"brand,omitempty"`
	InBooking          bool          `protobuf:"varint,12,opt,name=in_booking,json=inBooking,proto3" json:"in_booking,omitempty"`
	PartnerShopId      string        `protobuf:"bytes,13,opt,name=partner_shop_id,json=partnerShopId,proto3" json:"partner_shop_id,omitempty"`
	Quality            string        `protobuf:"bytes,14,opt,name=quality,proto3" json:"quality,omitempty"`
	Duration           int64         `protobuf:"varint,15,opt,name=duration,proto3" json:"duration,omitempty"`
	BookingStatus      BookingStatus `protobuf:"varint,16,opt,name=booking_status,json=bookingStatus,proto3,enum=product.mobile.BookingStatus" json:"booking_status,omitempty"`
	Currency           string        `protobuf:"bytes,17,opt,name=currency,proto3" json:"currency,omitempty"`
}

func (x *VODSimple) Reset() {
	*x = VODSimple{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_product_mobile_vod_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VODSimple) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VODSimple) ProtoMessage() {}

func (x *VODSimple) ProtoReflect() protoreflect.Message {
	mi := &file_proto_product_mobile_vod_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VODSimple.ProtoReflect.Descriptor instead.
func (*VODSimple) Descriptor() ([]byte, []int) {
	return file_proto_product_mobile_vod_proto_rawDescGZIP(), []int{0}
}

func (x *VODSimple) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *VODSimple) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

func (x *VODSimple) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *VODSimple) GetMedias() []string {
	if x != nil {
		return x.Medias
	}
	return nil
}

func (x *VODSimple) GetTags() []string {
	if x != nil {
		return x.Tags
	}
	return nil
}

func (x *VODSimple) GetAvailableStartTime() int64 {
	if x != nil {
		return x.AvailableStartTime
	}
	return 0
}

func (x *VODSimple) GetAvailableEndTime() int64 {
	if x != nil {
		return x.AvailableEndTime
	}
	return 0
}

func (x *VODSimple) GetListedPrice() float64 {
	if x != nil {
		return x.ListedPrice
	}
	return 0
}

func (x *VODSimple) GetDiscountPercent() float64 {
	if x != nil {
		return x.DiscountPercent
	}
	return 0
}

func (x *VODSimple) GetPrice() float64 {
	if x != nil {
		return x.Price
	}
	return 0
}

func (x *VODSimple) GetBrand() string {
	if x != nil {
		return x.Brand
	}
	return ""
}

func (x *VODSimple) GetInBooking() bool {
	if x != nil {
		return x.InBooking
	}
	return false
}

func (x *VODSimple) GetPartnerShopId() string {
	if x != nil {
		return x.PartnerShopId
	}
	return ""
}

func (x *VODSimple) GetQuality() string {
	if x != nil {
		return x.Quality
	}
	return ""
}

func (x *VODSimple) GetDuration() int64 {
	if x != nil {
		return x.Duration
	}
	return 0
}

func (x *VODSimple) GetBookingStatus() BookingStatus {
	if x != nil {
		return x.BookingStatus
	}
	return BookingStatus_BOOKING_STATUS_INVALID
}

func (x *VODSimple) GetCurrency() string {
	if x != nil {
		return x.Currency
	}
	return ""
}

type GetVODsReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FilterStatus  FilterStatus   `protobuf:"varint,1,opt,name=filter_status,json=filterStatus,proto3,enum=product.mobile.FilterStatus" json:"filter_status,omitempty"`
	Pagination    *PaginationReq `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
	PartnershipId string         `protobuf:"bytes,3,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
}

func (x *GetVODsReq) Reset() {
	*x = GetVODsReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_product_mobile_vod_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetVODsReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetVODsReq) ProtoMessage() {}

func (x *GetVODsReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_product_mobile_vod_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetVODsReq.ProtoReflect.Descriptor instead.
func (*GetVODsReq) Descriptor() ([]byte, []int) {
	return file_proto_product_mobile_vod_proto_rawDescGZIP(), []int{1}
}

func (x *GetVODsReq) GetFilterStatus() FilterStatus {
	if x != nil {
		return x.FilterStatus
	}
	return FilterStatus_FILTER_STATUS_INVALID
}

func (x *GetVODsReq) GetPagination() *PaginationReq {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *GetVODsReq) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

type GetVODsRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Vods       []*VODSimple   `protobuf:"bytes,1,rep,name=vods,proto3" json:"vods,omitempty"`
	Pagination *PaginationRes `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (x *GetVODsRes) Reset() {
	*x = GetVODsRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_product_mobile_vod_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetVODsRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetVODsRes) ProtoMessage() {}

func (x *GetVODsRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_product_mobile_vod_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetVODsRes.ProtoReflect.Descriptor instead.
func (*GetVODsRes) Descriptor() ([]byte, []int) {
	return file_proto_product_mobile_vod_proto_rawDescGZIP(), []int{2}
}

func (x *GetVODsRes) GetVods() []*VODSimple {
	if x != nil {
		return x.Vods
	}
	return nil
}

func (x *GetVODsRes) GetPagination() *PaginationRes {
	if x != nil {
		return x.Pagination
	}
	return nil
}

var File_proto_product_mobile_vod_proto protoreflect.FileDescriptor

var file_proto_product_mobile_vod_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2f,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f, 0x76, 0x6f, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65,
	0x1a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2f,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0xbb, 0x04, 0x0a, 0x09, 0x56, 0x4f, 0x44, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x6d, 0x65,
	0x64, 0x69, 0x61, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x06, 0x6d, 0x65, 0x64, 0x69,
	0x61, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x61, 0x67, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x04, 0x74, 0x61, 0x67, 0x73, 0x12, 0x30, 0x0a, 0x14, 0x61, 0x76, 0x61, 0x69, 0x6c, 0x61,
	0x62, 0x6c, 0x65, 0x5f, 0x73, 0x74, 0x61, 0x72, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x06,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x12, 0x61, 0x76, 0x61, 0x69, 0x6c, 0x61, 0x62, 0x6c, 0x65, 0x53,
	0x74, 0x61, 0x72, 0x74, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x2c, 0x0a, 0x12, 0x61, 0x76, 0x61, 0x69,
	0x6c, 0x61, 0x62, 0x6c, 0x65, 0x5f, 0x65, 0x6e, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x07,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x10, 0x61, 0x76, 0x61, 0x69, 0x6c, 0x61, 0x62, 0x6c, 0x65, 0x45,
	0x6e, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x6c, 0x69, 0x73, 0x74, 0x65, 0x64,
	0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0b, 0x6c, 0x69,
	0x73, 0x74, 0x65, 0x64, 0x50, 0x72, 0x69, 0x63, 0x65, 0x12, 0x29, 0x0a, 0x10, 0x64, 0x69, 0x73,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x5f, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x18, 0x09, 0x20,
	0x01, 0x28, 0x01, 0x52, 0x0f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x50, 0x65, 0x72,
	0x63, 0x65, 0x6e, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x01, 0x52, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x62, 0x72,
	0x61, 0x6e, 0x64, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x62, 0x72, 0x61, 0x6e, 0x64,
	0x12, 0x1d, 0x0a, 0x0a, 0x69, 0x6e, 0x5f, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x69, 0x6e, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x12,
	0x26, 0x0a, 0x0f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x5f, 0x73, 0x68, 0x6f, 0x70, 0x5f,
	0x69, 0x64, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65,
	0x72, 0x53, 0x68, 0x6f, 0x70, 0x49, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x71, 0x75, 0x61, 0x6c, 0x69,
	0x74, 0x79, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x71, 0x75, 0x61, 0x6c, 0x69, 0x74,
	0x79, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0f, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x44, 0x0a,
	0x0e, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x10, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1d, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x52, 0x0d, 0x62, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x18,
	0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x22,
	0xb5, 0x01, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x56, 0x4f, 0x44, 0x73, 0x52, 0x65, 0x71, 0x12, 0x41,
	0x0a, 0x0d, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1c, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x52, 0x0c, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x12, 0x3d, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x71, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f,
	0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65,
	0x72, 0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x22, 0x7a, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x56, 0x4f,
	0x44, 0x73, 0x52, 0x65, 0x73, 0x12, 0x2d, 0x0a, 0x04, 0x76, 0x6f, 0x64, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x6d, 0x6f,
	0x62, 0x69, 0x6c, 0x65, 0x2e, 0x56, 0x4f, 0x44, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x04,
	0x76, 0x6f, 0x64, 0x73, 0x12, 0x3d, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x2a, 0x57, 0x0a, 0x0c, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x12, 0x19, 0x0a, 0x15, 0x46, 0x49, 0x4c, 0x54, 0x45, 0x52, 0x5f, 0x53, 0x54,
	0x41, 0x54, 0x55, 0x53, 0x5f, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x10, 0x00, 0x12, 0x15,
	0x0a, 0x11, 0x46, 0x49, 0x4c, 0x54, 0x45, 0x52, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f,
	0x48, 0x4f, 0x54, 0x10, 0x01, 0x12, 0x15, 0x0a, 0x11, 0x46, 0x49, 0x4c, 0x54, 0x45, 0x52, 0x5f,
	0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x4e, 0x45, 0x57, 0x10, 0x02, 0x32, 0x4f, 0x0a, 0x0a,
	0x56, 0x4f, 0x44, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x41, 0x0a, 0x07, 0x47, 0x65,
	0x74, 0x56, 0x4f, 0x44, 0x73, 0x12, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x56, 0x4f, 0x44, 0x73, 0x52, 0x65,
	0x71, 0x1a, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x6d, 0x6f, 0x62, 0x69,
	0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x56, 0x4f, 0x44, 0x73, 0x52, 0x65, 0x73, 0x42, 0x40, 0x5a,
	0x3e, 0x67, 0x69, 0x74, 0x6c, 0x61, 0x62, 0x2e, 0x62, 0x63, 0x61, 0x73, 0x69, 0x61, 0x2e, 0x69,
	0x6f, 0x2f, 0x74, 0x68, 0x75, 0x79, 0x6e, 0x67, 0x61, 0x2f, 0x61, 0x70, 0x70, 0x73, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63,
	0x74, 0x2f, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x3b, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_product_mobile_vod_proto_rawDescOnce sync.Once
	file_proto_product_mobile_vod_proto_rawDescData = file_proto_product_mobile_vod_proto_rawDesc
)

func file_proto_product_mobile_vod_proto_rawDescGZIP() []byte {
	file_proto_product_mobile_vod_proto_rawDescOnce.Do(func() {
		file_proto_product_mobile_vod_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_product_mobile_vod_proto_rawDescData)
	})
	return file_proto_product_mobile_vod_proto_rawDescData
}

var file_proto_product_mobile_vod_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_proto_product_mobile_vod_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_proto_product_mobile_vod_proto_goTypes = []interface{}{
	(FilterStatus)(0),     // 0: product.mobile.FilterStatus
	(*VODSimple)(nil),     // 1: product.mobile.VODSimple
	(*GetVODsReq)(nil),    // 2: product.mobile.GetVODsReq
	(*GetVODsRes)(nil),    // 3: product.mobile.GetVODsRes
	(BookingStatus)(0),    // 4: product.mobile.BookingStatus
	(*PaginationReq)(nil), // 5: product.mobile.PaginationReq
	(*PaginationRes)(nil), // 6: product.mobile.PaginationRes
}
var file_proto_product_mobile_vod_proto_depIdxs = []int32{
	4, // 0: product.mobile.VODSimple.booking_status:type_name -> product.mobile.BookingStatus
	0, // 1: product.mobile.GetVODsReq.filter_status:type_name -> product.mobile.FilterStatus
	5, // 2: product.mobile.GetVODsReq.pagination:type_name -> product.mobile.PaginationReq
	1, // 3: product.mobile.GetVODsRes.vods:type_name -> product.mobile.VODSimple
	6, // 4: product.mobile.GetVODsRes.pagination:type_name -> product.mobile.PaginationRes
	2, // 5: product.mobile.VODService.GetVODs:input_type -> product.mobile.GetVODsReq
	3, // 6: product.mobile.VODService.GetVODs:output_type -> product.mobile.GetVODsRes
	6, // [6:7] is the sub-list for method output_type
	5, // [5:6] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_proto_product_mobile_vod_proto_init() }
func file_proto_product_mobile_vod_proto_init() {
	if File_proto_product_mobile_vod_proto != nil {
		return
	}
	file_proto_product_mobile_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_product_mobile_vod_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VODSimple); i {
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
		file_proto_product_mobile_vod_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetVODsReq); i {
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
		file_proto_product_mobile_vod_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetVODsRes); i {
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
			RawDescriptor: file_proto_product_mobile_vod_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_product_mobile_vod_proto_goTypes,
		DependencyIndexes: file_proto_product_mobile_vod_proto_depIdxs,
		EnumInfos:         file_proto_product_mobile_vod_proto_enumTypes,
		MessageInfos:      file_proto_product_mobile_vod_proto_msgTypes,
	}.Build()
	File_proto_product_mobile_vod_proto = out.File
	file_proto_product_mobile_vod_proto_rawDesc = nil
	file_proto_product_mobile_vod_proto_goTypes = nil
	file_proto_product_mobile_vod_proto_depIdxs = nil
}