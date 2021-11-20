export interface LackApplyPageQuery {
  name: string;
  sku: string;
  unit: string;
  useScene: string;
  requireType: string;
  emergencyLevel: string;
  status: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface LackApplySaveDTO {
  name: string;
  sku: string;
  unit: string;
  useScene: string;
  requireType: string;
  emergencyLevel: string;
  status: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface LackApplyUpdateDTO {
  id: string;
  name: string;
  sku: string;
  unit: string;
  useScene: string;
  requireType: string;
  emergencyLevel: string;
  status: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface LackApply {
  name?: string;
  sku?: string;
  unit?: string;
  useScene?: string;
  requireType?: string;
  emergencyLevel?: string;
  status?: string;
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
