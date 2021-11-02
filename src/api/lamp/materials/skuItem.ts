import { SkuItemSaveDTO, SkuItemUpdateDTO, SkuItem, SkuItemPageQuery } from './model/skuItemModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/skuItem/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/skuItem',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/skuItem',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/skuItem',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/skuItem/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<SkuItemPageQuery>) =>
  defHttp.request<PageResult<SkuItem>>({ ...Api.Page, params });

export const query = (params: SkuItem) => defHttp.request<SkuItem[]>({ ...Api.Query, params });

export const save = (params: SkuItemSaveDTO) => defHttp.request<SkuItem>({ ...Api.Save, params });

export const update = (params: SkuItemUpdateDTO) =>
  defHttp.request<SkuItem>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
