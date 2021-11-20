export interface BuyTaskItemPageQuery {
  warehouseInventoryRecordId: string;
  warehouseId: string;
  status: string;
  materialsId: string;
  skuId: string;
  requireTime: string;
  quantity: number;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface BuyTaskItemSaveDTO {
  warehouseInventoryRecordId: string;
  warehouseId: string;
  status: string;
  materialsId: string;
  skuId: string;
  requireTime: string;
  quantity: number;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface BuyTaskItemUpdateDTO {
  id: string;
  warehouseInventoryRecordId: string;
  warehouseId: string;
  status: string;
  materialsId: string;
  skuId: string;
  requireTime: string;
  quantity: number;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface BuyTaskItem {
  warehouseInventoryRecordId?: string;
  warehouseId?: string;
  status?: string;
  materialsId?: string;
  skuId?: string;
  requireTime?: string;
  quantity?: number;
  optionName?: string;
  version?: number;
  isDelete?: boolean;
  id?: string;
  createTime?: string;
  createdBy?: string;
  updateTime?: string;
  updatedBy?: string;
  echoMap?: Recordable;
}
