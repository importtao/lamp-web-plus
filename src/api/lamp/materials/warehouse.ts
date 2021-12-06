import { WarehouseSaveDTO, WarehouseUpdateDTO, Warehouse, WarehousePageQuery } from './model/warehouseModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/warehouse/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/warehouse',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/warehouse',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/warehouse',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/warehouse/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  simpleList: {
    url: ServicePrefixEnum.MATERIALS + '/warehouse/simpleList',
    method: RequestEnum.GET,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<WarehousePageQuery>) =>
  defHttp.request<PageResult<Warehouse>>({ ...Api.Page, params });

export const query = (params: Warehouse) => defHttp.request<Warehouse[]>({ ...Api.Query, params });
export const simpleList = () => defHttp.request<Warehouse[]>({ ...Api.simpleList });
export const save = (params: WarehouseSaveDTO) => defHttp.request<Warehouse>({ ...Api.Save, params });

export const update = (params: WarehouseUpdateDTO) =>
  defHttp.request<Warehouse>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
