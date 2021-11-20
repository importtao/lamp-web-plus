import { UseOrgSaveDTO, UseOrgUpdateDTO, UseOrg, UseOrgPageQuery } from './model/useOrgModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/useOrg/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/useOrg',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/useOrg',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/useOrg',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/useOrg/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<UseOrgPageQuery>) =>
  defHttp.request<PageResult<UseOrg>>({ ...Api.Page, params });

export const query = (params: UseOrg) => defHttp.request<UseOrg[]>({ ...Api.Query, params });

export const save = (params: UseOrgSaveDTO) => defHttp.request<UseOrg>({ ...Api.Save, params });

export const update = (params: UseOrgUpdateDTO) =>
  defHttp.request<UseOrg>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
