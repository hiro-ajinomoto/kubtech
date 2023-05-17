// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: proto/wallet/backend/transaction.proto

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

type Transaction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     string            `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Status TransactionStatus `protobuf:"varint,2,opt,name=status,proto3,enum=wallet.backend.TransactionStatus" json:"status,omitempty"`
	Type   TransactionType   `protobuf:"varint,3,opt,name=type,proto3,enum=wallet.backend.TransactionType" json:"type,omitempty"`
	Amount float64           `protobuf:"fixed64,4,opt,name=amount,proto3" json:"amount,omitempty"`
	Fee    float64           `protobuf:"fixed64,5,opt,name=fee,proto3" json:"fee,omitempty"`
	Time   int64             `protobuf:"varint,6,opt,name=time,proto3" json:"time,omitempty"`
	Fund   string            `protobuf:"bytes,7,opt,name=fund,proto3" json:"fund,omitempty"`
}

func (x *Transaction) Reset() {
	*x = Transaction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_wallet_backend_transaction_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Transaction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Transaction) ProtoMessage() {}

func (x *Transaction) ProtoReflect() protoreflect.Message {
	mi := &file_proto_wallet_backend_transaction_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Transaction.ProtoReflect.Descriptor instead.
func (*Transaction) Descriptor() ([]byte, []int) {
	return file_proto_wallet_backend_transaction_proto_rawDescGZIP(), []int{0}
}

func (x *Transaction) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Transaction) GetStatus() TransactionStatus {
	if x != nil {
		return x.Status
	}
	return TransactionStatus_TRANSACTION_STATUS_INVALID
}

func (x *Transaction) GetType() TransactionType {
	if x != nil {
		return x.Type
	}
	return TransactionType_TRANSACTION_TYPE_INVALID
}

func (x *Transaction) GetAmount() float64 {
	if x != nil {
		return x.Amount
	}
	return 0
}

func (x *Transaction) GetFee() float64 {
	if x != nil {
		return x.Fee
	}
	return 0
}

func (x *Transaction) GetTime() int64 {
	if x != nil {
		return x.Time
	}
	return 0
}

func (x *Transaction) GetFund() string {
	if x != nil {
		return x.Fund
	}
	return ""
}

type ExpireTransactionsReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ExpireTransactionsReq) Reset() {
	*x = ExpireTransactionsReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_wallet_backend_transaction_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExpireTransactionsReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExpireTransactionsReq) ProtoMessage() {}

func (x *ExpireTransactionsReq) ProtoReflect() protoreflect.Message {
	mi := &file_proto_wallet_backend_transaction_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExpireTransactionsReq.ProtoReflect.Descriptor instead.
func (*ExpireTransactionsReq) Descriptor() ([]byte, []int) {
	return file_proto_wallet_backend_transaction_proto_rawDescGZIP(), []int{1}
}

// ================================= RESPONSE ===================================
type ExpireTransactionsRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Transactions []*Transaction `protobuf:"bytes,1,rep,name=transactions,proto3" json:"transactions,omitempty"`
}

func (x *ExpireTransactionsRes) Reset() {
	*x = ExpireTransactionsRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_wallet_backend_transaction_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExpireTransactionsRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExpireTransactionsRes) ProtoMessage() {}

func (x *ExpireTransactionsRes) ProtoReflect() protoreflect.Message {
	mi := &file_proto_wallet_backend_transaction_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExpireTransactionsRes.ProtoReflect.Descriptor instead.
func (*ExpireTransactionsRes) Descriptor() ([]byte, []int) {
	return file_proto_wallet_backend_transaction_proto_rawDescGZIP(), []int{2}
}

func (x *ExpireTransactionsRes) GetTransactions() []*Transaction {
	if x != nil {
		return x.Transactions
	}
	return nil
}

var File_proto_wallet_backend_transaction_proto protoreflect.FileDescriptor

var file_proto_wallet_backend_transaction_proto_rawDesc = []byte{
	0x0a, 0x26, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x2f, 0x62,
	0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74,
	0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x1a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f,
	0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x2f, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xdf, 0x01, 0x0a, 0x0b, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x39, 0x0a, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x21, 0x2e, 0x77, 0x61, 0x6c, 0x6c,
	0x65, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x54, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x12, 0x33, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x1f, 0x2e, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b,
	0x65, 0x6e, 0x64, 0x2e, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x54,
	0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x6d, 0x6f,
	0x75, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x01, 0x52, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e,
	0x74, 0x12, 0x10, 0x0a, 0x03, 0x66, 0x65, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x01, 0x52, 0x03,
	0x66, 0x65, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x04, 0x74, 0x69, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x66, 0x75, 0x6e, 0x64, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x66, 0x75, 0x6e, 0x64, 0x22, 0x17, 0x0a, 0x15, 0x45,
	0x78, 0x70, 0x69, 0x72, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x52, 0x65, 0x71, 0x22, 0x58, 0x0a, 0x15, 0x45, 0x78, 0x70, 0x69, 0x72, 0x65, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x12, 0x3f, 0x0a,
	0x0c, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x2e, 0x62, 0x61, 0x63,
	0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x0c, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x32, 0x78,
	0x0a, 0x12, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x62, 0x0a, 0x12, 0x45, 0x78, 0x70, 0x69, 0x72, 0x65, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x25, 0x2e, 0x77, 0x61, 0x6c,
	0x6c, 0x65, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2e, 0x45, 0x78, 0x70, 0x69,
	0x72, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65,
	0x71, 0x1a, 0x25, 0x2e, 0x77, 0x61, 0x6c, 0x6c, 0x65, 0x74, 0x2e, 0x62, 0x61, 0x63, 0x6b, 0x65,
	0x6e, 0x64, 0x2e, 0x45, 0x78, 0x70, 0x69, 0x72, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x42, 0x13, 0x5a, 0x11, 0x2e, 0x2f, 0x62, 0x61,
	0x63, 0x6b, 0x65, 0x6e, 0x64, 0x3b, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_wallet_backend_transaction_proto_rawDescOnce sync.Once
	file_proto_wallet_backend_transaction_proto_rawDescData = file_proto_wallet_backend_transaction_proto_rawDesc
)

func file_proto_wallet_backend_transaction_proto_rawDescGZIP() []byte {
	file_proto_wallet_backend_transaction_proto_rawDescOnce.Do(func() {
		file_proto_wallet_backend_transaction_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_wallet_backend_transaction_proto_rawDescData)
	})
	return file_proto_wallet_backend_transaction_proto_rawDescData
}

var file_proto_wallet_backend_transaction_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_proto_wallet_backend_transaction_proto_goTypes = []interface{}{
	(*Transaction)(nil),           // 0: wallet.backend.Transaction
	(*ExpireTransactionsReq)(nil), // 1: wallet.backend.ExpireTransactionsReq
	(*ExpireTransactionsRes)(nil), // 2: wallet.backend.ExpireTransactionsRes
	(TransactionStatus)(0),        // 3: wallet.backend.TransactionStatus
	(TransactionType)(0),          // 4: wallet.backend.TransactionType
}
var file_proto_wallet_backend_transaction_proto_depIdxs = []int32{
	3, // 0: wallet.backend.Transaction.status:type_name -> wallet.backend.TransactionStatus
	4, // 1: wallet.backend.Transaction.type:type_name -> wallet.backend.TransactionType
	0, // 2: wallet.backend.ExpireTransactionsRes.transactions:type_name -> wallet.backend.Transaction
	1, // 3: wallet.backend.TransactionService.ExpireTransactions:input_type -> wallet.backend.ExpireTransactionsReq
	2, // 4: wallet.backend.TransactionService.ExpireTransactions:output_type -> wallet.backend.ExpireTransactionsRes
	4, // [4:5] is the sub-list for method output_type
	3, // [3:4] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_proto_wallet_backend_transaction_proto_init() }
func file_proto_wallet_backend_transaction_proto_init() {
	if File_proto_wallet_backend_transaction_proto != nil {
		return
	}
	file_proto_wallet_backend_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_proto_wallet_backend_transaction_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Transaction); i {
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
		file_proto_wallet_backend_transaction_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExpireTransactionsReq); i {
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
		file_proto_wallet_backend_transaction_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExpireTransactionsRes); i {
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
			RawDescriptor: file_proto_wallet_backend_transaction_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_wallet_backend_transaction_proto_goTypes,
		DependencyIndexes: file_proto_wallet_backend_transaction_proto_depIdxs,
		MessageInfos:      file_proto_wallet_backend_transaction_proto_msgTypes,
	}.Build()
	File_proto_wallet_backend_transaction_proto = out.File
	file_proto_wallet_backend_transaction_proto_rawDesc = nil
	file_proto_wallet_backend_transaction_proto_goTypes = nil
	file_proto_wallet_backend_transaction_proto_depIdxs = nil
}