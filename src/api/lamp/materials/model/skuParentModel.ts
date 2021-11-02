export interface SkuParentPageQuery {
  materialsId: string;
  name: string;
  keyStr: string;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuParentSaveDTO {
  materialsId: string;
  name: string;
  keyStr: string;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuParentUpdateDTO {
  id: string;
  materialsId: string;
  name: string;
  keyStr: string;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuParent {
  materialsId?: string;
  name?: string;
  keyStr?: string;
  orderIndex?: number;
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
