import { BuyTaskSaveDTO, BuyTaskUpdateDTO, BuyTask, BuyTaskPageQuery } from './model/buyTaskModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/buyTask/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/buyTask',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/buyTask',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/buyTask',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/buyTask/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<BuyTaskPageQuery>) =>
  defHttp.request<PageResult<BuyTask>>({ ...Api.Page, params });

export const query = (params: BuyTask) => defHttp.request<BuyTask[]>({ ...Api.Query, params });

export const save = (params: BuyTaskSaveDTO) => defHttp.request<BuyTask>({ ...Api.Save, params });

export const update = (params: BuyTaskUpdateDTO) =>
  defHttp.request<BuyTask>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
