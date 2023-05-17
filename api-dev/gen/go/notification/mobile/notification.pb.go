// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/notification/mobile/notification.proto

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

type NotificationStatus int32

const (
	NotificationStatus_NOTIFICATION_STATUS_INVALID NotificationStatus = 0
	NotificationStatus_NOTIFICATION_STATUS_CREATED NotificationStatus = 1
	NotificationStatus_NOTIFICATION_STATUS_SENT    NotificationStatus = 2
)

// Enum value maps for NotificationStatus.
var (
	NotificationStatus_name = map[int32]string{
		0: "NOTIFICATION_STATUS_INVALID",
		1: "NOTIFICATION_STATUS_CREATED",
		2: "NOTIFICATION_STATUS_SENT",
	}
	NotificationStatus_value = map[string]int32{
		"NOTIFICATION_STATUS_INVALID": 0,
		"NOTIFICATION_STATUS_CREATED": 1,
		"NOTIFICATION_STATUS_SENT":    2,
	}
)

func (x NotificationStatus) Enum() *NotificationStatus {
	p := new(NotificationStatus)
	*p = x
	return p
}

func (x NotificationStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (NotificationStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_notification_mobile_notification_proto_enumTypes[0].Descriptor()
}

func (NotificationStatus) Type() protoreflect.EnumType {
	return &file_proto_notification_mobile_notification_proto_enumTypes[0]
}

func (x NotificationStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use NotificationStatus.Descriptor instead.
func (NotificationStatus) EnumDescriptor() ([]byte, []int) {
	return file_proto_notification_mobile_notification_proto_rawDescGZIP(), []int{0}
}

type NotificationType int32

const (
	NotificationType_NOTIFICATION_TYPE_INVALID    NotificationType = 0
	NotificationType_NOTIFICATION_TYPE_PUSH       NotificationType = 1
	NotificationType_NOTIFICATION_TYPE_BACKGROUND NotificationType = 2
)

// Enum value maps for NotificationType.
var (
	NotificationType_name = map[int32]string{
		0: "NOTIFICATION_TYPE_INVALID",
		1: "NOTIFICATION_TYPE_PUSH",
		2: "NOTIFICATION_TYPE_BACKGROUND",
	}
	NotificationType_value = map[string]int32{
		"NOTIFICATION_TYPE_INVALID":    0,
		"NOTIFICATION_TYPE_PUSH":       1,
		"NOTIFICATION_TYPE_BACKGROUND": 2,
	}
)

func (x NotificationType) Enum() *NotificationType {
	p := new(NotificationType)
	*p = x
	return p
}

func (x NotificationType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (NotificationType) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_notification_mobile_notification_proto_enumTypes[1].Descriptor()
}

func (NotificationType) Type() protoreflect.EnumType {
	return &file_proto_notification_mobile_notification_proto_enumTypes[1]
}

func (x NotificationType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use NotificationType.Descriptor instead.
func (NotificationType) EnumDescriptor() ([]byte, []int) {
	return file_proto_notification_mobile_notification_proto_rawDescGZIP(), []int{1}
}

type Notification struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id         string             `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type       NotificationType   `protobuf:"varint,2,opt,name=type,proto3,enum=notification.mobile.NotificationType" json:"type,omitempty"`
	Title      string             `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Message    string             `protobuf:"bytes,4,opt,name=message,proto3" json:"message,omitempty"`
	Status     NotificationStatus `protobuf:"varint,5,opt,name=status,proto3,enum=notification.mobile.NotificationStatus" json:"status,omitempty"`
	Recipients []string           `protobuf:"bytes,6,rep,name=recipients,proto3" json:"recipients,omitempty"`
	CreatedAt  string             `protobuf:"bytes,7,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt  string             `protobuf:"bytes,8,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *Notification) Reset() {
	*x = Notification{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notification_mobile_notification_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Notification) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Notification) ProtoMessage() {}

func (x *Notification) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notification_mobile_notification_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Notification.ProtoReflect.Descriptor instead.
func (*Notification) Descriptor() ([]byte, []int) {
	return file_proto_notification_mobile_notification_proto_rawDescGZIP(), []int{0}
}

func (x *Notification) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Notification) GetType() NotificationType {
	if x != nil {
		return x.Type
	}
	return NotificationType_NOTIFICATION_TYPE_INVALID
}

func (x *Notification) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *Notification) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *Notification) GetStatus() NotificationStatus {
	if x != nil {
		return x.Status
	}
	return NotificationStatus_NOTIFICATION_STATUS_INVALID
}

func (x *Notification) GetRecipients() []string {
	if x != nil {
		return x.Recipients
	}
	return nil
}

func (x *Notification) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *Notification) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

type PushNotificationReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type       NotificationType   `protobuf:"varint,2,opt,name=type,proto3,enum=notification.mobile.NotificationType" json:"type,omitempty"`
	Title      string             `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Message    string             `protobuf:"bytes,4,opt,name=message,proto3" json:"message,omitempty"`
	Status     NotificationStatus `protobuf:"varint,5,opt,name=status,proto3,enum=notification.mobile.NotificationStatus" json:"status,omitempty"`
	Recipients []string           `protobuf:"bytes,6,rep,name=recipients,proto3" json:"recipients,omitempty"`
}

func (x *PushNotificationReq) Reset() {
	*x = PushNotificationReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notification_mobile_notification_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PushNotificationReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PushNotificationReq) ProtoMessage() {}

func (x *PushNotificationReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notification_mobile_notification_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PushNotificationReq.ProtoReflect.Descriptor instead.
func (*PushNotificationReq) Descriptor() ([]byte, []int) {
	return file_proto_notification_mobile_notification_proto_rawDescGZIP(), []int{1}
}

func (x *PushNotificationReq) GetType() NotificationType {
	if x != nil {
		return x.Type
	}
	return NotificationType_NOTIFICATION_TYPE_INVALID
}

func (x *PushNotificationReq) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *PushNotificationReq) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *PushNotificationReq) GetStatus() NotificationStatus {
	if x != nil {
		return x.Status
	}
	return NotificationStatus_NOTIFICATION_STATUS_INVALID
}

func (x *PushNotificationReq) GetRecipients() []string {
	if x != nil {
		return x.Recipients
	}
	return nil
}

type SubscribeTopicReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Topic string `protobuf:"bytes,1,opt,name=topic,proto3" json:"topic,omitempty"`
}

func (x *SubscribeTopicReq) Reset() {
	*x = SubscribeTopicReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notification_mobile_notification_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubscribeTopicReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubscribeTopicReq) ProtoMessage() {}

func (x *SubscribeTopicReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notification_mobile_notification_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubscribeTopicReq.ProtoReflect.Descriptor instead.
func (*SubscribeTopicReq) Descriptor() ([]byte, []int) {
	return file_proto_notification_mobile_notification_proto_rawDescGZIP(), []int{2}
}

func (x *SubscribeTopicReq) GetTopic() string {
	if x != nil {
		return x.Topic
	}
	return ""
}

type UnsubscribeTopicReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Topic  string `protobuf:"bytes,1,opt,name=topic,proto3" json:"topic,omitempty"`
	UserId string `protobuf:"bytes,2,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *UnsubscribeTopicReq) Reset() {
	*x = UnsubscribeTopicReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notification_mobile_notification_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UnsubscribeTopicReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UnsubscribeTopicReq) ProtoMessage() {}

func (x *UnsubscribeTopicReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notification_mobile_notification_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UnsubscribeTopicReq.ProtoReflect.Descriptor instead.
func (*UnsubscribeTopicReq) Descriptor() ([]byte, []int) {
	return file_proto_notification_mobile_notification_proto_rawDescGZIP(), []int{3}
}

func (x *UnsubscribeTopicReq) GetTopic() string {
	if x != nil {
		return x.Topic
	}
	return ""
}

func (x *UnsubscribeTopicReq) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

var File_proto_notification_mobile_notification_proto protoreflect.FileDescriptor

var file_proto_notification_mobile_notification_proto_rawDesc = []byte{
	0x0a, 0x2c, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f, 0x6e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13,
	0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x6d, 0x6f, 0x62,
	0x69, 0x6c, 0x65, 0x1a, 0x24, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2f, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa8, 0x02, 0x0a, 0x0c, 0x4e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x39, 0x0a, 0x04, 0x74, 0x79,
	0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x25, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x4e,
	0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x3f, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x4e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1e, 0x0a, 0x0a, 0x72, 0x65, 0x63, 0x69, 0x70, 0x69,
	0x65, 0x6e, 0x74, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0a, 0x72, 0x65, 0x63, 0x69,
	0x70, 0x69, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x64, 0x5f, 0x61, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64,
	0x5f, 0x61, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x22, 0xe1, 0x01, 0x0a, 0x13, 0x50, 0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74,
	0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x12, 0x39, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x25, 0x2e, 0x6e, 0x6f, 0x74,
	0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65,
	0x2e, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x3f, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x27, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x4e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1e, 0x0a, 0x0a, 0x72, 0x65, 0x63, 0x69,
	0x70, 0x69, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0a, 0x72, 0x65,
	0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x73, 0x22, 0x29, 0x0a, 0x11, 0x53, 0x75, 0x62, 0x73,
	0x63, 0x72, 0x69, 0x62, 0x65, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x52, 0x65, 0x71, 0x12, 0x14, 0x0a,
	0x05, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f,
	0x70, 0x69, 0x63, 0x22, 0x44, 0x0a, 0x13, 0x55, 0x6e, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69,
	0x62, 0x65, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x52, 0x65, 0x71, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f,
	0x70, 0x69, 0x63, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x70, 0x69, 0x63,
	0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x2a, 0x74, 0x0a, 0x12, 0x4e, 0x6f, 0x74,
	0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x1f, 0x0a, 0x1b, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f,
	0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x10, 0x00,
	0x12, 0x1f, 0x0a, 0x1b, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e,
	0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x43, 0x52, 0x45, 0x41, 0x54, 0x45, 0x44, 0x10,
	0x01, 0x12, 0x1c, 0x0a, 0x18, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f,
	0x4e, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x53, 0x45, 0x4e, 0x54, 0x10, 0x02, 0x2a,
	0x6f, 0x0a, 0x10, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54,
	0x79, 0x70, 0x65, 0x12, 0x1d, 0x0a, 0x19, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54,
	0x49, 0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44,
	0x10, 0x00, 0x12, 0x1a, 0x0a, 0x16, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49,
	0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x50, 0x55, 0x53, 0x48, 0x10, 0x01, 0x12, 0x20,
	0x0a, 0x1c, 0x4e, 0x4f, 0x54, 0x49, 0x46, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54,
	0x59, 0x50, 0x45, 0x5f, 0x42, 0x41, 0x43, 0x4b, 0x47, 0x52, 0x4f, 0x55, 0x4e, 0x44, 0x10, 0x02,
	0x32, 0x9b, 0x02, 0x0a, 0x0f, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x53, 0x76, 0x63, 0x12, 0x58, 0x0a, 0x10, 0x50, 0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x28, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x50,
	0x75, 0x73, 0x68, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x65, 0x71, 0x1a, 0x1a, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x12, 0x54,
	0x0a, 0x0e, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x54, 0x6f, 0x70, 0x69, 0x63,
	0x12, 0x26, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65,
	0x54, 0x6f, 0x70, 0x69, 0x63, 0x52, 0x65, 0x71, 0x1a, 0x1a, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x45,
	0x6d, 0x70, 0x74, 0x79, 0x12, 0x58, 0x0a, 0x10, 0x55, 0x6e, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72,
	0x69, 0x62, 0x65, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x12, 0x28, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x55,
	0x6e, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x62, 0x65, 0x54, 0x6f, 0x70, 0x69, 0x63, 0x52,
	0x65, 0x71, 0x1a, 0x1a, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x42, 0x11,
	0x5a, 0x0f, 0x2e, 0x2f, 0x6d, 0x6f, 0x62, 0x69, 0x6c, 0x65, 0x3b, 0x6d, 0x6f, 0x62, 0x69, 0x6c,
	0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_notification_mobile_notification_proto_rawDescOnce sync.Once
	file_proto_notification_mobile_notification_proto_rawDescData = file_proto_notification_mobile_notification_proto_rawDesc
)

func file_proto_notification_mobile_notification_proto_rawDescGZIP() []byte {
	file_proto_notification_mobile_notification_proto_rawDescOnce.Do(func() {
		file_proto_notification_mobile_notification_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_notification_mobile_notification_proto_rawDescData)
	})
	return file_proto_notification_mobile_notification_proto_rawDescData
}

var file_proto_notification_mobile_notification_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_proto_notification_mobile_notification_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_proto_notification_mobile_notification_proto_goTypes = []interface{}{
	(NotificationStatus)(0),     // 0: notification.mobile.NotificationStatus
	(NotificationType)(0),       // 1: notification.mobile.NotificationType
	(*Notification)(nil),        // 2: notification.mobile.Notification
	(*PushNotificationReq)(nil), // 3: notification.mobile.PushNotificationReq
	(*SubscribeTopicReq)(nil),   // 4: notification.mobile.SubscribeTopicReq
	(*UnsubscribeTopicReq)(nil), // 5: notification.mobile.UnsubscribeTopicReq
	(*Empty)(nil),               // 6: notification.mobile.Empty
}
var file_proto_notification_mobile_notification_proto_depIdxs = []int32{
	1, // 0: notification.mobile.Notification.type:type_name -> notification.mobile.NotificationType
	0, // 1: notification.mobile.Notification.status:type_name -> notification.mobile.NotificationStatus
	1, // 2: notification.mobile.PushNotificationReq.type:type_name -> notification.mobile.NotificationType
	0, // 3: notification.mobile.PushNotificationReq.status:type_name -> notification.mobile.NotificationStatus
	3, // 4: notification.mobile.NotificationSvc.PushNotification:input_type -> notification.mobile.PushNotificationReq
	4, // 5: notification.mobile.NotificationSvc.SubscribeTopic:input_type -> notification.mobile.SubscribeTopicReq
	5, // 6: notification.mobile.NotificationSvc.UnsubscribeTopic:input_type -> notification.mobile.UnsubscribeTopicReq
	6, // 7: notification.mobile.NotificationSvc.PushNotification:output_type -> notification.mobile.Empty
	6, // 8: notification.mobile.NotificationSvc.SubscribeTopic:output_type -> notification.mobile.Empty
	6, // 9: notification.mobile.NotificationSvc.UnsubscribeTopic:output_type -> notification.mobile.Empty
	7, // [7:10] is the sub-list for method output_type
	4, // [4:7] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_proto_notification_mobile_notification_proto_init() }
func file_proto_notification_mobile_notification_proto_init() {
	if File_proto_notification_mobile_notification_proto != nil {
		return
	}
	file_proto_notification_mobile_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_notification_mobile_notification_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Notification); i {
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
		file_proto_notification_mobile_notification_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PushNotificationReq); i {
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
		file_proto_notification_mobile_notification_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubscribeTopicReq); i {
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
		file_proto_notification_mobile_notification_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UnsubscribeTopicReq); i {
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
			RawDescriptor: file_proto_notification_mobile_notification_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_notification_mobile_notification_proto_goTypes,
		DependencyIndexes: file_proto_notification_mobile_notification_proto_depIdxs,
		EnumInfos:         file_proto_notification_mobile_notification_proto_enumTypes,
		MessageInfos:      file_proto_notification_mobile_notification_proto_msgTypes,
	}.Build()
	File_proto_notification_mobile_notification_proto = out.File
	file_proto_notification_mobile_notification_proto_rawDesc = nil
	file_proto_notification_mobile_notification_proto_goTypes = nil
	file_proto_notification_mobile_notification_proto_depIdxs = nil
}