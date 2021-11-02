import { UserSaveDTO, UserUpdateDTO, User, UserPageQuery } from './model/userModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.ORG + '/user/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.ORG + '/user',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.ORG + '/user',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.ORG + '/user',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.ORG + '/user/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<UserPageQuery>) =>
  defHttp.request<PageResult<User>>({ ...Api.Page, params });

export const query = (params: User) => defHttp.request<User[]>({ ...Api.Query, params });

export const save = (params: UserSaveDTO) => defHttp.request<User>({ ...Api.Save, params });

export const update = (params: UserUpdateDTO) =>
  defHttp.request<User>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
