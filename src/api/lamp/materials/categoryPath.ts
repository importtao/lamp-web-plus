import { CategoryPathSaveDTO, CategoryPathUpdateDTO, CategoryPath, CategoryPathPageQuery } from './model/categoryPathModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/categoryPath/treeTableList',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/categoryPath',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/categoryPath',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/categoryPath',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/categoryPath/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<CategoryPathPageQuery>) =>
  defHttp.request<PageResult<CategoryPath>>({ ...Api.Page, params });

export const query = (params: CategoryPath) => defHttp.request<CategoryPath[]>({ ...Api.Query, params });

export const save = (params: CategoryPathSaveDTO) => defHttp.request<CategoryPath>({ ...Api.Save, params });

export const update = (params: CategoryPathUpdateDTO) =>
  defHttp.request<CategoryPath>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
