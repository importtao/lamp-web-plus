import{d as I,j as B,a0 as D,F as M,r as a,o as O,n as P,J as r,p as m,L as S,q as w}from"./index.0523a5a3.js";import{_ as k}from"./TableImg.5c780d48.js";import{f as A}from"./BasicForm.71637030.js";import{u as E}from"./useTable.61f71811.js";import{_ as R}from"./PageWrapper.40d43df1.js";import{u as v}from"./useDrawer.78890a21.js";import{h as $}from"./common.1ec3dc60.js";import{A as j}from"./commonEnum.da040d67.js";import{_ as W,c as U,s as V,r as q}from"./Edit.12f2e2f9.js";import"./vendor.352e3120.js";import"./useForm.eec49fca.js";import"./index.b9116045.js";import"./UpOutlined.a2803449.js";import"./index.587209e3.js";import"./index.a9b2b45a.js";import"./uuid.2b29000c.js";import"./get.108cb567.js";import"./useWindowSizeFn.4268e9dd.js";import"./useModal.131645a5.js";import"./FullscreenOutlined.d52a1fbe.js";import"./onMountedOrActivated.a2faf533.js";import"./useSortable.d1ae52c9.js";import"./SettingOutlined.eaab6e15.js";import"./index.8e7c33d5.js";import"./RedoOutlined.e111b4c0.js";import"./useFullScreen.4feb3b86.js";import"./index.c13e48f6.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.43515907.js";import"./conductUtil.fde7132a.js";import"./index.26c5e60b.js";import"./scrollTo.63faf8a4.js";import"./useBreakpoint.a9fc3198.js";import"./responsiveObserve.43c11602.js";import"./useExpose.cceba30c.js";import"./index.09507e37.js";import"./useFormItem.ddca9049.js";import"./iconUtil.f3ee4c23.js";import"./_baseSet.f781a95b.js";import"./hasIn.a020a292.js";import"./FileOutlined.53cb4a4e.js";import"./user.c02d9c13.js";import"./transButton.555d93e9.js";import"./DeleteOutlined.30981501.js";import"./index.436d37b6.js";import"./index.c4d8ae58.js";import"./index.8b9bc77d.js";import"./uniqBy.2c7c6ba7.js";import"./_baseIteratee.32c93b4a.js";import"./_baseProperty.74f89655.js";import"./findIndex.0841f873.js";import"./toInteger.1430c119.js";import"./index.b642a15b.js";import"./download.062b03e8.js";import"./index.383f27d9.js";import"./dayjs.7ad781c8.js";import"./index.315e04ce.js";import"./Col.102f0df6.js";import"./useSize.6627aa05.js";import"./index.4637d8b2.js";import"./usePageContext.0fc2e04d.js";import"./index.e2c95991.js";import"./index.814a8df7.js";import"./ArrowLeftOutlined.62657f64.js";import"./index.05d758e3.js";import"./formValidateService.5ed66daa.js";var _=I({name:"ResourceManagement",components:{BasicTable:k,PageWrapper:R,EditModal:W,TableAction:A},setup(e){const{t:o}=B(),d=D("selectedResourceData"),b=D("currentMenuId"),{createMessage:p,createConfirm:g}=M(),[c,{openDrawer:i}]=v(),[l,{reload:u,getSelectRowKeys:f}]=E({title:o("lamp.system.resource.table.title"),dataSource:d,pagination:!1,columns:U,formConfig:{labelWidth:120,schemas:V},beforeFetch:$,useSearchForm:!1,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:160,title:o("common.column.action"),dataIndex:"action",slots:{customRender:"action"}}});function n(t,s){s.stopPropagation(),i(!0,{record:t,type:j.COPY})}function C(t){let s={menuId:t};console.log(s),i(!0,{record:s,type:j.ADD})}function T(t,s){s.stopPropagation(),i(!0,{record:t,type:j.EDIT})}function h(){u()}async function y(t){await q(t),p.success(o("common.tips.deleteSuccess")),h()}function x(t,s){s.stopPropagation(),(t==null?void 0:t.id)&&y([t.id])}function F(){const t=f();if(!t||t.length<=0){p.warning(o("common.tips.pleaseSelectTheData"));return}g({iconType:"warning",content:o("common.tips.confirmDelete"),onOk:async()=>{await y(t)}})}return{t:o,registerTable:l,registerDrawer:c,handleAdd:C,handleCopy:n,handleEdit:T,handleDelete:x,handleSuccess:h,handleBatchDelete:F,selectedResourceData:d,currentMenuId:b}}});function z(e,o,d,b,p,g){const c=a("a-button"),i=a("TableAction"),l=a("BasicTable"),u=a("EditModal"),f=a("PageWrapper");return O(),P(f,{dense:"",contentFullHeight:"",fixedHeight:""},{default:r(()=>[m(l,{onRegister:e.registerTable},{toolbar:r(()=>[m(c,{type:"primary",onClick:e.handleBatchDelete},{default:r(()=>[S(w(e.t("common.title.delete")),1)]),_:1},8,["onClick"]),m(c,{type:"primary",onClick:o[1]||(o[1]=n=>e.handleAdd(e.currentMenuId))},{default:r(()=>[S(w(e.t("common.title.add")),1)]),_:1})]),action:r(({record:n})=>[m(i,{actions:[{label:e.t("common.title.edit"),onClick:e.handleEdit.bind(null,n)},{label:e.t("common.title.copy"),onClick:e.handleCopy.bind(null,n)},{label:e.t("common.title.delete"),color:"error",popConfirm:{title:e.t("common.tips.confirmDelete"),confirm:e.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),m(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}_.render=z;export default _;
