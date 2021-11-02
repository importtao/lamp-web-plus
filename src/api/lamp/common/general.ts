import {defHttp} from '/@/utils/http/axios';
import {AxiosRequestConfig} from "axios";
import {ServicePrefixEnum} from "/@/enums/commonEnum";
import {RequestEnum} from "/@/enums/httpEnum";
export const Api = {
  findEnumLists: {
    url: ServicePrefixEnum.OAUTH + '/enumList',
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
  findDictList: {
    url: ServicePrefixEnum.OAUTH + '/dictionary/codeList',
    method: RequestEnum.POST,
  } as AxiosRequestConfig
}
export const findEnumLists = (params)=> {
  defHttp.request({ ...Api.findEnumLists,params} );
}

export const findDictList = (params)=> {
  defHttp.request({ ...Api.findDictList,params} );
}
