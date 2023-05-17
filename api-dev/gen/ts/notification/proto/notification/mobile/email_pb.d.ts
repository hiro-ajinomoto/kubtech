import * as jspb from 'google-protobuf'

import * as proto_notification_mobile_base_pb from '../../../proto/notification/mobile/base_pb';


export class EmailTemplate extends jspb.Message {
  getId(): string;
  setId(value: string): EmailTemplate;

  getType(): EmailType;
  setType(value: EmailType): EmailTemplate;

  getSubject(): string;
  setSubject(value: string): EmailTemplate;

  getContent(): string;
  setContent(value: string): EmailTemplate;

  getCreatedAt(): number;
  setCreatedAt(value: number): EmailTemplate;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EmailTemplate;

  getCreatedBy(): string;
  setCreatedBy(value: string): EmailTemplate;

  getUpdatedBy(): string;
  setUpdatedBy(value: string): EmailTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: EmailTemplate): EmailTemplate.AsObject;
  static serializeBinaryToWriter(message: EmailTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailTemplate;
  static deserializeBinaryFromReader(message: EmailTemplate, reader: jspb.BinaryReader): EmailTemplate;
}

export namespace EmailTemplate {
  export type AsObject = {
    id: string,
    type: EmailType,
    subject: string,
    content: string,
    createdAt: number,
    updatedAt: number,
    createdBy: string,
    updatedBy: string,
  }
}

export class AddEmailTemplateReq extends jspb.Message {
  getType(): EmailType;
  setType(value: EmailType): AddEmailTemplateReq;

  getSubject(): string;
  setSubject(value: string): AddEmailTemplateReq;

  getContent(): string;
  setContent(value: string): AddEmailTemplateReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddEmailTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddEmailTemplateReq): AddEmailTemplateReq.AsObject;
  static serializeBinaryToWriter(message: AddEmailTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddEmailTemplateReq;
  static deserializeBinaryFromReader(message: AddEmailTemplateReq, reader: jspb.BinaryReader): AddEmailTemplateReq;
}

export namespace AddEmailTemplateReq {
  export type AsObject = {
    type: EmailType,
    subject: string,
    content: string,
  }
}

export class UpdateEmailTemplateReq extends jspb.Message {
  getType(): EmailType;
  setType(value: EmailType): UpdateEmailTemplateReq;

  getSubject(): string;
  setSubject(value: string): UpdateEmailTemplateReq;

  getContent(): string;
  setContent(value: string): UpdateEmailTemplateReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailTemplateReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailTemplateReq): UpdateEmailTemplateReq.AsObject;
  static serializeBinaryToWriter(message: UpdateEmailTemplateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailTemplateReq;
  static deserializeBinaryFromReader(message: UpdateEmailTemplateReq, reader: jspb.BinaryReader): UpdateEmailTemplateReq;
}

export namespace UpdateEmailTemplateReq {
  export type AsObject = {
    type: EmailType,
    subject: string,
    content: string,
  }
}

export enum EmailType { 
  EMAIL_TYPE_INVALID = 0,
  EMAIL_TYPE_CUSTOMER_SIGNUP = 1,
  EMAIL_TYPE_CUSTOMER_EMAIL_VERIFICATION = 2,
  EMAIL_TYPE_CUSTOMER_RESET_PASSWORD = 3,
  EMAIL_TYPE_CUSTOMER_EMAIL_CHANGE_CONFIRMATION = 4,
  EMAIL_TYPE_CUSTOMER_RESET_PASSWORD_SUCCESS = 5,
  EMAIL_TYPE_CUSTOMER_VERIFIED_PAYMENT = 6,
  EMAIL_TYPE_CUSTOMER_VERIFIED_TICKET = 7,
  EMAIL_TYPE_CUSTOMER_TRANSFER_TICKET = 8,
  EMAIL_TYPE_INSPECTOR_RESET_PASSWORD = 9,
  EMAIL_TYPE_CUSTOMER_VERIFIED_PRODUCT_PAYMENT = 10,
  EMAIL_TYPE_CUSTOMER_EMAIL_SECURITY_CHANGE_EMAIL = 11,
  EMAIL_TYPE_CUSTOMER_EMAIL_SECURITY_CHANGE_PHONE_NUMBER = 12,
}
