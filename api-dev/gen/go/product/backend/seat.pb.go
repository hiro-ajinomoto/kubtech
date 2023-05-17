// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: product/backend/seat.proto

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

type SeatStatus int32

const (
	SeatStatus_SEAT_STATUS_INVALID     SeatStatus = 0
	SeatStatus_SEAT_STATUS_UNAVAILABLE SeatStatus = 1
	SeatStatus_SEAT_STATUS_AVAILABLE   SeatStatus = 2
	SeatStatus_SEAT_STATUS_BLOCKED     SeatStatus = 3
	SeatStatus_SEAT_STATUS_BOOKED      SeatStatus = 4
)

// Enum value maps for SeatStatus.
var (
	SeatStatus_name = map[int32]string{
		0: "SEAT_STATUS_INVALID",
		1: "SEAT_STATUS_UNAVAILABLE",
		2: "SEAT_STATUS_AVAILABLE",
		3: "SEAT_STATUS_BLOCKED",
		4: "SEAT_STATUS_BOOKED",
	}
	SeatStatus_value = map[string]int32{
		"SEAT_STATUS_INVALID":     0,
		"SEAT_STATUS_UNAVAILABLE": 1,
		"SEAT_STATUS_AVAILABLE":   2,
		"SEAT_STATUS_BLOCKED":     3,
		"SEAT_STATUS_BOOKED":      4,
	}
)

func (x SeatStatus) Enum() *SeatStatus {
	p := new(SeatStatus)
	*p = x
	return p
}

func (x SeatStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SeatStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_product_backend_seat_proto_enumTypes[0].Descriptor()
}

func (SeatStatus) Type() protoreflect.EnumType {
	return &file_product_backend_seat_proto_enumTypes[0]
}

func (x SeatStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SeatStatus.Descriptor instead.
func (SeatStatus) EnumDescriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{0}
}

type SeatType int32

const (
	SeatType_SEAT_TYPE_INVALID SeatType = 0
	SeatType_SEAT_TYPE_GENERAL SeatType = 1
	SeatType_SEAT_TYPE_SPECIAL SeatType = 2
	SeatType_SEAT_TYPE_VIP     SeatType = 3
	SeatType_SEAT_TYPE_COUPLE  SeatType = 4
	SeatType_SEAT_TYPE_OTHER   SeatType = 5
)

// Enum value maps for SeatType.
var (
	SeatType_name = map[int32]string{
		0: "SEAT_TYPE_INVALID",
		1: "SEAT_TYPE_GENERAL",
		2: "SEAT_TYPE_SPECIAL",
		3: "SEAT_TYPE_VIP",
		4: "SEAT_TYPE_COUPLE",
		5: "SEAT_TYPE_OTHER",
	}
	SeatType_value = map[string]int32{
		"SEAT_TYPE_INVALID": 0,
		"SEAT_TYPE_GENERAL": 1,
		"SEAT_TYPE_SPECIAL": 2,
		"SEAT_TYPE_VIP":     3,
		"SEAT_TYPE_COUPLE":  4,
		"SEAT_TYPE_OTHER":   5,
	}
)

func (x SeatType) Enum() *SeatType {
	p := new(SeatType)
	*p = x
	return p
}

func (x SeatType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SeatType) Descriptor() protoreflect.EnumDescriptor {
	return file_product_backend_seat_proto_enumTypes[1].Descriptor()
}

func (SeatType) Type() protoreflect.EnumType {
	return &file_product_backend_seat_proto_enumTypes[1]
}

func (x SeatType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SeatType.Descriptor instead.
func (SeatType) EnumDescriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{1}
}

type SeatInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id               string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	UserId           string                 `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	GeneralSeatMapId string                 `protobuf:"bytes,3,opt,name=general_seat_map_id,json=generalSeatMapId,proto3" json:"general_seat_map_id,omitempty"`
	SeatPriceBlockId string                 `protobuf:"bytes,4,opt,name=seat_price_block_id,json=seatPriceBlockId,proto3" json:"seat_price_block_id,omitempty"`
	Position         *SeatPosition          `protobuf:"bytes,5,opt,name=position,proto3" json:"position,omitempty"`
	Name             string                 `protobuf:"bytes,6,opt,name=name,proto3" json:"name,omitempty"`
	SeatType         SeatType               `protobuf:"varint,7,opt,name=seat_type,json=seatType,proto3,enum=product.backend.SeatType" json:"seat_type,omitempty"`
	Price            float64                `protobuf:"fixed64,8,opt,name=price,proto3" json:"price,omitempty"`
	Currency         *SeatPriceCurrencyInfo `protobuf:"bytes,9,opt,name=currency,proto3" json:"currency,omitempty"`
	Status           SeatStatus             `protobuf:"varint,10,opt,name=status,proto3,enum=product.backend.SeatStatus" json:"status,omitempty"`
	PartnershipId    string                 `protobuf:"bytes,11,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
}

func (x *SeatInfo) Reset() {
	*x = SeatInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_backend_seat_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatInfo) ProtoMessage() {}

func (x *SeatInfo) ProtoReflect() protoreflect.Message {
	mi := &file_product_backend_seat_proto_msgTypes[0]
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
	return file_product_backend_seat_proto_rawDescGZIP(), []int{0}
}

func (x *SeatInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatInfo) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *SeatInfo) GetGeneralSeatMapId() string {
	if x != nil {
		return x.GeneralSeatMapId
	}
	return ""
}

func (x *SeatInfo) GetSeatPriceBlockId() string {
	if x != nil {
		return x.SeatPriceBlockId
	}
	return ""
}

func (x *SeatInfo) GetPosition() *SeatPosition {
	if x != nil {
		return x.Position
	}
	return nil
}

func (x *SeatInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SeatInfo) GetSeatType() SeatType {
	if x != nil {
		return x.SeatType
	}
	return SeatType_SEAT_TYPE_INVALID
}

func (x *SeatInfo) GetPrice() float64 {
	if x != nil {
		return x.Price
	}
	return 0
}

func (x *SeatInfo) GetCurrency() *SeatPriceCurrencyInfo {
	if x != nil {
		return x.Currency
	}
	return nil
}

func (x *SeatInfo) GetStatus() SeatStatus {
	if x != nil {
		return x.Status
	}
	return SeatStatus_SEAT_STATUS_INVALID
}

func (x *SeatInfo) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

type SeatPriceCurrencyInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Code string `protobuf:"bytes,3,opt,name=code,proto3" json:"code,omitempty"`
	Icon string `protobuf:"bytes,4,opt,name=icon,proto3" json:"icon,omitempty"`
}

func (x *SeatPriceCurrencyInfo) Reset() {
	*x = SeatPriceCurrencyInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_backend_seat_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatPriceCurrencyInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatPriceCurrencyInfo) ProtoMessage() {}

func (x *SeatPriceCurrencyInfo) ProtoReflect() protoreflect.Message {
	mi := &file_product_backend_seat_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatPriceCurrencyInfo.ProtoReflect.Descriptor instead.
func (*SeatPriceCurrencyInfo) Descriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{1}
}

func (x *SeatPriceCurrencyInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatPriceCurrencyInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SeatPriceCurrencyInfo) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *SeatPriceCurrencyInfo) GetIcon() string {
	if x != nil {
		return x.Icon
	}
	return ""
}

type SeatPosition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X int64 `protobuf:"varint,1,opt,name=x,proto3" json:"x,omitempty"`
	Y int64 `protobuf:"varint,2,opt,name=y,proto3" json:"y,omitempty"`
}

func (x *SeatPosition) Reset() {
	*x = SeatPosition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_backend_seat_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatPosition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatPosition) ProtoMessage() {}

func (x *SeatPosition) ProtoReflect() protoreflect.Message {
	mi := &file_product_backend_seat_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatPosition.ProtoReflect.Descriptor instead.
func (*SeatPosition) Descriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{2}
}

func (x *SeatPosition) GetX() int64 {
	if x != nil {
		return x.X
	}
	return 0
}

func (x *SeatPosition) GetY() int64 {
	if x != nil {
		return x.Y
	}
	return 0
}

type SeatSimpleInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *SeatSimpleInfo) Reset() {
	*x = SeatSimpleInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_backend_seat_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatSimpleInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatSimpleInfo) ProtoMessage() {}

func (x *SeatSimpleInfo) ProtoReflect() protoreflect.Message {
	mi := &file_product_backend_seat_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatSimpleInfo.ProtoReflect.Descriptor instead.
func (*SeatSimpleInfo) Descriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{3}
}

func (x *SeatSimpleInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatSimpleInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CheckIsAbleDeleteSeatsInPriceBlockIdReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PriceBlockId string `protobuf:"bytes,1,opt,name=price_block_id,json=priceBlockId,proto3" json:"price_block_id,omitempty"`
}

func (x *CheckIsAbleDeleteSeatsInPriceBlockIdReq) Reset() {
	*x = CheckIsAbleDeleteSeatsInPriceBlockIdReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_backend_seat_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CheckIsAbleDeleteSeatsInPriceBlockIdReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CheckIsAbleDeleteSeatsInPriceBlockIdReq) ProtoMessage() {}

func (x *CheckIsAbleDeleteSeatsInPriceBlockIdReq) ProtoReflect() protoreflect.Message {
	mi := &file_product_backend_seat_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CheckIsAbleDeleteSeatsInPriceBlockIdReq.ProtoReflect.Descriptor instead.
func (*CheckIsAbleDeleteSeatsInPriceBlockIdReq) Descriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{4}
}

func (x *CheckIsAbleDeleteSeatsInPriceBlockIdReq) GetPriceBlockId() string {
	if x != nil {
		return x.PriceBlockId
	}
	return ""
}

type GetSeatsReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SeatIds       []string   `protobuf:"bytes,1,rep,name=seat_ids,json=seatIds,proto3" json:"seat_ids,omitempty"`
	Status        SeatStatus `protobuf:"varint,2,opt,name=status,proto3,enum=product.backend.SeatStatus" json:"status,omitempty"`
	PartnershipId string     `protobuf:"bytes,3,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
}

func (x *GetSeatsReq) Reset() {
	*x = GetSeatsReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_backend_seat_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetSeatsReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSeatsReq) ProtoMessage() {}

func (x *GetSeatsReq) ProtoReflect() protoreflect.Message {
	mi := &file_product_backend_seat_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSeatsReq.ProtoReflect.Descriptor instead.
func (*GetSeatsReq) Descriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{5}
}

func (x *GetSeatsReq) GetSeatIds() []string {
	if x != nil {
		return x.SeatIds
	}
	return nil
}

func (x *GetSeatsReq) GetStatus() SeatStatus {
	if x != nil {
		return x.Status
	}
	return SeatStatus_SEAT_STATUS_INVALID
}

func (x *GetSeatsReq) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

type CheckIsAbleDeleteSeatsInPriceBlockIdRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	IsAbleDelete bool `protobuf:"varint,1,opt,name=is_able_delete,json=isAbleDelete,proto3" json:"is_able_delete,omitempty"`
}

func (x *CheckIsAbleDeleteSeatsInPriceBlockIdRes) Reset() {
	*x = CheckIsAbleDeleteSeatsInPriceBlockIdRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_backend_seat_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CheckIsAbleDeleteSeatsInPriceBlockIdRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CheckIsAbleDeleteSeatsInPriceBlockIdRes) ProtoMessage() {}

func (x *CheckIsAbleDeleteSeatsInPriceBlockIdRes) ProtoReflect() protoreflect.Message {
	mi := &file_product_backend_seat_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CheckIsAbleDeleteSeatsInPriceBlockIdRes.ProtoReflect.Descriptor instead.
func (*CheckIsAbleDeleteSeatsInPriceBlockIdRes) Descriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{6}
}

func (x *CheckIsAbleDeleteSeatsInPriceBlockIdRes) GetIsAbleDelete() bool {
	if x != nil {
		return x.IsAbleDelete
	}
	return false
}

type GetSeatsRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Seats []*SeatInfo `protobuf:"bytes,1,rep,name=seats,proto3" json:"seats,omitempty"`
}

func (x *GetSeatsRes) Reset() {
	*x = GetSeatsRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_product_backend_seat_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetSeatsRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSeatsRes) ProtoMessage() {}

func (x *GetSeatsRes) ProtoReflect() protoreflect.Message {
	mi := &file_product_backend_seat_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSeatsRes.ProtoReflect.Descriptor instead.
func (*GetSeatsRes) Descriptor() ([]byte, []int) {
	return file_product_backend_seat_proto_rawDescGZIP(), []int{7}
}

func (x *GetSeatsRes) GetSeats() []*SeatInfo {
	if x != nil {
		return x.Seats
	}
	return nil
}

var File_product_backend_seat_proto protoreflect.FileDescriptor

var file_product_backend_seat_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x2f, 0x73, 0x65, 0x61, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x70, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x22, 0xce, 0x03,
	0x0a, 0x08, 0x53, 0x65, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73,
	0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65,
	0x72, 0x49, 0x64, 0x12, 0x2d, 0x0a, 0x13, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x6c, 0x5f, 0x73,
	0x65, 0x61, 0x74, 0x5f, 0x6d, 0x61, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x10, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x6c, 0x53, 0x65, 0x61, 0x74, 0x4d, 0x61, 0x70,
	0x49, 0x64, 0x12, 0x2d, 0x0a, 0x13, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65,
	0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x10, 0x73, 0x65, 0x61, 0x74, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49,
	0x64, 0x12, 0x39, 0x0a, 0x08, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x62, 0x61,
	0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x08, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x36, 0x0a, 0x09, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x62, 0x61,
	0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08,
	0x73, 0x65, 0x61, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63,
	0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x01, 0x52, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x42,
	0x0a, 0x08, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x26, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65,
	0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x50, 0x72, 0x69, 0x63, 0x65, 0x43, 0x75, 0x72, 0x72,
	0x65, 0x6e, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x08, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e,
	0x63, 0x79, 0x12, 0x33, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0a, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x62, 0x61, 0x63,
	0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x22, 0x63,
	0x0a, 0x15, 0x53, 0x65, 0x61, 0x74, 0x50, 0x72, 0x69, 0x63, 0x65, 0x43, 0x75, 0x72, 0x72, 0x65,
	0x6e, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x69,
	0x63, 0x6f, 0x6e, 0x22, 0x2a, 0x0a, 0x0c, 0x53, 0x65, 0x61, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x0c, 0x0a, 0x01, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x01,
	0x78, 0x12, 0x0c, 0x0a, 0x01, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x01, 0x79, 0x22,
	0x34, 0x0a, 0x0e, 0x53, 0x65, 0x61, 0x74, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x49, 0x6e, 0x66,
	0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x4f, 0x0a, 0x27, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x49, 0x73,
	0x41, 0x62, 0x6c, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x73, 0x49,
	0x6e, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x52, 0x65, 0x71,
	0x12, 0x24, 0x0a, 0x0e, 0x70, 0x72, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x70, 0x72, 0x69, 0x63, 0x65, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x22, 0x84, 0x01, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x53, 0x65,
	0x61, 0x74, 0x73, 0x52, 0x65, 0x71, 0x12, 0x19, 0x0a, 0x08, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x69,
	0x64, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x73, 0x65, 0x61, 0x74, 0x49, 0x64,
	0x73, 0x12, 0x33, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x1b, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b,
	0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65,
	0x72, 0x73, 0x68, 0x69, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d,
	0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x22, 0x4f, 0x0a,
	0x27, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x49, 0x73, 0x41, 0x62, 0x6c, 0x65, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x73, 0x49, 0x6e, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c,
	0x6f, 0x63, 0x6b, 0x49, 0x64, 0x52, 0x65, 0x73, 0x12, 0x24, 0x0a, 0x0e, 0x69, 0x73, 0x5f, 0x61,
	0x62, 0x6c, 0x65, 0x5f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x0c, 0x69, 0x73, 0x41, 0x62, 0x6c, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x22, 0x3e,
	0x0a, 0x0b, 0x47, 0x65, 0x74, 0x53, 0x65, 0x61, 0x74, 0x73, 0x52, 0x65, 0x73, 0x12, 0x2f, 0x0a,
	0x05, 0x73, 0x65, 0x61, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x70,
	0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53,
	0x65, 0x61, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x05, 0x73, 0x65, 0x61, 0x74, 0x73, 0x2a, 0x8e,
	0x01, 0x0a, 0x0a, 0x53, 0x65, 0x61, 0x74, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x17, 0x0a,
	0x13, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x49, 0x4e, 0x56,
	0x41, 0x4c, 0x49, 0x44, 0x10, 0x00, 0x12, 0x1b, 0x0a, 0x17, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x53,
	0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x55, 0x4e, 0x41, 0x56, 0x41, 0x49, 0x4c, 0x41, 0x42, 0x4c,
	0x45, 0x10, 0x01, 0x12, 0x19, 0x0a, 0x15, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x54,
	0x55, 0x53, 0x5f, 0x41, 0x56, 0x41, 0x49, 0x4c, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x02, 0x12, 0x17,
	0x0a, 0x13, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x42, 0x4c,
	0x4f, 0x43, 0x4b, 0x45, 0x44, 0x10, 0x03, 0x12, 0x16, 0x0a, 0x12, 0x53, 0x45, 0x41, 0x54, 0x5f,
	0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x42, 0x4f, 0x4f, 0x4b, 0x45, 0x44, 0x10, 0x04, 0x2a,
	0x8d, 0x01, 0x0a, 0x08, 0x53, 0x65, 0x61, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x15, 0x0a, 0x11,
	0x53, 0x45, 0x41, 0x54, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49,
	0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x54, 0x59, 0x50, 0x45,
	0x5f, 0x47, 0x45, 0x4e, 0x45, 0x52, 0x41, 0x4c, 0x10, 0x01, 0x12, 0x15, 0x0a, 0x11, 0x53, 0x45,
	0x41, 0x54, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x41, 0x4c, 0x10,
	0x02, 0x12, 0x11, 0x0a, 0x0d, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x56,
	0x49, 0x50, 0x10, 0x03, 0x12, 0x14, 0x0a, 0x10, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x54, 0x59, 0x50,
	0x45, 0x5f, 0x43, 0x4f, 0x55, 0x50, 0x4c, 0x45, 0x10, 0x04, 0x12, 0x13, 0x0a, 0x0f, 0x53, 0x45,
	0x41, 0x54, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4f, 0x54, 0x48, 0x45, 0x52, 0x10, 0x05, 0x32,
	0xf2, 0x01, 0x0a, 0x0b, 0x53, 0x65, 0x61, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x9a, 0x01, 0x0a, 0x24, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x49, 0x73, 0x41, 0x62, 0x6c, 0x65, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x73, 0x49, 0x6e, 0x50, 0x72, 0x69, 0x63,
	0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x12, 0x38, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x43, 0x68, 0x65, 0x63, 0x6b,
	0x49, 0x73, 0x41, 0x62, 0x6c, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74,
	0x73, 0x49, 0x6e, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x52,
	0x65, 0x71, 0x1a, 0x38, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x62, 0x61, 0x63,
	0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x49, 0x73, 0x41, 0x62, 0x6c, 0x65,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x73, 0x49, 0x6e, 0x50, 0x72, 0x69,
	0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x52, 0x65, 0x73, 0x12, 0x46, 0x0a, 0x08,
	0x47, 0x65, 0x74, 0x53, 0x65, 0x61, 0x74, 0x73, 0x12, 0x1c, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x65,
	0x61, 0x74, 0x73, 0x52, 0x65, 0x71, 0x1a, 0x1c, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x47, 0x65, 0x74, 0x53, 0x65, 0x61, 0x74,
	0x73, 0x52, 0x65, 0x73, 0x42, 0x42, 0x5a, 0x40, 0x67, 0x69, 0x74, 0x6c, 0x61, 0x62, 0x2e, 0x62,
	0x63, 0x61, 0x73, 0x69, 0x61, 0x2e, 0x69, 0x6f, 0x2f, 0x74, 0x68, 0x75, 0x79, 0x6e, 0x67, 0x61,
	0x2f, 0x61, 0x70, 0x70, 0x73, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f,
	0x2f, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64,
	0x3b, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_product_backend_seat_proto_rawDescOnce sync.Once
	file_product_backend_seat_proto_rawDescData = file_product_backend_seat_proto_rawDesc
)

func file_product_backend_seat_proto_rawDescGZIP() []byte {
	file_product_backend_seat_proto_rawDescOnce.Do(func() {
		file_product_backend_seat_proto_rawDescData = protoimpl.X.CompressGZIP(file_product_backend_seat_proto_rawDescData)
	})
	return file_product_backend_seat_proto_rawDescData
}

var file_product_backend_seat_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_product_backend_seat_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_product_backend_seat_proto_goTypes = []interface{}{
	(SeatStatus)(0),               // 0: product.backend.SeatStatus
	(SeatType)(0),                 // 1: product.backend.SeatType
	(*SeatInfo)(nil),              // 2: product.backend.SeatInfo
	(*SeatPriceCurrencyInfo)(nil), // 3: product.backend.SeatPriceCurrencyInfo
	(*SeatPosition)(nil),          // 4: product.backend.SeatPosition
	(*SeatSimpleInfo)(nil),        // 5: product.backend.SeatSimpleInfo
	(*CheckIsAbleDeleteSeatsInPriceBlockIdReq)(nil), // 6: product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdReq
	(*GetSeatsReq)(nil),                             // 7: product.backend.GetSeatsReq
	(*CheckIsAbleDeleteSeatsInPriceBlockIdRes)(nil), // 8: product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdRes
	(*GetSeatsRes)(nil),                             // 9: product.backend.GetSeatsRes
}
var file_product_backend_seat_proto_depIdxs = []int32{
	4, // 0: product.backend.SeatInfo.position:type_name -> product.backend.SeatPosition
	1, // 1: product.backend.SeatInfo.seat_type:type_name -> product.backend.SeatType
	3, // 2: product.backend.SeatInfo.currency:type_name -> product.backend.SeatPriceCurrencyInfo
	0, // 3: product.backend.SeatInfo.status:type_name -> product.backend.SeatStatus
	0, // 4: product.backend.GetSeatsReq.status:type_name -> product.backend.SeatStatus
	2, // 5: product.backend.GetSeatsRes.seats:type_name -> product.backend.SeatInfo
	6, // 6: product.backend.SeatService.CheckIsAbleDeleteSeatsInPriceBlockId:input_type -> product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdReq
	7, // 7: product.backend.SeatService.GetSeats:input_type -> product.backend.GetSeatsReq
	8, // 8: product.backend.SeatService.CheckIsAbleDeleteSeatsInPriceBlockId:output_type -> product.backend.CheckIsAbleDeleteSeatsInPriceBlockIdRes
	9, // 9: product.backend.SeatService.GetSeats:output_type -> product.backend.GetSeatsRes
	8, // [8:10] is the sub-list for method output_type
	6, // [6:8] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_product_backend_seat_proto_init() }
func file_product_backend_seat_proto_init() {
	if File_product_backend_seat_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_product_backend_seat_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
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
		file_product_backend_seat_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatPriceCurrencyInfo); i {
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
		file_product_backend_seat_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatPosition); i {
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
		file_product_backend_seat_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatSimpleInfo); i {
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
		file_product_backend_seat_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CheckIsAbleDeleteSeatsInPriceBlockIdReq); i {
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
		file_product_backend_seat_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetSeatsReq); i {
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
		file_product_backend_seat_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CheckIsAbleDeleteSeatsInPriceBlockIdRes); i {
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
		file_product_backend_seat_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetSeatsRes); i {
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
			RawDescriptor: file_product_backend_seat_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_product_backend_seat_proto_goTypes,
		DependencyIndexes: file_product_backend_seat_proto_depIdxs,
		EnumInfos:         file_product_backend_seat_proto_enumTypes,
		MessageInfos:      file_product_backend_seat_proto_msgTypes,
	}.Build()
	File_product_backend_seat_proto = out.File
	file_product_backend_seat_proto_rawDesc = nil
	file_product_backend_seat_proto_goTypes = nil
	file_product_backend_seat_proto_depIdxs = nil
}
