import {SkuSaveDTO, SkuUpdateDTO, Sku, SkuPageQuery, SkuDTO} from './model/skuModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/sku/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/sku',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  saveList: {
    url: ServicePrefixEnum.MATERIALS + '/sku/saveList',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/sku',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/sku',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/sku/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<SkuPageQuery>) =>
  defHttp.request<PageResult<Sku>>({ ...Api.Page, params });

export const query = (params: Sku) => defHttp.request<Sku[]>({ ...Api.Query, params });
export const getSkuList = (materialsId: string) => defHttp.request<Sku[]>({ url: ServicePrefixEnum.MATERIALS + '/sku/byMaterialsId/'+materialsId, method: RequestEnum.GET });
export const bySkuId = (skuId: string) => defHttp.request({ url: ServicePrefixEnum.MATERIALS + '/sku/bySkuId/'+skuId, method: RequestEnum.GET });
export const getShowList = (materialsId: string) => defHttp.request({ url: ServicePrefixEnum.MATERIALS + '/sku/getShowList/'+materialsId, method: RequestEnum.GET });

export const save = (params: SkuSaveDTO) => defHttp.request<Sku>({ ...Api.Save, params });
export const saveList = (params: Array<SkuDTO>) => defHttp.request({ ...Api.saveList, params });

export const update = (params: SkuUpdateDTO) =>
  defHttp.request<Sku>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
