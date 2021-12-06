import { WarehouseInventorySaveDTO, WarehouseInventoryUpdateDTO, WarehouseInventory, WarehouseInventoryPageQuery } from './model/warehouseInventoryModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventory/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventory',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventory',
    method: RequestEnum.PUT,
  },
  changeQuantity: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventory/changeQuantity',
    method: RequestEnum.POST,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventory',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/warehouseInventory/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,

};

export const page = (params: PageParams<WarehouseInventoryPageQuery>) =>
  defHttp.request<PageResult<WarehouseInventory>>({ ...Api.Page, params });

export const query = (params: WarehouseInventory) => defHttp.request<WarehouseInventory[]>({ ...Api.Query, params });

export const listBySkuId = (skuId: string) => defHttp.request<any[]>({url:ServicePrefixEnum.MATERIALS + '/warehouseInventory/listBySkuId/'+skuId,method:  RequestEnum.GET});

export const save = (params: WarehouseInventorySaveDTO) => defHttp.request<WarehouseInventory>({ ...Api.Save, params });

export const update = (params: WarehouseInventoryUpdateDTO) => defHttp.request<WarehouseInventory>({ ...Api.Update, params });

export const changeQuantity = (params: WarehouseInventoryUpdateDTO) => defHttp.request<WarehouseInventory>({ ...Api.changeQuantity, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
