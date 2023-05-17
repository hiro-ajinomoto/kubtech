// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/partner/mobile/partner_user.proto

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

type UserInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	CreatedAt      int64  `protobuf:"varint,2,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt      int64  `protobuf:"varint,3,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	CreatedBy      string `protobuf:"bytes,4,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	UpdatedBy      string `protobuf:"bytes,5,opt,name=updated_by,json=updatedBy,proto3" json:"updated_by,omitempty"`
	Email          string `protobuf:"bytes,6,opt,name=email,proto3" json:"email,omitempty"`
	Password       string `protobuf:"bytes,7,opt,name=password,proto3" json:"password,omitempty"`
	Name           string `protobuf:"bytes,8,opt,name=name,proto3" json:"name,omitempty"`
	ProfilePicture string `protobuf:"bytes,9,opt,name=profile_picture,json=profilePicture,proto3" json:"profile_picture,omitempty"`
	PartnershipId  string `protobuf:"bytes,10,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
	PhoneCode      string `protobuf:"bytes,11,opt,name=phone_code,json=phoneCode,proto3" json:"phone_code,omitempty"`
	PhoneNumber    string `protobuf:"bytes,12,opt,name=phone_number,json=phoneNumber,proto3" json:"phone_number,omitempty"`
	PartnerShopId  string `protobuf:"bytes,13,opt,name=partner_shop_id,json=partnerShopId,proto3" json:"partner_shop_id,omitempty"`
}

func (x *UserInfo) Reset() {
	*x = UserInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_partner_user_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserInfo) ProtoMessage() {}

func (x *UserInfo) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_partner_user_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserInfo.ProtoReflect.Descriptor instead.
func (*UserInfo) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_partner_user_proto_rawDescGZIP(), []int{0}
}

func (x *UserInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UserInfo) GetCreatedAt() int64 {
	if x != nil {
		return x.CreatedAt
	}
	return 0
}

func (x *UserInfo) GetUpdatedAt() int64 {
	if x != nil {
		return x.UpdatedAt
	}
	return 0
}

func (x *UserInfo) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *UserInfo) GetUpdatedBy() string {
	if x != nil {
		return x.UpdatedBy
	}
	return ""
}

func (x *UserInfo) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *UserInfo) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *UserInfo) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UserInfo) GetProfilePicture() string {
	if x != nil {
		return x.ProfilePicture
	}
	return ""
}

func (x *UserInfo) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

func (x *UserInfo) GetPhoneCode() string {
	if x != nil {
		return x.PhoneCode
	}
	return ""
}

func (x *UserInfo) GetPhoneNumber() string {
	if x != nil {
		return x.PhoneNumber
	}
	return ""
}

func (x *UserInfo) GetPartnerShopId() string {
	if x != nil {
		return x.PartnerShopId
	}
	return ""
}

type GetMeReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GetMeReq) Reset() {
	*x = GetMeReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_partner_user_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMeReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMeReq) ProtoMessage() {}

func (x *GetMeReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_partner_user_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMeReq.ProtoReflect.Descriptor instead.
func (*GetMeReq) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_partner_user_proto_rawDescGZIP(), []int{1}
}

type ChangePasswordReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OldPassword string `protobuf:"bytes,1,opt,name=old_password,json=oldPassword,proto3" json:"old_password,omitempty"`
	Password    string `protobuf:"bytes,2,opt,name=password,proto3" json:"password,omitempty"`
}

func (x *ChangePasswordReq) Reset() {
	*x = ChangePasswordReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_partner_user_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChangePasswordReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChangePasswordReq) ProtoMessage() {}

func (x *ChangePasswordReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_partner_user_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChangePasswordReq.ProtoReflect.Descriptor instead.
func (*ChangePasswordReq) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_partner_user_proto_rawDescGZIP(), []int{2}
}

func (x *ChangePasswordReq) GetOldPassword() string {
	if x != nil {
		return x.OldPassword
	}
	return ""
}

func (x *ChangePasswordReq) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

type GetMeRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserInfo *UserInfo `protobuf:"bytes,1,opt,name=user_info,json=userInfo,proto3" json:"user_info,omitempty"`
}

func (x *GetMeRes) Reset() {
	*x = GetMeRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_partner_user_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMeRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMeRes) ProtoMessage() {}

func (x *GetMeRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_partner_user_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMeRes.ProtoReflect.Descriptor instead.
func (*GetMeRes) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_partner_user_proto_rawDescGZIP(), []int{3}
}

func (x *GetMeRes) GetUserInfo() *UserInfo {
	if x != nil {
		return x.UserInfo
	}
	return nil
}

var File_proto_partner_mobile_partner_user_proto protoreflect.FileDescriptor

var file_proto_partner_mobile_partner_user_proto_rawDesc = []byte{
	0x0a, 0x27, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2f,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x5f, 0x75,
	0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x1a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2f, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f,
	0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x96, 0x03, 0x0a, 0x08, 0x55,
	0x73, 0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x5f, 0x61, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x5f, 0x62, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x42, 0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f,
	0x62, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x42, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73,
	0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73,
	0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x27, 0x0a, 0x0f, 0x70, 0x72, 0x6f,
	0x66, 0x69, 0x6c, 0x65, 0x5f, 0x70, 0x69, 0x63, 0x74, 0x75, 0x72, 0x65, 0x18, 0x09, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0e, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x50, 0x69, 0x63, 0x74, 0x75,
	0x72, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69,
	0x70, 0x5f, 0x69, 0x64, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x68, 0x6f,
	0x6e, 0x65, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70,
	0x68, 0x6f, 0x6e, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x68, 0x6f, 0x6e,
	0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x70, 0x68, 0x6f, 0x6e, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x26, 0x0a, 0x0f, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x5f, 0x73, 0x68, 0x6f, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x0d,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x53, 0x68, 0x6f,
	0x70, 0x49, 0x64, 0x22, 0x0a, 0x0a, 0x08, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x52, 0x65, 0x71, 0x22,
	0x52, 0x0a, 0x11, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72,
	0x64, 0x52, 0x65, 0x71, 0x12, 0x21, 0x0a, 0x0c, 0x6f, 0x6c, 0x64, 0x5f, 0x70, 0x61, 0x73, 0x73,
	0x77, 0x6f, 0x72, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6f, 0x6c, 0x64, 0x50,
	0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x22, 0x41, 0x0a, 0x08, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x52, 0x65, 0x73, 0x12,
	0x35, 0x0a, 0x09, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x18, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62,
	0x69, 0x6c, 0x65, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x08, 0x75, 0x73,
	0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x32, 0x9d, 0x01, 0x0a, 0x12, 0x50, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x55, 0x73, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3b, 0x0a,
	0x05, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x12, 0x18, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x52, 0x65, 0x71,
	0x1a, 0x18, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c,
	0x65, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x52, 0x65, 0x73, 0x12, 0x4a, 0x0a, 0x0e, 0x43, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x21, 0x2e, 0x70,
	0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x43, 0x68,
	0x61, 0x6e, 0x67, 0x65, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x1a,
	0x15, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65,
	0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x42, 0x11, 0x5a, 0x0f, 0x2e, 0x2f, 0x6d, 0x6f, 0x62, 0x69,
	0x6c, 0x65, 0x3b, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_proto_partner_mobile_partner_user_proto_rawDescOnce sync.Once
	file_proto_partner_mobile_partner_user_proto_rawDescData = file_proto_partner_mobile_partner_user_proto_rawDesc
)

func file_proto_partner_mobile_partner_user_proto_rawDescGZIP() []byte {
	file_proto_partner_mobile_partner_user_proto_rawDescOnce.Do(func() {
		file_proto_partner_mobile_partner_user_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_partner_mobile_partner_user_proto_rawDescData)
	})
	return file_proto_partner_mobile_partner_user_proto_rawDescData
}

var file_proto_partner_mobile_partner_user_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_proto_partner_mobile_partner_user_proto_goTypes = []interface{}{
	(*UserInfo)(nil),          // 0: partner.mobile.UserInfo
	(*GetMeReq)(nil),          // 1: partner.mobile.GetMeReq
	(*ChangePasswordReq)(nil), // 2: partner.mobile.ChangePasswordReq
	(*GetMeRes)(nil),          // 3: partner.mobile.GetMeRes
	(*Empty)(nil),             // 4: partner.mobile.Empty
}
var file_proto_partner_mobile_partner_user_proto_depIdxs = []int32{
	0, // 0: partner.mobile.GetMeRes.user_info:type_name -> partner.mobile.UserInfo
	1, // 1: partner.mobile.PartnerUserService.GetMe:input_type -> partner.mobile.GetMeReq
	2, // 2: partner.mobile.PartnerUserService.ChangePassword:input_type -> partner.mobile.ChangePasswordReq
	3, // 3: partner.mobile.PartnerUserService.GetMe:output_type -> partner.mobile.GetMeRes
	4, // 4: partner.mobile.PartnerUserService.ChangePassword:output_type -> partner.mobile.Empty
	3, // [3:5] is the sub-list for method output_type
	1, // [1:3] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_proto_partner_mobile_partner_user_proto_init() }
func file_proto_partner_mobile_partner_user_proto_init() {
	if File_proto_partner_mobile_partner_user_proto != nil {
		return
	}
	file_proto_partner_mobile_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_partner_mobile_partner_user_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserInfo); i {
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
		file_proto_partner_mobile_partner_user_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMeReq); i {
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
		file_proto_partner_mobile_partner_user_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChangePasswordReq); i {
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
		file_proto_partner_mobile_partner_user_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMeRes); i {
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
			RawDescriptor: file_proto_partner_mobile_partner_user_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_partner_mobile_partner_user_proto_goTypes,
		DependencyIndexes: file_proto_partner_mobile_partner_user_proto_depIdxs,
		MessageInfos:      file_proto_partner_mobile_partner_user_proto_msgTypes,
	}.Build()
	File_proto_partner_mobile_partner_user_proto = out.File
	file_proto_partner_mobile_partner_user_proto_rawDesc = nil
	file_proto_partner_mobile_partner_user_proto_goTypes = nil
	file_proto_partner_mobile_partner_user_proto_depIdxs = nil
}
