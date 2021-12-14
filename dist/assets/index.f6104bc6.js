import{d as w,j as C,F as k,r as s,o as x,n as F,J as n,p as a,L as y,q as _}from"./index.f012a3f4.js";import{_ as B}from"./TableImg.96743eb0.js";import{f as I}from"./BasicForm.2d8a4167.js";import{u as O}from"./useTable.5e0260b2.js";import{_ as P}from"./PageWrapper.06ac3dfa.js";import{u as A}from"./useDrawer.803df328.js";import{h as E}from"./common.1ec3dc60.js";import{A as f}from"./commonEnum.da040d67.js";import{p as v,r as M}from"./buyTaskItem.cb836128.js";import{_ as $,c as R,s as W}from"./Edit.9f8315cd.js";import"./vendor.352e3120.js";import"./useForm.96bd58a3.js";import"./index.22fa49e6.js";import"./UpOutlined.5f7f87c9.js";import"./index.fcff9c6a.js";import"./index.6b5846e1.js";import"./uuid.2b29000c.js";import"./get.4bb36d6d.js";import"./useWindowSizeFn.21617b5b.js";import"./useModal.31640c24.js";import"./FullscreenOutlined.db659752.js";import"./onMountedOrActivated.a84ead65.js";import"./useSortable.271c5036.js";import"./SettingOutlined.c267d90d.js";import"./index.a99c15a9.js";import"./RedoOutlined.bbea3551.js";import"./useFullScreen.96289f6a.js";import"./index.64b3537b.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.b98aa3d0.js";import"./conductUtil.e383e830.js";import"./index.656c6dbf.js";import"./scrollTo.168243c4.js";import"./useBreakpoint.521f32f2.js";import"./responsiveObserve.40f9db24.js";import"./useExpose.21bfa257.js";import"./index.8cfd22dd.js";import"./useFormItem.828d968c.js";import"./iconUtil.f2afc0cc.js";import"./_baseSet.77ab947c.js";import"./hasIn.e5f45297.js";import"./FileOutlined.dfec8941.js";import"./user.8beb92fb.js";import"./transButton.77ed102e.js";import"./DeleteOutlined.4af221e4.js";import"./index.ccba4a8f.js";import"./index.5919009b.js";import"./index.3a3a0b83.js";import"./uniqBy.1b31fa16.js";import"./_baseIteratee.c907cd0a.js";import"./_baseProperty.74f89655.js";import"./findIndex.2bc5b0a2.js";import"./toInteger.87149fb4.js";import"./index.1df1593d.js";import"./download.09c2660b.js";import"./index.86f670f0.js";import"./dayjs.881e239d.js";import"./index.412350b3.js";import"./Col.13d8b9cb.js";import"./useSize.5c4412c9.js";import"./index.41a9c009.js";import"./usePageContext.2729de0d.js";import"./index.df461530.js";import"./index.069b5dd9.js";import"./ArrowLeftOutlined.61d94bda.js";import"./index.a9d5c22c.js";import"./formValidateService.8fbd814e.js";var S=w({name:"BuyTaskItemManagement",components:{BasicTable:B,PageWrapper:P,EditModal:$,TableAction:I},setup(){const{t:e}=C(),{createMessage:c,createConfirm:b}=k(),[j,{openDrawer:r}]=A(),[h,{reload:m,getSelectRowKeys:d}]=O({title:e("lamp.materials.buyTaskItem.table.title"),api:v,columns:R,formConfig:{labelWidth:120,schemas:W},beforeFetch:E,useSearchForm:!0,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:160,title:e("common.column.action"),dataIndex:"action",slots:{customRender:"action"}}});function p(t,i){i.stopPropagation(),r(!0,{record:t,type:f.COPY})}function l(){r(!0,{type:f.ADD})}function u(t,i){i.stopPropagation(),r(!0,{record:t,type:f.EDIT})}function o(){m()}async function g(t){await M(t),c.success(e("common.tips.deleteSuccess")),o()}function T(t,i){i.stopPropagation(),(t==null?void 0:t.id)&&g([t.id])}function D(){const t=d();if(!t||t.length<=0){c.warning(e("common.tips.pleaseSelectTheData"));return}b({iconType:"warning",content:e("common.tips.confirmDelete"),onOk:async()=>{await g(t)}})}return{t:e,registerTable:h,registerDrawer:j,handleAdd:l,handleCopy:p,handleEdit:u,handleDelete:T,handleSuccess:o,handleBatchDelete:D}}});function U(e,c,b,j,r,h){const m=s("a-button"),d=s("TableAction"),p=s("BasicTable"),l=s("EditModal"),u=s("PageWrapper");return x(),F(u,{dense:"",contentFullHeight:"",fixedHeight:""},{default:n(()=>[a(p,{onRegister:e.registerTable},{toolbar:n(()=>[a(m,{type:"primary",onClick:e.handleBatchDelete},{default:n(()=>[y(_(e.t("common.title.delete")),1)]),_:1},8,["onClick"]),a(m,{type:"primary",onClick:e.handleAdd},{default:n(()=>[y(_(e.t("common.title.add")),1)]),_:1},8,["onClick"])]),action:n(({record:o})=>[a(d,{actions:[{label:e.t("common.title.edit"),onClick:e.handleEdit.bind(null,o)},{label:e.t("common.title.copy"),onClick:e.handleCopy.bind(null,o)},{label:e.t("common.title.delete"),color:"error",popConfirm:{title:e.t("common.tips.confirmDelete"),confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),a(l,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}S.render=U;export default S;
