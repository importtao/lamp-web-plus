// import {customFormSchemaRules} from "/@/views/lamp/system/resource/resource.data";
import {defHttp} from '/@/utils/http/axios';
import {AxiosRequestConfig} from "axios";
import {ServicePrefixEnum} from "/@/enums/commonEnum";
import {RequestEnum} from "/@/enums/httpEnum";
import {ValidationRule} from "ant-design-vue/es/form/Form";
import {FormSchema} from "/@/components/Form";

export const Api = {
  GetVisitList: {
    url: ServicePrefixEnum.AUTHORITY + `/form/validator`,
    method: RequestEnum.POST,
  } as AxiosRequestConfig,
}

export interface FormSchemaExt {

}
function checkDate(value, fieldType, isPass) {
  // value._isAMomentObject ? date?.format('YYYY-MM-DD HH:mm:ss') : date;
  if (value) {
    let  now = new Date()
    if ("Past" === isPass) return now > value;
    if ("Future" === isPass) return now < value
    // if ("Date" === fieldType ? r = now.format("YYYY-MM-DD") : "DateTime" === fieldType ? r = now.format("YYYY-MM-DD HH:mm:ss") : "Time" === fieldType && (r = now.format("HH:mm:ss")), r) {
    //
    // }
    return false
  }

  // if (e) {
  //   const t = new Date();
  //   let r = "";
  //   if ("Date" === type ? r = t.format("YYYY-MM-DD") : "DateTime" === type ? r = t.format("YYYY-MM-DD HH:mm:ss") : "Time" === type && (r = t.format("HH:mm:ss")), r) {
  //     if ("Past" === a) return r > e;
  //     if ("Future" === a) return r < e
  //   }
  // }
}

export const getValidateRules = (validateApi: AxiosRequestConfig, customFormSchemaRules: []) => {
  let path: string | undefined = validateApi.url
  // @ts-ignore
  let pathArray: string[] = path.split('/')
  console.log(pathArray)
  console.log(pathArray.length)
  // let serviceName:String = pathArray[0]
  let url: string = ''
  let i: number = 0
  pathArray.forEach((value) => {
    if (value.length < 1 || value == ' ') return
    if (i == 0) {
      url = url.concat('/', value, '/form/validator')
    } else {
      url = url.concat('/', value)
    }
    i++
  })
  return defHttp.request<FieldValidatorDesc[]>({
    url: url,
    method: validateApi.method
  }).then(fieldValidatorDescList => {
    const formSchemas: FormSchema[] = [];

    fieldValidatorDescList.forEach(({field, fieldType, constraints}) => {
      const rules:ValidationRule[] = [];
      switch (fieldType) {
        case "Float":
          rules.push({
            type: "number",
            message: `${field}必须是数字`
          })
          break;
        case "Array":
          rules.push({
            type: "array",
            message: `${field}必须是数组`
          })
          break;
        case "Boolean":
          rules.push({
            type: "boolean",
            message: `${field}必须是布尔类型`
          })
          break;
        case "Date":
          rules.push({
            type: "date",
            message: `${field}必须是日期类型`
          })
          break;

      }
      constraints.forEach(({type, attrs}) => {
        switch (type) {
          case"RegEx":
            rules.push({type: "regexp", pattern: new RegExp(attrs.regexp), message: attrs.message});
            break;
          case"Max":
            rules.push({
              type: "method", validator(e, s, a) {
                parseInt(s) > attrs.value ? a(attrs.message) : a()
              }, message: attrs.message
            });
            break;
          case"Min":
            rules.push({
              type: "method", validator(e, s, a) {
                parseInt(s) < attrs.value ? a(attrs.message) : a()
              }, message: attrs.message
            });
            break;
          case"DecimalMax":
            rules.push({
              type: "method", validator(e, s, a) {
                parseFloat(s) > attrs.value ? a(attrs.message) : a()
              }, message: attrs.message
            });
            break;
          case"DecimalMin":
            rules.push({
              type: "method", validator(e, s, a) {
                parseFloat(s) < attrs.value ? a(attrs.message) : a()
              }, message: attrs.message
            });
            break;
          case"Null":
            rules.push({
              type: "method", validator(e, s, a) {
                0 !== s.length ? a(attrs.message) : a()
              }, message: attrs.message
            });
            break;
          case"NotNull":
            rules.push({required: !0, whitespace: !0, message: attrs.message});
            break;
          case"Range":
            rules.push({max: attrs.max, min: attrs.min, message: attrs.message});
            break;
          case"AssertTrue":
            rules.push({
              type: "method", validator(e, s, a) {
                "true" === s || !0 === s ? a() : a(attrs.message)
              }, message: attrs.message
            });
            break;
          case"AssertFalse":
            rules.push({
              type: "method", validator(e, s, a) {
                "false" === s || !1 === s ? a() : a(attrs.message)
              }, message: attrs.message
            });
            break;
          case"Past":
            rules.push({
              type: "method", validator: (rule, value, callback) =>{
                checkDate(value, fieldType, "Past") ? callback() : callback(attrs.message)
              }, message: attrs.message
            });
            break;
          case"Future":
            rules.push({
              type: "method", validator: (rule, value, callback) =>{
                checkDate(value, fieldType, "Future") ? callback() : callback(attrs.message)
              }, message: attrs.message
            });
        }
      })


      formSchemas.push({field: field, rules: rules})


    })
    // @ts-ignore
    //todo 将后端返回数据转换成ValidationRule
    // let result = fieldValidatorDescList.map(fieldValidatorDesc => {
    //   let validationRule = {
    //     field: fieldValidatorDesc.field,
    //     rules: fieldValidatorDesc.constraints.map(constraint => {
    //       return {type: constraint.type, ...constraint.attrs}
    //     })
    //   }
    //   return validationRule
    // })
    // result.push(...customFormSchemaRules)
    console.log(formSchemas)
    formSchemas.push(...customFormSchemaRules)
    return new Promise((resolve) => {
      resolve(formSchemas)
    })
  })

  // return defHttp.get<GetVisitListResult>({ ...Api.GetVisitList},{params:{}});
}
