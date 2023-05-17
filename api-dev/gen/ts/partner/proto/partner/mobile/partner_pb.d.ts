import * as jspb from 'google-protobuf'



export class GetDocumentsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentsReq): GetDocumentsReq.AsObject;
  static serializeBinaryToWriter(message: GetDocumentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentsReq;
  static deserializeBinaryFromReader(message: GetDocumentsReq, reader: jspb.BinaryReader): GetDocumentsReq;
}

export namespace GetDocumentsReq {
  export type AsObject = {
  }
}

export class GetDocumentsRes extends jspb.Message {
  getDocumentsList(): Array<string>;
  setDocumentsList(value: Array<string>): GetDocumentsRes;
  clearDocumentsList(): GetDocumentsRes;
  addDocuments(value: string, index?: number): GetDocumentsRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentsRes): GetDocumentsRes.AsObject;
  static serializeBinaryToWriter(message: GetDocumentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentsRes;
  static deserializeBinaryFromReader(message: GetDocumentsRes, reader: jspb.BinaryReader): GetDocumentsRes;
}

export namespace GetDocumentsRes {
  export type AsObject = {
    documentsList: Array<string>,
  }
}

