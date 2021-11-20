export interface BuyOrderPageQuery {
  materialsId: string;
  skuId: string;
  quantity: number;
  actualQuantity: number;
  minRequireTime: string;
  expectedArrivalTime: string;
  status: string;
  orderIndex: number;
  remark: string;
  contractInfo: string;
  supplierInfo: string;
  version: number;
  isDelete: boolean;
}

export interface BuyOrderSaveDTO {
  materialsId: string;
  skuId: string;
  quantity: number;
  actualQuantity: number;
  minRequireTime: string;
  expectedArrivalTime: string;
  status: string;
  orderIndex: number;
  remark: string;
  contractInfo: string;
  supplierInfo: string;
  version: number;
  isDelete: boolean;
}

export interface BuyOrderUpdateDTO {
  id: string;
  materialsId: string;
  skuId: string;
  quantity: number;
  actualQuantity: number;
  minRequireTime: string;
  expectedArrivalTime: string;
  status: string;
  orderIndex: number;
  remark: string;
  contractInfo: string;
  supplierInfo: string;
  version: number;
  isDelete: boolean;
}

export interface BuyOrder {
  materialsId?: string;
  skuId?: string;
  quantity?: number;
  actualQuantity?: number;
  minRequireTime?: string;
  expectedArrivalTime?: string;
  status?: string;
  orderIndex?: number;
  remark?: string;
  contractInfo?: string;
  supplierInfo?: string;
  version?: number;
  isDelete?: boolean;
  id?: string;
  createTime?: string;
  createdBy?: string;
  updateTime?: string;
  updatedBy?: string;
  echoMap?: Recordable;
}
