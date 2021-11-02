export interface MenuPageQuery {
  label: string;
  describe: string;
  isGeneral: boolean;
  path: string;
  component: string;
  state: boolean;
  sortValue: number;
  icon: string;
  group: string;
  parentId: string;
  readonly: boolean;
}

export interface MenuSaveDTO {
  label: string;
  describe: string;
  isGeneral: boolean;
  path: string;
  component: string;
  state: boolean;
  sortValue: number;
  icon: string;
  group: string;
  parentId: string;
  readonly: boolean;
}

export interface MenuUpdateDTO {
  id: string;
  label: string;
  describe: string;
  isGeneral: boolean;
  path: string;
  component: string;
  state: boolean;
  sortValue: number;
  icon: string;
  group: string;
  parentId: string;
  readonly: boolean;
}

export interface Menu {
  label?: string;
  describe?: string;
  isGeneral?: boolean;
  path?: string;
  component?: string;
  state?: boolean;
  sortValue?: number;
  icon?: string;
  group?: string;
  parentId?: string;
  readonly?: boolean;
  id?: string;
  createdBy?: string;
  createTime?: string;
  updatedBy?: string;
  updateTime?: string;
  echoMap?: Recordable;
}
