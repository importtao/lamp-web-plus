export interface WarehousePageQuery {
  name: string;
  orderIndex: number;
  managerId: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface WarehouseSaveDTO {
  name: string;
  orderIndex: number;
  managerId: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface WarehouseUpdateDTO {
  id: string;
  name: string;
  orderIndex: number;
  managerId: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface Warehouse {
  name?: string;
  orderIndex?: number;
  managerId?: string;
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
