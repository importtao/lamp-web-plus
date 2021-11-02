import { CategoryFieldSaveDTO, CategoryFieldUpdateDTO, CategoryField, CategoryFieldPageQuery } from './model/categoryFieldModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/categoryField/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/categoryField',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/categoryField',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/categoryField',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/categoryField/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<CategoryFieldPageQuery>) =>
  defHttp.request<PageResult<CategoryField>>({ ...Api.Page, params });

export const query = (params: CategoryField) => defHttp.request<CategoryField[]>({ ...Api.Query, params });

export const save = (params: CategoryFieldSaveDTO) => defHttp.request<CategoryField>({ ...Api.Save, params });

export const update = (params: CategoryFieldUpdateDTO) =>
  defHttp.request<CategoryField>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
