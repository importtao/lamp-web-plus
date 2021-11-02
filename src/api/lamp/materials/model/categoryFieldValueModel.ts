export interface CategoryFieldValuePageQuery {
  materialsSkuId: string;
  fieldId: string;
  fieldValue: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryFieldValueSaveDTO {
  materialsSkuId: string;
  fieldId: string;
  fieldValue: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryFieldValueUpdateDTO {
  id: string;
  materialsSkuId: string;
  fieldId: string;
  fieldValue: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryFieldValue {
  materialsSkuId?: string;
  fieldId?: string;
  fieldValue?: string;
  version?: number;
  isDelete?: boolean;
  id?: string;
  createTime?: string;
  createdBy?: string;
  updateTime?: string;
  updatedBy?: string;
  echoMap?: Recordable;
}
