export interface CategoryNodePageQuery {
  name: string;
  orderIndex: number;
  visible: boolean;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryNodeSaveDTO {
  name: string;
  orderIndex: number;
  visible: boolean;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryNodeUpdateDTO {
  id: string;
  name: string;
  orderIndex: number;
  visible: boolean;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryNode {
  name?: string;
  orderIndex?: number;
  visible?: boolean;
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

export interface CategoryNodeParam {
  id?: string;
  parentId?: string;
  oldParentId?: string;
  name: string;
  orderIndex: number;
  visible: boolean;
  remark: string;
  version: number;
  isDelete: boolean;
}
