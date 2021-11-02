import { CategoryFieldValueSaveDTO, CategoryFieldValueUpdateDTO, CategoryFieldValue, CategoryFieldValuePageQuery } from './model/categoryFieldValueModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/categoryFieldValue/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/categoryFieldValue',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/categoryFieldValue',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/categoryFieldValue',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/categoryFieldValue/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<CategoryFieldValuePageQuery>) =>
  defHttp.request<PageResult<CategoryFieldValue>>({ ...Api.Page, params });

export const query = (params: CategoryFieldValue) => defHttp.request<CategoryFieldValue[]>({ ...Api.Query, params });

export const save = (params: CategoryFieldValueSaveDTO) => defHttp.request<CategoryFieldValue>({ ...Api.Save, params });

export const update = (params: CategoryFieldValueUpdateDTO) =>
  defHttp.request<CategoryFieldValue>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
