// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/partner/backend/partner_location.proto

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

type PartnerLocationContactInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FullName    string `protobuf:"bytes,1,opt,name=full_name,json=fullName,proto3" json:"full_name,omitempty"`
	PhoneCode   string `protobuf:"bytes,2,opt,name=phone_code,json=phoneCode,proto3" json:"phone_code,omitempty"`
	PhoneNumber string `protobuf:"bytes,3,opt,name=phone_number,json=phoneNumber,proto3" json:"phone_number,omitempty"`
}

func (x *PartnerLocationContactInfo) Reset() {
	*x = PartnerLocationContactInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_backend_partner_location_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PartnerLocationContactInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PartnerLocationContactInfo) ProtoMessage() {}

func (x *PartnerLocationContactInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_backend_partner_location_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PartnerLocationContactInfo.ProtoReflect.Descriptor instead.
func (*PartnerLocationContactInfo) Descriptor() ([]byte, []int) {
	return file_proto_partner_backend_partner_location_proto_rawDescGZIP(), []int{0}
}

func (x *PartnerLocationContactInfo) GetFullName() string {
	if x != nil {
		return x.FullName
	}
	return ""
}

func (x *PartnerLocationContactInfo) GetPhoneCode() string {
	if x != nil {
		return x.PhoneCode
	}
	return ""
}

func (x *PartnerLocationContactInfo) GetPhoneNumber() string {
	if x != nil {
		return x.PhoneNumber
	}
	return ""
}

type PartnerLocationBasicInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string                      `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description string                      `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Coordinates *Coordinates                `protobuf:"bytes,3,opt,name=coordinates,proto3" json:"coordinates,omitempty"`
	Unit        string                      `protobuf:"bytes,4,opt,name=unit,proto3" json:"unit,omitempty"`
	Number      string                      `protobuf:"bytes,5,opt,name=number,proto3" json:"number,omitempty"`
	Street      string                      `protobuf:"bytes,6,opt,name=street,proto3" json:"street,omitempty"`
	Ward        string                      `protobuf:"bytes,7,opt,name=ward,proto3" json:"ward,omitempty"`
	District    string                      `protobuf:"bytes,8,opt,name=district,proto3" json:"district,omitempty"`
	City        string                      `protobuf:"bytes,9,opt,name=city,proto3" json:"city,omitempty"`
	Region      string                      `protobuf:"bytes,10,opt,name=region,proto3" json:"region,omitempty"`
	Country     string                      `protobuf:"bytes,11,opt,name=country,proto3" json:"country,omitempty"`
	PostalCode  string                      `protobuf:"bytes,12,opt,name=postal_code,json=postalCode,proto3" json:"postal_code,omitempty"`
	FullAddress string                      `protobuf:"bytes,13,opt,name=full_address,json=fullAddress,proto3" json:"full_address,omitempty"`
	Suburban    string                      `protobuf:"bytes,14,opt,name=suburban,proto3" json:"suburban,omitempty"`
	PartnerId   string                      `protobuf:"bytes,15,opt,name=partner_id,json=partnerId,proto3" json:"partner_id,omitempty"`
	ContactInfo *PartnerLocationContactInfo `protobuf:"bytes,16,opt,name=contact_info,json=contactInfo,proto3" json:"contact_info,omitempty"`
}

func (x *PartnerLocationBasicInfo) Reset() {
	*x = PartnerLocationBasicInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_backend_partner_location_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PartnerLocationBasicInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PartnerLocationBasicInfo) ProtoMessage() {}

func (x *PartnerLocationBasicInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_backend_partner_location_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PartnerLocationBasicInfo.ProtoReflect.Descriptor instead.
func (*PartnerLocationBasicInfo) Descriptor() ([]byte, []int) {
	return file_proto_partner_backend_partner_location_proto_rawDescGZIP(), []int{1}
}

func (x *PartnerLocationBasicInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetCoordinates() *Coordinates {
	if x != nil {
		return x.Coordinates
	}
	return nil
}

func (x *PartnerLocationBasicInfo) GetUnit() string {
	if x != nil {
		return x.Unit
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetNumber() string {
	if x != nil {
		return x.Number
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetStreet() string {
	if x != nil {
		return x.Street
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetWard() string {
	if x != nil {
		return x.Ward
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetDistrict() string {
	if x != nil {
		return x.District
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetCity() string {
	if x != nil {
		return x.City
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetRegion() string {
	if x != nil {
		return x.Region
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetCountry() string {
	if x != nil {
		return x.Country
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetPostalCode() string {
	if x != nil {
		return x.PostalCode
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetFullAddress() string {
	if x != nil {
		return x.FullAddress
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetSuburban() string {
	if x != nil {
		return x.Suburban
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetPartnerId() string {
	if x != nil {
		return x.PartnerId
	}
	return ""
}

func (x *PartnerLocationBasicInfo) GetContactInfo() *PartnerLocationContactInfo {
	if x != nil {
		return x.ContactInfo
	}
	return nil
}

type PartnerLocationListInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string                    `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Info      *PartnerLocationBasicInfo `protobuf:"bytes,2,opt,name=info,proto3" json:"info,omitempty"`
	CreatedAt int64                     `protobuf:"varint,3,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt int64                     `protobuf:"varint,4,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	CreatedBy string                    `protobuf:"bytes,5,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedBy string                    `protobuf:"bytes,6,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
}

func (x *PartnerLocationListInfo) Reset() {
	*x = PartnerLocationListInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_backend_partner_location_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PartnerLocationListInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PartnerLocationListInfo) ProtoMessage() {}

func (x *PartnerLocationListInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_backend_partner_location_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PartnerLocationListInfo.ProtoReflect.Descriptor instead.
func (*PartnerLocationListInfo) Descriptor() ([]byte, []int) {
	return file_proto_partner_backend_partner_location_proto_rawDescGZIP(), []int{2}
}

func (x *PartnerLocationListInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PartnerLocationListInfo) GetInfo() *PartnerLocationBasicInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

func (x *PartnerLocationListInfo) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *PartnerLocationListInfo) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *PartnerLocationListInfo) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *PartnerLocationListInfo) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

type RetrievePartnerLocationReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *RetrievePartnerLocationReq) Reset() {
	*x = RetrievePartnerLocationReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_backend_partner_location_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RetrievePartnerLocationReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RetrievePartnerLocationReq) ProtoMessage() {}

func (x *RetrievePartnerLocationReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_backend_partner_location_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RetrievePartnerLocationReq.ProtoReflect.Descriptor instead.
func (*RetrievePartnerLocationReq) Descriptor() ([]byte, []int) {
	return file_proto_partner_backend_partner_location_proto_rawDescGZIP(), []int{3}
}

func (x *RetrievePartnerLocationReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type RetrievePartnerLocationRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info *PartnerLocationListInfo `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
}

func (x *RetrievePartnerLocationRes) Reset() {
	*x = RetrievePartnerLocationRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_backend_partner_location_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RetrievePartnerLocationRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RetrievePartnerLocationRes) ProtoMessage() {}

func (x *RetrievePartnerLocationRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_backend_partner_location_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RetrievePartnerLocationRes.ProtoReflect.Descriptor instead.
func (*RetrievePartnerLocationRes) Descriptor() ([]byte, []int) {
	return file_proto_partner_backend_partner_location_proto_rawDescGZIP(), []int{4}
}

func (x *RetrievePartnerLocationRes) GetInfo() *PartnerLocationListInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

var File_proto_partner_backend_partner_location_proto protoreflect.FileDescriptor

var file_proto_partner_backend_partner_location_proto_rawDesc = []byte{
	0x0a, 0x2c, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2f,
	0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x5f,
	0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f,
	0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x1a,
	0x20, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2f, 0x62,
	0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0x7b, 0x0a, 0x1a, 0x50, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12,
	0x1b, 0x0a, 0x09, 0x66, 0x75, 0x6c, 0x6c, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x66, 0x75, 0x6c, 0x6c, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1d, 0x0a, 0x0a,
	0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x70,
	0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x22, 0x99,
	0x04, 0x0a, 0x18, 0x50, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x3e, 0x0a, 0x0b, 0x63, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74, 0x65, 0x73,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
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
	0x09, 0x52, 0x08, 0x73, 0x75, 0x62, 0x75, 0x72, 0x62, 0x61, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x49, 0x64, 0x12, 0x4e, 0x0a, 0x0c, 0x63, 0x6f,
	0x6e, 0x74, 0x61, 0x63, 0x74, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x10, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x2b, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65,
	0x6e, 0x64, 0x2e, 0x50, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0b, 0x63,
	0x6f, 0x6e, 0x74, 0x61, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x22, 0xe4, 0x01, 0x0a, 0x17, 0x50,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x69,
	0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x3d, 0x0a, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x29, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x62,
	0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x50, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x61, 0x73, 0x69, 0x63, 0x49, 0x6e, 0x66, 0x6f, 0x52,
	0x04, 0x69, 0x6e, 0x66, 0x6f, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x5f, 0x61, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f,
	0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62,
	0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x42, 0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42,
	0x79, 0x22, 0x2c, 0x0a, 0x1a, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x50, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22,
	0x5a, 0x0a, 0x1a, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x50, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x12, 0x3c, 0x0a,
	0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x70, 0x61,
	0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x50, 0x61,
	0x72, 0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x69, 0x73,
	0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x32, 0x8d, 0x01, 0x0a, 0x16,
	0x50, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x73, 0x0a, 0x17, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65,
	0x76, 0x65, 0x50, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x2b, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b,
	0x65, 0x6e, 0x64, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x50, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x1a, 0x2b,
	0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64,
	0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x50, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x42, 0x13, 0x5a, 0x11, 0x2e,
	0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x3b, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_partner_backend_partner_location_proto_rawDescOnce sync.Once
	file_proto_partner_backend_partner_location_proto_rawDescData = file_proto_partner_backend_partner_location_proto_rawDesc
)

func file_proto_partner_backend_partner_location_proto_rawDescGZIP() []byte {
	file_proto_partner_backend_partner_location_proto_rawDescOnce.Do(func() {
		file_proto_partner_backend_partner_location_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_partner_backend_partner_location_proto_rawDescData)
	})
	return file_proto_partner_backend_partner_location_proto_rawDescData
}

var file_proto_partner_backend_partner_location_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_proto_partner_backend_partner_location_proto_goTypes = []interface{}{
	(*PartnerLocationContactInfo)(nil), // 0: partner.backend.PartnerLocationContactInfo
	(*PartnerLocationBasicInfo)(nil),   // 1: partner.backend.PartnerLocationBasicInfo
	(*PartnerLocationListInfo)(nil),    // 2: partner.backend.PartnerLocationListInfo
	(*RetrievePartnerLocationReq)(nil), // 3: partner.backend.RetrievePartnerLocationReq
	(*RetrievePartnerLocationRes)(nil), // 4: partner.backend.RetrievePartnerLocationRes
	(*Coordinates)(nil),                // 5: partner.backend.Coordinates
}
var file_proto_partner_backend_partner_location_proto_depIdxs = []int32{
	5, // 0: partner.backend.PartnerLocationBasicInfo.coordinates:type_name -> partner.backend.Coordinates
	0, // 1: partner.backend.PartnerLocationBasicInfo.contact_info:type_name -> partner.backend.PartnerLocationContactInfo
	1, // 2: partner.backend.PartnerLocationListInfo.info:type_name -> partner.backend.PartnerLocationBasicInfo
	2, // 3: partner.backend.RetrievePartnerLocationRes.info:type_name -> partner.backend.PartnerLocationListInfo
	3, // 4: partner.backend.PartnerLocationService.RetrievePartnerLocation:input_type -> partner.backend.RetrievePartnerLocationReq
	4, // 5: partner.backend.PartnerLocationService.RetrievePartnerLocation:output_type -> partner.backend.RetrievePartnerLocationRes
	5, // [5:6] is the sub-list for method output_type
	4, // [4:5] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_proto_partner_backend_partner_location_proto_init() }
func file_proto_partner_backend_partner_location_proto_init() {
	if File_proto_partner_backend_partner_location_proto != nil {
		return
	}
	file_proto_partner_backend_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_partner_backend_partner_location_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PartnerLocationContactInfo); i {
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
		file_proto_partner_backend_partner_location_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PartnerLocationBasicInfo); i {
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
		file_proto_partner_backend_partner_location_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PartnerLocationListInfo); i {
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
		file_proto_partner_backend_partner_location_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RetrievePartnerLocationReq); i {
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
		file_proto_partner_backend_partner_location_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RetrievePartnerLocationRes); i {
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
			RawDescriptor: file_proto_partner_backend_partner_location_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_partner_backend_partner_location_proto_goTypes,
		DependencyIndexes: file_proto_partner_backend_partner_location_proto_depIdxs,
		MessageInfos:      file_proto_partner_backend_partner_location_proto_msgTypes,
	}.Build()
	File_proto_partner_backend_partner_location_proto = out.File
	file_proto_partner_backend_partner_location_proto_rawDesc = nil
	file_proto_partner_backend_partner_location_proto_goTypes = nil
	file_proto_partner_backend_partner_location_proto_depIdxs = nil
}
