export interface BuyTaskPageQuery {
  materialsId: string;
  skuId: string;
  minRequireTime: string;
  quantity: number;
  todoQuantity: number;
  status: string;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface BuyTaskSaveDTO {
  materialsId: string;
  skuId: string;
  minRequireTime: string;
  quantity: number;
  todoQuantity: number;
  status: string;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface BuyTaskUpdateDTO {
  id: string;
  materialsId: string;
  skuId: string;
  minRequireTime: string;
  quantity: number;
  todoQuantity: number;
  status: string;
  optionName: string;
  version: number;
  isDelete: boolean;
}

export interface BuyTask {
  materialsId?: string;
  skuId?: string;
  minRequireTime?: string;
  quantity?: number;
  todoQuantity?: number;
  status?: string;
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
