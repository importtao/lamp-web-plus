export interface ResourcePageQuery {
  code: string;
  name: string;
  menuId: string;
  describe: string;
  readonly: boolean;
}

export interface ResourceSaveDTO {
  code: string;
  name: string;
  menuId: string;
  describe: string;
  readonly: boolean;
}

export interface ResourceUpdateDTO {
  id: string;
  code: string;
  name: string;
  menuId: string;
  describe: string;
  readonly: boolean;
}

export interface Resource {
  code?: string;
  name?: string;
  menuId?: string;
  describe?: string;
  readonly?: boolean;
  id?: string;
  createdBy?: string;
  createTime?: string;
  updatedBy?: string;
  updateTime?: string;
  echoMap?: Recordable;
}
