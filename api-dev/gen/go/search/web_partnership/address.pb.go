// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/search/web_partnership/address.proto

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

type AddressInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string  `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	CreatedAt   int64   `protobuf:"varint,2,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt   int64   `protobuf:"varint,3,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	Unit        string  `protobuf:"bytes,4,opt,name=unit,proto3" json:"unit,omitempty"`
	Number      string  `protobuf:"bytes,5,opt,name=number,proto3" json:"number,omitempty"`
	Street      string  `protobuf:"bytes,6,opt,name=street,proto3" json:"street,omitempty"`
	City        string  `protobuf:"bytes,7,opt,name=city,proto3" json:"city,omitempty"`
	District    string  `protobuf:"bytes,8,opt,name=district,proto3" json:"district,omitempty"`
	Region      string  `protobuf:"bytes,9,opt,name=region,proto3" json:"region,omitempty"`
	Postcode    string  `protobuf:"bytes,10,opt,name=postcode,proto3" json:"postcode,omitempty"`
	Lat         float64 `protobuf:"fixed64,11,opt,name=lat,proto3" json:"lat,omitempty"`
	Long        float64 `protobuf:"fixed64,12,opt,name=long,proto3" json:"long,omitempty"`
	Country     string  `protobuf:"bytes,13,opt,name=country,proto3" json:"country,omitempty"`
	FullAddress string  `protobuf:"bytes,14,opt,name=full_address,json=fullAddress,proto3" json:"full_address,omitempty"`
}

func (x *AddressInfo) Reset() {
	*x = AddressInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_web_partnership_address_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddressInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddressInfo) ProtoMessage() {}

func (x *AddressInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_web_partnership_address_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddressInfo.ProtoReflect.Descriptor instead.
func (*AddressInfo) Descriptor() ([]byte, []int) {
	return file_proto_search_web_partnership_address_proto_rawDescGZIP(), []int{0}
}

func (x *AddressInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *AddressInfo) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *AddressInfo) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *AddressInfo) GetUnit() string {
	if x != nil {
		return x.Unit
	}
	return ""
}

func (x *AddressInfo) GetNumber() string {
	if x != nil {
		return x.Number
	}
	return ""
}

func (x *AddressInfo) GetStreet() string {
	if x != nil {
		return x.Street
	}
	return ""
}

func (x *AddressInfo) GetCity() string {
	if x != nil {
		return x.City
	}
	return ""
}

func (x *AddressInfo) GetDistrict() string {
	if x != nil {
		return x.District
	}
	return ""
}

func (x *AddressInfo) GetRegion() string {
	if x != nil {
		return x.Region
	}
	return ""
}

func (x *AddressInfo) GetPostcode() string {
	if x != nil {
		return x.Postcode
	}
	return ""
}

func (x *AddressInfo) GetLat() float64 {
	if x != nil {
		return x.Lat
	}
	return 0
}

func (x *AddressInfo) GetLong() float64 {
	if x != nil {
		return x.Long
	}
	return 0
}

func (x *AddressInfo) GetCountry() string {
	if x != nil {
		return x.Country
	}
	return ""
}

func (x *AddressInfo) GetFullAddress() string {
	if x != nil {
		return x.FullAddress
	}
	return ""
}

type SearchAddressReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *PaginationReq `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	Address    string         `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
}

func (x *SearchAddressReq) Reset() {
	*x = SearchAddressReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_web_partnership_address_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SearchAddressReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SearchAddressReq) ProtoMessage() {}

func (x *SearchAddressReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_web_partnership_address_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SearchAddressReq.ProtoReflect.Descriptor instead.
func (*SearchAddressReq) Descriptor() ([]byte, []int) {
	return file_proto_search_web_partnership_address_proto_rawDescGZIP(), []int{1}
}

func (x *SearchAddressReq) GetPagination() *PaginationReq {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *SearchAddressReq) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

type SearchByPostcodeReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *PaginationReq `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	Postcode   string         `protobuf:"bytes,2,opt,name=postcode,proto3" json:"postcode,omitempty"`
}

func (x *SearchByPostcodeReq) Reset() {
	*x = SearchByPostcodeReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_web_partnership_address_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SearchByPostcodeReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SearchByPostcodeReq) ProtoMessage() {}

func (x *SearchByPostcodeReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_web_partnership_address_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SearchByPostcodeReq.ProtoReflect.Descriptor instead.
func (*SearchByPostcodeReq) Descriptor() ([]byte, []int) {
	return file_proto_search_web_partnership_address_proto_rawDescGZIP(), []int{2}
}

func (x *SearchByPostcodeReq) GetPagination() *PaginationReq {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *SearchByPostcodeReq) GetPostcode() string {
	if x != nil {
		return x.Postcode
	}
	return ""
}

type SearchAddressRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pagination *PaginationRes `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	Results    []*AddressInfo `protobuf:"bytes,2,rep,name=results,proto3" json:"results,omitempty"`
}

func (x *SearchAddressRes) Reset() {
	*x = SearchAddressRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_web_partnership_address_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SearchAddressRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SearchAddressRes) ProtoMessage() {}

func (x *SearchAddressRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_web_partnership_address_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SearchAddressRes.ProtoReflect.Descriptor instead.
func (*SearchAddressRes) Descriptor() ([]byte, []int) {
	return file_proto_search_web_partnership_address_proto_rawDescGZIP(), []int{3}
}

func (x *SearchAddressRes) GetPagination() *PaginationRes {
	if x != nil {
		return x.Pagination
	}
	return nil
}

func (x *SearchAddressRes) GetResults() []*AddressInfo {
	if x != nil {
		return x.Results
	}
	return nil
}

type SearchByPostcodeRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Result *AddressInfo `protobuf:"bytes,1,opt,name=result,proto3" json:"result,omitempty"`
}

func (x *SearchByPostcodeRes) Reset() {
	*x = SearchByPostcodeRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_search_web_partnership_address_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SearchByPostcodeRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SearchByPostcodeRes) ProtoMessage() {}

func (x *SearchByPostcodeRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_search_web_partnership_address_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SearchByPostcodeRes.ProtoReflect.Descriptor instead.
func (*SearchByPostcodeRes) Descriptor() ([]byte, []int) {
	return file_proto_search_web_partnership_address_proto_rawDescGZIP(), []int{4}
}

func (x *SearchByPostcodeRes) GetResult() *AddressInfo {
	if x != nil {
		return x.Result
	}
	return nil
}

var File_proto_search_web_partnership_address_proto protoreflect.FileDescriptor

var file_proto_search_web_partnership_address_proto_rawDesc = []byte{
	0x0a, 0x2a, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2f, 0x77,
	0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2f, 0x61,
	0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x73, 0x65,
	0x61, 0x72, 0x63, 0x68, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x73, 0x68, 0x69, 0x70, 0x1a, 0x27, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x73, 0x65, 0x61, 0x72,
	0x63, 0x68, 0x2f, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68,
	0x69, 0x70, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe6, 0x02,
	0x0a, 0x0b, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a,
	0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75,
	0x6e, 0x69, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x6e, 0x69, 0x74, 0x12,
	0x16, 0x0a, 0x06, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x72, 0x65, 0x65,
	0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x72, 0x65, 0x65, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x63, 0x69, 0x74, 0x79, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63,
	0x69, 0x74, 0x79, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x69, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x18,
	0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64, 0x69, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x12,
	0x16, 0x0a, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x6f, 0x73, 0x74, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x6f, 0x73, 0x74, 0x63,
	0x6f, 0x64, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6c, 0x61, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x01,
	0x52, 0x03, 0x6c, 0x61, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x6f, 0x6e, 0x67, 0x18, 0x0c, 0x20,
	0x01, 0x28, 0x01, 0x52, 0x04, 0x6c, 0x6f, 0x6e, 0x67, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x72, 0x79, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x21, 0x0a, 0x0c, 0x66, 0x75, 0x6c, 0x6c, 0x5f, 0x61, 0x64, 0x64, 0x72,
	0x65, 0x73, 0x73, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x66, 0x75, 0x6c, 0x6c, 0x41,
	0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x22, 0x73, 0x0a, 0x10, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68,
	0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x12, 0x45, 0x0a, 0x0a, 0x70, 0x61,
	0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25,
	0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x71, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x22, 0x78, 0x0a, 0x13, 0x53,
	0x65, 0x61, 0x72, 0x63, 0x68, 0x42, 0x79, 0x50, 0x6f, 0x73, 0x74, 0x63, 0x6f, 0x64, 0x65, 0x52,
	0x65, 0x71, 0x12, 0x45, 0x0a, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e,
	0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e,
	0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x52, 0x0a, 0x70,
	0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x6f, 0x73,
	0x74, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x6f, 0x73,
	0x74, 0x63, 0x6f, 0x64, 0x65, 0x22, 0x98, 0x01, 0x0a, 0x10, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68,
	0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x12, 0x45, 0x0a, 0x0a, 0x70, 0x61,
	0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25,
	0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x50, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x73, 0x52, 0x0a, 0x70, 0x61, 0x67, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x3d, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x23, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x77, 0x65, 0x62, 0x5f,
	0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x41, 0x64, 0x64, 0x72,
	0x65, 0x73, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73,
	0x22, 0x52, 0x0a, 0x13, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x42, 0x79, 0x50, 0x6f, 0x73, 0x74,
	0x63, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x73, 0x12, 0x3b, 0x0a, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c,
	0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68,
	0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70,
	0x2e, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x06, 0x72, 0x65,
	0x73, 0x75, 0x6c, 0x74, 0x32, 0xe3, 0x01, 0x0a, 0x0e, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x63, 0x0a, 0x0d, 0x53, 0x65, 0x61, 0x72, 0x63,
	0x68, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x28, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63,
	0x68, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69,
	0x70, 0x2e, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x52,
	0x65, 0x71, 0x1a, 0x28, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x77, 0x65, 0x62, 0x5f,
	0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x53, 0x65, 0x61, 0x72,
	0x63, 0x68, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x12, 0x6c, 0x0a, 0x10,
	0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x42, 0x79, 0x50, 0x6f, 0x73, 0x74, 0x63, 0x6f, 0x64, 0x65,
	0x12, 0x2b, 0x2e, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61,
	0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68,
	0x42, 0x79, 0x50, 0x6f, 0x73, 0x74, 0x63, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x71, 0x1a, 0x2b, 0x2e,
	0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x53, 0x65, 0x61, 0x72, 0x63, 0x68, 0x42, 0x79, 0x50,
	0x6f, 0x73, 0x74, 0x63, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x73, 0x42, 0x23, 0x5a, 0x21, 0x2e, 0x2f,
	0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x3b,
	0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_search_web_partnership_address_proto_rawDescOnce sync.Once
	file_proto_search_web_partnership_address_proto_rawDescData = file_proto_search_web_partnership_address_proto_rawDesc
)

func file_proto_search_web_partnership_address_proto_rawDescGZIP() []byte {
	file_proto_search_web_partnership_address_proto_rawDescOnce.Do(func() {
		file_proto_search_web_partnership_address_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_search_web_partnership_address_proto_rawDescData)
	})
	return file_proto_search_web_partnership_address_proto_rawDescData
}

var file_proto_search_web_partnership_address_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_proto_search_web_partnership_address_proto_goTypes = []interface{}{
	(*AddressInfo)(nil),         // 0: search.web_partnership.AddressInfo
	(*SearchAddressReq)(nil),    // 1: search.web_partnership.SearchAddressReq
	(*SearchByPostcodeReq)(nil), // 2: search.web_partnership.SearchByPostcodeReq
	(*SearchAddressRes)(nil),    // 3: search.web_partnership.SearchAddressRes
	(*SearchByPostcodeRes)(nil), // 4: search.web_partnership.SearchByPostcodeRes
	(*PaginationReq)(nil),       // 5: search.web_partnership.PaginationReq
	(*PaginationRes)(nil),       // 6: search.web_partnership.PaginationRes
}
var file_proto_search_web_partnership_address_proto_depIdxs = []int32{
	5, // 0: search.web_partnership.SearchAddressReq.pagination:type_name -> search.web_partnership.PaginationReq
	5, // 1: search.web_partnership.SearchByPostcodeReq.pagination:type_name -> search.web_partnership.PaginationReq
	6, // 2: search.web_partnership.SearchAddressRes.pagination:type_name -> search.web_partnership.PaginationRes
	0, // 3: search.web_partnership.SearchAddressRes.results:type_name -> search.web_partnership.AddressInfo
	0, // 4: search.web_partnership.SearchByPostcodeRes.result:type_name -> search.web_partnership.AddressInfo
	1, // 5: search.web_partnership.AddressService.SearchAddress:input_type -> search.web_partnership.SearchAddressReq
	2, // 6: search.web_partnership.AddressService.SearchByPostcode:input_type -> search.web_partnership.SearchByPostcodeReq
	3, // 7: search.web_partnership.AddressService.SearchAddress:output_type -> search.web_partnership.SearchAddressRes
	4, // 8: search.web_partnership.AddressService.SearchByPostcode:output_type -> search.web_partnership.SearchByPostcodeRes
	7, // [7:9] is the sub-list for method output_type
	5, // [5:7] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_proto_search_web_partnership_address_proto_init() }
func file_proto_search_web_partnership_address_proto_init() {
	if File_proto_search_web_partnership_address_proto != nil {
		return
	}
	file_proto_search_web_partnership_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_search_web_partnership_address_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddressInfo); i {
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
		file_proto_search_web_partnership_address_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SearchAddressReq); i {
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
		file_proto_search_web_partnership_address_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SearchByPostcodeReq); i {
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
		file_proto_search_web_partnership_address_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SearchAddressRes); i {
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
		file_proto_search_web_partnership_address_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SearchByPostcodeRes); i {
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
			RawDescriptor: file_proto_search_web_partnership_address_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_search_web_partnership_address_proto_goTypes,
		DependencyIndexes: file_proto_search_web_partnership_address_proto_depIdxs,
		MessageInfos:      file_proto_search_web_partnership_address_proto_msgTypes,
	}.Build()
	File_proto_search_web_partnership_address_proto = out.File
	file_proto_search_web_partnership_address_proto_rawDesc = nil
	file_proto_search_web_partnership_address_proto_goTypes = nil
	file_proto_search_web_partnership_address_proto_depIdxs = nil
}
