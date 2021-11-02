import { StationSaveDTO, StationUpdateDTO, Station, StationPageQuery } from './model/stationModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.ORG + '/station/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.ORG + '/station',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.ORG + '/station',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.ORG + '/station',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.ORG + '/station/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<StationPageQuery>) =>
  defHttp.request<PageResult<Station>>({ ...Api.Page, params });

export const query = (params: Station) => defHttp.request<Station[]>({ ...Api.Query, params });

export const save = (params: StationSaveDTO) => defHttp.request<Station>({ ...Api.Save, params });

export const update = (params: StationUpdateDTO) =>
  defHttp.request<Station>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
