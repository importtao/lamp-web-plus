export interface CategoryFieldPageQuery {
  categoryId: string;
  name: string;
  type: string;
  required: boolean;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryFieldSaveDTO {
  categoryId: string;
  name: string;
  type: string;
  required: boolean;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryFieldUpdateDTO {
  id: string;
  categoryId: string;
  name: string;
  type: string;
  required: boolean;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryField {
  categoryId?: string;
  name?: string;
  type?: string;
  required?: boolean;
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
