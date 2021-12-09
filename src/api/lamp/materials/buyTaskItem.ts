import { BuyTaskItemSaveDTO, BuyTaskItemUpdateDTO, BuyTaskItem, BuyTaskItemPageQuery } from './model/buyTaskItemModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/buyTaskItem/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/buyTaskItem',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/buyTaskItem',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/buyTaskItem',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/buyTaskItem/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,

};

export const page = (params: PageParams<BuyTaskItemPageQuery>) =>
  defHttp.request<PageResult<BuyTaskItem>>({ ...Api.Page, params });

export const query = (params: BuyTaskItem) => defHttp.request<BuyTaskItem[]>({ ...Api.Query, params });
export const listBySkyId = (skuId:string) => defHttp.request<BuyTaskItem[]>({url: ServicePrefixEnum.MATERIALS + '/buyTaskItem/listBySkuId/orderByRequireDateDESC/'+skuId, method: RequestEnum.GET});
export const listByOrderId = (orderId:string) => defHttp.request<BuyTaskItem[]>({url: ServicePrefixEnum.MATERIALS + '/buyTaskItem/listByOrderId/'+orderId, method: RequestEnum.GET});

export const save = (params: BuyTaskItemSaveDTO) => defHttp.request<BuyTaskItem>({ ...Api.Save, params });

export const update = (params: BuyTaskItemUpdateDTO) =>
  defHttp.request<BuyTaskItem>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
