import{d as w,j as T,F as x,r as a,o as F,n as P,J as s,p as n,L as y,q as _}from"./index.b6dfbfcf.js";import{_ as k}from"./TableImg.62dc4313.js";import{f as B}from"./BasicForm.ba267815.js";import{u as O}from"./useTable.f7c905cd.js";import{_ as A}from"./PageWrapper.69acb2a5.js";import{u as E}from"./useDrawer.3628b9ed.js";import{h as I}from"./common.1ec3dc60.js";import{A as f}from"./commonEnum.da040d67.js";import{_ as v,p as M,c as $,s as R,r as W}from"./Edit.964fa584.js";import"./vendor.352e3120.js";import"./useForm.93cfb83b.js";import"./index.9816e582.js";import"./UpOutlined.4269b743.js";import"./index.238a8995.js";import"./index.f208c793.js";import"./uuid.2b29000c.js";import"./get.4daef9c8.js";import"./useWindowSizeFn.fee40caf.js";import"./useModal.2752a197.js";import"./FullscreenOutlined.fdd43b18.js";import"./onMountedOrActivated.9d53918d.js";import"./useSortable.f59e44e0.js";import"./SettingOutlined.31bf1a90.js";import"./index.57ea38db.js";import"./RedoOutlined.6634afa6.js";import"./useFullScreen.67aa57a8.js";import"./index.0c19262d.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.9c0f957d.js";import"./conductUtil.8c9b1169.js";import"./index.658efdb1.js";import"./scrollTo.c0c7cc64.js";import"./useBreakpoint.4a44e358.js";import"./responsiveObserve.7206f913.js";import"./useExpose.6218ae5d.js";import"./index.ffba0b1a.js";import"./useFormItem.23c9ece5.js";import"./iconUtil.018c1850.js";import"./_baseSet.e7326e09.js";import"./hasIn.babd797c.js";import"./FileOutlined.44378449.js";import"./user.45434715.js";import"./transButton.bd1bd746.js";import"./DeleteOutlined.e9575d1c.js";import"./index.1aad4d44.js";import"./index.e5a6a79c.js";import"./index.672abebf.js";import"./uniqBy.c4f2e7ec.js";import"./_baseIteratee.2e9463e3.js";import"./_baseProperty.74f89655.js";import"./findIndex.c7191173.js";import"./toInteger.e4331dbc.js";import"./index.68ce2096.js";import"./download.d97e990c.js";import"./index.03ecce9c.js";import"./dayjs.c72a52f8.js";import"./index.f73b7b74.js";import"./Col.590da3fb.js";import"./useSize.fb5b95d6.js";import"./index.fc5361f4.js";import"./usePageContext.4aadab4f.js";import"./index.a846e3a0.js";import"./index.4cbf17ba.js";import"./ArrowLeftOutlined.7dae0225.js";import"./index.8c7a9c9a.js";import"./formValidateService.c9ec958e.js";var S=w({name:"CategoryPathManagement",components:{BasicTable:k,PageWrapper:A,EditModal:v,TableAction:B},setup(){const{t:e}=T(),{createMessage:m,createConfirm:j}=x(),[b,{openDrawer:r}]=E(),[h,{reload:c,getSelectRowKeys:p}]=O({title:e("lamp.materials.categoryPath.table.title"),api:M,columns:$,formConfig:{labelWidth:120,schemas:R},beforeFetch:I,useSearchForm:!0,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:160,title:e("common.column.action"),dataIndex:"action",slots:{customRender:"action"}}});function d(t,i){i.stopPropagation(),r(!0,{record:t,type:f.COPY})}function l(){r(!0,{type:f.ADD})}function u(t,i){i.stopPropagation(),r(!0,{record:t,type:f.EDIT})}function o(){c()}async function g(t){await W(t),m.success(e("common.tips.deleteSuccess")),o()}function C(t,i){i.stopPropagation(),(t==null?void 0:t.id)&&g([t.id])}function D(){const t=p();if(!t||t.length<=0){m.warning(e("common.tips.pleaseSelectTheData"));return}j({iconType:"warning",content:e("common.tips.confirmDelete"),onOk:async()=>{await g(t)}})}return{t:e,registerTable:h,registerDrawer:b,handleAdd:l,handleCopy:d,handleEdit:u,handleDelete:C,handleSuccess:o,handleBatchDelete:D}}});function U(e,m,j,b,r,h){const c=a("a-button"),p=a("TableAction"),d=a("BasicTable"),l=a("EditModal"),u=a("PageWrapper");return F(),P(u,{dense:"",contentFullHeight:"",fixedHeight:""},{default:s(()=>[n(d,{onRegister:e.registerTable},{toolbar:s(()=>[n(c,{type:"primary",onClick:e.handleBatchDelete},{default:s(()=>[y(_(e.t("common.title.delete")),1)]),_:1},8,["onClick"]),n(c,{type:"primary",onClick:e.handleAdd},{default:s(()=>[y(_(e.t("common.title.add")),1)]),_:1},8,["onClick"])]),action:s(({record:o})=>[n(p,{actions:[{label:e.t("common.title.edit"),onClick:e.handleEdit.bind(null,o)},{label:e.t("common.title.copy"),onClick:e.handleCopy.bind(null,o)},{label:e.t("common.title.delete"),color:"error",popConfirm:{title:e.t("common.tips.confirmDelete"),confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),n(l,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}S.render=U;export default S;
