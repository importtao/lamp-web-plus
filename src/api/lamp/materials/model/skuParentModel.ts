import {SkuItemSaveDTO} from "/@/api/lamp/materials/model/skuItemModel";

export interface SkuParentPageQuery {
  materialsId: string;
  name: string;
  keyStr: string;
  orderIndex: number;
  largeImageMode: boolean;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuParentSaveDTO {
  materialsId: string;
  name: string;
  keyStr: string;
  orderIndex: number;
  largeImageMode: boolean;
  remark: string;
  version: number;
  isDelete: boolean;
}
export interface SkuViewSaveDTO {
  id?:string,
  materialsId: string;
  name: string;
  keyStr: string;
  orderIndex: number;
  largeImageMode: boolean;
  remark: string;
  version: number;
  isDelete: boolean;
  inputVisible?: boolean,
  inputValue?: string,
  itemSaveDTOList: Array<SkuItemSaveDTO>
}

export interface SkuParentUpdateDTO {
  id: string;
  materialsId: string;
  name: string;
  keyStr: string;
  orderIndex: number;
  largeImageMode: boolean;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuParent {
  materialsId?: string;
  name?: string;
  keyStr?: string;
  orderIndex?: number;
  largeImageMode?: boolean;
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


