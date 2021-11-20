import { BuyOrderSaveDTO, BuyOrderUpdateDTO, BuyOrder, BuyOrderPageQuery } from './model/buyOrderModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/buyOrder/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/buyOrder',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/buyOrder',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/buyOrder',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/buyOrder/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<BuyOrderPageQuery>) =>
  defHttp.request<PageResult<BuyOrder>>({ ...Api.Page, params });

export const query = (params: BuyOrder) => defHttp.request<BuyOrder[]>({ ...Api.Query, params });

export const save = (params: BuyOrderSaveDTO) => defHttp.request<BuyOrder>({ ...Api.Save, params });

export const update = (params: BuyOrderUpdateDTO) =>
  defHttp.request<BuyOrder>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
