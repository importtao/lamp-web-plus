export interface OrgPageQuery {
  label: string;
  type: string;
  abbreviation: string;
  parentId: string;
  treePath: string;
  sortValue: number;
  state: boolean;
  describe: string;
}

export interface OrgSaveDTO {
  label: string;
  type: string;
  abbreviation: string;
  parentId: string;
  treePath: string;
  sortValue: number;
  state: boolean;
  describe: string;
}

export interface OrgUpdateDTO {
  id: string;
  label: string;
  type: string;
  abbreviation: string;
  parentId: string;
  treePath: string;
  sortValue: number;
  state: boolean;
  describe: string;
}

export interface Org {
  label?: string;
  type?: string;
  abbreviation?: string;
  parentId?: string;
  treePath?: string;
  sortValue?: number;
  state?: boolean;
  describe?: string;
  id?: string;
  createTime?: string;
  createdBy?: string;
  updateTime?: string;
  updatedBy?: string;
  echoMap?: Recordable;
}
