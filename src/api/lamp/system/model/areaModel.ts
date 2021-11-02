export interface AreaPageQuery {
  code: string;
  label: string;
  fullName: string;
  sortValue: number;
  longitude: string;
  latitude: string;
  level: string;
  source: string;
  state: boolean;
  parentId: string;
}

export interface AreaSaveDTO {
  code: string;
  label: string;
  fullName: string;
  sortValue: number;
  longitude: string;
  latitude: string;
  level: string;
  source: string;
  state: boolean;
  parentId: string;
}

export interface AreaUpdateDTO {
  id: string;
  code: string;
  label: string;
  fullName: string;
  sortValue: number;
  longitude: string;
  latitude: string;
  level: string;
  source: string;
  state: boolean;
  parentId: string;
}

export interface Area {
  code?: string;
  label?: string;
  fullName?: string;
  sortValue?: number;
  longitude?: string;
  latitude?: string;
  level?: string;
  source?: string;
  state?: boolean;
  parentId?: string;
  id?: string;
  createTime?: string;
  createdBy?: string;
  updateTime?: string;
  updatedBy?: string;
  echoMap?: Recordable;
}
