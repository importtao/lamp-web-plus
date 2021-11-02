export interface SkuItemPageQuery {
  materialsId: string;
  parentId: string;
  name: string;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuItemSaveDTO {
  materialsId: string;
  parentId: string;
  name: string;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuItemUpdateDTO {
  id: string;
  materialsId: string;
  parentId: string;
  name: string;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuItem {
  materialsId?: string;
  parentId?: string;
  name?: string;
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
