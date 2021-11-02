import { MenuSaveDTO, MenuUpdateDTO, Menu, MenuPageQuery } from './model/menuModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  GetMenuTree: {
    url: ServicePrefixEnum.AUTHORITY + '/menu/tree1',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Page: {
    url: ServicePrefixEnum.AUTHORITY + '/menu/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.AUTHORITY + '/menu',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.AUTHORITY + '/menu',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.AUTHORITY + '/menu',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.AUTHORITY + '/menu/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  getMenuById: {
    url: ServicePrefixEnum.AUTHORITY + '/menu/',
    method: RequestEnum.GET,
  } as AxiosRequestConfig,
};

export const getMenuTree = ()=> {
  return defHttp.request({ ...Api.GetMenuTree });
}
export const page = (params: PageParams<MenuPageQuery>) =>
  defHttp.request<PageResult<Menu>>({ ...Api.Page, params });

export const query = (params: Menu) => defHttp.request<Menu[]>({ ...Api.Query, params });
// @ts-ignore
export const getMenuById = (menuId: number) => defHttp.request<Menu>({ url: Api.getMenuById.url + menuId,method: Api.getMenuById.method });

export const save = (params: MenuSaveDTO) => defHttp.request<Menu>({ ...Api.Save, params });

export const update = (params: MenuUpdateDTO) =>
  defHttp.request<Menu>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });

