import { WarehouseInventoryRecordSaveDTO, WarehouseInventoryRecordUpdateDTO, WarehouseInventoryRecord, WarehouseInventoryRecordPageQuery } from './model/warehouseInventoryRecordModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventoryRecord/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventoryRecord',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventoryRecord',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventoryRecord',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventoryRecord/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<WarehouseInventoryRecordPageQuery>) =>
  defHttp.request<PageResult<WarehouseInventoryRecord>>({ ...Api.Page, params });

export const query = (params: WarehouseInventoryRecord) => defHttp.request<WarehouseInventoryRecord[]>({ ...Api.Query, params });

export const save = (params: WarehouseInventoryRecordSaveDTO) => defHttp.request<WarehouseInventoryRecord>({ ...Api.Save, params });

export const update = (params: WarehouseInventoryRecordUpdateDTO) =>
  defHttp.request<WarehouseInventoryRecord>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
