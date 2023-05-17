// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: ticket/web_partnership/paper_ticket.proto

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

type GenPaperTicketInfoReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TotalTicket uint32 `protobuf:"varint,1,opt,name=total_ticket,json=totalTicket,proto3" json:"total_ticket,omitempty"`
}

func (x *GenPaperTicketInfoReq) Reset() {
	*x = GenPaperTicketInfoReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ticket_web_partnership_paper_ticket_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GenPaperTicketInfoReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GenPaperTicketInfoReq) ProtoMessage() {}

func (x *GenPaperTicketInfoReq) ProtoReflect() protoreflect.Message {
	mi := &file_ticket_web_partnership_paper_ticket_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GenPaperTicketInfoReq.ProtoReflect.Descriptor instead.
func (*GenPaperTicketInfoReq) Descriptor() ([]byte, []int) {
	return file_ticket_web_partnership_paper_ticket_proto_rawDescGZIP(), []int{0}
}

func (x *GenPaperTicketInfoReq) GetTotalTicket() uint32 {
	if x != nil {
		return x.TotalTicket
	}
	return 0
}

var File_ticket_web_partnership_paper_ticket_proto protoreflect.FileDescriptor

var file_ticket_web_partnership_paper_ticket_proto_rawDesc = []byte{
	0x0a, 0x29, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x2f, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72,
	0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2f, 0x70, 0x61, 0x70, 0x65, 0x72, 0x5f, 0x74,
	0x69, 0x63, 0x6b, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16, 0x74, 0x69, 0x63,
	0x6b, 0x65, 0x74, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73,
	0x68, 0x69, 0x70, 0x1a, 0x21, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x2f, 0x77, 0x65, 0x62, 0x5f,
	0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2f, 0x62, 0x61, 0x73, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x3a, 0x0a, 0x15, 0x47, 0x65, 0x6e, 0x50, 0x61, 0x70,
	0x65, 0x72, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x12,
	0x21, 0x0a, 0x0c, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0b, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x54, 0x69, 0x63, 0x6b,
	0x65, 0x74, 0x32, 0x78, 0x0a, 0x12, 0x50, 0x61, 0x70, 0x65, 0x72, 0x54, 0x69, 0x63, 0x6b, 0x65,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x62, 0x0a, 0x12, 0x47, 0x65, 0x6e, 0x50,
	0x61, 0x70, 0x65, 0x72, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x2d,
	0x2e, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74,
	0x6e, 0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x47, 0x65, 0x6e, 0x50, 0x61, 0x70, 0x65, 0x72,
	0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x1a, 0x1d, 0x2e,
	0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x2e, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e,
	0x65, 0x72, 0x73, 0x68, 0x69, 0x70, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x42, 0x23, 0x5a, 0x21,
	0x2e, 0x2f, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69,
	0x70, 0x3b, 0x77, 0x65, 0x62, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x6e, 0x65, 0x72, 0x73, 0x68, 0x69,
	0x70, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ticket_web_partnership_paper_ticket_proto_rawDescOnce sync.Once
	file_ticket_web_partnership_paper_ticket_proto_rawDescData = file_ticket_web_partnership_paper_ticket_proto_rawDesc
)

func file_ticket_web_partnership_paper_ticket_proto_rawDescGZIP() []byte {
	file_ticket_web_partnership_paper_ticket_proto_rawDescOnce.Do(func() {
		file_ticket_web_partnership_paper_ticket_proto_rawDescData = protoimpl.X.CompressGZIP(file_ticket_web_partnership_paper_ticket_proto_rawDescData)
	})
	return file_ticket_web_partnership_paper_ticket_proto_rawDescData
}

var file_ticket_web_partnership_paper_ticket_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ticket_web_partnership_paper_ticket_proto_goTypes = []interface{}{
	(*GenPaperTicketInfoReq)(nil), // 0: ticket.web_partnership.GenPaperTicketInfoReq
	(*Empty)(nil),                 // 1: ticket.web_partnership.Empty
}
var file_ticket_web_partnership_paper_ticket_proto_depIdxs = []int32{
	0, // 0: ticket.web_partnership.PaperTicketService.GenPaperTicketInfo:input_type -> ticket.web_partnership.GenPaperTicketInfoReq
	1, // 1: ticket.web_partnership.PaperTicketService.GenPaperTicketInfo:output_type -> ticket.web_partnership.Empty
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ticket_web_partnership_paper_ticket_proto_init() }
func file_ticket_web_partnership_paper_ticket_proto_init() {
	if File_ticket_web_partnership_paper_ticket_proto != nil {
		return
	}
	file_ticket_web_partnership_base_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ticket_web_partnership_paper_ticket_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GenPaperTicketInfoReq); i {
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
			RawDescriptor: file_ticket_web_partnership_paper_ticket_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_ticket_web_partnership_paper_ticket_proto_goTypes,
		DependencyIndexes: file_ticket_web_partnership_paper_ticket_proto_depIdxs,
		MessageInfos:      file_ticket_web_partnership_paper_ticket_proto_msgTypes,
	}.Build()
	File_ticket_web_partnership_paper_ticket_proto = out.File
	file_ticket_web_partnership_paper_ticket_proto_rawDesc = nil
	file_ticket_web_partnership_paper_ticket_proto_goTypes = nil
	file_ticket_web_partnership_paper_ticket_proto_depIdxs = nil
}
