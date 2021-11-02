import {
  CategoryNodeSaveDTO,
  CategoryNodeUpdateDTO,
  CategoryNode,
  CategoryNodePageQuery,
  CategoryNodeParam
} from './model/categoryNodeModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/categoryNode/treeTableList',
    method: RequestEnum.GET,
  } as AxiosRequestConfig,
  // Save: {
  //   url: ServicePrefixEnum.MATERIALS + '/categoryNode',
  //   method: RequestEnum.POST,
  // } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/categoryNode/treeNode',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/categoryNode',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/categoryNode',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/categoryNode/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<CategoryNodePageQuery>) =>
  defHttp.request<PageResult<CategoryNode>>({ ...Api.Page, params });

export const query = (params: CategoryNode) => defHttp.request<CategoryNode[]>({ ...Api.Query, params });

// export const save = (params: CategoryNodeSaveDTO) => defHttp.request<CategoryNode>({ ...Api.Save, params });
export const save = (params: CategoryNodeParam) => defHttp.request<CategoryNodeParam>({ ...Api.Save, params });

export const update = (params: CategoryNodeUpdateDTO) =>
  defHttp.request<CategoryNode>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
