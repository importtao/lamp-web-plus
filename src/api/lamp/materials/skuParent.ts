import { SkuParentSaveDTO, SkuParentUpdateDTO, SkuParent, SkuParentPageQuery } from './model/skuParentModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/skuParent/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/skuParent',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/skuParent',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/skuParent',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/skuParent/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<SkuParentPageQuery>) =>
  defHttp.request<PageResult<SkuParent>>({ ...Api.Page, params });

export const query = (params: SkuParent) => defHttp.request<SkuParent[]>({ ...Api.Query, params });

export const save = (params: SkuParentSaveDTO) => defHttp.request<SkuParent>({ ...Api.Save, params });

export const update = (params: SkuParentUpdateDTO) =>
  defHttp.request<SkuParent>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
