import{d as C,j as T,F as x,r as s,o as F,n as k,J as n,p as a,L as y,q as _}from"./index.b7a14d4f.js";import{_ as B}from"./TableImg.10c90ed7.js";import{f as O}from"./BasicForm.8a90524a.js";import{u as P}from"./useTable.718a222d.js";import{_ as A}from"./PageWrapper.62f72559.js";import{u as E}from"./useDrawer.1dca4d34.js";import{h as I}from"./common.1ec3dc60.js";import{A as f}from"./commonEnum.da040d67.js";import{_ as v,p as M,c as $,s as R,r as W}from"./Edit.bd9a1ad6.js";import"./vendor.352e3120.js";import"./useForm.1103fde3.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./index.18e73f7c.js";import"./uuid.2b29000c.js";import"./get.17b5f080.js";import"./useWindowSizeFn.1c78bb1f.js";import"./useModal.cb74101d.js";import"./FullscreenOutlined.c2c9b8db.js";import"./onMountedOrActivated.64fcf717.js";import"./useSortable.f7e6c10b.js";import"./SettingOutlined.522a0031.js";import"./index.f8f362f5.js";import"./RedoOutlined.2970476a.js";import"./useFullScreen.d88d5206.js";import"./index.cb0a297c.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.9469ce58.js";import"./conductUtil.b952d6da.js";import"./index.1fe375b7.js";import"./scrollTo.f06f0aa0.js";import"./useBreakpoint.508a26d1.js";import"./responsiveObserve.0e84fd18.js";import"./useExpose.da4b76ce.js";import"./index.2fe134dc.js";import"./useFormItem.3078eec7.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./index.b7943f07.js";import"./index.82115275.js";import"./index.5cf0b4b1.js";import"./uniqBy.272154d9.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./dayjs.77e2c65c.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./useSize.a97ab731.js";import"./index.173fb3cc.js";import"./usePageContext.03f0ffc0.js";import"./index.aba8a851.js";import"./index.d9119902.js";import"./ArrowLeftOutlined.70d092e9.js";import"./index.33bf2bdd.js";import"./formValidateService.993b7545.js";var D=C({name:"DictionaryManagement",components:{BasicTable:B,PageWrapper:A,EditModal:v,TableAction:O},setup(){const{t:e}=T(),{createMessage:c,createConfirm:j}=x(),[b,{openDrawer:r}]=E(),[h,{reload:m,getSelectRowKeys:d}]=P({title:e("lamp.system.dictionary.table.title"),api:M,columns:$,formConfig:{labelWidth:120,schemas:R},beforeFetch:I,useSearchForm:!0,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:160,title:e("common.column.action"),dataIndex:"action",slots:{customRender:"action"}}});function p(t,i){i.stopPropagation(),r(!0,{record:t,type:f.COPY})}function l(){r(!0,{type:f.ADD})}function u(t,i){i.stopPropagation(),r(!0,{record:t,type:f.EDIT})}function o(){m()}async function g(t){await W(t),c.success(e("common.tips.deleteSuccess")),o()}function S(t,i){i.stopPropagation(),(t==null?void 0:t.id)&&g([t.id])}function w(){const t=d();if(!t||t.length<=0){c.warning(e("common.tips.pleaseSelectTheData"));return}j({iconType:"warning",content:e("common.tips.confirmDelete"),onOk:async()=>{await g(t)}})}return{t:e,registerTable:h,registerDrawer:b,handleAdd:l,handleCopy:p,handleEdit:u,handleDelete:S,handleSuccess:o,handleBatchDelete:w}}});function U(e,c,j,b,r,h){const m=s("a-button"),d=s("TableAction"),p=s("BasicTable"),l=s("EditModal"),u=s("PageWrapper");return F(),k(u,{dense:"",contentFullHeight:"",fixedHeight:""},{default:n(()=>[a(p,{onRegister:e.registerTable},{toolbar:n(()=>[a(m,{type:"primary",onClick:e.handleBatchDelete},{default:n(()=>[y(_(e.t("common.title.delete")),1)]),_:1},8,["onClick"]),a(m,{type:"primary",onClick:e.handleAdd},{default:n(()=>[y(_(e.t("common.title.add")),1)]),_:1},8,["onClick"])]),action:n(({record:o})=>[a(d,{actions:[{label:e.t("common.title.edit"),onClick:e.handleEdit.bind(null,o)},{label:e.t("common.title.copy"),onClick:e.handleCopy.bind(null,o)},{label:e.t("common.title.delete"),color:"error",popConfirm:{title:e.t("common.tips.confirmDelete"),confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),a(l,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}D.render=U;export default D;
