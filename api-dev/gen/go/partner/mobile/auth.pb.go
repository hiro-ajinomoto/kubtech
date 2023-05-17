// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/partner/mobile/auth.proto

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

type LoginReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PhoneCode     string `protobuf:"bytes,1,opt,name=phone_code,json=phoneCode,proto3" json:"phone_code,omitempty"`
	PhoneNumber   string `protobuf:"bytes,2,opt,name=phone_number,json=phoneNumber,proto3" json:"phone_number,omitempty"`
	Password      string `protobuf:"bytes,3,opt,name=password,proto3" json:"password,omitempty"`
	PartnershipId string `protobuf:"bytes,4,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
}

func (x *LoginReq) Reset() {
	*x = LoginReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginReq) ProtoMessage() {}

func (x *LoginReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginReq.ProtoReflect.Descriptor instead.
func (*LoginReq) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{0}
}

func (x *LoginReq) GetPhoneCode() string {
	if x != nil {
		return x.PhoneCode
	}
	return ""
}

func (x *LoginReq) GetPhoneNumber() string {
	if x != nil {
		return x.PhoneNumber
	}
	return ""
}

func (x *LoginReq) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *LoginReq) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

type SendOtpToResetPasswordReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PhoneCode      string `protobuf:"bytes,1,opt,name=phone_code,json=phoneCode,proto3" json:"phone_code,omitempty"`
	PhoneNumber    string `protobuf:"bytes,2,opt,name=phone_number,json=phoneNumber,proto3" json:"phone_number,omitempty"`
	PartnershipId  string `protobuf:"bytes,3,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
	RecaptchaToken string `protobuf:"bytes,4,opt,name=recaptcha_token,json=recaptchaToken,proto3" json:"recaptcha_token,omitempty"`
}

func (x *SendOtpToResetPasswordReq) Reset() {
	*x = SendOtpToResetPasswordReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendOtpToResetPasswordReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendOtpToResetPasswordReq) ProtoMessage() {}

func (x *SendOtpToResetPasswordReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendOtpToResetPasswordReq.ProtoReflect.Descriptor instead.
func (*SendOtpToResetPasswordReq) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{1}
}

func (x *SendOtpToResetPasswordReq) GetPhoneCode() string {
	if x != nil {
		return x.PhoneCode
	}
	return ""
}

func (x *SendOtpToResetPasswordReq) GetPhoneNumber() string {
	if x != nil {
		return x.PhoneNumber
	}
	return ""
}

func (x *SendOtpToResetPasswordReq) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

func (x *SendOtpToResetPasswordReq) GetRecaptchaToken() string {
	if x != nil {
		return x.RecaptchaToken
	}
	return ""
}

type VerifyOtpToResetPasswordReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PhoneCode     string `protobuf:"bytes,1,opt,name=phone_code,json=phoneCode,proto3" json:"phone_code,omitempty"`
	PhoneNumber   string `protobuf:"bytes,2,opt,name=phone_number,json=phoneNumber,proto3" json:"phone_number,omitempty"`
	Otp           string `protobuf:"bytes,3,opt,name=otp,proto3" json:"otp,omitempty"`
	PartnershipId string `protobuf:"bytes,4,opt,name=partnership_id,json=partnershipId,proto3" json:"partnership_id,omitempty"`
	FirebaseSid   string `protobuf:"bytes,5,opt,name=firebase_sid,json=firebaseSid,proto3" json:"firebase_sid,omitempty"`
}

func (x *VerifyOtpToResetPasswordReq) Reset() {
	*x = VerifyOtpToResetPasswordReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerifyOtpToResetPasswordReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerifyOtpToResetPasswordReq) ProtoMessage() {}

func (x *VerifyOtpToResetPasswordReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerifyOtpToResetPasswordReq.ProtoReflect.Descriptor instead.
func (*VerifyOtpToResetPasswordReq) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{2}
}

func (x *VerifyOtpToResetPasswordReq) GetPhoneCode() string {
	if x != nil {
		return x.PhoneCode
	}
	return ""
}

func (x *VerifyOtpToResetPasswordReq) GetPhoneNumber() string {
	if x != nil {
		return x.PhoneNumber
	}
	return ""
}

func (x *VerifyOtpToResetPasswordReq) GetOtp() string {
	if x != nil {
		return x.Otp
	}
	return ""
}

func (x *VerifyOtpToResetPasswordReq) GetPartnershipId() string {
	if x != nil {
		return x.PartnershipId
	}
	return ""
}

func (x *VerifyOtpToResetPasswordReq) GetFirebaseSid() string {
	if x != nil {
		return x.FirebaseSid
	}
	return ""
}

type ResetPasswordReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	NewPassword string `protobuf:"bytes,1,opt,name=new_password,json=newPassword,proto3" json:"new_password,omitempty"`
}

func (x *ResetPasswordReq) Reset() {
	*x = ResetPasswordReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResetPasswordReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResetPasswordReq) ProtoMessage() {}

func (x *ResetPasswordReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResetPasswordReq.ProtoReflect.Descriptor instead.
func (*ResetPasswordReq) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{3}
}

func (x *ResetPasswordReq) GetNewPassword() string {
	if x != nil {
		return x.NewPassword
	}
	return ""
}

type RefreshTokenReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RefreshToken string `protobuf:"bytes,1,opt,name=refresh_token,json=refreshToken,proto3" json:"refresh_token,omitempty"`
}

func (x *RefreshTokenReq) Reset() {
	*x = RefreshTokenReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RefreshTokenReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RefreshTokenReq) ProtoMessage() {}

func (x *RefreshTokenReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RefreshTokenReq.ProtoReflect.Descriptor instead.
func (*RefreshTokenReq) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{4}
}

func (x *RefreshTokenReq) GetRefreshToken() string {
	if x != nil {
		return x.RefreshToken
	}
	return ""
}

type LoginRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccessToken  string `protobuf:"bytes,1,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	RefreshToken string `protobuf:"bytes,2,opt,name=refresh_token,json=refreshToken,proto3" json:"refresh_token,omitempty"`
	ExpiredTime  uint64 `protobuf:"varint,3,opt,name=expired_time,json=expiredTime,proto3" json:"expired_time,omitempty"`
}

func (x *LoginRes) Reset() {
	*x = LoginRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginRes) ProtoMessage() {}

func (x *LoginRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginRes.ProtoReflect.Descriptor instead.
func (*LoginRes) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{5}
}

func (x *LoginRes) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *LoginRes) GetRefreshToken() string {
	if x != nil {
		return x.RefreshToken
	}
	return ""
}

func (x *LoginRes) GetExpiredTime() uint64 {
	if x != nil {
		return x.ExpiredTime
	}
	return 0
}

type SendOtpToResetPasswordRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TimeRemaining uint32 `protobuf:"varint,1,opt,name=time_remaining,json=timeRemaining,proto3" json:"time_remaining,omitempty"`
}

func (x *SendOtpToResetPasswordRes) Reset() {
	*x = SendOtpToResetPasswordRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendOtpToResetPasswordRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendOtpToResetPasswordRes) ProtoMessage() {}

func (x *SendOtpToResetPasswordRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendOtpToResetPasswordRes.ProtoReflect.Descriptor instead.
func (*SendOtpToResetPasswordRes) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{6}
}

func (x *SendOtpToResetPasswordRes) GetTimeRemaining() uint32 {
	if x != nil {
		return x.TimeRemaining
	}
	return 0
}

type VerifyOtpToResetPasswordRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccessToken string `protobuf:"bytes,1,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	ExpiredTime uint64 `protobuf:"varint,2,opt,name=expired_time,json=expiredTime,proto3" json:"expired_time,omitempty"`
}

func (x *VerifyOtpToResetPasswordRes) Reset() {
	*x = VerifyOtpToResetPasswordRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VerifyOtpToResetPasswordRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VerifyOtpToResetPasswordRes) ProtoMessage() {}

func (x *VerifyOtpToResetPasswordRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VerifyOtpToResetPasswordRes.ProtoReflect.Descriptor instead.
func (*VerifyOtpToResetPasswordRes) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{7}
}

func (x *VerifyOtpToResetPasswordRes) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *VerifyOtpToResetPasswordRes) GetExpiredTime() uint64 {
	if x != nil {
		return x.ExpiredTime
	}
	return 0
}

type RefreshTokenRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccessToken  string `protobuf:"bytes,1,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	RefreshToken string `protobuf:"bytes,2,opt,name=refresh_token,json=refreshToken,proto3" json:"refresh_token,omitempty"`
	ExpireTime   uint64 `protobuf:"varint,3,opt,name=expire_time,json=expireTime,proto3" json:"expire_time,omitempty"`
}

func (x *RefreshTokenRes) Reset() {
	*x = RefreshTokenRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_partner_mobile_auth_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RefreshTokenRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RefreshTokenRes) ProtoMessage() {}

func (x *RefreshTokenRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_partner_mobile_auth_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RefreshTokenRes.ProtoReflect.Descriptor instead.
func (*RefreshTokenRes) Descriptor() ([]byte, []int) {
	return file_proto_partner_mobile_auth_proto_rawDescGZIP(), []int{8}
}

func (x *RefreshTokenRes) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *RefreshTokenRes) GetRefreshToken() string {
	if x != nil {
		return x.RefreshToken
	}
	return ""
}

func (x *RefreshTokenRes) GetExpireTime() uint64 {
	if x != nil {
		return x.ExpireTime
	}
	return 0
}

var File_proto_partner_mobile_auth_proto protoreflect.FileDescriptor

var file_proto_partner_mobile_auth_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2f,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c,
	0x65, 0x1a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x2f, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x8f, 0x01, 0x0a, 0x08, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x12,
	0x1d, 0x0a, 0x0a, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x21,
	0x0a, 0x0c, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65,
	0x72, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x25, 0x0a,
	0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f, 0x69, 0x64, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68,
	0x69, 0x70, 0x49, 0x64, 0x22, 0xad, 0x01, 0x0a, 0x19, 0x53, 0x65, 0x6e, 0x64, 0x4f, 0x74, 0x70,
	0x54, 0x6f, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52,
	0x65, 0x71, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x63, 0x6f, 0x64, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x43, 0x6f, 0x64,
	0x65, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65,
	0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x4e, 0x75,
	0x6d, 0x62, 0x65, 0x72, 0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73,
	0x68, 0x69, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61,
	0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x12, 0x27, 0x0a, 0x0f, 0x72,
	0x65, 0x63, 0x61, 0x70, 0x74, 0x63, 0x68, 0x61, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x72, 0x65, 0x63, 0x61, 0x70, 0x74, 0x63, 0x68, 0x61, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x22, 0xbb, 0x01, 0x0a, 0x1b, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x4f,
	0x74, 0x70, 0x54, 0x6f, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72,
	0x64, 0x52, 0x65, 0x71, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x63, 0x6f,
	0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x43,
	0x6f, 0x64, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x5f, 0x6e, 0x75, 0x6d,
	0x62, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x70, 0x68, 0x6f, 0x6e, 0x65,
	0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x10, 0x0a, 0x03, 0x6f, 0x74, 0x70, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x6f, 0x74, 0x70, 0x12, 0x25, 0x0a, 0x0e, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0d, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x49, 0x64, 0x12,
	0x21, 0x0a, 0x0c, 0x66, 0x69, 0x72, 0x65, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x73, 0x69, 0x64, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x66, 0x69, 0x72, 0x65, 0x62, 0x61, 0x73, 0x65, 0x53,
	0x69, 0x64, 0x22, 0x35, 0x0a, 0x10, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x12, 0x21, 0x0a, 0x0c, 0x6e, 0x65, 0x77, 0x5f, 0x70, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6e, 0x65,
	0x77, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x22, 0x36, 0x0a, 0x0f, 0x52, 0x65, 0x66,
	0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x12, 0x23, 0x0a, 0x0d,
	0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x22, 0x75, 0x0a, 0x08, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x12, 0x21, 0x0a,
	0x0c, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x12, 0x23, 0x0a, 0x0d, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x21, 0x0a, 0x0c, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x64,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0b, 0x65, 0x78, 0x70,
	0x69, 0x72, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x22, 0x42, 0x0a, 0x19, 0x53, 0x65, 0x6e, 0x64,
	0x4f, 0x74, 0x70, 0x54, 0x6f, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f,
	0x72, 0x64, 0x52, 0x65, 0x73, 0x12, 0x25, 0x0a, 0x0e, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x72, 0x65,
	0x6d, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0d, 0x74,
	0x69, 0x6d, 0x65, 0x52, 0x65, 0x6d, 0x61, 0x69, 0x6e, 0x69, 0x6e, 0x67, 0x22, 0x63, 0x0a, 0x1b,
	0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x4f, 0x74, 0x70, 0x54, 0x6f, 0x52, 0x65, 0x73, 0x65, 0x74,
	0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x61,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x21,
	0x0a, 0x0c, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x04, 0x52, 0x0b, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x64, 0x54, 0x69, 0x6d,
	0x65, 0x22, 0x7a, 0x0a, 0x0f, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x52, 0x65, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x72, 0x65, 0x66, 0x72, 0x65,
	0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c,
	0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1f, 0x0a, 0x0b,
	0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x0a, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x32, 0x84, 0x04,
	0x0a, 0x0b, 0x41, 0x75, 0x74, 0x68, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3b, 0x0a,
	0x05, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x12, 0x18, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x71,
	0x1a, 0x18, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c,
	0x65, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x12, 0x50, 0x0a, 0x0c, 0x52, 0x65,
	0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1f, 0x2e, 0x70, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x52, 0x65, 0x66, 0x72,
	0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x1a, 0x1f, 0x2e, 0x70, 0x61,
	0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x52, 0x65, 0x66,
	0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x12, 0x36, 0x0a, 0x06,
	0x4c, 0x6f, 0x67, 0x6f, 0x75, 0x74, 0x12, 0x15, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72,
	0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x15, 0x2e,
	0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x45,
	0x6d, 0x70, 0x74, 0x79, 0x12, 0x6e, 0x0a, 0x16, 0x53, 0x65, 0x6e, 0x64, 0x4f, 0x74, 0x70, 0x54,
	0x6f, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x29,
	0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e,
	0x53, 0x65, 0x6e, 0x64, 0x4f, 0x74, 0x70, 0x54, 0x6f, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x1a, 0x29, 0x2e, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x53, 0x65, 0x6e, 0x64, 0x4f,
	0x74, 0x70, 0x54, 0x6f, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72,
	0x64, 0x52, 0x65, 0x73, 0x12, 0x74, 0x0a, 0x18, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x4f, 0x74,
	0x70, 0x54, 0x6f, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64,
	0x12, 0x2b, 0x2e, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c,
	0x65, 0x2e, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x4f, 0x74, 0x70, 0x54, 0x6f, 0x52, 0x65, 0x73,
	0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x1a, 0x2b, 0x2e,
	0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x56,
	0x65, 0x72, 0x69, 0x66, 0x79, 0x4f, 0x74, 0x70, 0x54, 0x6f, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50,
	0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x73, 0x12, 0x48, 0x0a, 0x0d, 0x52, 0x65,
	0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x20, 0x2e, 0x70, 0x61,
	0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x52, 0x65, 0x73,
	0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x1a, 0x15, 0x2e,
	0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x45,
	0x6d, 0x70, 0x74, 0x79, 0x42, 0x11, 0x5a, 0x0f, 0x2e, 0x2f, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65,
	0x3b, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_partner_mobile_auth_proto_rawDescOnce sync.Once
	file_proto_partner_mobile_auth_proto_rawDescData = file_proto_partner_mobile_auth_proto_rawDesc
)

func file_proto_partner_mobile_auth_proto_rawDescGZIP() []byte {
	file_proto_partner_mobile_auth_proto_rawDescOnce.Do(func() {
		file_proto_partner_mobile_auth_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_partner_mobile_auth_proto_rawDescData)
	})
	return file_proto_partner_mobile_auth_proto_rawDescData
}

var file_proto_partner_mobile_auth_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_proto_partner_mobile_auth_proto_goTypes = []interface{}{
	(*LoginReq)(nil),                    // 0: partner.mobile.LoginReq
	(*SendOtpToResetPasswordReq)(nil),   // 1: partner.mobile.SendOtpToResetPasswordReq
	(*VerifyOtpToResetPasswordReq)(nil), // 2: partner.mobile.VerifyOtpToResetPasswordReq
	(*ResetPasswordReq)(nil),            // 3: partner.mobile.ResetPasswordReq
	(*RefreshTokenReq)(nil),             // 4: partner.mobile.RefreshTokenReq
	(*LoginRes)(nil),                    // 5: partner.mobile.LoginRes
	(*SendOtpToResetPasswordRes)(nil),   // 6: partner.mobile.SendOtpToResetPasswordRes
	(*VerifyOtpToResetPasswordRes)(nil), // 7: partner.mobile.VerifyOtpToResetPasswordRes
	(*RefreshTokenRes)(nil),             // 8: partner.mobile.RefreshTokenRes
	(*Empty)(nil),                       // 9: partner.mobile.Empty
}
var file_proto_partner_mobile_auth_proto_depIdxs = []int32{
	0, // 0: partner.mobile.AuthService.Login:input_type -> partner.mobile.LoginReq
	4, // 1: partner.mobile.AuthService.RefreshToken:input_type -> partner.mobile.RefreshTokenReq
	9, // 2: partner.mobile.AuthService.Logout:input_type -> partner.mobile.Empty
	1, // 3: partner.mobile.AuthService.SendOtpToResetPassword:input_type -> partner.mobile.SendOtpToResetPasswordReq
	2, // 4: partner.mobile.AuthService.VerifyOtpToResetPassword:input_type -> partner.mobile.VerifyOtpToResetPasswordReq
	3, // 5: partner.mobile.AuthService.ResetPassword:input_type -> partner.mobile.ResetPasswordReq
	5, // 6: partner.mobile.AuthService.Login:output_type -> partner.mobile.LoginRes
	8, // 7: partner.mobile.AuthService.RefreshToken:output_type -> partner.mobile.RefreshTokenRes
	9, // 8: partner.mobile.AuthService.Logout:output_type -> partner.mobile.Empty
	6, // 9: partner.mobile.AuthService.SendOtpToResetPassword:output_type -> partner.mobile.SendOtpToResetPasswordRes
	7, // 10: partner.mobile.AuthService.VerifyOtpToResetPassword:output_type -> partner.mobile.VerifyOtpToResetPasswordRes
	9, // 11: partner.mobile.AuthService.ResetPassword:output_type -> partner.mobile.Empty
	6, // [6:12] is the sub-list for method output_type
	0, // [0:6] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_proto_partner_mobile_auth_proto_init() }
func file_proto_partner_mobile_auth_proto_init() {
	if File_proto_partner_mobile_auth_proto != nil {
		return
	}
	file_proto_partner_mobile_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_partner_mobile_auth_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LoginReq); i {
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
		file_proto_partner_mobile_auth_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendOtpToResetPasswordReq); i {
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
		file_proto_partner_mobile_auth_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerifyOtpToResetPasswordReq); i {
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
		file_proto_partner_mobile_auth_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResetPasswordReq); i {
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
		file_proto_partner_mobile_auth_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RefreshTokenReq); i {
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
		file_proto_partner_mobile_auth_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LoginRes); i {
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
		file_proto_partner_mobile_auth_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendOtpToResetPasswordRes); i {
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
		file_proto_partner_mobile_auth_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VerifyOtpToResetPasswordRes); i {
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
		file_proto_partner_mobile_auth_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RefreshTokenRes); i {
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
			RawDescriptor: file_proto_partner_mobile_auth_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_partner_mobile_auth_proto_goTypes,
		DependencyIndexes: file_proto_partner_mobile_auth_proto_depIdxs,
		MessageInfos:      file_proto_partner_mobile_auth_proto_msgTypes,
	}.Build()
	File_proto_partner_mobile_auth_proto = out.File
	file_proto_partner_mobile_auth_proto_rawDesc = nil
	file_proto_partner_mobile_auth_proto_goTypes = nil
	file_proto_partner_mobile_auth_proto_depIdxs = nil
}