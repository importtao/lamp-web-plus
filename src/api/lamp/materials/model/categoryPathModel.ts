export interface CategoryPathPageQuery {
  ancestor: string;
  descendant: string;
  distance: number;
  version: number;
  isDelete: boolean;
}

export interface CategoryPathSaveDTO {
  ancestor: string;
  descendant: string;
  distance: number;
  version: number;
  isDelete: boolean;
}

export interface CategoryPathUpdateDTO {
  id: string;
  ancestor: string;
  descendant: string;
  distance: number;
  version: number;
  isDelete: boolean;
}

export interface CategoryPath {
  ancestor?: string;
  descendant?: string;
  distance?: number;
  version?: number;
  isDelete?: boolean;
  id?: string;
  echoMap?: Recordable;
}
