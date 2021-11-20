export interface ClaimOrderItemPageQuery {
  orderId: string;
  materialsId: string;
  materialsName: string;
  skuId: string;
  skuName: string;
  unitPrice: number;
  totalQuantity: number;
  deliveredQuantity: number;
  todoQuantity: number;
  unit: string;
  auditType: string;
  requireTime: string;
  status: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface ClaimOrderItemSaveDTO {
  orderId: string;
  materialsId: string;
  materialsName: string;
  skuId: string;
  skuName: string;
  unitPrice: number;
  totalQuantity: number;
  deliveredQuantity: number;
  todoQuantity: number;
  unit: string;
  auditType: string;
  requireTime: string;
  status: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface ClaimOrderItemUpdateDTO {
  id: string;
  orderId: string;
  materialsId: string;
  materialsName: string;
  skuId: string;
  skuName: string;
  unitPrice: number;
  totalQuantity: number;
  deliveredQuantity: number;
  todoQuantity: number;
  unit: string;
  auditType: string;
  requireTime: string;
  status: string;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface ClaimOrderItem {
  orderId?: string;
  materialsId?: string;
  materialsName?: string;
  skuId?: string;
  skuName?: string;
  unitPrice?: number;
  totalQuantity?: number;
  deliveredQuantity?: number;
  todoQuantity?: number;
  unit?: string;
  auditType?: string;
  requireTime?: string;
  status?: string;
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
