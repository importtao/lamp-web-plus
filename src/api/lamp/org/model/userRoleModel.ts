export interface UserRolePageQuery {
  roleId: string;
  userId: string;
}

export interface UserRoleSaveDTO {
  roleId: string;
  userId: string;
}

export interface UserRoleUpdateDTO {
  id: string;
  roleId: string;
  userId: string;
}

export interface UserRole {
  roleId?: string;
  userId?: string;
  id?: string;
  createdBy?: string;
  createTime?: string;
  echoMap?: Recordable;
}
