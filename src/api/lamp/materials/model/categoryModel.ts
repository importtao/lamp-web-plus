export interface CategoryPageQuery {
  objectId: string;
  type: string;
  categoryId: string;
  version: number;
  isDelete: boolean;
}

export interface CategorySaveDTO {
  objectId: string;
  type: string;
  categoryId: string;
  version: number;
  isDelete: boolean;
}

export interface CategoryUpdateDTO {
  id: string;
  objectId: string;
  type: string;
  categoryId: string;
  version: number;
  isDelete: boolean;
}

export interface Category {
  objectId?: string;
  type?: string;
  categoryId?: string;
  version?: number;
  isDelete?: boolean;
  id?: string;
  echoMap?: Recordable;
}
