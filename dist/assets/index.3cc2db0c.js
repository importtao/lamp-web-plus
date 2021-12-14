import{d as C,j as T,F as x,r as n,o as F,n as k,J as s,p as a,L as S,q as _}from"./index.b361f078.js";import{_ as B}from"./TableImg.9360aa8a.js";import{f as O}from"./BasicForm.13ecb12b.js";import{u as P}from"./useTable.ea39631d.js";import{_ as A}from"./PageWrapper.3df1718a.js";import{u as E}from"./useDrawer.3cc723e3.js";import{h as I}from"./common.1ec3dc60.js";import{A as j}from"./commonEnum.da040d67.js";import{_ as v,p as M,c as $,s as R,r as W}from"./Edit.14abc2d9.js";import"./vendor.352e3120.js";import"./useForm.ac288eb4.js";import"./index.80320b3c.js";import"./UpOutlined.cbb592c6.js";import"./index.08bfe127.js";import"./index.ee85ced9.js";import"./uuid.2b29000c.js";import"./get.cbc20f33.js";import"./useWindowSizeFn.d25090e5.js";import"./useModal.7bdad3e3.js";import"./FullscreenOutlined.86c5b021.js";import"./onMountedOrActivated.db240d29.js";import"./useSortable.622674e9.js";import"./SettingOutlined.f4d9e1f5.js";import"./index.8d41a8b1.js";import"./RedoOutlined.2709deaa.js";import"./useFullScreen.541ad79f.js";import"./index.30914b74.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.1cc54c32.js";import"./conductUtil.7ef77030.js";import"./index.325fce14.js";import"./scrollTo.6277e2ee.js";import"./useBreakpoint.3b9cff8d.js";import"./responsiveObserve.16e475dd.js";import"./useExpose.0ed0f0b1.js";import"./index.fe2e064e.js";import"./useFormItem.17a96bc3.js";import"./iconUtil.e9686cd8.js";import"./_baseSet.60a402c1.js";import"./hasIn.661f69c5.js";import"./FileOutlined.a4627299.js";import"./user.449909fc.js";import"./transButton.7b09546d.js";import"./DeleteOutlined.eab5616f.js";import"./index.fa7b5b48.js";import"./index.781b32b3.js";import"./index.1c4eb95d.js";import"./uniqBy.22bab247.js";import"./_baseIteratee.700ae08f.js";import"./_baseProperty.74f89655.js";import"./findIndex.fe35620d.js";import"./toInteger.f515429e.js";import"./index.c25573d6.js";import"./download.8a0fd70b.js";import"./index.e7aa41c1.js";import"./dayjs.c73a8766.js";import"./index.57e65500.js";import"./Col.4346c2f2.js";import"./useSize.5dcbe36a.js";import"./index.6cab1e04.js";import"./usePageContext.48026c97.js";import"./index.2682bd6c.js";import"./index.ad62d489.js";import"./ArrowLeftOutlined.9183eb3a.js";import"./index.c407339a.js";import"./formValidateService.703a8ce6.js";var y=C({name:"StationManagement",components:{BasicTable:B,PageWrapper:A,EditModal:v,TableAction:O},setup(){const{t:e}=T(),{createMessage:c,createConfirm:b}=x(),[f,{openDrawer:r}]=E(),[g,{reload:m,getSelectRowKeys:p}]=P({title:e("lamp.org.station.table.title"),api:M,columns:$,formConfig:{labelWidth:120,schemas:R},beforeFetch:I,useSearchForm:!0,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:160,title:e("common.column.action"),dataIndex:"action",slots:{customRender:"action"}}});function d(t,i){i.stopPropagation(),r(!0,{record:t,type:j.COPY})}function l(){r(!0,{type:j.ADD})}function u(t,i){i.stopPropagation(),r(!0,{record:t,type:j.EDIT})}function o(){m()}async function h(t){await W(t),c.success(e("common.tips.deleteSuccess")),o()}function D(t,i){i.stopPropagation(),(t==null?void 0:t.id)&&h([t.id])}function w(){const t=p();if(!t||t.length<=0){c.warning(e("common.tips.pleaseSelectTheData"));return}b({iconType:"warning",content:e("common.tips.confirmDelete"),onOk:async()=>{await h(t)}})}return{t:e,registerTable:g,registerDrawer:f,handleAdd:l,handleCopy:d,handleEdit:u,handleDelete:D,handleSuccess:o,handleBatchDelete:w}}});function U(e,c,b,f,r,g){const m=n("a-button"),p=n("TableAction"),d=n("BasicTable"),l=n("EditModal"),u=n("PageWrapper");return F(),k(u,{dense:"",contentFullHeight:"",fixedHeight:""},{default:s(()=>[a(d,{onRegister:e.registerTable},{toolbar:s(()=>[a(m,{type:"primary",onClick:e.handleBatchDelete},{default:s(()=>[S(_(e.t("common.title.delete")),1)]),_:1},8,["onClick"]),a(m,{type:"primary",onClick:e.handleAdd},{default:s(()=>[S(_(e.t("common.title.add")),1)]),_:1},8,["onClick"])]),action:s(({record:o})=>[a(p,{actions:[{label:e.t("common.title.edit"),onClick:e.handleEdit.bind(null,o)},{label:e.t("common.title.copy"),onClick:e.handleCopy.bind(null,o)},{label:e.t("common.title.delete"),color:"error",popConfirm:{title:e.t("common.tips.confirmDelete"),confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),a(l,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}y.render=U;export default y;
