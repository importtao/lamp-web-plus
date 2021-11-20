import {SkuParent, SkuViewSaveDTO} from "/@/api/lamp/materials/model/skuParentModel";
import {SkuItemSaveDTO} from "/@/api/lamp/materials/model/skuItemModel";
import sku from "/@/locales/lang/zh_CN/lamp/materials/sku";

export interface SkuPageQuery {
  materialsId: string;
  code: string;
  path: string;
  price: number;
  claimPrice: number;
  quantity: number;
  minQuantity: number;
  unit: string;
  auditType: string;
  disabled: boolean;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuSaveDTO {
  materialsId: string;
  code: string;
  path: string;
  price: number;
  claimPrice: number;
  quantity: number;
  minQuantity: number;
  unit: string;
  auditType: string;
  disabled: boolean;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface SkuUpdateDTO {
  id: string;
  materialsId: string;
  code: string;
  path: string;
  price: number;
  claimPrice: number;
  quantity: number;
  minQuantity: number;
  unit: string;
  auditType: string;
  disabled: boolean;
  orderIndex: number;
  remark: string;
  version: number;
  isDelete: boolean;
}

export interface Sku {
  materialsId?: string;
  code?: string;
  path?: string;
  price?: number;
  claimPrice?: number;
  quantity?: number;
  minQuantity?: number;
  unit?: string;
  auditType?: string;
  disabled?: boolean;
  orderIndex?: number;
  remark?: string;
  version?: number;
  isDelete?: boolean;
  id?: string;
  createTime?: string;
  createdBy?: string;
  updateTime?: string;
  updatedBy?: string;
  echoMap?: Recordable;
}
export interface SkuDTO extends sku{
  pathObject: Map<string,string>
}


export interface SkuEdit {
  name: string;
  tags: Array<string>;
  inputVisible?: boolean;
  inputValue?: string;
}

export interface SkuDataValueItem {
  id: string;
  name: string;
  imgUrl?: string;
  previewImgUrl?: string;
}

export interface SkuDataItem {
  k?: string;
  k_s?: string;
  k_id?: string;
  v?: Array<SkuDataValueItem>;
  largeImageMode?: boolean,
  inputVisible?: boolean,
  inputValue?: string,
}

// 所有 sku 的组合，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合

export interface SkuItemProperty {
  id: string;
  price: string;// 价格（单位分）
  [key: string]: string;
  discount: string;
  stock_num: string;//当前 sku 组合对应的库存
}

export interface SkuItemMessage {
  // 商品留言
  datetime?: '0' | '1', // 留言类型为 time 时，是否含日期。'1' 表示包含
  multiple?: '0' | '1', // 留言类型为 text 时，是否多行文本。'1' 表示多行
  name: string, // 留言名称
  type: 'text' | 'id_no' | 'tel' | 'date' | 'time' | 'email', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
  required: '1' | '0', // 是否必填 '1' 表示必填
  placeholder: string, // 可选值，占位文本
  extraDesc: string  // 可选值，附加描述文案
}




export interface SkuData {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: Array<SkuDataItem>;
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: Array<SkuItemProperty>;
  price: string, // 默认价格（单位元）
  stock_num: number, // 商品总库存
  collection_id?: number, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: boolean, // 是否无规格商品
  messages?: Array<SkuItemMessage>;
  hide_stock: boolean// 是否隐藏剩余库存
}

export const properties = [
  // 商品属性  暂定用来处理需求时间  加急加价
  {
    k_id: 123, // 属性id
    k: '加料', // 属性名
    is_multiple: true, // 是否可多选
    v: [
      {
        id: 1222, // 属性值id
        name: '珍珠', // 属性值名
        price: 1, // 属性值加价
      },
      {
        id: 1223,
        name: '椰果',
        price: 1,
      },
    ],
  },
];

//前端转换为后端对象
export function transferSaveValueFromFront(skuDataValueItems: Array<SkuDataValueItem>, materialsId: string, parentId: string) {
  let skuItemSaveDTOS: SkuItemSaveDTO[] = []
  for (let i = 0; i < skuDataValueItems.length; i++) {
    let skuDataValueItem: SkuDataValueItem = skuDataValueItems[i]
    let skuItemSaveDTO: SkuItemSaveDTO = {
      materialsId: materialsId,
      parentId: parentId,
      name: skuDataValueItem.name,
      id: skuDataValueItem.id,
      imgUrl: skuDataValueItem.imgUrl,
      orderIndex: i
    }
    skuItemSaveDTOS.push(skuItemSaveDTO)
  }
  return skuItemSaveDTOS
}

export function transferFromFront(skuDataItems: Array<SkuDataItem>, materialsId: string) {
  let skuParents: SkuViewSaveDTO[] = []
  for (let i = 0; i < skuDataItems.length; i++) {
    let skuDataItem: SkuDataItem = skuDataItems[i]
    let skuViewSaveDTO: SkuViewSaveDTO = {
      materialsId: materialsId,
      name: skuDataItem.k,
      keyStr: skuDataItem.k_s,
      id: skuDataItem.k_id,
      orderIndex: i,
      largeImageMode: skuDataItem.largeImageMode,
      itemSaveDTOList: transferSaveValueFromFront(skuDataItem.v, materialsId, skuDataItem.k_id)
    }
    skuParents.push(skuViewSaveDTO)
  }
  return skuParents
}

//后端转换为前端对象
export function transferToFront(skuParents: Array<SkuParent>) {
  let skuDataItems: SkuDataItem[] = []
  for (let i = 0; i < skuParents.length; i++) {
    let skuParent: SkuParent = skuParents[i]
    let skuDataItem: SkuDataItem = {
      k: skuParent.name,
      k_s: skuParent.keyStr,
      k_id: skuParent.id,
      v: [],
      largeImageMode: skuParent.largeImageMode,
      inputVisible: false,
      inputValue: '',
    }
    skuDataItems.push(skuDataItem)
  }
  return skuDataItems
}

// {
//   id: 2259, // skuId
//     s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
//   s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
//   price: 100, // 价格（单位分）
//   stock_num: 110 // 当前 sku 组合对应的库存
// }

export function transferSkuItemPropertyToFront(skuParents: Array<SkuParent>) {
  let skuDataItems: SkuItemProperty[] = []
  for (let i = 0; i < skuParents.length; i++) {
    let skuParent: SkuParent = skuParents[i]
    let skuDataItem: SkuItemProperty = {
      k: skuParent.name,
      k_s: skuParent.keyStr,
      k_id: skuParent.id,
      v: [],
      largeImageMode: skuParent.largeImageMode,
      inputVisible: false,
      inputValue: '',
    }
    skuDataItems.push(skuDataItem)
  }
  return skuDataItems
}
