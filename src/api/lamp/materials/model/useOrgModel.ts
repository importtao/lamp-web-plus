export interface UseOrgPageQuery {
  name: string;
  auditFirst: string;
  auditSecond: string;
  auditThird: string;
  warehouseIndex: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface UseOrgSaveDTO {
  name: string;
  auditFirst: string;
  auditSecond: string;
  auditThird: string;
  warehouseIndex: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface UseOrgUpdateDTO {
  id: string;
  name: string;
  auditFirst: string;
  auditSecond: string;
  auditThird: string;
  warehouseIndex: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface UseOrg {
  name?: string;
  auditFirst?: string;
  auditSecond?: string;
  auditThird?: string;
  warehouseIndex?: string;
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
