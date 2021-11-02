import { OrgSaveDTO, OrgUpdateDTO, Org, OrgPageQuery } from './model/orgModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.ORG + '/org/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.ORG + '/org',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.ORG + '/org',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.ORG + '/org',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.ORG + '/org/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<OrgPageQuery>) =>
  defHttp.request<PageResult<Org>>({ ...Api.Page, params });

export const query = (params: Org) => defHttp.request<Org[]>({ ...Api.Query, params });

export const save = (params: OrgSaveDTO) => defHttp.request<Org>({ ...Api.Save, params });

export const update = (params: OrgUpdateDTO) =>
  defHttp.request<Org>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
