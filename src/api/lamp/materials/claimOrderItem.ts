import { ClaimOrderItemSaveDTO, ClaimOrderItemUpdateDTO, ClaimOrderItem, ClaimOrderItemPageQuery } from './model/claimOrderItemModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrderItem/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrderItem',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrderItem',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrderItem',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrderItem/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<ClaimOrderItemPageQuery>) =>
  defHttp.request<PageResult<ClaimOrderItem>>({ ...Api.Page, params });

export const query = (params: ClaimOrderItem) => defHttp.request<ClaimOrderItem[]>({ ...Api.Query, params });

export const save = (params: ClaimOrderItemSaveDTO) => defHttp.request<ClaimOrderItem>({ ...Api.Save, params });

export const update = (params: ClaimOrderItemUpdateDTO) =>
  defHttp.request<ClaimOrderItem>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
