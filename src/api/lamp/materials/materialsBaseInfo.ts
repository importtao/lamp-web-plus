import { MaterialsBaseInfoSaveDTO, MaterialsBaseInfoUpdateDTO, MaterialsBaseInfo, MaterialsBaseInfoPageQuery } from './model/materialsBaseInfoModel';
import { PageParams, PageResult } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestEnum } from '/@/enums/httpEnum';
import { ServicePrefixEnum } from '/@/enums/commonEnum';
import type { AxiosRequestConfig } from 'axios';
import {Sku} from "/@/api/lamp/materials/model/skuModel";

export const Api = {
  Page: {
    url: ServicePrefixEnum.MATERIALS + '/materialsBaseInfo/page',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Save: {
    url: ServicePrefixEnum.MATERIALS + '/materialsBaseInfo',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  Update: {
    url: ServicePrefixEnum.MATERIALS + '/materialsBaseInfo',
    method: RequestEnum.PUT,
  },
  Delete: {
    url: ServicePrefixEnum.MATERIALS + '/materialsBaseInfo',
    method: RequestEnum.DELETE,
  } as AxiosRequestConfig,
  Query: {
    url: ServicePrefixEnum.MATERIALS + '/materialsBaseInfo/query',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
};

export const page = (params: PageParams<MaterialsBaseInfoPageQuery>) =>
  defHttp.request<PageResult<MaterialsBaseInfo>>({ ...Api.Page, params });

export const query = (params: MaterialsBaseInfo) => defHttp.request<MaterialsBaseInfo[]>({ ...Api.Query, params });

export const getInfoByMaterialsId = (materialsId: string) => defHttp.request<Map<String,Object>>({ url: ServicePrefixEnum.MATERIALS + '/materialsBaseInfo/byMaterialsId/'+materialsId, method: RequestEnum.GET });


export const save = (params: MaterialsBaseInfoSaveDTO) => defHttp.request<MaterialsBaseInfo>({ ...Api.Save, params });

export const update = (params: MaterialsBaseInfoUpdateDTO) =>
  defHttp.request<MaterialsBaseInfo>({ ...Api.Update, params });

export const remove = (params: string[]) => defHttp.request<boolean>({ ...Api.Delete, params });
