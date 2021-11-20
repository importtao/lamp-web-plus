export interface CategoryLackApplyPageQuery {
  materialsId: string;
  name: string;
  useScene: string;
  requireType: string;
  emergencyLevel: string;
  status: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryLackApplySaveDTO {
  materialsId: string;
  name: string;
  useScene: string;
  requireType: string;
  emergencyLevel: string;
  status: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryLackApplyUpdateDTO {
  id: string;
  materialsId: string;
  name: string;
  useScene: string;
  requireType: string;
  emergencyLevel: string;
  status: string;
  imgUrl: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryLackApply {
  materialsId?: string;
  name?: string;
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
