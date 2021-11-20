import { CategoryLackApplySaveDTO, CategoryLackApplyUpdateDTO, CategoryLackApply, CategoryLackApplyPageQuery } from './model/categoryLackApplyModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/categoryLackApply/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/categoryLackApply',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/categoryLackApply',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/categoryLackApply',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/categoryLackApply/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<CategoryLackApplyPageQuery>) =>
  defHttp.request<PageResult<CategoryLackApply>>({ ...Api.Page, params });

export const query = (params: CategoryLackApply) => defHttp.request<CategoryLackApply[]>({ ...Api.Query, params });

export const save = (params: CategoryLackApplySaveDTO) => defHttp.request<CategoryLackApply>({ ...Api.Save, params });

export const update = (params: CategoryLackApplyUpdateDTO) =>
  defHttp.request<CategoryLackApply>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
