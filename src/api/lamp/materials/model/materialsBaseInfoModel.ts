export interface MaterialsBaseInfoPageQuery {
  name: string;
  unit: string;
  useScene: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface MaterialsBaseInfoSaveDTO {
  name: string;
  unit: string;
  useScene: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface MaterialsBaseInfoUpdateDTO {
  id: string;
  name: string;
  unit: string;
  useScene: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface MaterialsBaseInfo {
  name?: string;
  unit?: string;
  useScene?: string;
  imgUrl?: string;
  remark?: string;
  version?: number;
  isDelete?: boolean;
  id?: string;
  createTime?: string;
  createdBy?: string;
  updateTime?: string;
  updatedBy?: string;
  echoMap?: Recordable;
}
