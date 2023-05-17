// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/customer/backend/location.proto

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

type CustomerLocationBasicInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name            string       `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description     string       `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Coordinates     *Coordinates `protobuf:"bytes,3,opt,name=coordinates,proto3" json:"coordinates,omitempty"`
	Unit            string       `protobuf:"bytes,4,opt,name=unit,proto3" json:"unit,omitempty"`
	Number          string       `protobuf:"bytes,5,opt,name=number,proto3" json:"number,omitempty"`
	Street          string       `protobuf:"bytes,6,opt,name=street,proto3" json:"street,omitempty"`
	Ward            string       `protobuf:"bytes,7,opt,name=ward,proto3" json:"ward,omitempty"`
	District        string       `protobuf:"bytes,8,opt,name=district,proto3" json:"district,omitempty"`
	City            string       `protobuf:"bytes,9,opt,name=city,proto3" json:"city,omitempty"`
	Region          string       `protobuf:"bytes,10,opt,name=region,proto3" json:"region,omitempty"`
	Country         string       `protobuf:"bytes,11,opt,name=country,proto3" json:"country,omitempty"`
	PostalCode      string       `protobuf:"bytes,12,opt,name=postal_code,json=postalCode,proto3" json:"postal_code,omitempty"`
	FullAddress     string       `protobuf:"bytes,13,opt,name=full_address,json=fullAddress,proto3" json:"full_address,omitempty"`
	Suburban        string       `protobuf:"bytes,14,opt,name=suburban,proto3" json:"suburban,omitempty"`
	UserFullName    string       `protobuf:"bytes,15,opt,name=user_full_name,json=userFullName,proto3" json:"user_full_name,omitempty"`
	UserPhoneCode   string       `protobuf:"bytes,16,opt,name=user_phone_code,json=userPhoneCode,proto3" json:"user_phone_code,omitempty"`
	UserPhoneNumber string       `protobuf:"bytes,17,opt,name=user_phone_number,json=userPhoneNumber,proto3" json:"user_phone_number,omitempty"`
	CustomerId      string       `protobuf:"bytes,18,opt,name=customer_id,json=customerId,proto3" json:"customer_id,omitempty"`
}

func (x *CustomerLocationBasicInfo) Reset() {
	*x = CustomerLocationBasicInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_customer_backend_location_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CustomerLocationBasicInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CustomerLocationBasicInfo) ProtoMessage() {}

func (x *CustomerLocationBasicInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_customer_backend_location_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CustomerLocationBasicInfo.ProtoReflect.Descriptor instead.
func (*CustomerLocationBasicInfo) Descriptor() ([]byte, []int) {
	return file_proto_customer_backend_location_proto_rawDescGZIP(), []int{0}
}

func (x *CustomerLocationBasicInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetCoordinates() *Coordinates {
	if x != nil {
		return x.Coordinates
	}
	return nil
}

func (x *CustomerLocationBasicInfo) GetUnit() string {
	if x != nil {
		return x.Unit
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetNumber() string {
	if x != nil {
		return x.Number
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetStreet() string {
	if x != nil {
		return x.Street
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetWard() string {
	if x != nil {
		return x.Ward
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetDistrict() string {
	if x != nil {
		return x.District
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetCity() string {
	if x != nil {
		return x.City
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetRegion() string {
	if x != nil {
		return x.Region
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetCountry() string {
	if x != nil {
		return x.Country
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetPostalCode() string {
	if x != nil {
		return x.PostalCode
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetFullAddress() string {
	if x != nil {
		return x.FullAddress
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetSuburban() string {
	if x != nil {
		return x.Suburban
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetUserFullName() string {
	if x != nil {
		return x.UserFullName
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetUserPhoneCode() string {
	if x != nil {
		return x.UserPhoneCode
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetUserPhoneNumber() string {
	if x != nil {
		return x.UserPhoneNumber
	}
	return ""
}

func (x *CustomerLocationBasicInfo) GetCustomerId() string {
	if x != nil {
		return x.CustomerId
	}
	return ""
}

type CustomerLocationInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string                     `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Info      *CustomerLocationBasicInfo `protobuf:"bytes,2,opt,name=info,proto3" json:"info,omitempty"`
	CreatedAt int64                      `protobuf:"varint,3,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt int64                      `protobuf:"varint,4,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	CreatedBy string                     `protobuf:"bytes,5,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedBy string                     `protobuf:"bytes,6,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
}

func (x *CustomerLocationInfo) Reset() {
	*x = CustomerLocationInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_customer_backend_location_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CustomerLocationInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CustomerLocationInfo) ProtoMessage() {}

func (x *CustomerLocationInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_customer_backend_location_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CustomerLocationInfo.ProtoReflect.Descriptor instead.
func (*CustomerLocationInfo) Descriptor() ([]byte, []int) {
	return file_proto_customer_backend_location_proto_rawDescGZIP(), []int{1}
}

func (x *CustomerLocationInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *CustomerLocationInfo) GetInfo() *CustomerLocationBasicInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

func (x *CustomerLocationInfo) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *CustomerLocationInfo) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *CustomerLocationInfo) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *CustomerLocationInfo) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

type RetrieveCustomerLocationReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *RetrieveCustomerLocationReq) Reset() {
	*x = RetrieveCustomerLocationReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_customer_backend_location_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RetrieveCustomerLocationReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RetrieveCustomerLocationReq) ProtoMessage() {}

func (x *RetrieveCustomerLocationReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_customer_backend_location_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RetrieveCustomerLocationReq.ProtoReflect.Descriptor instead.
func (*RetrieveCustomerLocationReq) Descriptor() ([]byte, []int) {
	return file_proto_customer_backend_location_proto_rawDescGZIP(), []int{2}
}

func (x *RetrieveCustomerLocationReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type RetrieveCustomerLocationRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info *CustomerLocationInfo `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
}

func (x *RetrieveCustomerLocationRes) Reset() {
	*x = RetrieveCustomerLocationRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_customer_backend_location_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RetrieveCustomerLocationRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RetrieveCustomerLocationRes) ProtoMessage() {}

func (x *RetrieveCustomerLocationRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_customer_backend_location_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RetrieveCustomerLocationRes.ProtoReflect.Descriptor instead.
func (*RetrieveCustomerLocationRes) Descriptor() ([]byte, []int) {
	return file_proto_customer_backend_location_proto_rawDescGZIP(), []int{3}
}

func (x *RetrieveCustomerLocationRes) GetInfo() *CustomerLocationInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

var File_proto_customer_backend_location_proto protoreflect.FileDescriptor

var file_proto_customer_backend_location_proto_rawDesc = []byte{
	0x0a, 0x25, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72,
	0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65,
	0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x1a, 0x21, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc7, 0x04, 0x0a,
	0x19, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20,
	0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x3f, 0x0a, 0x0b, 0x63, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x73, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72,
	0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x43, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e,
	0x61, 0x74, 0x65, 0x73, 0x52, 0x0b, 0x63, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65,
	0x73, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x6e, 0x69, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x75, 0x6e, 0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x16, 0x0a,
	0x06, 0x73, 0x74, 0x72, 0x65, 0x65, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73,
	0x74, 0x72, 0x65, 0x65, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x77, 0x61, 0x72, 0x64, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x77, 0x61, 0x72, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x69, 0x73,
	0x74, 0x72, 0x69, 0x63, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64, 0x69, 0x73,
	0x74, 0x72, 0x69, 0x63, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x69, 0x74, 0x79, 0x18, 0x09, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x69, 0x74, 0x79, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x65, 0x67,
	0x69, 0x6f, 0x6e, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f,
	0x6e, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x18, 0x0b, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x1f, 0x0a, 0x0b, 0x70,
	0x6f, 0x73, 0x74, 0x61, 0x6c, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0a, 0x70, 0x6f, 0x73, 0x74, 0x61, 0x6c, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x21, 0x0a, 0x0c,
	0x66, 0x75, 0x6c, 0x6c, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x0d, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0b, 0x66, 0x75, 0x6c, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12,
	0x1a, 0x0a, 0x08, 0x73, 0x75, 0x62, 0x75, 0x72, 0x62, 0x61, 0x6e, 0x18, 0x0e, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x73, 0x75, 0x62, 0x75, 0x72, 0x62, 0x61, 0x6e, 0x12, 0x24, 0x0a, 0x0e, 0x75,
	0x73, 0x65, 0x72, 0x5f, 0x66, 0x75, 0x6c, 0x6c, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0f, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x46, 0x75, 0x6c, 0x6c, 0x4e, 0x61, 0x6d,
	0x65, 0x12, 0x26, 0x0a, 0x0f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x75, 0x73, 0x65, 0x72,
	0x50, 0x68, 0x6f, 0x6e, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x2a, 0x0a, 0x11, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x11,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x75, 0x73, 0x65, 0x72, 0x50, 0x68, 0x6f, 0x6e, 0x65, 0x4e,
	0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x12, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x65, 0x72, 0x49, 0x64, 0x22, 0xe3, 0x01, 0x0a, 0x14, 0x43, 0x75, 0x73, 0x74, 0x6f,
	0x6d, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x3f, 0x0a, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2b, 0x2e,
	0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64,
	0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f,
	0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12,
	0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d,
	0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x12, 0x1d, 0x0a,
	0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x22, 0x2d, 0x0a, 0x1b,
	0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72,
	0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x59, 0x0a, 0x1b, 0x52,
	0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x4c,
	0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x12, 0x3a, 0x0a, 0x04, 0x69, 0x6e,
	0x66, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x63, 0x75, 0x73, 0x74, 0x6f,
	0x6d, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x43, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x66, 0x6f,
	0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x32, 0x93, 0x01, 0x0a, 0x17, 0x43, 0x75, 0x73, 0x74, 0x6f,
	0x6d, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0x78, 0x0a, 0x18, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x43, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2d,
	0x2e, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d,
	0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x1a, 0x2d, 0x2e,
	0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64,
	0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65,
	0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x42, 0x13, 0x5a, 0x11,
	0x2e, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x3b, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_customer_backend_location_proto_rawDescOnce sync.Once
	file_proto_customer_backend_location_proto_rawDescData = file_proto_customer_backend_location_proto_rawDesc
)

func file_proto_customer_backend_location_proto_rawDescGZIP() []byte {
	file_proto_customer_backend_location_proto_rawDescOnce.Do(func() {
		file_proto_customer_backend_location_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_customer_backend_location_proto_rawDescData)
	})
	return file_proto_customer_backend_location_proto_rawDescData
}

var file_proto_customer_backend_location_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_proto_customer_backend_location_proto_goTypes = []interface{}{
	(*CustomerLocationBasicInfo)(nil),   // 0: customer.backend.CustomerLocationBasicInfo
	(*CustomerLocationInfo)(nil),        // 1: customer.backend.CustomerLocationInfo
	(*RetrieveCustomerLocationReq)(nil), // 2: customer.backend.RetrieveCustomerLocationReq
	(*RetrieveCustomerLocationRes)(nil), // 3: customer.backend.RetrieveCustomerLocationRes
	(*Coordinates)(nil),                 // 4: customer.backend.Coordinates
}
var file_proto_customer_backend_location_proto_depIdxs = []int32{
	4, // 0: customer.backend.CustomerLocationBasicInfo.coordinates:type_name -> customer.backend.Coordinates
	0, // 1: customer.backend.CustomerLocationInfo.info:type_name -> customer.backend.CustomerLocationBasicInfo
	1, // 2: customer.backend.RetrieveCustomerLocationRes.info:type_name -> customer.backend.CustomerLocationInfo
	2, // 3: customer.backend.CustomerLocationService.RetrieveCustomerLocation:input_type -> customer.backend.RetrieveCustomerLocationReq
	3, // 4: customer.backend.CustomerLocationService.RetrieveCustomerLocation:output_type -> customer.backend.RetrieveCustomerLocationRes
	4, // [4:5] is the sub-list for method output_type
	3, // [3:4] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_proto_customer_backend_location_proto_init() }
func file_proto_customer_backend_location_proto_init() {
	if File_proto_customer_backend_location_proto != nil {
		return
	}
	file_proto_customer_backend_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_customer_backend_location_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CustomerLocationBasicInfo); i {
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
		file_proto_customer_backend_location_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CustomerLocationInfo); i {
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
		file_proto_customer_backend_location_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RetrieveCustomerLocationReq); i {
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
		file_proto_customer_backend_location_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RetrieveCustomerLocationRes); i {
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
			RawDescriptor: file_proto_customer_backend_location_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_customer_backend_location_proto_goTypes,
		DependencyIndexes: file_proto_customer_backend_location_proto_depIdxs,
		MessageInfos:      file_proto_customer_backend_location_proto_msgTypes,
	}.Build()
	File_proto_customer_backend_location_proto = out.File
	file_proto_customer_backend_location_proto_rawDesc = nil
	file_proto_customer_backend_location_proto_goTypes = nil
	file_proto_customer_backend_location_proto_depIdxs = nil
}