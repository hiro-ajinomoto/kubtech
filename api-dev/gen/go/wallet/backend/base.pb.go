// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/wallet/backend/base.proto

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

type TransactionType int32

const (
	TransactionType_TRANSACTION_TYPE_INVALID  TransactionType = 0
	TransactionType_TRANSACTION_TYPE_TOP_UP   TransactionType = 1
	TransactionType_TRANSACTION_TYPE_PAY      TransactionType = 2
	TransactionType_TRANSACTION_TYPE_WITHDRAW TransactionType = 3
)

// Enum value maps for TransactionType.
var (
	TransactionType_name = map[int32]string{
		0: "TRANSACTION_TYPE_INVALID",
		1: "TRANSACTION_TYPE_TOP_UP",
		2: "TRANSACTION_TYPE_PAY",
		3: "TRANSACTION_TYPE_WITHDRAW",
	}
	TransactionType_value = map[string]int32{
		"TRANSACTION_TYPE_INVALID":  0,
		"TRANSACTION_TYPE_TOP_UP":   1,
		"TRANSACTION_TYPE_PAY":      2,
		"TRANSACTION_TYPE_WITHDRAW": 3,
	}
)

func (x TransactionType) Enum() *TransactionType {
	p := new(TransactionType)
	*p = x
	return p
}

func (x TransactionType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TransactionType) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_wallet_backend_base_proto_enumTypes[0].Descriptor()
}

func (TransactionType) Type() protoreflect.EnumType {
	return &file_proto_wallet_backend_base_proto_enumTypes[0]
}

func (x TransactionType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TransactionType.Descriptor instead.
func (TransactionType) EnumDescriptor() ([]byte, []int) {
	return file_proto_wallet_backend_base_proto_rawDescGZIP(), []int{0}
}

type TransactionStatus int32

const (
	TransactionStatus_TRANSACTION_STATUS_INVALID    TransactionStatus = 0
	TransactionStatus_TRANSACTION_STATUS_PENDING    TransactionStatus = 1
	TransactionStatus_TRANSACTION_STATUS_PROCESSING TransactionStatus = 2
	TransactionStatus_TRANSACTION_STATUS_SUCCESSFUL TransactionStatus = 3
	TransactionStatus_TRANSACTION_STATUS_FAILED     TransactionStatus = 4
	TransactionStatus_TRANSACTION_STATUS_CANCELED   TransactionStatus = 5
)

// Enum value maps for TransactionStatus.
var (
	TransactionStatus_name = map[int32]string{
		0: "TRANSACTION_STATUS_INVALID",
		1: "TRANSACTION_STATUS_PENDING",
		2: "TRANSACTION_STATUS_PROCESSING",
		3: "TRANSACTION_STATUS_SUCCESSFUL",
		4: "TRANSACTION_STATUS_FAILED",
		5: "TRANSACTION_STATUS_CANCELED",
	}
	TransactionStatus_value = map[string]int32{
		"TRANSACTION_STATUS_INVALID":    0,
		"TRANSACTION_STATUS_PENDING":    1,
		"TRANSACTION_STATUS_PROCESSING": 2,
		"TRANSACTION_STATUS_SUCCESSFUL": 3,
		"TRANSACTION_STATUS_FAILED":     4,
		"TRANSACTION_STATUS_CANCELED":   5,
	}
)

func (x TransactionStatus) Enum() *TransactionStatus {
	p := new(TransactionStatus)
	*p = x
	return p
}

func (x TransactionStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TransactionStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_proto_wallet_backend_base_proto_enumTypes[1].Descriptor()
}

func (TransactionStatus) Type() protoreflect.EnumType {
	return &file_proto_wallet_backend_base_proto_enumTypes[1]
}

func (x TransactionStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TransactionStatus.Descriptor instead.
func (TransactionStatus) EnumDescriptor() ([]byte, []int) {
	return file_proto_wallet_backend_base_proto_rawDescGZIP(), []int{1}
}

type Empty struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Empty) Reset() {
	*x = Empty{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_wallet_backend_base_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Empty) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Empty) ProtoMessage() {}

func (x *Empty) ProtoReflect() protoreflect.Message {
	mi := &file_proto_wallet_backend_base_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Empty.ProtoReflect.Descriptor instead.
func (*Empty) Descriptor() ([]byte, []int) {
	return file_proto_wallet_backend_base_proto_rawDescGZIP(), []int{0}
}

type DefaultRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Result bool `protobuf:"varint,1,opt,name=result,proto3" json:"result,omitempty"`
}

func (x *DefaultRes) Reset() {
	*x = DefaultRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_wallet_backend_base_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DefaultRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DefaultRes) ProtoMessage() {}

func (x *DefaultRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_wallet_backend_base_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DefaultRes.ProtoReflect.Descriptor instead.
func (*DefaultRes) Descriptor() ([]byte, []int) {
	return file_proto_wallet_backend_base_proto_rawDescGZIP(), []int{1}
}

func (x *DefaultRes) GetResult() bool {
	if x != nil {
		return x.Result
	}
	return false
}

var File_proto_wallet_backend_base_proto protoreflect.FileDescriptor

var file_proto_wallet_backend_base_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x2f, 0x62,
	0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x62, 0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0e, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x22, 0x07, 0x0a, 0x05, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x24, 0x0a, 0x0a, 0x44, 0x65,
	0x66, 0x61, 0x75, 0x6c, 0x74, 0x52, 0x65, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x65, 0x73, 0x75,
	0x6c, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74,
	0x2a, 0x85, 0x01, 0x0a, 0x0f, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x54, 0x79, 0x70, 0x65, 0x12, 0x1c, 0x0a, 0x18, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54,
	0x49, 0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44,
	0x10, 0x00, 0x12, 0x1b, 0x0a, 0x17, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f,
	0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x54, 0x4f, 0x50, 0x5f, 0x55, 0x50, 0x10, 0x01, 0x12,
	0x18, 0x0a, 0x14, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54,
	0x59, 0x50, 0x45, 0x5f, 0x50, 0x41, 0x59, 0x10, 0x02, 0x12, 0x1d, 0x0a, 0x19, 0x54, 0x52, 0x41,
	0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x57, 0x49,
	0x54, 0x48, 0x44, 0x52, 0x41, 0x57, 0x10, 0x03, 0x2a, 0xd9, 0x01, 0x0a, 0x11, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1e,
	0x0a, 0x1a, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x54,
	0x41, 0x54, 0x55, 0x53, 0x5f, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x10, 0x00, 0x12, 0x1e,
	0x0a, 0x1a, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x54,
	0x41, 0x54, 0x55, 0x53, 0x5f, 0x50, 0x45, 0x4e, 0x44, 0x49, 0x4e, 0x47, 0x10, 0x01, 0x12, 0x21,
	0x0a, 0x1d, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x54,
	0x41, 0x54, 0x55, 0x53, 0x5f, 0x50, 0x52, 0x4f, 0x43, 0x45, 0x53, 0x53, 0x49, 0x4e, 0x47, 0x10,
	0x02, 0x12, 0x21, 0x0a, 0x1d, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e,
	0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x53, 0x55, 0x43, 0x43, 0x45, 0x53, 0x53, 0x46,
	0x55, 0x4c, 0x10, 0x03, 0x12, 0x1d, 0x0a, 0x19, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54,
	0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x46, 0x41, 0x49, 0x4c, 0x45,
	0x44, 0x10, 0x04, 0x12, 0x1f, 0x0a, 0x1b, 0x54, 0x52, 0x41, 0x4e, 0x53, 0x41, 0x43, 0x54, 0x49,
	0x4f, 0x4e, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c,
	0x45, 0x44, 0x10, 0x05, 0x42, 0x13, 0x5a, 0x11, 0x2e, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e,
	0x64, 0x3b, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_proto_wallet_backend_base_proto_rawDescOnce sync.Once
	file_proto_wallet_backend_base_proto_rawDescData = file_proto_wallet_backend_base_proto_rawDesc
)

func file_proto_wallet_backend_base_proto_rawDescGZIP() []byte {
	file_proto_wallet_backend_base_proto_rawDescOnce.Do(func() {
		file_proto_wallet_backend_base_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_wallet_backend_base_proto_rawDescData)
	})
	return file_proto_wallet_backend_base_proto_rawDescData
}

var file_proto_wallet_backend_base_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_proto_wallet_backend_base_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_proto_wallet_backend_base_proto_goTypes = []interface{}{
	(TransactionType)(0),   // 0: wallet.backend.TransactionType
	(TransactionStatus)(0), // 1: wallet.backend.TransactionStatus
	(*Empty)(nil),          // 2: wallet.backend.Empty
	(*DefaultRes)(nil),     // 3: wallet.backend.DefaultRes
}
var file_proto_wallet_backend_base_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_proto_wallet_backend_base_proto_init() }
func file_proto_wallet_backend_base_proto_init() {
	if File_proto_wallet_backend_base_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_wallet_backend_base_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Empty); i {
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
		file_proto_wallet_backend_base_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DefaultRes); i {
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
			RawDescriptor: file_proto_wallet_backend_base_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_wallet_backend_base_proto_goTypes,
		DependencyIndexes: file_proto_wallet_backend_base_proto_depIdxs,
		EnumInfos:         file_proto_wallet_backend_base_proto_enumTypes,
		MessageInfos:      file_proto_wallet_backend_base_proto_msgTypes,
	}.Build()
	File_proto_wallet_backend_base_proto = out.File
	file_proto_wallet_backend_base_proto_rawDesc = nil
	file_proto_wallet_backend_base_proto_goTypes = nil
	file_proto_wallet_backend_base_proto_depIdxs = nil
}
