import { UserRoleSaveDTO, UserRoleUpdateDTO, UserRole, UserRolePageQuery } from './model/userRoleModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.ORG + '/userRole/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.ORG + '/userRole',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.ORG + '/userRole',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.ORG + '/userRole',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.ORG + '/userRole/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<UserRolePageQuery>) =>
  defHttp.request<PageResult<UserRole>>({ ...Api.Page, params });

export const query = (params: UserRole) => defHttp.request<UserRole[]>({ ...Api.Query, params });

export const save = (params: UserRoleSaveDTO) => defHttp.request<UserRole>({ ...Api.Save, params });

export const update = (params: UserRoleUpdateDTO) =>
  defHttp.request<UserRole>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
