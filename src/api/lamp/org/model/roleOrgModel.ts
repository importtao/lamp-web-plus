export interface RoleOrgPageQuery {
  roleId: string;
  orgId: string;
}

export interface RoleOrgSaveDTO {
  roleId: string;
  orgId: string;
}

export interface RoleOrgUpdateDTO {
  id: string;
  roleId: string;
  orgId: string;
}

export interface RoleOrg {
  roleId?: string;
  orgId?: string;
  id?: string;
  createTime?: string;
  createdBy?: string;
  echoMap?: Recordable;
}
