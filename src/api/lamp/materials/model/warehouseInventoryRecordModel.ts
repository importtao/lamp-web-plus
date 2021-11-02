export interface WarehouseInventoryRecordPageQuery {
  objectId: string;
  isInFlag: boolean;
  status: boolean;
  skuId: string;
  quantity: number;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface WarehouseInventoryRecordSaveDTO {
  objectId: string;
  isInFlag: boolean;
  status: boolean;
  skuId: string;
  quantity: number;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface WarehouseInventoryRecordUpdateDTO {
  id: string;
  objectId: string;
  isInFlag: boolean;
  status: boolean;
  skuId: string;
  quantity: number;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface WarehouseInventoryRecord {
  objectId?: string;
  isInFlag?: boolean;
  status?: boolean;
  skuId?: string;
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
