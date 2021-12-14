import { LackApplySaveDTO, LackApplyUpdateDTO, LackApply, LackApplyPageQuery } from './model/lackApplyModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/lackApply/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/lackApply',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/lackApply',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/lackApply',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/lackApply/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<LackApplyPageQuery>) =>
  defHttp.request<PageResult<LackApply>>({ ...Api.Page, params });

export const query = (params: LackApply) => defHttp.request<LackApply[]>({ ...Api.Query, params });
export const detail = (id:string) => defHttp.request({url: ServicePrefixEnum.MATERIALS + '/lackApply/info/'+id, method: RequestEnum.GET});

export const handler = (params: LackApply) => defHttp.request<LackApply>({ url: ServicePrefixEnum.MATERIALS + '/lackApply/handler', method: RequestEnum.POST, params });

export const save = (params: LackApplySaveDTO) => defHttp.request<LackApply>({ ...Api.Save, params });
export const update = (params: LackApplyUpdateDTO) =>
  defHttp.request<LackApply>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
