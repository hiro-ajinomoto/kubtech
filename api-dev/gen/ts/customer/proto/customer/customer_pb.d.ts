import * as jspb from 'google-protobuf'



export class Location extends jspb.Message {
  getLat(): number;
  setLat(value: number): Location;

  getLong(): number;
  setLong(value: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    lat: number,
    pb_long: number,
  }
}

export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getPassword(): string;
  setPassword(value: string): UserInfo;

  getName(): string;
  setName(value: string): UserInfo;

  getPhoneVerified(): boolean;
  setPhoneVerified(value: boolean): UserInfo;

  getIsEnabled(): boolean;
  setIsEnabled(value: boolean): UserInfo;

  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): UserInfo;

  getIsOfficialAccount(): boolean;
  setIsOfficialAccount(value: boolean): UserInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): UserInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserInfo;

  getAddr(): string;
  setAddr(value: string): UserInfo;

  getCity(): string;
  setCity(value: string): UserInfo;

  getDistrict(): string;
  setDistrict(value: string): UserInfo;

  getWard(): string;
  setWard(value: string): UserInfo;

  getLocation(): Location | undefined;
  setLocation(value?: Location): UserInfo;
  hasLocation(): boolean;
  clearLocation(): UserInfo;

  getDescription(): string;
  setDescription(value: string): UserInfo;

  getInviterId(): string;
  setInviterId(value: string): UserInfo;

  getBirthday(): number;
  setBirthday(value: number): UserInfo;

  getGender(): Gender;
  setGender(value: Gender): UserInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): UserInfo;

  getIsSocialAccount(): boolean;
  setIsSocialAccount(value: boolean): UserInfo;

  getSocialType(): SocialType;
  setSocialType(value: SocialType): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    email: string,
    password: string,
    name: string,
    phoneVerified: boolean,
    isEnabled: boolean,
    emailVerified: boolean,
    isOfficialAccount: boolean,
    phoneNumber: string,
    phoneCode: string,
    profilePicture: string,
    addr: string,
    city: string,
    district: string,
    ward: string,
    location?: Location.AsObject,
    description: string,
    inviterId: string,
    birthday: number,
    gender: Gender,
    partnershipId: string,
    isSocialAccount: boolean,
    socialType: SocialType,
  }
}

export class UserSimpleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserSimpleInfo;

  getName(): string;
  setName(value: string): UserSimpleInfo;

  getProfilePicture(): string;
  setProfilePicture(value: string): UserSimpleInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserSimpleInfo;

  getPhoneCode(): string;
  setPhoneCode(value: string): UserSimpleInfo;

  getBirthday(): number;
  setBirthday(value: number): UserSimpleInfo;

  getGender(): Gender;
  setGender(value: Gender): UserSimpleInfo;

  getPartnershipId(): string;
  setPartnershipId(value: string): UserSimpleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSimpleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserSimpleInfo): UserSimpleInfo.AsObject;
  static serializeBinaryToWriter(message: UserSimpleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSimpleInfo;
  static deserializeBinaryFromReader(message: UserSimpleInfo, reader: jspb.BinaryReader): UserSimpleInfo;
}

export namespace UserSimpleInfo {
  export type AsObject = {
    id: string,
    name: string,
    profilePicture: string,
    phoneNumber: string,
    phoneCode: string,
    birthday: number,
    gender: Gender,
    partnershipId: string,
  }
}

export class GetMeReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeReq): GetMeReq.AsObject;
  static serializeBinaryToWriter(message: GetMeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeReq;
  static deserializeBinaryFromReader(message: GetMeReq, reader: jspb.BinaryReader): GetMeReq;
}

export namespace GetMeReq {
  export type AsObject = {
  }
}

export class GetMeRes extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): GetMeRes;
  hasUserInfo(): boolean;
  clearUserInfo(): GetMeRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMeRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetMeRes): GetMeRes.AsObject;
  static serializeBinaryToWriter(message: GetMeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMeRes;
  static deserializeBinaryFromReader(message: GetMeRes, reader: jspb.BinaryReader): GetMeRes;
}

export namespace GetMeRes {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
  }
}

export enum Gender { 
  GENDER_INVALID = 0,
  GENDER_MALE = 1,
  GENDER_FEMALE = 2,
  GENDER_OTHER = 3,
}
export enum SocialType { 
  SOCIAL_TYPE_INVALID = 0,
  SOCIAL_TYPE_FACEBOOK = 1,
  SOCIAL_TYPE_GOOGLE = 2,
  SOCIAL_TYPE_APPLE = 3,
}
