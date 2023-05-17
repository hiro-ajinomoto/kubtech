// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/search/backend/seat.proto

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
	return file_proto_search_backend_seat_proto_enumTypes[0].Descriptor()
}

func (SeatStatus) Type() protoreflect.EnumType {
	return &file_proto_search_backend_seat_proto_enumTypes[0]
}

func (x SeatStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SeatStatus.Descriptor instead.
func (SeatStatus) EnumDescriptor() ([]byte, []int) {
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{0}
}

type SeatBasicInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id               string                    `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	UserId           string                    `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	GeneralSeatMapId string                    `protobuf:"bytes,3,opt,name=general_seat_map_id,json=generalSeatMapId,proto3" json:"general_seat_map_id,omitempty"`
	SeatPriceBlockId string                    `protobuf:"bytes,4,opt,name=seat_price_block_id,json=seatPriceBlockId,proto3" json:"seat_price_block_id,omitempty"`
	Position         *SeatPosition             `protobuf:"bytes,5,opt,name=position,proto3" json:"position,omitempty"`
	Name             string                    `protobuf:"bytes,6,opt,name=name,proto3" json:"name,omitempty"`
	SeatType         *SeatTypeBasicInfo        `protobuf:"bytes,7,opt,name=seat_type,json=seatType,proto3" json:"seat_type,omitempty"`
	Price            *SeatPriceInfo            `protobuf:"bytes,8,opt,name=price,proto3" json:"price,omitempty"`
	SeatAccessories  []*SeatAccessoryBasicInfo `protobuf:"bytes,9,rep,name=seat_accessories,json=seatAccessories,proto3" json:"seat_accessories,omitempty"`
	LockExpiredTime  int64                     `protobuf:"varint,10,opt,name=lock_expired_time,json=lockExpiredTime,proto3" json:"lock_expired_time,omitempty"`
	Status           SeatStatus                `protobuf:"varint,11,opt,name=status,proto3,enum=search.backend.SeatStatus" json:"status,omitempty"` // SEAT_STATUS_BLOCKED if lock_expired_time >= now
	IsMine           bool                      `protobuf:"varint,12,opt,name=is_mine,json=isMine,proto3" json:"is_mine"`
	PartnershipId    string                    `protobuf:"bytes,13,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
}

func (x *SeatBasicInfo) Reset() {
	*x = SeatBasicInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_backend_seat_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatBasicInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatBasicInfo) ProtoMessage() {}

func (x *SeatBasicInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatBasicInfo.ProtoReflect.Descriptor instead.
func (*SeatBasicInfo) Descriptor() ([]byte, []int) {
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{0}
}

func (x *SeatBasicInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatBasicInfo) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *SeatBasicInfo) GetGeneralSeatMapId() string {
	if x != nil {
		return x.GeneralSeatMapId
	}
	return ""
}

func (x *SeatBasicInfo) GetSeatPriceBlockId() string {
	if x != nil {
		return x.SeatPriceBlockId
	}
	return ""
}

func (x *SeatBasicInfo) GetPosition() *SeatPosition {
	if x != nil {
		return x.Position
	}
	return nil
}

func (x *SeatBasicInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SeatBasicInfo) GetSeatType() *SeatTypeBasicInfo {
	if x != nil {
		return x.SeatType
	}
	return nil
}

func (x *SeatBasicInfo) GetPrice() *SeatPriceInfo {
	if x != nil {
		return x.Price
	}
	return nil
}

func (x *SeatBasicInfo) GetSeatAccessories() []*SeatAccessoryBasicInfo {
	if x != nil {
		return x.SeatAccessories
	}
	return nil
}

func (x *SeatBasicInfo) GetLockExpiredTime() int64 {
	if x != nil {
		return x.LockExpiredTime
	}
	return 0
}

func (x *SeatBasicInfo) GetStatus() SeatStatus {
	if x != nil {
		return x.Status
	}
	return SeatStatus_SEAT_STATUS_INVALID
}

func (x *SeatBasicInfo) GetIsMine() bool {
	if x != nil {
		return x.IsMine
	}
	return false
}

func (x *SeatBasicInfo) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

type SeatPriceInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string                 `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Icon     string                 `protobuf:"bytes,3,opt,name=icon,proto3" json:"icon,omitempty"`
	Price    float64                `protobuf:"fixed64,4,opt,name=price,proto3" json:"price,omitempty"`
	Currency *SeatPriceCurrencyInfo `protobuf:"bytes,5,opt,name=currency,proto3" json:"currency,omitempty"`
}

func (x *SeatPriceInfo) Reset() {
	*x = SeatPriceInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_backend_seat_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatPriceInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatPriceInfo) ProtoMessage() {}

func (x *SeatPriceInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatPriceInfo.ProtoReflect.Descriptor instead.
func (*SeatPriceInfo) Descriptor() ([]byte, []int) {
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{1}
}

func (x *SeatPriceInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatPriceInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SeatPriceInfo) GetIcon() string {
	if x != nil {
		return x.Icon
	}
	return ""
}

func (x *SeatPriceInfo) GetPrice() float64 {
	if x != nil {
		return x.Price
	}
	return 0
}

func (x *SeatPriceInfo) GetCurrency() *SeatPriceCurrencyInfo {
	if x != nil {
		return x.Currency
	}
	return nil
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
		mi := &file_proto_search_backend_seat_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatPriceCurrencyInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatPriceCurrencyInfo) ProtoMessage() {}

func (x *SeatPriceCurrencyInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[2]
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
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{2}
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

type SeatAccessoryBasicInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *SeatAccessoryBasicInfo) Reset() {
	*x = SeatAccessoryBasicInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_backend_seat_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatAccessoryBasicInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatAccessoryBasicInfo) ProtoMessage() {}

func (x *SeatAccessoryBasicInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatAccessoryBasicInfo.ProtoReflect.Descriptor instead.
func (*SeatAccessoryBasicInfo) Descriptor() ([]byte, []int) {
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{3}
}

func (x *SeatAccessoryBasicInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatAccessoryBasicInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type SeatTypeBasicInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *SeatTypeBasicInfo) Reset() {
	*x = SeatTypeBasicInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_backend_seat_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatTypeBasicInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatTypeBasicInfo) ProtoMessage() {}

func (x *SeatTypeBasicInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatTypeBasicInfo.ProtoReflect.Descriptor instead.
func (*SeatTypeBasicInfo) Descriptor() ([]byte, []int) {
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{4}
}

func (x *SeatTypeBasicInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatTypeBasicInfo) GetName() string {
	if x != nil {
		return x.Name
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
		mi := &file_proto_search_backend_seat_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatPosition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatPosition) ProtoMessage() {}

func (x *SeatPosition) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[5]
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
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{5}
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

type GetSeatsReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SeatPriceBlockId string `protobuf:"bytes,1,opt,name=seat_price_block_id,json=seatPriceBlockId,proto3" json:"seat_price_block_id,omitempty"`
}

func (x *GetSeatsReq) Reset() {
	*x = GetSeatsReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_backend_seat_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetSeatsReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSeatsReq) ProtoMessage() {}

func (x *GetSeatsReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[6]
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
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{6}
}

func (x *GetSeatsReq) GetSeatPriceBlockId() string {
	if x != nil {
		return x.SeatPriceBlockId
	}
	return ""
}

type InternalCheckModifyPriceBlockReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SeatPriceBlockId string `protobuf:"bytes,1,opt,name=seat_price_block_id,json=seatPriceBlockId,proto3" json:"seat_price_block_id,omitempty"`
	GeneralSeatMapId string `protobuf:"bytes,2,opt,name=general_seat_map_id,json=generalSeatMapId,proto3" json:"general_seat_map_id,omitempty"`
}

func (x *InternalCheckModifyPriceBlockReq) Reset() {
	*x = InternalCheckModifyPriceBlockReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_backend_seat_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InternalCheckModifyPriceBlockReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InternalCheckModifyPriceBlockReq) ProtoMessage() {}

func (x *InternalCheckModifyPriceBlockReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InternalCheckModifyPriceBlockReq.ProtoReflect.Descriptor instead.
func (*InternalCheckModifyPriceBlockReq) Descriptor() ([]byte, []int) {
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{7}
}

func (x *InternalCheckModifyPriceBlockReq) GetSeatPriceBlockId() string {
	if x != nil {
		return x.SeatPriceBlockId
	}
	return ""
}

func (x *InternalCheckModifyPriceBlockReq) GetGeneralSeatMapId() string {
	if x != nil {
		return x.GeneralSeatMapId
	}
	return ""
}

type GetSeatsRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Infos []*SeatBasicInfo `protobuf:"bytes,1,rep,name=infos,proto3" json:"infos,omitempty"`
}

func (x *GetSeatsRes) Reset() {
	*x = GetSeatsRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_backend_seat_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetSeatsRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSeatsRes) ProtoMessage() {}

func (x *GetSeatsRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[8]
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
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{8}
}

func (x *GetSeatsRes) GetInfos() []*SeatBasicInfo {
	if x != nil {
		return x.Infos
	}
	return nil
}

type InternalCheckModifyPriceBlockRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	IsAble bool `protobuf:"varint,1,opt,name=is_able,json=isAble,proto3" json:"is_able"`
}

func (x *InternalCheckModifyPriceBlockRes) Reset() {
	*x = InternalCheckModifyPriceBlockRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_backend_seat_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InternalCheckModifyPriceBlockRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InternalCheckModifyPriceBlockRes) ProtoMessage() {}

func (x *InternalCheckModifyPriceBlockRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_backend_seat_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InternalCheckModifyPriceBlockRes.ProtoReflect.Descriptor instead.
func (*InternalCheckModifyPriceBlockRes) Descriptor() ([]byte, []int) {
	return file_proto_search_backend_seat_proto_rawDescGZIP(), []int{9}
}

func (x *InternalCheckModifyPriceBlockRes) GetIsAble() bool {
	if x != nil {
		return x.IsAble
	}
	return false
}

var File_proto_search_backend_seat_proto protoreflect.FileDescriptor

var file_proto_search_backend_seat_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2f, 0x62,
	0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x73, 0x65, 0x61, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x22, 0xcc, 0x04, 0x0a, 0x0d, 0x53, 0x65, 0x61, 0x74, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49,
	0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x2d, 0x0a, 0x13,
	0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x6d, 0x61, 0x70,
	0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x67, 0x65, 0x6e, 0x65, 0x72,
	0x61, 0x6c, 0x53, 0x65, 0x61, 0x74, 0x4d, 0x61, 0x70, 0x49, 0x64, 0x12, 0x2d, 0x0a, 0x13, 0x73,
	0x65, 0x61, 0x74, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f,
	0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x73, 0x65, 0x61, 0x74, 0x50, 0x72,
	0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x12, 0x38, 0x0a, 0x08, 0x70, 0x6f,
	0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x73,
	0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65,
	0x61, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x08, 0x70, 0x6f, 0x73, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x3e, 0x0a, 0x09, 0x73, 0x65, 0x61, 0x74,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x73, 0x65,
	0x61, 0x72, 0x63, 0x68, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61,
	0x74, 0x54, 0x79, 0x70, 0x65, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x08,
	0x73, 0x65, 0x61, 0x74, 0x54, 0x79, 0x70, 0x65, 0x12, 0x33, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63,
	0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68,
	0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x50, 0x72, 0x69,
	0x63, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x51, 0x0a,
	0x10, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x69, 0x65,
	0x73, 0x18, 0x09, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68,
	0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x52,
	0x0f, 0x73, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x69, 0x65, 0x73,
	0x12, 0x2a, 0x0a, 0x11, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x64,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0f, 0x6c, 0x6f, 0x63,
	0x6b, 0x45, 0x78, 0x70, 0x69, 0x72, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x32, 0x0a, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a, 0x2e, 0x73,
	0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65,
	0x61, 0x74, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x17, 0x0a, 0x07, 0x69, 0x73, 0x5f, 0x6d, 0x69, 0x6e, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x06, 0x69, 0x73, 0x4d, 0x69, 0x6e, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x0d, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x49, 0x64,
	0x22, 0xa0, 0x01, 0x0a, 0x0d, 0x53, 0x65, 0x61, 0x74, 0x50, 0x72, 0x69, 0x63, 0x65, 0x49, 0x6e,
	0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x72,
	0x69, 0x63, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x01, 0x52, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65,
	0x12, 0x41, 0x0a, 0x08, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x25, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x62, 0x61, 0x63, 0x6b,
	0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x50, 0x72, 0x69, 0x63, 0x65, 0x43, 0x75, 0x72,
	0x72, 0x65, 0x6e, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x08, 0x63, 0x75, 0x72, 0x72, 0x65,
	0x6e, 0x63, 0x79, 0x22, 0x63, 0x0a, 0x15, 0x53, 0x65, 0x61, 0x74, 0x50, 0x72, 0x69, 0x63, 0x65,
	0x43, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x22, 0x3c, 0x0a, 0x16, 0x53, 0x65, 0x61, 0x74,
	0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e,
	0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x37, 0x0a, 0x11, 0x53, 0x65, 0x61, 0x74, 0x54, 0x79,
	0x70, 0x65, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22,
	0x2a, 0x0a, 0x0c, 0x53, 0x65, 0x61, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0x0c, 0x0a, 0x01, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x01, 0x78, 0x12, 0x0c, 0x0a,
	0x01, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x01, 0x79, 0x22, 0x3c, 0x0a, 0x0b, 0x47,
	0x65, 0x74, 0x53, 0x65, 0x61, 0x74, 0x73, 0x52, 0x65, 0x71, 0x12, 0x2d, 0x0a, 0x13, 0x73, 0x65,
	0x61, 0x74, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x73, 0x65, 0x61, 0x74, 0x50, 0x72, 0x69,
	0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x22, 0x80, 0x01, 0x0a, 0x20, 0x49, 0x6e,
	0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x4d, 0x6f, 0x64, 0x69, 0x66,
	0x79, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x12, 0x2d,
	0x0a, 0x13, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x6c, 0x6f,
	0x63, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x73, 0x65, 0x61,
	0x74, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64, 0x12, 0x2d, 0x0a,
	0x13, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x6d, 0x61,
	0x70, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x67, 0x65, 0x6e, 0x65,
	0x72, 0x61, 0x6c, 0x53, 0x65, 0x61, 0x74, 0x4d, 0x61, 0x70, 0x49, 0x64, 0x22, 0x42, 0x0a, 0x0b,
	0x47, 0x65, 0x74, 0x53, 0x65, 0x61, 0x74, 0x73, 0x52, 0x65, 0x73, 0x12, 0x33, 0x0a, 0x05, 0x69,
	0x6e, 0x66, 0x6f, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x73, 0x65, 0x61,
	0x72, 0x63, 0x68, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x53, 0x65, 0x61, 0x74,
	0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x05, 0x69, 0x6e, 0x66, 0x6f, 0x73,
	0x22, 0x3b, 0x0a, 0x20, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x43, 0x68, 0x65, 0x63,
	0x6b, 0x4d, 0x6f, 0x64, 0x69, 0x66, 0x79, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63,
	0x6b, 0x52, 0x65, 0x73, 0x12, 0x17, 0x0a, 0x07, 0x69, 0x73, 0x5f, 0x61, 0x62, 0x6c, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x69, 0x73, 0x41, 0x62, 0x6c, 0x65, 0x2a, 0x8e, 0x01,
	0x0a, 0x0a, 0x53, 0x65, 0x61, 0x74, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x17, 0x0a, 0x13,
	0x53, 0x45, 0x41, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x49, 0x4e, 0x56, 0x41,
	0x4c, 0x49, 0x44, 0x10, 0x00, 0x12, 0x1b, 0x0a, 0x17, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x53, 0x54,
	0x41, 0x54, 0x55, 0x53, 0x5f, 0x55, 0x4e, 0x41, 0x56, 0x41, 0x49, 0x4c, 0x41, 0x42, 0x4c, 0x45,
	0x10, 0x01, 0x12, 0x19, 0x0a, 0x15, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55,
	0x53, 0x5f, 0x41, 0x56, 0x41, 0x49, 0x4c, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x02, 0x12, 0x17, 0x0a,
	0x13, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x42, 0x4c, 0x4f,
	0x43, 0x4b, 0x45, 0x44, 0x10, 0x03, 0x12, 0x16, 0x0a, 0x12, 0x53, 0x45, 0x41, 0x54, 0x5f, 0x53,
	0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x42, 0x4f, 0x4f, 0x4b, 0x45, 0x44, 0x10, 0x04, 0x32, 0x93,
	0x01, 0x0a, 0x0b, 0x53, 0x65, 0x61, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x83,
	0x01, 0x0a, 0x1d, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x43, 0x68, 0x65, 0x63, 0x6b,
	0x4d, 0x6f, 0x64, 0x69, 0x66, 0x79, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b,
	0x12, 0x30, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x2e, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x4d,
	0x6f, 0x64, 0x69, 0x66, 0x79, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52,
	0x65, 0x71, 0x1a, 0x30, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x62, 0x61, 0x63, 0x6b,
	0x65, 0x6e, 0x64, 0x2e, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x43, 0x68, 0x65, 0x63,
	0x6b, 0x4d, 0x6f, 0x64, 0x69, 0x66, 0x79, 0x50, 0x72, 0x69, 0x63, 0x65, 0x42, 0x6c, 0x6f, 0x63,
	0x6b, 0x52, 0x65, 0x73, 0x42, 0x13, 0x5a, 0x11, 0x2e, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x3b, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_proto_search_backend_seat_proto_rawDescOnce sync.Once
	file_proto_search_backend_seat_proto_rawDescData = file_proto_search_backend_seat_proto_rawDesc
)

func file_proto_search_backend_seat_proto_rawDescGZIP() []byte {
	file_proto_search_backend_seat_proto_rawDescOnce.Do(func() {
		file_proto_search_backend_seat_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_search_backend_seat_proto_rawDescData)
	})
	return file_proto_search_backend_seat_proto_rawDescData
}

var file_proto_search_backend_seat_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_proto_search_backend_seat_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_proto_search_backend_seat_proto_goTypes = []interface{}{
	(SeatStatus)(0),                          // 0: search.backend.SeatStatus
	(*SeatBasicInfo)(nil),                    // 1: search.backend.SeatBasicInfo
	(*SeatPriceInfo)(nil),                    // 2: search.backend.SeatPriceInfo
	(*SeatPriceCurrencyInfo)(nil),            // 3: search.backend.SeatPriceCurrencyInfo
	(*SeatAccessoryBasicInfo)(nil),           // 4: search.backend.SeatAccessoryBasicInfo
	(*SeatTypeBasicInfo)(nil),                // 5: search.backend.SeatTypeBasicInfo
	(*SeatPosition)(nil),                     // 6: search.backend.SeatPosition
	(*GetSeatsReq)(nil),                      // 7: search.backend.GetSeatsReq
	(*InternalCheckModifyPriceBlockReq)(nil), // 8: search.backend.InternalCheckModifyPriceBlockReq
	(*GetSeatsRes)(nil),                      // 9: search.backend.GetSeatsRes
	(*InternalCheckModifyPriceBlockRes)(nil), // 10: search.backend.InternalCheckModifyPriceBlockRes
}
var file_proto_search_backend_seat_proto_depIdxs = []int32{
	6,  // 0: search.backend.SeatBasicInfo.position:type_name -> search.backend.SeatPosition
	5,  // 1: search.backend.SeatBasicInfo.seat_type:type_name -> search.backend.SeatTypeBasicInfo
	2,  // 2: search.backend.SeatBasicInfo.price:type_name -> search.backend.SeatPriceInfo
	4,  // 3: search.backend.SeatBasicInfo.seat_accessories:type_name -> search.backend.SeatAccessoryBasicInfo
	0,  // 4: search.backend.SeatBasicInfo.status:type_name -> search.backend.SeatStatus
	3,  // 5: search.backend.SeatPriceInfo.currency:type_name -> search.backend.SeatPriceCurrencyInfo
	1,  // 6: search.backend.GetSeatsRes.infos:type_name -> search.backend.SeatBasicInfo
	8,  // 7: search.backend.SeatService.InternalCheckModifyPriceBlock:input_type -> search.backend.InternalCheckModifyPriceBlockReq
	10, // 8: search.backend.SeatService.InternalCheckModifyPriceBlock:output_type -> search.backend.InternalCheckModifyPriceBlockRes
	8,  // [8:9] is the sub-list for method output_type
	7,  // [7:8] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_proto_search_backend_seat_proto_init() }
func file_proto_search_backend_seat_proto_init() {
	if File_proto_search_backend_seat_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_search_backend_seat_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatBasicInfo); i {
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
		file_proto_search_backend_seat_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatPriceInfo); i {
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
		file_proto_search_backend_seat_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
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
		file_proto_search_backend_seat_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatAccessoryBasicInfo); i {
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
		file_proto_search_backend_seat_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatTypeBasicInfo); i {
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
		file_proto_search_backend_seat_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
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
		file_proto_search_backend_seat_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
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
		file_proto_search_backend_seat_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InternalCheckModifyPriceBlockReq); i {
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
		file_proto_search_backend_seat_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
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
		file_proto_search_backend_seat_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InternalCheckModifyPriceBlockRes); i {
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
			RawDescriptor: file_proto_search_backend_seat_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_search_backend_seat_proto_goTypes,
		DependencyIndexes: file_proto_search_backend_seat_proto_depIdxs,
		EnumInfos:         file_proto_search_backend_seat_proto_enumTypes,
		MessageInfos:      file_proto_search_backend_seat_proto_msgTypes,
	}.Build()
	File_proto_search_backend_seat_proto = out.File
	file_proto_search_backend_seat_proto_rawDesc = nil
	file_proto_search_backend_seat_proto_goTypes = nil
	file_proto_search_backend_seat_proto_depIdxs = nil
}
