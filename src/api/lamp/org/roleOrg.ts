import { RoleOrgSaveDTO, RoleOrgUpdateDTO, RoleOrg, RoleOrgPageQuery } from './model/roleOrgModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.ORG + '/roleOrg/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.ORG + '/roleOrg',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.ORG + '/roleOrg',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.ORG + '/roleOrg',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.ORG + '/roleOrg/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<RoleOrgPageQuery>) =>
  defHttp.request<PageResult<RoleOrg>>({ ...Api.Page, params });

export const query = (params: RoleOrg) => defHttp.request<RoleOrg[]>({ ...Api.Query, params });

export const save = (params: RoleOrgSaveDTO) => defHttp.request<RoleOrg>({ ...Api.Save, params });

export const update = (params: RoleOrgUpdateDTO) =>
  defHttp.request<RoleOrg>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
