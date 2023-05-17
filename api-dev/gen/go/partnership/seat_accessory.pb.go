// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/partnership/seat_accessory.proto

package partnership

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

type SeatAccessoryBasicInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *SeatAccessoryBasicInfo) Reset() {
	*x = SeatAccessoryBasicInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatAccessoryBasicInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatAccessoryBasicInfo) ProtoMessage() {}

func (x *SeatAccessoryBasicInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[0]
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
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{0}
}

func (x *SeatAccessoryBasicInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type SeatAccessoryListInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string                  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Info      *SeatAccessoryBasicInfo `protobuf:"bytes,2,opt,name=info,proto3" json:"info,omitempty"`
	CreatedAt int64                   `protobuf:"varint,3,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt int64                   `protobuf:"varint,4,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	CreatedBy string                  `protobuf:"bytes,5,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedBy string                  `protobuf:"bytes,6,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
}

func (x *SeatAccessoryListInfo) Reset() {
	*x = SeatAccessoryListInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SeatAccessoryListInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SeatAccessoryListInfo) ProtoMessage() {}

func (x *SeatAccessoryListInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SeatAccessoryListInfo.ProtoReflect.Descriptor instead.
func (*SeatAccessoryListInfo) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{1}
}

func (x *SeatAccessoryListInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *SeatAccessoryListInfo) GetInfo() *SeatAccessoryBasicInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

func (x *SeatAccessoryListInfo) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *SeatAccessoryListInfo) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *SeatAccessoryListInfo) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *SeatAccessoryListInfo) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

type CreateSeatAccessoryReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info *SeatAccessoryBasicInfo `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
}

func (x *CreateSeatAccessoryReq) Reset() {
	*x = CreateSeatAccessoryReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateSeatAccessoryReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateSeatAccessoryReq) ProtoMessage() {}

func (x *CreateSeatAccessoryReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateSeatAccessoryReq.ProtoReflect.Descriptor instead.
func (*CreateSeatAccessoryReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{2}
}

func (x *CreateSeatAccessoryReq) GetInfo() *SeatAccessoryBasicInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

type UpdateSeatAccessoryReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string                  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Info *SeatAccessoryBasicInfo `protobuf:"bytes,2,opt,name=info,proto3" json:"info,omitempty"`
}

func (x *UpdateSeatAccessoryReq) Reset() {
	*x = UpdateSeatAccessoryReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateSeatAccessoryReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateSeatAccessoryReq) ProtoMessage() {}

func (x *UpdateSeatAccessoryReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateSeatAccessoryReq.ProtoReflect.Descriptor instead.
func (*UpdateSeatAccessoryReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{3}
}

func (x *UpdateSeatAccessoryReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UpdateSeatAccessoryReq) GetInfo() *SeatAccessoryBasicInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

type DeleteSeatAccessoryReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *DeleteSeatAccessoryReq) Reset() {
	*x = DeleteSeatAccessoryReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteSeatAccessoryReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteSeatAccessoryReq) ProtoMessage() {}

func (x *DeleteSeatAccessoryReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteSeatAccessoryReq.ProtoReflect.Descriptor instead.
func (*DeleteSeatAccessoryReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{4}
}

func (x *DeleteSeatAccessoryReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type ListSeatAccessoryReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SearchText string         `protobuf:"bytes,1,opt,name=search_text,json=searchText,proto3" json:"search_text,omitempty"` // TODO: Vi và Toàn support
	Pagination *PaginationReq `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
	OrderBy    []*OrderByItem `protobuf:"bytes,3,rep,name=order_by,json=orderBy,proto3" json:"order_by,omitempty"`
}

func (x *ListSeatAccessoryReq) Reset() {
	*x = ListSeatAccessoryReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListSeatAccessoryReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSeatAccessoryReq) ProtoMessage() {}

func (x *ListSeatAccessoryReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSeatAccessoryReq.ProtoReflect.Descriptor instead.
func (*ListSeatAccessoryReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{5}
}

func (x *ListSeatAccessoryReq) GetSearchText() string {
	if x != nil {
		return x.SearchText
	}
	return ""
}

func (x *ListSeatAccessoryReq) GetPagination() *PaginationReq {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *ListSeatAccessoryReq) GetOrderBy() []*OrderByItem {
	if x != nil {
		return x.OrderBy
	}
	return nil
}

type RetrieveSeatAccessoryReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *RetrieveSeatAccessoryReq) Reset() {
	*x = RetrieveSeatAccessoryReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RetrieveSeatAccessoryReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RetrieveSeatAccessoryReq) ProtoMessage() {}

func (x *RetrieveSeatAccessoryReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RetrieveSeatAccessoryReq.ProtoReflect.Descriptor instead.
func (*RetrieveSeatAccessoryReq) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{6}
}

func (x *RetrieveSeatAccessoryReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type CreateSeatAccessoryRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateSeatAccessoryRes) Reset() {
	*x = CreateSeatAccessoryRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateSeatAccessoryRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateSeatAccessoryRes) ProtoMessage() {}

func (x *CreateSeatAccessoryRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateSeatAccessoryRes.ProtoReflect.Descriptor instead.
func (*CreateSeatAccessoryRes) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{7}
}

func (x *CreateSeatAccessoryRes) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type RetrieveSeatAccessoryRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string                  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Info      *SeatAccessoryBasicInfo `protobuf:"bytes,2,opt,name=info,proto3" json:"info,omitempty"`
	CreatedAt int64                   `protobuf:"varint,3,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt int64                   `protobuf:"varint,4,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	CreatedBy string                  `protobuf:"bytes,5,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedBy string                  `protobuf:"bytes,6,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
}

func (x *RetrieveSeatAccessoryRes) Reset() {
	*x = RetrieveSeatAccessoryRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RetrieveSeatAccessoryRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RetrieveSeatAccessoryRes) ProtoMessage() {}

func (x *RetrieveSeatAccessoryRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RetrieveSeatAccessoryRes.ProtoReflect.Descriptor instead.
func (*RetrieveSeatAccessoryRes) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{8}
}

func (x *RetrieveSeatAccessoryRes) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *RetrieveSeatAccessoryRes) GetInfo() *SeatAccessoryBasicInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

func (x *RetrieveSeatAccessoryRes) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *RetrieveSeatAccessoryRes) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *RetrieveSeatAccessoryRes) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *RetrieveSeatAccessoryRes) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

type ListSeatAccessoryRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info       []*SeatAccessoryListInfo `protobuf:"bytes,1,rep,name=info,proto3" json:"info,omitempty"`
	Pagination *PaginationRes           `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (x *ListSeatAccessoryRes) Reset() {
	*x = ListSeatAccessoryRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partnership_seat_accessory_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListSeatAccessoryRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSeatAccessoryRes) ProtoMessage() {}

func (x *ListSeatAccessoryRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partnership_seat_accessory_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSeatAccessoryRes.ProtoReflect.Descriptor instead.
func (*ListSeatAccessoryRes) Descriptor() ([]byte, []int) {
	return file_proto_partnership_seat_accessory_proto_rawDescGZIP(), []int{9}
}

func (x *ListSeatAccessoryRes) GetInfo() []*SeatAccessoryListInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

func (x *ListSeatAccessoryRes) GetPagination() *PaginationRes {
	if x != nil {
		return x.Pagination
	}
	return nil
}

var File_proto_partnership_seat_accessory_proto protoreflect.FileDescriptor

var file_proto_partnership_seat_accessory_proto_rawDesc = []byte{
	0x0a, 0x26, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73,
	0x68, 0x69, 0x70, 0x2f, 0x73, 0x65, 0x61, 0x74, 0x5f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f,
	0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65,
	0x72, 0x73, 0x68, 0x69, 0x70, 0x1a, 0x1c, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x2c, 0x0a, 0x16, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x6f, 0x72, 0x79, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x22, 0xdc, 0x01, 0x0a, 0x15, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x6f, 0x72, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x37, 0x0a, 0x04, 0x69,
	0x6e, 0x66, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x6f, 0x72, 0x79, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04,
	0x69, 0x6e, 0x66, 0x6f, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f,
	0x61, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61,
	0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64,
	0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42,
	0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79,
	0x22, 0x51, 0x0a, 0x16, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x12, 0x37, 0x0a, 0x04, 0x69, 0x6e,
	0x66, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x6f, 0x72, 0x79, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x69,
	0x6e, 0x66, 0x6f, 0x22, 0x61, 0x0a, 0x16, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x53, 0x65, 0x61,
	0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x37, 0x0a,
	0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70, 0x61,
	0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f,
	0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x22, 0x28, 0x0a, 0x16, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x22, 0xa8, 0x01, 0x0a, 0x14, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x65, 0x61,
	0x72, 0x63, 0x68, 0x5f, 0x74, 0x65, 0x78, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a,
	0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x54, 0x65, 0x78, 0x74, 0x12, 0x3a, 0x0a, 0x0a, 0x70, 0x61,
	0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x50, 0x61, 0x67,
	0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69,
	0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x33, 0x0a, 0x08, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x5f,
	0x62, 0x79, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x42, 0x79, 0x49, 0x74,
	0x65, 0x6d, 0x52, 0x07, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x42, 0x79, 0x22, 0x2a, 0x0a, 0x18, 0x52,
	0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x28, 0x0a, 0x16, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65,
	0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x22, 0xdf, 0x01, 0x0a, 0x18, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x53, 0x65,
	0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x73, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x37,
	0x0a, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x41,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66,
	0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x5f, 0x62, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x42, 0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f,
	0x62, 0x79, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x42, 0x79, 0x22, 0x8a, 0x01, 0x0a, 0x14, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x61, 0x74,
	0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x73, 0x12, 0x36, 0x0a, 0x04,
	0x69, 0x6e, 0x66, 0x6f, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x70, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04,
	0x69, 0x6e, 0x66, 0x6f, 0x12, 0x3a, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x32, 0xd9, 0x03, 0x0a, 0x14, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f,
	0x72, 0x79, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x5f, 0x0a, 0x13, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79,
	0x12, 0x23, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f,
	0x72, 0x79, 0x52, 0x65, 0x71, 0x1a, 0x23, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73,
	0x68, 0x69, 0x70, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x73, 0x12, 0x4e, 0x0a, 0x13, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72,
	0x79, 0x12, 0x23, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x1a, 0x12, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x12, 0x4e, 0x0a, 0x13, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72,
	0x79, 0x12, 0x23, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x1a, 0x12, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x12, 0x65, 0x0a, 0x15, 0x52, 0x65,
	0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x6f, 0x72, 0x79, 0x12, 0x25, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69,
	0x70, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x1a, 0x25, 0x2e, 0x70, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76,
	0x65, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65,
	0x73, 0x12, 0x59, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x12, 0x21, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x61, 0x74, 0x41, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x1a, 0x21, 0x2e, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x65, 0x61, 0x74,
	0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x73, 0x42, 0x10, 0x5a, 0x0e,
	0x2e, 0x2f, 0x3b, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_partnership_seat_accessory_proto_rawDescOnce sync.Once
	file_proto_partnership_seat_accessory_proto_rawDescData = file_proto_partnership_seat_accessory_proto_rawDesc
)

func file_proto_partnership_seat_accessory_proto_rawDescGZIP() []byte {
	file_proto_partnership_seat_accessory_proto_rawDescOnce.Do(func() {
		file_proto_partnership_seat_accessory_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_partnership_seat_accessory_proto_rawDescData)
	})
	return file_proto_partnership_seat_accessory_proto_rawDescData
}

var file_proto_partnership_seat_accessory_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_proto_partnership_seat_accessory_proto_goTypes = []interface{}{
	(*SeatAccessoryBasicInfo)(nil),   // 0: partnership.SeatAccessoryBasicInfo
	(*SeatAccessoryListInfo)(nil),    // 1: partnership.SeatAccessoryListInfo
	(*CreateSeatAccessoryReq)(nil),   // 2: partnership.CreateSeatAccessoryReq
	(*UpdateSeatAccessoryReq)(nil),   // 3: partnership.UpdateSeatAccessoryReq
	(*DeleteSeatAccessoryReq)(nil),   // 4: partnership.DeleteSeatAccessoryReq
	(*ListSeatAccessoryReq)(nil),     // 5: partnership.ListSeatAccessoryReq
	(*RetrieveSeatAccessoryReq)(nil), // 6: partnership.RetrieveSeatAccessoryReq
	(*CreateSeatAccessoryRes)(nil),   // 7: partnership.CreateSeatAccessoryRes
	(*RetrieveSeatAccessoryRes)(nil), // 8: partnership.RetrieveSeatAccessoryRes
	(*ListSeatAccessoryRes)(nil),     // 9: partnership.ListSeatAccessoryRes
	(*PaginationReq)(nil),            // 10: partnership.PaginationReq
	(*OrderByItem)(nil),              // 11: partnership.OrderByItem
	(*PaginationRes)(nil),            // 12: partnership.PaginationRes
	(*Empty)(nil),                    // 13: partnership.Empty
}
var file_proto_partnership_seat_accessory_proto_depIdxs = []int32{
	0,  // 0: partnership.SeatAccessoryListInfo.info:type_name -> partnership.SeatAccessoryBasicInfo
	0,  // 1: partnership.CreateSeatAccessoryReq.info:type_name -> partnership.SeatAccessoryBasicInfo
	0,  // 2: partnership.UpdateSeatAccessoryReq.info:type_name -> partnership.SeatAccessoryBasicInfo
	10, // 3: partnership.ListSeatAccessoryReq.pagination:type_name -> partnership.PaginationReq
	11, // 4: partnership.ListSeatAccessoryReq.order_by:type_name -> partnership.OrderByItem
	0,  // 5: partnership.RetrieveSeatAccessoryRes.info:type_name -> partnership.SeatAccessoryBasicInfo
	1,  // 6: partnership.ListSeatAccessoryRes.info:type_name -> partnership.SeatAccessoryListInfo
	12, // 7: partnership.ListSeatAccessoryRes.pagination:type_name -> partnership.PaginationRes
	2,  // 8: partnership.SeatAccessoryService.CreateSeatAccessory:input_type -> partnership.CreateSeatAccessoryReq
	3,  // 9: partnership.SeatAccessoryService.UpdateSeatAccessory:input_type -> partnership.UpdateSeatAccessoryReq
	4,  // 10: partnership.SeatAccessoryService.DeleteSeatAccessory:input_type -> partnership.DeleteSeatAccessoryReq
	6,  // 11: partnership.SeatAccessoryService.RetrieveSeatAccessory:input_type -> partnership.RetrieveSeatAccessoryReq
	5,  // 12: partnership.SeatAccessoryService.ListSeatAccessory:input_type -> partnership.ListSeatAccessoryReq
	7,  // 13: partnership.SeatAccessoryService.CreateSeatAccessory:output_type -> partnership.CreateSeatAccessoryRes
	13, // 14: partnership.SeatAccessoryService.UpdateSeatAccessory:output_type -> partnership.Empty
	13, // 15: partnership.SeatAccessoryService.DeleteSeatAccessory:output_type -> partnership.Empty
	8,  // 16: partnership.SeatAccessoryService.RetrieveSeatAccessory:output_type -> partnership.RetrieveSeatAccessoryRes
	9,  // 17: partnership.SeatAccessoryService.ListSeatAccessory:output_type -> partnership.ListSeatAccessoryRes
	13, // [13:18] is the sub-list for method output_type
	8,  // [8:13] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_proto_partnership_seat_accessory_proto_init() }
func file_proto_partnership_seat_accessory_proto_init() {
	if File_proto_partnership_seat_accessory_proto != nil {
		return
	}
	file_proto_partnership_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_partnership_seat_accessory_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SeatAccessoryListInfo); i {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateSeatAccessoryReq); i {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateSeatAccessoryReq); i {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteSeatAccessoryReq); i {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListSeatAccessoryReq); i {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RetrieveSeatAccessoryReq); i {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateSeatAccessoryRes); i {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RetrieveSeatAccessoryRes); i {
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
		file_proto_partnership_seat_accessory_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListSeatAccessoryRes); i {
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
			RawDescriptor: file_proto_partnership_seat_accessory_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_partnership_seat_accessory_proto_goTypes,
		DependencyIndexes: file_proto_partnership_seat_accessory_proto_depIdxs,
		MessageInfos:      file_proto_partnership_seat_accessory_proto_msgTypes,
	}.Build()
	File_proto_partnership_seat_accessory_proto = out.File
	file_proto_partnership_seat_accessory_proto_rawDesc = nil
	file_proto_partnership_seat_accessory_proto_goTypes = nil
	file_proto_partnership_seat_accessory_proto_depIdxs = nil
}