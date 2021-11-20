import { ClaimOrderSaveDTO, ClaimOrderUpdateDTO, ClaimOrder, ClaimOrderPageQuery } from './model/claimOrderModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrder/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrder',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrder',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrder',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/claimOrder/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<ClaimOrderPageQuery>) =>
  defHttp.request<PageResult<ClaimOrder>>({ ...Api.Page, params });

export const query = (params: ClaimOrder) => defHttp.request<ClaimOrder[]>({ ...Api.Query, params });

export const save = (params: ClaimOrderSaveDTO) => defHttp.request<ClaimOrder>({ ...Api.Save, params });

export const update = (params: ClaimOrderUpdateDTO) =>
  defHttp.request<ClaimOrder>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
