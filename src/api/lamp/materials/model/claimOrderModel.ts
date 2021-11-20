export interface ClaimOrderPageQuery {
  isProject: boolean;
  requireTime: string;
  projectName: string;
  processInstanceId: string;
  status: string;
  remark: string;
  auditRemark: string;
  version: number;
  isDelete: boolean;
  useOrgId: string;
}

export interface ClaimOrderSaveDTO {
  isProject: boolean;
  requireTime: string;
  projectName: string;
  processInstanceId: string;
  status: string;
  remark: string;
  auditRemark: string;
  version: number;
  isDelete: boolean;
  useOrgId: string;
}

export interface ClaimOrderUpdateDTO {
  id: string;
  isProject: boolean;
  requireTime: string;
  projectName: string;
  processInstanceId: string;
  status: string;
  remark: string;
  auditRemark: string;
  version: number;
  isDelete: boolean;
  useOrgId: string;
}

export interface ClaimOrder {
  isProject?: boolean;
  requireTime?: string;
  projectName?: string;
  processInstanceId?: string;
  status?: string;
  remark?: string;
  auditRemark?: string;
  version?: number;
  isDelete?: boolean;
  useOrgId?: string;
  id?: string;
  createTime?: string;
  createdBy?: string;
  updateTime?: string;
  updatedBy?: string;
  echoMap?: Recordable;
}
