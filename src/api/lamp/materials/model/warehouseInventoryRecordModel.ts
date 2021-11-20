export interface WarehouseInventoryRecordPageQuery {
  orderId: string;
  warehouseId: string;
  isInFlag: boolean;
  status: string;
  skuId: string;
  quantity: number;
  requireTime: string;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface WarehouseInventoryRecordSaveDTO {
  orderId: string;
  warehouseId: string;
  isInFlag: boolean;
  status: string;
  skuId: string;
  quantity: number;
  requireTime: string;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface WarehouseInventoryRecordUpdateDTO {
  id: string;
  orderId: string;
  warehouseId: string;
  isInFlag: boolean;
  status: string;
  skuId: string;
  quantity: number;
  requireTime: string;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface WarehouseInventoryRecord {
  orderId?: string;
  warehouseId?: string;
  isInFlag?: boolean;
  status?: string;
  skuId?: string;
  quantity?: number;
  requireTime?: string;
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
