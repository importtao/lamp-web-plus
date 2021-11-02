import { Enum } from '/@/api/model/baseModel';

export interface UserPageQuery {
  account: string;
  name: string;
  orgId: string;
  stationId: string;
  readonly: boolean;
  email: string;
  mobile: string;
  sex: Enum;
  state: boolean;
  avatar: string;
  nation: string;
  education: string;
  positionStatus: string;
  workDescribe: string;
  passwordErrorLastTime: string;
  passwordErrorNum: number;
  passwordExpireTime: string;
  password: string;
  salt: string;
  lastLoginTime: string;
}

export interface UserSaveDTO {
  account: string;
  name: string;
  orgId: string;
  stationId: string;
  readonly: boolean;
  email: string;
  mobile: string;
  sex: Enum;
  state: boolean;
  avatar: string;
  nation: string;
  education: string;
  positionStatus: string;
  workDescribe: string;
  passwordErrorLastTime: string;
  passwordErrorNum: number;
  passwordExpireTime: string;
  password: string;
  salt: string;
  lastLoginTime: string;
}

export interface UserUpdateDTO {
  id: string;
  account: string;
  name: string;
  orgId: string;
  stationId: string;
  readonly: boolean;
  email: string;
  mobile: string;
  sex: Enum;
  state: boolean;
  avatar: string;
  nation: string;
  education: string;
  positionStatus: string;
  workDescribe: string;
  passwordErrorLastTime: string;
  passwordErrorNum: number;
  passwordExpireTime: string;
  password: string;
  salt: string;
  lastLoginTime: string;
}

export interface User {
  account?: string;
  name?: string;
  orgId?: string;
  stationId?: string;
  readonly?: boolean;
  email?: string;
  mobile?: string;
  sex?: Enum;
  state?: boolean;
  avatar?: string;
  nation?: string;
  education?: string;
  positionStatus?: string;
  workDescribe?: string;
  passwordErrorLastTime?: string;
  passwordErrorNum?: number;
  passwordExpireTime?: string;
  password?: string;
  salt?: string;
  lastLoginTime?: string;
  id?: string;
  createdBy?: string;
  createTime?: string;
  updatedBy?: string;
  updateTime?: string;
  echoMap?: Recordable;
}
